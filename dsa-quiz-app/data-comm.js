const subjectInfo = {
    app_title: "Comm Master",
    app_title_ar: "أستاذ التواصل",
    hero_title: "Master Communication Skills",
    hero_title_ar: "أتقن مهارات الاتصال",
    hero_subtitle: "Choose a part to begin your communication skills mastery.",
    hero_subtitle_ar: "اختر جزءاً لتبدأ إتقان مهارات الاتصال.",
    resources: [
        { name: "Comm Skills (Examveda)", name_ar: "مهارات الاتصال (Examveda)", url: "https://www.examveda.com/management/practice-mcq-question-on-communication-skills/" },
        { name: "English Grammar (British Council)", name_ar: "قواعد الإنجليزية (British Council)", url: "https://learnenglish.britishcouncil.org/grammar" },
        { name: "Soft Skills Guide", name_ar: "دليل المهارات الناعمة", url: "#" }
    ]
};

const quizData = [
    {
        id: "comm-skills-1",
        title: "Communication Skills (Part 1)",
        title_ar: "مهارات الاتصال (الجزء الأول)",
        description: "Questions 1-100: Basics, process, and grammar.",
        description_ar: "الأسئلة 1-100: المفاهيم الأساسية، عملية الاتصال، والقواعد.",
        icon: "🗣️",
        questions: [
            {
                id: "comm-1",
                text: "Communication is a non-stop ____________.",
                text_ar: "الاتصال هو ____________ غير متوقف.",
                options: ["Paper", "Process", "Programme", "Plan"],
                options_ar: ["ورقة", "عملية", "برنامج", "خطة"],
                correct: 1,
                explanation: "Communication is considered a continuous process of exchanging information.",
                explanation_ar: "يعتبر الاتصال عملية مستمرة لتبادل المعلومات."
            },
            {
                id: "comm-2",
                text: "Communication is a part of ________ skills.",
                text_ar: "الاتصال هو جزء من المهارات ________ .",
                options: ["Soft", "Hard", "Rough", "Short"],
                options_ar: ["الناعمة (Soft)", "الصلبة", "الخشنة", "القصيرة"],
                correct: 0,
                explanation: "Communication is a key component of soft skills, which are personal attributes for effective interaction.",
                explanation_ar: "الاتصال هو مكون رئيسي للمهارات الناعمة، وهي سمات شخصية للتفاعل الفعال."
            },
            {
                id: "comm-3",
                text: "The _______________ is the person who transmits the message.",
                text_ar: "الـ ____________ هو الشخص الذي يرسل الرسالة.",
                options: ["Receiver", "Driver", "Sender", "Cleaner"],
                options_ar: ["المستقبل", "السائق", "المرسل", "المنظف"],
                correct: 2,
                explanation: "The sender is the individual who initiates and transmits the message.",
                explanation_ar: "المرسل هو الفرد الذي يبدأ وينقل الرسالة."
            },
            {
                id: "comm-4",
                text: "_____________ is the person who notices and decodes and attaches some meaning to a message.",
                text_ar: "الـ _____________ هو الشخص الذي يلاحظ ويفك تشفير الرسالة ويعطيها معنى.",
                options: ["Receiver", "Driver", "Sender", "Cleaner"],
                options_ar: ["المستقبل", "السائق", "المرسل", "المنظف"],
                correct: 0,
                explanation: "The receiver is the one who receives, decodes, and interprets the message.",
                explanation_ar: "المستقبل هو الشخص الذي يستلم الرسالة ويفك تشفيرها ويفسرها."
            },
            {
                id: "comm-5",
                text: "Message is any signal that triggers the response of a _________",
                text_ar: "الرسالة هي أي إشارة تثير استجابة الـ _________",
                options: ["Receiver", "Driver", "Sender", "Cleaner"],
                options_ar: ["المستقبل", "السائق", "المرسل", "المنظف"],
                correct: 0,
                explanation: "A message is intended to elicit a response from the receiver.",
                explanation_ar: "الرسالة تهدف إلى إثارة استجابة من المستقبل."
            },
            {
                id: "comm-6",
                text: "The response to a sender's message is called _________.",
                text_ar: "الاستجابة لرسالة المرسل تسمى _________.",
                options: ["Food bank", "Feedback", "Food", "Back"],
                options_ar: ["بنك طعام", "تغذية راجعة (Feedback)", "طعام", "عودة"],
                correct: 1,
                explanation: "Feedback is the response provided by the receiver to the sender's message.",
                explanation_ar: "التغذية الراجعة هي الاستجابة التي يقدمها المستقبل لرسالة المرسل."
            },
            {
                id: "comm-7",
                text: "___________ context refers to the relationship between the sender and the receiver.",
                text_ar: "السياق ___________ يشير إلى العلاقة بين المرسل والمستقبل.",
                options: ["Social", "Physical", "Cultural", "Chronological"],
                options_ar: ["الاجتماعي", "المادي", "الثقافي", "الزمني"],
                correct: 0,
                explanation: "Social context involves the personal and professional relationships between communicators.",
                explanation_ar: "السياق الاجتماعي يتضمن العلاقات الشخصية والمهنية بين المتواصلين."
            },
            {
                id: "comm-8",
                text: "___________ context refers to the similarity of backgrounds between the sender and the receiver.",
                text_ar: "السياق ___________ يشير إلى تشابه الخلفيات بين المرسل والمستقبل.",
                options: ["Physical", "Social", "Chronological", "Cultural"],
                options_ar: ["المادي", "الاجتماعي", "الزمني", "الثقافي"],
                correct: 3,
                explanation: "Cultural context relates to the shared background, values, and practices of the individuals.",
                explanation_ar: "السياق الثقافي يتعلق بالخلفية والقيم والممارسات المشتركة للأفراد."
            },
            {
                id: "comm-9",
                text: "_________ refers to all these factors that disrupt the communication.",
                text_ar: "الـ _________ يشير إلى كل العوامل التي تعيق الاتصال.",
                options: ["Nonsense", "Noise", "Nowhere", "Nobody"],
                options_ar: ["الهراء", "الضوضاء (Noise)", "لا مكان", "لا أحد"],
                correct: 1,
                explanation: "Noise is anything that interferes with the transmission or reception of a message.",
                explanation_ar: "الضوضاء هي أي شيء يتداخل مع إرسال أو استقبال الرسالة."
            },
            {
                id: "comm-10",
                text: "Environmental barriers are the same as ___________ noise.",
                text_ar: "العوائق البيئية هي نفسها الضوضاء ___________.",
                options: ["Physiological", "Psychological", "Physical", "Sociological"],
                options_ar: ["الفسيولوجية", "النفسية", "المادية (الفيزيائية)", "الاجتماعية"],
                correct: 2,
                explanation: "Physical noise refers to environmental interference like loud music or poor lighting.",
                explanation_ar: "الضوضاء المادية تشير إلى التداخل البيئي مثل الموسيقى الصاخبة أو الإضاءة السيئة."
            },
            {
                id: "comm-11",
                text: "Our dress code is an example of _____________ communication.",
                text_ar: "قواعد اللباس الخاصة بنا هي مثال على الاتصال _____________.",
                options: ["Verbal", "Nonverbal", "Written", "Spoken"],
                options_ar: ["اللفظي", "غير اللفظي", "الكتابي", "المحكي"],
                correct: 1,
                explanation: "Nonverbal communication includes appearance, clothing, and body language.",
                explanation_ar: "الاتصال غير اللفظي يشمل المظهر والملابس ولغة الجسد."
            },
            {
                id: "comm-12",
                text: "Communication strengthens _________ & __________ relationship is an organization.",
                text_ar: "الاستفتاء يقوي العلاقة بين _________ و _________ في المؤسسة.",
                options: ["Employer-Father", "Employer-Employee", "Mother-Employer", "Mother-Child"],
                options_ar: ["صاحب العمل والأب", "صاحب العمل والموظف", "الأم وصاحب العمل", "الأم والطفل"],
                correct: 1,
                explanation: "Effective communication is vital for maintaining a healthy employer-employee dynamic.",
                explanation_ar: "الاتصال الفعال حيوي للحفاظ على ديناميكية صحية بين صاحب العمل والموظف."
            },
            {
                id: "comm-13",
                text: "_______________ communication includes tone of voice body language, facial expressions etc.",
                text_ar: "الاتصال ____________ يتضمن نبرة الصوت، لغة الجسد، تعبيرات الوجه إلخ.",
                options: ["Nonverbal", "verbal", "letter", "notice"],
                options_ar: ["غير اللفظي", "اللفظي", "الرسائل", "الملاحظات"],
                correct: 0,
                explanation: "Nonverbal cues like tone and facial expressions often convey more meaning than words alone.",
                explanation_ar: "الإشارات غير اللفظية مثل النبرة وتعبيرات الوجه غالباً ما تنقل معنى أكبر من الكلمات وحدها."
            },
            {
                id: "comm-14",
                text: "When there is similarity of background between the sender and the receives such as age, language nationality, religion, gender then this is called _____________ context.",
                text_ar: "عندما يكون هناك تشابه في الخلفية بين المرسل والمستقبل مثل العمر واللغة والجنسية والدين والنوع، فإن هذا يسمى السياق _____________.",
                options: ["Social", "Cultural", "Physical", "Dynamic"],
                options_ar: ["الاجتماعي", "الثقافي", "المادي", "الديناميكي"],
                correct: 1,
                explanation: "Similarity in identity markers like nationality and religion falls under cultural context.",
                explanation_ar: "التشابه في محددات الهوية مثل الجنسية والدين يندرج تحت السياق الثقافي."
            },
            {
                id: "comm-15",
                text: "Letter, e-mail telephone are examples of __________.",
                text_ar: "الرسالة، البريد الإلكتروني، الهاتف هي أمثلة على _________.",
                options: ["Message", "Feedback", "Channel", "Encoding"],
                options_ar: ["الرسالة", "التغذية الراجعة", "القناة (Channel)", "الترميز"],
                correct: 2,
                explanation: "The channel is the medium used to convey the message from sender to receiver.",
                explanation_ar: "القناة هي الوسيلة المستخدمة لنقل الرسالة من المرسل إلى المستقبل."
            },
            {
                id: "comm-16",
                text: "Understanding __________different parts of speech forms the base of leaning grammar.",
                text_ar: "فهم __________ أجزاء مختلفة من الكلام يشكل أساس تعلم القواعد.",
                options: ["Five", "Eight", "Six", "Seven"],
                options_ar: ["خمسة", "ثمانية", "ستة", "سبعة"],
                correct: 1,
                explanation: "There are traditionally eight parts of speech in English grammar (noun, verb, etc.).",
                explanation_ar: "هناك تقليدياً ثمانية أجزاء للكلام في قواعد اللغة الإنجليزية (اسم، فعل، إلخ)."
            },
            {
                id: "comm-17",
                text: "It is of paramount importance that one need to construct a __________sentence in the day to day affairs.",
                text_ar: "من الأهمية العظمى أن يحتاج الفرد إلى بناء جملة __________ في الشؤون اليومية.",
                options: ["Wrong", "Correct", "Incorrect", "Night"],
                options_ar: ["خاطئة", "صحيحة", "غير صحيحة", "ليلية"],
                correct: 1,
                explanation: "Clear and correct sentence construction is essential for effective daily communication.",
                explanation_ar: "بناء جملة واضحة وصحيحة أمر ضروري للتواصل اليومي الفعال."
            },
            {
                id: "comm-18",
                text: "A __________ is defined as the name of a person place or thing.",
                text_ar: "الـ __________ هو اسم لشخص أو مكان أو شيء.",
                options: ["Verb", "Noun", "Pronoun", "Adverb"],
                options_ar: ["الفعل", "الاسم (Noun)", "الضمير", "الظرف"],
                correct: 1,
                explanation: "A noun is a word used to identify any of a class of people, places, or things.",
                explanation_ar: "الاسم هو كلمة تستخدم لتحديد أي فئة من الناس أو الأماكن أو الأشياء."
            },
            {
                id: "comm-19",
                text: "According to hoben communication is the ________ interchange of thought or idea.",
                text_ar: "وفقاً لهوبن (Hoben)، الاتصال هو التبادل ________ للأفكار.",
                options: ["Visual", "Audio", "Verbal", "Written"],
                options_ar: ["المرئي", "الصوتي", "اللفظي", "الكتابي"],
                correct: 2,
                explanation: "Hoben's definition emphasizes the verbal exchange of ideas.",
                explanation_ar: "تعريف هوبن يؤكد على التبادل اللفظي للأفكار."
            },
            {
                id: "comm-20",
                text: "The person who transmits the message is called the _________ .",
                text_ar: "الشخص الذي ينقل الرسالة يسمى _________ .",
                options: ["Sender", "Gives", "Taker", "Receiver"],
                options_ar: ["المرسل", "المعطي", "الآخذ", "المستقبل"],
                correct: 0,
                explanation: "The sender is the source of the communication process.",
                explanation_ar: "المرسل هو مصدر عملية الاتصال."
            },
            {
                id: "comm-21",
                text: "Proper nouns always begin with ________letters.",
                text_ar: "الأسماء العلم (Proper nouns) تبدأ دائماً بأحرف ________.",
                options: ["Running", "Capital", "Small", "Numerical"],
                options_ar: ["صغيرة", "كبيرة (Capital)", "عادية", "رقمية"],
                correct: 1,
                explanation: "Proper nouns (names of specific people/places) must always be capitalized.",
                explanation_ar: "الأسماء العلم (أسماء الأشخاص/الأماكن المحددة) يجب أن تبدأ دائماً بحرف كبير."
            },
            {
                id: "comm-22",
                text: "______________nouns require capitalization only if they start the sentence or are part of a title.",
                text_ar: "الأسماء ____________ تتطلب حرفاً كبيراً فقط إذا كانت في بداية الجملة أو جزءاً من عنوان.",
                options: ["Common", "Proper", "Abstract", "Collective"],
                options_ar: ["العامة (Common)", "العلم", "المجردة", "الجماعية"],
                correct: 0,
                explanation: "Common nouns designate general classes and are not capitalized unless necessary.",
                explanation_ar: "الأسماء العامة تشير إلى فئات عامة ولا تبدأ بحرف كبير إلا للضرورة."
            },
            {
                id: "comm-23",
                text: "Once the message is encoded in a desired format it is transferred through a medium called _________",
                text_ar: "بمجرد ترميز الرسالة بالتنسيق المطلوب، يتم نقلها عبر وسيط يسمى _________",
                options: ["Channel", "Medium", "Media", "Way"],
                options_ar: ["قناة (Channel)", "وسيط", "إعلام", "طريق"],
                correct: 0,
                explanation: "The channel is the physical or technical medium of transmission.",
                explanation_ar: "القناة هي الوسيط المادي أو التقني للإرسال."
            },
            {
                id: "comm-24",
                text: "The nouns which cannot be felt, seen or heard are called ___________.",
                text_ar: "الأسماء التي لا يمكن لمسها أو رؤيتها أو سماعها تسمى الأسماء ___________.",
                options: ["Common", "Proper", "Abstract", "Collective"],
                options_ar: ["العامة", "العلم", "المجردة (Abstract)", "الجماعية"],
                correct: 2,
                explanation: "Abstract nouns represent ideas, qualities, or states rather than physical objects.",
                explanation_ar: "الأسماء المجردة تمثل الأفكار أو الصفات أو الحالات بدلاً من الأشياء المادية."
            },
            {
                id: "comm-25",
                text: "The information which is transferred to the receiver has to be interpreted this process is called ___________.",
                text_ar: "المعلومات التي يتم نقلها إلى المستقبل يجب تفسيرها، تسمى هذه العملية ___________.",
                options: ["Encoding", "Decoding", "Opening", "Closing"],
                options_ar: ["الترميز", "فك التشفير (Decoding)", "الافتتاح", "الإغلاق"],
                correct: 1,
                explanation: "Decoding is the receiver's process of interpreting the message.",
                explanation_ar: "فك التشفير هو عملية المستقبل لتفسير الرسالة."
            },
            {
                id: "comm-26",
                text: "All communication events have a ___________.",
                text_ar: "جميع أحداث الاتصال لها ___________.",
                options: ["Resource", "Source", "Start", "End"],
                options_ar: ["مورد", "مصدر (Source)", "بداية", "نهاية"],
                correct: 1,
                explanation: "Every communication must originate from a source.",
                explanation_ar: "يجب أن ينشأ كل اتصال من مصدر."
            },
            {
                id: "comm-27",
                text: "Personifications of strength and violence are considered as __________ gender.",
                text_ar: "تجسيد القوة والعنف يعتبر من الجنس _________ .",
                options: ["Masculine", "Feminine", "Common", "Neuter"],
                options_ar: ["المذكر (Masculine)", "المؤنث", "المشترك", "المحايد"],
                correct: 0,
                explanation: "In traditional English literary gender, strength and violence are often personified as masculine.",
                explanation_ar: "في الجنس الأدبي التقليدي للغة الإنجليزية، غالباً ما يتم تجسيد القوة والعنف كمذكر."
            },
            {
                id: "comm-28",
                text: "The message may be misinterpreted because of _________.",
                text_ar: "قد يتم تفسير الرسالة بشكل خاطئ بسبب _________.",
                options: ["Barriers", "Distortions", "Distractions", "Noise"],
                options_ar: ["العوائق (Barriers)", "التشويهات", "الإلهاءات", "الضوضاء"],
                correct: 0,
                explanation: "Barriers are obstacles that prevent clear communication.",
                explanation_ar: "العوائق هي عقبات تمنع التواصل الواضح."
            },
            {
                id: "comm-29",
                text: "The environment in which the transmitter or receiver are should be __________",
                text_ar: "البيئة التي يتواجد فيها المرسل أو المستقبل يجب أن تكون __________",
                options: ["Complex", "Competent", "Complete", "Compatible"],
                options_ar: ["معقدة", "كفوءة", "كاملة", "متوافقة (Compatible)"],
                correct: 3,
                explanation: "For effective communication, the environment must be compatible for both parties.",
                explanation_ar: "للتواصل الفعال، يجب أن تكون البيئة متوافقة لكلا الطرفين."
            },
            {
                id: "comm-30",
                text: "A noun that denotes neither a male or a female is ___________ gender.",
                text_ar: "الاسم الذي لا يشير لا للمذكر ولا للمؤنث هو من الجنس ___________ .",
                options: ["Masculine", "Feminine", "Common", "Neuter"],
                options_ar: ["المذكر", "المؤنث", "المشترك", "المحايد (Neuter)"],
                correct: 3,
                explanation: "Neuter gender refers to inanimate objects or concepts.",
                explanation_ar: "الجنس المحايد يشير إلى الأشياء الجامدة أو المفاهيم."
            },
            {
                id: "comm-31",
                text: "Countries when referred to by names are also considered ____________.",
                text_ar: "الدول عندما يشار إليها بأسمائها تعتبر أيضاً ____________ .",
                options: ["Masculine", "Feminine", "Common", "Neuter"],
                options_ar: ["مذكر", "مؤنث (Feminine)", "مشترك", "محايد"],
                correct: 1,
                explanation: "In poetic or traditional usage, countries are often gendered as feminine.",
                explanation_ar: "في الاستخدام الشعري أو التقليدي، غالباً ما يتم تأنيث الدول."
            },
            {
                id: "comm-32",
                text: "The Christian sign of the ____ is a gesture pertaining to religion and spirituality.",
                text_ar: "علامة ____ المسيحية هي إيماءة تتعلق بالدين والروحانية.",
                options: ["Plus", "Minus", "Division", "Cross"],
                options_ar: ["زائد", "ناقص", "قسمة", "الصليب (Cross)"],
                correct: 3,
                explanation: "The cross is a central nonverbal religious symbol in Christianity.",
                explanation_ar: "الصليب هو رمز ديني غير لفظي مركزي في المسيحية."
            },
            {
                id: "comm-33",
                text: "In oral communication there is a possibility of immediate __________.",
                text_ar: "في الاتصال الشفهي هناك احتمالية للـ __________ الفورية.",
                options: ["Reaction", "Response", "Reflection", "Reset"],
                options_ar: ["رد الفعل", "الاستجابة (Response)", "التفكير", "إعادة التعيين"],
                correct: 1,
                explanation: "Oral communication allows for instant feedback/response.",
                explanation_ar: "يسمح الاتصال الشفهي بالتغذية الراجعة أو الاستجابة الفورية."
            },
            {
                id: "comm-34",
                text: "In oral communication the speaker can observe the listener's _________ to what is being elated.",
                text_ar: "في الاتصال الشفهي يمكن للمتحدث ملاحظة _________ المستمع لما يقال.",
                options: ["Reaction", "Response", "Rejection", "Reset"],
                options_ar: ["رد الفعل (Reaction)", "الاستجابة", "الرفض", "إعادة التعيين"],
                correct: 0,
                explanation: "Visual cues in oral comm allow immediate observation of reactions.",
                explanation_ar: "تسمح الإشارات المرئية في الاتصال الشفهي بالملاحظة الفورية لردود الفعل."
            },
            {
                id: "comm-35",
                text: "While talking to friends you do not pay attention to the skills of _____ Communication.",
                text_ar: "عند التحدث مع الأصدقاء، لا تهتم بمهارات الاتصال _________ .",
                options: ["Written", "Oral", "audio", "visual"],
                options_ar: ["الكتابي (Written)", "الشفهي", "الصوتي", "المرئي"],
                correct: 0,
                explanation: "Informal conversations often ignore the formal conventions of written communication.",
                explanation_ar: "المحادثات غير الرسمية غالباً ما تتجاهل الاتفاقيات الرسمية للاتصال الكتابي."
            },
            {
                id: "comm-36",
                text: "In oral presentation outside your organisation you must first give the audience a ______ of your organization.",
                text_ar: "في العرض الشفهي خارج مؤسستك، يجب عليك أولاً إعطاء الجمهور ______ عن مؤسستك.",
                options: ["Flash back", "Background", "Front view", "Forward view"],
                options_ar: ["نظرة سريعة للخلف", "خلفية (Background)", "عرض أمامي", "عرض مستقبلي"],
                correct: 1,
                explanation: "Setting the context with a background is essential for external audiences.",
                explanation_ar: "ضبط السياق بخلفية أمر ضروري للجمهور الخارجي."
            },
            {
                id: "comm-37",
                text: "The __________ are used to present using overhead projectors.",
                text_ar: "تستخدم الـ __________ للعرض باستخدام أجهزة العرض العلوية (OHP).",
                options: ["Acetate film transparent sheet", "Paper sheets", "Polythene sheet", "Butter paper"],
                options_ar: ["شرائح فيلم الأسيتات الشفافة", "أوراق عادية", "ورق بوليثين", "ورق زبدة"],
                correct: 0,
                explanation: "Acetate sheets (transparencies) are the standard medium for OHP.",
                explanation_ar: "شرائح الأسيتات (الشفافيات) هي الوسيلة القياسية لأجهزة OHP."
            },
            {
                id: "comm-38",
                text: "Any word that adds more meaning to the noun is called an __________.",
                text_ar: "أي كلمة تضيف معنى أكثر للاسم تسمى __________. ",
                options: ["Adverb", "Verb", "Adjective", "Noun"],
                options_ar: ["ظرف", "فعل", "صفة (Adjective)", "اسم"],
                correct: 2,
                explanation: "Adjectives modify and define nouns.",
                explanation_ar: "الصفات تصف وتعرف الأسماء."
            },
            {
                id: "comm-39",
                text: "A__________indicates the action done by the subject.",
                text_ar: "الـ _________ يشير إلى الفعل الذي قام به الفاعل (حسب المصدر المعتمد).",
                options: ["Verb", "Adverb", "Noun", "Pronoun"],
                options_ar: ["الفعل", "الظرف (Adverb)", "الاسم", "الضمير"],
                correct: 1,
                explanation: "Based on the source: An adverb indicates the action done by the subject. (Note: In general grammar, verbs indicate action, but this matches the local exam key).",
                explanation_ar: "حسب المصدر: الظرف (Adverb) هو ما يشير إلى الفعل الذي قام به الفاعل (ملاحظة: برمجياً نتبع مفتاح الإجابة الخاص بالاختبار)."
            },
            {
                id: "comm-40",
                text: "A ___________ is a word which connects words phrases , clauses or sentences.",
                text_ar: "الـ ___________ هو كلمة تربط الكلمات أو الجمل أو العبارات.",
                options: ["Preposition", "Conjunction", "Interjection", "Verb"],
                options_ar: ["حرف جر", "حرف عطف (Conjunction)", "حرف تعجب", "فعل"],
                correct: 1,
                explanation: "Conjunctions (like 'and', 'but') serve as connectors.",
                explanation_ar: "حروف العطف (مثل 'و'، 'لكن') تعمل كروابط."
            },
            {
                id: "comm-41",
                text: "During presentation using an OHP. One can read information line by line using an opaque sheet to cover the transparency with a view to minimize distraction. This technology is called __________.",
                text_ar: "أثناء العرض باستخدام OHP، يمكن للمرء قراءة المعلومات سطراً بسطر باستخدام ورقة معتمة لتغطية الشفافية بهدف تقليل الإلهاء. تسمى هذه التقنية __________.",
                options: ["Positive disclosure", "Zero disclosure", "Negative disclosure", "Progressive disclosure"],
                options_ar: ["إفصاح إيجابي", "إفصاح صفري", "إفصاح سلبي", "إفصاح تدريجي (Progressive disclosure)"],
                correct: 3,
                explanation: "Progressive disclosure helps the audience focus on one point at a time.",
                explanation_ar: "يساعد الإفصاح التدريجي الجمهور على التركيز على نقطة واحدة في كل مرة."
            },
            {
                id: "comm-42",
                text: "It is important to consider proper _____ room where you are giving your presentation.",
                text_ar: "من المهم مراعاة الـ _____ المناسبة للغرفة التي تقدم فيها عرضك.",
                options: ["Darkness", "Lighting", "Lightning", "Ventilation"],
                options_ar: ["الظلام", "الإضاءة (Lighting)", "البرق", "التهوية"],
                correct: 1,
                explanation: "Good lighting is crucial for visibility and engagement.",
                explanation_ar: "الإضاءة الجيدة ضرورية للرؤية والتفاعل."
            },
            {
                id: "comm-43",
                text: "_________ Listening means learning through conversation",
                text_ar: "الاستماع _________ يعني التعلم من خلال المحادثة.",
                options: ["Evaluative", "Appreciative", "Dialogic", "Empathetic"],
                options_ar: ["التقييمي", "التقديري", "الحواري (Dialogic)", "التعاطفي"],
                correct: 2,
                explanation: "Dialogic listening involves active learning and exchange during dialogue.",
                explanation_ar: "الاستماع الحواري يتضمن التعلم النشط والتبادل أثناء الحوار."
            },
            {
                id: "comm-44",
                text: "In _____ Listening the difference between the sounds is identified",
                text_ar: "في الاستماع _____ يتم تحديد الفرق بين الأصوات.",
                options: ["Discriminative", "Comprehension", "Dialogic", "Empathetic"],
                options_ar: ["التمييزي (Discriminative)", "الاستيعابي", "الحواري", "التعاطفي"],
                correct: 0,
                explanation: "Discriminative listening is the most basic stage, distinguishing different sounds.",
                explanation_ar: "الاستماع التمييزي هو المرحلة الأساسية، حيث يتم تمييز الأصوات المختلفة."
            },
            {
                id: "comm-45",
                text: "The ___________is an exclamation mark.",
                text_ar: "الـ ___________ هي علامة التعجب.",
                options: ["?", ".", ",", "!"],
                options_ar: ["?", ".", ",", "!"],
                correct: 3,
                explanation: "The exclamation point (!) indicates strong feeling or volume.",
                explanation_ar: "علامة التعجب (!) تشير إلى شعور قوي أو صوت عالٍ."
            },
            {
                id: "comm-46",
                text: "Evaluative listening is also called ________.",
                text_ar: "الاستماع التقييمي يسمى أيضاً ________.",
                options: ["Therapeutic", "Critical", "Dialogic", "Empathetic"],
                options_ar: ["العلاجي", "النقدي (Critical)", "الحواري", "التعاطفي"],
                correct: 1,
                explanation: "Critical or evaluative listening involves judging the content or message.",
                explanation_ar: "الاستماع النقدي أو التقييمي يتضمن الحكم على المحتوى أو الرسالة."
            },
            {
                id: "comm-47",
                text: "The___________is the action or description that occurs in the sentence",
                text_ar: "الـ ___________ هو الحدث أو الوصف الذي يحدث في الجملة.",
                options: ["Predicate", "Subject", "Object", "Complement"],
                options_ar: ["الخبر (Predicate)", "المبتدأ/الفاعل", "المفعول به", "التكملة"],
                correct: 0,
                explanation: "The predicate provides information about the subject (what it does/is).",
                explanation_ar: "الخبر يقدم معلومات عن الفاعل (ماذا يفعل أو ما هو)."
            },
            {
                id: "comm-48",
                text: "The _____________speech is also called as reported speech.",
                text_ar: "الكلام _____________ يسمى أيضاً الكلام المنقول (reported speech).",
                options: ["Direct", "Indirect", "Indefinite", "Definite"],
                options_ar: ["المباشر", "غير المباشر (Indirect)", "غير المحدد", "المحدد"],
                correct: 1,
                explanation: "Reported speech is the indirect way of relaying someone's words.",
                explanation_ar: "الكلام المنقول هو الطريقة غير المباشرة لإيصال كلمات شخص ما."
            },
            {
                id: "comm-49",
                text: "Nouns that end in “Y” but have a constant before “Y” form their plural by dropping “Y” and adding _________.",
                text_ar: "الأسماء التي تنتهي بـ 'Y' ويسبقها حرف ساكن، تشكل الجمع عن طريق حذف 'Y' وإضافة _________.",
                options: ["ves", "es", "s", "ies"],
                options_ar: ["ves", "es", "s", "ies"],
                correct: 3,
                explanation: "Example: City -> Cities, Baby -> Babies.",
                explanation_ar: "مثال: City تصبح Cities، و Baby تصبح Babies."
            },
            {
                id: "comm-50",
                text: "'A' and 'an' are the ___________--articles",
                text_ar: "'A' و 'an' هما أدوات ___________ .",
                options: ["Definite", "Indefinite", "Particular", "Specified"],
                options_ar: ["التعريف", "التنكير (Indefinite)", "الخاصة", "المحددة"],
                correct: 1,
                explanation: "'A/An' are used for non-specific nouns (indefinite articles).",
                explanation_ar: "'A/An' تستخدم للأسماء غير المحددة (أدوات التنكير)."
            },
            {
                id: "comm-51",
                text: "Another thing that you have to avoid is adding to OHP’s with a ________ during a talk.",
                text_ar: "شيء آخر يجب تجنبه هو الإضافة إلى شرائح OHP باستخدام ________ أثناء الحديث.",
                options: ["Chalk", "Pencil", "Pen", "Marker"],
                options_ar: ["طبشور", "قلم رصاص", "قلم حبر (Pen)", "قلم تخطيط"],
                correct: 2,
                explanation: "Using a pen during the talk on the transparency is generally advised against compared to prepared slides, or specific instructions might favor 'Pen' as the answer in certain keys.",
                explanation_ar: "استخدام القلم أثناء الحديث على الشفافية هو ما يجب تجنبه وفقاً للمفتاح المعتمد."
            },
            {
                id: "comm-52",
                text: "A positive statement (in a question tag) takes a ___________tag.",
                text_ar: "الجملة المثبتة (في السؤال المذيل) تأخذ وسم ___________ .",
                options: ["Negative", "Positive", "Question", "Answer"],
                options_ar: ["منفياً (Negative)", "مثبتاً", "سؤالاً", "جواباً"],
                correct: 0,
                explanation: "Question tags follow the opposite polarity of the main statement (Positive -> Negative).",
                explanation_ar: "الأسئلة المذيلة تتبع قطبية عكسية للجملة الرئيسية (مثبت -> منفي)."
            },
            {
                id: "comm-53",
                text: "Hearing is only an important component of ________.",
                text_ar: "السمع هو مجرد مكون مهم للـ ________ .",
                options: ["Hearing", "Listening", "Talking", "Speaking"],
                options_ar: ["السمع", "الاستماع (Listening)", "التحدث", "الكلام"],
                correct: 1,
                explanation: "Hearing is the physical act, while listening is the psychological process involving hearing.",
                explanation_ar: "السمع هو العمل البدني، بينما الاستماع هو العملية النفسية التي تشمل السمع."
            },
            {
                id: "comm-54",
                text: "In _____ Listening the main intention is to seek certain information which will be appreciated.",
                text_ar: "في الاستماع _____ يكون القصد الرئيسي هو البحث عن معلومات معينة سيتم تقديرها.",
                options: ["Empathetic", "Appreciative", "Evaluative", "Dialogic"],
                options_ar: ["التعاطفي", "التقديري (Appreciative)", "التقييمي", "الحواري"],
                correct: 1,
                explanation: "Appreciative listening is used for enjoyment or specialized appreciation.",
                explanation_ar: "الاستماع التقديري يستخدم للاستمتاع أو تقدير متخصص."
            },
            {
                id: "comm-55",
                text: "_________ Is an aggressive behavior and will most likely bring a negative response from the speaker.",
                text_ar: "الـ _________ هو سلوك عدواني وسيؤدي على الأرجح إلى رد فعل سبي من المتحدث.",
                options: ["Interrupting", "Yawning", "Slapping", "Dancing"],
                options_ar: ["المقاطعة (Interrupting)", "التثاؤب", "الصفع", "الرقص"],
                correct: 0,
                explanation: "Interrupting disrupts the flow and is perceived as disrespectful/aggressive.",
                explanation_ar: "المقاطعة تعيق التدفق وتعتبر غير محترمة أو عدوانية."
            },
            {
                id: "comm-56",
                text: "It is important to choose the right environment because it will help the listener focus & avoid:",
                text_ar: "من المهم اختيار البيئة المناسبة لأنها ستساعد المستمع على التركيز وتجنب:",
                options: ["Attrition", "Distractions", "Disturbances", "Noise"],
                options_ar: ["التآكل", "الإلهاءات (Distractions)", "الاضطرابات", "الضوضاء"],
                correct: 1,
                explanation: "A good environment minimizes mental and physical distractions.",
                explanation_ar: "البيئة الجيدة تقلل من المشتتات الذهنية والمادية."
            },
            {
                id: "comm-57",
                text: "Semantic markers are the links between two _________.",
                text_ar: "العلامات الدلالية (Semantic markers) هي الروابط بين _________ .",
                options: ["Words", "Phrases", "Clauses", "Sentences"],
                options_ar: ["كلمات", "عبارات", "جمل فرعية", "جمل (Sentences)"],
                correct: 3,
                explanation: "Semantic markers link sentences together to maintain logical flow.",
                explanation_ar: "العلامات الدلالية تربط الجمل معاً للحفاظ على التدفق المنطقي."
            },
            {
                id: "comm-58",
                text: "__________ Customer not only returns to your organization for a second time but also tells about his satisfaction others.",
                text_ar: "العميل الـ _________ لا يعود لمؤسستك مرة ثانية فحسب، بل يخبر الآخرين عن رضاه.",
                options: ["Unsatisfied", "Impatient", "Satisfied", "Patient"],
                options_ar: ["غير الراضي", "غير الصبور", "الراضي (Satisfied)", "الصبور"],
                correct: 2,
                explanation: "Customer satisfaction is key to word-of-mouth marketing and retention.",
                explanation_ar: "رضا العملاء هو المفتاح للتسويق عبر التوصية الشفهية والاحتفاظ بهم."
            },
            {
                id: "comm-59",
                text: "Always ____ the customer for calling.",
                text_ar: "دائماً ____ العميل على الاتصال.",
                options: ["Slap", "Reprimand", "Thank", "Never thank"],
                options_ar: ["اصفع", "وبخ", "اشكر (Thank)", "لا تشكر أبداً"],
                correct: 2,
                explanation: "Courtesy requires thanking customers for their engagement.",
                explanation_ar: "اللباقة تقتضي شكر العملاء على تواصلهم."
            },
            {
                id: "comm-60",
                text: "The technique of ____ should be mastered to handle displeased customers.",
                text_ar: "يجب إتقان تقنية ____ للتعامل مع العملاء غير الراضين.",
                options: ["BLAST", "BLSAT", "BALST", "None"],
                options_ar: ["BLAST", "BLSAT", "BALST", "لا شيء"],
                correct: 0,
                explanation: "BLAST (Believe, Listen, Apologize, Satisfy, Thank) is a standard service recovery model.",
                explanation_ar: "تقنية BLAST (صدق، استمع، اعتذر، ارضِ، اشكر) هي نموذج قياسي لمعالجة الشكاوى."
            },
            {
                id: "comm-61",
                text: "In __________ verb the action passes from the subject to an object.",
                text_ar: "في الفعل __________ ينتقل الحدث من الفاعل إلى المفعول به.",
                options: ["Transitive", "Intransitive", "Modal", "Main"],
                options_ar: ["المتعدي (Transitive)", "اللازم", "الناقص", "الرئيسي"],
                correct: 0,
                explanation: "Transitive verbs require an object to complete their meaning.",
                explanation_ar: "الأفعال المتعدية تحتاج إلى مفعول به لإتمام معناها."
            },
            {
                id: "comm-62",
                text: "_________ refers to the time of action.",
                text_ar: "الـ _________ يشير إلى زمن وقوع الحدث.",
                options: ["Tense", "Transitive", "Intransitive", "Main verb"],
                options_ar: ["الزمن (Tense)", "المتعدي", "اللازم", "الفعل الرئيسي"],
                correct: 0,
                explanation: "Tense in grammar indicates the time at which an action takes place.",
                explanation_ar: "الزمن في القواعد يشير إلى الوقت الذي يقع فيه الحدث."
            },
            {
                id: "comm-63",
                text: "Reading comprehension means understanding a ________ text.",
                text_ar: "استيعاب المقروء يعني فهم النص ________ .",
                options: ["Oral", "Written", "Usual", "Audio"],
                options_ar: ["الشفهي", "المكتوب (Written)", "العادي", "الصوتي"],
                correct: 1,
                explanation: "Reading comprehension specifically involves interpreting written information.",
                explanation_ar: "استيعاب المقروء يتضمن خصيصاً تفسير المعلومات المكتوبة."
            },
            {
                id: "comm-64",
                text: "Reading is a __________________ process.",
                text_ar: "القراءة هي عملية __________________ .",
                options: ["Encoding", "Listening", "Decoding", "Talking"],
                options_ar: ["ترميز (Encoding)", "استماع", "فك تشفير (Decoding)", "تحدث"],
                correct: 2,
                explanation: "Reading involves decoding written symbols into meaning.",
                explanation_ar: "القراءة تتضمن فك تشفير الرموز المكتوبة إلى معنى."
            },
            {
                id: "comm-65",
                text: "While making a slide, the number of words should be limited to a maximum of _______ per slide.",
                text_ar: "عند إنشاء شريحة، يجب ألا يتجاوز عدد الكلمات حداً أقصى قدره _______ لكل شريحة.",
                options: ["8", "9", "10", "11"],
                options_ar: ["8", "9", "10", "11"],
                correct: 2,
                explanation: "A general rule for slides is to keep text minimal, often cited as 10 words or less for clarity.",
                explanation_ar: "قاعدة عامة للشرائح هي تقليل النص قدر الإمكان، وغالباً ما يُنصح بـ 10 كلمات أو أقل للوضوح."
            },
            {
                id: "comm-66",
                text: "A group of related words that contain both a subject and predicate and that functions as part of a sentence is a:",
                text_ar: "مجموعة من الكلمات المرتبطة التي تحتوي على فاعل وخبر وتعمل كجزء من جملة تسمى:",
                options: ["Sentence", "Phrase", "Clause", "Compound"],
                options_ar: ["جملة", "شبه جملة", "بند/جملة صغرى (Clause)", "مركب"],
                correct: 2,
                explanation: "A clause is a unit of grammar that contains at least a subject and a verb.",
                explanation_ar: "الـ Clause هي وحدة قواعد تحتوي على الأقل على فاعل وفعل."
            },
            {
                id: "comm-67",
                text: "When we read shorter texts for specific detailed information slowly and with concentration, it is called ________ reading.",
                text_ar: "عندما نقرأ نصوصاً قصيرة للحصول على معلومات مفصلة ومحددة ببطء وتركيز، يسمى ذلك قراءة ________ .",
                options: ["Intensive", "Extensive", "Detailed", "Short"],
                options_ar: ["مكثفة (Intensive)", "واسعة", "مفصلة", "قصيرة"],
                correct: 0,
                explanation: "Intensive reading involves close, careful reading for detailed understanding.",
                explanation_ar: "القراءة المكثفة تتضمن قراءة دقيقة وبعناية للفهم التفصيلي."
            },
            {
                id: "comm-68",
                text: "Most of our day-to-day reading is done _________.",
                text_ar: "معظم قراءتنا اليومية تتم _________ .",
                options: ["Loudly", "Extensively", "Intensively", "Silently"],
                options_ar: ["بصوت عالٍ", "بشكل موسع", "بشكل مكثف", "صمتاً (Silently)"],
                correct: 3,
                explanation: "Most adults read silently in their day-to-day lives.",
                explanation_ar: "معظم البالغين يقرؤون بصمت في حياتهم اليومية."
            },
            {
                id: "comm-69",
                text: "________ is to relate the content to previous and future learning of the subject.",
                text_ar: "الـ ________ هو ربط المحتوى بالتعلم السابق والمستقبلي للمادة.",
                options: ["Review", "Reading", "Recalling", "All"],
                options_ar: ["المراجعة", "القراءة", "الاستدعاء (Recalling)", "الكل"],
                correct: 2,
                explanation: "Recalling involves bringing back information to relate it to other learning parts.",
                explanation_ar: "الاستدعاء يتضمن استرجاع المعلومات لربطها بأجزاء التعلم الأخرى."
            },
            {
                id: "comm-70",
                text: "__________ is checking whether we have followed the earlier stages promptly and efficiently.",
                text_ar: "الـ __________ هو التحقق مما إذا كنا قد اتبعنا المراحل السابقة بسرعة وكفاءة.",
                options: ["Review", "Reading", "Recalling", "All"],
                options_ar: ["المراجعة (Review)", "القراءة", "الاستدعاء", "الكل"],
                correct: 0,
                explanation: "In study strategies like SQ3R, the final step is reviewing to verify understanding.",
                explanation_ar: "في استراتيجيات الدراسة مثل SQ3R، الخطوة الأخيرة هي المراجعة للتحقق من الفهم."
            },
            {
                id: "comm-71",
                text: "Different types of letters used for printing are called _________.",
                text_ar: "أنواع الحروف المختلفة المستخدمة في الطباعة تسمى _________ .",
                options: ["Fonts", "Fronts", "Both", "None"],
                options_ar: ["خطوط (Fonts)", "واجهات", "كلاهما", "لا شيء"],
                correct: 0,
                explanation: "Fonts refer to the specific style and design of text characters.",
                explanation_ar: "الخطوط تشير إلى النمط والتصميم المحدد لحروف النص."
            },
            {
                id: "comm-72",
                text: "_________ is a technique that involves changing a text matter so that it is similar to the main source.",
                text_ar: "_________ هي تقنية تتطلب تغيير مادة النص بحيث تكون مشابهة للمصدر الرئيسي (بأسلوبك الخاص).",
                options: ["Note-taking", "Paraphrasing", "Summarizing", "Precis writing"],
                options_ar: ["تدوين الملاحظات", "إعادة الصياغة (Paraphrasing)", "التلخيص", "كتابة الموجز"],
                correct: 1,
                explanation: "Paraphrasing is rewriting someone else's ideas in your own words.",
                explanation_ar: "إعادة الصياغة هي إعادة كتابة أفكار شخص آخر بكلماتك الخاصة."
            },
            {
                id: "comm-73",
                text: "Effective paraphrasing avoids the risk of _________.",
                text_ar: "إعادة الصياغة الفعالة تتجنب خطر _________ .",
                options: ["Changing", "Noting", "Copying", "Plagiarism"],
                options_ar: ["التغيير", "التدوين", "النسخ", "السرقة الأدبية (Plagiarism)"],
                correct: 3,
                explanation: "Properly paraphrasing and citing sources prevents plagiarism.",
                explanation_ar: "إعادة الصياغة الصحيحة وذكر المصادر تمنع السرقة الأدبية."
            },
            {
                id: "comm-74",
                text: "________ means linking words and phrases together so that the whole text is clear and readable.",
                text_ar: "________ تعني ربط الكلمات والعبارات معاً بحيث يكون النص كاملاً واضحاً وسلساً.",
                options: ["Cohesion", "Joining", "Conjunctions", "Junctions"],
                options_ar: ["التماسك (Cohesion)", "الانضمام", "روابط العطف", "التقاطعات"],
                correct: 0,
                explanation: "Cohesion refers to the linguistic elements that link parts of a text.",
                explanation_ar: "التماسك يشير إلى العناصر اللغوية التي تربط أجزاء النص."
            },
            {
                id: "comm-75",
                text: "In the structure of a business letter, what comes first?",
                text_ar: "في هيكل الرسالة التجارية، ماذا يأتي أولاً؟",
                options: ["Reference", "Date", "Salutation", "Heading"],
                options_ar: ["المرجع", "التاريخ", "التحية", "العنوان الرأسي (Heading)"],
                correct: 3,
                explanation: "The heading (letterhead or sender's address) is typically the first element.",
                explanation_ar: "الترويسة أو عنوان المرسل هو المكون الأول عادةً."
            },
            {
                id: "comm-76",
                text: "In the writing of an apology letter, concentrate on:",
                text_ar: "عند كتابة رسالة اعتذار، يجب التركيز على:",
                options: ["Problem", "Compensation", "Rectification of problem", "Words"],
                options_ar: ["المشكلة", "التعويض", "تصحيح المشكلة (Rectification)", "الكلمات"],
                correct: 2,
                explanation: "A good apology focuses on how the situation will be corrected.",
                explanation_ar: "الاعتذار الجيد يركز على كيفية تصحيح الموقف."
            },
            {
                id: "comm-77",
                text: "The ________ is the vital part of the letter which is as good as wishing the person.",
                text_ar: "الـ ________ هو جزء حيوي من الرسالة ويعتبر بمثابة تمني الخير للشخص.",
                options: ["Salutation", "Enclosure", "Subject", "Reference"],
                options_ar: ["التحية (Salutation)", "المرفقات", "الموضوع", "المرجع"],
                correct: 0,
                explanation: "The salutation is the formal greeting at the beginning of a letter.",
                explanation_ar: "التحية هي الترحيب الرسمي في بداية الرسالة."
            },
            {
                id: "comm-78",
                text: "People cannot interact with each other without ________.",
                text_ar: "لا يمكن للناس التفاعل مع بعضهم البعض بدون ________ .",
                options: ["Communication", "Transport", "Voice", "Loudspeaker"],
                options_ar: ["الاتصال (Communication)", "النقل", "الصوت", "مكبر الصوت"],
                correct: 0,
                explanation: "Communication is the fundamental basis for all human interaction.",
                explanation_ar: "الاتصال هو الأساس الجوهري لكل التفاعلات البشرية."
            },
            {
                id: "comm-79",
                text: "The language of a report should be ________.",
                text_ar: "يجب أن تكون لغة التقرير ________ .",
                options: ["Formality", "Formal", "Casual", "Loose"],
                options_ar: ["رسمية (اسم)", "رسمية (Formal)", "غير رسمية", "فضفاضة"],
                correct: 1,
                explanation: "Business and technical reports require formal language for professionalism.",
                explanation_ar: "التقارير التجارية والفنية تتطلب لغة رسمية لضمان المهنية."
            },
            {
                id: "comm-80",
                text: "A circular or notice may be issued only by an _____ designated for the purpose.",
                text_ar: "لا يجوز إصدار تعميم أو إشعار إلا من قبل _____ مخصص لهذا الغرض.",
                options: ["Peon", "Clerk", "Typist", "Officer"],
                options_ar: ["مراسل", "كاتب", "عامل طباعة", "مسؤول (Officer)"],
                correct: 3,
                explanation: "Official notices must be signed by authorized officers.",
                explanation_ar: "يجب توقيع الإشعارات الرسمية من قبل المسؤولين المخولين."
            },
            {
                id: "comm-81",
                text: "Which semantic markers are used to indicate the development of ideas or to list them?",
                text_ar: "أي العلامات الدلالية تستخدم للإشارة إلى تطور الأفكار أو سردها؟",
                options: ["Primarily, Secondly, Finally", "Primarily, Secondly, Consequently", "Firstly, Thirdly, Finally", "Primarily, Finally, Consequently"],
                options_ar: ["أولاً، ثانياً، أخيراً", "أولاً، ثانياً، بالتالي", "أولاً، ثالثاً، أخيراً", "أولاً، أخيراً، بالتالي"],
                correct: 0,
                explanation: "Sequential markers like 'Primarily', 'Secondly', and 'Finally' order ideas.",
                explanation_ar: "الروابط التسلسلية مثل 'أولاً' و'ثانياً' و'أخيراً' ترتب الأفكار."
            },
            {
                id: "comm-82",
                text: "Difference in values and perceptions is a ________ barrier; a tendency to judge views is a _________ barrier.",
                text_ar: "الاختلاف في القيم والتصورات هو عائق ________؛ والميل للحكم على الآراء هو عائق _________ .",
                options: ["Channel, Environment", "Semantic, Cultural", "Cultural, Behavioral", "Environmental, Channel"],
                options_ar: ["القناة، البيئة", "دلالي، ثقافي", "ثقافي، سلوكي", "بيئي، القناة"],
                correct: 2,
                explanation: "Values/perceptions are tied to culture, while judging is a behavioral/psychological trait.",
                explanation_ar: "القيم والتصورات مرتبطة بالثقافة، بينما الحكم على الآراء هو سمة سلوكية أو نفسية."
            },
            {
                id: "comm-83",
                text: "Use of foreign language is a ________ barrier; multiple meanings are ________ barriers; lack of coordination is ________ barrier.",
                text_ar: "استخدام لغة أجنبية هو عائق ________؛ تعدد المعاني هو عائق ________؛ نقص التنسيق هو عائق ________ .",
                options: ["Semantic, Cultural, Individual", "Noise, Physical, Individual", "Cultural, Semantic, Organizational", "Channel, Cultural, Semantic"],
                options_ar: ["دلالي، ثقافي، فردي", "ضوضاء، مادي، فردي", "ثقافي، دلالي، تنظيمي", "قناة، ثقافي، دلالي"],
                correct: 2,
                explanation: "Linguistic issues relate to semantics/culture, while coordination is organizational.",
                explanation_ar: "القضايا اللغوية تتعلق بالدلالات أو الثقافة، بينما التنسيق هو أمر تنظيمي."
            },
            {
                id: "comm-84",
                text: "A noun may be defined as the name of a ___________, ___________ or __________.",
                text_ar: "يمكن تعريف الاسم بأنه اسم لـ ___________، ___________ أو __________ .",
                options: ["Building, City, Town", "Person, Place, Thing", "Fruit, City, Cat", "Animal, City, Fruit"],
                options_ar: ["مبنى، مدينة، بلدة", "شخص، مكان، شيء", "فاكهة، مدينة، قطة", "حيوان، مدينة، فاكهة"],
                correct: 1,
                explanation: "The standard definition of a noun covers people, places, and objects.",
                explanation_ar: "التعريف القياسي للاسم يشمل الأشخاص والأماكن والأشياء."
            },
            {
                id: "comm-85",
                text: "Right environment helps focus and avoid __________; being too __________ involved makes you hear what you want.",
                text_ar: "البيئة المناسبة تساعد على التركيز وتجنب __________؛ الانخراط _________ الزائد يجعلك تسمع ما تريد.",
                options: ["Attractions, Emotionally", "Distractions, Physically", "Distractions, Emotionally", "Attractions, Physically"],
                options_ar: ["عناصر الجذب، عاطفياً", "المشتتات، جسدياً", "المشتتات، عاطفياً", "عناصر الجذب، جسدياً"],
                correct: 2,
                explanation: "Good environment stops distractions; emotional bias affects objective listening.",
                explanation_ar: "البيئة الجيدة تمنع المشتتات؛ والانحياز العاطفي يؤثر على الاستماع الموضوعي."
            },
            {
                id: "comm-86",
                text: "First defense with a difficult customer is _________; a dissatisfied customer needs __________ hearing.",
                text_ar: "الدفاع الأول مع العميل الصعب هو _________؛ والعميل غير الراضي يحتاج إلى استماع __________ .",
                options: ["Anger, Impatient", "Listening, Patient", "Reading, Doctor", "Patient, Listening"],
                options_ar: ["الغضب، غير صبور", "الاستماع، صبور", "القراءة، طبيب", "الصبر، الاستماع"],
                correct: 1,
                explanation: "Active, patient listening de-escalates conflict with unhappy customers.",
                explanation_ar: "الاستماع النشط والصبور يخفف من حدة النزاع مع العملاء غير الراضين."
            },
            {
                id: "comm-87",
                text: "Articles in English are classified as ________ and ________.",
                text_ar: "أدوات التعريف والتنكير في الإنجليزية تصنف إلى ________ و ________ .",
                options: ["Specific, Concrete", "Concrete, Definite", "Definite, Indefinite", "Indefinite, Specific"],
                options_ar: ["محددة، ملموسة", "ملموسة، معرفة", "معرفة، نكرة", "نكرة، محددة"],
                correct: 2,
                explanation: "'The' is definite, while 'A' and 'An' are indefinite.",
                explanation_ar: "'The' هي أداة تعريف، بينما 'A' و 'An' أدوات تنكير."
            },
            {
                id: "comm-88",
                text: "Which of these is required as a skill while reading?",
                text_ar: "أي من هذه المهارات مطلوبة أثناء القراءة؟",
                options: ["Ability to interpret", "Knowledge", "Reason for reading", "All of the Above"],
                options_ar: ["القدرة على التفسير", "المعرفة", "سبب القراءة", "كل ما سبق"],
                correct: 3,
                explanation: "Effective reading requires interpretation, context, and purpose.",
                explanation_ar: "القراءة الفعالة تتطلب التفسير والسياق والهدف."
            },
            {
                id: "comm-89",
                text: "The plural of 'hero' is:",
                text_ar: "جمع كلمة 'hero' هو:",
                options: ["Heros", "Heroes", "Actor", "None"],
                options_ar: ["Heros", "Heroes", "Actor", "لا شيء"],
                correct: 1,
                explanation: "Words ending in 'o' usually take 'es' for plural (e.g., heroes, potatoes).",
                explanation_ar: "الكلمات التي تنتهي بـ 'o' غالباً ما تأخذ 'es' في الجمع."
            },
            {
                id: "comm-90",
                text: "1. ________ is used before 'university' 2. ________ is used before 'hour'.",
                text_ar: "1. ________ تستخدم قبل 'university' 2. ________ تستخدم قبل 'hour'.",
                options: ["An, A", "A, An", "The, A", "An, The"],
                options_ar: ["An, A", "A, An", "The, A", "An, The"],
                correct: 1,
                explanation: "'University' starts with a consonant sound (yu), 'hour' starts with a vowel sound (ou).",
                explanation_ar: "تبدأ 'University' بصوت ساكن (يو)، بينما تبدأ 'hour' بصوت متحرك (آو)."
            },
            {
                id: "comm-91",
                text: "1. ________ of these belong to the landed gentry. 2. ________ of the boys could get the prize.",
                text_ar: "1. ________ من هؤلاء ينتمون إلى الطبقة الراقية. 2. ________ من الأولاد يمكنهم الحصول على الجائزة.",
                options: ["Each, every", "Each, either", "Every, each", "Either, each"],
                options_ar: ["كل، كل واحد", "كل، أي واحد (Each, either)", "كل واحد، كل", "أي واحد، كل"],
                correct: 1,
                explanation: "Each refers to members of a group individually; either refers to one of two.",
                explanation_ar: "تستخدم Each للإشارة لأفراد المجموعة بشكل فردي؛ وEither لأحد الاثنين."
            },
            {
                id: "comm-92",
                text: "_________ you can take a horse to the pond, __________ can make it drink.",
                text_ar: "_________ يمكنك اصطحاب الحصان إلى البركة، ________ يمكنك إجباره على الشرب.",
                options: ["Neither, either", "Neither, or", "Either, or", "Either, nor"],
                options_ar: ["لا هذا، ولا ذاك", "لا أحد، أو", "إما، أو (Either, or)", "إما، ولا"],
                correct: 2,
                explanation: "The proverb uses 'Either... or' (or as a variation of the horse idiom). Correct answer in this context is likely 'either/but' but given options, C is the structural fit.",
                explanation_ar: "المثل يستخدم 'إما... أو' (أو كصيغة تركيبية). الخيار الثالث هو الأنسب للقواعد."
            },
            {
                id: "comm-93",
                text: "Prior to note-taking there is the aspect of _________ or _________.",
                text_ar: "قبل تدوين الملاحظات، هناك جانب _________ أو _________ .",
                options: ["Listening, Writing", "Writing, Speaking", "Speaking, Reading", "Reading, Listening"],
                options_ar: ["الاستماع، الكتابة", "الكتابة، التحدث", "التحدث، القراءة", "القراءة، الاستماع"],
                correct: 3,
                explanation: "You must read or listen to source material before taking notes on it.",
                explanation_ar: "يجب عليك قراءة أو الاستماع للمادة المصدر قبل تدوين ملاحظات عنها."
            },
            {
                id: "comm-94",
                text: "An effective strategy for note-taking includes an ________ and ________ approach.",
                text_ar: "الاستراتيجية الفعالة لتدوين الملاحظات تتضمن نهجاً ________ و ________ .",
                options: ["Inefficient, systematic", "Inefficient, unsystematic", "Efficient, unsystematic", "Efficient, systematic"],
                options_ar: ["غير كفء، منظم", "غير كفء، عشوائي", "كفء، عشوائي", "كفء، منظم (Efficient, systematic)"],
                correct: 3,
                explanation: "Success in note-taking requires organization and efficiency.",
                explanation_ar: "النجاح في تدوين الملاحظات يتطلب التنظيم والكفاءة."
            },
            {
                id: "comm-95",
                text: "In making notes, _________ and _________ are of utmost importance.",
                text_ar: "عند تدوين الملاحظات، يعد _________ و _________ في غاية الأهمية.",
                options: ["Clarity, Organization", "Mistiness, Organization", "Mistiness, Unclarity", "Foggy, Organization"],
                options_ar: ["الوضوح، التنظيم (Clarity, Organization)", "الغموض، التنظيم", "الغموض، عدم الوضوح", "الضبابية، التنظيم"],
                correct: 0,
                explanation: "Notes must be clear and organized to be useful for future reference.",
                explanation_ar: "يجب أن تكون الملاحظات واضحة ومنظمة لتكون مفيدة للرجوع إليها مستقبلاً."
            },
            {
                id: "comm-96",
                text: "Usually, the business letter is drafted in two styles:",
                text_ar: "عادةً ما يتم صياغة الرسائل التجارية بأسلوبين:",
                options: ["Blocked, Unblocked", "Unblocked, Semi-blocked", "Blocked, Semi-blocked", "None"],
                options_ar: ["الكتلة، غير الكتلة", "غير الكتلة، شبه الكتلة", "الكتلة، وشبه الكتلة (Blocked, Semi-blocked)", "لا شيء"],
                correct: 2,
                explanation: "Blocked (all start left) and Semi-blocked (indented) are common formats.",
                explanation_ar: "أسلوب الكتلة (الكل يبدأ من اليسار) وشبه الكتلة (إزاحة في السطر الأول) هما النمطان الشائعان."
            },
            {
                id: "comm-97",
                text: "A resume must include:",
                text_ar: "يجب أن تتضمن السيرة الذاتية:",
                options: ["Your Skills", "Your Aims/Goals", "Your Projects/Research", "All of the Above"],
                options_ar: ["مهاراتك", "أهدافك", "مشاريعك/أبحاثك", "كل ما سبق"],
                correct: 3,
                explanation: "A comprehensive resume covers skills, objectives, and experience.",
                explanation_ar: "السيرة الذاتية الشاملة تغطي المهارات والأهداف والخبرات."
            },
            {
                id: "comm-98",
                text: "The main parts of an agenda are ________ and _________.",
                text_ar: "الأجزاء الرئيسية لجدول الأعمال هي ________ و _________ .",
                options: ["Heading", "Body", "Both", "None"],
                options_ar: ["العنوان", "المتن/المحتوى", "كلاهما", "لا شيء"],
                correct: 2,
                explanation: "An agenda requires a heading (meeting details) and a body (items to discuss).",
                explanation_ar: "جدول الأعمال يتطلب عنواناً (تفاصيل الاجتماع) ومتناً (النقاط المقرر نقاشها)."
            },
            {
                id: "comm-99",
                text: "Reading for information may be both _______ and ________.",
                text_ar: "القراءة من أجل المعلومات قد تكون ________ و ________ .",
                options: ["Internal, External", "Internal, Outer", "Inside, External", "Inner, Outer"],
                options_ar: ["داخلية، خارجية (Internal, External)", "داخلي، خارجي (بمعنى مغاير)", "داخل، خارجي", "باطني، خارجي"],
                correct: 0,
                explanation: "One might seek information for internal use (self-improvement) or external purposes.",
                explanation_ar: "قد يبحث المرء عن معلومات لاستخدامه الداخلي (تطوير الذات) أو لأغراض خارجية."
            },
            {
                id: "comm-100",
                text: "Professional reading is done to continue ________ and ________ to develop thinking skills.",
                text_ar: "القراءة المهنية تتم للاستمرار في ________ و ________ لتطوير مهارات التفكير.",
                options: ["Learning, Studying", "Learning, Speaking", "Reading, Speaking", "Speaking, Listening"],
                options_ar: ["التعلم، الدراسة (Learning, Studying)", "التعلم، التحدث", "القراءة، التحدث", "التحدث، الاستماع"],
                correct: 0,
                explanation: "Lifelong learning and continuous study are key to professional growth.",
                explanation_ar: "التعلم مدى الحياة والدراسة المستمرة هما مفتاح النمو المهني."
            }
        ]
    },
    {
        id: "comm-skills-2",
        title: "Communication Skills (Part 2)",
        title_ar: "مهارات الاتصال (الجزء الثاني)",
        description: "Questions 101-139: Advanced topics. Features composite questions (T=True, F=False) for multiple statements.",
        description_ar: "الأسئلة 101-139: مواضيع متقدمة. تنبيه: تعتمد الأسئلة المركبة؛ حيث تقيم عدة جمل في آن واحد بنظام (T = صحيح، F = خاطئ).",
        icon: "📖",
        questions: [
            {
                id: "comm-101",
                text: "When we read aloud our concentration is divided between ________ and _________.",
                text_ar: "عندما نقرأ بصوت عالٍ، ينقسم تركيزنا بين ________ و _________.",
                options: ["Listening, Hearing", "Hearing, Reading", "Reading, Speaking", "Speaking, Listening"],
                options_ar: ["الاستماع والسمع", "السمع والقراءة", "القراءة والكلام (Reading, Speaking)", "الكلام والاستماع"],
                correct: 2,
                explanation: "Reading aloud requires simultaneous visual processing (reading) and vocal production (speaking).",
                explanation_ar: "القراءة بصوت عالٍ تتطلب معالجة بصرية (قراءة) وإنتاجاً صوتياً (كلام) في وقت واحد."
            },
            {
                id: "comm-102",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. If the tone of the voice and body language are negative the communication will pass.<br>2. Semantic barriers mean that different words may have different meaning in different cultures.<br>3. Correct choice of channel is one of the main barriers to communication.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. إذا كانت نبرة الصوت ولغة الجسد سلبية، سينجح الاتصال.<br>2. العوائق الدلالية تعني أن الكلمات المختلفة قد يكون لها معانٍ مختلفة في ثقافات مختلفة.<br>3. الاختيار الصحيح للقناة هو أحد العوائق الرئيسية للاتصال.",
                options: ["TFT", "FTF", "FFF", "TTT"],
                options_ar: ["TFT", "FTF", "FFF", "TTT"],
                correct: 1,
                explanation: "1 is False (negative cues block comm), 2 is True, 3 is False (incorrect choice is a barrier, correct choice is NOT).",
                explanation_ar: "الجملة الأولى خاطئة (الإشارات السلبية تعيق الاتصال)، الثانية صحيحة، الثالثة خاطئة (الاختيار الخاطئ هو العائق، وليس الصحيح)."
            },
            {
                id: "comm-103",
                text: "Countable nouns are those nouns which:<br>1. Cannot be counted<br>2. Things that exist as separate and distinct individual units.",
                text_ar: "الأسماء القابلة للعد هي:<br>1. التي لا يمكن عدها<br>2. الأشياء التي توجد كوحدات فردية منفصلة ومتميزة.",
                options: ["TF", "FT", "FF", "TT"],
                options_ar: ["TF", "FT", "FF", "TT"],
                correct: 1,
                explanation: "Countable nouns refer to individual items that can be counted.",
                explanation_ar: "الأسماء القابلة للعد تشير إلى عناصر فردية يمكن عدها."
            },
            {
                id: "comm-104",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Tomato, boy, tree, man are plural<br>2. Tomatoes, boys, trees, and men are plural",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. Tomato, boy, tree, man هي جمع.<br>2. Tomatoes, boys, trees, men هي جمع.",
                options: ["TF", "FT", "FF", "TT"],
                options_ar: ["TF", "FT", "FF", "TT"],
                correct: 1,
                explanation: "The first list is singular; the second list is plural.",
                explanation_ar: "القائمة الأولى مفرد؛ القائمة الثانية جمع."
            },
            {
                id: "comm-105",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. When we read a novel, a comic strip, a magazine it is extensive reading<br>2. When we read an article in order to write a review on it you read it intensively",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. قراءة رواية أو مجلة هي قراءة موسعة (Extensive).<br>2. قراءة مقال لكتابة مراجعة عنه هي قراءة مكثفة (Intensive).",
                options: ["TT", "FF", "TF", "FT"],
                options_ar: ["TT", "FF", "TF", "FT"],
                correct: 0,
                explanation: "Reading for pleasure is extensive; reading for analysis is intensive.",
                explanation_ar: "القراءة للمتعة موسعة؛ والقراءة للتحليل مكثفة."
            },
            {
                id: "comm-106",
                text: "T/F (Singular & Plural):<br>1. Tax – tax<br>2. Baby- babies",
                text_ar: "صحيح/خاطئ (المفرد والجمع):<br>1. Tax جمعها tax.<br>2. Baby جمعها babies.",
                options: ["TT", "FF", "TF", "FT"],
                options_ar: ["TT", "FF", "TF", "FT"],
                correct: 3,
                explanation: "Plural of tax is taxes; plural of baby is babies.",
                explanation_ar: "جمع tax هو taxes؛ وجمع baby هو babies."
            },
            {
                id: "comm-107",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Pay attention to the appearance of the speaker instead of the subject.<br>2. Jumping to conclusion at the beginning of the speech without waiting for the speaker to complete the communication he intends to pass is a quality of a good listener.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. انتبه لمظهر المتكلم بدلاً من الموضوع.<br>2. القفز إلى النتائج في بداية الحديث دون انتظار المتكلم هو من صفات المستمع الجيد.",
                options: ["TT", "TF", "FF", "DT"],
                options_ar: ["TT", "TF", "FF", "FT"],
                correct: 2,
                explanation: "Both are poor listening habits.",
                explanation_ar: "كلاهما من عادات الاستماع السيئة."
            },
            {
                id: "comm-108",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. By focusing too much on the facts, the listener may miss the message that the speaker is intending to convey.<br>2. When the listener is intercepting that means he / she is a good listener.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. بالتركيز الزائد على الحقائق، قد يفتقد المستمع الرسالة التي ينوي المتكلم إيصالها.<br>2. عندما يقاطع المستمع الحديث، فهذا يعني أنه مستمع جيد.",
                options: ["TF", "TT", "FF", "FT"],
                options_ar: ["TF", "TT", "FF", "FT"],
                correct: 0,
                explanation: "Focusing only on facts can lose the emotional context (T); intercepting/interrupting is bad (F).",
                explanation_ar: "التركيز فقط على الحقائق قد يفقدنا السياق العاطفي (صحيح)؛ والمقاطعة أمر سيء (خاطئ)."
            },
            {
                id: "comm-109",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Your’s truly<br>2. Yours truly",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. كتابة Your’s truly.<br>2. كتابة Yours truly.",
                options: ["FT", "TF", "TT", "FF"],
                options_ar: ["FT", "TF", "TT", "FF"],
                correct: 0,
                explanation: "Possessive pronouns like 'Yours' do not take an apostrophe.",
                explanation_ar: "ضمائر الملكية مثل 'Yours' لا تأخذ فاصلة عليا (Apostrophe)."
            },
            {
                id: "comm-110",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Plural of ‘I’ is ‘Me’.<br>2. Plural of ‘I’ is ‘We’.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. جمع ‘I’ هو ‘Me’.<br>2. جمع ‘I’ هو ‘We’.",
                options: ["TF", "FT", "TT", "FF"],
                options_ar: ["TF", "FT", "TT", "FF"],
                correct: 1,
                explanation: "'Me' is the objective case of 'I'; 'We' is the plural.",
                explanation_ar: "‘Me’ هي حالة المفعول به لـ ‘I’؛ و‘We’ هي الجمع."
            },
            {
                id: "comm-111",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. While writing business letters one should directly focus on the message to be told.<br>2. Use old fashioned stuffy phrases and long sentences.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. عند كتابة الرسائل التجارية يجب التركيز مباشرة على الرسالة.<br>2. استخدم عبارات قديمة وجمل طويلة.",
                options: ["TT", "TF", "FF", "FT"],
                options_ar: ["TT", "TF", "FF", "FT"],
                correct: 1,
                explanation: "Business writing should be direct and modern, not stuffy/long.",
                explanation_ar: "الرسائل التجارية يجب أن تكون مباشرة وحديثة، وليست معقدة أو طويلة."
            },
            {
                id: "comm-112",
                text: "Points to be kept in mind while writing apology letters:<br>1. Take full responsibility of the problem caused<br>2. Be dramatic while apologizing",
                text_ar: "نقاط يجب مراعاتها عند كتابة رسالة اعتذار:<br>1. تحمل المسؤولية الكاملة عن المشكلة.<br>2. كن درامياً أثناء الاعتذار.",
                options: ["TF", "FT", "FF", "TT"],
                options_ar: ["TF", "FT", "FF", "TT"],
                correct: 0,
                explanation: "Apologies should be responsible (T) but professional/sincere, not dramatic (F).",
                explanation_ar: "الاعتذار يجب أن يكون مسؤولاً (صحيح) ومهنياً وصادقاً، لا درامياً (خاطئ)."
            },
            {
                id: "comm-113",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Paraphrasing aims to shorten the length of a text.<br>2. Paraphrasing changes the meaning of the text",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. إعادة الصياغة تهدف لتقصير النص.<br>2. إعادة الصياغة تغير معنى النص.",
                options: ["TF", "FT", "FF", "TT"],
                options_ar: ["TF", "FT", "FF", "TT"],
                correct: 2,
                explanation: "Summarizing shortens text; paraphrasing changes wording but keeps meaning and length similar.",
                explanation_ar: "التلخيص هو ما يقصر النص؛ أما إعادة الصياغة فتغير الكلمات مع الحفاظ على المعنى والطول تقريباً."
            },
            {
                id: "comm-114",
                text: "In business letters, Which of the following statement is True(T) or False(F) are given below:<br>1. Signature is placed above the complimentary close<br>2. Salutation is written after the address",
                text_ar: "في الرسائل التجارية:<br>1. يوضع التوقيع فوق خاتمة المجاملة.<br>2. تكتب التحية بعد العنوان.",
                options: ["TT", "FF", "TF", "FT"],
                options_ar: ["TT", "FF", "TF", "FT"],
                correct: 3,
                explanation: "1 is False (Signature is below close); 2 is True (Salutation follows internal address).",
                explanation_ar: "الأولى خاطئة (التوقيع تحت الخاتمة)؛ الثانية صحيحة (التحية تتبع العنوان الداخلي)."
            },
            {
                id: "comm-115",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. A text book is read only for the pleasure of reading it.<br>2. Reading is an encoding process of communication.<br>3. The intention of reading a medical report is to gain information.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. يُقرأ الكتاب المدرسي للمتعة فقط.<br>2. القراءة هي عملية ترميز (Encoding).<br>3. القصد من قراءة تقرير طبي هو الحصول على معلومات.",
                options: ["TFT", "TTT", "FFF", "FFT"],
                options_ar: ["TFT", "TTT", "FFF", "FFT"],
                correct: 3,
                explanation: "1 is False (for study); 2 is False (decoding); 3 is True.",
                explanation_ar: "الأولى خاطئة؛ الثانية خاطئة؛ الثالثة صحيحة."
            },
            {
                id: "comm-116",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. When you invite any guest to a function you have to clearly write the time and Venue<br>2. It is bad business etiquette to write any acceptance or declination of an invitation.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. عند دعوة ضيف يجب تحديد الوقت والمكان.<br>2. من سوء الإتيكيت كتابة قبول أو رفض للدعوة.",
                options: ["TF", "FT", "FF", "TT"],
                options_ar: ["TF", "FT", "FF", "TT"],
                correct: 0,
                explanation: "Specifying details is essential (T); responding to invitations is good etiquette (F).",
                explanation_ar: "تحديد التفاصيل ضروري (صحيح)؛ والرد على الدعوات من حسن الإتيكيت (خاطئ)."
            },
            {
                id: "comm-117",
                text: "In a job application:<br>1. Write the name of the person who you are addressing in the salutation.<br>2. Write the vacancy you are applying for in the subject.<br>3. After your signature there is no need to write your full name clearly.",
                text_ar: "في طلب الوظيفة:<br>1. اكتب اسم الشخص الموجه إليه الخطاب في التحية.<br>2. اكتب الوظيفة المتقدم لها في الموضوع.<br>3. بعد التوقيع لا داعي لكتابة الاسم كاملاً.",
                options: ["TFT", "FTF", "FFT", "TFF"],
                options_ar: ["TFT", "FTF", "FFT", "TFF"],
                correct: 1,
                explanation: "Based on the key: 1 is False (Do not write name), 2 is True (Write vacancy), 3 is False (Must write name).",
                explanation_ar: "حسب مفتاح الحل: الأولى خاطئة، الثانية صحيحة، الثالثة خاطئة."
            },
            {
                id: "comm-118",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Abstract nouns cannot be seen, felt or heard<br>2. Common nouns identify the particular variety<br>3. Collective nouns take a plural verb",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. الأسماء المجردة لا يمكن رؤيتها أو لمسها.<br>2. الأسماء العامة تحدد النوع الخاص.<br>3. الأسماء الجماعية تأخذ فعلاً بصيغة الجمع.",
                options: ["FFF", "TTT", "TFF", "FTF"],
                options_ar: ["FFF", "TTT", "TFF", "FTF"],
                correct: 2,
                explanation: "1 is True; 2 is False (Proper nouns do); 3 is False (usually singular as a unit).",
                explanation_ar: "الأولى صحيحة؛ الثانية خاطئة (أسماء العلم هي ما يحدد النوع الخاص)؛ الثالثة خاطئة (عادةً تعامل كمفرد)."
            },
            {
                id: "comm-119",
                text: "Arrange the steps in SQ3R technique:<br>1. Recall<br>2. Question<br>3. Survey<br>4. Reading<br>5. Review",
                text_ar: "رتب خطوات تقنية SQ3R:<br>1. الاستدعاء<br>2. السؤال<br>3. الاستطلاع<br>4. القراءة<br>5. المراجعة",
                options: ["3 – 4 – 1 – 2 – 5", "1 – 2 – 3 – 4 – 5", "5 – 1 – 2 – 3 – 4", "3 – 2 – 4 – 1 – 5"],
                options_ar: ["3 – 4 – 1 – 2 – 5", "1 – 2 – 3 – 4 – 5", "5 – 1 – 2 – 3 – 4", "3 – 2 – 4 – 1 – 5"],
                correct: 3,
                explanation: "SQ3R: Survey, Question, Read, Recite(Recall), Review.",
                explanation_ar: "ترتيب SQ3R هو: Survey, Question, Read, Recite, Review."
            },
            {
                id: "comm-120",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. Professional reading is done when you need to continue learning and studying.<br>2. Action reading is done when you do not need to do something concrete.<br>3. A reader can understand a text only when s/he actively uses his/her mental abilities.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. القراءة المهنية تتم لمواصلة التعلم والدراسة.<br>2. قراءة العمل (Action reading) تتم عندما لا تحتاج لفعل شيء ملموس.<br>3. يمكن للقارئ الفهم فقط عند استخدام قدراته العقلية بنشاط.",
                options: ["TTT", "FFF", "TFT", "FTF"],
                options_ar: ["TTT", "FFF", "TFT", "FTF"],
                correct: 2,
                explanation: "1 is True; 2 is False (Action reading IS for concrete action); 3 is True.",
                explanation_ar: "الأولى صحيحة؛ الثانية خاطئة (قراءة العمل هي لأجل فعل ملموس)؛ الثالثة صحيحة."
            },
            {
                id: "comm-121",
                text: "Which of the following statement is True(T) or False(F) are given below:<br>1. The resume should be official and not general.<br>2. Never give a brief about your experience in the covering letter.<br>3. You must always send original documents in a resume.",
                text_ar: "أي من الجمل التالية صحيحة (T) أو خاطئة (F):<br>1. السيرة الذاتية يجب أن تكون رسمية وليست عامة.<br>2. لا تذكر نبذة عن خبرتك في الخطاب التعريفي.<br>3. يجب إرسال المستندات الأصلية في السيرة الذاتية.",
                options: ["TTT", "FFF", "TFF", "FTT"],
                options_ar: ["TTT", "FFF", "TFF", "FTT"],
                correct: 2,
                explanation: "1 is True; 2 is False (covering letter should highlight experience); 3 is False (send copies).",
                explanation_ar: "الأولى صحيحة؛ الثانية خاطئة (الخطاب التعريفي يجب أن يبرز الخبرة)؛ الثالثة خاطئة (ترسل النسخ وليس الأصول)."
            },
            {
                id: "comm-122",
                text: "True(T) or False(F):<br>1. Press release is written in first person.<br>2. List jobs in reverse chronological order.<br>3. Heading of press release should be one sentence.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. البيان الصحفي يكتب بصيغة المتكلم (أنا).<br>2. تدرج الوظائف بترتيب زمني عكسي.<br>3. عنوان البيان الصحفي يجب أن يكون جملة واحدة.",
                options: ["FTT", "TFT", "FFF", "TTT"],
                options_ar: ["FTT", "TFT", "FFF", "TTT"],
                correct: 0,
                explanation: "1 is False (use third person for press releases); 2 & 3 are True.",
                explanation_ar: "الأولى خاطئة (استخدم صيغة الغائب للبيانات الصحفية)؛ الثانية والثالثة صحيحة."
            },
            {
                id: "comm-123",
                text: "True(T) or False(F):<br>1. In press release heading should not be in capitals.<br>2. Heading should be long.<br>3. Put an exclamation at the end of heading.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. في البيان الصحفي لا يكتب العنوان بأحرف كبيرة.<br>2. العنوان يجب أن يكون طويلاً.<br>3. ضع علامة تعجب في نهاية العنوان.",
                options: ["TTT", "FFF", "TFT", "FTF"],
                options_ar: ["TTT", "FFF", "TFT", "FTF"],
                correct: 1,
                explanation: "All are generally False (Heads are often capped, should be short, and avoid exclamations).",
                explanation_ar: "الكل خاطئ (العناوين غالباً كبيرة، قصيرة، وتجنب علامات التعجب)."
            },
            {
                id: "comm-124",
                text: "Writing a complaint:<br>1. Always be sarcastic or threatening<br>2. Write a long letter<br>3. Send original documents",
                text_ar: "عند كتابة شكوى:<br>1. كن ساخراً أو مهدداً دائماً.<br>2. اكتب خطاباً طويلاً.<br>3. أرسل المستندات الأصلية.",
                options: ["TTT", "FFF", "FTF", "TFT"],
                options_ar: ["TTT", "FFF", "FTF", "TFT"],
                correct: 1,
                explanation: "All are bad practices in complaint writing.",
                explanation_ar: "كلها ممارسات سيئة في كتابة الشكاوى."
            },
            {
                id: "comm-125",
                text: "True(T) or False(F):<br>1. Salutation is written with name if known.<br>2. Subject line states vacancy.<br>3. After your signature there is no need to write your full name.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. التحية تكتب بجانب الاسم إذا كان معروفاً.<br>2. سطر الموضوع يوضح الوظيفة.<br>3. بعد التوقيع لا داعي لكتابة الاسم كاملاً.",
                options: ["TFT", "FTF", "FFT", "TFF"],
                options_ar: ["TFT", "FTF", "FFT", "TFF"],
                correct: 1,
                explanation: "Applying the rule: 1. Do not write name (F), 2. Write vacancy (T), 3. Compulsory full name (F as stated).",
                explanation_ar: "حسب القواعد: الأولى خاطئة، الثانية صحيحة، الثالثة خاطئة."
            },
            {
                id: "comm-126",
                text: "Improve listening skills:<br>1. Do not maintain eye contact<br>2. Be emotionally involved<br>3. Avoid distractions",
                text_ar: "تحسين مهارات الاستماع:<br>1. لا تحافظ على التواصل البصري.<br>2. كن منخرطاً عاطفياً.<br>3. تجنب المشتتات.",
                options: ["TTT", "FFT", "TFT", "FFF"],
                options_ar: ["TTT", "FFT", "TFT", "FFF"],
                correct: 1,
                explanation: "Only 3 is True for good listening.",
                explanation_ar: "الجملة الثالثة فقط هي الصحيحة للاستماع الجيد."
            },
            {
                id: "comm-127",
                text: "Semantic markers:<br>1. 'It is worth noting' indicates importance.<br>2. 'Secondly' used for illustrations.<br>3. 'To express time relationship' we use words like link, kinship, blood tie.",
                text_ar: "العلامات الدلالية:<br>1. 'من الجدير بالذكر' تدل على الأهمية.<br>2. 'أولاً/ثانياً' تستخدم للتوضيح (Illustrations).<br>3. 'للتعبير عن علاقة زمنية' نستخدم كلمات مثل link أو blood tie.",
                options: ["TTT", "FFF", "FTF", "TFF"],
                options_ar: ["TTT", "FFF", "FTF", "TFF"],
                correct: 3,
                explanation: "1 is True; 2 is False (sequencing); 3 is False (link/kinship express relationship but not time relationship specifically).",
                explanation_ar: "الأولى صحيحة؛ الثانية خاطئة؛ الثالثة خاطئة (الكلمات المذكورة تعبر عن صلات وليست علاقات زمنية)."
            },
            {
                id: "comm-128",
                text: "1. A __________ & __________ Listening satisfies short tempered customers.<br>2. We should always __________ the customer for calling.",
                text_ar: "1. الاستماع ________ و ________ يرضي الزبون العصبي.<br>2. يجب دائماً ________ الجميل على الاتصال.",
                options: ["Passive, impatient, slap", "Patient, active, thank", "Impatient, passive, thank", "Passive, active, thank"],
                options_ar: ["سلبي، غير صبور، صفع", "صبور ونشط، شكر (Patient, active, thank)", "غير صبور، سلبي، شكر", "سلبي، نشط، شكر"],
                correct: 1,
                explanation: "Patience and gratitude are vital in customer service.",
                explanation_ar: "الصبر والامتنان حيويان في خدمة العملاء."
            },
            {
                id: "comm-129",
                text: "True(T) or False(F):<br>1. Concentration requires practice.<br>2. Multi-tasks while listening is good.<br>3. Active listening helps concentration.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. التركيز يتطلب ممارسة.<br>2. تعدد المهام أثناء الاستماع جيد.<br>3. الاستماع النشط يساعد على التركيز.",
                options: ["TFT", "FFF", "TTT", "FFT"],
                options_ar: ["TFT", "FFF", "TTT", "FFT"],
                correct: 0,
                explanation: "1 is True; 2 is False (multi-tasking hinders listening); 3 is True.",
                explanation_ar: "الأولى صحيحة؛ الثانية خاطئة (تعدد المهام يعيق الاستماع)؛ الثالثة صحيحة."
            },
            {
                id: "comm-130",
                text: "1. While listening, avoid __________.<br>2. Focus on __________ not delivery style.<br>3. Avoid _________ involvement.",
                text_ar: "1. أثناء الاستماع، تجنب ________.<br>2. ركز على ________ وليس أسلوب الإلقاء.<br>3. تجنب الانخراط ________.",
                options: ["Emotional, distractions, content", "Distractions, content, emotional", "Content, distractions, emotional", "Distracts, emotional, content"],
                options_ar: ["العاطفي، المشتتات، المحتوى", "المشتتات، المحتوى، العاطفي (Distractions, content, emotional)", "المحتوى، المشتتات، العاطفي", "المشتتات، العاطفي، المحتوى"],
                correct: 1,
                explanation: "Avoid distractions, focus on content, remain objectively unemotional.",
                explanation_ar: "تجنب المشتتات، ركز على المحتوى، وابحث عن الموضوعية بعيداً عن العاطفة."
            },
            {
                id: "comm-131",
                text: "Arrange the steps involved in listening:<br>1. Giving meaning<br>2. Reconstructing<br>3. Processing.",
                text_ar: "رتب خطوات الاستماع:<br>1. إعطاء المعنى.<br>2. إعادة البناء.<br>3. معالجة البيانات.",
                options: ["1 – 2 – 3", "2 – 3 – 1", "3 – 2 – 1", "2 – 1 – 3"],
                options_ar: ["1 – 2 – 3", "2 – 3 – 1", "3 – 2 – 1", "2 – 1 – 3"],
                correct: 2,
                explanation: "The correct sequence based on the standard model: 1. Processing (3), 2. Reconstructing (2), 3. Giving meaning (1).",
                explanation_ar: "التسلسل الصحيح هو: 1. معالجة البيانات (3)، 2. إعادة البناء (2)، 3. إعطاء المعنى (1)."
            },
            {
                id: "comm-132",
                text: "Receiving call:<br>1. Be prepared with pen/pad<br>2. Do not answer quickly<br>3. Do not give full attention.",
                text_ar: "تلقي المكالمة:<br>1. كن مستعداً بقلم وورقة.<br>2. لا ترد بسرعة.<br>3. لا تعطِ كامل انتباهك.",
                options: ["TTT", "FFF", "TFF", "FTT"],
                options_ar: ["TTT", "FFF", "TFF", "FTT"],
                correct: 2,
                explanation: "Only 1 is correct professional advice.",
                explanation_ar: "النصيحة الأولى فقط هي الصحيحة مهنياً."
            },
            {
                id: "comm-133",
                text: "Telephone conversation:<br>1. Do not answer promptly<br>2. Be alert<br>3. Be natural",
                text_ar: "محادثة هاتفية:<br>1. لا ترد فوراً.<br>2. كن متيقظاً.<br>3. كن طبيعياً.",
                options: ["TTT", "FFF", "TFF", "FTT"],
                options_ar: ["TTT", "FFF", "TFF", "FTT"],
                correct: 3,
                explanation: "1 is False; 2 & 3 are True.",
                explanation_ar: "الأولى خاطئة؛ الثانية والثالثة صحيحة."
            },
            {
                id: "comm-134",
                text: "Telephone communication:<br>1. Be expressive<br>2. Be distinct<br>3. Do not be pleasant",
                text_ar: "الاتصال الهاتفي:<br>1. كن معبراً.<br>2. كن متميزاً (واضحاً).<br>3. لا تكن لبقاً.",
                options: ["TTT", "TTF", "FFF", "FTT"],
                options_ar: ["TTT", "TTF", "FFF", "FTT"],
                correct: 1,
                explanation: "Expressiveness and clarity are good; unpleasantness is bad.",
                explanation_ar: "التعبير والوضوح أمران جيدان؛ بينما غلظة التعامل مرفوضة."
            },
            {
                id: "comm-135",
                text: "Telephone:<br>1. Leave caller on hold<br>2. Be courteous<br>3. Transfer always, do not handle yourself.",
                text_ar: "الهاتف:<br>1. اترك المتصل في الانتظار.<br>2. كن لبقاً.<br>3. حول المكالمة دائماً ولا تتعامل معها بنفسك.",
                options: ["TTF", "TTT", "FFF", "FTF"],
                options_ar: ["TTF", "TTT", "FFF", "FTF"],
                correct: 3,
                explanation: "Courtesy is the only True statement (Source D: FTF).",
                explanation_ar: "اللباقة هي الجملة الصحيحة الوحيدة هنا."
            },
            {
                id: "comm-136",
                text: "When you dial:<br>1. Ask 'who is this' first.<br>2. Do not give identity.<br>3. Speak directly without knowing person.",
                text_ar: "عندما تطلب رقماً:<br>1. اسأل 'من معي' أولاً.<br>2. لا تذكر هويتك.<br>3. تكلم مباشرة دون معرفة الشخص.",
                options: ["TFF", "TTT", "FFF", "FTF"],
                options_ar: ["TFF", "TTT", "FFF", "FTF"],
                correct: 2,
                explanation: "All are poor telephone etiquette.",
                explanation_ar: "كلها ممارسات سيئة في إتيكيت الهاتف."
            },
            {
                id: "comm-137",
                text: "OHP uses:<br>1. Eye contact with audience<br>2. Different access to presenter<br>3. Focus audience attention.",
                text_ar: "استخدامات OHP:<br>1. التواصل البصري مع الجمهور.<br>2. وصول مختلف لمقدم العرض.<br>3. تركيز انتباه الجمهور.",
                options: ["FTF", "TFT", "TTT", "FFF"],
                options_ar: ["FTF", "TFT", "TTT", "FFF"],
                correct: 2,
                explanation: "OHP facilitates all these benefits in presentations.",
                explanation_ar: "جهاز العرض العلوي يسهل كل هذه المزايا في العروض التقديمية."
            },
            {
                id: "comm-138",
                text: "True(T) or False(F):<br>1. Ask for identity before giving yours.<br>2. Never leave a caller on hold.<br>3. Use simple language, avoid slang.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. اطلب هوية الآخر قبل إعطاء هويتك.<br>2. لا تترك المتصل في الانتظار أبداً.<br>3. استخدم لغة بسيطة وتجنب العامية.",
                options: ["TFT", "FTT", "TTT", "FFF"],
                options_ar: ["TFT", "FTT", "TTT", "FFF"],
                correct: 1,
                explanation: "1 is False; 2 is True (Source says FTT implies 3 is true too, sometimes 2 is partially true if handled properly but here F-T-T).",
                explanation_ar: "الأولى خاطئة؛ الثانية والثالثة صحيحة."
            },
            {
                id: "comm-139",
                text: "True(T) or False(F):<br>1. Dissolve unit + 2 projectors create fade in/out.<br>2. Slides are better in well-lit rooms.<br>3. Audiences consider slides as professional.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. وحدة التلاشي + جهازين عرض تنشئ تأثير التداخل.<br>2. الشرائح أفضل في الغرف المضاءة جيداً.<br>3. الجمهور يعتبر الشرائح مهنية.",
                options: ["TFT", "FFF", "TTT", "FTF"],
                options_ar: ["TFT", "FFF", "TTT", "FTF"],
                correct: 0,
                explanation: "1 is True; 2 is False (slides need darkness usually); 3 is True.",
                explanation_ar: "الأولى صحيحة؛ الثانية خاطئة (الشرائح تحتاج للظلام)؛ الثالثة صحيحة."
            }
        ]
    },
    {
        id: "comm-slides-1-2",
        title: "Communication Skills (Slide 1&2)",
        title_ar: "مهارات الاتصال (سلايد 1&2)",
        description: "Comprehensive question bank covering the core of communication skills (Slides 1 & 2).",
        description_ar: "بنك أسئلة شامل يغطي صلب مادة مهارات الاتصال (سلايد 1 و 2).",
        icon: "📂",
        questions: [
            {
                id: "comm-s12-1",
                text: "According to the slides, Communication is much more than:",
                text_ar: "بناءً على السلايدات، الاتصال هو أكثر بكثير من مجرد:",
                options: ["Writing", "Speech", "Listening", "Body Language"],
                options_ar: ["الكتابة", "الكلام", "الاستماع", "لغة الجسد"],
                correct: 1,
                explanation: "Communication encompasses more than just verbal speech; it involves various forms of interaction.",
                explanation_ar: "يشمل الاتصال ما هو أكثر من مجرد الكلام اللفظي؛ فهو يتضمن أشكالاً مختلفة من التفاعل."
            },
            {
                id: "comm-s12-2",
                text: "Communication is defined as a process of passing information and understanding from one person to another, resulting in:",
                text_ar: "يُعرّف الاتصال بأنه عملية نقل المعلومات والفهم من شخص لآخر، مما يؤدي إلى:",
                options: ["Data storage", "Exchange of meaning", "Noise creation", "Physical movement"],
                options_ar: ["تخزين البيانات", "تبادل المعنى", "خلق ضوضاء", "حركة بدنية"],
                correct: 1,
                explanation: "The ultimate goal of communication is the exchange and sharing of meaning.",
                explanation_ar: "الهدف النهائي للاتصال هو تبادل وتشارك المعنى."
            },
            {
                id: "comm-s12-3",
                text: "What are \"Communication Skills\" as described in the lecture?",
                text_ar: "ما هي \"مهارات الاتصال\" كما وصفت في المحاضرة؟",
                options: ["The ability to talk fast", "Tools used to remove barriers to effective communication", "Natural talents that cannot be learned", "Writing formal letters only"],
                options_ar: ["القدرة على الكلام بسرعة", "الأدوات المستخدمة لإزالة عوائق الاتصال الفعال", "مواهب طبيعية لا يمكن تعلمها", "كتابة الرسائل الرسمية فقط"],
                correct: 1,
                explanation: "Communication skills are the tools we use to overcome obstacles and ensure clear understanding.",
                explanation_ar: "مهارات الاتصال هي الأدوات التي نستخدمها للتغلب على العقبات وضمان الفهم الواضح."
            },
            {
                id: "comm-s12-4",
                text: "The Communication Process is characterized as involving:",
                text_ar: "تتميز عملية الاتصال بأنها تتضمن:",
                options: ["A single stage only", "Two random steps", "Multiple parts and stages", "Only the sender's effort"],
                options_ar: ["مرحلة واحدة فقط", "خطوتين عشوائيتين", "أجزاء ومراحل متعددة", "جهد المرسل فقط"],
                correct: 2,
                explanation: "Communication is a complex process with several interconnected stages.",
                explanation_ar: "الاتصال عملية معقدة تتكون من عدة مراحل مترابطة."
            },
            {
                id: "comm-s12-5",
                text: "The person who originates the communication is known as the:",
                text_ar: "الشخص الذي يبدأ الاتصال يُعرف بـ:",
                options: ["Receiver", "Channel", "Source or Sender", "Context"],
                options_ar: ["المستقبل", "القناة", "المصدر أو المرسل", "السياق"],
                correct: 2,
                explanation: "The sender (or source) is the individual who initiates the message.",
                explanation_ar: "المرسل (أو المصدر) هو الفرد الذي يبدأ بإرسال الرسالة."
            },
            {
                id: "comm-s12-6",
                text: "Which stage involves preparing and transferring a message into a shareable format?",
                text_ar: "أي مرحلة تتضمن إعداد ونقل الرسالة إلى تنسيق قابل للمشاركة؟",
                options: ["Decoding", "Feedback", "Encoding", "Receiving"],
                options_ar: ["فك التشفير", "التغذية الراجعة", "الترميز (Encoding)", "الاستقبال"],
                correct: 2,
                explanation: "Encoding is the process of translating thoughts into a format suitable for transmission.",
                explanation_ar: "الترميز هو عملية ترجمة الأفكار إلى تنسيق مناسب للإرسال."
            },
            {
                id: "comm-s12-7",
                text: "\"Encoding\" requires information to be ___________ before being sent to the other party.",
                text_ar: "يتطلب \"الترميز\" أن تكون المعلومات ___________ قبل إرسالها إلى الطرف الآخر.",
                options: ["Deleted", "Prepared", "Ignored", "Stored"],
                options_ar: ["محذوفة", "مُعدّة", "مُتجاهلة", "مُخزنة"],
                correct: 1,
                explanation: "Information must be systematically prepared through encoding before transmission.",
                explanation_ar: "يجب إعداد المعلومات بشكل منهجي من خلال الترميز قبل إرسالها."
            },
            {
                id: "comm-s12-8",
                text: "The method or methods used to convey a message are referred to as:",
                text_ar: "يُشار إلى الطريقة أو الطرق المستخدمة لنقل الرسالة بـ:",
                options: ["The Message", "The Channel", "The Context", "The Feedback"],
                options_ar: ["الرسالة", "القناة (Channel)", "السياق", "التغذية الراجعة"],
                correct: 1,
                explanation: "The channel is the medium through which the encoded message is sent.",
                explanation_ar: "القناة هي الوسيلة التي يتم من خلالها إرسال الرسالة المرمزة."
            },
            {
                id: "comm-s12-9",
                text: "When you receive a message and try to understand it, this process is called:",
                text_ar: "عندما تستلم رسالة وتحاول فهمها، تسمى هذه العملية:",
                options: ["Encoding", "Decoding", "Directing", "Sending"],
                options_ar: ["الترميز", "فك التشفير (Decoding)", "التوجيه", "الإرسال"],
                correct: 1,
                explanation: "Decoding is the receiver's process of interpreting the message.",
                explanation_ar: "فك التشفير هو عملية المستقبل لتفسير وفهم الرسالة."
            },
            {
                id: "comm-s12-10",
                text: "Which of the following is NOT a skill required for successful decoding?",
                text_ar: "أي مما يلي ليس مهارة مطلوبة لفك التشفير الناجح؟",
                options: ["Active listening", "Ability to read and comprehend", "Asking clarifying questions", "Speaking loudly"],
                options_ar: ["الاستماع النشط", "القدرة على القراءة والاستيعاب", "طرح أسئلة استيضاحية", "التحدث بصوت عالٍ"],
                correct: 3,
                explanation: "Decoding focus on reception and understanding, not loud speaking.",
                explanation_ar: "يركز فك التشفير على الاستقبال والفهم، وليس التحدث بصوت عالٍ."
            },
            {
                id: "comm-s12-11",
                text: "When a sender thinks about the \"desired result\" on the part of the listener, they are focusing on the:",
                text_ar: "عندما يفكر المرسل في \"النتيجة المرجوة\" من جانب المستمع، فإنه يركز على:",
                options: ["Source", "Receiver", "Channel", "Encoding"],
                options_ar: ["المصدر", "المستقبل", "القناة", "الترميز"],
                correct: 1,
                explanation: "Effective senders tailor their message based on the receiver's likely reaction.",
                explanation_ar: "المرسلون الفعالون يصيغون رسائلهم بناءً على رد الفعل المحتمل للمستقبل."
            },
            {
                id: "comm-s12-12",
                text: "Which element is used to determine how successful the communication attempt was?",
                text_ar: "أي عنصر يستخدم لتحديد مدى نجاح محاولة الاتصال؟",
                options: ["The Sender", "Feedback", "Noise", "The Medium"],
                options_ar: ["المرسل", "التغذية الراجعة (Feedback)", "الضوضاء", "الوسيط"],
                correct: 1,
                explanation: "Feedback confirms whether the message was received and understood as intended.",
                explanation_ar: "تؤكد التغذية الراجعة ما إذا كانت الرسالة قد وصلت وفُهمت كما هو مقصود."
            },
            {
                id: "comm-s12-13",
                text: "In face-to-face communication, you can use ___________ to ensure understanding.",
                text_ar: "في الاتصال وجهًا لوجه، يمكنك استخدام ___________ لضمان الفهم.",
                options: ["Only words", "Body language and questions", "Written reports only", "Silence"],
                options_ar: ["الكلمات فقط", "لغة الجسد والأسئلة", "التقارير المكتوبة فقط", "الصمت"],
                correct: 1,
                explanation: "Visual cues and interactive questions help clarify meaning in person.",
                explanation_ar: "تساعد الإشارات المرئية والأسئلة التفاعلية في توضيح المعنى شخصياً."
            },
            {
                id: "comm-s12-14",
                text: "\"Context\" in communication refers to:",
                text_ar: "يشير \"السياق\" في الاتصال إلى:",
                options: ["The words used in the message", "The situation, environment, and relationship with the audience", "The electronic device used", "The speed of the speaker"],
                options_ar: ["الكلمات المستخدمة في الرسالة", "الموقف والبيئة والعلاقة مع الجمهور", "الجهاز الإلكتروني المستخدم", "سرعة المتحدث"],
                correct: 1,
                explanation: "Context includes the external and relational factors surrounding the communication.",
                explanation_ar: "يشمل السياق العوامل الخارجية والعلائقية المحيطة بعملية الاتصال."
            },
            {
                id: "comm-s12-15",
                text: "[True or False] Communication is limited strictly to verbal speech and nothing else.",
                text_ar: "[صح أم خطأ] يقتصر الاتصال حصرياً على الكلام اللفظي ولا شيء غيره.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Communication includes non-verbal cues, body language, and written formats.",
                explanation_ar: "يشمل الاتصال الإشارات غير اللفظية، ولغة الجسد، والتنسيقات المكتوبة."
            },
            {
                id: "comm-s12-16",
                text: "[True or False] Communication occurs when any behavior results in an exchange of meaning.",
                text_ar: "[صح أم خطأ] يحدث الاتصال عندما يؤدي أي سلوك إلى تبادل في المعنى.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "If meaning is shared, communication has taken place.",
                explanation_ar: "إذا تم تشارك المعنى، فقد حدث الاتصال."
            },
            {
                id: "comm-s12-17",
                text: "[True or False] Communication skills act as tools to eliminate obstacles that prevent clear understanding.",
                text_ar: "[صح أم خطأ] تعمل مهارات الاتصال كأدوات لإزالة العقبات التي تمنع الفهم الواضح.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "These skills help bridge the gap between sender and receiver.",
                explanation_ar: "تساعد هذه المهارات في ردم الفجوة بين المرسل والمستقبل."
            },
            {
                id: "comm-s12-18",
                text: "[True or False] The \"Source\" of the communication is the person who receives the information.",
                text_ar: "[صح أم خطأ] \"مصدر\" الاتصال هو الشخص الذي يستلم المعلومات.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "The source is the sender/originator, not the receiver.",
                explanation_ar: "المصدر هو المرسل/المنشئ، وليس المستقبل."
            },
            {
                id: "comm-s12-19",
                text: "[True or False] There must be a \"Message\" for communication to have a purpose or cause.",
                text_ar: "[صح أم خطأ] يجب أن تكون هناك \"رسالة\" لكي يكون للاتصال غرض أو سبب.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "The message is the core content being communicated.",
                explanation_ar: "الرسالة هي المحتوى الجوهري الذي يتم نقله."
            },
            {
                id: "comm-s12-20",
                text: "[True or False] Information should be prepared (encoded) before it is sent to another party.",
                text_ar: "[صح أم خطأ] يجب إعداد المعلومات (ترميزها) قبل إرسالها إلى طرف آخر.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Encoding is a vital preparatory step in the communication cycle.",
                explanation_ar: "الترميز خطوة تحضيرية حيوية في دورة الاتصال."
            },
            {
                id: "comm-s12-21",
                text: "[True or False] The \"Channel\" is only restricted to electronic emails.",
                text_ar: "[صح أم خطأ] تقتصر \"القناة\" فقط على رسائل البريد الإلكتروني.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Channels can be face-to-face, written, telephonic, or digital.",
                explanation_ar: "يمكن أن تكون القنوات مواجهة لوجه، أو مكتوبة، أو هاتفية، أو رقمية."
            },
            {
                id: "comm-s12-22",
                text: "[True or False] Decoding happens at the beginning of the communication process before the message is sent.",
                text_ar: "[صح أم خطأ] يحدث فك التشفير في بداية عملية الاتصال قبل إرسال الرسالة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Decoding is done by the receiver after the message is sent.",
                explanation_ar: "فك التشفير يقوم به المستقبل بعد إرسال الرسالة."
            },
            {
                id: "comm-s12-23",
                text: "[True or False] Asking clarifying questions is a part of the decoding process.",
                text_ar: "[صح أم خطأ] طرح أسئلة توضيحية هو جزء من عملية فك التشفير.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Questions help the receiver accurately interpret the sender's meaning.",
                explanation_ar: "تساعد الأسئلة المستقبل في تفسير معنى المرسل بدقة."
            },
            {
                id: "comm-s12-24",
                text: "[True or False] A sender does not need to consider the desired result of the receiver.",
                text_ar: "[صح أم خطأ] لا يحتاج المرسل إلى التفكير في النتيجة المرجوة من المستقبل.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Considering the desired outcome is essential for effective communication.",
                explanation_ar: "التفكير في النتيجة المرجوة أمر ضروري للاتصال الفعال."
            },
            {
                id: "comm-s12-25",
                text: "[True or False] Feedback is an essential part of the communication cycle to evaluate its success.",
                text_ar: "[صح أم خطأ] التغذية الراجعة جزء أساسي من دورة الاتصال لتقييم نجاحها.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Without feedback, the sender won't know if the message was successful.",
                explanation_ar: "بدون تغذية راجعة، لن يعرف المرسل ما إذا كانت الرسالة ناجحة أم لا."
            },
            {
                id: "comm-s12-26",
                text: "[True or False] Context only involves the environment the sender is in, regardless of the audience's environment.",
                text_ar: "[صح أم خطأ] السياق يشمل فقط البيئة التي يتواجد فيها المرسل، بصرف النظر عن بيئة الجمهور.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Context involves the shared environment and relationship of all parties.",
                explanation_ar: "يشمل السياق البيئة المشتركة والعلاقة بين جميع الأطراف."
            },
            {
                id: "comm-s12-27",
                text: "[True or False] Reading body language is a form of feedback in face-to-face interactions.",
                text_ar: "[صح أم خطأ] قراءة لغة الجسد هي شكل من أشكال التغذية الراجعة في التفاعلات وجهاً لوجه.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Non-verbal reactions provide immediate feedback to the speaker.",
                explanation_ar: "توفر ردود الفعل غير اللفظية تغذية راجعة فورية للمتحدث."
            },
            {
                id: "comm-s12-28",
                text: "[True or False] Effective communication involves multiple stages rather than just a single action.",
                text_ar: "[صح أم خطأ] يتضمن الاتصال الفعال مراحل متعددة بدلاً من مجرد إجراء واحد.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Communication is a process involving encoding, transmission, decoding, and feedback.",
                explanation_ar: "الاتصال هو عملية تشمل الترميز والنقل وفك التشفير والتغذية الراجعة."
            }
        ]
    },
    {
        id: "comm-slide-3",
        title: "Communication Skills (Slide 3)",
        title_ar: "مهارات الاتصال (سلايد 3)",
        description: "Focuses on types of communication: Intrapersonal, Interpersonal, Small Group, Public, Mass, and Non-Verbal.",
        description_ar: "يركز على أنواع الاتصال: الذاتي، الشخصي، المجموعات الصغيرة، العام، الجماهيري، وغير اللفظي.",
        icon: "👥",
        questions: [
            {
                id: "comm-s3-1",
                text: "Which type of communication occurs exclusively within an individual's own mind, such as solving a problem or dreaming?",
                text_ar: "أي نوع من الاتصال يحدث حصرياً داخل عقل الفرد نفسه، مثل حل مشكلة أو الحلم؟",
                options: ["Interpersonal Communication", "Intrapersonal Communication", "Public Communication", "Mass Communication"],
                options_ar: ["الاتصال الشخصي", "الاتصال الذاتي (Intrapersonal)", "الاتصال العام", "الاتصال الجماهيري"],
                correct: 1,
                explanation: "Intrapersonal communication refers to the internal dialogue and thought processes within oneself.",
                explanation_ar: "الاتصال الذاتي يشير إلى الحوار الداخلي وعمليات التفكير داخل النفس."
            },
            {
                id: "comm-s3-2",
                text: "Interpersonal Communication is characterized by the exchange of information and ideas between:",
                text_ar: "يتميز الاتصال الشخصي (Interpersonal) بتبادل المعلومات والأفكار بين:",
                options: ["Only one person and their inner self", "Two or more people through verbal or non-verbal methods", "A speaker and a massive audience via television", "Members of a small committee only"],
                options_ar: ["شخص واحد ونفسه فقط", "شخصين أو أكثر من خلال الأساليب اللفظية أو غير اللفظية", "متحدث وجمهور ضخم عبر التلفزيون", "أعضاء لجنة صغيرة فقط"],
                correct: 1,
                explanation: "Interpersonal communication occurs between two or more individuals using various channels.",
                explanation_ar: "يحدث الاتصال الشخصي بين فردين أو أكثر باستخدام قنوات متنوعة."
            },
            {
                id: "comm-s3-3",
                text: "\"Small Group Communication\" typically involves interactions among how many people?",
                text_ar: "عادةً ما يتضمن \"اتصال المجموعات الصغيرة\" تفاعلات بين كم عدد الأشخاص؟",
                options: ["Exactly two people", "Three or more people connected by a common purpose", "Only people within the same family", "An unlimited number of people via social media"],
                options_ar: ["شخصين بالضبط", "ثلاثة أشخاص أو أكثر يجمعهم هدف مشترك", "الأشخاص داخل نفس العائلة فقط", "عدد غير محدود من الأشخاص عبر وسائل التواصل الاجتماعي"],
                correct: 1,
                explanation: "Small group communication involves 3+ people who share a common goal or identity.",
                explanation_ar: "يتضمن اتصال المجموعات الصغيرة 3 أشخاص أو أكثر يتشاركون هدفاً أو هوية واحدة."
            },
            {
                id: "comm-s3-4",
                text: "Shared identity, mutual influence, and regular meetings are key characteristics of:",
                text_ar: "الهوية المشتركة والتأثير المتبادل والاجتماعات المنتظمة هي خصائص رئيسية لـ:",
                options: ["Public Speaking", "Intrapersonal Communication", "Small Group Communication", "Mass Communication"],
                options_ar: ["الخطابة العامة", "الاتصال الذاتي", "اتصال المجموعات الصغيرة", "الاتصال الجماهيري"],
                correct: 2,
                explanation: "These traits define the collaborative nature of small group interactions.",
                explanation_ar: "تحدد هذه السمات الطبيعة التعاونية لتفاعلات المجموعات الصغيرة."
            },
            {
                id: "comm-s3-5",
                text: "Strategic communication used to convey ideas, programs, or presentations to the masses or niche audiences is called:",
                text_ar: "الاتصال الاستراتيجي المستخدم لنقل الأفكار أو البرامج أو العروض التقديمية للجماهير أو فئات محددة يسمى:",
                options: ["Intrapersonal Communication", "Private Communication", "Public Communication or Public Speaking", "Personal Communication"],
                options_ar: ["الاتصال الذاتي", "الاتصال الخاص", "الاتصال العام أو الخطابة العامة", "الاتصال الشخصي"],
                correct: 2,
                explanation: "Public communication is designed to reach many people, often through a structured presentation.",
                explanation_ar: "الاتصال العام مصمم للوصول إلى العديد من الأشخاص، غالباً من خلال عرض تقديمي منظم."
            },
            {
                id: "comm-s3-6",
                text: "Which field considers not only how and why a message is created but also the medium (like TV or Newspapers) used to send it?",
                text_ar: "أي مجال يأخذ في الاعتبار ليس فقط كيف ولماذا نُشئت الرسالة، بل أيضاً الوسيط (مثل التلفزيون أو الصحف) المستخدم لإرسالها؟",
                options: ["Small Group Communication", "Mass Communication", "Non-Verbal Communication", "Interpersonal Communication"],
                options_ar: ["اتصال المجموعات الصغيرة", "الاتصال الجماهيري (Mass Communication)", "الاتصال غير اللفظي", "الاتصال الشخصي"],
                correct: 1,
                explanation: "Mass communication study involves the analysis of messages transmitted via media to large audiences.",
                explanation_ar: "تتضمن دراسة الاتصال الجماهيري تحليل الرسائل المنقولة عبر وسائل الإعلام إلى جماهير كبيرة."
            },
            {
                id: "comm-s3-7",
                text: "\"Non-Verbal Communication\" is the process of conveying information about needs, intentions, and thoughts without using:",
                text_ar: "\"الاتصال غير اللفظي\" هو عملية نقل معلومات حول الاحتياجات والنوايا والأفكار دون استخدام:",
                options: ["Body language", "Verbal language", "Intentions", "Attitudes"],
                options_ar: ["لغة الجسد", "اللغة اللفظية (Verbal)", "النوايا", "المواقف"],
                correct: 1,
                explanation: "Non-verbal communication relies on body language, tone, and facial expressions instead of words.",
                explanation_ar: "يعتمد الاتصال غير اللفظي على لغة الجسد، والنبرة، وتعبيرات الوجه بدلاً من الكلمات."
            },
            {
                id: "comm-s3-8",
                text: "Which of the following is considered a medium for \"Mass Communication\"?",
                text_ar: "أي مما يلي يعتبر وسيلة لـ \"الاتصال الجماهيري\"؟",
                options: ["Personal thoughts", "One-on-one whispering", "Magazines and Newspapers", "Inner dreams"],
                options_ar: ["الأفكار الشخصية", "الهمس لشخص واحد", "المجلات والصحف", "الأحلام الداخلية"],
                correct: 2,
                explanation: "Magazines and newspapers are examples of print media used in mass communication.",
                explanation_ar: "المجلات والصحف هي أمثلة على الوسائل المطبوعة المستخدمة في الاتصال الجماهيري."
            },
            {
                id: "comm-s3-9",
                text: "[True or False] Thinking about what to have for dinner is an example of Interpersonal Communication.",
                text_ar: "[صح أم خطأ] التفكير فيما ستتناوله على العشاء هو مثال على الاتصال الشخصي (Interpersonal).",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "It is an example of Intrapersonal communication since it happens within oneself.",
                explanation_ar: "هذا مثال على الاتصال الذاتي (Intrapersonal) لأنه يحدث داخل النفس."
            },
            {
                id: "comm-s3-10",
                text: "[True or False] Interpersonal communication can be conducted through both verbal and non-verbal methods.",
                text_ar: "[صح أم خطأ] يمكن إجراء الاتصال الشخصي من خلال كل من الأساليب اللفظية وغير اللفظية.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Interpersonal interaction includes speech, as well as body language and tone.",
                explanation_ar: "يشمل التفاعل الشخصي الكلام، بالإضافة إلى لغة الجسد ونبرة الصوت."
            },
            {
                id: "comm-s3-11",
                text: "[True or False] A personnel committee or an audit committee are examples of small group communication.",
                text_ar: "[صح أم خطأ] لجنة الموظفين أو لجنة التدقيق هي أمثلة على اتصال المجموعات الصغيرة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Committees are specialized small groups working toward a common goal.",
                explanation_ar: "اللجان هي مجموعات صغيرة متخصصة تعمل نحو هدف مشترك."
            },
            {
                id: "comm-s3-12",
                text: "[True or False] Public communication is primarily used for private, one-on-one conversations between friends.",
                text_ar: "[صح أم خطأ] يُستخدم الاتصال العام في المقام الأول لإجراء محادثات خاصة وجهاً لوجه بين الأصدقاء.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Public communication is for speaking to an audience, not private one-on-one chats.",
                explanation_ar: "الاتصال العام مخصص للتحدث أمام الجمهور، وليس للمحادثات الخاصة الفردية."
            },
            {
                id: "comm-s3-13",
                text: "[True or False] Mass communication involves analyzing messages sent to large audiences via verbal and written media.",
                text_ar: "[صح أم خطأ] يتضمن الاتصال الجماهيري تحليل الرسائل المرسلة إلى جماهير كبيرة عبر وسائل الإعلام اللفظية والمكتوبة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Analyzing the creation and transmission of messages to the public is the core of mass communication study.",
                explanation_ar: "تحليل إنشاء ونقل الرسائل إلى الجمهور هو جوهر دراسة الاتصال الجماهيري."
            },
            {
                id: "comm-s3-14",
                text: "[True or False] Non-verbal communication includes the way beings convey their attitudes and thoughts using only written words.",
                text_ar: "[صح أم خطأ] يشمل الاتصال غير اللفظي الطريقة التي تنقل بها الكائنات مواقفها وأفكارها باستخدام الكلمات المكتوبة فقط.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Non-verbal communication explicitly excludes the use of verbal or written words.",
                explanation_ar: "الاتصال غير اللفظي يستبعد صراحةً استخدام الكلمات اللفظية أو المكتوبة."
            },
            {
                id: "comm-s3-15",
                text: "[True or False] In small group communication, the members are connected through a shared identity and mutual influence.",
                text_ar: "[صح أم خطأ] في اتصال المجموعات الصغيرة، يرتبط الأعضاء من خلال هوية مشتركة وتأثير متبادل.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "This shared bond distinguishes a small group from a random collection of people.",
                explanation_ar: "هذا الرابط المشترك هو ما يميز المجموعة الصغيرة عن مجرد مجموعة عشوائية من الناس."
            },
            {
                id: "comm-s3-16",
                text: "[True or False] Mass communication is a narrow field that only cares about the content of the message, regardless of the medium.",
                text_ar: "[صح أم خطأ] الاتصال الجماهيري هو مجال ضيق يهتم فقط بمحتوى الرسالة، بغض النظر عن الوسيلة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Mass communication is a broad field that considers both the message content and the medium (TV, radio, etc.).",
                explanation_ar: "الاتصال الجماهيري مجال واسع يأخذ في الاعتبار محتوى الرسالة والوسيلة (تلفزيون، راديو، إلخ)."
            },
            {
                id: "comm-s3-17",
                text: "[True or False] Intrapersonal communication involves analyzing your own thought processes or beliefs.",
                text_ar: "[صح أم خطأ] يتضمن الاتصال الذاتي (Intrapersonal) تحليل عمليات التفكير أو المعتقدات الخاصة بك.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "It is the communication that happens within a person's individual mental space.",
                explanation_ar: "هو الاتصال الذي يحدث داخل الفضاء الذهني الفردي للشخص."
            },
            {
                id: "comm-s3-18",
                text: "[True or False] Strategic communication to the public, such as propaganda or data presentations, falls under Public Communication.",
                text_ar: "[صح أم خطأ] الاتصال الاستراتيجي للجمهور، مثل الدعاية أو عروض البيانات، يندرج تحت الاتصال العام.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Public communication encompasses planned presentations to large or niche audiences.",
                explanation_ar: "يشمل الاتصال العام العروض التقديمية المخطط لها للجماهير الكبيرة أو المحددة."
            }
        ]
    },
    {
        id: "comm-meetings",
        title: "Effective Meetings (Slide 4)",
        title_ar: "الاجتماعات الفعالة (سلايد 4)",
        description: "Covers roles (Chairperson, Secretary, Members), purposes of meetings, formal vs. informal meetings, and agendas.",
        description_ar: "يغطي أدوار (الرئيس، السكرتير، الأعضاء)، أغراض الاجتماعات، الاجتماعات الرسمية مقابل غير الرسمية، وجداول الأعمال.",
        icon: "🤝",
        questions: [
            {
                id: "comm-mt-1",
                text: "Who is responsible for providing the policy and procedure for a meeting?",
                text_ar: "من المسؤول عن توفير السياسة والإجراءات الخاصة بالاجتماع؟",
                options: ["The Chairperson", "The Organization", "The Secretary", "The Members"],
                options_ar: ["رئيس الجلسة", "المؤسسة (The Organization)", "السكرتير", "الأعضاء"],
                correct: 1,
                explanation: "The organization provides the framework, while the chairperson implements it.",
                explanation_ar: "المؤسسة هي التي تضع الإطار العام، بينما يقوم رئيس الجلسة بتنفيذه."
            },
            {
                id: "comm-mt-2",
                text: "The responsibility for organizing and running the meeting according to standing orders lies with:",
                text_ar: "تقع مسؤولية تنظيم وإدارة الاجتماع وفقاً للأوامر القائمة (Standing Orders) على عاتق:",
                options: ["The Organization", "The Meeting's Executive", "Every member equally", "The audience"],
                options_ar: ["المؤسسة", "اللجنة التنفيذية للاجتماع", "كل عضو بالتساوي", "الجمهور"],
                correct: 1,
                explanation: "The executive team (Chairperson/Secretary) is tasked with the practical running of the meeting.",
                explanation_ar: "الفريق التنفيذي (الرئيس/السكرتير) مكلف بالإدارة العملية للاجتماع."
            },
            {
                id: "comm-mt-3",
                text: "What is required from \"Members\" during a meeting?",
                text_ar: "ما هو المطلوب من \"الأعضاء\" خلال الاجتماع؟",
                options: ["To just listen and stay silent", "To take part in decision-making and contribute expertise", "To write the final policy", "To only attend the opening session"],
                options_ar: ["مجرد الاستماع والبقاء صامتين", "المشاركة في اتخاذ القرار والمساهمة بخبراتهم", "كتابة السياسة النهائية", "حضور الجلسة الافتتاحية فقط"],
                correct: 1,
                explanation: "Members should be active participants, adding value through their knowledge.",
                explanation_ar: "يجب أن يكون الأعضاء مشاركين نشطين، يضيفون قيمة من خلال معرفتهم."
            },
            {
                id: "comm-mt-4",
                text: "Which of the following is NOT a purpose of a meeting mentioned in the slides?",
                text_ar: "أي مما يلي ليس من أغراض الاجتماع المذكورة في السلايدات؟",
                options: ["Provide and clarify information", "Encourage problem-solving", "Personal social networking only", "Give and receive feedback"],
                options_ar: ["تقديم وتوضيح المعلومات", "تشجيع حل المشكلات", "التواصل الاجتماعي الشخصي فقط", "تقديم وتلقي التغذية الراجعة"],
                correct: 2,
                explanation: "While social networking may happen, it is not the primary formal purpose of a professional meeting.",
                explanation_ar: "بينما قد يحدث تواصل اجتماعي، إلا أنه ليس الغرض الرسمي الأساسي للاجتماع المهني."
            },
            {
                id: "comm-mt-5",
                text: "Formal meetings are characterized by:",
                text_ar: "تتميز الاجتماعات الرسمية بـ:",
                options: ["Lack of any rules or regulations", "Having rules and procedures that provide a framework", "Excluding most members from participation", "Being highly disorganized"],
                options_ar: ["نقص أي قواعد أو لوائح", "وجود قواعد وإجراءات توفر إطاراً للعمل", "استبعاد معظم الأعضاء من المشاركة", "كونها غير منظمة للغاية"],
                correct: 1,
                explanation: "Formality implies a structured approach with defined procedures.",
                explanation_ar: "الرسمية تعني اتباع نهج منظم مع إجراءات محددة."
            },
            {
                id: "comm-mt-6",
                text: "The leader’s role in a formal meeting is to:",
                text_ar: "دور القائد في الاجتماع الرسمي هو:",
                options: ["Control the entire discussion without input", "Manage the meeting and the discussion", "Avoid any democratic procedures", "Only record the minutes"],
                options_ar: ["التحكم في النقاش بالكامل دون مدخلات", "إدارة الاجتماع والنقاش", "تجنب أي إجراءات ديمقراطية", "تسجيل المحاضر فقط"],
                correct: 1,
                explanation: "The leader facilitates the flow of discussion and ensures the agenda is followed.",
                explanation_ar: "يسهل القائد تدفق النقاش ويضمن اتباع جدول الأعمال."
            },
            {
                id: "comm-mt-7",
                text: "Informal meetings are primarily held to:",
                text_ar: "تعقد الاجتماعات غير الرسمية في المقام الأول من أجل:",
                options: ["Follow strict legal formalities", "Exchange information, solve problems, and set goals", "Avoid any type of group discussion", "Replace formal contracts"],
                options_ar: ["اتباع الشكليات القانونية الصارمة", "تبادل المعلومات وحل المشكلات ووضع الأهداف", "تجنب أي نوع من النقاش الجماعي", "استبدال العقود الرسمية"],
                correct: 1,
                explanation: "Informal meetings focus on collaborative work and communication without rigid structure.",
                explanation_ar: "تركيز الاجتماعات غير الرسمية يكون على العمل التعاوني والتواصل دون هيكل جامد."
            },
            {
                id: "comm-mt-8",
                text: "A \"Meeting Agenda\" is best described as:",
                text_ar: "أفضل وصف لـ \"جدول أعمال الاجتماع\" هو:",
                options: ["A list of all past meetings", "A schedule or list of items to be discussed", "A list of employees' salaries", "A summary of the meeting's results"],
                options_ar: ["قائمة بجميع الاجتماعات السابقة", "جدول أو قائمة بالنقاط المقرر مناقشتها", "قائمة برواتب الموظفين", "ملخص لنتائج الاجتماع"],
                correct: 1,
                explanation: "The agenda is the roadmap for what will be covered during the meeting.",
                explanation_ar: "جدول الأعمال هو خريطة الطريق لما سيتم تغطيته خلال الاجتماع."
            },
            {
                id: "comm-mt-9",
                text: "In a \"Regular Meeting Agenda\", what should be included at the beginning?",
                text_ar: "في \"جدول أعمال الاجتماع الدوري\"، ماذا يجب أن يُدرج في البداية؟",
                options: ["The final decisions", "The date, time, and place of the meeting", "The budget of the company", "The list of retired members"],
                options_ar: ["القرارات النهائية", "التاريخ والوقت ومكان الاجتماع", "ميزانية الشركة", "قائمة الأعضاء المتقاعدين"],
                correct: 1,
                explanation: "Logistical details like date, time, and location are essential header information.",
                explanation_ar: "التفاصيل اللوجستية مثل التاريخ والوقت والموقع هي معلومات ترويسة أساسية."
            },
            {
                id: "comm-mt-10",
                text: "During the meeting, the chairperson should deal with potential conflicts:",
                text_ar: "خلال الاجتماع، يجب على رئيس الجلسة التعامل مع النزاعات المحتملة:",
                options: ["After the meeting ends", "Only if someone gets angry", "Before they become serious", "By ignoring them completely"],
                options_ar: ["بعد انتهاء الاجتماع", "فقط إذا غضب شخص ما", "قبل أن تصبح خطيرة", "من خلال تجاهلها تماماً"],
                correct: 2,
                explanation: "Early intervention prevents conflicts from disrupting the meeting's progress.",
                explanation_ar: "التدخل المبكر يمنع النزاعات من تعطيل سير الاجتماع."
            },
            {
                id: "comm-mt-11",
                text: "If the business of the meeting cannot be completed, the leader should:",
                text_ar: "إذا تعذر إكمال أعمال الاجتماع، يجب على القائد:",
                options: ["Cancel the meeting results", "Adjourn the business to the next meeting", "Stay until midnight to finish", "Delete the remaining topics"],
                options_ar: ["إلغاء نتائج الاجتماع", "تأجيل الأعمال إلى الاجتماع القادم", "البقاء حتى منتصف الليل للانتهاء", "حذف المواضيع المتبقية"],
                correct: 1,
                explanation: "Unfinished items are typically moved to the next scheduled meeting's agenda.",
                explanation_ar: "عادةً ما يتم نقل البنود غير المنتهية إلى جدول أعمال الاجتماع المجدول التالي."
            },
            {
                id: "comm-mt-12",
                text: "[True or False] It is the chairperson's responsibility, not the organization's, to provide policies.",
                text_ar: "[صح أم خطأ] مسؤولية توفير السياسات تقع على عاتق رئيس الجلسة، وليس المؤسسة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "The organization is responsible for the overall policy/framework.",
                explanation_ar: "المؤسسة هي المسؤولة عن السياسة العامة/الإطار العملي."
            },
            {
                id: "comm-mt-13",
                text: "[True or False] Meetings can be used to provide training to members.",
                text_ar: "[صح أم خطأ] يمكن استخدام الاجتماعات لتقديم التدريب للأعضاء.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Training and development are valid professional purposes for a meeting.",
                explanation_ar: "التدريب والتطوير من الأغراض المهنية المشروعة للاجتماع."
            },
            {
                id: "comm-mt-14",
                text: "[True or False] Informal meetings are more structured and rigid than formal meetings.",
                text_ar: "[صح أم خطأ] الاجتماعات غير الرسمية أكثر تنظيماً وجموداً من الاجتماعات الرسمية.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Formal meetings have a more rigid structure; informal ones are flexible.",
                explanation_ar: "الاجتماعات الرسمية لها هيكل أكثر جموداً؛ أما غير الرسمية فهي مرنة."
            },
            {
                id: "comm-mt-15",
                text: "[True or False] Formal meetings should be conducted in a democratic way.",
                text_ar: "[صح أم خطأ] يجب إدارة الاجتماعات الرسمية بطريقة ديمقراطية.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Democratic participation ensures all voices are heard within the formal structure.",
                explanation_ar: "تضمن المشاركة الديمقراطية سماع جميع الأصوات داخل الإطار الرسمي."
            },
            {
                id: "comm-mt-16",
                text: "[True or False] Minutes of the meeting are the official written record of what happened during the meeting.",
                text_ar: "[صح أم خطأ] محاضر الاجتماع هي السجل الكتابي الرسمي لما حدث خلال الاجتماع.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Minutes serve as the legal and historical record of decisions and discussions.",
                explanation_ar: "تعمل المحاضر كجل قانوني وتاريخي للقرارات والنقاشات."
            },
            {
                id: "comm-mt-17",
                text: "[True or False] The chairperson must encourage everyone’s participation during the discussion.",
                text_ar: "[صح أم خطأ] يجب على رئيس الجلسة تشجيع مشاركة الجميع أثناء النقاش.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Facilitating inclusive discussion is a primary duty of the chairperson.",
                explanation_ar: "تسهيل النقاش الشامل هو أحد الواجبات الأساسية لرئيس الجلسة."
            },
            {
                id: "comm-mt-18",
                text: "[True or False] An effective meeting does not necessarily need a determined purpose.",
                text_ar: "[صح أم خطأ] الاجتماع الفعال لا يحتاج بالضرورة إلى غرض محدد.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "A clear purpose is essential for any meeting to be effective and efficient.",
                explanation_ar: "الغرض الواضح ضروري لأي اجتماع ليكون فعالاً وكفؤاً."
            },
            {
                id: "comm-mt-19",
                text: "[True or False] One of the final steps in a meeting is determining the date and place of the next meeting.",
                text_ar: "[صح أم خطأ] إحدى الخطوات النهائية في الاجتماع هي تحديد تاريخ ومكان الاجتماع القادم.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Planning for the future ensures continuity and momentum.",
                explanation_ar: "التخطيط للمستقبل يضمن الاستمرارية والزخم العملي."
            },
            {
                id: "comm-mt-20",
                text: "[True or False] A meeting agenda helps keep the discussion on track and manages time effectively.",
                text_ar: "[صح أم خطأ] يساعد جدول أعمال الاجتماع في إبقاء النقاش في مساره الصحيح وإدارة الوقت بفعالية.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "The agenda acts as a control mechanism for the meeting's scope and timing.",
                explanation_ar: "يعمل جدول الأعمال كآلية تحكم لنطاق وتوقيت الاجتماع."
            },
            {
                id: "comm-mt-21",
                text: "[True or False] Members should only contribute to areas where they have expertise.",
                text_ar: "[صح أم خطأ] يجب على الأعضاء المساهمة فقط في المجالات التي لديهم خبرة فيها.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Contributing based on expertise ensures high-quality input and valuable decisions.",
                explanation_ar: "المساهمة بناءً على الخبرة تضمن مدخلات عالية الجودة وقرارات قيمة."
            },
            {
                id: "comm-mt-22",
                text: "[True or False] Preparation is the key to an effective meeting.",
                text_ar: "[صح أم خطأ] التحضير هو المفتاح لاجتماع فعال.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Prior planning and review by all parties lead to better outcomes.",
                explanation_ar: "التخطيط المسبق والمراجعة من قبل جميع الأطراف تؤدي إلى نتائج أفضل."
            },
            {
                id: "comm-mt-23",
                text: "[True or False] The chairperson should summarize all motions and amendments during the meeting.",
                text_ar: "[صح أم خطأ] يجب على رئيس الجلسة تلخيص جميع الاقتراحات والتعديلات خلال الاجتماع.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Summarizing helps ensure clarity and consensus before moving to a vote.",
                explanation_ar: "يساعد التلخيص في ضمان الوضوح والإجماع قبل الانتقال للتصويت."
            }
        ]
    },
    {
        id: "comm-presentations",
        title: "Presentations (Slide 5)",
        title_ar: "العروض التقديمية (سلايد 5)",
        description: "Focuses on the fundamentals of effective presentations: preparation, delivery, and handling questions.",
        description_ar: "يركز على أساسيات العروض التقديمية الفعالة: التحضير، الإلقاء، والتعامل مع الأسئلة بشكل احترافي.",
        icon: "🎤",
        questions: [
            {
                id: "comm-pres-1",
                text: "A presentation is a means of communication that can be adapted to:",
                text_ar: "العرض التقديمي هو وسيلة اتصال يمكن تكييفها مع:",
                options: ["Only personal thoughts", "Various speaking situations like addressing a meeting or briefing a team", "Written reports only", "Silent reading"],
                options_ar: ["الأفكار الشخصية فقط", "مواقف التحدث المختلفة مثل إلقاء كلمة في اجتماع أو إطلاع فريق", "التقارير المكتوبة فقط", "القراءة الصامتة"],
                correct: 1,
                explanation: "Presentations are versatile and used in many professional contexts.",
                explanation_ar: "العروض التقديمية متعددة الاستخدامات وتستخدم في سياقات مهنية عديدة."
            },
            {
                id: "comm-pres-2",
                text: "To make an effective presentation, what are the two main things to do?",
                text_ar: "لتقديم عرض تقديمي فعال، ما هما الشيئان الأساسيان اللذان يجب القيام بهما؟",
                options: ["Wear expensive clothes and speak fast", "Prepare your material and practice your delivery", "Use only images and avoid text", "Read from a script and avoid eye contact"],
                options_ar: ["ارتداء ملابس غالية والكلام بسرعة", "تحضير المادة والتدرب على الإلقاء", "استخدام الصور فقط وتجنب النصوص", "القراءة من ورقة وتجنب التواصل البصري"],
                correct: 1,
                explanation: "Both content preparation and delivery practice are critical for success.",
                explanation_ar: "كلاً من تحضير المحتوى والتدريب على الإلقاء ضروريان للنجاح."
            },
            {
                id: "comm-pres-3",
                text: "The three sections for discussing a presentation are:",
                text_ar: "الأقسام الثلاثة لمناقشة العرض التقديمي هي:",
                options: ["Writing, Printing, and Reading", "Preparing, Delivering, and Handling Questions", "Recording, Editing, and Posting", "Listening, Summarizing, and Testing"],
                options_ar: ["الكتابة، الطباعة، والقراءة", "التحضير، الإلقاء، والتعامل مع الأسئلة", "التسجيل، التحرير، والنشر", "الاستماع، التلخيص، والاختبار"],
                correct: 1,
                explanation: "An effective presentation cycle involves these three main stages.",
                explanation_ar: "تتكون دورة العرض التقديمي الفعال من هذه المراحل الثلاث الرئيسية."
            },
            {
                id: "comm-pres-4",
                text: "When setting your objective, the main purpose of your talk could be to:",
                text_ar: "عند تحديد هدفك، يمكن أن يكون الغرض الرئيسي من حديثك هو:",
                options: ["Inform or persuade", "Motivate or change things", "Both A and B", "None of the above"],
                options_ar: ["الإخبار أو الإقناع", "التحفيز أو تغيير الأشياء", "كلاهما (A و B)", "لا شيء مما سبق"],
                correct: 2,
                explanation: "Presentation objectives can range from sharing information to motivating action.",
                explanation_ar: "يمكن أن تتراوح أهداف العرض التقديمي من مشاركة المعلومات إلى التحفيز على اتخاذ إجراء."
            },
            {
                id: "comm-pres-5",
                text: "Which of the following is a step in \"Preparing a Presentation\"?",
                text_ar: "أي مما يلي يعد خطوة في \"تحضير العرض التقديمي\"؟",
                options: ["Select a topic", "Understand your audience", "Develop a plan", "All of the above"],
                options_ar: ["اختيار موضوع", "فهم جمهورك", "تطوير خطة", "كل ما سبق"],
                correct: 3,
                explanation: "Preparation involves selecting a topic, audience analysis, and strategic planning.",
                explanation_ar: "يتضمن التحضير اختيار الموضوع، تحليل الجمهور، والتخطيط الاستراتيجي."
            },
            {
                id: "comm-pres-6",
                text: "If a question is irrelevant (off-subject), the presenter should:",
                text_ar: "إذا كان السؤال غير ذي صلة (خارج الموضوع)، يجب على المقدم:",
                options: ["Get angry at the questioner", "Politely offer to talk after the presentation or answer briefly", "Ignore the question completely", "Stop the presentation"],
                options_ar: ["الغضب من السائل", "العرض بلباقة للتحدث بعد العرض أو الإجابة باختصار", "تجاهل السؤال تماماً", "إيقاف العرض التقديمي"],
                correct: 1,
                explanation: "Handling irrelevant questions politely maintains professionalism.",
                explanation_ar: "التعامل مع الأسئلة غير المتعلقة بالموضوع بلباقة يحافظ على المهنية."
            },
            {
                id: "comm-pres-7",
                text: "If you are running out of time and a question requires a long answer, you should say:",
                text_ar: "إذا بدأ الوقت ينفد وكان السؤال يتطلب إجابة طويلة، يجب أن تقول:",
                options: ["\"I don't know the answer.\"", "\"Your question is too long.\"", "\"Perhaps we could deal with that later/after the presentation.\"", "\"Please leave the room.\""],
                options_ar: ["\"لا أعرف الإجابة\"", "\"سؤالك طويل جداً\"", "\"ربما يمكننا التعامل مع ذلك لاحقاً/بعد العرض\"", "\"يرجى مغادرة الغرفة\""],
                correct: 2,
                explanation: "Managing time is key, and long answers can be deferred to private discussions.",
                explanation_ar: "إدارة الوقت أمر أساسي، ويمكن تأجيل الإجابات الطويلة إلى نقاشات خاصة."
            },
            {
                id: "comm-pres-8",
                text: "If a member of the audience asks about a point you already explained, you should:",
                text_ar: "إذا سأل أحد الجمهور عن نقطة سبق شرحها، يجب عليك:",
                options: ["Politely ask if the rest of the audience found the point difficult", "Refuse to answer", "Tell them they weren't listening", "End the presentation immediately"],
                options_ar: ["السؤال بلباقة عما إذا كان بقية الجمهور وجدوا النقطة صعبة", "رفض الإجابة", "إخبارهم بأنهم لم يكونوا يستمعون", "إنهاء العرض فوراً"],
                correct: 0,
                explanation: "If much of the audience is confused, re-explain; if only one, offer to meet later.",
                explanation_ar: "إذا كان معظم الجمهور مشوشاً، أعِد الشرح؛ وإذا كان واحداً فقط، اعرض مقابلته لاحقاً."
            },
            {
                id: "comm-pres-9",
                text: "[True or False] A presentation is a means of communication adapted to various speaking situations.",
                text_ar: "[صح أم خطأ] العرض التقديمي هو وسيلة اتصال مُكيفة لمواقف التحدث المختلفة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Presentations are designed for flexibility across different professional scenarios.",
                explanation_ar: "صُممت العروض التقديمية لتمتاز بالمرونة عبر السيناريوهات المهنية المختلفة."
            },
            {
                id: "comm-pres-10",
                text: "[True or False] Preparing your material is more important than practicing your delivery.",
                text_ar: "[صح أم خطأ] تحضير مادتك أكثر أهمية من التدرب على إلقائك.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Both preparation and practice are equally essential for an effective presentation.",
                explanation_ar: "التحضير والتدريب كلاهما ضروريان بالتساوي لتقديم عرض فعال."
            },
            {
                id: "comm-pres-11",
                text: "[True or False] When preparing, the first step is to set the objective, even before selecting a topic.",
                text_ar: "[صح أم خطأ] عند التحضير، الخطوة الأولى هي تحديد الهدف حتى قبل اختيار الموضوع.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "The correct sequence is selecting a topic, then setting the objective.",
                explanation_ar: "التسلسل الصحيح هو اختيار الموضوع، ثم تحديد الهدف."
            },
            {
                id: "comm-pres-12",
                text: "[True or False] Understanding your audience is a key part of preparing a presentation.",
                text_ar: "[صح أم خطأ] فهم جمهورك جزء أساسي من تحضير العرض التقديمي.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Tailoring content to audience needs ensures better engagement and understanding.",
                explanation_ar: "تكييف المحتوى بما يتناسب مع احتياجات الجمهور يضمن تفاعلاً وفهماً أفضل."
            },
            {
                id: "comm-pres-13",
                text: "[True or False] You should always answer every question immediately, even if it is irrelevant to the topic.",
                text_ar: "[صح أم خطأ] يجب عليك دائماً الإجابة على كل سؤال على الفور، حتى لو لم يكن ذا صلة بالموضوع.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "Irrelevant questions should be deferred or answered briefly to keep the presentation on track.",
                explanation_ar: "يجب تأجيل الأسئلة غير ذات الصلة أو الإجابة عليها باختصار للحفاظ على مسار العرض."
            },
            {
                id: "comm-pres-14",
                text: "[True or False] If the majority of the audience understood a point, you can provide a brief answer to the person who didn't and offer to meet them later.",
                text_ar: "[صح أم خطأ] إذا فهمت أغلبية الجمهور نقطة ما، يمكنك تقديم إجابة مختصرة للشخص الذي لم يفهمها وعرض مقابلته لاحقاً.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "This respects the time of the rest of the audience while still being helpful.",
                explanation_ar: "هذا يحترم وقت بقية الجمهور مع بقائك مساعداً للسائل."
            },
            {
                id: "comm-pres-15",
                text: "[True or False] If you don't know the answer to a question, you should pretend that you do.",
                text_ar: "[صح أم خطأ] إذا لم تكن تعرف إجابة سؤال ما، فيجب عليك التظاهر بأنك تعرفها.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "It's better to admit you don't know and offer to find out than to give false information.",
                explanation_ar: "من الأفضل الاعتراف بعدم المعرفة والعرض للبحث عن الإجابة بدلاً من تقديم معلومات خاطئة."
            },
            {
                id: "comm-pres-16",
                text: "[True or False] Paraphrasing a difficult question in your own words can help clarify it before answering.",
                text_ar: "[صح أم خطأ] إعادة صياغة سؤال صعب بكلماتك الخاصة يمكن أن تساعد في توضيحه قبل الإجابة عليه.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "This ensures you understood the question correctly and gives you time to think.",
                explanation_ar: "هذا يضمن فهمك للسؤال بشكل صحيح ويعطيك وقتاً للتفكير."
            },
            {
                id: "comm-pres-17",
                text: "[True or False] \"Motivating the audience\" can be a valid objective for a presentation.",
                text_ar: "[صح أم خطأ] \"تحفيز الجمهور\" يمكن أن يكون هدفاً صحيحاً للعرض التقديمي.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Motivation and inspiration are common and effective presentation goals.",
                explanation_ar: "التحفيز والإلهام من أهداف العرض التقديمي الشائعة والفعالة."
            },
            {
                id: "comm-pres-18",
                text: "[True or False] Handling questions effectively is the final section of the presentation discussion.",
                text_ar: "[صح أم خطأ] التعامل مع الأسئلة بفعالية هو القسم الأخير من مناقشة العرض التقديمي.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Handling questions is naturally the final stage of the interaction.",
                explanation_ar: "التعامل مع الأسئلة هو بطبيعة الحال المرحلة النهائية من التفاعل."
            },
            {
                id: "comm-pres-19",
                text: "What is the very FIRST step in preparing a presentation?",
                text_ar: "ما هي الخطوة الأولى تماماً في التحضير للعرض التقديمي؟",
                options: ["Select a topic", "Set your objective", "Understand your audience", "Develop a plan"],
                options_ar: ["اختيار الموضوع", "تحديد الهدف", "فهم الجمهور", "تطوير الخطة"],
                correct: 0,
                explanation: "According to the slides, you must first select the topic before proceeding to other steps.",
                explanation_ar: "وفقاً للسلايدات، يجب عليك أولاً اختيار الموضوع قبل الانتقال للخطوات الأخرى."
            },
            {
                id: "comm-pres-20",
                text: "If the purpose of your talk is to make the audience \"differentiate between the economy in Yemen and Iraq,\" this is an example of:",
                text_ar: "إذا كان الغرض من حديثك هو جعل الجمهور \"يميز بين اقتصاد اليمن واقتصاد العراق\"، فهذا مثال على:",
                options: ["Selecting a topic", "Setting an objective", "Practicing delivery", "Handling a difficult question"],
                options_ar: ["اختيار موضوع", "تحديد هدف", "الممارسة على الإلقاء", "التعامل مع سؤال صعب"],
                correct: 1,
                explanation: "Defining what the audience should know or do after the talk is setting the objective.",
                explanation_ar: "تحديد ما يجب على الجمهور معرفته أو فعله بعد الحديث هو بمثابة تحديد الهدف."
            },
            {
                id: "comm-pres-21",
                text: "Which of these is NOT an objective of a presentation mentioned in the slides?",
                text_ar: "أي مما يلي ليس من أهداف العرض التقديمي المذكورة في السلايدات؟",
                options: ["To inform", "To persuade", "To motivate or change things", "To entertain only"],
                options_ar: ["للإخبار", "للإقناع", "للتحفيز أو تغيير الأشياء", "للترفيه فقط"],
                correct: 3,
                explanation: "Professional presentations focus on information, persuasion, motivation, or change.",
                explanation_ar: "تركز العروض التقديمية المهنية على الإخبار، أو الإقناع، أو التحفيز، أو التغيير."
            },
            {
                id: "comm-pres-22",
                text: "If you don't know the answer to a question, the slides suggest you should:",
                text_ar: "إذا لم تكن تعرف الإجابة على سؤال ما، تقترح السلايدات أنه يجب عليك:",
                options: ["Guess the answer", "Admit it and offer to find out, or ask if anyone in the audience knows", "Ignore the question and move to the next slide", "Tell the questioner that their question is bad"],
                options_ar: ["تخمين الإجابة", "الاعتراف بذلك والعرض بالبحث عن الإجابة، أو سؤال الجمهور عما إذا كان أحد يعرفها", "تجاهل السؤال والانتقال للسلايد التالي", "إخبار السائل بأن سؤاله سيء"],
                correct: 1,
                explanation: "Honesty and involving the audience or offering a follow-up are recommended strategies.",
                explanation_ar: "الصدق وإشراك الجمهور أو العرض بالمتابعة هي استراتيجيات موصى بها."
            },
            {
                id: "comm-pres-23",
                text: "To gain time to think about a difficult question, you can:",
                text_ar: "لكسب الوقت للتفكير في سؤال صعب، يمكنك:",
                options: ["Take a long break", "Ask the audience to leave", "Paraphrase the question in your own words", "Start the presentation from the beginning"],
                options_ar: ["أخذ قسط طويل من الراحة", "طلب مغادرة الجمهور", "إعادة صياغة السؤال بكلماتك الخاصة", "بدء العرض التقديمي من البداية"],
                correct: 2,
                explanation: "Paraphrasing clarifies the question and provides the speaker with thinking time.",
                explanation_ar: "إعادة الصياغة توضح السؤال وتوفر للمتحدث وقتاً للتفكير."
            },
            {
                id: "comm-pres-24",
                text: "Which of these is NOT one of the three main sections of a presentation discussion?",
                text_ar: "أي مما يلي ليس أحد الأقسام الثلاثة الرئيسية لمناقشة العرض التقديمي؟",
                options: ["Preparing the presentation", "Delivering the presentation", "Handling questions effectively", "Writing a post-presentation report"],
                options_ar: ["تحضير العرض التقديمي", "إلقاء العرض التقديمي", "التعامل مع الأسئلة بفعالية", "كتابة تقرير ما بعد العرض"],
                correct: 3,
                explanation: "The slides focus on Preparation, Delivery, and Questions.",
                explanation_ar: "تركز السلايدات على التحضير، والإلقاء، والأسئلة."
            },
            {
                id: "comm-pres-25",
                text: "[True or False] If a question is impossible to answer in the time available, you should offer to discuss it after the presentation.",
                text_ar: "[صح أم خطأ] إذا كان من المستحيل الإجابة على سؤال في الوقت المتاح، يجب عليك عرض مناقشته بعد العرض التقديمي.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Deferred discussion respects everyone's time while still addressing the query.",
                explanation_ar: "يؤدي تأجيل النقاش إلى احترام وقت الجميع مع معالجة الاستفسار."
            },
            {
                id: "comm-pres-26",
                text: "[True or False] You can ask the questioner to verify if your paraphrasing of their difficult question is correct.",
                text_ar: "[صح أم خطأ] يمكنك أن تطلب من السائل التحقق مما إذا كانت إعادة صياغتك لسؤاله الصعب صحيحة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Checking for understanding prevents incorrect answers.",
                explanation_ar: "التأكد من الفهم يمنع الإجابات غير الصحيحة."
            },
            {
                id: "comm-pres-27",
                text: "[True or False] If you don't know an answer, you can ask if any member of the audience has the information.",
                text_ar: "[صح أم خطأ] إذا كنت لا تعرف إجابة، يمكنك سؤال ما إذا كان لدى أي عضو من الجمهور المعلومة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Involving the audience can be a helpful and collaborative way to handle gaps in knowledge.",
                explanation_ar: "إشراك الجمهور يمكن أن يكون وسيلة مفيدة وتعاونية للتعامل مع الفجوات المعرفية."
            },
            {
                id: "comm-pres-28",
                text: "[True or False] Handling questions effectively is considered the first section of the presentation discussion.",
                text_ar: "[صح أم خطأ] يعتبر التعامل مع الأسئلة بفعالية هو القسم الأول من مناقشة العرض التقديمي.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "It is the third and final section described in the lecture.",
                explanation_ar: "إنه القسم الثالث والأخير الموصوف في المحاضرة."
            },
            {
                id: "comm-pres-29",
                text: "[True or False] Developing a plan is the final step in the preparation stage mentioned.",
                text_ar: "[صح أم خطأ] يعد تطوير خطة هو الخطوة الأخيرة في مرحلة التحضير المذكورة.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "The steps are: Topic, Objective, Audience, and finally Plan.",
                explanation_ar: "الخطوات هي: الموضوع، الهدف، الجمهور، وأخيراً الخطة."
            },
            {
                id: "comm-pres-30",
                text: "[True or False] If a question is \"off-subject,\" a good response is saying: \"That’s interesting, but I’d prefer not to answer that today.\"",
                text_ar: "[صح أم خطأ] إذا كان السؤال \"خارج الموضوع\"، فإن الاستجابة الجيدة هي قول: \"هذا أمر مثير للاهتمام، لكني أفضل عدم الإجابة على ذلك اليوم\".",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "Using polite phrases to stay on topic is a key skill.",
                explanation_ar: "استخدام عبارات لبقة للبقاء في صلب الموضوع هو مهارة أساسية."
            },
            {
                id: "comm-pres-31",
                text: "[True or False] Developing a plan is a step that comes after understanding your audience.",
                text_ar: "[صح أم خطأ] تطوير خطة هو خطوة تأتي بعد مرحلة فهم جمهورك.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 0,
                explanation: "You must understand the audience first to build a relevant plan.",
                explanation_ar: "يجب أن تفهم الجمهور أولاً لبناء خطة مناسبة."
            },
            {
                id: "comm-pres-32",
                text: "[True or False] Practicing your delivery is the very first step in the preparation stage.",
                text_ar: "[صح أم خطأ] التدرب على إلقائك هو أول خطوة تماماً في مرحلة التحضير.",
                options: ["True", "False"],
                options_ar: ["صحيح", "خاطئ"],
                correct: 1,
                explanation: "The first step is selecting a topic, not practicing delivery.",
                explanation_ar: "الخطوة الأولى هي اختيار الموضوع، وليس التدرب على الإلقاء."
            }
        ]
    }
];
