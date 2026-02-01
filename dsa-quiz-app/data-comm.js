const quizData = [
    {
        id: "comm-skills",
        title: "Communication Skills",
        title_ar: "مهارات الاتصال",
        description: "Full course questions on communication process, barriers, and English grammar.",
        description_ar: "أسئلة المادة كاملة: عملية الاتصال، العوائق، وقواعد اللغة الإنجليزية.",
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
                text_ar: "الـ __________ يشير إلى الفعل الذي قام به الفاعل.",
                options: ["Verb", "Adverb", "Noun", "Pronoun"],
                options_ar: ["الفعل (Verb)", "الظرف", "الاسم", "الضمير"],
                correct: 0,
                explanation: "The verb is the core of the sentence's action.",
                explanation_ar: "الفعل هو لب الحدث في الجملة."
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
            }
        ]
    }
];
