// Criminology Question Database - Philippine Board Exam Practice
// 6 Core PRC Licensure Examination Subjects (600 questions)
// Weights: CJ 20% | LE 15% | CDI 20% | Crim/Forensic 15% | Corrections 10% | Criminology 20%

const criminologySubjects = {
    criminalJurisprudence: {
        name: "Criminal Jurisprudence and Procedure",
        boardWeight: 20,
        description: "Philippine criminal law (RPC Books 1 & 2), criminal procedure, rules of evidence, and human rights in the justice system.",
        topics: [
            "Criminal Law (Book 1 & 2)",
            "Criminal Procedure",
            "Evidence",
            "Human Rights Education"
        ],
        questions: [
            {
                id: "cjur_1",
                topic: "Criminal Procedure",
                question: "A police officer, without a warrant, enters a suspect's home to arrest him for a crime punishable by 6 months imprisonment. Is this arrest valid?",
                options: [
                "Yes, because crimes punishable by 6 months or less allow warrantless arrest",
                "No, because warrantless arrest is only allowed for crimes punishable by more than 6 months",
                "Yes, because police officers have inherent authority to enter homes",
                "No, because a warrant is always required for home entry"
                ],
                correct: 1,
                explanation: "Under the Revised Penal Code, warrantless arrest in a person's home is only valid for crimes punishable by more than 6 months imprisonment.",
                isSituational: true
            },
            {
                id: "cjur_2",
                topic: "Criminal Law (Book 1 & 2)",
                question: "A person kills another in the heat of passion upon discovering his spouse in the act of adultery. What criminal circumstance applies?",
                options: [
                "Justifying circumstance",
                "Exempting circumstance",
                "Mitigating circumstance",
                "Aggravating circumstance"
                ],
                correct: 2,
                explanation: "This is a mitigating circumstance under Article 13 (paragraph 7) - immediate vindication of a grave offense.",
                isSituational: true
            },
            {
                id: "cjur_3",
                topic: "Criminal Law (Book 1 & 2)",
                question: "A security guard shoots and kills an armed robber who was pointing a gun at customers. What is the legal classification of this act?",
                options: [
                "Homicide",
                "Murder",
                "Justified homicide (self-defense)",
                "Reckless imprudence"
                ],
                correct: 2,
                explanation: "This is justified as self-defense under Article 11 of the Revised Penal Code - unlawful aggression was present and the defense was necessary.",
                isSituational: true
            },
            {
                id: "cjur_4",
                topic: "Criminal Law (Book 1 & 2)",
                question: "A 16-year-old commits theft. Under the Juvenile Justice and Welfare Act, what is the primary focus of intervention?",
                options: [
                "Punishment and imprisonment",
                "Rehabilitation and reintegration",
                "Deterrence through harsh penalties",
                "Restitution to victims only"
                ],
                correct: 1,
                explanation: "The JJWA emphasizes rehabilitation, diversion, and reintegration rather than punishment for juvenile offenders.",
                isSituational: true
            },
            {
                id: "cjur_5",
                topic: "Criminal Law (Book 1 & 2)",
                question: "A person is found guilty of murder but was under the influence of alcohol at the time. How does this affect his criminal liability?",
                options: [
                "He is exempt from criminal liability",
                "He is entitled to a mitigating circumstance",
                "The alcohol has no legal effect",
                "He cannot be prosecuted"
                ],
                correct: 1,
                explanation: "Intoxication can be a mitigating circumstance if it is not habitual or intentional, under Article 13 of the RPC.",
                isSituational: true
            },
            {
                id: "cjur_6",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the prescriptive period for filing a complaint for light penalties?",
                options: [
                "5 years",
                "10 years",
                "15 years",
                "20 years"
                ],
                correct: 0,
                explanation: "Under Article 90 of the RPC, light penalties prescribe in 5 years.",
                isSituational: false
            },
            {
                id: "cjur_7",
                topic: "Criminal Law (Book 1 & 2)",
                question: "Which of the following is NOT an element of robbery?",
                options: [
                "Taking of personal property",
                "Belonging to another",
                "With intent to gain",
                "Use of force upon things"
                ],
                correct: 3,
                explanation: "Use of force upon things is an aggravating circumstance, not a required element. Robbery can be committed by violence against or intimidation of persons.",
                isSituational: false
            },
            {
                id: "cjur_8",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the difference between homicide and murder under Philippine law?",
                options: [
                "Murder requires intent to kill",
                "Murder includes qualifying aggravating circumstances",
                "Homicide is always accidental",
                "There is no difference"
                ],
                correct: 1,
                explanation: "Murder is homicide qualified by aggravating circumstances such as treachery, evident premeditation, cruelty, etc.",
                isSituational: false
            },
            {
                id: "cjur_9",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the principle of 'nullum crimen sine lege'?",
                options: [
                "No crime without law",
                "No punishment without law",
                "No person above the law",
                "No trial without evidence"
                ],
                correct: 0,
                explanation: "Nullum crimen sine lege means there is no crime when there is no law that punishes it.",
                isSituational: false
            },
            {
                id: "cjur_10",
                topic: "Criminal Law (Book 1 & 2)",
                question: "Which circumstance exempts a person from criminal liability?",
                options: [
                "Self-defense",
                "Insanity",
                "Passion and obfuscation",
                "Voluntary surrender"
                ],
                correct: 1,
                explanation: "Insanity is an exempting circumstance under Article 12 of the RPC, while self-defense is a justifying circumstance.",
                isSituational: false
            },
            {
                id: "cjur_11",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the prescriptive period for filing a complaint for grave penalties?",
                options: [
                "5 years",
                "10 years",
                "15 years",
                "20 years"
                ],
                correct: 3,
                explanation: "Under Article 90 of the RPC, grave penalties prescribe in 20 years.",
                isSituational: false
            },
            {
                id: "cjur_12",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the prescriptive period for filing a complaint for correctional penalties?",
                options: [
                "5 years",
                "10 years",
                "15 years",
                "20 years"
                ],
                correct: 1,
                explanation: "Under Article 90 of the RPC, correctional penalties prescribe in 10 years.",
                isSituational: false
            },
            {
                id: "cjur_13",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the prescriptive period for filing a complaint for capital penalties?",
                options: [
                "5 years",
                "10 years",
                "15 years",
                "20 years"
                ],
                correct: 3,
                explanation: "Under Article 90 of the RPC, capital penalties prescribe in 20 years.",
                isSituational: false
            },
            {
                id: "cjur_14",
                topic: "Criminal Law (Book 1 & 2)",
                question: "Which of the following is a justifying circumstance?",
                options: [
                "Self-defense",
                "Insanity",
                "Minority",
                "Accident"
                ],
                correct: 0,
                explanation: "Self-defense is a justifying circumstance under Article 11 of the RPC.",
                isSituational: false
            },
            {
                id: "cjur_15",
                topic: "Criminal Law (Book 1 & 2)",
                question: "Which of the following is an exempting circumstance?",
                options: [
                "Self-defense",
                "Insanity",
                "Passion and obfuscation",
                "Voluntary surrender"
                ],
                correct: 1,
                explanation: "Insanity is an exempting circumstance under Article 12 of the RPC.",
                isSituational: false
            },
            {
                id: "cjur_16",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'treachery' as an aggravating circumstance?",
                options: [
                "Using means to ensure execution without risk to offender",
                "Acting with disrespect to authority",
                "Taking advantage of superior strength",
                "Employing means to weaken defense"
                ],
                correct: 0,
                explanation: "Treachery involves employing means to ensure the execution of the crime without risk to the offender arising from the defense of the victim.",
                isSituational: false
            },
            {
                id: "cjur_17",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'evident premeditation'?",
                options: [
                "Planning the crime beforehand",
                "Acting on impulse",
                "Committing crime accidentally",
                "Being influenced by alcohol"
                ],
                correct: 0,
                explanation: "Evident premeditation means the offender reflected upon the commission of the crime before executing it.",
                isSituational: false
            },
            {
                id: "cjur_18",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'cruelty' as an aggravating circumstance?",
                options: [
                "Causing unnecessary physical suffering",
                "Using a weapon",
                "Acting with treachery",
                "Taking advantage of position"
                ],
                correct: 0,
                explanation: "Cruelty involves causing unnecessary physical suffering to the victim, increasing the pain beyond what is necessary to commit the crime.",
                isSituational: false
            },
            {
                id: "cjur_19",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the penalty for parricide under the Revised Penal Code?",
                options: [
                "Reclusion perpetua to death",
                "Reclusion temporal",
                "Prision mayor",
                "Prision correccional"
                ],
                correct: 0,
                explanation: "Parricide is punishable by reclusion perpetua to death under Article 246 of the RPC.",
                isSituational: false
            },
            {
                id: "cjur_20",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the penalty for murder under the Revised Penal Code?",
                options: [
                "Reclusion perpetua to death",
                "Reclusion temporal",
                "Prision mayor",
                "Prision correccional"
                ],
                correct: 0,
                explanation: "Murder is punishable by reclusion perpetua to death under Article 248 of the RPC.",
                isSituational: false
            },
            {
                id: "cjur_21",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is the penalty for homicide under the Revised Penal Code?",
                options: [
                "Reclusion perpetua",
                "Reclusion temporal",
                "Prision mayor",
                "Prision correccional"
                ],
                correct: 1,
                explanation: "Homicide is punishable by reclusion temporal under Article 249 of the RPC.",
                isSituational: false
            },
            {
                id: "cjur_22",
                topic: "Criminal Procedure",
                question: "What is 'complex crime' under Philippine law?",
                options: [
                "A crime with multiple offenders",
                "A single act resulting in multiple offenses",
                "A crime with multiple victims",
                "A crime requiring complex planning"
                ],
                correct: 1,
                explanation: "A complex crime occurs when a single act results in two or more grave or less grave felonies.",
                isSituational: false
            },
            {
                id: "cjur_23",
                topic: "Evidence",
                question: "What is 'continued crime'?",
                options: [
                "Multiple acts with one criminal intent",
                "One act with multiple results",
                "Crimes committed over time",
                "Crimes with multiple offenders"
                ],
                correct: 0,
                explanation: "Continued crime involves multiple acts committed with a single criminal impulse or plan.",
                isSituational: false
            },
            {
                id: "cjur_24",
                topic: "Human Rights Education",
                question: "What is the principle of 'double jeopardy'?",
                options: [
                "Being tried twice for the same offense",
                "Being charged with two crimes",
                "Having two victims",
                "Using two weapons"
                ],
                correct: 0,
                explanation: "Double jeopardy prohibits being tried twice for the same offense when there has been a valid conviction or acquittal.",
                isSituational: false
            },
            {
                id: "cjur_25",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'attempted felony'?",
                options: [
                "When the offender commences commission but fails due to causes other than spontaneous desistance",
                "When all elements are executed but felony not produced",
                "When offender decides not to proceed",
                "When crime is completed"
                ],
                correct: 0,
                explanation: "Attempted felony occurs when the offender commences the commission but fails to accomplish it due to causes other than spontaneous desistance.",
                isSituational: false
            },
            {
                id: "cjur_26",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'frustrated felony'?",
                options: [
                "When offender commences but fails",
                "When all elements are executed but felony not produced by cause independent of offender's will",
                "When offender decides not to proceed",
                "When crime is completed"
                ],
                correct: 1,
                explanation: "Frustrated felony occurs when all elements are executed but the felony is not produced due to causes independent of the offender's will.",
                isSituational: false
            },
            {
                id: "cjur_27",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'consummated felony'?",
                options: [
                "When offender commences but fails",
                "When all elements executed but felony not produced",
                "When all elements of execution are present and felony is produced",
                "When offender decides not to proceed"
                ],
                correct: 2,
                explanation: "Consummated felony occurs when all elements of execution are present and the felony is produced as a result.",
                isSituational: false
            },
            {
                id: "cjur_28",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'conspiracy' in criminal law?",
                options: [
                "When two or more persons agree to commit a crime",
                "When one person plans a crime",
                "When crimes are committed accidentally",
                "When police investigate together"
                ],
                correct: 0,
                explanation: "Conspiracy exists when two or more persons agree and decide to commit a felony.",
                isSituational: false
            },
            {
                id: "cjur_29",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'proposal' in criminal law?",
                options: [
                "When a person proposes to another the execution of a felony",
                "When a crime is completed",
                "When evidence is presented",
                "When sentence is given"
                ],
                correct: 0,
                explanation: "Proposal occurs when a person proposes to another the execution of a felony.",
                isSituational: false
            },
            {
                id: "cjur_30",
                topic: "Criminal Procedure",
                question: "What is 'accessory' liability?",
                options: [
                "Participating in the criminal design",
                "Cooperating in execution by indispensable act",
                "Profiting or assisting after commission without participation",
                "Being the main perpetrator"
                ],
                correct: 2,
                explanation: "Accessory liability applies to those who profit or assist after the commission without participating in the criminal design or execution.",
                isSituational: false
            },
            {
                id: "cjur_31",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'principal' liability?",
                options: [
                "Those who take direct part in execution",
                "Those who assist after commission",
                "Those who witness the crime",
                "Those who investigate the crime"
                ],
                correct: 0,
                explanation: "Principals are those who take direct part in the execution of the felony or cooperate by indispensable acts.",
                isSituational: false
            },
            {
                id: "cjur_32",
                topic: "Human Rights Education",
                question: "What is 'accomplice' liability?",
                options: [
                "Taking direct part in execution",
                "Cooperating by indispensable act",
                "Cooperating by non-indispensable act",
                "Assisting after commission"
                ],
                correct: 2,
                explanation: "Accomplices cooperate in the execution by non-indispensable acts.",
                isSituational: false
            },
            {
                id: "cjur_33",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'imprudence'?",
                options: [
                "Intentional commission of crime",
                "Lack of foresight or lack of skill",
                "Self-defense",
                "Accident"
                ],
                correct: 1,
                explanation: "Imprudence involves lack of foresight (negligence) or lack of skill (imprudence proper).",
                isSituational: false
            },
            {
                id: "cjur_34",
                topic: "Criminal Procedure",
                question: "What is 'reckless imprudence'?",
                options: [
                "Lack of foresight",
                "Lack of skill",
                "Doing something without due care",
                "Intentional act"
                ],
                correct: 2,
                explanation: "Reckless imprudence involves doing something without due care and caution.",
                isSituational: false
            },
            {
                id: "cjur_35",
                topic: "Evidence",
                question: "What is 'criminal negligence'?",
                options: [
                "Intentional wrongdoing",
                "Lack of foresight that could have been used with ordinary care",
                "Self-defense",
                "Accident"
                ],
                correct: 1,
                explanation: "Criminal negligence is lack of foresight that could have been used with ordinary care and caution.",
                isSituational: false
            },
            {
                id: "cjur_36",
                topic: "Human Rights Education",
                question: "What is 'abuse of superior strength'?",
                options: [
                "Using a weapon",
                "Taking advantage of superiority in number or weapons",
                "Acting with treachery",
                "Using means to weaken defense"
                ],
                correct: 1,
                explanation: "Abuse of superior strength involves taking advantage of superiority in number or weapons to ensure commission without risk.",
                isSituational: false
            },
            {
                id: "cjur_37",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'disregard of rank, age, or sex'?",
                options: [
                "Respecting authority",
                "Offending someone of higher rank or age",
                "Treating everyone equally",
                "Following proper protocol"
                ],
                correct: 1,
                explanation: "This aggravating circumstance applies when the offender intentionally offends or insults the rank, age, or sex of the victim.",
                isSituational: false
            },
            {
                id: "cjur_38",
                topic: "Criminal Procedure",
                question: "What is 'abuse of confidence'?",
                options: [
                "Having trust in someone",
                "Abusing trust placed by the offended party",
                "Building confidence",
                "Being confident in one's actions"
                ],
                correct: 1,
                explanation: "Abuse of confidence occurs when the offender abuses the trust placed by the offended party.",
                isSituational: false
            },
            {
                id: "cjur_39",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'craft' as an aggravating circumstance?",
                options: [
                "Using artistic skills",
                "Using means to ensure execution without risk",
                "Building something",
                "Manual labor"
                ],
                correct: 1,
                explanation: "Craft involves using intellectual trickery or cunning to ensure the commission of the crime.",
                isSituational: false
            },
            {
                id: "cjur_40",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'disguise' as an aggravating circumstance?",
                options: [
                "Wearing a costume",
                "Concealing identity to ensure execution",
                "Being honest",
                "Showing true identity"
                ],
                correct: 1,
                explanation: "Disguise involves concealing one's identity to ensure the commission of the crime.",
                isSituational: false
            },
            {
                id: "cjur_41",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'nighttime' as an aggravating circumstance?",
                options: [
                "Any crime committed at night",
                "When nighttime is specially sought to facilitate crime",
                "When victim is sleeping",
                "When offender works at night"
                ],
                correct: 1,
                explanation: "Nighttime is aggravating only when it is specially sought to facilitate the commission of the crime.",
                isSituational: false
            },
            {
                id: "cjur_42",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'uninhabited place' as an aggravating circumstance?",
                options: [
                "Any empty house",
                "Place providing opportunity for crime due to isolation",
                "Place with no furniture",
                "Place under construction"
                ],
                correct: 1,
                explanation: "Uninhabited place refers to a location that provides opportunity for crime due to its isolation or lack of people.",
                isSituational: false
            },
            {
                id: "cjur_43",
                topic: "Evidence",
                question: "What is 'recidivism'?",
                options: [
                "First-time offender",
                "Person who repeats offense after final judgment",
                "Person who confesses",
                "Person who is pardoned"
                ],
                correct: 1,
                explanation: "Recidivism applies when a person repeats the offense after final judgment.",
                isSituational: false
            },
            {
                id: "cjur_44",
                topic: "Human Rights Education",
                question: "What is 'reiteracion' or 'habituality'?",
                options: [
                "First offense",
                "Repeating offense after being punished for different crime",
                "Confessing to crime",
                "Being pardoned"
                ],
                correct: 1,
                explanation: "Reiteracion applies when a person repeats an offense after being punished for a different crime.",
                isSituational: false
            },
            {
                id: "cjur_45",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'quasi-recidivism'?",
                options: [
                "First offense",
                "Committing new crime before serving sentence for previous",
                "Being pardoned",
                "Confessing to crime"
                ],
                correct: 1,
                explanation: "Quasi-recidivism occurs when a person commits a new crime before serving sentence for a previous conviction.",
                isSituational: false
            },
            {
                id: "cjur_46",
                topic: "Criminal Procedure",
                question: "What is 'escape of prisoner'?",
                options: [
                "Prisoner being released",
                "Prisoner leaving confinement without legal permission",
                "Prisoner being transferred",
                "Prisoner serving sentence"
                ],
                correct: 1,
                explanation: "Escape of prisoner involves leaving confinement without legal permission.",
                isSituational: false
            },
            {
                id: "cjur_47",
                topic: "Evidence",
                question: "What is 'evasion of sentence'?",
                options: [
                "Serving sentence properly",
                "Failing to surrender after sentence",
                "Being pardoned",
                "Appealing sentence"
                ],
                correct: 1,
                explanation: "Evasion of sentence occurs when a convicted person fails to surrender after final judgment.",
                isSituational: false
            },
            {
                id: "cjur_48",
                topic: "Human Rights Education",
                question: "What is 'delivery of prisoner from jail'?",
                options: [
                "Legal release",
                "Illegally removing prisoner from confinement",
                "Prisoner transfer",
                "Prisoner visitation"
                ],
                correct: 1,
                explanation: "Delivery of prisoner from jail involves illegally removing a prisoner from confinement.",
                isSituational: false
            },
            {
                id: "cjur_49",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'corruption of public officials'?",
                options: [
                "Honest officials",
                "Giving gifts to public officials in connection with official duties",
                "Public officials doing their job",
                "Reporting corruption"
                ],
                correct: 1,
                explanation: "Corruption involves giving gifts or presents to public officials in connection with their official duties.",
                isSituational: false
            },
            {
                id: "cjur_50",
                topic: "Criminal Procedure",
                question: "What is 'malversation'?",
                options: [
                "Proper handling of funds",
                "Misappropriating public funds",
                "Donating money",
                "Saving money"
                ],
                correct: 1,
                explanation: "Malversation involves the misappropriation or misapplication of public funds or property by a public officer.",
                isSituational: false
            },
            {
                id: "cjur_51",
                topic: "Evidence",
                question: "What is 'fraud against public treasury'?",
                options: [
                "Paying taxes properly",
                "Depriving government of revenue through deceit",
                "Working for government",
                "Receiving salary"
                ],
                correct: 1,
                explanation: "Fraud against public treasury involves depriving the government of revenue through deceit or false statements.",
                isSituational: false
            },
            {
                id: "cjur_52",
                topic: "Human Rights Education",
                question: "What is 'illegal use of public funds'?",
                options: [
                "Proper use of funds",
                "Using public funds for unauthorized purposes",
                "Donating funds",
                "Saving funds"
                ],
                correct: 1,
                explanation: "Illegal use of public funds involves using public funds for purposes other than those authorized by law.",
                isSituational: false
            },
            {
                id: "cjur_53",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'failure to render accounts'?",
                options: [
                "Proper accounting",
                "Failing to account for public funds",
                "Auditing accounts",
                "Preparing financial statements"
                ],
                correct: 1,
                explanation: "Failure to render accounts occurs when a public officer fails to account for public funds entrusted to them.",
                isSituational: false
            },
            {
                id: "cjur_54",
                topic: "Criminal Procedure",
                question: "What is 'failure to make delivery of public funds'?",
                options: [
                "Delivering funds properly",
                "Refusing to deliver public funds to proper authority",
                "Receiving funds",
                "Transferring funds"
                ],
                correct: 1,
                explanation: "Failure to make delivery occurs when a public officer refuses to deliver public funds to the proper authority.",
                isSituational: false
            },
            {
                id: "cjur_55",
                topic: "Evidence",
                question: "What is 'falsification'?",
                options: [
                "Telling truth",
                "Altering truth with intent to cause damage",
                "Writing correctly",
                "Being honest"
                ],
                correct: 1,
                explanation: "Falsification involves altering the truth with intent to cause damage to a third party.",
                isSituational: false
            },
            {
                id: "cjur_56",
                topic: "Human Rights Education",
                question: "What is 'usurpation of authority'?",
                options: [
                "Having proper authority",
                "Assuming official functions without authority",
                "Delegating authority",
                "Following orders"
                ],
                correct: 1,
                explanation: "Usurpation of authority involves performing official functions without proper authorization.",
                isSituational: false
            },
            {
                id: "cjur_57",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'using fictitious name'?",
                options: [
                "Using real name",
                "Using false name to conceal identity",
                "Changing name legally",
                "Having nickname"
                ],
                correct: 1,
                explanation: "Using fictitious name involves using a false name to conceal identity or commit fraud.",
                isSituational: false
            },
            {
                id: "cjur_58",
                topic: "Criminal Procedure",
                question: "What is 'perjury'?",
                options: [
                "Telling truth in court",
                "Willfully giving false testimony under oath",
                "Being a witness",
                "Taking oath"
                ],
                correct: 1,
                explanation: "Perjury involves willfully giving false testimony while under oath in a judicial proceeding.",
                isSituational: false
            },
            {
                id: "cjur_59",
                topic: "Evidence",
                question: "What is 'false testimony'?",
                options: [
                "True testimony",
                "Giving false statements in judicial proceedings",
                "Being a witness",
                "Testifying voluntarily"
                ],
                correct: 1,
                explanation: "False testimony involves giving false statements in judicial proceedings.",
                isSituational: false
            },
            {
                id: "cjur_60",
                topic: "Human Rights Education",
                question: "What is 'malicious mischief'?",
                options: [
                "Helping others",
                "Deliberately damaging property",
                "Maintaining property",
                "Cleaning property"
                ],
                correct: 1,
                explanation: "Malicious mischief involves deliberately causing damage to property.",
                isSituational: false
            },
            {
                id: "cjur_61",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'arson'?",
                options: [
                "Putting out fire",
                "Intentionally burning property",
                "Building fire safely",
                "Using fire for cooking"
                ],
                correct: 1,
                explanation: "Arson involves intentionally burning property of another person.",
                isSituational: false
            },
            {
                id: "cjur_62",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'theft'?",
                options: [
                "Buying something",
                "Taking property without consent with intent to gain",
                "Borrowing items",
                "Receiving gifts"
                ],
                correct: 1,
                explanation: "Theft involves taking personal property of another without consent and with intent to gain.",
                isSituational: false
            },
            {
                id: "cjur_63",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'robbery'?",
                options: [
                "Peaceful taking",
                "Taking property with violence or intimidation",
                "Buying property",
                "Receiving property"
                ],
                correct: 1,
                explanation: "Robbery involves taking personal property with violence or intimidation against persons or force upon things.",
                isSituational: false
            },
            {
                id: "cjur_64",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'brigandage'?",
                options: [
                "Legal group activity",
                "Armed group for robbery or other crimes",
                "Peaceful assembly",
                "Community gathering"
                ],
                correct: 1,
                explanation: "Brigandage involves an armed group organized for the purpose of committing robbery or other crimes.",
                isSituational: false
            },
            {
                id: "cjur_65",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'swindling'?",
                options: [
                "Honest business",
                "Deceiving another to gain property",
                "Paying debts",
                "Receiving payment"
                ],
                correct: 1,
                explanation: "Swindling involves deceiving another person to gain their property or money.",
                isSituational: false
            },
            {
                id: "cjur_66",
                topic: "Criminal Procedure",
                question: "What is 'estafa'?",
                options: [
                "Honest dealing",
                "Deceit to defraud another",
                "Paying debts",
                "Receiving loans"
                ],
                correct: 1,
                explanation: "Estafa involves using deceit to defraud another person of their property.",
                isSituational: false
            },
            {
                id: "cjur_67",
                topic: "Evidence",
                question: "What is 'chattel mortgage'?",
                options: [
                "Real estate mortgage",
                "Mortgage on personal property",
                "Buying property",
                "Selling property"
                ],
                correct: 1,
                explanation: "Chattel mortgage is a mortgage on personal property (movable property).",
                isSituational: false
            },
            {
                id: "cjur_68",
                topic: "Human Rights Education",
                question: "What is 'kidnapping'?",
                options: [
                "Voluntary travel",
                "Unlawfully depriving liberty of another",
                "Guiding tourists",
                "Family vacation"
                ],
                correct: 1,
                explanation: "Kidnapping involves unlawfully depriving another person of their liberty.",
                isSituational: false
            },
            {
                id: "cjur_69",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'serious illegal detention'?",
                options: [
                "Brief questioning",
                "Detaining person for extended period without legal authority",
                "Police arrest with warrant",
                "Voluntary confinement"
                ],
                correct: 1,
                explanation: "Serious illegal detention involves detaining a person for an extended period without legal authority.",
                isSituational: false
            },
            {
                id: "cjur_70",
                topic: "Criminal Procedure",
                question: "What is 'slavery'?",
                options: [
                "Employment",
                "Buying and selling persons",
                "Voluntary work",
                "Business partnership"
                ],
                correct: 1,
                explanation: "Slavery involves buying, selling, or trading persons as if they were merchandise.",
                isSituational: false
            },
            {
                id: "cjur_71",
                topic: "Evidence",
                question: "What is 'exploitation of child labor'?",
                options: [
                "Children playing",
                "Employing children in hazardous work",
                "Children studying",
                "Family activities"
                ],
                correct: 1,
                explanation: "Exploitation of child labor involves employing children in work that is hazardous or detrimental to their development.",
                isSituational: false
            },
            {
                id: "cjur_72",
                topic: "Human Rights Education",
                question: "What is 'libel'?",
                options: [
                "Complimenting someone",
                "Publicly imputing dishonorable act to another",
                "Private conversation",
                "Writing fiction"
                ],
                correct: 1,
                explanation: "Libel involves publicly imputing a dishonorable act or condition to another person.",
                isSituational: false
            },
            {
                id: "cjur_73",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'slander'?",
                options: [
                "Praising someone",
                "Oral imputation of dishonorable act",
                "Writing a letter",
                "Sending email"
                ],
                correct: 1,
                explanation: "Slander involves the oral imputation of a dishonorable act or condition to another person.",
                isSituational: false
            },
            {
                id: "cjur_74",
                topic: "Criminal Procedure",
                question: "What is 'slander by deed'?",
                options: [
                "Written defamation",
                "Performing acts that dishonor another",
                "Verbal insult",
                "Silent treatment"
                ],
                correct: 1,
                explanation: "Slander by deed involves performing acts that dishonor or discredit another person.",
                isSituational: false
            },
            {
                id: "cjur_75",
                topic: "Evidence",
                question: "What is 'threats'?",
                options: [
                "Making promises",
                "Communicating intent to inflict harm",
                "Giving compliments",
                "Making suggestions"
                ],
                correct: 1,
                explanation: "Threats involve communicating the intent to inflict harm upon another person.",
                isSituational: false
            },
            {
                id: "cjur_76",
                topic: "Human Rights Education",
                question: "What is 'coercion'?",
                options: [
                "Voluntary agreement",
                "Forcing another to do something against will",
                "Friendly persuasion",
                "Mutual consent"
                ],
                correct: 1,
                explanation: "Coercion involves forcing another person to do something against their will through violence or threats.",
                isSituational: false
            },
            {
                id: "cjur_77",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'discovery and revelation of secrets'?",
                options: [
                "Keeping secrets",
                "Revealing secrets without authority",
                "Confidential communication",
                "Private diary"
                ],
                correct: 1,
                explanation: "This crime involves revealing secrets without authority, causing damage to the interested party.",
                isSituational: false
            },
            {
                id: "cjur_78",
                topic: "Criminal Procedure",
                question: "What is 'intrigue to honor'?",
                options: [
                "Praising someone",
                "Revealing vices or defects to discredit",
                "Keeping secrets",
                "Being honest"
                ],
                correct: 1,
                explanation: "Intrigue to honor involves revealing vices or defects of another to discredit them.",
                isSituational: false
            },
            {
                id: "cjur_79",
                topic: "Evidence",
                question: "What is 'incriminating innocent person'?",
                options: [
                "Telling truth",
                "Accusing innocent person of crime",
                "Helping police",
                "Being a witness"
                ],
                correct: 1,
                explanation: "This crime involves accusing an innocent person of a crime they did not commit.",
                isSituational: false
            },
            {
                id: "cjur_80",
                topic: "Human Rights Education",
                question: "What is 'abandonment of minor'?",
                options: [
                "Caring for children",
                "Leaving minor without support",
                "Adopting child",
                "Babysitting"
                ],
                correct: 1,
                explanation: "Abandonment of minor involves leaving a minor without support or care.",
                isSituational: false
            },
            {
                id: "cjur_81",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'abandonment of person in danger'?",
                options: [
                "Helping person in danger",
                "Failing to help person in danger when able",
                "Calling for help",
                "Being a bystander"
                ],
                correct: 1,
                explanation: "This crime involves failing to help a person in danger when one has the duty and ability to do so.",
                isSituational: false
            },
            {
                id: "cjur_82",
                topic: "Criminal Procedure",
                question: "What is 'abandonment of helpless person'?",
                options: [
                "Caring for helpless",
                "Leaving helpless person without support",
                "Providing care",
                "Visiting hospital"
                ],
                correct: 1,
                explanation: "Abandonment of helpless person involves leaving someone who cannot care for themselves without support.",
                isSituational: false
            },
            {
                id: "cjur_83",
                topic: "Evidence",
                question: "What is 'trespass to dwelling'?",
                options: [
                "Entering with permission",
                "Entering dwelling without consent",
                "Knocking on door",
                "Visiting friend"
                ],
                correct: 1,
                explanation: "Trespass to dwelling involves entering another's dwelling without consent.",
                isSituational: false
            },
            {
                id: "cjur_84",
                topic: "Human Rights Education",
                question: "What is 'other forms of trespass'?",
                options: [
                "Legal entry",
                "Entering property without consent (non-dwelling)",
                "Public property",
                "Open land"
                ],
                correct: 1,
                explanation: "Other forms of trespass involve entering property other than dwellings without consent.",
                isSituational: false
            },
            {
                id: "cjur_85",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'grave threats'?",
                options: [
                "Minor threats",
                "Threats causing serious fear or harm",
                "Friendly warnings",
                "Advice"
                ],
                correct: 1,
                explanation: "Grave threats involve threats that cause serious fear or potential harm to the victim.",
                isSituational: false
            },
            {
                id: "cjur_86",
                topic: "Criminal Procedure",
                question: "What is 'light threats'?",
                options: [
                "Serious threats",
                "Minor threats not causing serious fear",
                "No threats",
                "Friendly conversation"
                ],
                correct: 1,
                explanation: "Light threats involve threats that do not cause serious fear or harm.",
                isSituational: false
            },
            {
                id: "cjur_87",
                topic: "Evidence",
                question: "What is 'grave coercion'?",
                options: [
                "Minor pressure",
                "Serious coercion using violence or threats",
                "Friendly persuasion",
                "Mutual agreement"
                ],
                correct: 1,
                explanation: "Grave coercion involves using serious violence or threats to force another to do something against their will.",
                isSituational: false
            },
            {
                id: "cjur_88",
                topic: "Human Rights Education",
                question: "What is 'light coercion'?",
                options: [
                "Serious coercion",
                "Minor coercion without serious violence",
                "No coercion",
                "Voluntary act"
                ],
                correct: 1,
                explanation: "Light coercion involves forcing another without the use of serious violence or threats.",
                isSituational: false
            },
            {
                id: "cjur_89",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'other light coercions'?",
                options: [
                "Serious coercion",
                "Minor coercions not covered by other provisions",
                "No coercion",
                "Legal acts"
                ],
                correct: 1,
                explanation: "Other light coercions involve minor coercive acts not specifically covered by other provisions.",
                isSituational: false
            },
            {
                id: "cjur_90",
                topic: "Criminal Procedure",
                question: "What is 'slight physical injuries'?",
                options: [
                "Serious injuries",
                "Minor injuries not incapacitating",
                "No injuries",
                "Fatal injuries"
                ],
                correct: 1,
                explanation: "Slight physical injuries involve minor injuries that do not incapacitate the victim.",
                isSituational: false
            },
            {
                id: "cjur_91",
                topic: "Evidence",
                question: "What is 'less serious physical injuries'?",
                options: [
                "Fatal injuries",
                "Injuries requiring medical attention but not serious",
                "No injuries",
                "Minor scratches"
                ],
                correct: 1,
                explanation: "Less serious physical injuries require medical attention but are not considered serious.",
                isSituational: false
            },
            {
                id: "cjur_92",
                topic: "Human Rights Education",
                question: "What is 'serious physical injuries'?",
                options: [
                "Minor injuries",
                "Injuries that incapacitate or cause serious harm",
                "No injuries",
                "Slight scratches"
                ],
                correct: 1,
                explanation: "Serious physical injuries incapacitate the victim or cause serious harm.",
                isSituational: false
            },
            {
                id: "cjur_93",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'mutilation'?",
                options: [
                "Minor injury",
                "Intentionally depriving body part",
                "Medical treatment",
                "Surgery"
                ],
                correct: 1,
                explanation: "Mutilation involves intentionally depriving a person of a body part.",
                isSituational: false
            },
            {
                id: "cjur_94",
                topic: "Criminal Procedure",
                question: "What is 'rape'?",
                options: [
                "Consensual sex",
                "Sexual intercourse without consent",
                "Dating",
                "Marriage"
                ],
                correct: 1,
                explanation: "Rape involves sexual intercourse without consent or with a person unable to give consent.",
                isSituational: false
            },
            {
                id: "cjur_95",
                topic: "Evidence",
                question: "What is 'acts of lasciviousness'?",
                options: [
                "Respectful behavior",
                "Lewd acts without intercourse",
                "Normal social interaction",
                "Professional conduct"
                ],
                correct: 1,
                explanation: "Acts of lasciviousness involve lewd acts without sexual intercourse.",
                isSituational: false
            },
            {
                id: "cjur_96",
                topic: "Human Rights Education",
                question: "What is 'qualified seduction'?",
                options: [
                "Normal relationship",
                "Seduction by person in authority or trust",
                "Mutual attraction",
                "Dating"
                ],
                correct: 1,
                explanation: "Qualified seduction involves seduction by a person in authority or trusted position.",
                isSituational: false
            },
            {
                id: "cjur_97",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'simple seduction'?",
                options: [
                "No seduction",
                "Seduction without aggravating circumstances",
                "Forced act",
                "Consensual act"
                ],
                correct: 1,
                explanation: "Simple seduction involves seduction without the aggravating circumstances present in qualified seduction.",
                isSituational: false
            },
            {
                id: "cjur_98",
                topic: "Criminal Law (Book 1 & 2)",
                question: "What is 'acts of lasciviousness with the consent of the offended party'?",
                options: [
                "No consent",
                "Lewd acts with consent but under circumstances making consent invalid",
                "Normal relationship",
                "Marriage"
                ],
                correct: 1,
                explanation: "This involves lewd acts where consent is given but under circumstances that make it legally invalid.",
                isSituational: false
            },
            {
                id: "cjur_99",
                topic: "Evidence",
                question: "What is 'corruption of minors'?",
                options: [
                "Educating minors",
                "Leading minors to immoral acts",
                "Protecting minors",
                "Parenting"
                ],
                correct: 1,
                explanation: "Corruption of minors involves leading or inducing minors to engage in immoral acts.",
                isSituational: false
            },
            {
                id: "cjur_100",
                topic: "Human Rights Education",
                question: "What is 'white slave trade'?",
                options: [
                "Legal employment",
                "Trafficking persons for prostitution",
                "Domestic work",
                "Business"
                ],
                correct: 1,
                explanation: "White slave trade involves trafficking persons for prostitution or other sexual exploitation.",
                isSituational: false
            }
        ]
    },
    lawEnforcementAdmin: {
        name: "Law Enforcement Administration",
        boardWeight: 15,
        description: "PNP organization and administration, industrial security, VIP protection, risk management, and comparative policing models.",
        topics: [
            "Police Organization and Administration",
            "Industrial Security Concepts",
            "Comparative Models in Policing"
        ],
        questions: [
            {
                id: "lea_1",
                topic: "Police Organization and Administration",
                question: "A police officer is offered a substantial bribe to ignore illegal activity at a business. What should the officer do?",
                options: [
                "Accept the bribe and report later",
                "Refuse immediately and document the attempt",
                "Accept to gather evidence",
                "Ignore the offer"
                ],
                correct: 1,
                explanation: "Officers must refuse bribes immediately and document the attempt for internal affairs investigation.",
                isSituational: true
            },
            {
                id: "lea_2",
                topic: "Industrial Security Concepts",
                question: "During a protest, some participants become violent. What is the appropriate police response?",
                options: [
                "Arrest all protesters immediately",
                "Use force to disperse everyone",
                "Target only violent individuals while protecting peaceful protesters",
                "Leave the scene entirely"
                ],
                correct: 2,
                explanation: "Police must distinguish between peaceful protesters and violent actors, responding proportionally to each.",
                isSituational: true
            },
            {
                id: "lea_3",
                topic: "Comparative Models in Policing",
                question: "A rookie officer makes a serious mistake in procedure that could jeopardize a case. What should the supervisor do?",
                options: [
                "Cover up the mistake",
                "Document it and use it as a training opportunity",
                "Punish the officer publicly",
                "Ignore it if no one notices"
                ],
                correct: 1,
                explanation: "Mistakes should be documented for transparency and used as learning opportunities to improve future performance.",
                isSituational: true
            },
            {
                id: "lea_4",
                topic: "Comparative Models in Policing",
                question: "Community members complain that police only appear in their neighborhood to make arrests. What strategy should address this?",
                options: [
                "Increase arrest frequency",
                "Implement community policing with regular positive engagement",
                "Reduce police presence entirely",
                "Only respond to emergency calls"
                ],
                correct: 1,
                explanation: "Community policing emphasizes building relationships through regular, positive interactions beyond enforcement.",
                isSituational: true
            },
            {
                id: "lea_5",
                topic: "Industrial Security Concepts",
                question: "A police department has budget constraints that require reducing services. What should be prioritized?",
                options: [
                "Administrative positions",
                "Community programs",
                "Emergency response and core investigative functions",
                "Training programs"
                ],
                correct: 2,
                explanation: "Core functions of emergency response and criminal investigation must be maintained as public safety priorities.",
                isSituational: true
            },
            {
                id: "lea_6",
                topic: "Comparative Models in Policing",
                question: "What is the principle of 'police discretion'?",
                options: [
                "Police can ignore any law they choose",
                "Police have limited freedom to decide how to handle situations",
                "Police must follow strict rules in all situations",
                "Police can make up laws"
                ],
                correct: 1,
                explanation: "Police discretion is the limited freedom officers have to choose between alternative courses of action.",
                isSituational: false
            },
            {
                id: "lea_7",
                topic: "Comparative Models in Policing",
                question: "What is 'community policing'?",
                options: [
                "Policing only in residential areas",
                "A philosophy emphasizing partnership with community organizations",
                "Reducing police presence in communities",
                "Letting communities police themselves"
                ],
                correct: 1,
                explanation: "Community policing is a philosophy that promotes organizational strategies supporting systematic use of partnerships and problem-solving techniques.",
                isSituational: false
            },
            {
                id: "lea_8",
                topic: "Industrial Security Concepts",
                question: "What is the 'chain of command' in police organizations?",
                options: [
                "The equipment officers carry",
                "The line of authority from top to bottom",
                "The sequence of arrests",
                "The communication network"
                ],
                correct: 1,
                explanation: "Chain of command is the line of authority and responsibility along which orders are passed within a police organization.",
                isSituational: false
            },
            {
                id: "lea_9",
                topic: "Comparative Models in Policing",
                question: "What is 'use of force' continuum?",
                options: [
                "A list of weapons officers can use",
                "A guideline showing appropriate force levels for different situations",
                "The amount of force used in all situations",
                "A record of force incidents"
                ],
                correct: 1,
                explanation: "The use of force continuum provides guidelines for escalating and de-escalating force based on resistance levels.",
                isSituational: false
            },
            {
                id: "lea_10",
                topic: "Police Organization and Administration",
                question: "What is 'internal affairs' in a police department?",
                options: [
                "Department budget management",
                "Division that investigates officer misconduct",
                "Community relations unit",
                "Training division"
                ],
                correct: 1,
                explanation: "Internal affairs investigates allegations of misconduct by police officers to maintain integrity.",
                isSituational: false
            },
            {
                id: "lea_11",
                topic: "Industrial Security Concepts",
                question: "What is 'police ethics'?",
                options: [
                "Police rules",
                "Moral principles guiding police conduct",
                "Police laws",
                "Department policies"
                ],
                correct: 1,
                explanation: "Police ethics are moral principles that guide police conduct and decision-making.",
                isSituational: false
            },
            {
                id: "lea_12",
                topic: "Comparative Models in Policing",
                question: "What is 'police integrity'?",
                options: [
                "Physical strength",
                "Honesty and moral uprightness",
                "Police unity",
                "Department structure"
                ],
                correct: 1,
                explanation: "Police integrity refers to honesty and moral uprightness in police work.",
                isSituational: false
            },
            {
                id: "lea_13",
                topic: "Police Organization and Administration",
                question: "What is 'police accountability'?",
                options: [
                "Police responsibility",
                "Being answerable for actions and decisions",
                "Police counting",
                "Department budgeting"
                ],
                correct: 1,
                explanation: "Police accountability means being answerable for actions and decisions.",
                isSituational: false
            },
            {
                id: "lea_14",
                topic: "Industrial Security Concepts",
                question: "What is 'police professionalism'?",
                options: [
                "Being professional",
                "Conducting oneself with skill and ethical standards",
                "Police uniform",
                "Department image"
                ],
                correct: 1,
                explanation: "Police professionalism involves conducting oneself with skill and ethical standards.",
                isSituational: false
            },
            {
                id: "lea_15",
                topic: "Comparative Models in Policing",
                question: "What is 'police legitimacy'?",
                options: [
                "Legal authority",
                "Public perception that police have rightful authority",
                "Police license",
                "Department certification"
                ],
                correct: 1,
                explanation: "Police legitimacy is the public perception that police have rightful authority.",
                isSituational: false
            },
            {
                id: "lea_16",
                topic: "Police Organization and Administration",
                question: "What is 'procedural justice'?",
                options: [
                "Legal procedures",
                "Fair treatment in police-citizen interactions",
                "Court procedures",
                "Department policies"
                ],
                correct: 1,
                explanation: "Procedural justice emphasizes fair treatment in police-citizen interactions.",
                isSituational: false
            },
            {
                id: "lea_17",
                topic: "Industrial Security Concepts",
                question: "What is 'police culture'?",
                options: [
                "Department traditions",
                "Shared values, beliefs, and behaviors of police",
                "Police uniforms",
                "Department building"
                ],
                correct: 1,
                explanation: "Police culture refers to shared values, beliefs, and behaviors among police officers.",
                isSituational: false
            },
            {
                id: "lea_18",
                topic: "Comparative Models in Policing",
                question: "What is 'police subculture'?",
                options: [
                "Department subgroups",
                "Informal norms and values among police",
                "Police divisions",
                "Special units"
                ],
                correct: 1,
                explanation: "Police subculture consists of informal norms and values among police officers.",
                isSituational: false
            },
            {
                id: "lea_19",
                topic: "Police Organization and Administration",
                question: "What is 'blue wall of silence'?",
                options: [
                "Quiet police work",
                "Code of silence protecting officers from reporting misconduct",
                "Police radio silence",
                "Secret operations"
                ],
                correct: 1,
                explanation: "Blue wall of silence is a code of silence protecting officers from reporting misconduct.",
                isSituational: false
            },
            {
                id: "lea_20",
                topic: "Industrial Security Concepts",
                question: "What is 'police corruption'?",
                options: [
                "Police mistakes",
                "Abuse of power for personal gain",
                "Police errors",
                "Department problems"
                ],
                correct: 1,
                explanation: "Police corruption is abuse of power for personal gain.",
                isSituational: false
            },
            {
                id: "lea_21",
                topic: "Comparative Models in Policing",
                question: "What is 'police brutality'?",
                options: [
                "Police strength",
                "Excessive use of force",
                "Police training",
                "Physical fitness"
                ],
                correct: 1,
                explanation: "Police brutality is excessive use of force.",
                isSituational: false
            },
            {
                id: "lea_22",
                topic: "Police Organization and Administration",
                question: "What is 'racial profiling'?",
                options: [
                "Criminal profiling",
                "Targeting individuals based on race or ethnicity",
                "Crime analysis",
                "Investigative technique"
                ],
                correct: 1,
                explanation: "Racial profiling is targeting individuals based on race or ethnicity.",
                isSituational: false
            },
            {
                id: "lea_23",
                topic: "Industrial Security Concepts",
                question: "What is 'bias-based policing'?",
                options: [
                "Unbiased policing",
                "Policing influenced by prejudice",
                "Fair policing",
                "Objective policing"
                ],
                correct: 1,
                explanation: "Bias-based policing is policing influenced by prejudice.",
                isSituational: false
            },
            {
                id: "lea_24",
                topic: "Comparative Models in Policing",
                question: "What is 'implicit bias'?",
                options: [
                "Obvious prejudice",
                "Unconscious attitudes affecting behavior",
                "Explicit bias",
                "Known prejudice"
                ],
                correct: 1,
                explanation: "Implicit bias is unconscious attitudes affecting behavior.",
                isSituational: false
            },
            {
                id: "lea_25",
                topic: "Police Organization and Administration",
                question: "What is 'de-escalation'?",
                options: [
                "Escalating force",
                "Reducing tension and conflict",
                "Police deployment",
                "Force increase"
                ],
                correct: 1,
                explanation: "De-escalation is reducing tension and conflict.",
                isSituational: false
            },
            {
                id: "lea_26",
                topic: "Industrial Security Concepts",
                question: "What is 'crisis intervention'?",
                options: [
                "Regular policing",
                "Responding to mental health crises",
                "Emergency response",
                "Regular intervention"
                ],
                correct: 1,
                explanation: "Crisis intervention involves responding to mental health crises.",
                isSituational: false
            },
            {
                id: "lea_27",
                topic: "Comparative Models in Policing",
                question: "What is 'CIT'?",
                options: [
                "Crime investigation team",
                "Crisis Intervention Team for mental health",
                "Criminal intelligence team",
                "Community intervention team"
                ],
                correct: 1,
                explanation: "CIT is Crisis Intervention Team for mental health crises.",
                isSituational: false
            },
            {
                id: "lea_28",
                topic: "Police Organization and Administration",
                question: "What is 'use of force policy'?",
                options: [
                "Weapon policy",
                "Guidelines for when and how to use force",
                "Deployment policy",
                "Equipment policy"
                ],
                correct: 1,
                explanation: "Use of force policy provides guidelines for when and how to use force.",
                isSituational: false
            },
            {
                id: "lea_29",
                topic: "Industrial Security Concepts",
                question: "What is 'deadly force'?",
                options: [
                "Any force",
                "Force likely to cause death or serious injury",
                "Minimal force",
                "Non-lethal force"
                ],
                correct: 1,
                explanation: "Deadly force is force likely to cause death or serious injury.",
                isSituational: false
            },
            {
                id: "lea_30",
                topic: "Comparative Models in Policing",
                question: "What is 'less-lethal force'?",
                options: [
                "Deadly force",
                "Force less likely to cause death",
                "No force",
                "Minimal force"
                ],
                correct: 1,
                explanation: "Less-lethal force is force less likely to cause death.",
                isSituational: false
            },
            {
                id: "lea_31",
                topic: "Police Organization and Administration",
                question: "What is 'non-lethal force'?",
                options: [
                "Deadly force",
                "Force not intended to cause death",
                "No force",
                "Minimal force"
                ],
                correct: 1,
                explanation: "Non-lethal force is force not intended to cause death.",
                isSituational: false
            },
            {
                id: "lea_32",
                topic: "Industrial Security Concepts",
                question: "What is 'objective reasonableness'?",
                options: [
                "Subjective judgment",
                "Standard evaluating if force was reasonable",
                "Objective opinion",
                "Legal standard"
                ],
                correct: 1,
                explanation: "Objective reasonableness evaluates if force was reasonable from officer's perspective.",
                isSituational: false
            },
            {
                id: "lea_33",
                topic: "Comparative Models in Policing",
                question: "What is 'Graham v. Connor'?",
                options: [
                "Police case",
                "Supreme Court case on use of force standard",
                "Court decision",
                "Legal precedent"
                ],
                correct: 1,
                explanation: "Graham v. Connor established the objective reasonableness standard for use of force.",
                isSituational: false
            },
            {
                id: "lea_34",
                topic: "Police Organization and Administration",
                question: "What is 'Fourth Amendment'?",
                options: [
                "Right to bear arms",
                "Protection against unreasonable searches and seizures",
                "Freedom of speech",
                "Right to trial"
                ],
                correct: 1,
                explanation: "The Fourth Amendment protects against unreasonable searches and seizures.",
                isSituational: false
            },
            {
                id: "lea_35",
                topic: "Industrial Security Concepts",
                question: "What is 'exclusionary rule'?",
                options: [
                "Including evidence",
                "Excluding illegally obtained evidence",
                "Court rule",
                "Legal principle"
                ],
                correct: 1,
                explanation: "The exclusionary rule excludes illegally obtained evidence.",
                isSituational: false
            },
            {
                id: "lea_36",
                topic: "Comparative Models in Policing",
                question: "What is 'Miranda v. Arizona'?",
                options: [
                "Police case",
                "Supreme Court case requiring Miranda warnings",
                "Court decision",
                "Legal precedent"
                ],
                correct: 1,
                explanation: "Miranda v. Arizona established requirement for Miranda warnings.",
                isSituational: false
            },
            {
                id: "lea_37",
                topic: "Police Organization and Administration",
                question: "What is 'qualified immunity'?",
                options: [
                "Full immunity",
                "Protection for officials acting in good faith",
                "No immunity",
                "Legal immunity"
                ],
                correct: 1,
                explanation: "Qualified immunity protects officials acting in good faith.",
                isSituational: false
            },
            {
                id: "lea_38",
                topic: "Industrial Security Concepts",
                question: "What is 'police recruitment'?",
                options: [
                "Police training",
                "Hiring new police officers",
                "Police deployment",
                "Police assignment"
                ],
                correct: 1,
                explanation: "Police recruitment is hiring new police officers.",
                isSituational: false
            },
            {
                id: "lea_39",
                topic: "Comparative Models in Policing",
                question: "What is 'police selection'?",
                options: [
                "Choosing equipment",
                "Choosing qualified candidates",
                "Selecting assignments",
                "Choosing locations"
                ],
                correct: 1,
                explanation: "Police selection is choosing qualified candidates.",
                isSituational: false
            },
            {
                id: "lea_40",
                topic: "Police Organization and Administration",
                question: "What is 'police training'?",
                options: [
                "Physical exercise",
                "Education and skill development for officers",
                "Police practice",
                "Department meeting"
                ],
                correct: 1,
                explanation: "Police training provides education and skill development for officers.",
                isSituational: false
            },
            {
                id: "lea_41",
                topic: "Industrial Security Concepts",
                question: "What is 'police academy'?",
                options: [
                "Police school",
                "Training institution for new officers",
                "Police college",
                "Training center"
                ],
                correct: 1,
                explanation: "Police academy is a training institution for new officers.",
                isSituational: false
            },
            {
                id: "lea_42",
                topic: "Comparative Models in Policing",
                question: "What is 'field training'?",
                options: [
                "Training in field",
                "On-the-job training with experienced officers",
                "Outdoor training",
                "Practical training"
                ],
                correct: 1,
                explanation: "Field training is on-the-job training with experienced officers.",
                isSituational: false
            },
            {
                id: "lea_43",
                topic: "Police Organization and Administration",
                question: "What is 'FTO'?",
                options: [
                "Field Training Officer",
                "Field Training Organization",
                "Federal Training Officer",
                "Fire Training Officer"
                ],
                correct: 0,
                explanation: "FTO is Field Training Officer who trains new officers.",
                isSituational: false
            },
            {
                id: "lea_44",
                topic: "Industrial Security Concepts",
                question: "What is 'probationary period'?",
                options: [
                "Prison sentence",
                "Initial period of employment under evaluation",
                "Parole period",
                "Trial period"
                ],
                correct: 1,
                explanation: "Probationary period is initial employment under evaluation.",
                isSituational: false
            },
            {
                id: "lea_45",
                topic: "Comparative Models in Policing",
                question: "What is 'in-service training'?",
                options: [
                "Initial training",
                "Ongoing training for experienced officers",
                "Service training",
                "Department training"
                ],
                correct: 1,
                explanation: "In-service training provides ongoing training for experienced officers.",
                isSituational: false
            },
            {
                id: "lea_46",
                topic: "Police Organization and Administration",
                question: "What is 'specialized training'?",
                options: [
                "General training",
                "Training for specific units or functions",
                "Basic training",
                "Regular training"
                ],
                correct: 1,
                explanation: "Specialized training is for specific units or functions.",
                isSituational: false
            },
            {
                id: "lea_47",
                topic: "Industrial Security Concepts",
                question: "What is 'SWAT'?",
                options: [
                "Special Weapons and Tactics",
                "Special Weapons and Team",
                "Strategic Weapons and Tactics",
                "Special Weapons and Training"
                ],
                correct: 0,
                explanation: "SWAT is Special Weapons and Tactics team.",
                isSituational: false
            },
            {
                id: "lea_48",
                topic: "Comparative Models in Policing",
                question: "What is 'K-9 unit'?",
                options: [
                "Nine officers",
                "Police dog unit",
                "Special unit",
                "Canine unit"
                ],
                correct: 1,
                explanation: "K-9 unit is a police dog unit.",
                isSituational: false
            },
            {
                id: "lea_49",
                topic: "Police Organization and Administration",
                question: "What is 'narcotics unit'?",
                options: [
                "Drug enforcement unit",
                "Medical unit",
                "Emergency unit",
                "Patrol unit"
                ],
                correct: 0,
                explanation: "Narcotics unit is a drug enforcement unit.",
                isSituational: false
            },
            {
                id: "lea_50",
                topic: "Industrial Security Concepts",
                question: "What is 'homicide unit'?",
                options: [
                "Suicide unit",
                "Investigates murders",
                "Emergency unit",
                "Patrol unit"
                ],
                correct: 1,
                explanation: "Homicide unit investigates murders.",
                isSituational: false
            },
            {
                id: "lea_51",
                topic: "Comparative Models in Policing",
                question: "What is 'detective division'?",
                options: [
                "Patrol division",
                "Investigative division",
                "Traffic division",
                "Administrative division"
                ],
                correct: 1,
                explanation: "Detective division is the investigative division.",
                isSituational: false
            },
            {
                id: "lea_52",
                topic: "Police Organization and Administration",
                question: "What is 'patrol division'?",
                options: [
                "Investigative division",
                "Uniformed officers responding to calls",
                "Administrative division",
                "Detective division"
                ],
                correct: 1,
                explanation: "Patrol division consists of uniformed officers responding to calls.",
                isSituational: false
            },
            {
                id: "lea_53",
                topic: "Industrial Security Concepts",
                question: "What is 'traffic division'?",
                options: [
                "Investigative division",
                "Enforces traffic laws",
                "Patrol division",
                "Administrative division"
                ],
                correct: 1,
                explanation: "Traffic division enforces traffic laws.",
                isSituational: false
            },
            {
                id: "lea_54",
                topic: "Comparative Models in Policing",
                question: "What is 'vice squad'?",
                options: [
                "Patrol squad",
                "Investigates vice crimes like gambling and prostitution",
                "Traffic squad",
                "Detective squad"
                ],
                correct: 1,
                explanation: "Vice squad investigates vice crimes like gambling and prostitution.",
                isSituational: false
            },
            {
                id: "lea_55",
                topic: "Police Organization and Administration",
                question: "What is 'gang unit'?",
                options: [
                "Regular unit",
                "Investigates gang activity",
                "Patrol unit",
                "Traffic unit"
                ],
                correct: 1,
                explanation: "Gang unit investigates gang activity.",
                isSituational: false
            },
            {
                id: "lea_56",
                topic: "Industrial Security Concepts",
                question: "What is 'cybercrime unit'?",
                options: [
                "Regular unit",
                "Investigates computer-related crimes",
                "Patrol unit",
                "Traffic unit"
                ],
                correct: 1,
                explanation: "Cybercrime unit investigates computer-related crimes.",
                isSituational: false
            },
            {
                id: "lea_57",
                topic: "Comparative Models in Policing",
                question: "What is 'crime scene unit'?",
                options: [
                "Patrol unit",
                "Collects and processes evidence",
                "Traffic unit",
                "Administrative unit"
                ],
                correct: 1,
                explanation: "Crime scene unit collects and processes evidence.",
                isSituational: false
            },
            {
                id: "lea_58",
                topic: "Police Organization and Administration",
                question: "What is 'forensic unit'?",
                options: [
                "Regular unit",
                "Analyzes forensic evidence",
                "Patrol unit",
                "Traffic unit"
                ],
                correct: 1,
                explanation: "Forensic unit analyzes forensic evidence.",
                isSituational: false
            },
            {
                id: "lea_59",
                topic: "Industrial Security Concepts",
                question: "What is 'crime laboratory'?",
                options: [
                "Crime scene",
                "Analyzes evidence in controlled setting",
                "Police station",
                "Court"
                ],
                correct: 1,
                explanation: "Crime laboratory analyzes evidence in controlled setting.",
                isSituational: false
            },
            {
                id: "lea_60",
                topic: "Comparative Models in Policing",
                question: "What is 'police administration'?",
                options: [
                "Police paperwork",
                "Management of police organization",
                "Police operations",
                "Police procedures"
                ],
                correct: 1,
                explanation: "Police administration is management of police organization.",
                isSituational: false
            },
            {
                id: "lea_61",
                topic: "Police Organization and Administration",
                question: "What is 'police management'?",
                options: [
                "Police paperwork",
                "Planning and directing police operations",
                "Police operations",
                "Police procedures"
                ],
                correct: 1,
                explanation: "Police management involves planning and directing police operations.",
                isSituational: false
            },
            {
                id: "lea_62",
                topic: "Industrial Security Concepts",
                question: "What is 'police organization'?",
                options: [
                "Police union",
                "Structure and arrangement of police department",
                "Police association",
                "Police group"
                ],
                correct: 1,
                explanation: "Police organization is the structure and arrangement of police department.",
                isSituational: false
            },
            {
                id: "lea_63",
                topic: "Comparative Models in Policing",
                question: "What is 'police hierarchy'?",
                options: [
                "Police ranks",
                "Chain of command structure",
                "Police levels",
                "Police grades"
                ],
                correct: 1,
                explanation: "Police hierarchy is the chain of command structure.",
                isSituational: false
            },
            {
                id: "lea_64",
                topic: "Police Organization and Administration",
                question: "What is 'police chief'?",
                options: [
                "Patrol officer",
                "Head of police department",
                "Detective",
                "Sergeant"
                ],
                correct: 1,
                explanation: "Police chief is the head of police department.",
                isSituational: false
            },
            {
                id: "lea_65",
                topic: "Industrial Security Concepts",
                question: "What is 'sheriff'?",
                options: [
                "Police chief",
                "County law enforcement officer",
                "City police",
                "State police"
                ],
                correct: 1,
                explanation: "Sheriff is county law enforcement officer.",
                isSituational: false
            },
            {
                id: "lea_66",
                topic: "Comparative Models in Policing",
                question: "What is 'deputy sheriff'?",
                options: [
                "Assistant sheriff",
                "Sheriff's officer",
                "Police deputy",
                "City officer"
                ],
                correct: 1,
                explanation: "Deputy sheriff is sheriff's officer.",
                isSituational: false
            },
            {
                id: "lea_67",
                topic: "Police Organization and Administration",
                question: "What is 'state police'?",
                options: [
                "Local police",
                "State-wide law enforcement agency",
                "Federal police",
                "City police"
                ],
                correct: 1,
                explanation: "State police is state-wide law enforcement agency.",
                isSituational: false
            },
            {
                id: "lea_68",
                topic: "Industrial Security Concepts",
                question: "What is 'highway patrol'?",
                options: [
                "Local patrol",
                "State traffic enforcement",
                "City patrol",
                "County patrol"
                ],
                correct: 1,
                explanation: "Highway patrol is state traffic enforcement.",
                isSituational: false
            },
            {
                id: "lea_69",
                topic: "Comparative Models in Policing",
                question: "What is 'federal law enforcement'?",
                options: [
                "Local police",
                "National law enforcement agencies",
                "State police",
                "City police"
                ],
                correct: 1,
                explanation: "Federal law enforcement are national law enforcement agencies.",
                isSituational: false
            },
            {
                id: "lea_70",
                topic: "Comparative Models in Policing",
                question: "What is 'FBI'?",
                options: [
                "Federal Bureau of Investigation",
                "Federal Bureau of Intelligence",
                "Federal Bureau of Immigration",
                "Federal Bureau of Information"
                ],
                correct: 0,
                explanation: "FBI is Federal Bureau of Investigation.",
                isSituational: false
            },
            {
                id: "lea_71",
                topic: "Industrial Security Concepts",
                question: "What is 'DEA'?",
                options: [
                "Drug Enforcement Administration",
                "Department of Education Agency",
                "Defense Enforcement Agency",
                "Drug Education Agency"
                ],
                correct: 0,
                explanation: "DEA is Drug Enforcement Administration.",
                isSituational: false
            },
            {
                id: "lea_72",
                topic: "Comparative Models in Policing",
                question: "What is 'ATF'?",
                options: [
                "Alcohol, Tobacco, Firearms and Explosives",
                "Alcohol, Tobacco, Food and Explosives",
                "Agency for Tobacco and Firearms",
                "Alcohol and Tobacco Federation"
                ],
                correct: 0,
                explanation: "ATF is Bureau of Alcohol, Tobacco, Firearms and Explosives.",
                isSituational: false
            },
            {
                id: "lea_73",
                topic: "Police Organization and Administration",
                question: "What is 'US Marshals'?",
                options: [
                "Federal court officers",
                "State marshals",
                "Local marshals",
                "County marshals"
                ],
                correct: 0,
                explanation: "US Marshals are federal court officers.",
                isSituational: false
            },
            {
                id: "lea_74",
                topic: "Industrial Security Concepts",
                question: "What is 'Secret Service'?",
                options: [
                "Secret police",
                "Protects President and investigates financial crimes",
                "Secret agents",
                "Intelligence service"
                ],
                correct: 1,
                explanation: "Secret Service protects President and investigates financial crimes.",
                isSituational: false
            },
            {
                id: "lea_75",
                topic: "Comparative Models in Policing",
                question: "What is 'Homeland Security'?",
                options: [
                "Local security",
                "Department protecting against terrorism",
                "State security",
                "County security"
                ],
                correct: 1,
                explanation: "Department of Homeland Security protects against terrorism.",
                isSituational: false
            },
            {
                id: "lea_76",
                topic: "Police Organization and Administration",
                question: "What is 'interagency cooperation'?",
                options: [
                "Agency competition",
                "Collaboration between law enforcement agencies",
                "Agency independence",
                "Department isolation"
                ],
                correct: 1,
                explanation: "Interagency cooperation is collaboration between law enforcement agencies.",
                isSituational: false
            },
            {
                id: "lea_77",
                topic: "Industrial Security Concepts",
                question: "What is 'task force'?",
                options: [
                "Regular unit",
                "Team from multiple agencies working on specific problem",
                "Patrol unit",
                "Traffic unit"
                ],
                correct: 1,
                explanation: "Task force is team from multiple agencies working on specific problem.",
                isSituational: false
            },
            {
                id: "lea_78",
                topic: "Comparative Models in Policing",
                question: "What is 'joint operations'?",
                options: [
                "Separate operations",
                "Operations conducted by multiple agencies together",
                "Individual operations",
                "Single agency operations"
                ],
                correct: 1,
                explanation: "Joint operations are conducted by multiple agencies together.",
                isSituational: false
            },
            {
                id: "lea_79",
                topic: "Police Organization and Administration",
                question: "What is 'mutual aid'?",
                options: [
                "Financial aid",
                "Assistance between agencies during emergencies",
                "Charitable aid",
                "Government aid"
                ],
                correct: 1,
                explanation: "Mutual aid is assistance between agencies during emergencies.",
                isSituational: false
            },
            {
                id: "lea_80",
                topic: "Industrial Security Concepts",
                question: "What is 'police jurisdiction'?",
                options: [
                "Police authority",
                "Geographic area where police have authority",
                "Police power",
                "Police control"
                ],
                correct: 1,
                explanation: "Police jurisdiction is geographic area where police have authority.",
                isSituational: false
            },
            {
                id: "lea_81",
                topic: "Comparative Models in Policing",
                question: "What is 'concurrent jurisdiction'?",
                options: [
                "Single jurisdiction",
                "Multiple agencies have authority in same area",
                "No jurisdiction",
                "Shared jurisdiction"
                ],
                correct: 1,
                explanation: "Concurrent jurisdiction means multiple agencies have authority in same area.",
                isSituational: false
            },
            {
                id: "lea_82",
                topic: "Police Organization and Administration",
                question: "What is 'exclusive jurisdiction'?",
                options: [
                "Shared jurisdiction",
                "Only one agency has authority",
                "No jurisdiction",
                "Multiple jurisdiction"
                ],
                correct: 1,
                explanation: "Exclusive jurisdiction means only one agency has authority.",
                isSituational: false
            },
            {
                id: "lea_83",
                topic: "Industrial Security Concepts",
                question: "What is 'federal jurisdiction'?",
                options: [
                "Local authority",
                "Authority over federal crimes",
                "State authority",
                "County authority"
                ],
                correct: 1,
                explanation: "Federal jurisdiction is authority over federal crimes.",
                isSituational: false
            },
            {
                id: "lea_84",
                topic: "Comparative Models in Policing",
                question: "What is 'state jurisdiction'?",
                options: [
                "Local authority",
                "Authority over state crimes",
                "Federal authority",
                "County authority"
                ],
                correct: 1,
                explanation: "State jurisdiction is authority over state crimes.",
                isSituational: false
            },
            {
                id: "lea_85",
                topic: "Police Organization and Administration",
                question: "What is 'local jurisdiction'?",
                options: [
                "Federal authority",
                "City or county authority",
                "State authority",
                "National authority"
                ],
                correct: 1,
                explanation: "Local jurisdiction is city or county authority.",
                isSituational: false
            },
            {
                id: "lea_86",
                topic: "Industrial Security Concepts",
                question: "What is 'police union'?",
                options: [
                "Police association",
                "Labor organization representing officers",
                "Police club",
                "Police group"
                ],
                correct: 1,
                explanation: "Police union is labor organization representing officers.",
                isSituational: false
            },
            {
                id: "lea_87",
                topic: "Comparative Models in Policing",
                question: "What is 'collective bargaining'?",
                options: [
                "Individual negotiation",
                "Negotiation between union and management",
                "Group shopping",
                "Team negotiation"
                ],
                correct: 1,
                explanation: "Collective bargaining is negotiation between union and management.",
                isSituational: false
            },
            {
                id: "lea_88",
                topic: "Police Organization and Administration",
                question: "What is 'police contract'?",
                options: [
                "Legal contract",
                "Agreement between department and union",
                "Service contract",
                "Employment agreement"
                ],
                correct: 1,
                explanation: "Police contract is agreement between department and union.",
                isSituational: false
            },
            {
                id: "lea_89",
                topic: "Industrial Security Concepts",
                question: "What is 'police pension'?",
                options: [
                "Regular payment",
                "Retirement benefit for officers",
                "Savings account",
                "Insurance"
                ],
                correct: 1,
                explanation: "Police pension is retirement benefit for officers.",
                isSituational: false
            },
            {
                id: "lea_90",
                topic: "Comparative Models in Policing",
                question: "What is 'police benefits'?",
                options: [
                "Police advantages",
                "Compensation and perks for officers",
                "Police gifts",
                "Department benefits"
                ],
                correct: 1,
                explanation: "Police benefits are compensation and perks for officers.",
                isSituational: false
            },
            {
                id: "lea_91",
                topic: "Police Organization and Administration",
                question: "What is 'police wellness'?",
                options: [
                "Physical health",
                "Physical and mental health of officers",
                "Department health",
                "Organizational health"
                ],
                correct: 1,
                explanation: "Police wellness is physical and mental health of officers.",
                isSituational: false
            },
            {
                id: "lea_92",
                topic: "Industrial Security Concepts",
                question: "What is 'police stress'?",
                options: [
                "Police pressure",
                "Mental and physical strain from police work",
                "Department stress",
                "Organizational stress"
                ],
                correct: 1,
                explanation: "Police stress is mental and physical strain from police work.",
                isSituational: false
            },
            {
                id: "lea_93",
                topic: "Comparative Models in Policing",
                question: "What is 'PTSD'?",
                options: [
                "Post-Traumatic Stress Disorder",
                "Police Training and Skills Development",
                "Police Tactical Support Division",
                "Police Technical Support Department"
                ],
                correct: 0,
                explanation: "PTSD is Post-Traumatic Stress Disorder.",
                isSituational: false
            },
            {
                id: "lea_94",
                topic: "Police Organization and Administration",
                question: "What is 'police suicide'?",
                options: [
                "Police killing",
                "Officer taking own life",
                "Police homicide",
                "Police death"
                ],
                correct: 1,
                explanation: "Police suicide is officer taking own life.",
                isSituational: false
            },
            {
                id: "lea_95",
                topic: "Industrial Security Concepts",
                question: "What is 'police suicide prevention'?",
                options: [
                "Preventing police from killing",
                "Programs to prevent officer suicide",
                "Preventing homicide",
                "Preventing death"
                ],
                correct: 1,
                explanation: "Police suicide prevention programs prevent officer suicide.",
                isSituational: false
            },
            {
                id: "lea_96",
                topic: "Comparative Models in Policing",
                question: "What is 'peer support'?",
                options: [
                "Public support",
                "Officers supporting each other",
                "Community support",
                "Department support"
                ],
                correct: 1,
                explanation: "Peer support is officers supporting each other.",
                isSituational: false
            },
            {
                id: "lea_97",
                topic: "Police Organization and Administration",
                question: "What is 'critical incident stress debriefing'?",
                options: [
                "Regular meeting",
                "Structured discussion after traumatic event",
                "Critical meeting",
                "Stress meeting"
                ],
                correct: 1,
                explanation: "Critical incident stress debriefing is structured discussion after traumatic event.",
                isSituational: false
            },
            {
                id: "lea_98",
                topic: "Industrial Security Concepts",
                question: "What is 'employee assistance program'?",
                options: [
                "Regular assistance",
                "Program providing counseling and support",
                "Training program",
                "Benefits program"
                ],
                correct: 1,
                explanation: "EAP provides counseling and support to employees.",
                isSituational: false
            },
            {
                id: "lea_99",
                topic: "Comparative Models in Policing",
                question: "What is 'police accreditation'?",
                options: [
                "Police certification",
                "Recognition of meeting professional standards",
                "Police license",
                "Department certification"
                ],
                correct: 1,
                explanation: "Police accreditation is recognition of meeting professional standards.",
                isSituational: false
            },
            {
                id: "lea_100",
                topic: "Police Organization and Administration",
                question: "What is 'CALEA'?",
                options: [
                "California law enforcement",
                "Commission on Accreditation for Law Enforcement Agencies",
                "Canadian law enforcement",
                "Criminal law enforcement"
                ],
                correct: 1,
                explanation: "CALEA is Commission on Accreditation for Law Enforcement Agencies.",
                isSituational: false
            }
        ]
    },
    crimeDetectionInvestigation: {
        name: "Crime Detection and Investigation",
        boardWeight: 20,
        description: "Investigation fundamentals, specialized cases (homicide, cybercrime, terrorism), legal medicine, and traffic accident investigation.",
        topics: [
            "Fundamentals of Criminal Investigation",
            "Specialized Crime Investigation",
            "Traffic Management"
        ],
        questions: [
            {
                id: "cdi_1",
                topic: "Fundamentals of Criminal Investigation",
                question: "A series of burglaries shows the same MO: entry through second-floor windows, targeting jewelry only, and leaving no fingerprints. What investigative approach would be MOST effective?",
                options: [
                "Random patrol of the affected area",
                "Profile the offender and set up surveillance",
                "Interview all residents in the area",
                "Increase lighting in the neighborhood"
                ],
                correct: 1,
                explanation: "Pattern analysis and profiling based on MO can predict likely next targets and times, making surveillance more effective.",
                isSituational: true
            },
            {
                id: "cdi_2",
                topic: "Specialized Crime Investigation",
                question: "A witness reports seeing a suspicious vehicle near multiple crime scenes. What database would be MOST useful for identifying the vehicle?",
                options: [
                "NCIC (National Crime Information Center)",
                "LTO database",
                "NBI database",
                "PNP database"
                ],
                correct: 0,
                explanation: "NCIC maintains comprehensive vehicle information that can cross-reference with investigative leads.",
                isSituational: true
            },
            {
                id: "cdi_3",
                topic: "Traffic Management",
                question: "During an interrogation, a suspect becomes defensive and refuses to answer further questions. What technique should the investigator use?",
                options: [
                "Continue pressing for answers",
                "Take a break and change approach",
                "End the interrogation immediately",
                "Threaten the suspect with harsher charges"
                ],
                correct: 1,
                explanation: "Changing tactics or taking a break can reduce resistance and may lead to more productive dialogue.",
                isSituational: true
            },
            {
                id: "cdi_4",
                topic: "Fundamentals of Criminal Investigation",
                question: "A victim cannot identify the perpetrator but remembers a distinctive tattoo. What investigative step is MOST appropriate?",
                options: [
                "Release the victim without further action",
                "Create a sketch of the tattoo and circulate it",
                "Focus only on forensic evidence",
                "Wait for another witness"
                ],
                correct: 1,
                explanation: "A distinctive tattoo can be a valuable identifier when circulated to other officers and potential witnesses.",
                isSituational: true
            },
            {
                id: "cdi_5",
                topic: "Specialized Crime Investigation",
                question: "Multiple witnesses give conflicting descriptions of a suspect. What should investigators do FIRST?",
                options: [
                "Choose the most reliable witness",
                "Re-interview all witnesses separately",
                "Disregard all witness statements",
                "Arrest based on physical evidence only"
                ],
                correct: 1,
                explanation: "Re-interviewing can clarify discrepancies and may reveal that witnesses observed different aspects or times.",
                isSituational: true
            },
            {
                id: "cdi_6",
                topic: "Traffic Management",
                question: "What is the primary purpose of a 'cold case' review?",
                options: [
                "To close unsolved cases",
                "To apply new techniques and fresh perspectives to old cases",
                "To reduce case backlog",
                "To train new investigators"
                ],
                correct: 1,
                explanation: "Cold case reviews use new technologies, DNA testing, and fresh perspectives that may solve previously unsolvable cases.",
                isSituational: false
            },
            {
                id: "cdi_7",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'modus operandi' in criminal investigation?",
                options: [
                "The criminal's motive",
                "The method of operation or distinctive pattern",
                "The criminal's signature",
                "The type of weapon used"
                ],
                correct: 1,
                explanation: "Modus operandi (MO) refers to the distinctive methods and patterns a criminal uses to commit crimes.",
                isSituational: false
            },
            {
                id: "cdi_8",
                topic: "Specialized Crime Investigation",
                question: "What is the difference between MO and signature in criminal profiling?",
                options: [
                "They are the same thing",
                "MO is functional, signature is psychological",
                "MO is psychological, signature is functional",
                "Signature changes, MO stays the same"
                ],
                correct: 1,
                explanation: "MO is what the criminal needs to commit the crime (functional), while signature satisfies psychological needs.",
                isSituational: false
            },
            {
                id: "cdi_9",
                topic: "Traffic Management",
                question: "What is 'linkage analysis' in serial crime investigation?",
                options: [
                "Connecting crimes to specific perpetrators",
                "Identifying patterns that connect multiple crimes",
                "Linking witnesses to crimes",
                "Connecting evidence to laboratories"
                ],
                correct: 1,
                explanation: "Linkage analysis identifies behavioral, forensic, or geographic patterns that may connect multiple crimes to one offender.",
                isSituational: false
            },
            {
                id: "cdi_10",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is the primary goal of criminal profiling?",
                options: [
                "To identify the specific offender",
                "To narrow the suspect pool and guide investigation",
                "To predict future crimes",
                "To provide evidence in court"
                ],
                correct: 1,
                explanation: "Profiling helps narrow the suspect pool and provide investigative direction, not to specifically identify offenders.",
                isSituational: false
            },
            {
                id: "cdi_11",
                topic: "Specialized Crime Investigation",
                question: "What is 'surveillance' in criminal investigation?",
                options: [
                "Watching suspects secretly",
                "Systematic observation of persons or places for investigation",
                "Security camera monitoring",
                "Patrolling areas"
                ],
                correct: 1,
                explanation: "Surveillance is the systematic observation of persons, places, or things for investigative purposes.",
                isSituational: false
            },
            {
                id: "cdi_12",
                topic: "Traffic Management",
                question: "What is 'undercover operation'?",
                options: [
                "Operation under cover of darkness",
                "Investigator assumes false identity to gather evidence",
                "Hidden investigation",
                "Secret mission"
                ],
                correct: 1,
                explanation: "Undercover operation involves an investigator assuming a false identity to gather evidence.",
                isSituational: false
            },
            {
                id: "cdi_13",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'informant'?",
                options: [
                "Person who provides information about criminal activity",
                "Police officer informant",
                "News reporter",
                "Court witness"
                ],
                correct: 0,
                explanation: "An informant is a person who provides information about criminal activity to law enforcement.",
                isSituational: false
            },
            {
                id: "cdi_14",
                topic: "Specialized Crime Investigation",
                question: "What is 'wiretapping'?",
                options: [
                "Fixing wires",
                "Electronic surveillance of communications",
                "Wire repair",
                "Telephone installation"
                ],
                correct: 1,
                explanation: "Wiretapping is electronic surveillance of telephone or other communications.",
                isSituational: false
            },
            {
                id: "cdi_15",
                topic: "Traffic Management",
                question: "What is 'search warrant'?",
                options: [
                "Warrant to search",
                "Court order authorizing search of specific location for evidence",
                "Police authorization",
                "Investigation permit"
                ],
                correct: 1,
                explanation: "A search warrant is a court order authorizing law enforcement to search a specific location for evidence.",
                isSituational: false
            },
            {
                id: "cdi_16",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'arrest warrant'?",
                options: [
                "Warrant to arrest",
                "Court order authorizing the arrest of a specific person",
                "Police authorization",
                "Investigation permit"
                ],
                correct: 1,
                explanation: "An arrest warrant is a court order authorizing the arrest of a specific person.",
                isSituational: false
            },
            {
                id: "cdi_17",
                topic: "Specialized Crime Investigation",
                question: "What is 'probable cause'?",
                options: [
                "Possible cause",
                "Facts and circumstances that would lead a reasonable person to believe a crime was committed",
                "Probable reason",
                "Likely cause"
                ],
                correct: 1,
                explanation: "Probable cause refers to facts and circumstances that would lead a reasonable person to believe a crime was committed.",
                isSituational: false
            },
            {
                id: "cdi_18",
                topic: "Traffic Management",
                question: "What is 'reasonable suspicion'?",
                options: [
                "Reasonable doubt",
                "Specific, articulable facts suggesting criminal activity",
                "Possible crime",
                "Likely crime"
                ],
                correct: 1,
                explanation: "Reasonable suspicion is a lower standard than probable cause, based on specific facts suggesting criminal activity.",
                isSituational: false
            },
            {
                id: "cdi_19",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'exclusionary rule'?",
                options: [
                "Rule about excluding witnesses",
                "Evidence obtained illegally cannot be used in court",
                "Exclusion of certain crimes",
                "Rule about excluding evidence"
                ],
                correct: 1,
                explanation: "The exclusionary rule prohibits the use of evidence obtained in violation of constitutional rights.",
                isSituational: false
            },
            {
                id: "cdi_20",
                topic: "Specialized Crime Investigation",
                question: "What is 'Miranda rights'?",
                options: [
                "Rights about mirroring",
                "Rights that must be read to suspects before custodial interrogation",
                "Miranda warning",
                "Police rights"
                ],
                correct: 1,
                explanation: "Miranda rights are warnings that must be given to suspects before custodial interrogation.",
                isSituational: false
            },
            {
                id: "cdi_21",
                topic: "Traffic Management",
                question: "What is 'custodial interrogation'?",
                options: [
                "Interrogation in custody",
                "Questioning of a detained or deprived of freedom person",
                "Custody interrogation",
                "Prison questioning"
                ],
                correct: 1,
                explanation: "Custodial interrogation is questioning of a person who is detained or deprived of freedom.",
                isSituational: false
            },
            {
                id: "cdi_22",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'lineup'?",
                options: [
                "Line formation",
                "Identification procedure where witness views suspects",
                "Police lineup",
                "Queue of suspects"
                ],
                correct: 1,
                explanation: "A lineup is an identification procedure where a witness views a group of suspects.",
                isSituational: false
            },
            {
                id: "cdi_23",
                topic: "Specialized Crime Investigation",
                question: "What is 'photo array'?",
                options: [
                "Photo collection",
                "Identification procedure using photographs",
                "Photo lineup",
                "Picture display"
                ],
                correct: 1,
                explanation: "A photo array is an identification procedure using photographs of suspects.",
                isSituational: false
            },
            {
                id: "cdi_24",
                topic: "Traffic Management",
                question: "What is 'showup'?",
                options: [
                "Display of evidence",
                "One-on-one identification procedure",
                "Evidence presentation",
                "Crime scene display"
                ],
                correct: 1,
                explanation: "A showup is a one-on-one identification procedure where a witness views a single suspect.",
                isSituational: false
            },
            {
                id: "cdi_25",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'interrogation'?",
                options: [
                "Questioning between equals",
                "Systematic questioning of suspects to obtain information",
                "Interview",
                "Conversation"
                ],
                correct: 1,
                explanation: "Interrogation is systematic questioning of suspects to obtain information about crimes.",
                isSituational: false
            },
            {
                id: "cdi_26",
                topic: "Specialized Crime Investigation",
                question: "What is 'interview'?",
                options: [
                "Formal questioning",
                "Information-gathering conversation with witnesses or victims",
                "Police questioning",
                "Formal interrogation"
                ],
                correct: 1,
                explanation: "An interview is an information-gathering conversation with witnesses or victims, not suspects.",
                isSituational: false
            },
            {
                id: "cdi_27",
                topic: "Traffic Management",
                question: "What is 'polygraph'?",
                options: [
                "Graph machine",
                "Lie detector that measures physiological responses",
                "Poly graph",
                "Multiple graphs"
                ],
                correct: 1,
                explanation: "A polygraph is a lie detector that measures physiological responses to determine truthfulness.",
                isSituational: false
            },
            {
                id: "cdi_28",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'voice stress analysis'?",
                options: [
                "Stress analysis",
                "Technique to detect deception through voice patterns",
                "Voice recording",
                "Audio analysis"
                ],
                correct: 1,
                explanation: "Voice stress analysis detects deception by analyzing changes in voice patterns.",
                isSituational: false
            },
            {
                id: "cdi_29",
                topic: "Specialized Crime Investigation",
                question: "What is 'statement analysis'?",
                options: [
                "Analyzing statements",
                "Examination of written or spoken statements for deception indicators",
                "Statement review",
                "Text analysis"
                ],
                correct: 1,
                explanation: "Statement analysis examines written or spoken statements for indicators of deception.",
                isSituational: false
            },
            {
                id: "cdi_30",
                topic: "Traffic Management",
                question: "What is 'behavioral analysis'?",
                options: [
                "Behavior study",
                "Analysis of behavior patterns to predict criminal activity",
                "Criminal behavior",
                "Psychological analysis"
                ],
                correct: 1,
                explanation: "Behavioral analysis examines behavior patterns to predict and understand criminal activity.",
                isSituational: false
            },
            {
                id: "cdi_31",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'geographic profiling'?",
                options: [
                "Profile of geography",
                "Analysis of crime locations to predict offender's base",
                "Map analysis",
                "Location profiling"
                ],
                correct: 1,
                explanation: "Geographic profiling analyzes crime locations to predict where an offender lives or operates.",
                isSituational: false
            },
            {
                id: "cdi_32",
                topic: "Specialized Crime Investigation",
                question: "What is 'investigative psychology'?",
                options: [
                "Psychology of investigators",
                "Application of psychology to criminal investigation",
                "Police psychology",
                "Detective psychology"
                ],
                correct: 1,
                explanation: "Investigative psychology applies psychological principles to criminal investigation.",
                isSituational: false
            },
            {
                id: "cdi_33",
                topic: "Traffic Management",
                question: "What is 'crime scene investigation'?",
                options: [
                "Investigating crimes",
                "Systematic examination of crime scene for evidence",
                "Scene examination",
                "Location investigation"
                ],
                correct: 1,
                explanation: "Crime scene investigation is the systematic examination of a crime scene for evidence.",
                isSituational: false
            },
            {
                id: "cdi_34",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'chain of custody'?",
                options: [
                "Chain of evidence",
                "Documentation of evidence handling from collection to court",
                "Custody chain",
                "Evidence chain"
                ],
                correct: 1,
                explanation: "Chain of custody documents the handling of evidence from collection to court presentation.",
                isSituational: false
            },
            {
                id: "cdi_35",
                topic: "Specialized Crime Investigation",
                question: "What is 'evidence collection'?",
                options: [
                "Collecting evidence",
                "Systematic gathering of evidence from crime scenes",
                "Evidence gathering",
                "Scene collection"
                ],
                correct: 1,
                explanation: "Evidence collection is the systematic gathering of evidence from crime scenes.",
                isSituational: false
            },
            {
                id: "cdi_36",
                topic: "Traffic Management",
                question: "What is 'evidence preservation'?",
                options: [
                "Keeping evidence safe",
                "Protecting evidence from contamination or degradation",
                "Evidence storage",
                "Evidence protection"
                ],
                correct: 1,
                explanation: "Evidence preservation protects evidence from contamination, degradation, or loss.",
                isSituational: false
            },
            {
                id: "cdi_37",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'evidence documentation'?",
                options: [
                "Documenting evidence",
                "Recording evidence through notes, photos, and sketches",
                "Evidence recording",
                "Scene documentation"
                ],
                correct: 1,
                explanation: "Evidence documentation records evidence through notes, photographs, and sketches.",
                isSituational: false
            },
            {
                id: "cdi_38",
                topic: "Specialized Crime Investigation",
                question: "What is 'evidence packaging'?",
                options: [
                "Packaging evidence",
                "Proper container and sealing of evidence for transport",
                "Evidence boxing",
                "Evidence wrapping"
                ],
                correct: 1,
                explanation: "Evidence packaging involves proper containers and sealing for safe transport and storage.",
                isSituational: false
            },
            {
                id: "cdi_39",
                topic: "Traffic Management",
                question: "What is 'evidence transportation'?",
                options: [
                "Moving evidence",
                "Secure transfer of evidence to laboratory or storage",
                "Evidence transfer",
                "Evidence moving"
                ],
                correct: 1,
                explanation: "Evidence transportation is the secure transfer of evidence to laboratory or storage.",
                isSituational: false
            },
            {
                id: "cdi_40",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'evidence storage'?",
                options: [
                "Storing evidence",
                "Secure storage of evidence maintaining chain of custody",
                "Evidence keeping",
                "Evidence holding"
                ],
                correct: 1,
                explanation: "Evidence storage maintains secure storage while preserving chain of custody.",
                isSituational: false
            },
            {
                id: "cdi_41",
                topic: "Specialized Crime Investigation",
                question: "What is 'physical evidence'?",
                options: [
                "Physical objects",
                "Tangible objects that can prove or disprove facts",
                "Material evidence",
                "Object evidence"
                ],
                correct: 1,
                explanation: "Physical evidence consists of tangible objects that can prove or disprove facts.",
                isSituational: false
            },
            {
                id: "cdi_42",
                topic: "Traffic Management",
                question: "What is 'testimonial evidence'?",
                options: [
                "Testimony evidence",
                "Oral or written statements under oath",
                "Witness evidence",
                "Statement evidence"
                ],
                correct: 1,
                explanation: "Testimonial evidence consists of oral or written statements made under oath.",
                isSituational: false
            },
            {
                id: "cdi_43",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'documentary evidence'?",
                options: [
                "Document evidence",
                "Documents that prove or disprove facts",
                "Paper evidence",
                "Written evidence"
                ],
                correct: 1,
                explanation: "Documentary evidence consists of documents that prove or disprove facts.",
                isSituational: false
            },
            {
                id: "cdi_44",
                topic: "Specialized Crime Investigation",
                question: "What is 'demonstrative evidence'?",
                options: [
                "Demonstration evidence",
                "Objects that illustrate testimony",
                "Visual evidence",
                "Display evidence"
                ],
                correct: 1,
                explanation: "Demonstrative evidence are objects or displays that illustrate testimony.",
                isSituational: false
            },
            {
                id: "cdi_45",
                topic: "Traffic Management",
                question: "What is 'direct evidence'?",
                options: [
                "Direct proof",
                "Evidence that directly proves a fact without inference",
                "Straight evidence",
                "Clear evidence"
                ],
                correct: 1,
                explanation: "Direct evidence proves a fact directly without requiring inference.",
                isSituational: false
            },
            {
                id: "cdi_46",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'circumstantial evidence'?",
                options: [
                "Circumstance evidence",
                "Evidence that requires inference to prove a fact",
                "Indirect evidence",
                "Inferred evidence"
                ],
                correct: 1,
                explanation: "Circumstantial evidence requires inference to connect to a fact.",
                isSituational: false
            },
            {
                id: "cdi_47",
                topic: "Specialized Crime Investigation",
                question: "What is 'corroborating evidence'?",
                options: [
                "Corroborating testimony",
                "Evidence that supports or confirms other evidence",
                "Supporting evidence",
                "Confirming evidence"
                ],
                correct: 1,
                explanation: "Corroborating evidence supports or confirms other evidence.",
                isSituational: false
            },
            {
                id: "cdi_48",
                topic: "Traffic Management",
                question: "What is 'exculpatory evidence'?",
                options: [
                "Excusing evidence",
                "Evidence that tends to clear the defendant",
                "Clearing evidence",
                "Exonerating evidence"
                ],
                correct: 1,
                explanation: "Exculpatory evidence tends to clear the defendant of guilt.",
                isSituational: false
            },
            {
                id: "cdi_49",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'inculpatory evidence'?",
                options: [
                "Including evidence",
                "Evidence that tends to show defendant's guilt",
                "Guilt evidence",
                "Accusing evidence"
                ],
                correct: 1,
                explanation: "Inculpatory evidence tends to show the defendant's guilt.",
                isSituational: false
            },
            {
                id: "cdi_50",
                topic: "Specialized Crime Investigation",
                question: "What is 'preliminary investigation'?",
                options: [
                "Initial investigation",
                "Initial inquiry to determine if crime occurred and identify suspect",
                "Pre-investigation",
                "Early investigation"
                ],
                correct: 1,
                explanation: "Preliminary investigation determines if a crime occurred and identifies potential suspects.",
                isSituational: false
            },
            {
                id: "cdi_51",
                topic: "Traffic Management",
                question: "What is 'follow-up investigation'?",
                options: [
                "Following up",
                "Continuing investigation after initial leads",
                "Secondary investigation",
                "Continuing inquiry"
                ],
                correct: 1,
                explanation: "Follow-up investigation continues the investigation after initial leads are developed.",
                isSituational: false
            },
            {
                id: "cdi_52",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'task force'?",
                options: [
                "Force task",
                "Team of investigators working on specific crime problem",
                "Special team",
                "Investigation team"
                ],
                correct: 1,
                explanation: "A task force is a team of investigators working on a specific crime problem.",
                isSituational: false
            },
            {
                id: "cdi_53",
                topic: "Specialized Crime Investigation",
                question: "What is 'joint investigation'?",
                options: [
                "Joint operation",
                "Cooperation between agencies in investigation",
                "Combined investigation",
                "Shared investigation"
                ],
                correct: 1,
                explanation: "Joint investigation involves cooperation between multiple agencies.",
                isSituational: false
            },
            {
                id: "cdi_54",
                topic: "Specialized Crime Investigation",
                question: "What is 'multidisciplinary investigation'?",
                options: [
                "Multiple disciplines",
                "Investigation involving experts from various fields",
                "Specialized investigation",
                "Expert investigation"
                ],
                correct: 1,
                explanation: "Multidisciplinary investigation involves experts from various specialized fields.",
                isSituational: false
            },
            {
                id: "cdi_55",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'intelligence-led policing'?",
                options: [
                "Smart policing",
                "Using intelligence to guide policing decisions",
                "Intelligent policing",
                "Smart police work"
                ],
                correct: 1,
                explanation: "Intelligence-led policing uses intelligence analysis to guide policing decisions.",
                isSituational: false
            },
            {
                id: "cdi_56",
                topic: "Specialized Crime Investigation",
                question: "What is 'problem-oriented policing'?",
                options: [
                "Problem solving",
                "Addressing underlying problems that lead to crime",
                "Solution policing",
                "Issue policing"
                ],
                correct: 1,
                explanation: "Problem-oriented policing addresses underlying problems that lead to crime.",
                isSituational: false
            },
            {
                id: "cdi_57",
                topic: "Traffic Management",
                question: "What is 'community policing'?",
                options: [
                "Community police",
                "Partnership between police and community",
                "Local policing",
                "Neighborhood policing"
                ],
                correct: 1,
                explanation: "Community policing involves partnership between police and community.",
                isSituational: false
            },
            {
                id: "cdi_58",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'hot spots policing'?",
                options: [
                "Hot location policing",
                "Focusing resources on high-crime locations",
                "Heat policing",
                "Temperature policing"
                ],
                correct: 1,
                explanation: "Hot spots policing focuses resources on locations with high crime concentrations.",
                isSituational: false
            },
            {
                id: "cdi_59",
                topic: "Specialized Crime Investigation",
                question: "What is 'compstat'?",
                options: [
                "Computer statistics",
                "Management system for tracking crime statistics and holding police accountable",
                "Crime statistics",
                "Police statistics"
                ],
                correct: 1,
                explanation: "CompStat is a management system for tracking crime statistics and police accountability.",
                isSituational: false
            },
            {
                id: "cdi_60",
                topic: "Traffic Management",
                question: "What is 'crime mapping'?",
                options: [
                "Mapping crimes",
                "Visual representation of crime locations and patterns",
                "Crime charts",
                "Location mapping"
                ],
                correct: 1,
                explanation: "Crime mapping visually represents crime locations and patterns.",
                isSituational: false
            },
            {
                id: "cdi_61",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'crime analysis'?",
                options: [
                "Analyzing crimes",
                "Systematic study of crime patterns and trends",
                "Crime study",
                "Pattern analysis"
                ],
                correct: 1,
                explanation: "Crime analysis is the systematic study of crime patterns and trends.",
                isSituational: false
            },
            {
                id: "cdi_62",
                topic: "Specialized Crime Investigation",
                question: "What is 'criminal intelligence'?",
                options: [
                "Smart criminals",
                "Information about criminal activities and organizations",
                "Intelligent criminals",
                "Smart crime"
                ],
                correct: 1,
                explanation: "Criminal intelligence is information about criminal activities and organizations.",
                isSituational: false
            },
            {
                id: "cdi_63",
                topic: "Traffic Management",
                question: "What is 'informant management'?",
                options: [
                "Managing informants",
                "Handling and protecting informants",
                "Informant handling",
                "Source management"
                ],
                correct: 1,
                explanation: "Informant management involves handling and protecting informants.",
                isSituational: false
            },
            {
                id: "cdi_64",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'source protection'?",
                options: [
                "Protecting sources",
                "Keeping informants' identities confidential",
                "Source confidentiality",
                "Informant protection"
                ],
                correct: 1,
                explanation: "Source protection keeps informants' identities confidential for their safety.",
                isSituational: false
            },
            {
                id: "cdi_65",
                topic: "Specialized Crime Investigation",
                question: "What is 'sting operation'?",
                options: [
                "Stinging criminals",
                "Operation to catch criminals in the act",
                "Trap operation",
                "Catch operation"
                ],
                correct: 1,
                explanation: "A sting operation is designed to catch criminals in the act of committing crime.",
                isSituational: false
            },
            {
                id: "cdi_66",
                topic: "Traffic Management",
                question: "What is 'entrapment'?",
                options: [
                "Trapping criminals",
                "Inducing someone to commit crime they otherwise wouldn't",
                "Catching criminals",
                "Trapping operation"
                ],
                correct: 1,
                explanation: "Entrapment is inducing someone to commit a crime they otherwise wouldn't commit.",
                isSituational: false
            },
            {
                id: "cdi_67",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'buy-bust operation'?",
                options: [
                "Buying and busting",
                "Undercover operation where officer buys illegal item then arrests seller",
                "Purchase operation",
                "Drug operation"
                ],
                correct: 1,
                explanation: "Buy-bust is an undercover operation where an officer buys illegal items then arrests the seller.",
                isSituational: false
            },
            {
                id: "cdi_68",
                topic: "Specialized Crime Investigation",
                question: "What is 'raid'?",
                options: [
                "Raiding",
                "Surprise entry into location to make arrests or seize evidence",
                "Surprise attack",
                "Police entry"
                ],
                correct: 1,
                explanation: "A raid is a surprise entry into a location to make arrests or seize evidence.",
                isSituational: false
            },
            {
                id: "cdi_69",
                topic: "Traffic Management",
                question: "What is 'checkpoint'?",
                options: [
                "Checking point",
                "Temporary location for checking vehicles or persons",
                "Inspection point",
                "Control point"
                ],
                correct: 1,
                explanation: "A checkpoint is a temporary location for checking vehicles or persons.",
                isSituational: false
            },
            {
                id: "cdi_70",
                topic: "Traffic Management",
                question: "What is 'roadblock'?",
                options: [
                "Blocking road",
                "Barrier to stop vehicles for inspection",
                "Road barrier",
                "Street block"
                ],
                correct: 1,
                explanation: "A roadblock is a barrier used to stop vehicles for inspection.",
                isSituational: false
            },
            {
                id: "cdi_71",
                topic: "Specialized Crime Investigation",
                question: "What is 'patrol'?",
                options: [
                "Patrolling",
                "Regular movement through area to prevent and detect crime",
                "Area monitoring",
                "Security movement"
                ],
                correct: 1,
                explanation: "Patrol is regular movement through an area to prevent and detect crime.",
                isSituational: false
            },
            {
                id: "cdi_72",
                topic: "Traffic Management",
                question: "What is 'beat'?",
                options: [
                "Beating",
                "Assigned area for patrol",
                "Patrol area",
                "Security zone"
                ],
                correct: 1,
                explanation: "A beat is an assigned area for patrol officers.",
                isSituational: false
            },
            {
                id: "cdi_73",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'sector'?",
                options: [
                "Section",
                "Geographic subdivision for police operations",
                "Area division",
                "Zone division"
                ],
                correct: 1,
                explanation: "A sector is a geographic subdivision for police operations.",
                isSituational: false
            },
            {
                id: "cdi_74",
                topic: "Specialized Crime Investigation",
                question: "What is 'precinct'?",
                options: [
                "Precinct building",
                "Geographic area under police station jurisdiction",
                "Police station",
                "Station area"
                ],
                correct: 1,
                explanation: "A precinct is a geographic area under a police station's jurisdiction.",
                isSituational: false
            },
            {
                id: "cdi_75",
                topic: "Traffic Management",
                question: "What is 'dispatch'?",
                options: [
                "Sending out",
                "Sending police units to calls for service",
                "Police sending",
                "Unit deployment"
                ],
                correct: 1,
                explanation: "Dispatch is the process of sending police units to respond to calls for service.",
                isSituational: false
            },
            {
                id: "cdi_76",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'response time'?",
                options: [
                "Time to respond",
                "Time between call receipt and police arrival",
                "Response period",
                "Arrival time"
                ],
                correct: 1,
                explanation: "Response time is the time between call receipt and police arrival.",
                isSituational: false
            },
            {
                id: "cdi_77",
                topic: "Specialized Crime Investigation",
                question: "What is 'priority call'?",
                options: [
                "Important call",
                "Emergency requiring immediate response",
                "Urgent call",
                "Emergency call"
                ],
                correct: 1,
                explanation: "Priority calls are emergencies requiring immediate police response.",
                isSituational: false
            },
            {
                id: "cdi_78",
                topic: "Traffic Management",
                question: "What is 'non-priority call'?",
                options: [
                "Unimportant call",
                "Non-emergency call that can be handled later",
                "Low priority",
                "Routine call"
                ],
                correct: 1,
                explanation: "Non-priority calls are non-emergencies that can be handled later.",
                isSituational: false
            },
            {
                id: "cdi_79",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'report writing'?",
                options: [
                "Writing reports",
                "Documenting incidents and investigations",
                "Report documentation",
                "Incident recording"
                ],
                correct: 1,
                explanation: "Report writing documents incidents and investigations.",
                isSituational: false
            },
            {
                id: "cdi_80",
                topic: "Specialized Crime Investigation",
                question: "What is 'incident report'?",
                options: [
                "Incident documentation",
                "Initial report of a crime or incident",
                "Crime report",
                "Event report"
                ],
                correct: 1,
                explanation: "An incident report is the initial documentation of a crime or incident.",
                isSituational: false
            },
            {
                id: "cdi_81",
                topic: "Traffic Management",
                question: "What is 'supplemental report'?",
                options: [
                "Additional report",
                "Report adding information to original incident report",
                "Extra report",
                "Additional documentation"
                ],
                correct: 1,
                explanation: "A supplemental report adds information to the original incident report.",
                isSituational: false
            },
            {
                id: "cdi_82",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'case file'?",
                options: [
                "Case folder",
                "Complete collection of documents and evidence for a case",
                "File case",
                "Investigation file"
                ],
                correct: 1,
                explanation: "A case file is the complete collection of documents and evidence for a case.",
                isSituational: false
            },
            {
                id: "cdi_83",
                topic: "Specialized Crime Investigation",
                question: "What is 'case management'?",
                options: [
                "Managing cases",
                "Overseeing investigation from start to resolution",
                "Case handling",
                "Investigation management"
                ],
                correct: 1,
                explanation: "Case management oversees an investigation from start to resolution.",
                isSituational: false
            },
            {
                id: "cdi_84",
                topic: "Traffic Management",
                question: "What is 'case review'?",
                options: [
                "Reviewing cases",
                "Examination of case for quality and completeness",
                "Case examination",
                "Investigation review"
                ],
                correct: 1,
                explanation: "Case review examines a case for quality and completeness.",
                isSituational: false
            },
            {
                id: "cdi_85",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'case closure'?",
                options: [
                "Closing cases",
                "Formal ending of investigation when solved or closed",
                "Case ending",
                "Investigation closure"
                ],
                correct: 1,
                explanation: "Case closure is the formal ending of an investigation when solved or closed.",
                isSituational: false
            },
            {
                id: "cdi_86",
                topic: "Specialized Crime Investigation",
                question: "What is 'clearance rate'?",
                options: [
                "Clearing rate",
                "Percentage of crimes solved",
                "Solution rate",
                "Resolution rate"
                ],
                correct: 1,
                explanation: "Clearance rate is the percentage of crimes that are solved.",
                isSituational: false
            },
            {
                id: "cdi_87",
                topic: "Traffic Management",
                question: "What is 'solvability factors'?",
                options: [
                "Solving factors",
                "Characteristics that affect likelihood of solving a crime",
                "Solution factors",
                "Resolution factors"
                ],
                correct: 1,
                explanation: "Solvability factors are characteristics that affect the likelihood of solving a crime.",
                isSituational: false
            },
            {
                id: "cdi_88",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'victimology'?",
                options: [
                "Study of victims",
                "Study of victim characteristics and their role in crime",
                "Victim study",
                "Victim analysis"
                ],
                correct: 1,
                explanation: "Victimology studies victim characteristics and their role in crime.",
                isSituational: false
            },
            {
                id: "cdi_89",
                topic: "Specialized Crime Investigation",
                question: "What is 'victim assistance'?",
                options: [
                "Helping victims",
                "Services provided to crime victims",
                "Victim help",
                "Victim services"
                ],
                correct: 1,
                explanation: "Victim assistance provides services to help crime victims.",
                isSituational: false
            },
            {
                id: "cdi_90",
                topic: "Traffic Management",
                question: "What is 'victim rights'?",
                options: [
                "Victim entitlements",
                "Legal rights afforded to crime victims",
                "Victim entitlement",
                "Crime victim rights"
                ],
                correct: 1,
                explanation: "Victim rights are legal rights afforded to crime victims.",
                isSituational: false
            },
            {
                id: "cdi_91",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'witness protection'?",
                options: [
                "Protecting witnesses",
                "Security provided to witnesses in danger",
                "Witness security",
                "Witness safety"
                ],
                correct: 1,
                explanation: "Witness protection provides security to witnesses who are in danger.",
                isSituational: false
            },
            {
                id: "cdi_92",
                topic: "Specialized Crime Investigation",
                question: "What is 'whistleblower'?",
                options: [
                "Person who reports",
                "Person who reports illegal activity within organization",
                "Reporter",
                "Informant"
                ],
                correct: 1,
                explanation: "A whistleblower reports illegal activity within an organization.",
                isSituational: false
            },
            {
                id: "cdi_93",
                topic: "Traffic Management",
                question: "What is 'anonymous tip'?",
                options: [
                "Anonymous information",
                "Information provided without revealing source identity",
                "Secret information",
                "Hidden source"
                ],
                correct: 1,
                explanation: "An anonymous tip is information provided without revealing the source's identity.",
                isSituational: false
            },
            {
                id: "cdi_94",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'crimestoppers'?",
                options: [
                "Crime stoppers",
                "Program for anonymous reporting of crime information",
                "Crime prevention",
                "Stop crime program"
                ],
                correct: 1,
                explanation: "Crimstoppers is a program for anonymous reporting of crime information.",
                isSituational: false
            },
            {
                id: "cdi_95",
                topic: "Specialized Crime Investigation",
                question: "What is 'neighborhood watch'?",
                options: [
                "Watching neighborhood",
                "Community program where residents watch for suspicious activity",
                "Community watch",
                "Local watch"
                ],
                correct: 1,
                explanation: "Neighborhood watch is a community program where residents watch for suspicious activity.",
                isSituational: false
            },
            {
                id: "cdi_96",
                topic: "Traffic Management",
                question: "What is 'citizen arrest'?",
                options: [
                "Citizen arresting",
                "Arrest by private person without warrant",
                "Civilian arrest",
                "Private arrest"
                ],
                correct: 1,
                explanation: "Citizen arrest is an arrest by a private person without a warrant.",
                isSituational: false
            },
            {
                id: "cdi_97",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'private investigation'?",
                options: [
                "Private investigating",
                "Investigation conducted by private individuals or agencies",
                "Private inquiry",
                "Civilian investigation"
                ],
                correct: 1,
                explanation: "Private investigation is conducted by private individuals or agencies.",
                isSituational: false
            },
            {
                id: "cdi_98",
                topic: "Specialized Crime Investigation",
                question: "What is 'security investigation'?",
                options: [
                "Security investigating",
                "Investigation of security breaches or threats",
                "Security inquiry",
                "Protection investigation"
                ],
                correct: 1,
                explanation: "Security investigation examines security breaches or threats.",
                isSituational: false
            },
            {
                id: "cdi_99",
                topic: "Traffic Management",
                question: "What is 'internal investigation'?",
                options: [
                "Internal investigating",
                "Investigation within organization by internal affairs",
                "Organization investigation",
                "Department investigation"
                ],
                correct: 1,
                explanation: "Internal investigation is conducted within an organization by internal affairs.",
                isSituational: false
            },
            {
                id: "cdi_100",
                topic: "Fundamentals of Criminal Investigation",
                question: "What is 'external investigation'?",
                options: [
                "External investigating",
                "Investigation by outside agency",
                "Outside investigation",
                "External inquiry"
                ],
                correct: 1,
                explanation: "External investigation is conducted by an outside agency.",
                isSituational: false
            }
        ]
    },
    criminalisticsForensic: {
        name: "Criminalistics / Forensic Science",
        boardWeight: 15,
        description: "Dactyloscopy, forensic photography, questioned documents, polygraphy, and forensic chemistry/toxicology.",
        topics: [
            "Personal Identification (Dactyloscopy)",
            "Forensic Photography",
            "Questioned Documents",
            "Polygraphy",
            "Forensic Chemistry and Toxicology"
        ],
        questions: [
            {
                id: "crfs_1",
                topic: "Forensic Photography",
                question: "A homicide victim is found in a locked room with no signs of forced entry. The windows are sealed from the inside. As a criminalist, what is your FIRST priority in processing this scene?",
                options: [
                "Dust for fingerprints on all surfaces",
                "Photograph the scene from multiple angles",
                "Check for hidden entry points",
                "Interview potential witnesses immediately"
                ],
                correct: 1,
                explanation: "Documentation through photography is always the first priority in crime scene processing to preserve the scene's condition before any physical evidence collection.",
                isSituational: true
            },
            {
                id: "crfs_2",
                topic: "Forensic Photography",
                question: "A skeleton is found with no soft tissue remaining. What is the BEST method to determine the age at death?",
                options: [
                "Dental analysis",
                "Pubic symphysis examination",
                "Skull measurements",
                "Long bone length"
                ],
                correct: 1,
                explanation: "The pubic symphysis shows predictable changes with age and is one of the most reliable indicators for skeletal age determination.",
                isSituational: true
            },
            {
                id: "crfs_3",
                topic: "Questioned Documents",
                question: "You are called to a crime scene where a fire has occurred in a residential building. The fire department has already extinguished the flames. What is the MOST critical evidence you should look for to determine the point of origin?",
                options: [
                "Burned furniture and personal items",
                "Patterns of charring and V-shaped burn patterns",
                "Smoke detector readings",
                "Water damage patterns"
                ],
                correct: 1,
                explanation: "V-shaped burn patterns and charring patterns are key indicators of fire origin, as they show the direction and intensity of fire spread.",
                isSituational: true
            },
            {
                id: "crfs_4",
                topic: "Polygraphy",
                question: "A victim's blood is found at a crime scene, but the sample is degraded. What DNA analysis technique would be MOST appropriate?",
                options: [
                "RFLP analysis",
                "STR analysis",
                "Mitochondrial DNA analysis",
                "Option 4 (review item)"
                ],
                correct: 2,
                explanation: "Mitochondrial DNA is more abundant and resistant to degradation, making it suitable for degraded samples.",
                isSituational: true
            },
            {
                id: "crfs_5",
                topic: "Forensic Chemistry and Toxicology",
                question: "A victim has been shot, and you need to determine the range of fire. The bullet wound shows stippling around the entrance wound but no tattooing. What does this indicate about the range of fire?",
                options: [
                "Contact wound",
                "Close range (1-3 inches)",
                "Intermediate range (1-3 feet)",
                "Distant range (more than 3 feet)"
                ],
                correct: 2,
                explanation: "Stippling without tattooing indicates an intermediate range of approximately 1-3 feet, where gunpowder residues are present but not embedded in the skin.",
                isSituational: true
            },
            {
                id: "crfs_6",
                topic: "Questioned Documents",
                question: "A questioned document shows signs of alteration. What non-destructive technique should be used FIRST?",
                options: [
                "Chemical ink analysis",
                "Infrared examination",
                "Destructive sampling",
                "UV exposure only"
                ],
                correct: 1,
                explanation: "Infrared examination is non-destructive and can reveal alterations, erasures, and different inks.",
                isSituational: true
            },
            {
                id: "crfs_7",
                topic: "Personal Identification (Dactyloscopy)",
                question: "During a burglary investigation, you find a partial fingerprint on a glass window. The print is smudged and only shows the lower portion. What fingerprint classification system would be MOST useful for identification?",
                options: [
                "Henry Classification System",
                "AFIS (Automated Fingerprint Identification System)",
                "Galton-Henry System",
                "Vucetich System"
                ],
                correct: 1,
                explanation: "AFIS is designed to work with partial and degraded fingerprints, using minutiae point matching rather than traditional pattern classification.",
                isSituational: true
            },
            {
                id: "crfs_8",
                topic: "Questioned Documents",
                question: "A fire investigation reveals an irregular burn pattern on the floor. What does this suggest?",
                options: [
                "Normal fire spread",
                "Possible accelerant use",
                "Faulty wiring",
                "Natural causes"
                ],
                correct: 1,
                explanation: "Irregular burn patterns, especially on floors, often indicate the presence of accelerants and possible arson.",
                isSituational: true
            },
            {
                id: "crfs_9",
                topic: "Polygraphy",
                question: "A body is discovered in a river after being missing for 7 days. The body shows significant decomposition and bloating. What is the MOST challenging aspect of determining the cause of death in this case?",
                options: [
                "Identifying the victim",
                "Determining the time of death",
                "Finding trace evidence",
                "Detecting toxic substances"
                ],
                correct: 1,
                explanation: "Water immersion and advanced decomposition significantly alter the body's condition, making traditional methods of determining time of death unreliable.",
                isSituational: true
            },
            {
                id: "crfs_10",
                topic: "Forensic Chemistry and Toxicology",
                question: "A digital device is seized from a suspect. What is the FIRST step in forensic examination?",
                options: [
                "Turn on the device and examine files",
                "Create a forensic image of the device",
                "Delete irrelevant files",
                "Install forensic software on the device"
                ],
                correct: 1,
                explanation: "Creating a forensic image preserves the original evidence and allows examination without alteration.",
                isSituational: true
            },
            {
                id: "crfs_11",
                topic: "Personal Identification (Dactyloscopy)",
                question: "You are processing a hit-and-run scene at night. The victim's clothing shows paint transfer and rubber particles. What laboratory technique would BEST identify the make and model of the vehicle?",
                options: [
                "Gas Chromatography-Mass Spectrometry",
                "Fourier Transform Infrared Spectroscopy",
                "Scanning Electron Microscopy",
                "X-ray Fluorescence"
                ],
                correct: 1,
                explanation: "FTIR is particularly effective for analyzing paint layers and rubber compounds, allowing for comparison with known vehicle manufacturer databases.",
                isSituational: true
            },
            {
                id: "crfs_12",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'individual evidence' in forensic science?",
                options: [
                "Evidence that can be linked to a group",
                "Evidence that can be linked to a single source",
                "Evidence that is always reliable",
                "Evidence that is visual only"
                ],
                correct: 1,
                explanation: "Individual evidence can be linked to a single source with high certainty (e.g., fingerprints, DNA).",
                isSituational: false
            },
            {
                id: "crfs_13",
                topic: "Questioned Documents",
                question: "A suspect claims self-defense in a shooting incident. The victim was shot multiple times, including once in the back. What forensic evidence would be MOST critical to evaluate this claim?",
                options: [
                "Gunshot residue on the suspect's hands",
                "Bullet trajectory analysis",
                "The type of firearm used",
                "The victim's toxicology report"
                ],
                correct: 1,
                explanation: "Bullet trajectory analysis can determine the relative positions of shooter and victim, making it possible to verify or contradict self-defense claims.",
                isSituational: true
            },
            {
                id: "crfs_14",
                topic: "Polygraphy",
                question: "What is 'class evidence'?",
                options: [
                "Evidence from classroom settings",
                "Evidence that can only be linked to a group",
                "Evidence that is always individual",
                "Evidence that is unreliable"
                ],
                correct: 1,
                explanation: "Class evidence can only be associated with a group, not a single source (e.g., blood type, hair color).",
                isSituational: false
            },
            {
                id: "crfs_15",
                topic: "Forensic Chemistry and Toxicology",
                question: "During a drug raid, you find white powder in small plastic bags. The field test indicates possible cocaine. What is the NEXT step in the chain of custody?",
                options: [
                "Send it immediately to the crime lab",
                "Document the evidence with photographs and detailed notes",
                "Perform a confirmatory test on site",
                "Interview the suspect about the source"
                ],
                correct: 1,
                explanation: "Proper documentation is essential before any further testing or transport to maintain the chain of custody and evidence integrity.",
                isSituational: true
            },
            {
                id: "crfs_16",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'chain of custody'?",
                options: [
                "The sequence of ownership of evidence",
                "The documented process of evidence handling from collection to court",
                "The cost of evidence storage",
                "The legal requirements for evidence"
                ],
                correct: 1,
                explanation: "Chain of custody is the documentation of evidence handling to ensure integrity and admissibility in court.",
                isSituational: false
            },
            {
                id: "crfs_17",
                topic: "Questioned Documents",
                question: "A document examiner is asked to determine if a suicide note is authentic. What would be the FIRST characteristic to examine?",
                options: [
                "Handwriting characteristics",
                "Paper type and age",
                "Ink composition",
                "Spelling and grammar patterns"
                ],
                correct: 0,
                explanation: "Handwriting characteristics including letter formation, spacing, and pressure are the primary indicators in document examination.",
                isSituational: true
            },
            {
                id: "crfs_18",
                topic: "Questioned Documents",
                question: "What is 'probative value' of evidence?",
                options: [
                "The monetary value of evidence",
                "The ability of evidence to prove a fact in question",
                "The age of evidence",
                "The source of evidence"
                ],
                correct: 1,
                explanation: "Probative value refers to the extent to which evidence can prove a fact that is relevant to the case.",
                isSituational: false
            },
            {
                id: "crfs_19",
                topic: "Forensic Chemistry and Toxicology",
                question: "In a sexual assault case, the victim reports being drugged. What biological sample would be MOST appropriate for detecting date-rape drugs?",
                options: [
                "Blood sample",
                "Urine sample",
                "Hair sample",
                "Saliva sample"
                ],
                correct: 1,
                explanation: "Urine samples are most effective for detecting many date-rape drugs as they are excreted in urine and can be detected for longer periods than in blood.",
                isSituational: true
            },
            {
                id: "crfs_20",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'Daubert standard' in forensic evidence?",
                options: [
                "A standard for evidence storage",
                "A legal standard for admissibility of scientific evidence",
                "A quality control standard",
                "An international standard"
                ],
                correct: 1,
                explanation: "The Daubert standard is used by judges to assess the admissibility of scientific expert testimony and evidence.",
                isSituational: false
            },
            {
                id: "crfs_21",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is the primary purpose of criminalistics?",
                options: [
                "To apprehend criminals",
                "To apply scientific methods to investigate crimes",
                "To prosecute offenders in court",
                "To prevent crime from occurring"
                ],
                correct: 1,
                explanation: "Criminalistics is the application of scientific principles and techniques to the investigation of crime.",
                isSituational: false
            },
            {
                id: "crfs_22",
                topic: "Forensic Photography",
                question: "What is 'forensic science'?",
                options: [
                "Science of forests",
                "Application of science to legal matters",
                "Science of crime",
                "Science of evidence"
                ],
                correct: 1,
                explanation: "Forensic science is the application of scientific methods to legal matters and criminal investigation.",
                isSituational: false
            },
            {
                id: "crfs_23",
                topic: "Questioned Documents",
                question: "Which of the following is NOT a fundamental principle of crime scene investigation?",
                options: [
                "Secure the scene",
                "Document everything",
                "Option 3 (review item)",
                "Option 4 (review item)"
                ],
                correct: 3,
                explanation: "Allowing unauthorized personnel to enter the scene violates the fundamental principle of scene security and evidence preservation.",
                isSituational: false
            },
            {
                id: "crfs_24",
                topic: "Polygraphy",
                question: "What is 'forensic pathology'?",
                options: [
                "Study of diseases",
                "Study of cause of death",
                "Study of bones",
                "Study of drugs"
                ],
                correct: 1,
                explanation: "Forensic pathology studies cause of death.",
                isSituational: false
            },
            {
                id: "crfs_25",
                topic: "Forensic Chemistry and Toxicology",
                question: "What does the acronym 'LOCARD' refer to in forensic science?",
                options: [
                "A type of fingerprint classification",
                "The exchange principle of evidence",
                "A DNA analysis technique",
                "A ballistic identification method"
                ],
                correct: 1,
                explanation: "Locard's Exchange Principle states that every contact leaves a trace - when two objects come into contact, there is transfer of material.",
                isSituational: false
            },
            {
                id: "crfs_26",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'forensic toxicology'?",
                options: [
                "Study of poisons",
                "Study of drugs and poisons in body",
                "Study of toxins",
                "Study of chemicals"
                ],
                correct: 1,
                explanation: "Forensic toxicology studies drugs and poisons in the body.",
                isSituational: false
            },
            {
                id: "crfs_27",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is the minimum number of matching points required for fingerprint identification in most jurisdictions?",
                options: [
                "5 points",
                "8 points",
                "12 points",
                "16 points"
                ],
                correct: 2,
                explanation: "Most jurisdictions require a minimum of 12 matching minutiae points for positive fingerprint identification.",
                isSituational: false
            },
            {
                id: "crfs_28",
                topic: "Questioned Documents",
                question: "What is 'forensic biology'?",
                options: [
                "Study of plants",
                "Analysis of biological evidence",
                "Study of animals",
                "Study of cells"
                ],
                correct: 1,
                explanation: "Forensic biology analyzes biological evidence.",
                isSituational: false
            },
            {
                id: "crfs_29",
                topic: "Personal Identification (Dactyloscopy)",
                question: "Which type of evidence is considered class evidence rather than individual evidence?",
                options: [
                "Fingerprints",
                "DNA profile",
                "Blood type",
                "Tool marks"
                ],
                correct: 2,
                explanation: "Blood type is class evidence because it can only narrow down to a group of people, whereas fingerprints and DNA are individual evidence.",
                isSituational: false
            },
            {
                id: "crfs_30",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'forensic chemistry'?",
                options: [
                "Study of chemicals",
                "Analysis of chemical evidence",
                "Study of reactions",
                "Study of elements"
                ],
                correct: 1,
                explanation: "Forensic chemistry analyzes chemical evidence.",
                isSituational: false
            },
            {
                id: "crfs_31",
                topic: "Forensic Photography",
                question: "What is the primary function of a crime scene photographer?",
                options: [
                "To collect physical evidence",
                "To create a permanent visual record of the scene",
                "To interview witnesses",
                "To arrest suspects"
                ],
                correct: 1,
                explanation: "Crime scene photographers create a permanent visual record that documents the scene condition and evidence placement.",
                isSituational: false
            },
            {
                id: "crfs_32",
                topic: "Forensic Photography",
                question: "What is 'forensic anthropology'?",
                options: [
                "Study of humans",
                "Analysis of skeletal remains",
                "Study of cultures",
                "Study of evolution"
                ],
                correct: 1,
                explanation: "Forensic anthropology analyzes skeletal remains.",
                isSituational: false
            },
            {
                id: "crfs_33",
                topic: "Personal Identification (Dactyloscopy)",
                question: "Which light source is most effective for detecting latent fingerprints on multicolored surfaces?",
                options: [
                "White light",
                "UV light",
                "ALS (Alternate Light Source)",
                "Infrared light"
                ],
                correct: 2,
                explanation: "ALS with various filters can make latent fingerprints visible on difficult surfaces by causing fluorescence or contrast enhancement.",
                isSituational: false
            },
            {
                id: "crfs_34",
                topic: "Polygraphy",
                question: "What is 'forensic odontology'?",
                options: [
                "Study of teeth",
                "Dental identification",
                "Study of mouth",
                "Study of gums"
                ],
                correct: 1,
                explanation: "Forensic odontology uses dental identification.",
                isSituational: false
            },
            {
                id: "crfs_35",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary purpose of evidence packaging?",
                options: [
                "To make evidence look presentable in court",
                "To prevent contamination and preserve integrity",
                "To organize evidence for storage",
                "To reduce the weight of evidence"
                ],
                correct: 1,
                explanation: "Proper packaging prevents contamination, degradation, and loss of evidence integrity.",
                isSituational: false
            },
            {
                id: "crfs_36",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'forensic entomology'?",
                options: [
                "Study of insects",
                "Using insects to determine time of death",
                "Study of bugs",
                "Study of pests"
                ],
                correct: 1,
                explanation: "Forensic entomology uses insects to determine time of death.",
                isSituational: false
            },
            {
                id: "crfs_37",
                topic: "Forensic Photography",
                question: "Which method is used to determine the caliber of a bullet?",
                options: [
                "Measuring the bullet diameter",
                "Weighing the bullet",
                "Analyzing the bullet composition",
                "Examining the rifling marks"
                ],
                correct: 0,
                explanation: "Caliber is determined by measuring the bullet's diameter in hundredths of an inch or millimeters.",
                isSituational: false
            },
            {
                id: "crfs_38",
                topic: "Questioned Documents",
                question: "What is 'forensic botany'?",
                options: [
                "Study of plants",
                "Using plant evidence",
                "Study of flowers",
                "Study of trees"
                ],
                correct: 1,
                explanation: "Forensic botany uses plant evidence.",
                isSituational: false
            },
            {
                id: "crfs_39",
                topic: "Polygraphy",
                question: "What is the primary difference between presumptive and confirmatory tests?",
                options: [
                "Presumptive tests are more accurate",
                "Confirmatory tests are faster",
                "Presumptive tests screen for possible presence, confirmatory tests identify definitively",
                "There is no difference"
                ],
                correct: 2,
                explanation: "Presumptive tests indicate possible presence of a substance, while confirmatory tests provide definitive identification.",
                isSituational: false
            },
            {
                id: "crfs_40",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'forensic geology'?",
                options: [
                "Study of earth",
                "Using soil and rock evidence",
                "Study of minerals",
                "Study of stones"
                ],
                correct: 1,
                explanation: "Forensic geology uses soil and rock evidence.",
                isSituational: false
            },
            {
                id: "crfs_41",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is the primary purpose of a presumptive test for blood?",
                options: [
                "To determine the blood type",
                "To indicate the possible presence of blood",
                "To identify the source of blood",
                "To determine the age of blood stains"
                ],
                correct: 1,
                explanation: "Presumptive tests like Kastle-Meyer or luminol indicate the possible presence of blood but cannot definitively identify it.",
                isSituational: false
            },
            {
                id: "crfs_42",
                topic: "Forensic Photography",
                question: "What is 'forensic ballistics'?",
                options: [
                "Study of balls",
                "Analysis of firearms and ammunition",
                "Study of bullets",
                "Study of guns"
                ],
                correct: 1,
                explanation: "Forensic ballistics analyzes firearms and ammunition.",
                isSituational: false
            },
            {
                id: "crfs_43",
                topic: "Questioned Documents",
                question: "Which technique is used to determine if two paint samples came from the same source?",
                options: [
                "Color comparison only",
                "Layer-by-layer analysis using FTIR or microscopy",
                "Weight comparison",
                "Smell test"
                ],
                correct: 1,
                explanation: "Paint analysis requires examining the number, color, thickness, and chemical composition of each layer.",
                isSituational: false
            },
            {
                id: "crfs_44",
                topic: "Polygraphy",
                question: "What is 'forensic serology'?",
                options: [
                "Study of blood",
                "Analysis of bodily fluids",
                "Study of serum",
                "Study of plasma"
                ],
                correct: 1,
                explanation: "Forensic serology analyzes bodily fluids.",
                isSituational: false
            },
            {
                id: "crfs_45",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary challenge in collecting DNA from touch DNA samples?",
                options: [
                "DNA is too large to collect",
                "Very small amounts of DNA are present",
                "Touch DNA degrades instantly",
                "Touch DNA cannot be analyzed"
                ],
                correct: 1,
                explanation: "Touch DNA samples contain very small amounts of DNA, making collection and amplification challenging.",
                isSituational: false
            },
            {
                id: "crfs_46",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'DNA profiling'?",
                options: [
                "Drawing DNA",
                "Identifying individuals through DNA",
                "DNA testing",
                "DNA analysis"
                ],
                correct: 1,
                explanation: "DNA profiling identifies individuals through DNA.",
                isSituational: false
            },
            {
                id: "crfs_47",
                topic: "Forensic Photography",
                question: "What is the purpose of a control sample in forensic analysis?",
                options: [
                "To test the analyst's skill",
                "To ensure the test is working properly and identify contamination",
                "To provide a sample for comparison",
                "To reduce costs"
                ],
                correct: 1,
                explanation: "Control samples verify that the analysis is working correctly and help identify contamination or errors.",
                isSituational: false
            },
            {
                id: "crfs_48",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'fingerprint'?",
                options: [
                "Print of finger",
                "Unique pattern on fingertips",
                "Thumb print",
                "Hand print"
                ],
                correct: 1,
                explanation: "Fingerprint is unique pattern on fingertips.",
                isSituational: false
            },
            {
                id: "crfs_49",
                topic: "Polygraphy",
                question: "Which method is used to determine if a hair sample is human or animal?",
                options: [
                "Length measurement",
                "Microscopic examination of medulla pattern and cuticle",
                "Color comparison",
                "Weight measurement"
                ],
                correct: 1,
                explanation: "Microscopic examination of the medulla pattern and cuticle structure can distinguish human from animal hair.",
                isSituational: false
            },
            {
                id: "crfs_50",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'latent fingerprint'?",
                options: [
                "Visible fingerprint",
                "Invisible fingerprint requiring development",
                "Hidden fingerprint",
                "Secret fingerprint"
                ],
                correct: 1,
                explanation: "Latent fingerprint is invisible and requires development.",
                isSituational: false
            },
            {
                id: "crfs_51",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary use of gas chromatography in forensic science?",
                options: [
                "To separate and analyze volatile compounds",
                "To examine fingerprints",
                "To analyze DNA",
                "To measure bullet trajectories"
                ],
                correct: 0,
                explanation: "Gas chromatography separates and analyzes volatile compounds, commonly used for drug and arson analysis.",
                isSituational: false
            },
            {
                id: "crfs_52",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'fingerprint classification'?",
                options: [
                "Grouping fingerprints",
                "Categorizing fingerprint patterns",
                "Sorting fingerprints",
                "Classifying prints"
                ],
                correct: 1,
                explanation: "Fingerprint classification categorizes fingerprint patterns.",
                isSituational: false
            },
            {
                id: "crfs_53",
                topic: "Questioned Documents",
                question: "What is the significance of the 'angle of impact' in bloodstain pattern analysis?",
                options: [
                "It determines the blood type",
                "It helps determine the direction and position of the source",
                "It indicates the age of the blood",
                "It shows the victim's blood pressure"
                ],
                correct: 1,
                explanation: "Angle of impact calculations help determine the direction and position of the blood source when the stain was created.",
                isSituational: false
            },
            {
                id: "crfs_54",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'AFIS'?",
                options: [
                "Automated fingerprint system",
                "Automated Fingerprint Identification System",
                "Fingerprint analysis system",
                "Fingerprint identification system"
                ],
                correct: 1,
                explanation: "AFIS is Automated Fingerprint Identification System.",
                isSituational: false
            },
            {
                id: "crfs_55",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary purpose of a crime scene sketch?",
                options: [
                "To replace photographs",
                "To show precise measurements and relationships between evidence",
                "To create artistic representation",
                "To document witness statements"
                ],
                correct: 1,
                explanation: "Crime scene sketches provide precise measurements and show the spatial relationships between evidence items.",
                isSituational: false
            },
            {
                id: "crfs_56",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'bloodstain pattern analysis'?",
                options: [
                "Analyzing blood patterns",
                "Interpreting bloodstain patterns at crime scenes",
                "Blood pattern study",
                "Blood stain analysis"
                ],
                correct: 1,
                explanation: "Bloodstain pattern analysis interprets bloodstain patterns at crime scenes.",
                isSituational: false
            },
            {
                id: "crfs_57",
                topic: "Personal Identification (Dactyloscopy)",
                question: "Which type of fingerprint pattern is the MOST common?",
                options: [
                "Arch",
                "Loop",
                "Whorl",
                "Composite"
                ],
                correct: 1,
                explanation: "Loop patterns are the most common, occurring in about 60-65% of fingerprints.",
                isSituational: false
            },
            {
                id: "crfs_58",
                topic: "Questioned Documents",
                question: "What is 'spatter'?",
                options: [
                "Blood drops",
                "Blood droplets created by force",
                "Blood spray",
                "Blood spots"
                ],
                correct: 1,
                explanation: "Spatter is blood droplets created by force.",
                isSituational: false
            },
            {
                id: "crfs_59",
                topic: "Polygraphy",
                question: "What is the primary function of a forensic pathologist?",
                options: [
                "To collect evidence at crime scenes",
                "To perform autopsies and determine cause of death",
                "To analyze fingerprints",
                "To testify in court about procedures"
                ],
                correct: 1,
                explanation: "Forensic pathologists perform autopsies to determine cause and manner of death.",
                isSituational: false
            },
            {
                id: "crfs_60",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'impact spatter'?",
                options: [
                "Blood from impact",
                "Spatter from forceful impact",
                "Impact blood",
                "Force spatter"
                ],
                correct: 1,
                explanation: "Impact spatter is from forceful impact.",
                isSituational: false
            },
            {
                id: "crfs_61",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'individual characteristics' in tool mark analysis?",
                options: [
                "Characteristics shared by all tools of that type",
                "Unique microscopic imperfections on a specific tool",
                "The size of the tool",
                "The material of the tool"
                ],
                correct: 1,
                explanation: "Individual characteristics are unique microscopic imperfections that can identify a specific tool.",
                isSituational: false
            },
            {
                id: "crfs_62",
                topic: "Forensic Photography",
                question: "What is 'passive spatter'?",
                options: [
                "Passive blood",
                "Spatter from gravity only",
                "Gravity spatter",
                "Drip spatter"
                ],
                correct: 1,
                explanation: "Passive spatter is from gravity only.",
                isSituational: false
            },
            {
                id: "crfs_63",
                topic: "Questioned Documents",
                question: "What is the primary purpose of luminol at a crime scene?",
                options: [
                "To clean the scene",
                "To detect trace amounts of blood",
                "To collect fingerprints",
                "To preserve DNA"
                ],
                correct: 1,
                explanation: "Luminol is used to detect trace amounts of blood that may not be visible to the naked eye.",
                isSituational: false
            },
            {
                id: "crfs_64",
                topic: "Polygraphy",
                question: "What is 'cast-off pattern'?",
                options: [
                "Thrown blood",
                "Pattern from swinging object",
                "Swing pattern",
                "Arc pattern"
                ],
                correct: 1,
                explanation: "Cast-off pattern is from swinging object.",
                isSituational: false
            },
            {
                id: "crfs_65",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the 'critical angle' in ballistic trajectory analysis?",
                options: [
                "The angle at which a bullet was fired",
                "The angle at which a bullet will ricochet",
                "The angle of the gun barrel",
                "The angle of the target"
                ],
                correct: 1,
                explanation: "The critical angle is the angle at which a bullet is likely to ricochet rather than penetrate.",
                isSituational: false
            },
            {
                id: "crfs_66",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'arterial spurt'?",
                options: [
                "Artery blood",
                "Spurt from bleeding artery",
                "Artery spray",
                "Blood spurt"
                ],
                correct: 1,
                explanation: "Arterial spurt is from bleeding artery.",
                isSituational: false
            },
            {
                id: "crfs_67",
                topic: "Forensic Photography",
                question: "What is the primary challenge in analyzing degraded DNA?",
                options: [
                "Too much DNA present",
                "DNA is fragmented and difficult to amplify",
                "Degraded DNA is always contaminated",
                "Degraded DNA cannot be analyzed"
                ],
                correct: 1,
                explanation: "Degraded DNA is fragmented into small pieces, making it difficult to amplify and analyze.",
                isSituational: false
            },
            {
                id: "crfs_68",
                topic: "Questioned Documents",
                question: "What is 'trace evidence'?",
                options: [
                "Small evidence",
                "Tiny fragments of evidence",
                "Microscopic evidence",
                "Small particles"
                ],
                correct: 1,
                explanation: "Trace evidence is tiny fragments of evidence.",
                isSituational: false
            },
            {
                id: "crfs_69",
                topic: "Polygraphy",
                question: "What is the purpose of a 'blind test' in forensic analysis?",
                options: [
                "To test without seeing the evidence",
                "To prevent bias by not telling the analyst what result is expected",
                "To conduct the test in the dark",
                "To test without equipment"
                ],
                correct: 1,
                explanation: "Blind tests prevent analyst bias by not revealing expected results or case information.",
                isSituational: false
            },
            {
                id: "crfs_70",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'hair analysis'?",
                options: [
                "Analyzing hair",
                "Examining hair for evidence",
                "Hair study",
                "Hair examination"
                ],
                correct: 1,
                explanation: "Hair analysis examines hair for evidence.",
                isSituational: false
            },
            {
                id: "crfs_71",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is the primary difference between male and female skeletal remains?",
                options: [
                "Female bones are always smaller",
                "The pelvis shape and skull features differ",
                "Male bones are always heavier",
                "There is no difference"
                ],
                correct: 1,
                explanation: "The pelvis shape and certain skull features are the most reliable indicators of biological sex in skeletal remains.",
                isSituational: false
            },
            {
                id: "crfs_72",
                topic: "Forensic Photography",
                question: "What is 'fiber analysis'?",
                options: [
                "Analyzing fibers",
                "Examining fibers for evidence",
                "Fiber study",
                "Fiber examination"
                ],
                correct: 1,
                explanation: "Fiber analysis examines fibers for evidence.",
                isSituational: false
            },
            {
                id: "crfs_73",
                topic: "Questioned Documents",
                question: "What is 'entomological evidence' used for in forensics?",
                options: [
                "To identify insect species only",
                "To estimate time of death based on insect activity",
                "To determine cause of death",
                "To identify the victim"
                ],
                correct: 1,
                explanation: "Entomological evidence, particularly insect development stages, helps estimate the postmortem interval.",
                isSituational: false
            },
            {
                id: "crfs_74",
                topic: "Polygraphy",
                question: "What is 'glass analysis'?",
                options: [
                "Analyzing glass",
                "Examining glass fragments",
                "Glass study",
                "Glass examination"
                ],
                correct: 1,
                explanation: "Glass analysis examines glass fragments.",
                isSituational: false
            },
            {
                id: "crfs_75",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary purpose of a 'search warrant' in evidence collection?",
                options: [
                "To allow police to enter any building",
                "To legally authorize the search of specific locations for evidence",
                "To protect police from liability",
                "To notify the suspect"
                ],
                correct: 1,
                explanation: "A search warrant legally authorizes the search of specific locations for specific evidence.",
                isSituational: false
            },
            {
                id: "crfs_76",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'soil analysis'?",
                options: [
                "Analyzing soil",
                "Examining soil for evidence",
                "Soil study",
                "Soil examination"
                ],
                correct: 1,
                explanation: "Soil analysis examines soil for evidence.",
                isSituational: false
            },
            {
                id: "crfs_77",
                topic: "Questioned Documents",
                question: "What is the significance of 'trace evidence' in criminal investigations?",
                options: [
                "It is always conclusive",
                "It can establish links between people, places, and objects",
                "It is only useful for DNA analysis",
                "It is rarely admissible in court"
                ],
                correct: 1,
                explanation: "Trace evidence like fibers, hair, and soil can establish links between suspects, victims, and crime scenes.",
                isSituational: false
            },
            {
                id: "crfs_78",
                topic: "Questioned Documents",
                question: "What is 'paint analysis'?",
                options: [
                "Analyzing paint",
                "Examining paint for evidence",
                "Paint study",
                "Paint examination"
                ],
                correct: 1,
                explanation: "Paint analysis examines paint for evidence.",
                isSituational: false
            },
            {
                id: "crfs_79",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary use of mass spectrometry in forensic science?",
                options: [
                "To separate compounds",
                "To identify and quantify chemical substances",
                "To examine visual evidence",
                "To measure distances"
                ],
                correct: 1,
                explanation: "Mass spectrometry identifies and quantifies chemical substances by their mass-to-charge ratio.",
                isSituational: false
            },
            {
                id: "crfs_80",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'toolmark analysis'?",
                options: [
                "Analyzing tools",
                "Examining marks left by tools",
                "Tool study",
                "Tool examination"
                ],
                correct: 1,
                explanation: "Toolmark analysis examines marks left by tools.",
                isSituational: false
            },
            {
                id: "crfs_81",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'class characteristics' in footwear impression analysis?",
                options: [
                "Unique wear patterns on a specific shoe",
                "Design features shared by all shoes of that make and model",
                "The size of the shoe",
                "The material of the shoe"
                ],
                correct: 1,
                explanation: "Class characteristics are design features shared by all shoes of a particular make and model.",
                isSituational: false
            },
            {
                id: "crfs_82",
                topic: "Forensic Photography",
                question: "What is 'imprint evidence'?",
                options: [
                "Printed evidence",
                "Impressions left by objects",
                "Mark evidence",
                "Stamp evidence"
                ],
                correct: 1,
                explanation: "Imprint evidence are impressions left by objects.",
                isSituational: false
            },
            {
                id: "crfs_83",
                topic: "Questioned Documents",
                question: "What is the primary purpose of a 'control sample' in DNA analysis?",
                options: [
                "To compare with the evidence sample",
                "To ensure the laboratory equipment is working properly",
                "To provide a sample for the defense",
                "To reduce the cost of analysis"
                ],
                correct: 1,
                explanation: "Control samples verify that the analysis process is working correctly and identify contamination.",
                isSituational: false
            },
            {
                id: "crfs_84",
                topic: "Polygraphy",
                question: "What is 'footprint'?",
                options: [
                "Foot print",
                "Impression of foot",
                "Shoe print",
                "Step mark"
                ],
                correct: 1,
                explanation: "Footprint is impression of foot.",
                isSituational: false
            },
            {
                id: "crfs_85",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the significance of 'rifling' on a bullet?",
                options: [
                "It increases bullet speed",
                "It creates unique marks that can identify the firearm",
                "It makes the bullet more accurate",
                "It reduces bullet weight"
                ],
                correct: 1,
                explanation: "Rifling creates unique striations on bullets that can be matched to a specific firearm.",
                isSituational: false
            },
            {
                id: "crfs_86",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'tire impression'?",
                options: [
                "Tire print",
                "Impression of tire tread",
                "Wheel mark",
                "Tire mark"
                ],
                correct: 1,
                explanation: "Tire impression is impression of tire tread.",
                isSituational: false
            },
            {
                id: "crfs_87",
                topic: "Forensic Photography",
                question: "What is the primary challenge in analyzing fire debris for accelerants?",
                options: [
                "Fire debris is too hot to handle",
                "Accelerants are often consumed or evaporated during the fire",
                "There are no methods to detect accelerants",
                "Accelerants are not detectable after burning"
                ],
                correct: 1,
                explanation: "Accelerants are often consumed or evaporated during fires, making detection challenging.",
                isSituational: false
            },
            {
                id: "crfs_88",
                topic: "Questioned Documents",
                question: "What is 'bite mark'?",
                options: [
                "Bite mark",
                "Impression from teeth",
                "Teeth mark",
                "Tooth mark"
                ],
                correct: 1,
                explanation: "Bite mark is impression from teeth.",
                isSituational: false
            },
            {
                id: "crfs_89",
                topic: "Polygraphy",
                question: "What is the purpose of a 'comparison microscope' in forensic analysis?",
                options: [
                "To view two samples simultaneously for comparison",
                "To magnify samples more than other microscopes",
                "To take photographs of evidence",
                "To analyze DNA"
                ],
                correct: 0,
                explanation: "Comparison microscopes allow two samples to be viewed simultaneously for direct comparison.",
                isSituational: false
            },
            {
                id: "crfs_90",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is 'firearm examination'?",
                options: [
                "Examining guns",
                "Analyzing firearms for evidence",
                "Gun study",
                "Firearm analysis"
                ],
                correct: 1,
                explanation: "Firearm examination analyzes firearms for evidence.",
                isSituational: false
            },
            {
                id: "crfs_91",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is the primary use of 'polymerase chain reaction' (PCR) in forensics?",
                options: [
                "To amplify small amounts of DNA for analysis",
                "To separate DNA fragments",
                "To identify proteins",
                "To analyze fingerprints"
                ],
                correct: 0,
                explanation: "PCR amplifies small amounts of DNA, making it possible to analyze minute DNA samples.",
                isSituational: false
            },
            {
                id: "crfs_92",
                topic: "Forensic Photography",
                question: "What is 'bullet comparison'?",
                options: [
                "Comparing bullets",
                "Matching bullets to firearms",
                "Bullet matching",
                "Bullet analysis"
                ],
                correct: 1,
                explanation: "Bullet comparison matches bullets to firearms.",
                isSituational: false
            },
            {
                id: "crfs_93",
                topic: "Questioned Documents",
                question: "What is the significance of 'glass fracture analysis'?",
                options: [
                "To determine the type of glass",
                "To determine the direction of force and sequence of breaks",
                "To identify the manufacturer",
                "To determine the age of the glass"
                ],
                correct: 1,
                explanation: "Glass fracture analysis can determine the direction of force and the sequence in which breaks occurred.",
                isSituational: false
            },
            {
                id: "crfs_94",
                topic: "Polygraphy",
                question: "What is 'cartridge case comparison'?",
                options: [
                "Comparing cases",
                "Matching cartridge cases to firearms",
                "Case matching",
                "Case analysis"
                ],
                correct: 1,
                explanation: "Cartridge case comparison matches cases to firearms.",
                isSituational: false
            },
            {
                id: "crfs_95",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary purpose of 'evidence logging'?",
                options: [
                "To keep track of evidence costs",
                "To maintain chain of custody and evidence integrity",
                "To organize evidence by type",
                "To prepare evidence for court"
                ],
                correct: 1,
                explanation: "Evidence logging maintains the chain of custody and ensures evidence integrity throughout the investigation.",
                isSituational: false
            },
            {
                id: "crfs_96",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'gunshot residue'?",
                options: [
                "Gun residue",
                "Particles from firearm discharge",
                "Shot residue",
                "Fire residue"
                ],
                correct: 1,
                explanation: "Gunshot residue is particles from firearm discharge.",
                isSituational: false
            },
            {
                id: "crfs_97",
                topic: "Personal Identification (Dactyloscopy)",
                question: "What is 'individual evidence' in forensic science?",
                options: [
                "Evidence that can be linked to a group",
                "Evidence that can be linked to a single source with high probability",
                "Evidence that is always reliable",
                "Evidence that requires no analysis"
                ],
                correct: 1,
                explanation: "Individual evidence like fingerprints and DNA can be linked to a single source with high probability.",
                isSituational: false
            },
            {
                id: "crfs_98",
                topic: "Questioned Documents",
                question: "What is 'distance determination'?",
                options: [
                "Measuring distance",
                "Determining range of firearm discharge",
                "Range finding",
                "Distance calculation"
                ],
                correct: 1,
                explanation: "Distance determination determines range of firearm discharge.",
                isSituational: false
            },
            {
                id: "crfs_99",
                topic: "Forensic Chemistry and Toxicology",
                question: "What is the primary use of 'infrared spectroscopy' in forensic analysis?",
                options: [
                "To detect heat patterns",
                "To analyze chemical composition of materials",
                "To examine fingerprints",
                "To analyze DNA"
                ],
                correct: 1,
                explanation: "Infrared spectroscopy analyzes the chemical composition of materials like paint, drugs, and fibers.",
                isSituational: false
            },
            {
                id: "crfs_100",
                topic: "Questioned Documents",
                question: "What is 'questioned document examination'?",
                options: [
                "Examining documents",
                "Analyzing disputed documents",
                "Document study",
                "Document analysis"
                ],
                correct: 1,
                explanation: "Questioned document examination analyzes disputed documents.",
                isSituational: false
            }
        ]
    },
    correctionalAdministration: {
        name: "Correctional Administration",
        boardWeight: 10,
        description: "BuCor, BJMP, parole, probation, and therapeutic rehabilitation programs in correctional settings.",
        topics: [
            "Institutional and Non-Institutional Corrections",
            "Therapeutic Modalities"
        ],
        questions: [
            {
                id: "corr_1",
                topic: "Institutional and Non-Institutional Corrections",
                question: "An inmate has been in solitary confinement for 30 days and is showing signs of severe psychological distress. What is the BEST course of action?",
                options: [
                "Extend the confinement as punishment",
                "Transfer to general population with mental health support",
                "Release the inmate immediately",
                "Ignore the behavior as manipulation"
                ],
                correct: 1,
                explanation: "Prolonged solitary confinement can cause serious psychological harm; transfer with support is the humane and legal approach.",
                isSituational: true
            },
            {
                id: "corr_2",
                topic: "Therapeutic Modalities",
                question: "A correctional officer discovers contraband during a cell search. The inmate claims another officer planted it. What should be done?",
                options: [
                "Discipline the inmate immediately",
                "Document the find and investigate both claims",
                "Ignore the inmate's claim",
                "Report only the contraband discovery"
                ],
                correct: 1,
                explanation: "Both the contraband discovery and the allegation must be properly documented and investigated to maintain integrity.",
                isSituational: true
            },
            {
                id: "corr_3",
                topic: "Therapeutic Modalities",
                question: "Two rival gang members are scheduled to be released on the same day. What preventive measure should be taken?",
                options: [
                "Release them at different times",
                "Deny parole to both",
                "Release them together to save time",
                "Transfer one to another facility"
                ],
                correct: 0,
                explanation: "Staggered releases reduce the risk of immediate conflict and allow for better community supervision planning.",
                isSituational: true
            },
            {
                id: "corr_4",
                topic: "Therapeutic Modalities",
                question: "An inmate completes a vocational training program but has no job prospects upon release. What reentry support is MOST critical?",
                options: [
                "Providing transportation money",
                "Connecting with employment services and job placement",
                "Giving them tools from training",
                "Housing assistance only"
                ],
                correct: 1,
                explanation: "Employment is one of the strongest factors in preventing recidivism, making job placement critical.",
                isSituational: true
            },
            {
                id: "corr_5",
                topic: "Institutional and Non-Institutional Corrections",
                question: "A correctional facility is overcrowded beyond 200% capacity. What is the MOST serious risk?",
                options: [
                "Increased administrative workload",
                "Higher costs per inmate",
                "Increased violence, health risks, and constitutional violations",
                "Difficulty in scheduling programs"
                ],
                correct: 2,
                explanation: "Overcrowding leads to increased violence, spread of disease, inadequate services, and potential constitutional rights violations.",
                isSituational: true
            },
            {
                id: "corr_6",
                topic: "Therapeutic Modalities",
                question: "What is the primary goal of the correctional system?",
                options: [
                "Punishment of offenders",
                "Rehabilitation and reintegration",
                "Incapacitation only",
                "Deterrence through harsh conditions"
                ],
                correct: 1,
                explanation: "The modern correctional system emphasizes rehabilitation and successful reintegration into society.",
                isSituational: false
            },
            {
                id: "corr_7",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'classification' in correctional administration?",
                options: [
                "Grouping inmates by crime type",
                "Assessing inmate risks and needs for placement",
                "Separating inmates by age",
                "Categorizing prisons by security level"
                ],
                correct: 1,
                explanation: "Classification assesses security risks, program needs, and medical requirements to determine appropriate placement.",
                isSituational: false
            },
            {
                id: "corr_8",
                topic: "Therapeutic Modalities",
                question: "What is the purpose of 'good conduct time' allowances?",
                options: [
                "To reward inmates for good behavior",
                "To reduce prison overcrowding",
                "To save money on food costs",
                "To punish difficult inmates"
                ],
                correct: 0,
                explanation: "Good conduct time incentivizes positive behavior and rehabilitation efforts.",
                isSituational: false
            },
            {
                id: "corr_9",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'restorative justice' in corrections?",
                options: [
                "Punishing offenders harshly",
                "Focusing on repairing harm caused by crime through victim-offender dialogue",
                "Keeping offenders in prison longer",
                "Ignoring victim concerns"
                ],
                correct: 1,
                explanation: "Restorative justice focuses on repairing harm and involving victims, offenders, and communities in the process.",
                isSituational: false
            },
            {
                id: "corr_10",
                topic: "Therapeutic Modalities",
                question: "What is 'recidivism'?",
                options: [
                "The rate of new crimes in society",
                "The tendency of convicted criminals to reoffend",
                "The process of rehabilitation",
                "The length of prison sentences"
                ],
                correct: 1,
                explanation: "Recidivism refers to the tendency of a convicted criminal to reoffend after release.",
                isSituational: false
            },
            {
                id: "corr_11",
                topic: "Therapeutic Modalities",
                question: "What is 'rehabilitation' in corrections?",
                options: [
                "Punishing offenders",
                "Transforming offenders into law-abiding citizens",
                "Keeping offenders in prison",
                "Isolating offenders"
                ],
                correct: 1,
                explanation: "Rehabilitation aims to transform offenders into law-abiding citizens through programs and treatment.",
                isSituational: false
            },
            {
                id: "corr_12",
                topic: "Therapeutic Modalities",
                question: "What is 'reintegration'?",
                options: [
                "Re-entering prison",
                "Helping offenders return to society successfully",
                "Integration into prison life",
                "Rehabilitation in prison"
                ],
                correct: 1,
                explanation: "Reintegration helps offenders return to society successfully after release.",
                isSituational: false
            },
            {
                id: "corr_13",
                topic: "Therapeutic Modalities",
                question: "What is 'parole'?",
                options: [
                "Early release from prison",
                "Conditional release before sentence completion under supervision",
                "Prison transfer",
                "Sentence reduction"
                ],
                correct: 1,
                explanation: "Parole is conditional release before sentence completion under supervision.",
                isSituational: false
            },
            {
                id: "corr_14",
                topic: "Therapeutic Modalities",
                question: "What is 'probation'?",
                options: [
                "Prison sentence",
                "Community-based supervision instead of imprisonment",
                "Parole supervision",
                "Probable sentence"
                ],
                correct: 1,
                explanation: "Probation is community-based supervision instead of imprisonment.",
                isSituational: false
            },
            {
                id: "corr_15",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'incarceration'?",
                options: [
                "Community supervision",
                "Imprisonment in correctional facility",
                "Probation",
                "Parole"
                ],
                correct: 1,
                explanation: "Incarceration is imprisonment in a correctional facility.",
                isSituational: false
            },
            {
                id: "corr_16",
                topic: "Therapeutic Modalities",
                question: "What is 'maximum security prison'?",
                options: [
                "Prison with maximum inmates",
                "Highest security level for dangerous offenders",
                "Largest prison",
                "Prison with maximum programs"
                ],
                correct: 1,
                explanation: "Maximum security prisons house the most dangerous offenders with highest security measures.",
                isSituational: false
            },
            {
                id: "corr_17",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'medium security prison'?",
                options: [
                "Average prison",
                "Facility for less dangerous offenders with moderate security",
                "Medium-sized prison",
                "Prison with medium programs"
                ],
                correct: 1,
                explanation: "Medium security prisons house less dangerous offenders with moderate security measures.",
                isSituational: false
            },
            {
                id: "corr_18",
                topic: "Therapeutic Modalities",
                question: "What is 'minimum security prison'?",
                options: [
                "Smallest prison",
                "Low security for non-violent offenders nearing release",
                "Minimum inmates",
                "Basic prison"
                ],
                correct: 1,
                explanation: "Minimum security prisons house non-violent offenders with low security measures.",
                isSituational: false
            },
            {
                id: "corr_19",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'jail'?",
                options: [
                "Prison",
                "Short-term detention facility for pre-trial or short sentences",
                "Long-term prison",
                "Federal prison"
                ],
                correct: 1,
                explanation: "Jails are short-term detention facilities for pre-trial detainees or short sentences.",
                isSituational: false
            },
            {
                id: "corr_20",
                topic: "Therapeutic Modalities",
                question: "What is 'prison'?",
                options: [
                "Short-term facility",
                "Long-term confinement facility for sentenced offenders",
                "Jail",
                "Detention center"
                ],
                correct: 1,
                explanation: "Prisons are long-term confinement facilities for sentenced offenders.",
                isSituational: false
            },
            {
                id: "corr_21",
                topic: "Therapeutic Modalities",
                question: "What is 'penitentiary'?",
                options: [
                "Type of prison",
                "High-security prison emphasizing rehabilitation",
                "Religious prison",
                "Federal prison"
                ],
                correct: 1,
                explanation: "Penitentiaries are prisons that emphasize rehabilitation through discipline and work.",
                isSituational: false
            },
            {
                id: "corr_22",
                topic: "Therapeutic Modalities",
                question: "What is 'correctional institution'?",
                options: [
                "Prison only",
                "Any facility for confinement and rehabilitation of offenders",
                "Jail only",
                "Probation office"
                ],
                correct: 1,
                explanation: "Correctional institution is any facility for confinement and rehabilitation of offenders.",
                isSituational: false
            },
            {
                id: "corr_23",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'inmate'?",
                options: [
                "Prison staff",
                "Person confined in correctional facility",
                "Visitor",
                "Probationer"
                ],
                correct: 1,
                explanation: "An inmate is a person confined in a correctional facility.",
                isSituational: false
            },
            {
                id: "corr_24",
                topic: "Therapeutic Modalities",
                question: "What is 'prisoner'?",
                options: [
                "Prison staff",
                "Person held in custody",
                "Visitor",
                "Guard"
                ],
                correct: 1,
                explanation: "A prisoner is a person held in custody.",
                isSituational: false
            },
            {
                id: "corr_25",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'correctional officer'?",
                options: [
                "Prison administrator",
                "Person responsible for supervising inmates",
                "Prison doctor",
                "Prison teacher"
                ],
                correct: 1,
                explanation: "Correctional officers supervise inmates and maintain security.",
                isSituational: false
            },
            {
                id: "corr_26",
                topic: "Therapeutic Modalities",
                question: "What is 'warden'?",
                options: [
                "Prison doctor",
                "Chief administrator of prison",
                "Prison guard",
                "Prison chaplain"
                ],
                correct: 1,
                explanation: "The warden is the chief administrator of a prison.",
                isSituational: false
            },
            {
                id: "corr_27",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'superintendent'?",
                options: [
                "School head",
                "Administrator of correctional facility",
                "Prison guard",
                "Prison teacher"
                ],
                correct: 1,
                explanation: "A superintendent is the administrator of a correctional facility.",
                isSituational: false
            },
            {
                id: "corr_28",
                topic: "Therapeutic Modalities",
                question: "What is 'disciplinary hearing'?",
                options: [
                "Court hearing",
                "Proceeding to determine inmate rule violations",
                "Parole hearing",
                "Classification hearing"
                ],
                correct: 1,
                explanation: "A disciplinary hearing determines if an inmate violated prison rules.",
                isSituational: false
            },
            {
                id: "corr_29",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'solitary confinement'?",
                options: [
                "Group confinement",
                "Isolation of inmate from general population",
                "Prison transfer",
                "Parole denial"
                ],
                correct: 1,
                explanation: "Solitary confinement isolates an inmate from the general population.",
                isSituational: false
            },
            {
                id: "corr_30",
                topic: "Therapeutic Modalities",
                question: "What is 'segregation'?",
                options: [
                "Group activity",
                "Separation of inmates for security or disciplinary reasons",
                "Classification",
                "Integration"
                ],
                correct: 1,
                explanation: "Segregation separates inmates for security or disciplinary reasons.",
                isSituational: false
            },
            {
                id: "corr_31",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'protective custody'?",
                options: [
                "Custody for protection",
                "Separation of inmate for their safety",
                "Special punishment",
                "VIP treatment"
                ],
                correct: 1,
                explanation: "Protective custody separates an inmate for their safety from other inmates.",
                isSituational: false
            },
            {
                id: "corr_32",
                topic: "Therapeutic Modalities",
                question: "What is 'administrative segregation'?",
                options: [
                "Regular segregation",
                "Separation for management or security reasons",
                "Punishment",
                "Classification"
                ],
                correct: 1,
                explanation: "Administrative segregation separates inmates for management or security reasons.",
                isSituational: false
            },
            {
                id: "corr_33",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'disciplinary segregation'?",
                options: [
                "Regular segregation",
                "Separation as punishment for rule violations",
                "Classification",
                "Administrative action"
                ],
                correct: 1,
                explanation: "Disciplinary segregation separates inmates as punishment for rule violations.",
                isSituational: false
            },
            {
                id: "corr_34",
                topic: "Therapeutic Modalities",
                question: "What is 'inmate rights'?",
                options: [
                "No rights",
                "Constitutional and statutory rights retained by inmates",
                "Full citizen rights",
                "Limited rights only"
                ],
                correct: 1,
                explanation: "Inmates retain certain constitutional and statutory rights while incarcerated.",
                isSituational: false
            },
            {
                id: "corr_35",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'Eighth Amendment'?",
                options: [
                "Right to bear arms",
                "Protection against cruel and unusual punishment",
                "Right to trial",
                "Freedom of speech"
                ],
                correct: 1,
                explanation: "The Eighth Amendment protects against cruel and unusual punishment.",
                isSituational: false
            },
            {
                id: "corr_36",
                topic: "Therapeutic Modalities",
                question: "What is 'deliberate indifference'?",
                options: [
                "Intentional harm",
                "Knowledge of risk and disregard for inmate safety",
                "Accidental harm",
                "Negligence"
                ],
                correct: 1,
                explanation: "Deliberate indifference is knowing disregard of substantial risk to inmate health or safety.",
                isSituational: false
            },
            {
                id: "corr_37",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'use of force' in corrections?",
                options: [
                "Any physical contact",
                "Application of physical force to control inmates",
                "Violence",
                "Abuse"
                ],
                correct: 1,
                explanation: "Use of force is applying physical force to control inmates when necessary.",
                isSituational: false
            },
            {
                id: "corr_38",
                topic: "Therapeutic Modalities",
                question: "What is 'excessive force'?",
                options: [
                "Necessary force",
                "Force beyond what is necessary",
                "Minimal force",
                "No force"
                ],
                correct: 1,
                explanation: "Excessive force is force beyond what is necessary in a situation.",
                isSituational: false
            },
            {
                id: "corr_39",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'contraband'?",
                options: [
                "Legal items",
                "Prohibited items in prison",
                "Prison property",
                "Inmate property"
                ],
                correct: 1,
                explanation: "Contraband are prohibited items in prison.",
                isSituational: false
            },
            {
                id: "corr_40",
                topic: "Therapeutic Modalities",
                question: "What is 'shakedown'?",
                options: [
                "Prison construction",
                "Search for contraband",
                "Inmate transfer",
                "Prison inspection"
                ],
                correct: 1,
                explanation: "A shakedown is a search for contraband in prison.",
                isSituational: false
            },
            {
                id: "corr_41",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'cell search'?",
                options: [
                "Phone search",
                "Search of inmate's living area",
                "Building search",
                "Vehicle search"
                ],
                correct: 1,
                explanation: "A cell search is a search of an inmate's living area for contraband.",
                isSituational: false
            },
            {
                id: "corr_42",
                topic: "Therapeutic Modalities",
                question: "What is 'body search'?",
                options: [
                "Building search",
                "Search of inmate's person",
                "Vehicle search",
                "Area search"
                ],
                correct: 1,
                explanation: "A body search is a search of an inmate's person for contraband.",
                isSituational: false
            },
            {
                id: "corr_43",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'strip search'?",
                options: [
                "Clothing search",
                "Search requiring removal of clothing",
                "Building search",
                "Vehicle search"
                ],
                correct: 1,
                explanation: "A strip search requires removal of clothing to search for contraband.",
                isSituational: false
            },
            {
                id: "corr_44",
                topic: "Therapeutic Modalities",
                question: "What is 'count' in corrections?",
                options: [
                "Counting money",
                "Regular headcount of inmates",
                "Counting days",
                "Counting items"
                ],
                correct: 1,
                explanation: "A count is a regular headcount of inmates to ensure security.",
                isSituational: false
            },
            {
                id: "corr_45",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'lockdown'?",
                options: [
                "Opening cells",
                "Emergency confinement of inmates to cells",
                "Prison opening",
                "Cell assignment"
                ],
                correct: 1,
                explanation: "Lockdown is emergency confinement of inmates to cells.",
                isSituational: false
            },
            {
                id: "corr_46",
                topic: "Therapeutic Modalities",
                question: "What is 'head count'?",
                options: [
                "Counting heads",
                "Verification that all inmates are present",
                "Counting days",
                "Counting items"
                ],
                correct: 1,
                explanation: "Head count verifies that all inmates are present.",
                isSituational: false
            },
            {
                id: "corr_47",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'escape'?",
                options: [
                "Leaving prison legally",
                "Unauthorized departure from custody",
                "Transfer",
                "Release"
                ],
                correct: 1,
                explanation: "Escape is unauthorized departure from custody.",
                isSituational: false
            },
            {
                id: "corr_48",
                topic: "Therapeutic Modalities",
                question: "What is 'attempted escape'?",
                options: [
                "Successful escape",
                "Failed attempt to leave custody",
                "Planning escape",
                "Thinking about escape"
                ],
                correct: 1,
                explanation: "Attempted escape is a failed attempt to leave custody.",
                isSituational: false
            },
            {
                id: "corr_49",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'riot' in prison?",
                options: [
                "Prison party",
                "Large-scale disturbance by inmates",
                "Prison protest",
                "Inmate meeting"
                ],
                correct: 1,
                explanation: "A riot is a large-scale disturbance by inmates.",
                isSituational: false
            },
            {
                id: "corr_50",
                topic: "Therapeutic Modalities",
                question: "What is 'disturbance'?",
                options: [
                "Peaceful activity",
                "Disruptive behavior by inmates",
                "Quiet time",
                "Normal activity"
                ],
                correct: 1,
                explanation: "A disturbance is disruptive behavior by inmates.",
                isSituational: false
            },
            {
                id: "corr_51",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'institutional adjustment'?",
                options: [
                "Building repair",
                "How inmate adapts to prison life",
                "Prison administration",
                "Staff adjustment"
                ],
                correct: 1,
                explanation: "Institutional adjustment is how an inmate adapts to prison life.",
                isSituational: false
            },
            {
                id: "corr_52",
                topic: "Therapeutic Modalities",
                question: "What is 'institutional misconduct'?",
                options: [
                "Good behavior",
                "Violation of prison rules",
                "Staff misconduct",
                "Administrative error"
                ],
                correct: 1,
                explanation: "Institutional misconduct is violation of prison rules.",
                isSituational: false
            },
            {
                id: "corr_53",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'infraction'?",
                options: [
                "Major violation",
                "Minor rule violation",
                "Serious crime",
                "Felony"
                ],
                correct: 1,
                explanation: "An infraction is a minor rule violation.",
                isSituational: false
            },
            {
                id: "corr_54",
                topic: "Therapeutic Modalities",
                question: "What is 'serious incident'?",
                options: [
                "Minor event",
                "Major security threat or emergency",
                "Routine event",
                "Normal occurrence"
                ],
                correct: 1,
                explanation: "A serious incident is a major security threat or emergency.",
                isSituational: false
            },
            {
                id: "corr_55",
                topic: "Therapeutic Modalities",
                question: "What is 'correctional program'?",
                options: [
                "Punishment program",
                "Rehabilitation activity for inmates",
                "Staff training",
                "Administrative program"
                ],
                correct: 1,
                explanation: "Correctional programs are rehabilitation activities for inmates.",
                isSituational: false
            },
            {
                id: "corr_56",
                topic: "Therapeutic Modalities",
                question: "What is 'vocational training'?",
                options: [
                "Academic education",
                "Job skills training",
                "Physical training",
                "Mental training"
                ],
                correct: 1,
                explanation: "Vocational training provides job skills to inmates.",
                isSituational: false
            },
            {
                id: "corr_57",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'educational program'?",
                options: [
                "Physical education",
                "Academic instruction for inmates",
                "Job training",
                "Recreational activity"
                ],
                correct: 1,
                explanation: "Educational programs provide academic instruction to inmates.",
                isSituational: false
            },
            {
                id: "corr_58",
                topic: "Therapeutic Modalities",
                question: "What is 'substance abuse treatment'?",
                options: [
                "Food treatment",
                "Drug and alcohol rehabilitation",
                "Medical treatment",
                "Physical therapy"
                ],
                correct: 1,
                explanation: "Substance abuse treatment provides drug and alcohol rehabilitation.",
                isSituational: false
            },
            {
                id: "corr_59",
                topic: "Therapeutic Modalities",
                question: "What is 'mental health services'?",
                options: [
                "Physical health",
                "Psychological treatment and counseling",
                "Option 3 (review item)",
                "Option 4 (review item)"
                ],
                correct: 1,
                explanation: "Mental health services provide psychological treatment and counseling.",
                isSituational: false
            },
            {
                id: "corr_60",
                topic: "Therapeutic Modalities",
                question: "What is 'religious services'?",
                options: [
                "Secular services",
                "Spiritual and religious activities",
                "Educational services",
                "Medical services"
                ],
                correct: 1,
                explanation: "Religious services provide spiritual and religious activities.",
                isSituational: false
            },
            {
                id: "corr_61",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'recreational program'?",
                options: [
                "Work program",
                "Physical and leisure activities",
                "Educational program",
                "Therapeutic program"
                ],
                correct: 1,
                explanation: "Recreational programs provide physical and leisure activities.",
                isSituational: false
            },
            {
                id: "corr_62",
                topic: "Therapeutic Modalities",
                question: "What is 'work program'?",
                options: [
                "Recreational activity",
                "Prison labor and job assignment",
                "Educational activity",
                "Therapeutic activity"
                ],
                correct: 1,
                explanation: "Work programs provide prison labor and job assignments.",
                isSituational: false
            },
            {
                id: "corr_63",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'industrial program'?",
                options: [
                "Educational program",
                "Prison factory or manufacturing work",
                "Recreational program",
                "Therapeutic program"
                ],
                correct: 1,
                explanation: "Industrial programs involve prison factory or manufacturing work.",
                isSituational: false
            },
            {
                id: "corr_64",
                topic: "Therapeutic Modalities",
                question: "What is 'farm program'?",
                options: [
                "Factory work",
                "Agricultural work in prison farms",
                "Office work",
                "Educational program"
                ],
                correct: 1,
                explanation: "Farm programs involve agricultural work in prison farms.",
                isSituational: false
            },
            {
                id: "corr_65",
                topic: "Therapeutic Modalities",
                question: "What is 'community service' in corrections?",
                options: [
                "Service to community",
                "Inmates performing unpaid work for community benefit",
                "Prison work",
                "Voluntary work"
                ],
                correct: 1,
                explanation: "Community service involves inmates performing unpaid work for community benefit.",
                isSituational: false
            },
            {
                id: "corr_66",
                topic: "Therapeutic Modalities",
                question: "What is 'therapeutic community'?",
                options: [
                "Regular prison unit",
                "Treatment program using peer support and structure",
                "Medical ward",
                "Isolation unit"
                ],
                correct: 1,
                explanation: "Therapeutic community uses peer support and structure for treatment.",
                isSituational: false
            },
            {
                id: "corr_67",
                topic: "Therapeutic Modalities",
                question: "What is 'cognitive behavioral therapy'?",
                options: [
                "Physical therapy",
                "Treatment changing thought patterns and behavior",
                "Drug therapy",
                "Group therapy only"
                ],
                correct: 1,
                explanation: "Cognitive behavioral therapy changes thought patterns and behavior.",
                isSituational: false
            },
            {
                id: "corr_68",
                topic: "Therapeutic Modalities",
                question: "What is 'anger management'?",
                options: [
                "Managing staff",
                "Program to control aggressive behavior",
                "Managing prisoners",
                "Managing resources"
                ],
                correct: 1,
                explanation: "Anger management programs help control aggressive behavior.",
                isSituational: false
            },
            {
                id: "corr_69",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'parenting program'?",
                options: [
                "Staff training",
                "Program teaching parenting skills",
                "Child care",
                "Family visitation"
                ],
                correct: 1,
                explanation: "Parenting programs teach parenting skills to inmates.",
                isSituational: false
            },
            {
                id: "corr_70",
                topic: "Therapeutic Modalities",
                question: "What is 'family visitation'?",
                options: [
                "Staff visits",
                "Inmate visits with family members",
                "Official visits",
                "Legal visits"
                ],
                correct: 1,
                explanation: "Family visitation allows inmates to visit with family members.",
                isSituational: false
            },
            {
                id: "corr_71",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'conjugal visit'?",
                options: [
                "Regular visit",
                "Private visit with spouse or partner",
                "Family visit",
                "Legal visit"
                ],
                correct: 1,
                explanation: "Conjugal visits allow private time with spouse or partner.",
                isSituational: false
            },
            {
                id: "corr_72",
                topic: "Therapeutic Modalities",
                question: "What is 'furlough'?",
                options: [
                "Prison transfer",
                "Temporary release for specific purpose",
                "Parole",
                "Probation"
                ],
                correct: 1,
                explanation: "Furlough is temporary release for specific purposes like funeral or medical treatment.",
                isSituational: false
            },
            {
                id: "corr_73",
                topic: "Therapeutic Modalities",
                question: "What is 'work release'?",
                options: [
                "Release from work",
                "Program allowing inmates to work in community",
                "Prison work",
                "Job placement"
                ],
                correct: 1,
                explanation: "Work release allows inmates to work in the community while serving sentence.",
                isSituational: false
            },
            {
                id: "corr_74",
                topic: "Therapeutic Modalities",
                question: "What is 'halfway house'?",
                options: [
                "Prison building",
                "Transitional residence for offenders",
                "Half prison",
                "Probation office"
                ],
                correct: 1,
                explanation: "Halfway houses provide transitional residence for offenders.",
                isSituational: false
            },
            {
                id: "corr_75",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'reentry program'?",
                options: [
                "Prison entry",
                "Program preparing inmates for release",
                "Classification",
                "Intake"
                ],
                correct: 1,
                explanation: "Reentry programs prepare inmates for release back to society.",
                isSituational: false
            },
            {
                id: "corr_76",
                topic: "Therapeutic Modalities",
                question: "What is 'aftercare'?",
                options: [
                "Prison care",
                "Post-release supervision and support",
                "Medical care",
                "Prison healthcare"
                ],
                correct: 1,
                explanation: "Aftercare provides post-release supervision and support.",
                isSituational: false
            },
            {
                id: "corr_77",
                topic: "Therapeutic Modalities",
                question: "What is 'parole officer'?",
                options: [
                "Prison guard",
                "Officer supervising parolees",
                "Probation officer",
                "Police officer"
                ],
                correct: 1,
                explanation: "Parole officers supervise parolees in the community.",
                isSituational: false
            },
            {
                id: "corr_78",
                topic: "Therapeutic Modalities",
                question: "What is 'probation officer'?",
                options: [
                "Prison guard",
                "Officer supervising probationers",
                "Parole officer",
                "Police officer"
                ],
                correct: 1,
                explanation: "Probation officers supervise probationers in the community.",
                isSituational: false
            },
            {
                id: "corr_79",
                topic: "Therapeutic Modalities",
                question: "What is 'parole board'?",
                options: [
                "Prison board",
                "Body deciding parole eligibility and release",
                "Probation board",
                "Sentencing board"
                ],
                correct: 1,
                explanation: "Parole boards decide parole eligibility and release.",
                isSituational: false
            },
            {
                id: "corr_80",
                topic: "Therapeutic Modalities",
                question: "What is 'parole eligibility'?",
                options: [
                "Prison eligibility",
                "When inmate becomes eligible for parole consideration",
                "Probation eligibility",
                "Release eligibility"
                ],
                correct: 1,
                explanation: "Parole eligibility is when an inmate becomes eligible for parole consideration.",
                isSituational: false
            },
            {
                id: "corr_81",
                topic: "Therapeutic Modalities",
                question: "What is 'parole violation'?",
                options: [
                "Prison rule violation",
                "Breaking parole conditions",
                "Probation violation",
                "Legal violation"
                ],
                correct: 1,
                explanation: "Parole violation is breaking conditions of parole.",
                isSituational: false
            },
            {
                id: "corr_82",
                topic: "Therapeutic Modalities",
                question: "What is 'parole revocation'?",
                options: [
                "Parole grant",
                "Cancellation of parole and return to prison",
                "Probation revocation",
                "Sentence reduction"
                ],
                correct: 1,
                explanation: "Parole revocation cancels parole and returns inmate to prison.",
                isSituational: false
            },
            {
                id: "corr_83",
                topic: "Therapeutic Modalities",
                question: "What is 'probation violation'?",
                options: [
                "Prison rule violation",
                "Breaking probation conditions",
                "Parole violation",
                "Legal violation"
                ],
                correct: 1,
                explanation: "Probation violation is breaking conditions of probation.",
                isSituational: false
            },
            {
                id: "corr_84",
                topic: "Therapeutic Modalities",
                question: "What is 'probation revocation'?",
                options: [
                "Probation grant",
                "Cancellation of probation and imprisonment",
                "Parole revocation",
                "Sentence reduction"
                ],
                correct: 1,
                explanation: "Probation revocation cancels probation and results in imprisonment.",
                isSituational: false
            },
            {
                id: "corr_85",
                topic: "Therapeutic Modalities",
                question: "What is 'community supervision'?",
                options: [
                "Prison supervision",
                "Monitoring offenders in community",
                "Staff supervision",
                "Administrative supervision"
                ],
                correct: 1,
                explanation: "Community supervision monitors offenders in the community.",
                isSituational: false
            },
            {
                id: "corr_86",
                topic: "Therapeutic Modalities",
                question: "What is 'electronic monitoring'?",
                options: [
                "Staff monitoring",
                "Using technology to track offender location",
                "Prison monitoring",
                "Administrative monitoring"
                ],
                correct: 1,
                explanation: "Electronic monitoring uses technology to track offender location.",
                isSituational: false
            },
            {
                id: "corr_87",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'house arrest'?",
                options: [
                "Arrest at house",
                "Confinement to home instead of prison",
                "Prison arrest",
                "Probation"
                ],
                correct: 1,
                explanation: "House arrest confines offender to home instead of prison.",
                isSituational: false
            },
            {
                id: "corr_88",
                topic: "Therapeutic Modalities",
                question: "What is 'day reporting'?",
                options: [
                "Daily prison report",
                "Regular reporting to probation officer",
                "Daily work report",
                "Staff reporting"
                ],
                correct: 1,
                explanation: "Day reporting requires regular reporting to probation officer.",
                isSituational: false
            },
            {
                id: "corr_89",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'intensive supervision'?",
                options: [
                "Regular supervision",
                "Close monitoring of high-risk offenders",
                "Minimal supervision",
                "No supervision"
                ],
                correct: 1,
                explanation: "Intensive supervision provides close monitoring of high-risk offenders.",
                isSituational: false
            },
            {
                id: "corr_90",
                topic: "Therapeutic Modalities",
                question: "What is 'restorative justice program'?",
                options: [
                "Punishment program",
                "Program focusing on repairing harm",
                "Rehabilitation program",
                "Educational program"
                ],
                correct: 1,
                explanation: "Restorative justice programs focus on repairing harm to victims and community.",
                isSituational: false
            },
            {
                id: "corr_91",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'victim-offender mediation'?",
                options: [
                "Court mediation",
                "Meeting between victim and offender",
                "Legal mediation",
                "Police mediation"
                ],
                correct: 1,
                explanation: "Victim-offender mediation brings victim and offender together to discuss the crime.",
                isSituational: false
            },
            {
                id: "corr_92",
                topic: "Therapeutic Modalities",
                question: "What is 'victim impact statement'?",
                options: [
                "Offender statement",
                "Statement by victim about crime's effect",
                "Police statement",
                "Court statement"
                ],
                correct: 1,
                explanation: "Victim impact statement describes how the crime affected the victim.",
                isSituational: false
            },
            {
                id: "corr_93",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'restitution'?",
                options: [
                "Punishment",
                "Offender paying victim for harm caused",
                "Rehabilitation",
                "Probation"
                ],
                correct: 1,
                explanation: "Restitution requires offender to pay victim for harm caused.",
                isSituational: false
            },
            {
                id: "corr_94",
                topic: "Therapeutic Modalities",
                question: "What is 'community service order'?",
                options: [
                "Prison order",
                "Court order requiring unpaid community work",
                "Probation order",
                "Parole order"
                ],
                correct: 1,
                explanation: "Community service order requires unpaid community work.",
                isSituational: false
            },
            {
                id: "corr_95",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'fine'?",
                options: [
                "Prison sentence",
                "Monetary punishment",
                "Probation",
                "Community service"
                ],
                correct: 1,
                explanation: "A fine is monetary punishment.",
                isSituational: false
            },
            {
                id: "corr_96",
                topic: "Therapeutic Modalities",
                question: "What is 'forfeiture'?",
                options: [
                "Prison sentence",
                "Seizure of property by government",
                "Fine",
                "Probation"
                ],
                correct: 1,
                explanation: "Forfeiture is seizure of property by government.",
                isSituational: false
            },
            {
                id: "corr_97",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'capital punishment'?",
                options: [
                "Financial punishment",
                "Death penalty",
                "Life imprisonment",
                "Probation"
                ],
                correct: 1,
                explanation: "Capital punishment is the death penalty.",
                isSituational: false
            },
            {
                id: "corr_98",
                topic: "Therapeutic Modalities",
                question: "What is 'life imprisonment'?",
                options: [
                "Short sentence",
                "Imprisonment for life",
                "Probation",
                "Parole"
                ],
                correct: 1,
                explanation: "Life imprisonment is imprisonment for the remainder of life.",
                isSituational: false
            },
            {
                id: "corr_99",
                topic: "Institutional and Non-Institutional Corrections",
                question: "What is 'determinate sentencing'?",
                options: [
                "Indeterminate sentence",
                "Fixed sentence with specified release date",
                "Life sentence",
                "Probation"
                ],
                correct: 1,
                explanation: "Determinate sentencing has a fixed sentence with specified release date.",
                isSituational: false
            },
            {
                id: "corr_100",
                topic: "Therapeutic Modalities",
                question: "What is 'indeterminate sentencing'?",
                options: [
                "Fixed sentence",
                "Sentence with range and parole eligibility",
                "Life sentence",
                "Option 4 (review item)"
                ],
                correct: 1,
                explanation: "Indeterminate sentencing has a range with parole eligibility.",
                isSituational: false
            }
        ]
    },
    criminology: {
        name: "Criminology",
        boardWeight: 20,
        description: "Theories of crime causation, juvenile justice (RA 9344), and professional ethics for registered criminologists.",
        topics: [
            "Theories of Crime Causation",
            "Juvenile Delinquency (RA 9344)",
            "Ethics and Human Relations"
        ],
        questions: [
            {
                id: "crim_1",
                topic: "Theories of Crime Causation",
                question: "A community with high unemployment rates, poor schools, and limited social services shows increased crime rates. Which sociological theory BEST explains this phenomenon?",
                options: [
                "Biological determinism",
                "Social disorganization theory",
                "Rational choice theory",
                "Psychological determinism"
                ],
                correct: 1,
                explanation: "Social disorganization theory explains that crime occurs when community institutions are weak and unable to maintain social control.",
                isSituational: true
            },
            {
                id: "crim_2",
                topic: "Theories of Crime Causation",
                question: "A young person joins a gang because his older brother is a member and he wants to gain respect in his neighborhood. What theory of crime causation does this illustrate?",
                options: [
                "Strain theory",
                "Social learning theory",
                "Labeling theory",
                "Control theory"
                ],
                correct: 1,
                explanation: "Social learning theory explains that criminal behavior is learned through association with others, especially family and peers.",
                isSituational: true
            },
            {
                id: "crim_3",
                topic: "Theories of Crime Causation",
                question: "A study shows that areas with broken windows, graffiti, and abandoned buildings have higher crime rates. What policing strategy is based on this observation?",
                options: [
                "Community policing",
                "Zero tolerance policing",
                "Problem-oriented policing",
                "Intelligence-led policing"
                ],
                correct: 1,
                explanation: "Broken windows theory suggests that maintaining order prevents more serious crime, leading to zero tolerance approaches.",
                isSituational: true
            },
            {
                id: "crim_4",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "A person who was labeled as 'delinquent' in youth continues criminal behavior into adulthood because society treats him as a criminal. What theory explains this?",
                options: [
                "Differential association theory",
                "Labeling theory",
                "Social strain theory",
                "Subcultural theory"
                ],
                correct: 1,
                explanation: "Labeling theory suggests that being labeled as criminal leads to secondary deviance and a criminal identity.",
                isSituational: true
            },
            {
                id: "crim_5",
                topic: "Theories of Crime Causation",
                question: "In a poor urban area, young people see successful drug dealers as role models because legitimate opportunities are limited. What theory best explains this?",
                options: [
                "Social control theory",
                "Strain theory",
                "Biological theory",
                "Psychological theory"
                ],
                correct: 1,
                explanation: "Strain theory (Merton's anomie) explains that crime results from the gap between cultural goals and legitimate means to achieve them.",
                isSituational: true
            },
            {
                id: "crim_6",
                topic: "Theories of Crime Causation",
                question: "Who is considered the father of criminology?",
                options: [
                "Cesare Lombroso",
                "Cesare Beccaria",
                "Jeremy Bentham",
                "Edwin Sutherland"
                ],
                correct: 0,
                explanation: "Cesare Lombroso is often called the father of criminology for his work on the biological theories of crime.",
                isSituational: false
            },
            {
                id: "crim_7",
                topic: "Theories of Crime Causation",
                question: "What is the main focus of the Chicago School of criminology?",
                options: [
                "Biological determinants of crime",
                "Social environment and urban ecology",
                "Psychological factors in crime",
                "Economic causes of crime"
                ],
                correct: 1,
                explanation: "The Chicago School focused on how urban environments and social disorganization contribute to crime.",
                isSituational: false
            },
            {
                id: "crim_8",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What does 'white-collar crime' refer to?",
                options: [
                "Crimes committed by police officers",
                "Crimes committed by persons of respectability in their occupation",
                "Crimes committed in business districts",
                "Crimes against corporate entities"
                ],
                correct: 1,
                explanation: "Edwin Sutherland defined white-collar crime as crimes committed by persons of respectability and high social status in their occupation.",
                isSituational: false
            },
            {
                id: "crim_9",
                topic: "Ethics and Human Relations",
                question: "What is the 'age-crime curve' in criminology?",
                options: [
                "Crime increases steadily with age",
                "Crime peaks in adolescence and early adulthood then declines",
                "Crime is highest among the elderly",
                "There is no relationship between age and crime"
                ],
                correct: 1,
                explanation: "The age-crime curve shows that criminal behavior peaks in late adolescence and early adulthood, then declines with age.",
                isSituational: false
            },
            {
                id: "crim_10",
                topic: "Theories of Crime Causation",
                question: "What is 'differential association' in criminological theory?",
                options: [
                "Different types of crime require different associations",
                "Criminal behavior is learned through interaction with others",
                "Criminals associate with different social classes",
                "Crime varies across different cultures"
                ],
                correct: 1,
                explanation: "Differential association theory (Sutherland) states that criminal behavior is learned through interaction with others.",
                isSituational: false
            },
            {
                id: "crim_11",
                topic: "Theories of Crime Causation",
                question: "What is the 'rational choice theory' of crime?",
                options: [
                "Crime is caused by biological factors",
                "Criminals weigh costs and benefits before committing crime",
                "Crime is learned from others",
                "Crime results from social disorganization"
                ],
                correct: 1,
                explanation: "Rational choice theory suggests that criminals make rational decisions weighing potential benefits against risks.",
                isSituational: false
            },
            {
                id: "crim_12",
                topic: "Theories of Crime Causation",
                question: "What is 'social control theory'?",
                options: [
                "Society controls through police",
                "People refrain from crime due to social bonds and internal controls",
                "Crime is controlled by laws",
                "Control is through punishment"
                ],
                correct: 1,
                explanation: "Social control theory explains that people refrain from crime due to strong social bonds and internal controls.",
                isSituational: false
            },
            {
                id: "crim_13",
                topic: "Theories of Crime Causation",
                question: "What is 'routine activities theory'?",
                options: [
                "Crime occurs when suitable targets, motivated offenders, and lack of guardianship converge",
                "Crime is a routine part of life",
                "Criminals follow routines",
                "Police routine prevents crime"
                ],
                correct: 0,
                explanation: "Routine activities theory states that crime occurs when three elements converge: motivated offender, suitable target, and lack of capable guardian.",
                isSituational: false
            },
            {
                id: "crim_14",
                topic: "Theories of Crime Causation",
                question: "What is 'general strain theory'?",
                options: [
                "Physical strain causes crime",
                "Strain from failure to achieve goals leads to crime",
                "Genetic strain causes crime",
                "Work strain causes crime"
                ],
                correct: 1,
                explanation: "General strain theory suggests that strain from failure to achieve positively valued goals can lead to crime.",
                isSituational: false
            },
            {
                id: "crim_15",
                topic: "Theories of Crime Causation",
                question: "What is 'subcultural theory'?",
                options: [
                "All cultures have crime",
                "Subcultures have values that differ from mainstream and may support crime",
                "Culture causes crime",
                "Subcultures prevent crime"
                ],
                correct: 1,
                explanation: "Subcultural theory suggests that some subcultures have values that differ from mainstream society and may support criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_16",
                topic: "Theories of Crime Causation",
                question: "What is 'conflict theory' in criminology?",
                options: [
                "Conflict between criminals",
                "Crime results from social conflict between groups with different power",
                "Conflict in families causes crime",
                "International conflict causes crime"
                ],
                correct: 1,
                explanation: "Conflict theory suggests that crime results from social conflict between groups with different levels of power and resources.",
                isSituational: false
            },
            {
                id: "crim_17",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'feminist criminology'?",
                options: [
                "Study of female criminals only",
                "Examines how gender affects crime and criminal justice",
                "Feminist approach to law",
                "Study of women's rights"
                ],
                correct: 1,
                explanation: "Feminist criminology examines how gender affects crime, victimization, and the criminal justice system.",
                isSituational: false
            },
            {
                id: "crim_18",
                topic: "Ethics and Human Relations",
                question: "What is 'critical criminology'?",
                options: [
                "Critical analysis of evidence",
                "Examines how power structures create and define crime",
                "Critical thinking about crime",
                "Criticism of criminals"
                ],
                correct: 1,
                explanation: "Critical criminology examines how power structures in society create and define crime.",
                isSituational: false
            },
            {
                id: "crim_19",
                topic: "Theories of Crime Causation",
                question: "What is 'peacemaking criminology'?",
                options: [
                "Study of peaceful crimes",
                "Approach focusing on social justice and conflict resolution",
                "Making peace with criminals",
                "Peaceful policing"
                ],
                correct: 1,
                explanation: "Peacemaking criminology focuses on social justice, conflict resolution, and addressing root causes of crime.",
                isSituational: false
            },
            {
                id: "crim_20",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'restorative justice'?",
                options: [
                "Punishing offenders harshly",
                "Focus on repairing harm and involving victims, offenders, and community",
                "Restoring old laws",
                "Justice in prisons"
                ],
                correct: 1,
                explanation: "Restorative justice focuses on repairing harm through dialogue between victims, offenders, and community.",
                isSituational: false
            },
            {
                id: "crim_21",
                topic: "Theories of Crime Causation",
                question: "What is 'social learning theory'?",
                options: [
                "Learning in schools",
                "Criminal behavior is learned through association with others",
                "Social media causes crime",
                "Learning from books"
                ],
                correct: 1,
                explanation: "Social learning theory states that criminal behavior is learned through interaction with others.",
                isSituational: false
            },
            {
                id: "crim_22",
                topic: "Theories of Crime Causation",
                question: "What is 'neutralization theory'?",
                options: [
                "Criminals neutralize police",
                "Criminals justify their actions to themselves",
                "Neutral crimes",
                "Chemical neutralization"
                ],
                correct: 1,
                explanation: "Neutralization theory suggests that criminals use techniques to justify their criminal actions to themselves.",
                isSituational: false
            },
            {
                id: "crim_23",
                topic: "Theories of Crime Causation",
                question: "What is 'social bond theory'?",
                options: [
                "Bonds between criminals",
                "Strong social bonds prevent crime",
                "Bonding in prison",
                "Financial bonds"
                ],
                correct: 1,
                explanation: "Social bond theory suggests that strong attachments, commitments, and beliefs prevent criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_24",
                topic: "Theories of Crime Causation",
                question: "What is 'self-control theory'?",
                options: [
                "Criminals have no self-control",
                "Low self-control developed in childhood leads to criminal behavior",
                "Self-control prevents all crime",
                "Police control criminals"
                ],
                correct: 1,
                explanation: "Self-control theory suggests that low self-control developed in childhood leads to criminal behavior throughout life.",
                isSituational: false
            },
            {
                id: "crim_25",
                topic: "Theories of Crime Causation",
                question: "What is 'biological theory' of crime?",
                options: [
                "Study of biological evidence",
                "Genetic and physiological factors influence criminal behavior",
                "Biology prevents crime",
                "Medical treatment of crime"
                ],
                correct: 1,
                explanation: "Biological theory suggests that genetic and physiological factors influence criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_26",
                topic: "Theories of Crime Causation",
                question: "What is 'psychological theory' of crime?",
                options: [
                "Study of psychological evidence",
                "Personality traits and mental processes influence criminal behavior",
                "Psychology prevents crime",
                "Psychological testing"
                ],
                correct: 1,
                explanation: "Psychological theory suggests that personality traits and mental processes influence criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_27",
                topic: "Theories of Crime Causation",
                question: "What is 'integrated theory' in criminology?",
                options: [
                "Theory about integration",
                "Combines multiple theories to explain crime",
                "Integrated criminal justice",
                "Theory about prisons"
                ],
                correct: 1,
                explanation: "Integrated theories combine elements from multiple theories to provide a more comprehensive explanation of crime.",
                isSituational: false
            },
            {
                id: "crim_28",
                topic: "Theories of Crime Causation",
                question: "What is 'life course theory'?",
                options: [
                "Study of life in prison",
                "Examines how criminal behavior develops over lifetime",
                "Course about life",
                "Life sentence theory"
                ],
                correct: 1,
                explanation: "Life course theory examines how criminal behavior develops and changes throughout a person's lifetime.",
                isSituational: false
            },
            {
                id: "crim_29",
                topic: "Theories of Crime Causation",
                question: "What is 'latent trait theory'?",
                options: [
                "Hidden traits cause crime",
                "Stable underlying traits influence criminal behavior throughout life",
                "Latent criminals",
                "Trait testing"
                ],
                correct: 1,
                explanation: "Latent trait theory suggests that stable underlying traits influence criminal behavior throughout life.",
                isSituational: false
            },
            {
                id: "crim_30",
                topic: "Theories of Crime Causation",
                question: "What is 'trajectory theory'?",
                options: [
                "Study of bullet trajectories",
                "Different pathways of criminal behavior over life",
                "Trajectory of police",
                "Flight paths"
                ],
                correct: 1,
                explanation: "Trajectory theory identifies different pathways or trajectories of criminal behavior over the life course.",
                isSituational: false
            },
            {
                id: "crim_31",
                topic: "Theories of Crime Causation",
                question: "What is 'social disorganization theory'?",
                options: [
                "Disorganized society",
                "Weak community institutions lead to higher crime rates",
                "Disorganized criminals",
                "Organization prevents crime"
                ],
                correct: 1,
                explanation: "Social disorganization theory suggests that weak community institutions and social control lead to higher crime rates.",
                isSituational: false
            },
            {
                id: "crim_32",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'collective efficacy'?",
                options: [
                "Effective policing",
                "Community's ability to control behavior and maintain order",
                "Collective punishment",
                "Group effectiveness"
                ],
                correct: 1,
                explanation: "Collective efficacy refers to a community's ability to control behavior and maintain order through social cohesion.",
                isSituational: false
            },
            {
                id: "crim_33",
                topic: "Theories of Crime Causation",
                question: "What is 'concentric zone theory'?",
                options: [
                "Theory about zones in prison",
                "Cities grow in concentric zones with different crime rates",
                "Zone defense",
                "Concentric policing"
                ],
                correct: 1,
                explanation: "Concentric zone theory suggests that cities grow in concentric zones with different crime rates in each zone.",
                isSituational: false
            },
            {
                id: "crim_34",
                topic: "Theories of Crime Causation",
                question: "What is 'sector theory'?",
                options: [
                "Theory about economic sectors",
                "Cities develop in wedge-shaped sectors along transportation routes",
                "Police sectors",
                "Industrial sectors"
                ],
                correct: 1,
                explanation: "Sector theory suggests that cities develop in wedge-shaped sectors along transportation routes.",
                isSituational: false
            },
            {
                id: "crim_35",
                topic: "Theories of Crime Causation",
                question: "What is 'multiple nuclei theory'?",
                options: [
                "Multiple nuclear weapons",
                "Cities have multiple centers of activity",
                "Nuclear families",
                "Multiple police stations"
                ],
                correct: 1,
                explanation: "Multiple nuclei theory suggests that cities have multiple centers of activity rather than one central business district.",
                isSituational: false
            },
            {
                id: "crim_36",
                topic: "Theories of Crime Causation",
                question: "What is 'broken windows theory'?",
                options: [
                "Theory about broken windows",
                "Signs of disorder lead to more serious crime",
                "Window repair theory",
                "Glass theory"
                ],
                correct: 1,
                explanation: "Broken windows theory suggests that visible signs of disorder lead to more serious crime.",
                isSituational: false
            },
            {
                id: "crim_37",
                topic: "Theories of Crime Causation",
                question: "What is 'defensible space'?",
                options: [
                "Space that can be defended",
                "Environmental design that reduces crime opportunity",
                "Military space",
                "Defensive architecture"
                ],
                correct: 1,
                explanation: "Defensible space refers to environmental design that reduces opportunities for crime.",
                isSituational: false
            },
            {
                id: "crim_38",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'crime prevention through environmental design' (CPTED)?",
                options: [
                "Designing prisons",
                "Using environmental design to prevent crime",
                "Environmental crimes",
                "Design police stations"
                ],
                correct: 1,
                explanation: "CPTED uses environmental design strategies to reduce crime opportunities.",
                isSituational: false
            },
            {
                id: "crim_39",
                topic: "Ethics and Human Relations",
                question: "What is 'situational crime prevention'?",
                options: [
                "Preventing situations",
                "Reducing opportunities for crime through environmental changes",
                "Situational police",
                "Preventing specific crimes"
                ],
                correct: 1,
                explanation: "Situational crime prevention reduces opportunities for crime through environmental and situational changes.",
                isSituational: false
            },
            {
                id: "crim_40",
                topic: "Theories of Crime Causation",
                question: "What is 'social crime prevention'?",
                options: [
                "Social media prevention",
                "Addressing social conditions that lead to crime",
                "Social police",
                "Preventing social crimes"
                ],
                correct: 1,
                explanation: "Social crime prevention addresses underlying social conditions that contribute to crime.",
                isSituational: false
            },
            {
                id: "crim_41",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'developmental crime prevention'?",
                options: [
                "Preventing development of crime areas",
                "Early intervention to prevent criminal development",
                "Economic development",
                "Building development"
                ],
                correct: 1,
                explanation: "Developmental crime prevention involves early intervention to prevent the development of criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_42",
                topic: "Ethics and Human Relations",
                question: "What is 'community crime prevention'?",
                options: [
                "Preventing crime in communities",
                "Organizing communities to prevent crime",
                "Community policing only",
                "Neighborhood watch only"
                ],
                correct: 1,
                explanation: "Community crime prevention involves organizing communities to work together to prevent crime.",
                isSituational: false
            },
            {
                id: "crim_43",
                topic: "Theories of Crime Causation",
                question: "What is 'primary prevention'?",
                options: [
                "First prevention",
                "Preventing crime before it occurs",
                "Primary police",
                "Main prevention"
                ],
                correct: 1,
                explanation: "Primary prevention aims to prevent crime before it occurs by addressing root causes.",
                isSituational: false
            },
            {
                id: "crim_44",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'secondary prevention'?",
                options: [
                "Secondary police",
                "Early intervention with at-risk individuals",
                "Second prevention",
                "Backup prevention"
                ],
                correct: 1,
                explanation: "Secondary prevention involves early intervention with individuals identified as at-risk.",
                isSituational: false
            },
            {
                id: "crim_45",
                topic: "Ethics and Human Relations",
                question: "What is 'tertiary prevention'?",
                options: [
                "Third prevention",
                "Intervening with offenders to prevent recidivism",
                "Tertiary police",
                "Final prevention"
                ],
                correct: 1,
                explanation: "Tertiary prevention involves interventions with offenders to prevent reoffending.",
                isSituational: false
            },
            {
                id: "crim_46",
                topic: "Theories of Crime Causation",
                question: "What is 'crime desistance'?",
                options: [
                "Crime resistance",
                "Process of ending criminal behavior",
                "Desisting police",
                "Crime persistence"
                ],
                correct: 1,
                explanation: "Crime desistance refers to the process by which individuals stop engaging in criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_47",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'turning points' in life course criminology?",
                options: [
                "Turning in police reports",
                "Major life events that can change criminal trajectory",
                "Turning points in crime",
                "Direction changes"
                ],
                correct: 1,
                explanation: "Turning points are major life events like marriage or employment that can change a person's criminal trajectory.",
                isSituational: false
            },
            {
                id: "crim_48",
                topic: "Ethics and Human Relations",
                question: "What is 'aging out' of crime?",
                options: [
                "Getting too old for prison",
                "Natural decline in criminal behavior with age",
                "Aging criminals",
                "Old age crime"
                ],
                correct: 1,
                explanation: "Aging out refers to the natural decline in criminal behavior as people age.",
                isSituational: false
            },
            {
                id: "crim_49",
                topic: "Theories of Crime Causation",
                question: "What is 'social capital'?",
                options: [
                "Money from society",
                "Social networks and relationships that provide benefits",
                "Capital punishment",
                "Financial capital"
                ],
                correct: 1,
                explanation: "Social capital refers to social networks and relationships that provide benefits and support.",
                isSituational: false
            },
            {
                id: "crim_50",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'human capital'?",
                options: [
                "Money from humans",
                "Skills, knowledge, and abilities that contribute to productivity",
                "Human resources",
                "Personal wealth"
                ],
                correct: 1,
                explanation: "Human capital refers to skills, knowledge, and abilities that contribute to personal productivity.",
                isSituational: false
            },
            {
                id: "crim_51",
                topic: "Ethics and Human Relations",
                question: "What is 'cultural capital'?",
                options: [
                "Money from culture",
                "Cultural knowledge and credentials that provide advantages",
                "Cultural wealth",
                "Arts funding"
                ],
                correct: 1,
                explanation: "Cultural capital refers to cultural knowledge, skills, and credentials that provide social advantages.",
                isSituational: false
            },
            {
                id: "crim_52",
                topic: "Theories of Crime Causation",
                question: "What is 'social exclusion'?",
                options: [
                "Excluding criminals",
                "Marginalization of groups from full participation in society",
                "Social isolation",
                "Excluding from school"
                ],
                correct: 1,
                explanation: "Social exclusion refers to the marginalization of groups from full participation in society.",
                isSituational: false
            },
            {
                id: "crim_53",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'relative deprivation'?",
                options: [
                "Being deprived of relatives",
                "Feeling deprived compared to others in society",
                "Relative poverty",
                "Family deprivation"
                ],
                correct: 1,
                explanation: "Relative deprivation refers to the feeling of being deprived compared to others in society.",
                isSituational: false
            },
            {
                id: "crim_54",
                topic: "Theories of Crime Causation",
                question: "What is 'anomie'?",
                options: [
                "A type of crime",
                "Normlessness or breakdown of social norms",
                "Anonymous crime",
                "No name"
                ],
                correct: 1,
                explanation: "Anomie refers to a state of normlessness or breakdown of social norms.",
                isSituational: false
            },
            {
                id: "crim_55",
                topic: "Theories of Crime Causation",
                question: "What is 'social cohesion'?",
                options: [
                "Social glue",
                "Bonds that hold society together",
                "Social police",
                "Group bonding"
                ],
                correct: 1,
                explanation: "Social cohesion refers to the bonds that hold society together and promote cooperation.",
                isSituational: false
            },
            {
                id: "crim_56",
                topic: "Theories of Crime Causation",
                question: "What is 'social capital theory' of crime?",
                options: [
                "Crime about money",
                "Lack of social capital increases crime risk",
                "Capital punishment",
                "Financial crime"
                ],
                correct: 1,
                explanation: "Social capital theory suggests that lack of social networks and support increases crime risk.",
                isSituational: false
            },
            {
                id: "crim_57",
                topic: "Theories of Crime Causation",
                question: "What is 'collective efficacy theory'?",
                options: [
                "Group effectiveness",
                "Community cohesion and informal social control reduce crime",
                "Police effectiveness",
                "Team work"
                ],
                correct: 1,
                explanation: "Collective efficacy theory suggests that community cohesion and informal social control reduce crime.",
                isSituational: false
            },
            {
                id: "crim_58",
                topic: "Theories of Crime Causation",
                question: "What is 'social disorganization theory' key factor?",
                options: [
                "Individual factors",
                "Community-level factors like poverty and residential instability",
                "Police factors",
                "Government factors"
                ],
                correct: 1,
                explanation: "Social disorganization theory focuses on community-level factors like poverty and residential instability.",
                isSituational: false
            },
            {
                id: "crim_59",
                topic: "Theories of Crime Causation",
                question: "What is 'routine activities theory' three elements?",
                options: [
                "Police, courts, prisons",
                "Motivated offender, suitable target, lack of guardian",
                "Crime, criminal, victim",
                "Time, place, opportunity"
                ],
                correct: 1,
                explanation: "Routine activities theory requires three elements: motivated offender, suitable target, and lack of capable guardian.",
                isSituational: false
            },
            {
                id: "crim_60",
                topic: "Theories of Crime Causation",
                question: "What is 'capable guardian' in routine activities theory?",
                options: [
                "Guard in prison",
                "Anyone or anything that can deter crime",
                "Police only",
                "Security guard only"
                ],
                correct: 1,
                explanation: "A capable guardian can be anyone or anything that deters crime, including neighbors, locks, or cameras.",
                isSituational: false
            },
            {
                id: "crim_61",
                topic: "Theories of Crime Causation",
                question: "What is 'suitable target'?",
                options: [
                "Target practice",
                "Person or property that is attractive to criminals",
                "Good target",
                "Easy target"
                ],
                correct: 1,
                explanation: "A suitable target is a person or property that is attractive to criminals for various reasons.",
                isSituational: false
            },
            {
                id: "crim_62",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'motivated offender'?",
                options: [
                "Offended person",
                "Person willing and able to commit crime",
                "Motivated police",
                "Angry victim"
                ],
                correct: 1,
                explanation: "A motivated offender is a person who is willing and able to commit a crime.",
                isSituational: false
            },
            {
                id: "crim_63",
                topic: "Theories of Crime Causation",
                question: "What is 'deterrence theory'?",
                options: [
                "Theory about detergents",
                "Punishment deters crime through fear of consequences",
                "Determining crime",
                "Detecting crime"
                ],
                correct: 1,
                explanation: "Deterrence theory suggests that punishment deters crime through fear of consequences.",
                isSituational: false
            },
            {
                id: "crim_64",
                topic: "Theories of Crime Causation",
                question: "What is 'general deterrence'?",
                options: [
                "General punishment",
                "Punishing one to deter the general public",
                "General police",
                "Common deterrence"
                ],
                correct: 1,
                explanation: "General deterrence aims to deter the general public by punishing specific offenders.",
                isSituational: false
            },
            {
                id: "crim_65",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'specific deterrence'?",
                options: [
                "Specific punishment",
                "Punishing offender to prevent their future offenses",
                "Specific police",
                "Targeted deterrence"
                ],
                correct: 1,
                explanation: "Specific deterrence aims to prevent the punished offender from committing future crimes.",
                isSituational: false
            },
            {
                id: "crim_66",
                topic: "Ethics and Human Relations",
                question: "What is 'incapacitation'?",
                options: [
                "Inability to commit crime",
                "Restricting offenders' ability to commit crime",
                "Incapable criminals",
                "Physical restraint"
                ],
                correct: 1,
                explanation: "Incapacitation restricts offenders' ability to commit crime through imprisonment or other means.",
                isSituational: false
            },
            {
                id: "crim_67",
                topic: "Theories of Crime Causation",
                question: "What is 'rehabilitation'?",
                options: [
                "Rebuilding prisons",
                "Transforming offenders into law-abiding citizens",
                "Rehabilitating buildings",
                "Medical treatment"
                ],
                correct: 1,
                explanation: "Rehabilitation aims to transform offenders into law-abiding citizens through treatment and programs.",
                isSituational: false
            },
            {
                id: "crim_68",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'retribution'?",
                options: [
                "Returning to prison",
                "Punishment based on deservedness",
                "Retribution against police",
                "Payback"
                ],
                correct: 1,
                explanation: "Retribution is punishment based on the idea that offenders deserve to suffer for their crimes.",
                isSituational: false
            },
            {
                id: "crim_69",
                topic: "Ethics and Human Relations",
                question: "What is 'just deserts'?",
                options: [
                "Desert prison",
                "Punishment proportionate to the crime",
                "Just desserts",
                "Fair punishment"
                ],
                correct: 1,
                explanation: "Just deserts refers to punishment that is proportionate to the seriousness of the crime.",
                isSituational: false
            },
            {
                id: "crim_70",
                topic: "Theories of Crime Causation",
                question: "What is 'restorative justice' focus?",
                options: [
                "Punishing offenders",
                "Repairing harm and involving all parties",
                "Restoring laws",
                "Justice system reform"
                ],
                correct: 1,
                explanation: "Restorative justice focuses on repairing harm and involving victims, offenders, and community.",
                isSituational: false
            },
            {
                id: "crim_71",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'victim-offender mediation'?",
                options: [
                "Mediation between victims and offenders",
                "Court mediation",
                "Police mediation",
                "Legal mediation"
                ],
                correct: 0,
                explanation: "Victim-offender mediation brings victims and offenders together to discuss the crime and its impact.",
                isSituational: false
            },
            {
                id: "crim_72",
                topic: "Ethics and Human Relations",
                question: "What is 'community service' as punishment?",
                options: [
                "Service to community",
                "Offenders perform unpaid work for community benefit",
                "Community help",
                "Volunteer work"
                ],
                correct: 1,
                explanation: "Community service requires offenders to perform unpaid work that benefits the community.",
                isSituational: false
            },
            {
                id: "crim_73",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'diversion'?",
                options: [
                "Diverting traffic",
                "Diverting offenders from formal prosecution",
                "Diverting police",
                "Changing direction"
                ],
                correct: 1,
                explanation: "Diversion programs divert offenders from formal prosecution into alternative programs.",
                isSituational: false
            },
            {
                id: "crim_74",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'drug court'?",
                options: [
                "Court for drug dealers",
                "Specialized court for drug offenders focusing on treatment",
                "Drug testing court",
                "Pharmacy court"
                ],
                correct: 1,
                explanation: "Drug courts are specialized courts that focus on treatment and rehabilitation for drug offenders.",
                isSituational: false
            },
            {
                id: "crim_75",
                topic: "Ethics and Human Relations",
                question: "What is 'mental health court'?",
                options: [
                "Court for mentally ill criminals",
                "Specialized court for offenders with mental health issues",
                "Psychiatric court",
                "Health court"
                ],
                correct: 1,
                explanation: "Mental health courts are specialized courts that address offenders with mental health issues.",
                isSituational: false
            },
            {
                id: "crim_76",
                topic: "Theories of Crime Causation",
                question: "What is 'problem-solving court'?",
                options: [
                "Court that solves problems",
                "Court focusing on underlying problems of offenders",
                "Problem court",
                "Solution court"
                ],
                correct: 1,
                explanation: "Problem-solving courts focus on addressing the underlying problems that contribute to criminal behavior.",
                isSituational: false
            },
            {
                id: "crim_77",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'reentry'?",
                options: [
                "Re-entering prison",
                "Process of returning to society after incarceration",
                "Entry again",
                "Return to crime"
                ],
                correct: 1,
                explanation: "Reentry refers to the process of returning to society after incarceration.",
                isSituational: false
            },
            {
                id: "crim_78",
                topic: "Ethics and Human Relations",
                question: "What is 'collateral consequences' of criminal conviction?",
                options: [
                "Direct punishment",
                "Additional legal and social restrictions beyond sentence",
                "Side effects",
                "Collateral damage"
                ],
                correct: 1,
                explanation: "Collateral consequences are additional legal and social restrictions that continue after the sentence is served.",
                isSituational: false
            },
            {
                id: "crim_79",
                topic: "Theories of Crime Causation",
                question: "What is 'stigma'?",
                options: [
                "Type of crime",
                "Social disgrace or mark of shame",
                "Police mark",
                "Criminal record"
                ],
                correct: 1,
                explanation: "Stigma refers to social disgrace or mark of shame associated with being labeled a criminal.",
                isSituational: false
            },
            {
                id: "crim_80",
                topic: "Theories of Crime Causation",
                question: "What is 'labeling theory' main idea?",
                options: [
                "Labeling evidence",
                "Being labeled as criminal leads to secondary deviance",
                "Labeling criminals",
                "Name tags"
                ],
                correct: 1,
                explanation: "Labeling theory suggests that being labeled as criminal leads to secondary deviance and criminal identity.",
                isSituational: false
            },
            {
                id: "crim_81",
                topic: "Ethics and Human Relations",
                question: "What is 'secondary deviance'?",
                options: [
                "Second crime",
                "Deviance that results from being labeled",
                "Secondary crime",
                "Additional offense"
                ],
                correct: 1,
                explanation: "Secondary deviance is deviant behavior that results from being labeled as deviant.",
                isSituational: false
            },
            {
                id: "crim_82",
                topic: "Theories of Crime Causation",
                question: "What is 'primary deviance'?",
                options: [
                "First crime",
                "Initial deviant acts before labeling",
                "Primary offense",
                "Main crime"
                ],
                correct: 1,
                explanation: "Primary deviance refers to initial deviant acts before a person is labeled as deviant.",
                isSituational: false
            },
            {
                id: "crim_83",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'master status'?",
                options: [
                "High status",
                "Status that overrides all others, like 'criminal'",
                "Master's degree",
                "Main status"
                ],
                correct: 1,
                explanation: "Master status is a status that overrides all others, such as being labeled a 'criminal'.",
                isSituational: false
            },
            {
                id: "crim_84",
                topic: "Ethics and Human Relations",
                question: "What is 'deviant career'?",
                options: [
                "Career in crime",
                "Progression into more serious deviance",
                "Deviant job",
                "Criminal profession"
                ],
                correct: 1,
                explanation: "Deviant career refers to the progression into more serious deviant behavior over time.",
                isSituational: false
            },
            {
                id: "crim_85",
                topic: "Theories of Crime Causation",
                question: "What is 'moral panic'?",
                options: [
                "Panic about morals",
                "Exaggerated public fear about perceived threat",
                "Moral crisis",
                "Ethical panic"
                ],
                correct: 1,
                explanation: "Moral panic is an exaggerated public fear about a perceived threat to societal values.",
                isSituational: false
            },
            {
                id: "crim_86",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'folk devil'?",
                options: [
                "Devil worshipper",
                "Person or group portrayed as threat to society during moral panic",
                "Folk criminal",
                "Traditional devil"
                ],
                correct: 1,
                explanation: "Folk devil refers to a person or group portrayed as a threat to society during a moral panic.",
                isSituational: false
            },
            {
                id: "crim_87",
                topic: "Theories of Crime Causation",
                question: "What is 'social construction of crime'?",
                options: [
                "Building prisons",
                "Crime is defined through social processes",
                "Constructing evidence",
                "Building cases"
                ],
                correct: 1,
                explanation: "Social construction theory suggests that crime is defined through social and political processes.",
                isSituational: false
            },
            {
                id: "crim_88",
                topic: "Theories of Crime Causation",
                question: "What is 'moral entrepreneur'?",
                options: [
                "Moral businessman",
                "Person who campaigns to have certain behaviors defined as deviant",
                "Ethical leader",
                "Moral police"
                ],
                correct: 1,
                explanation: "Moral entrepreneurs are people who campaign to have certain behaviors defined as deviant.",
                isSituational: false
            },
            {
                id: "crim_89",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'conflict perspective' on crime?",
                options: [
                "Conflict between criminals",
                "Laws reflect interests of powerful groups",
                "Conflict in court",
                "Legal conflict"
                ],
                correct: 1,
                explanation: "Conflict perspective suggests that laws reflect the interests of powerful groups in society.",
                isSituational: false
            },
            {
                id: "crim_90",
                topic: "Theories of Crime Causation",
                question: "What is 'power-control theory'?",
                options: [
                "Controlling power",
                "Gender differences in crime relate to power in family structure",
                "Power over criminals",
                "Control theory"
                ],
                correct: 1,
                explanation: "Power-control theory suggests that gender differences in crime relate to power in family structure.",
                isSituational: false
            },
            {
                id: "crim_91",
                topic: "Theories of Crime Causation",
                question: "What is 'patriarchy'?",
                options: [
                "Father rule",
                "Male-dominated social system",
                "Parental control",
                "Family rule"
                ],
                correct: 1,
                explanation: "Patriarchy refers to a male-dominated social system.",
                isSituational: false
            },
            {
                id: "crim_92",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'liberal feminism'?",
                options: [
                "Liberal approach to crime",
                "Focus on equal rights and opportunities for women",
                "Liberal laws",
                "Freedom feminism"
                ],
                correct: 1,
                explanation: "Liberal feminism focuses on achieving equal rights and opportunities for women.",
                isSituational: false
            },
            {
                id: "crim_93",
                topic: "Ethics and Human Relations",
                question: "What is 'radical feminism'?",
                options: [
                "Radical approach",
                "Patriarchy is root of women's oppression",
                "Radical laws",
                "Extreme feminism"
                ],
                correct: 1,
                explanation: "Radical feminism views patriarchy as the root of women's oppression.",
                isSituational: false
            },
            {
                id: "crim_94",
                topic: "Theories of Crime Causation",
                question: "What is 'socialist feminism'?",
                options: [
                "Socialist approach to crime",
                "Combines analysis of patriarchy and capitalism",
                "Socialist laws",
                "Political feminism"
                ],
                correct: 1,
                explanation: "Socialist feminism combines analysis of patriarchy and capitalism as sources of oppression.",
                isSituational: false
            },
            {
                id: "crim_95",
                topic: "Juvenile Delinquency (RA 9344)",
                question: "What is 'intersectionality'?",
                options: [
                "Intersection of roads",
                "Overlapping systems of oppression based on race, gender, class",
                "Intersection of crimes",
                "Crossing paths"
                ],
                correct: 1,
                explanation: "Intersectionality examines how overlapping systems of oppression based on race, gender, and class affect individuals.",
                isSituational: false
            },
            {
                id: "crim_96",
                topic: "Theories of Crime Causation",
                question: "What is 'critical race theory'?",
                options: [
                "Critical about race",
                "Examines how race and racism intersect with law and criminal justice",
                "Race theory",
                "Critical racial analysis"
                ],
                correct: 1,
                explanation: "Critical race theory examines how race and racism intersect with law and criminal justice.",
                isSituational: false
            },
            {
                id: "crim_97",
                topic: "Theories of Crime Causation",
                question: "What is 'colonialism' impact on crime?",
                options: [
                "Colonial crimes",
                "Colonial history shapes current criminal justice systems",
                "Colonial prisons",
                "Historical crime"
                ],
                correct: 1,
                explanation: "Colonial history has shaped current criminal justice systems in many countries.",
                isSituational: false
            },
            {
                id: "crim_98",
                topic: "Theories of Crime Causation",
                question: "What is 'postcolonial theory'?",
                options: [
                "Theory after colonialism",
                "Examines legacy of colonialism on current social structures",
                "Post-colonial crime",
                "After colonialism"
                ],
                correct: 1,
                explanation: "Postcolonial theory examines the legacy of colonialism on current social structures.",
                isSituational: false
            },
            {
                id: "crim_99",
                topic: "Ethics and Human Relations",
                question: "What is 'globalization' impact on crime?",
                options: [
                "Global crimes",
                "Increased transnational crime and new crime opportunities",
                "World crime",
                "International crime"
                ],
                correct: 1,
                explanation: "Globalization has increased transnational crime and created new opportunities for criminal activity.",
                isSituational: false
            },
            {
                id: "crim_100",
                topic: "Theories of Crime Causation",
                question: "What is 'transnational crime'?",
                options: [
                "Crime across borders",
                "Criminal activities that cross national boundaries",
                "International criminal",
                "Border crime"
                ],
                correct: 1,
                explanation: "Transnational crime refers to criminal activities that cross national boundaries.",
                isSituational: false
            }
        ]
    },
};

function getQuestionsBySubject(subjectKey) {
    return criminologySubjects[subjectKey]?.questions || [];
}

function getAllSubjects() {
    return Object.keys(criminologySubjects).map(key => ({
        key: key,
        ...criminologySubjects[key]
    }));
}

function getSubjectInfo(subjectKey) {
    return criminologySubjects[subjectKey];
}

function getTotalQuestionCount() {
    return Object.values(criminologySubjects).reduce((sum, s) => sum + s.questions.length, 0);
}
