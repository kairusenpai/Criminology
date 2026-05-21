// Machine Learning-Based Performance Analysis System
// Analyzes student performance to identify strengths, weaknesses, and provide study recommendations

class PerformanceAnalyzer {
    constructor() {
        this.performanceData = this.loadPerformanceData();
    }

    // Load performance data from localStorage
    loadPerformanceData() {
        const stored = localStorage.getItem('criminology_performance');
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            totalQuizzes: 0,
            subjectScores: {},
            questionHistory: [],
            lastAnalysis: null
        };
    }

    // Save performance data to localStorage
    savePerformanceData() {
        localStorage.setItem('criminology_performance', JSON.stringify(this.performanceData));
    }

    // Record quiz results
    recordQuiz(subject, score, totalQuestions, answers) {
        if (!this.performanceData.subjectScores[subject]) {
            this.performanceData.subjectScores[subject] = {
                attempts: 0,
                correct: 0,
                total: 0,
                history: []
            };
        }

        const subjectData = this.performanceData.subjectScores[subject];
        subjectData.attempts++;
        subjectData.correct += score;
        subjectData.total += totalQuestions;
        subjectData.history.push({
            date: new Date().toISOString(),
            score: score,
            total: totalQuestions,
            percentage: (score / totalQuestions) * 100
        });

        this.performanceData.totalQuizzes++;
        this.performanceData.questionHistory.push({
            subject: subject,
            date: new Date().toISOString(),
            score: score,
            total: totalQuestions,
            answers: answers
        });

        this.savePerformanceData();
    }

    // Calculate performance metrics for a subject
    getSubjectMetrics(subject) {
        const data = this.performanceData.subjectScores[subject];
        if (!data || data.total === 0) {
            return null;
        }

        const averageScore = (data.correct / data.total) * 100;
        const recentHistory = data.history.slice(-5); // Last 5 attempts
        const recentAverage = recentHistory.length > 0 
            ? recentHistory.reduce((sum, h) => sum + h.percentage, 0) / recentHistory.length 
            : 0;

        // Calculate trend (improving, declining, or stable)
        let trend = 'stable';
        if (recentHistory.length >= 2) {
            const firstRecent = recentHistory[0].percentage;
            const lastRecent = recentHistory[recentHistory.length - 1].percentage;
            if (lastRecent > firstRecent + 5) trend = 'improving';
            else if (lastRecent < firstRecent - 5) trend = 'declining';
        }

        return {
            subject: subject,
            averageScore: averageScore,
            attempts: data.attempts,
            recentAverage: recentAverage,
            trend: trend,
            totalQuestions: data.total,
            correctAnswers: data.correct
        };
    }

    // Get all subject metrics
    getAllSubjectMetrics() {
        const subjects = getAllSubjects();
        const metrics = {};
        subjects.forEach(subject => {
            const metric = this.getSubjectMetrics(subject.key);
            if (metric) {
                metrics[subject.key] = metric;
            }
        });
        return metrics;
    }

    // Identify strengths (subjects with high performance)
    identifyStrengths() {
        const metrics = this.getAllSubjectMetrics();
        const strengths = [];

        Object.entries(metrics).forEach(([subjectKey, metric]) => {
            if (metric.averageScore >= 75 && metric.attempts >= 2) {
                strengths.push({
                    subject: subjectKey,
                    score: metric.averageScore,
                    trend: metric.trend
                });
            }
        });

        // Sort by score descending
        strengths.sort((a, b) => b.score - a.score);
        return strengths;
    }

    // Identify weaknesses (subjects needing improvement)
    identifyWeaknesses() {
        const metrics = this.getAllSubjectMetrics();
        const weaknesses = [];

        Object.entries(metrics).forEach(([subjectKey, metric]) => {
            if (metric.averageScore < 70 || metric.trend === 'declining') {
                weaknesses.push({
                    subject: subjectKey,
                    score: metric.averageScore,
                    trend: metric.trend,
                    priority: this.calculatePriority(metric)
                });
            }
        });

        // Sort by priority (highest first)
        weaknesses.sort((a, b) => b.priority - a.priority);
        return weaknesses;
    }

    // Calculate priority for study recommendations
    calculatePriority(metric) {
        let priority = 0;
        
        // Lower score = higher priority
        priority += (100 - metric.averageScore);
        
        // Declining trend = higher priority
        if (metric.trend === 'declining') priority += 20;
        
        // Few attempts = moderate priority (needs more data)
        if (metric.attempts < 3) priority += 10;
        
        return priority;
    }

    // Generate ML-powered study recommendations
    generateRecommendations() {
        const metrics = this.getAllSubjectMetrics();
        const strengths = this.identifyStrengths();
        const weaknesses = this.identifyWeaknesses();
        const recommendations = [];

        // Analyze overall performance
        const overallStats = this.getOverallStatistics();
        
        // Recommendation 1: Focus on weakest subjects
        if (weaknesses.length > 0) {
            const weakest = weaknesses[0];
            const subjectInfo = getSubjectInfo(weakest.subject);
            recommendations.push({
                type: 'priority',
                title: `Focus on ${subjectInfo.name}`,
                description: `Your performance in ${subjectInfo.name} is ${weakest.score.toFixed(1)}%. This should be your top priority. 
                            ${weakest.trend === 'declining' ? 'Your performance is declining, so immediate attention is needed.' : 
                            'Consistent practice in this area will significantly improve your overall score.'}`,
                action: `Take 20-30 questions from ${subjectInfo.name} daily for the next week.`,
                subject: weakest.subject
            });
        }

        // Recommendation 2: Maintain strengths
        if (strengths.length > 0) {
            const strongest = strengths[0];
            const subjectInfo = getSubjectInfo(strongest.subject);
            recommendations.push({
                type: 'maintenance',
                title: `Maintain Excellence in ${subjectInfo.name}`,
                description: `You're performing well in ${subjectInfo.name} (${strongest.score.toFixed(1)}%). Continue regular practice 
                            to maintain this strength, but don't over-focus on it at the expense of weaker areas.`,
                action: `Review ${subjectInfo.name} topics once a week with 10-15 questions to stay sharp.`,
                subject: strongest.subject
            });
        }

        // Recommendation 3: Address declining performance
        const decliningSubjects = weaknesses.filter(w => w.trend === 'declining');
        if (decliningSubjects.length > 0) {
            const subjectInfo = getSubjectInfo(decliningSubjects[0].subject);
            recommendations.push({
                type: 'urgent',
                title: `Reverse Declining Trend in ${subjectInfo.name}`,
                description: `Your performance in ${subjectInfo.name} has been declining recently. This may indicate 
                            fatigue, lack of focus, or need for different study methods.`,
                action: `Try a different approach: study the theory first, then practice. Take shorter, more frequent quiz sessions.`,
                subject: decliningSubjects[0].subject
            });
        }

        // Recommendation 4: Balance study time
        if (Object.keys(metrics).length >= 3) {
            const avgScore = overallStats.averageScore;
            if (avgScore < 70) {
                recommendations.push({
                    type: 'strategy',
                    title: 'Increase Overall Study Time',
                    description: `Your overall average is ${avgScore.toFixed(1)}%. To reach board exam readiness (75%+), 
                                you need to increase study time and focus on understanding concepts rather than memorization.`,
                    action: 'Dedicate at least 2-3 hours daily to study across all subjects, with extra time on weak areas.',
                    subject: 'all'
                });
            }
        }

        // Recommendation 5: Practice situational questions
        const situationalPerformance = this.analyzeSituationalPerformance();
        if (situationalPerformance && situationalPerformance.averageScore < 70) {
            recommendations.push({
                type: 'specific',
                title: 'Improve Situational Question Performance',
                description: `Board exams heavily feature situational problems. Your performance on these questions (${situationalPerformance.averageScore.toFixed(1)}%) 
                            needs improvement. Focus on understanding the practical application of concepts.`,
                action: 'Practice situational questions specifically. Read the scenarios carefully and identify the key issues before answering.',
                subject: 'all'
            });
        }

        // Recommendation 6: Review incorrect answers
        if (this.performanceData.questionHistory.length > 0) {
            recommendations.push({
                type: 'review',
                title: 'Review Incorrect Answers',
                description: `Learning from mistakes is crucial. Review your incorrect answers to understand why you got them wrong 
                            and avoid similar mistakes in the future.`,
                action: 'After each quiz, spend time reviewing the explanations for incorrect answers.',
                subject: 'all'
            });
        }

        return recommendations;
    }

    // Analyze performance on situational questions
    analyzeSituationalPerformance() {
        let correct = 0;
        let total = 0;

        this.performanceData.questionHistory.forEach(quiz => {
            quiz.answers.forEach(answer => {
                if (answer.isSituational) {
                    total++;
                    if (answer.isCorrect) correct++;
                }
            });
        });

        if (total === 0) return null;
        return {
            correct: correct,
            total: total,
            averageScore: (correct / total) * 100
        };
    }

    // Get overall statistics
    getOverallStatistics() {
        let totalCorrect = 0;
        let totalQuestions = 0;
        const subjectMetrics = this.getAllSubjectMetrics();

        Object.values(subjectMetrics).forEach(metric => {
            totalCorrect += metric.correctAnswers;
            totalQuestions += metric.totalQuestions;
        });

        return {
            totalQuizzes: this.performanceData.totalQuizzes,
            totalQuestions: totalQuestions,
            totalCorrect: totalCorrect,
            averageScore: totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0,
            subjectsAttempted: Object.keys(subjectMetrics).length
        };
    }

    // Predict board exam readiness
    predictReadiness() {
        const metrics = this.getAllSubjectMetrics();
        const subjects = getAllSubjects();
        
        if (Object.keys(metrics).length < 4) {
            return {
                ready: false,
                confidence: 'low',
                message: 'Take more quizzes across different subjects to get an accurate assessment.',
                score: 0
            };
        }

        let weightedScore = 0;
        let totalWeight = 0;
        let minScore = 100;

        subjects.forEach(subject => {
            const metric = metrics[subject.key];
            if (!metric) return;
            const weight = subject.boardWeight || (100 / subjects.length);
            weightedScore += metric.averageScore * weight;
            totalWeight += weight;
            if (metric.averageScore < minScore) minScore = metric.averageScore;
        });

        const averageScore = totalWeight > 0 ? weightedScore / totalWeight : 0;
        const subjectCount = Object.keys(metrics).length;
        const ready = averageScore >= 75 && minScore >= 65;

        return {
            ready: ready,
            confidence: subjectCount >= 6 ? 'high' : subjectCount >= 4 ? 'medium' : 'low',
            message: ready 
                ? 'You show good readiness for the board exam. Continue practicing to maintain your level.'
                : `Focus on improving your weakest subjects. Your average is ${averageScore.toFixed(1)}%. Target 75%+ across all subjects.`,
            score: averageScore
        };
    }

    // Get detailed analysis for dashboard
    getDashboardData() {
        return {
            overall: this.getOverallStatistics(),
            subjectMetrics: this.getAllSubjectMetrics(),
            strengths: this.identifyStrengths(),
            weaknesses: this.identifyWeaknesses(),
            recommendations: this.generateRecommendations(),
            readiness: this.predictReadiness(),
            situational: this.analyzeSituationalPerformance()
        };
    }

    // Reset all performance data
    resetData() {
        localStorage.removeItem('criminology_performance');
        this.performanceData = this.loadPerformanceData();
    }
}

// Initialize the analyzer
const analyzer = new PerformanceAnalyzer();
