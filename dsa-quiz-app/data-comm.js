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
                options: ["TFT", "TTT", "FFF", "FTF"],
                options_ar: ["TFT", "TTT", "FFF", "FTF"],
                correct: 3,
                explanation: "1 is False (for study); 2 is False (decoding); 3 is True.",
                explanation_ar: "الأولى خاطئة (للدراسة)؛ الثانية خاطئة (فك تشفير)؛ الثالثة صحيحة."
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
                correct: 3,
                explanation: "1 is True; 2 is True (Source question might imply 2 is False or use a different layout, but usually both are True. Checked source: Answer is TFF, implying only 1 is true in their specific context or 3 is false).",
                explanation_ar: "الأولى صحيحة؛ الثانية صحيحة عادةً؛ الثالثة خاطئة (يجب كتابة الاسم كاملاً)."
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
                text: "True(T) or False(F):<br>1. Salutation is written with name if known.<br>2. Subject line states vacancy.<br>3. Sign and clear full name after.",
                text_ar: "صحيح (T) أو خاطئ (F):<br>1. التحية تكتب بجانب الاسم إذا كان معروفاً.<br>2. سطر الموضوع يوضح الوظيفة.<br>3. التوقيع ثم الاسم كاملاً بوضوح.",
                options: ["TTT", "FFF", "TFT", "TFF"],
                options_ar: ["TTT", "FFF", "TFT", "TFF"],
                correct: 0,
                explanation: "These are standard professional letter practices.",
                explanation_ar: "هذه ممارسات قياسية في الرسائل المهنية."
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
                text: "Semantic markers:<br>1. 'It is worth noting' indicates importance.<br>2. 'Primarily/Secondly' used for illustrations.<br>3. 'So/thus' express time relationship.",
                text_ar: "العلامات الدلالية:<br>1. 'من الجدير بالذكر' تدل على الأهمية.<br>2. 'أولاً/ثانياً' تستخدم للتوضيح.<br>3. 'لذا/بالتالي' تعبر عن علاقة زمنية.",
                options: ["TTT", "FFF", "FTF", "TFF"],
                options_ar: ["TTT", "FFF", "FTF", "TFF"],
                correct: 3,
                explanation: "1 is True; 2 is for sequencing (False for illustrations); 3 is for consequence (False for time).",
                explanation_ar: "الأولى صحيحة؛ الثانية للتسلسل وليس التوضيح؛ الثالثة للنتيجة وليست للزمن."
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
                correct: 1,
                explanation: "Reconstruction, Processing, and Interpreting meanining are typical stages. (Source uses B: 2-3-1)",
                explanation_ar: "إعادة البناء ثم المعالجة ثم إعطاء المعنى هي الخطوات المتبعة."
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
    }
];
