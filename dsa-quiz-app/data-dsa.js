const subjectInfo = {
    app_title: "DSA Master",
    app_title_ar: "أستاذ الخوارزميات",
    hero_title: "Master Data Structures",
    hero_title_ar: "أتقن هياكل البيانات",
    hero_subtitle: "Select a topic to test your knowledge with curated questions from top resources.",
    hero_subtitle_ar: "اختر موضوعاً لاختبار معرفتك بأسئلة مختارة من أفضل المصادر.",
    resources: [
        { name: "Trees (Tutorialspoint)", name_ar: "الأشجار (Tutorialspoint)", url: "https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm" },
        { name: "1000 DSA Questions", name_ar: "1000 سؤال في هياكل البيانات", url: "https://www.sanfoundry.com/1000-data-structure-questions-answers/" },
        { name: "Time Complexity (GFG)", name_ar: "التعقيد الزمني (GFG)", url: "https://www.geeksforgeeks.org/practice-questions-time-complexity-analysis/" }
    ]
};

const quizData = [
    {
        id: "array",
        title: "Arrays",
        title_ar: "المصفوفات",
        description: "Test your knowledge on static and dynamic arrays, searching, and memory.",
        description_ar: "اختبر معرفتك في المصفوفات الثابتة والديناميكية، والبحث، والذاكرة.",
        icon: "📊",
        questions: [
            {
                id: "arr-1",
                text: "What is the time complexity to access an element by index in an array?",
                text_ar: "ما هو التعقيد الزمني للوصول إلى عنصر عن طريق الفهرس في المصفوفة؟",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 0,
                explanation: "Arrays allow random access to elements using their index, which is a constant time operation O(1).",
                explanation_ar: "تسمح المصفوفات بالوصول العشوائي للعناصر باستخدام الفهرس، وهي عملية تستغرق وقتاً ثابتاً O(1)."
            },
            {
                id: "arr-2",
                text: "Which of the following is a disadvantage of a static array?",
                text_ar: "أي مما يلي يعتبر من عيوب المصفوفات الثابتة؟",
                options: ["Fast access time", "Fixed size", "Cache locality", "Easy implementation"],
                options_ar: ["وقت وصول سريع", "حجم ثابت", "محلية الذاكرة المؤقتة", "سهولة التنفيذ"],
                correct: 1,
                explanation: "Static arrays have a fixed size determined at compile time, which cannot be changed during runtime.",
                explanation_ar: "المصفوفات الثابتة لها حجم محدد وقت التجميع ولا يمكن تغييره أثناء التشغيل."
            },
            {
                id: "arr-3",
                text: "In a 0-indexed array of size N, what is the index of the last element?",
                text_ar: "في مصفوفة حجمها N وتبدأ من 0، ما هو فهرس العنصر الأخير؟",
                options: ["N", "N + 1", "N - 1", "0"],
                options_ar: ["N", "N + 1", "N - 1", "0"],
                correct: 2,
                explanation: "Indices range from 0 to N-1.",
                explanation_ar: "الفهارس تتراوح من 0 إلى N-1."
            },
            {
                id: "arr-4",
                text: "What is the time complexity of inserting an element at the beginning of an array of size N?",
                text_ar: "ما هو التعقيد الزمني لإدراج عنصر في بداية مصفوفة بحجم N؟",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 1,
                explanation: "Content must be shifted to the right to make space, resulting in O(n) operations.",
                explanation_ar: "يجب إزاحة المحتوى إلى اليمين لتوفير مساحة، مما ينتج عنه عمليات بترتيب O(n)."
            },
            {
                id: "arr-5",
                text: "What is the memory layout of an array?",
                text_ar: "ما هو تخطيط الذاكرة للمصفوفة؟",
                options: ["Contiguous", "Dispersed", "Linked", "Random"],
                options_ar: ["متجاور", "متناثر", "مرتبط", "عشوائي"],
                correct: 0,
                explanation: "Arrays are stored in contiguous memory locations.",
                explanation_ar: "يتم تخزين المصفوفات في مواقع ذاكرة متجاورة."
            },
            {
                id: "arr-6",
                text: "When passing an array to a function in C/C++, what is actually passed?",
                text_ar: "عند تمرير مصفوفة إلى دالة في C/C++، ما الذي يتم تمريره بالفعل؟",
                options: ["The entire array", "The base address", "The size only", "Nothing"],
                options_ar: ["المصفوفة بأكملها", "عنوان العنصر الأول", "الحجم فقط", "لا شيء"],
                correct: 1,
                explanation: "The base address (pointer to the first element) is passed to avoid copying the entire array.",
                explanation_ar: "يتم تمرير عنوان العنصر الأول (مؤشر) لتجنب نسخ المصفوفة بأكملها."
            },
            {
                id: "arr-7",
                text: "Which of these is an application of arrays?",
                text_ar: "أي مما يلي يعد من تطبيقات المصفوفات؟",
                options: ["Implementing Linked Lists", "Implementing Stacks and Queues", "Dynamic memory allocation", "None of the above"],
                options_ar: ["تنفيذ القوائم المتصلة", "تنفيذ المكدسات وقوائم الانتظار", "تخصيص الذاكرة الديناميكية", "لا شيء مما سبق"],
                correct: 1,
                explanation: "Arrays are often used as the underlying storage for stacks and queues.",
                explanation_ar: "تستخدم المصفوفات غالباً كوحدة تخزين أساسية للمكدسات (Stacks) وقوائم الانتظار (Queues)."
            },
            {
                id: "arr-8",
                text: "What is a sparse array?",
                text_ar: "ما هي المصفوفة المتناثرة (Sparse Array)؟",
                options: ["An array with mostly zero/null values", "An array with no elements", "An array with random values", "A sorted array"],
                options_ar: ["مصفوفة معظم قيمها صفر/فارغة", "مصفوفة بلا عناصر", "مصفوفة بقيم عشوائية", "مصفوفة مرتبة"],
                correct: 0,
                explanation: "A sparse array is one in which most of the elements have the same default value (usually 0 or null).",
                explanation_ar: "المصفوفة المتناثرة هي التي تحتوي معظم عناصرها على نفس القيمة الافتراضية (عادةً 0 أو null)."
            },
            {
                id: "arr-9",
                text: "What is the time complexity to delete the last element of an array?",
                text_ar: "ما هو التعقيد الزمني لحذف العنصر الأخير من المصفوفة؟",
                options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                options_ar: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Deleting the last element does not require shifting other elements, so it is O(1).",
                explanation_ar: "حذف العنصر الأخير لا يتطلب إزاحة العناصر الأخرى، لذا فهو O(1)."
            },
            {
                id: "arr-10",
                text: "How do you calculate the address of element A[i] in a 1D array assuming base address B and size of element S?",
                text_ar: "كيف تحسب عنوان العنصر A[i] في مصفوفة أحادية البعد بفرض أن العنوان الأساسي B وحجم العنصر S؟",
                options: ["B + i * S", "B + i + S", "B * i + S", "B + (i-1) * S"],
                options_ar: ["B + i * S", "B + i + S", "B * i + S", "B + (i-1) * S"],
                correct: 0,
                explanation: "The address is the base address plus the offset (index * size).",
                explanation_ar: "العنوان هو العنوان الأساسي مضافاً إليه الإزاحة (الفهرس * الحجم)."
            },
            {
                id: "arr-11",
                text: "Which search algorithm works on unsorted arrays?",
                text_ar: "أي خوارزمية بحث تعمل على المصفوفات غير المرتبة؟",
                options: ["Binary Search", "Linear Search", "Interpolation Search", "None"],
                options_ar: ["البحث الثنائي", "البحث الخطي", "البحث الاستقرائي", "لا شيء"],
                correct: 1,
                explanation: "Linear search checks every element and works on unsorted data.",
                explanation_ar: "البحث الخطي يتحقق من كل عنصر ويعمل على البيانات غير المرتبة."
            },
            {
                id: "arr-12",
                text: "In C++, vectors are examples of:",
                text_ar: "في C++، تعتبر الـ Vectors أمثلة على:",
                options: ["Static Arrays", "Dynamic Arrays", "Linked Lists", "Trees"],
                options_ar: ["مصفوفات ثابتة", "مصفوفات ديناميكية", "قوائم متصلة", "أشجار"],
                correct: 1,
                explanation: "Vectors can resize themselves automatically when elements are added or removed.",
                explanation_ar: "يمكن للـ Vectors تغيير حجمها تلقائياً عند إضافة أو إزالة العناصر."
            },
            {
                id: "arr-13",
                text: "What implies 'Row Major Order' in 2D arrays?",
                text_ar: "ماذا يعني 'Row Major Order' في المصفوفات ثنائية الأبعاد؟",
                options: ["Elements stored column by column", "Elements stored row by row", "Random storage", "Diagonal storage"],
                options_ar: ["تخزين العناصر عموداً تلو الآخر", "تخزين العناصر صفاً تلو الآخر", "تخزين عشوائي", "تخزين قطري"],
                correct: 1,
                explanation: "In row-major order, consecutive elements of a row reside next to each other in memory.",
                explanation_ar: "في الترتيب الصفي، توجد العناصر المتتالية للصف بجانب بعضها البعض في الذاكرة."
            },
            {
                id: "arr-14",
                text: "Which of the following operations is efficiently supported by an unsorted array?",
                text_ar: "أي من العمليات التالية مدعومة بكفاءة بواسطة مصفوفة غير مرتبة؟",
                options: ["Search", "Delete specific element", "Insert at end", "Find Min/Max"],
                options_ar: ["بحث", "حذف عنصر محدد", "إدراج في النهاية", "إيجاد الأدنى/الأقصى"],
                correct: 2,
                explanation: "Inserting at the end (if space allows) is O(1).",
                explanation_ar: "الإدراج في النهاية (إذا كان هناك مساحة) يتم في O(1)."
            },
            {
                id: "arr-15",
                text: "What is the minimum number of comparisons to find the maximum element in an array of size N?",
                text_ar: "ما هو الحد الأدنى لعدد المقارنات لإيجاد العنصر الأقصى في مصفوفة بحجم N؟",
                options: ["N", "N-1", "N/2", "log N"],
                options_ar: ["N", "N-1", "N/2", "log N"],
                correct: 1,
                explanation: "You need to compare the current max with every other element (N-1 comparisons).",
                explanation_ar: "تحتاج إلى مقارنة الأقصى الحالي مع كل عنصر آخر (N-1 مقارنة)."
            },
            {
                id: "arr-16",
                text: "What is the worst-case space complexity of valid Merge Sort on an array?",
                text_ar: "ما هو التعقيد المكاني في أسوأ حالة لفرز الدمج (Merge Sort) على مصفوفة؟",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Merge sort typically requires O(n) auxiliary space for merging.",
                explanation_ar: "يتطلب فرز الدمج عادةً مساحة إضافية O(n) للدمج."
            },
            {
                id: "arr-17",
                text: "Accessing an array out of bounds results in what?",
                text_ar: "ماذا ينتج عن الوصول إلى عنصر خارج حدود المصفوفة؟",
                options: ["Compile error", "Runtime error/Undefined behavior", "Returns 0", "Automatic resizing"],
                options_ar: ["خطأ تجميع (Compile error)", "خطأ وقت التشغيل / سلوك غير محدد", "إرجاع 0", "تغيير الحجم التلقائي"],
                correct: 1,
                explanation: "In many languages like C/C++ or Java, it causes undefined behavior or throws an exception.",
                explanation_ar: "في العديد من اللغات مثل C/C++ أو Java، يتسبب ذلك في سلوك غير محدد أو يرمي استثناءً."
            },
            {
                id: "arr-18",
                text: "A string in C is implemented as:",
                text_ar: "يتم تنفيذ السلسلة النصية (String) في C على شكل:",
                options: ["Character Array", "Integer Array", "Linked List", "Stack"],
                options_ar: ["مصفوفة أحرف", "مصفوفة أعداد صحيحة", "قائمة متصلة", "مكدس"],
                correct: 0,
                explanation: "C strings are arrays of characters terminated by a null character.",
                explanation_ar: "سلاسل C هي مصفوفات من الأحرف تنتهي بحرف null."
            },
            {
                id: "arr-19",
                text: "In a dynamic array, if the array is full, resizing typically takes:",
                text_ar: "في المصفوفة الديناميكية، إذا كانت المصفوفة ممتلئة، فإن تغيير الحجم يستغرق عادةً:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Resizing requires allocating new memory and copying all existing elements, which is O(n).",
                explanation_ar: "يتطلب تغيير الحجم تخصيص ذاكرة جديدة ونسخ جميع العناصر الموجودة، وهو ما يستغرق O(n)."
            },
            {
                id: "arr-20",
                text: "What is the index of the first element in a 1-based indexing array?",
                text_ar: "ما هو فهرس العنصر الأول في مصفوفة تعتمد الترقيم من 1؟",
                options: ["0", "1", "-1", "Client defined"],
                options_ar: ["0", "1", "-1", "محدد من قبل العميل"],
                correct: 1,
                explanation: "In 1-based indexing, the first element is at index 1.",
                explanation_ar: "في الترقيم المعتمد على 1، يكون العنصر الأول في الفهرس 1."
            },
            {
                id: "arr-21",
                text: "Which property of arrays helps in CPU caching?",
                text_ar: "أي خاصية للمصفوفات تساعد في التخزين المؤقت للمعالج (CPU caching)؟",
                options: ["Spatial Locality", "Temporal Locality", "Fixed Size", "Type Homogeneity"],
                options_ar: ["المحلية المكانية", "المحلية الزمانية", "الحجم الثابت", "تجانس النوع"],
                correct: 0,
                explanation: "Contiguous memory storage improves spatial locality, making arrays cache-friendly.",
                explanation_ar: "يحسن التخزين المتجاور في الذاكرة من المحلية المكانية، مما يجعل المصفوفات صديقة للذاكرة المؤقتة."
            },
            {
                id: "arr-22",
                text: "To reverse an array in-place, the time complexity is:",
                text_ar: "لعكس مصفوفة في مكانها، يكون التعقيد الزمني:",
                options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                options_ar: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                correct: 0,
                explanation: "You iterate through half the array swapping elements, which is O(n).",
                explanation_ar: "تقوم بالمرور عبر نصف المصفوفة لتبديل العناصر، وهو ما يستغرق O(n)."
            },
            {
                id: "arr-23",
                text: "Inserting an element at index K in an array of size N takes:",
                text_ar: "إدراج عنصر في الفهرس K في مصفوفة بحجم N يستغرق:",
                options: ["O(1)", "O(N-K)", "O(K)", "O(log N)"],
                options_ar: ["O(1)", "O(N-K)", "O(K)", "O(log N)"],
                correct: 1,
                explanation: "You have to shift N-K elements to the right.",
                explanation_ar: "عليك إزاحة N-K عنصراً إلى اليمين."
            },
            {
                id: "arr-24",
                text: "What is a 'Sentinel' in array searching?",
                text_ar: "ما هو 'Sentinel' في البحث في المصفوفات؟",
                options: ["A guard value to avoid boundary checks", "The first element", "The last element", "A pointer"],
                options_ar: ["قيمة حراسة لتجنب فحص الحدود", "العنصر الأول", "العنصر الأخير", "مؤشر"],
                correct: 0,
                explanation: "A sentinel is often placed at the end to simplify loop termination conditions.",
                explanation_ar: "غالباً ما يتم وضع قيمة حراسة في النهاية لتبسيط شروط إنهاء الحلقة."
            },
            {
                id: "arr-25",
                text: "2D Arrays are also known as:",
                text_ar: "تعرف المصفوفات ثنائية الأبعاد أيضاً باسم:",
                options: ["Matrix", "Vector", "Set", "Tree"],
                options_ar: ["مصفوفة (Matrix)", "متجه (Vector)", "مجموعة (Set)", "شجرة (Tree)"],
                correct: 0,
                explanation: "A 2D array represents a matrix structure.",
                explanation_ar: "تمثل المصفوفة ثنائية الأبعاد بنية المصفوفة الرياضية (Matrix)."
            },
            {
                id: "arr-26",
                text: "The jagged array is:",
                text_ar: "المصفوفة المسننة (Jagged Array) هي:",
                options: ["Array of arrays of different sizes", "Array of arrays of same size", "Sorted array", "Sparse array"],
                options_ar: ["مصفوفة من مصفوفات بأحجام مختلفة", "مصفوفة من مصفوفات بنفس الحجم", "مصفوفة مرتبة", "مصفوفة متناثرة"],
                correct: 0,
                explanation: "A jagged array is an array of arrays where member arrays can be of different lengths.",
                explanation_ar: "المصفوفة المسننة هي مصفوفة تحتوي على مصفوفات تكون أطوالها مختلفة."
            },
            {
                id: "arr-27",
                text: "Which is faster for random access?",
                text_ar: "أيهما أسرع للوصول العشوائي؟",
                options: ["Array", "Linked List", "Binary Tree", "Stack"],
                options_ar: ["المصفوفة", "القائمة المتصلة", "الشجرة الثنائية", "المكدس"],
                correct: 0,
                explanation: "Arrays support O(1) random access via index calculation.",
                explanation_ar: "تدعم المصفوفات الوصول العشوائي بترتيب O(1) عبر حساب الفهرس."
            },
            {
                id: "arr-28",
                text: "The dominant operation in Selection Sort on an array is:",
                text_ar: "العملية السائدة في فرز التحديد (Selection Sort) على مصفوفة هي:",
                options: ["Comparison", "Swapping", "Insertion", "Merging"],
                options_ar: ["المقارنة", "التبديل", "الإدراج", "الدمج"],
                correct: 0,
                explanation: "Selection sort performs O(n^2) comparisons but only O(n) swaps.",
                explanation_ar: "يقوم فرز التحديد بإجراء مقارنات بترتيب O(n^2) ولكن عمليات تبديل بترتيب O(n) فقط."
            },
            {
                id: "arr-29",
                text: "Which of the following can have negative indices in some languages (like Python)?",
                text_ar: "أي مما يلي يمكن أن يكون له فهارس سالبة في بعض اللغات (مثل Python)؟",
                options: ["Array/List", "Stack", "Queue", "Tree"],
                options_ar: ["مصفوفة/قائمة", "مكدس", "قائمة انتظار", "شجرة"],
                correct: 0,
                explanation: "Python lists support negative indices to access elements from the end.",
                explanation_ar: "تدعم قوائم Python الفهارس السالبة للوصول إلى العناصر من النهاية."
            },
            {
                id: "arr-30",
                text: "An array of 10 integers in C takes how many bytes (assuming int is 4 bytes)?",
                text_ar: "كم عدد البايتات التي تستغرقها مصفوفة من 10 أعداد صحيحة في C (بافتراض أن int هو 4 بايت)؟",
                options: ["10", "40", "20", "4"],
                options_ar: ["10", "40", "20", "4"],
                correct: 1,
                explanation: "10 elements * 4 bytes/element = 40 bytes.",
                explanation_ar: "10 عناصر * 4 بايت/عنصر = 40 بايت."
            },
            {
                id: "arr-31",
                text: "If A[0] is at address 1000 and size is 2, where is A[3]?",
                text_ar: "إذا كان A[0] في العنوان 1000 والحجم هو 2، فأين يقع A[3]؟",
                options: ["1006", "1008", "1003", "1012"],
                options_ar: ["1006", "1008", "1003", "1012"],
                correct: 0,
                explanation: "Address = 1000 + 3 * 2 = 1006.",
                explanation_ar: "العنوان = 1000 + 3 * 2 = 1006."
            },
            {
                id: "arr-32",
                text: "Bubble sort on an array of size N has worst case complexity:",
                text_ar: "التعقيد الزمني لفرز الفقاعة (Bubble Sort) على مصفوفة بحجم N في أسوأ حالة هو:",
                options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
                options_ar: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
                correct: 1,
                explanation: "Bubble sort uses nested loops, leading to O(n^2).",
                explanation_ar: "يستخدم فرز الفقاعة حلقات متداخلة، مما يؤدي إلى O(n^2)."
            },
            {
                id: "arr-33",
                text: "Which sorting algorithm is not stable by default on arrays?",
                text_ar: "أي خوارزمية فرز ليست مستقرة (Stable) افتراضياً على المصفوفات؟",
                options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"],
                options_ar: ["فرز الدمج", "فرز الإدراج", "الفرز السريع", "فرز الفقاعة"],
                correct: 2,
                explanation: "Quick Sort is typically unstable due to long-distance swaps.",
                explanation_ar: "الفرز السريع (Quick Sort) عادة ما يكون غير مستقر بسبب عمليات التبديل لمسافات طويلة."
            },
            {
                id: "arr-34",
                text: "What is the formula for the number of elements in a 1D array with upper bound UB and lower bound LB?",
                text_ar: "ما هي الصيغة لعدد العناصر في مصفوفة أحادية البعد ذات حد أعلى UB وحد أدنى LB؟",
                options: ["UB - LB + 1", "UB - LB", "UB + LB", "UB * LB"],
                options_ar: ["UB - LB + 1", "UB - LB", "UB + LB", "UB * LB"],
                correct: 0,
                explanation: "Length = Upper Bound - Lower Bound + 1.",
                explanation_ar: "الطول = الحد الأعلى - الحد الأدنى + 1."
            },
            {
                id: "arr-35",
                text: "Binary Search on an array requires the array to be:",
                text_ar: "يتطلب البحث الثنائي (Binary Search) أن تكون المصفوفة:",
                options: ["Sorted", "Hashed", "Indexed", "Random"],
                options_ar: ["مرتبة", "مجزأة (Hashed)", "مفهرسة", "عشوائية"],
                correct: 0,
                explanation: "Binary search specifically requires sorted data to work.",
                explanation_ar: "يتطلب البحث الثنائي تحديداً أن تكون البيانات مرتبة لكي يعمل."
            },
            {
                id: "arr-36",
                text: "Interpolation search is an improvement over Binary search for:",
                text_ar: "يعتبر البحث الاستقرائي (Interpolation Search) تحسيناً للبحث الثنائي في حالة:",
                options: ["Uniformly distributed data", "Random data", "Clustered data", "Small arrays"],
                options_ar: ["البيانات الموزعة بانتظام", "البيانات العشوائية", "البيانات المتجمعة", "المصفوفات الصغيرة"],
                correct: 0,
                explanation: "It estimates position based on value, working best for uniform distributions.",
                explanation_ar: "يقدر الموضع بناءً على القيمة، ويعمل بشكل أفضل للتوزيعات المنتظمة."
            },
            {
                id: "arr-37",
                text: "Maximum subarray sum problem can be solved in O(n) using:",
                text_ar: "يمكن حل مشكلة المجموع الأقصى للمصفوفة الفرعية في O(n) باستخدام:",
                options: ["Kadane's Algorithm", "Binary Search", "Bubble Sort", "Dijkstra"],
                options_ar: ["خوارزمية كادان (Kadane's)", "البحث الثنائي", "فرز الفقاعة", "خوارزمية ديكسترا"],
                correct: 0,
                explanation: "Kadane's algorithm scans the array once to find the max subarray sum.",
                explanation_ar: "تقوم خوارزمية كادان بمسح المصفوفة مرة واحدة للعثور على أقصى مجموع للمصفوفة الفرعية."
            },
            {
                id: "arr-38",
                text: "Which array operation is O(n)?",
                text_ar: "أي عملية على المصفوفة تستغرق O(n)؟",
                options: ["Traversing", "Accessing by index", "Getting size", "Check if empty"],
                options_ar: ["المرور على العناصر (Traversing)", "الوصول عبر الفهرس", "الحصول على الحجم", "التحقق مما إذا كانت فارغة"],
                correct: 0,
                explanation: "Traversing visits every element, taking linear time.",
                explanation_ar: "المرور يزور كل عنصر، مما يستغرق وقتاً خطياً."
            },
            {
                id: "arr-39",
                text: "Suffix array is effective for:",
                text_ar: "تعتبر مصفوفة اللاحقة (Suffix Array) فعالة لـ:",
                options: ["String pattern matching", "Numerical sorting", "Graph traversal", "Stack operations"],
                options_ar: ["مطابقة أنماط السلاسل النصية", "الفرز الرقمي", "اجتياز الرسم البياني", "عمليات المكدس"],
                correct: 0,
                explanation: "Suffix arrays are used for efficient string searches and matching.",
                explanation_ar: "تستخدم مصفوفات اللاحقة للبحث ومطابقة السلاسل بكفاءة."
            },
            {
                id: "arr-tf-1",
                text: "Arrays are non-linear data structures.",
                text_ar: "المصفوفات هي هياكل بيانات خطية.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "Arrays are linear data structures where elements are stored in contiguous memory.",
                explanation_ar: "المصفوفات هي هياكل بيانات خطية حيث يتم تخزين العناصر في ذاكرة متجاورة."
            },
            {
                id: "arr-tf-2",
                text: "In a dynamic array, the size can increase during runtime.",
                text_ar: "في المصفوفة الديناميكية، يمكن أن يزداد الحجم أثناء وقت التشغيل.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Dynamic arrays can resize themselves as needed.",
                explanation_ar: "المصفوفات الديناميكية يمكنها تغيير حجمها حسب الحاجة."
            }
        ]
    },
    {
        id: "stack",
        title: "Stack",
        title_ar: "المكدس (Stack)",
        description: "LIFO principle, push/pop operations, and applications.",
        description_ar: "مبدأ الوارد أخيراً صادر أولاً (LIFO)، عمليات الدفع/السحب، والتطبيقات.",
        icon: "📚",
        questions: [
            {
                id: "stk-1",
                text: "Which principle does a Stack follow?",
                text_ar: "أي مبدأ يتبعه المكدس (Stack)؟",
                options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random Access", "Sorted Order"],
                options_ar: ["الوارد أولاً صادر أولاً (FIFO)", "الوارد أخيراً صادر أولاً (LIFO)", "الوصول العشوائي", "ترتيب مفروز"],
                correct: 1,
                explanation: "Stack follows Last In First Out (LIFO).",
                explanation_ar: "يتبع المكدس مبدأ الوارد أخيراً صادر أولاً (LIFO)."
            },
            {
                id: "stk-2",
                text: "What is the time complexity of Push and Pop operations in a stack?",
                text_ar: "ما هو التعقيد الزمني لعمليات الدفع (Push) والسحب (Pop) في المكدس؟",
                options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                options_ar: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Both Push and Pop are constant time O(1) operations as they only affect the top of the stack.",
                explanation_ar: "عمليات الدفع والسحب تتم في وقت ثابت O(1) لأنها تؤثر فقط على قمة المكدس."
            },
            {
                id: "stk-3",
                text: "Which data structure is commonly used to implement recursion?",
                text_ar: "أي بنية بيانات تستخدم عادة لتنفيذ العودية (Recursion)؟",
                options: ["Queue", "Stack", "Tree", "Array"],
                options_ar: ["قائمة الانتظار", "المكدس", "الشجرة", "المصفوفة"],
                correct: 1,
                explanation: "The system call stack is used to keep track of recursive function calls.",
                explanation_ar: "يتم استخدام مكدس استدعاء النظام لتتبع استدعاءات الدوال العودية."
            },
            {
                id: "stk-4",
                text: "In infix to postfix conversion, what happens when an operator is encountered?",
                text_ar: "عند التحويل من Infix إلى Postfix، ماذا يحدث عند مواجهة عامل تشغيل (Operator)؟",
                options: ["Printed immediately", " pushed to stack", "Ignored", "Added to queue"],
                options_ar: ["يُطبع فوراً", "يُدفع إلى المكدس", "يُتجاهل", "يُضاف إلى قائمة الانتظار"],
                correct: 1,
                explanation: "Operators are pushed to the stack and popped based on precedence.",
                explanation_ar: "يتم دفع المعاملات إلى المكدس وسحبها بناءً على أولوياتها."
            },
            {
                id: "stk-5",
                text: "What implies identifying 'Underflow' in a stack?",
                text_ar: "ما الذي يعني تحديد 'Underflow' في المكدس؟",
                options: ["Pushing to full stack", "Popping from empty stack", "Pushing to empty stack", "None"],
                options_ar: ["الدفع إلى مكدس ممتلئ", "السحب من مكدس فارغ", "الدفع إلى مكدس فارغ", "لا شيء"],
                correct: 1,
                explanation: "Underflow occurs when trying to pop an element from an empty stack.",
                explanation_ar: "يحدث Underflow عند محاولة سحب عنصر من مكدس فارغ."
            },
            {
                id: "stk-6",
                text: "Which application uses a stack?",
                text_ar: "أي تطبيق يستخدم المكدس؟",
                options: ["Job scheduling", "Undo/Redo operation", "Breadth First Search", "Cache implementation"],
                options_ar: ["جدولة المهام", "عملية التراجع/الإعادة", "للبحث بالعرض أولاً", "تنفيذ الذاكرة المؤقتة"],
                correct: 1,
                explanation: "Undo/Redo operations typically use a stack to store the history of actions.",
                explanation_ar: "تستخدم عمليات التراجع/الإعادة عادةً مكدساً لتخزين سجل الإجراءات."
            },
            {
                id: "stk-7",
                text: "Evaluating a Postfix expression uses which data structure?",
                text_ar: "تقييم تعبير Postfix يستخدم أي بنية بيانات؟",
                options: ["Queue", "Stack", "Tree", "Graph"],
                options_ar: ["قائمة انتظار", "مكدس", "شجرة", "رسم بياني"],
                correct: 1,
                explanation: "A stack is used to store operands and intermediate results during postfix evaluation.",
                explanation_ar: "يستخدم المكدس لتخزين المتغيرات والنتائج الوسيطة أثناء تقييم Postfix."
            },
            {
                id: "stk-8",
                text: "What is the minimum number of stacks required to implement a Queue?",
                text_ar: "ما هو الحد الأدنى لعدد المكدسات المطلوبة لتنفيذ قائمة انتظار (Queue)؟",
                options: ["1", "2", "3", "4"],
                options_ar: ["1", "2", "3", "4"],
                correct: 1,
                explanation: "Two stacks are needed: one for enqueue and one for dequeue operations.",
                explanation_ar: "يلزم وجود مكدسين: واحد لعمليات الإدخال وآخر لعمليات الإخراج."
            },
            {
                id: "stk-9",
                text: "Which of the following problems can be solved using a stack?",
                text_ar: "أي من المشاكل التالية يمكن حلها باستخدام المكدس؟",
                options: ["Balanced Parentheses", "Shortest Path in unweighted graph", "Minimum Spanning Tree", "Cycle detection in undirected graph"],
                options_ar: ["الأقواس المتوازنة", "أقصر مسار في رسم بياني غير موزون", "شجرة الامتداد الأصغر (MST)", "اكتشاف الدورات في الرسم البياني غير الموجه"],
                correct: 0,
                explanation: "Checking for balanced parentheses is a classic stack application.",
                explanation_ar: "التحقق من الأقواس المتوازنة هو تطبيق كلاسيكي للمكدس."
            },
            {
                id: "stk-10",
                text: "In recursion, where are the local variables stored?",
                text_ar: "في العودية (Recursion)، أين يتم تخزين المتغيرات المحلية؟",
                options: ["Heap", "Stack", "Global memory", "Registers"],
                options_ar: ["Heap", "Stack", "الذاكرة العامة", "السجلات (Registers)"],
                correct: 1,
                explanation: "Local variables of function calls are stored in the function call stack.",
                explanation_ar: "يتم تخزين المتغيرات المحلية لاستدعاءات الدوال في مكدس استدعاء الدوال."
            },
            {
                id: "stk-11",
                text: "What is the result of applying prefix evaluation on: + 2 * 3 4?",
                text_ar: "ما هي نتيجة تطبيق تقييم البادئة (Prefix) على: + 2 * 3 4؟",
                options: ["14", "20", "10", "12"],
                options_ar: ["14", "20", "10", "12"],
                correct: 0,
                explanation: "Prefix evaluation: * 3 4 = 12, then + 2 12 = 14.",
                explanation_ar: "تقييم البادئة: 3 * 4 = 12، ثم 2 + 12 = 14."
            },
            {
                id: "stk-12",
                text: "The 'Top' operation in a stack returns:",
                text_ar: "عملية 'Top' في المكدس ترجع:",
                options: ["The element at the bottom", "The element at the top without removing it", "Number of elements", "Removes the top element"],
                options_ar: ["العنصر في الأسفل", "العنصر في القمة دون إزالته", "عدد العناصر", "تزيل العنصر العلوي"],
                correct: 1,
                explanation: "Top (or Peek) allows viewing the top element without popping it.",
                explanation_ar: "تسمح عملية Top (أو Peek) برؤية العنصر العلوي دون سحبه."
            },
            {
                id: "stk-13",
                text: "If stack size is 5, and we push 1, 2, 3, 4, 5, 6. What happens?",
                text_ar: "إذا كان حجم المكدس 5، وقمنا بدفع 1، 2، 3، 4، 5، 6. ماذا يحدث؟",
                options: ["Stack Underflow", "Stack Overflow", "Size increases", "Element 1 is removed"],
                options_ar: ["Stack Underflow", "Stack Overflow", "يزداد الحجم", "يتم إزالة العنصر 1"],
                correct: 1,
                explanation: "Pushing onto a full stack causes a Stack Overflow.",
                explanation_ar: "الدفع إلى مكدس ممتلئ يسبب طفح المكدس (Stack Overflow)."
            },
            {
                id: "stk-14",
                text: "Which traversal of a tree corresponds to a stack-based traversal?",
                text_ar: "أي اجتياز للشجرة يتوافق مع الاجتياز القائم على المكدس؟",
                options: ["Level Order", "Depth First Search", "Breadth First Search", "None"],
                options_ar: ["الترتيب حسب المستوى (Level Order)", "البحث بالعمق أولاً (DFS)", "البحث بالعرض أولاً (BFS)", "لا شيء"],
                correct: 1,
                explanation: "DFS can be implemented iteratively using a stack.",
                explanation_ar: "يمكن تنفيذ البحث بالعمق أولاً (DFS) بشكل تكراري باستخدام المكدس."
            },
            {
                id: "stk-15",
                text: "To reverse a string using a stack, the time complexity is:",
                text_ar: "لعكس سلسلة نصية باستخدام مكدس، يكون التعقيد الزمني:",
                options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
                options_ar: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
                correct: 1,
                explanation: "Pushing all characters and then popping them takes O(n) time.",
                explanation_ar: "دفع جميع الأحرف ثم سحبها يستغرق وقتاً O(n)."
            },
            {
                id: "stk-16",
                text: "Postfix notation is also known as:",
                text_ar: "الترميز اللاحق (Postfix) يعرف أيضاً بـ:",
                options: ["Reverse Polish Notation", "Polish Notation", "Infix Notation", "Syntax Notation"],
                options_ar: ["الترميز البولندي العكسي (RPN)", "الترميز البولندي", "الترميز الداخلي (Infix)", "ترميز النحو"],
                correct: 0,
                explanation: "Postfix is widely known as Reverse Polish Notation (RPN).",
                explanation_ar: "الترميز اللاحق يعرف على نطاق واسع بالترميز البولندي العكسي (RPN)."
            },
            {
                id: "stk-17",
                text: "In the 'Next Greater Element' problem, which specialized stack concept is used?",
                text_ar: "في مشكلة 'أقرب عنصر أكبر' (Next Greater Element)، ما هو مفهوم المكدس المخصص المستخدم؟",
                options: ["Min Stack", "Monotonic Stack", "Double Stack", "Circular Stack"],
                options_ar: ["المكدس الأدنى (Min Stack)", "المكدس الرتيب (Monotonic Stack)", "المكدس المزدوج", "المكدس الدائري"],
                correct: 1,
                explanation: "A monotonic stack (decreasing order) helps find the next greater element efficiently.",
                explanation_ar: "يساعد المكدس الرتيب (بترتيب تنازلي) في العثور على العنصر الأكبر التالي بكفاءة."
            },
            {
                id: "stk-18",
                text: "What is the space complexity of a recursive algorithm with depth D?",
                text_ar: "ما هو التعقيد المكاني لخوارزمية عودية بعمق D؟",
                options: ["O(1)", "O(D)", "O(D^2)", "O(log D)"],
                options_ar: ["O(1)", "O(D)", "O(D^2)", "O(log D)"],
                correct: 1,
                explanation: "The space complexity corresponds to the maximum depth of the call stack.",
                explanation_ar: "يتوافق التعقيد المكاني مع أقصى عمق لمكدس الاستدعاء."
            },
            {
                id: "stk-19",
                text: "Can a stack be implemented using a Linked List?",
                text_ar: "هل يمكن تنفيذ المكدس باستخدام قائمة متصلة (Linked List)؟",
                options: ["Yes", "No", "Only Doubly Linked List", "Only Circular Linked List"],
                options_ar: ["نعم", "لا", "فقط قائمة متصلة مزدوجة", "فقط قائمة متصلة دائرية"],
                correct: 0,
                explanation: "Yes, by inserting/deleting from the head, achieving O(1) operations.",
                explanation_ar: "نعم، عن طريق الإدراج/الحذف من الرأس، مما يحقق عمليات O(1)."
            },
            {
                id: "stk-20",
                text: "The Stock Span problem is efficiently solved using:",
                text_ar: "يتم حل مشكلة Stock Span بكفاءة باستخدام:",
                options: ["Queue", "Stack", "Heap", "Hash Table"],
                options_ar: ["Queue", "Stack", "Heap", "Hash Table"],
                correct: 1,
                explanation: "It uses a stack to find the previous greater element's index.",
                explanation_ar: "يستخدم المكدس للعثور على فهرس العنصر الأكبر السابق."
            },
            {
                id: "stk-21",
                text: "Which of these is NOT a valid stack operation?",
                text_ar: "أي مما يلي ليس عملية مكدس صالحة؟",
                options: ["Push", "Pop", "Peek", "Enqueue"],
                options_ar: ["Push", "Pop", "Peek", "Enqueue"],
                correct: 3,
                explanation: "Enqueue is a queue operation, not a stack operation.",
                explanation_ar: "الإدراج (Enqueue) هو عملية قائمة انتظار، وليس عملية مكدس."
            },
            {
                id: "stk-22",
                text: "When converting Infix 'A + B * C' to Postfix, the stack initially contains:",
                text_ar: "عند تحويل Infix 'A + B * C' إلى Postfix، يحتوي المكدس في البداية على:",
                options: ["A", "Empty", "+", "*"],
                options_ar: ["A", "فارغ", "+", "*"],
                correct: 1,
                explanation: "The operator stack starts empty.",
                explanation_ar: "يبدأ مكدس المعاملات فارغاً."
            },
            {
                id: "stk-23",
                text: "Implementing a stack using an array of size N sets a limit on:",
                text_ar: "يؤدي تنفيذ مكدس باستخدام مصفوفة بحجم N إلى وضع حد لـ:",
                options: ["Speed", "Maximum elements", "Data types", "Recursion depth"],
                options_ar: ["السرعة", "الحد الأقصى للعناصر", "أنواع البيانات", "عمق العودية"],
                correct: 1,
                explanation: "A fixed-size array limits the number of elements the stack can hold.",
                explanation_ar: "تحد المصفوفة ذات الحجم الثابت من عدد العناصر التي يمكن للمكدس استيعابها."
            },
            {
                id: "stk-24",
                text: "What helps in checking proper nesting of code blocks { }?",
                text_ar: "ما الذي يساعد في التحقق من التداخل الصحيح لكتل التعليمات البرمجية { }؟",
                options: ["Queue", "Stack", "Array", "Graph"],
                options_ar: ["Queue", "Stack", "Array", "Graph"],
                correct: 1,
                explanation: "Stacks track opening braces to match with closing braces.",
                explanation_ar: "تتتبع المكدسات الأقواس المفتوحة لمطابقتها مع الأقواس المغلقة."
            },
            {
                id: "stk-25",
                text: "Web browser's 'Back' button typically uses:",
                text_ar: "يستخدم زر 'العودة' في متصفح الويب عادةً:",
                options: ["Queue", "Stack", "Linked List", "Tree"],
                options_ar: ["قائمة انتظار", "مكدس", "قائمة متصلة", "شجرة"],
                correct: 1,
                explanation: "A stack stores the history of visited pages.",
                explanation_ar: "يقوم المكدس بتخزين سجل الصفحات التي تمت زيارتها."
            },
            {
                id: "stk-26",
                text: "Tower of Hanoi is a classic example of:",
                text_ar: "برج هانوي هو مثال كلاسيكي لـ:",
                options: ["Iteration", "Recursion", "Queueing", "Sorting"],
                options_ar: ["التكرار", "العودية", "الانتظار", "الفرز"],
                correct: 1,
                explanation: "It's a quintessential recursive problem.",
                explanation_ar: "إنها مشكلة عودية جوهرية."
            },
            {
                id: "stk-27",
                text: "Function call overhead is mainly due to:",
                text_ar: "يعود سبب العبء الإضافي (Overhead) لاستدعاء الدالة بشكل رئيسي إلى:",
                options: ["CPU speed", "Stack frame creation/destruction", "Memory bus", "Disk I/O"],
                options_ar: ["سرعة المعالج", "إنشاء/تدمير إطار المكدس", "ناقل الذاكرة", "إدخال/إخراج القرص"],
                correct: 1,
                explanation: "Pushing and popping stack frames takes time and resources.",
                explanation_ar: "يستغرق دفع وسحب إطارات المكدس وقتاً وموارد."
            },
            {
                id: "stk-28",
                text: "A 'Min Stack' supports which extra operation in O(1)?",
                text_ar: "'المكدس الأدنى' (Min Stack) يدعم أي عملية إضافية في O(1)؟",
                options: ["Get Maximum", "Get Minimum", "Sort", "Search"],
                options_ar: ["الحصول على الأقصى", "الحصول على الأدنى", "فرز", "بحث"],
                correct: 1,
                explanation: "A Min Stack retrieves the minimum element in constant time.",
                explanation_ar: "يسترجع المكدس الأدنى العنصر الأصغر في وقت ثابت."
            },
            {
                id: "stk-29",
                text: "To implement 2 stacks in one array, how should they grow?",
                text_ar: "لتنفيذ مكدسين في مصفوفة واحدة، كيف يجب أن ينموا؟",
                options: ["Same direction", "Towards each other from ends", "From center outwards", "Randomly"],
                options_ar: ["نفس الاتجاه", "نحو بعضهما البعض من الأطراف", "من المركز للخارج", "عشوائياً"],
                correct: 1,
                explanation: "Growing from opposite ends (0 and N-1) maximizes space utilization.",
                explanation_ar: "النمو من الأطراف المقابلة (0 و N-1) يزيد من استغلال المساحة."
            },
            {
                id: "stk-30",
                text: "Polish Notation places the operator:",
                text_ar: "يضع الترميز البولندي (Polish Notation) العامل (Operator):",
                options: ["After operands", "Before operands", "Between operands", "Anywhere"],
                options_ar: ["بعد المعاملات", "قبل المعاملات", "بين المعاملات", "في أي مكان"],
                correct: 1,
                explanation: "Polish notation is Prefix notation (Operator Operand Operand).",
                explanation_ar: "الترميز البولندي هو ترميز البادئة (عامل معامل معامل)."
            },
            {
                id: "stk-31",
                text: "Depth First Search (DFS) on a graph uses:",
                text_ar: "يستخدم البحث بالعمق أولاً (DFS) على الرسم البياني:",
                options: ["Queue", "Stack", "Priority Queue", "Set"],
                options_ar: ["Queue", "Stack", "Priority Queue", "Set"],
                correct: 1,
                explanation: "Stack is the underlying structure for DFS.",
                explanation_ar: "المكدس هو البنية الأساسية لـ DFS."
            },
            {
                id: "stk-32",
                text: "Converting Decimal 10 to Binary using a stack involves:",
                text_ar: "تحويل العدد العشري 10 إلى ثنائي باستخدام مكدس يتضمن:",
                options: ["Pushing remainders of division by 2", "Pushing quotients", "Pushing 10", "None"],
                options_ar: ["دفع بواقي القسمة على 2", "دفع نواتج القسمة", "دفع 10", "لا شيء"],
                correct: 0,
                explanation: "Remainders are pushed and then popped to get the binary string in reverse order.",
                explanation_ar: "يتم دفع البواقي ثم سحبها للحصول على السلسلة الثنائية بترتيب عكسي."
            },
            {
                id: "stk-33",
                text: "Which of the following expression notations does not require parentheses and precedence rules?",
                text_ar: "أي من تدوينات التعبير التالية لا تتطلب أقواس وقواعد أولوية؟",
                options: ["Infix", "Postfix", "Prefix", "Both Postfix and Prefix"],
                options_ar: ["Infix", "Postfix", "Prefix", "كلاهما Postfix و Prefix"],
                correct: 3,
                explanation: "Both Prefix and Postfix notations are unambiguous without parentheses.",
                explanation_ar: "كلا التدوينين (Prefix و Postfix) لا يحملان دلالات غامضة بدون أقواس."
            },
            {
                id: "stk-34",
                text: "Removing adjacent duplicates from a string (e.g., 'abbaca' -> 'ca') uses:",
                text_ar: "إزالة التكرارات المتجاورة من سلسلة نصية (مثل 'abbaca' -> 'ca') تستخدم:",
                options: ["Queue", "Stack", "Linked List", "Tree"],
                options_ar: ["Queue", "Stack", "Linked List", "Tree"],
                correct: 1,
                explanation: "You push characters and pop if the top matches the current character.",
                explanation_ar: "تقوم بدفع الأحرف والسحب إذا كانت القمة تطابق الحرف الحالي."
            },
            {
                id: "stk-35",
                text: "Simplifying a Unix-style path '/a/./b/../../c/' typically involves:",
                text_ar: "تبسيط مسار Unix-style مثل '/a/./b/../../c/' يتضمن عادةً:",
                options: ["Stack", "Queue", "Tree", "Graph"],
                options_ar: ["Stack", "Queue", "Tree", "Graph"],
                correct: 0,
                explanation: "A stack helps process '..' by popping the previous directory.",
                explanation_ar: "يساعد المكدس في معالجة '..' وسحب الدليل السابق."
            },
            {
                id: "stk-36",
                text: "The largest rectangle in a histogram can be found in O(n) using:",
                text_ar: "يمكن العثور على أكبر مستطيل في المدرج الإحصائي في O(n) باستخدام:",
                options: ["Stack", "Queue", "DP", "Divide and Conquer"],
                options_ar: ["Stack", "Queue", "البرمجة الديناميكية (DP)", "فرق تسد (Divide and Conquer)"],
                correct: 0,
                explanation: "A stack is used to keep track of increasing bar heights.",
                explanation_ar: "يستخدم المكدس لتتبع ارتفاعات الأعمدة المتزايدة."
            },
            {
                id: "stk-37",
                text: "Topological Sort can be implemented using:",
                text_ar: "يمكن تنفيذ الفرز الطوبولوجي (Topological Sort) باستخدام:",
                options: ["Stack (DFS)", "Queue (BFS)", "Both", "None"],
                options_ar: ["Stack (DFS)", "Queue (BFS)", "كلاهما", "لا شيء"],
                correct: 2,
                explanation: "Kahn's algorithm uses a Queue, while the DFS approach uses a Stack.",
                explanation_ar: "تستخدم خوارزمية Kahn قائمة انتظار، بينما يستخدم نهج DFS المكدس."
            },
            {
                id: "stk-38",
                text: "Memory allocated for the stack is deallocated:",
                text_ar: "يتم إلغاء تخصيص الذاكرة المخصصة للمكدس:",
                options: ["Automatically", "Manually by programmer", "By Garbage Collector", "Never"],
                options_ar: ["تلقائياً", "يدوياً بواسطة المبرمج", "بواسطة جامع القمامة", "أبداً"],
                correct: 0,
                explanation: "Stack memory is automatically managed as functions return.",
                explanation_ar: "تتم إدارة ذاكرة المكدس تلقائياً عند عودة الدوال."
            },
            {
                id: "stk-39",
                text: "Can a stack store elements of different data types?",
                text_ar: "هل يمكن للمكدس تخزين عناصر من أنواع بيانات مختلفة؟",
                options: ["Yes, in dynamically typed languages", "No, never", "Only in C++", "Only in Java"],
                options_ar: ["نعم، في اللغات ذات الكتابة الديناميكية", "لا، أبداً", "فقط في C++", "فقط في Java"],
                correct: 0,
                explanation: "In dynamically typed languages like Python or JS, or using void pointers/Objects, it's possible.",
                explanation_ar: "في اللغات الديناميكية مثل Python أو JS، أو باستخدام المؤشرات العامة/الكائنات، هذا ممكن."
            },
            {
                id: "stk-40",
                text: "In the celebrity problem, a stack can be used to identify the celebrity in:",
                text_ar: "في مشكلة المشاهير (Celebrity Problem)، يمكن استخدام المكدس لتحديد المشهور في:",
                options: ["O(n^2)", "O(n)", "O(log n)", "O(1)"],
                options_ar: ["O(n^2)", "O(n)", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "Using a stack, we can eliminate non-celebrities in O(n) time.",
                explanation_ar: "باستخدام المكدس، يمكننا استبعاد غير المشاهير في وقت O(n)."
            },
            {
                id: "stk-tf-1",
                text: "Stack follows the FIFO (First In First Out) principle.",
                text_ar: "يتبع المكدس مبدأ (FIFO) - ما يدخل أولاً يخرج أولاً.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "Stack follows the LIFO (Last In First Out) principle.",
                explanation_ar: "يتبع المكدس مبدأ (LIFO) - ما يدخل أخيراً يخرج أولاً."
            },
            {
                id: "stk-tf-2",
                text: "Pop operation on an empty stack leads to underflow.",
                text_ar: "عملية السحب (Pop) من مكدس فارغ تؤدي إلى حدوث Underflow.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Attempting to remove an element from an empty stack is called stack underflow.",
                explanation_ar: "محاولة إزالة عنصر من مكدس فارغ تسمى stack underflow."
            }
        ]
    },
    {
        id: "queue",
        title: "Queue & Variations",
        title_ar: "الطابور (Queue) ومتغيراته",
        description: "Linear, Circular, and Priority Queues.",
        description_ar: "الطابور الخطي، الدائري، وطابور الأولويات.",
        icon: "🚶",
        questions: [
            {
                id: "q-1",
                text: "Which principle does a Queue follow?",
                text_ar: "أي مبدأ يتبعه طابور الانتظار (Queue)؟",
                options: ["LIFO", "FIFO", "LILO", "FILO"],
                options_ar: ["LIFO", "FIFO", "LILO", "FILO"],
                correct: 1,
                explanation: "Queue follows First In First Out (FIFO).",
                explanation_ar: "طابور الانتظار يتبع مبدأ الوارد أولاً صادر أولاً (FIFO)."
            },
            {
                id: "q-2",
                text: "In a circular queue implemented with an array of size N, what is the condition for the queue being full?",
                text_ar: "في الطابور الدائري المنفذ باستخدام مصفوفة بحجم N، ما هو شرط امتلاء الطابور؟",
                options: ["front == rear", "(rear + 1) % N == front", "rear == N - 1", "front == 0"],
                options_ar: ["front == rear", "(rear + 1) % N == front", "rear == N - 1", "front == 0"],
                correct: 1,
                explanation: "In a circular queue, the full condition checks if the next position of rear wraps around to front.",
                explanation_ar: "في الطابور الدائري، يتحقق شرط الامتلاء مما إذا كان الموضع التالي للمؤشر الخلفي يلتف ليصل إلى المؤشر الأمامي."
            },
            {
                id: "q-3",
                text: "Which data structure is best suited for a Priority Queue?",
                text_ar: "أي بنية بيانات هي الأنسب لطابور الأولويات (Priority Queue)؟",
                options: ["Array", "Linked List", "Heap", "Hash Map"],
                options_ar: ["Array", "Linked List", "Heap", "Hash Map"],
                correct: 2,
                explanation: "A Heap (Binary Heap) provides efficient O(log n) insertion and extraction of the maximum/minimum element.",
                explanation_ar: "يوفر الكومة (Heap) إدراجاً واستخراجاً فعالاً للعنصر الأقصى/الأدنى بتعقيد O(log n)."
            },
            {
                id: "q-4",
                text: "In a linear queue, when rear == size - 1, the queue is always:",
                text_ar: "في الطابور الخطي، عندما يكون rear == size - 1، يكون الطابور دائماً:",
                options: ["Full", "Empty", "Full only if front == 0", "None of the above"],
                options_ar: ["ممتلئ", "فارغ", "ممتلئ فقط إذا كان front == 0", "لا شيء مما سبق"],
                correct: 2,
                explanation: "If front > 0, there is space at the beginning, but a standard linear queue implementation might consider it full (overflow) unless shifted or circular.",
                explanation_ar: "إذا كان front > 0، فهناك مساحة في البداية، لكن التنفيذ القياسي للطابور الخطي قد يعتبره ممتلئاً (طفح) ما لم يتم إزاحته أو جعله دائرياً."
            },
            {
                id: "q-5",
                text: "What is the time complexity of Enqueue and Dequeue operations in a standard queue?",
                text_ar: "ما هو التعقيد الزمني لعمليات الإدراج (Enqueue) والإزالة (Dequeue) في طابور قياسي؟",
                options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                options_ar: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Enqueue adds to the rear and Dequeue removes from the front, both typically O(1).",
                explanation_ar: "الإدراج يضيف إلى الخلف والإزالة تحذف من الأمام، وكلاهما عادةً O(1)."
            },
            {
                id: "q-6",
                text: "Which data structure is used for Breadth First Search (BFS) in a graph?",
                text_ar: "أي بنية بيانات تستخدم للبحث بالعرض أولاً (BFS) في الرسم البياني؟",
                options: ["Stack", "Queue", "Tree", "Hash Table"],
                options_ar: ["Stack", "Queue", "Tree", "Hash Table"],
                correct: 1,
                explanation: "BFS explores neighbors level by level, which requires a Queue.",
                explanation_ar: "يستكشف BFS الجيران مستوى تلو الآخر، مما يتطلب طابوراً (Queue)."
            },
            {
                id: "q-7",
                text: "A Deque (Double Ended Queue) allows insertion and deletion at:",
                text_ar: "يسمح الطابور ذو النهايتين (Deque) بالإدراج والحذف في:",
                options: ["Front only", "Rear only", "Both ends", "Middle"],
                options_ar: ["الأمام فقط", "الخلف فقط", "كلا النهايتين", "المنتصف"],
                correct: 2,
                explanation: "Deque supports operations at both the front and the rear.",
                explanation_ar: "يدعم Deque العمليات في كل من الأمام والخلف."
            },
            {
                id: "q-8",
                text: "Implementing a Queue using two Stacks makes either Enqueue or Dequeue cost:",
                text_ar: "تنفيذ طابور باستخدام مكدسين يجعل تكلفة إما الإدراج أو الإزالة:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "One operation checks if the second stack is empty and moves all elements, costing O(n).",
                explanation_ar: "إحدى العمليات تتحقق مما إذا كان المكدس الثاني فارغاً وتنقل جميع العناصر، مما يكلف O(n)."
            },
            {
                id: "q-9",
                text: "Circular Queue overcomes which limitation of Linear Queue?",
                text_ar: "الطابور الدائري يتغلب على أي قيد للطابور الخطي؟",
                options: ["Slow access", "Memory wastage at invalid front space", "Complex implementation", "Size limit"],
                options_ar: ["بطء الوصول", "إهدار الذاكرة في المساحة الأمامية غير الصالحة", "تنفيذ معقد", "حد الحجم"],
                correct: 1,
                explanation: "It reuses empty spaces created by dequeuing at the beginning of the array.",
                explanation_ar: "يعيد استخدام المساحات الفارغة الناتجة عن الإزالة من بداية المصفوفة."
            },
            {
                id: "q-10",
                text: "Which application typically uses a Queue?",
                text_ar: "أي تطبيق يستخدم الطابور (Queue) عادةً؟",
                options: ["Function calls", "Undo mechanism", "Printer Spooling", "Syntax parsing"],
                options_ar: ["استدعاءات الدوال", "آلية التراجع", "تخزين الطابعة (Printer Spooling)", "التحليل النحوي"],
                correct: 2,
                explanation: "Jobs sent to a printer are queued and processed in FIFO order.",
                explanation_ar: "يتم وضع المهام المرسلة إلى الطابعة في طابور ومعالجتها بترتيب FIFO."
            },
            {
                id: "q-11",
                text: "In a Priority Queue, elements are dequeued based on:",
                text_ar: "في طابور الأولويات (Priority Queue)، يتم إخراج العناصر بناءً على:",
                options: ["Arrival time", "Priority", "Randomly", "LIFO"],
                options_ar: ["وقت الوصول", "الأولوية", "عشوائياً", "LIFO"],
                correct: 1,
                explanation: "The highest (or lowest) priority element is removed first.",
                explanation_ar: "تتم إزالة العنصر ذو الأولوية الأعلى (أو الأدنى) أولاً."
            },
            {
                id: "q-12",
                text: "If a Queue is implemented using a Singly Linked List, where should Enqueue happen for O(1)?",
                text_ar: "إذا تم تنفيذ الطابور باستخدام قائمة متصلة أحادية، أين يجب أن يحدث الإدراج ليكون O(1)؟",
                options: ["Head", "Tail", "Middle", "Anywhere"],
                options_ar: ["Head", "Tail", "Middle", "أي مكان"],
                correct: 1,
                explanation: "Enqueue at Tail is O(1) if we maintain a tail pointer (Dequeue at Head is also O(1)).",
                explanation_ar: "الإدراج في الذيل (Tail) هو O(1) إذا حافظنا على مؤشر للذيل (الإزالة من الرأس هي أيضاً O(1))."
            },
            {
                id: "q-13",
                text: "What is the minimum number of queues needed to implement a Stack?",
                text_ar: "ما هو الحد الأدنى لعدد الطوابير المطلوبة لتنفيذ مكدس (Stack)؟",
                options: ["1", "2", "3", "0"],
                options_ar: ["1", "2", "3", "0"],
                correct: 1,
                explanation: "Two queues are standard, but it can be done with one queue if we rotate elements.",
                explanation_ar: "طابوران هما المعيار، لكن يمكن القيام بذلك بطابور واحد إذا قمنا بتدوير العناصر."
            },
            {
                id: "q-14",
                text: "The Josephus problem is popularly solved using:",
                text_ar: "مشكلة جوزيفوس (Josephus Problem) تحل عادةً باستخدام:",
                options: ["Stack", "Circular Queue", "Tree", "Graph"],
                options_ar: ["Stack", "Circular Queue", "Tree", "Graph"],
                correct: 1,
                explanation: "A circular queue (or circular linked list) models the circle of people efficiently.",
                explanation_ar: "الطابور الدائري (أو القائمة المتصلة الدائرية) يمثل دائرة الأشخاص بكفاءة."
            },
            {
                id: "q-15",
                text: "In an Input Restricted Deque, insertion is allowed at:",
                text_ar: "في الـ Deque المقيد الإدخال (Input Restricted Deque)، يُسمح بالإدراج في:",
                options: ["Only one end", "Both ends", "Middle", "Nowhere"],
                options_ar: ["نهاية واحدة فقط", "كلا النهايتين", "المنتصف", "لا مكان"],
                correct: 0,
                explanation: "Insertion is restricted to one end, while deletion is allowed at both.",
                explanation_ar: "يقتصر الإدراج على نهاية واحدة، بينما يُسمح بالحذف من كلا النهايتين."
            },
            {
                id: "q-16",
                text: "Level order traversal of a binary tree uses:",
                text_ar: "اجتياز الترتيب حسب المستوى (Level Order Traversal) للشجرة الثنائية يستخدم:",
                options: ["DFS", "Recursion", "Queue", "Stack"],
                options_ar: ["DFS", "Recursion", "Queue", "Stack"],
                correct: 2,
                explanation: "It processes nodes level by level using a queue.",
                explanation_ar: "يعالج العقد مستوى تلو الآخر باستخدام طابور."
            },
            {
                id: "q-17",
                text: "A bounded buffer usually uses which structure?",
                text_ar: "عادة ما يستخدم المخزن المؤقت المحدود (Bounded Buffer) بنية:",
                options: ["Stack", "Circular Queue", "Linked List", "Tree"],
                options_ar: ["Stack", "Circular Queue", "Linked List", "Tree"],
                correct: 1,
                explanation: "Circular queues are ideal for fixed-size buffers.",
                explanation_ar: "الطوابير الدائرية مثالية للمخازن المؤقتة ذات الحجم الثابت."
            },
            {
                id: "q-18",
                text: "What happens if you Dequeue from an empty queue?",
                text_ar: "ماذا يحدث إذا قمت بالإزالة (Dequeue) من طابور فارغ؟",
                options: ["Overflow", "Underflow", "Complexity increases", "Nothing"],
                options_ar: ["طفح (Overflow)", "نقص (Underflow)", "يزداد التعقيد", "لا شيء"],
                correct: 1,
                explanation: "Trying to remove from an empty structure causes Underflow.",
                explanation_ar: "محاولة الإزالة من بنية فارغة تسبب النقص (Underflow)."
            },
            {
                id: "q-19",
                text: "Which of these is NOT a type of Queue?",
                text_ar: "أي مما يلي ليس نوعاً من الطوابير؟",
                options: ["Circular Queue", "Priority Queue", "Double Ended Queue", "LIFO Queue"],
                options_ar: ["الطابور الدائري", "طابور الأولويات", "الطابور ذو النهايتين", "طابور LIFO"],
                correct: 3,
                explanation: "LIFO Queue is a contradiction; LIFO implies a Stack.",
                explanation_ar: "طابور LIFO هو تناقض؛ LIFO يعني مكدساً."
            },
            {
                id: "q-20",
                text: "Finding the shortest path in an unweighted graph uses:",
                text_ar: "يستخدم العثور على أقصر مسار في رسم بياني غير موزون:",
                options: ["DFS", "BFS", "Dijkstra", "Prim's"],
                options_ar: ["DFS", "BFS", "Dijkstra", "Prim's"],
                correct: 1,
                explanation: "BFS guarantees the shortest path in terms of number of edges.",
                explanation_ar: "يضمن BFS أقصر مسار من حيث عدد الحواف."
            },
            {
                id: "q-21",
                text: "CPU Scheduling often uses:",
                text_ar: "غالباً ما تستخدم جدولة المعالج (CPU Scheduling):",
                options: ["Stack", "Queue", "Tree", "Graph"],
                options_ar: ["Stack", "Queue", "Tree", "Graph"],
                correct: 1,
                explanation: "Ready processes are kept in a Ready Queue.",
                explanation_ar: "يتم الاحتفاظ بالعمليات الجاهزة في طابور جاهز."
            },
            {
                id: "q-22",
                text: "To check if a string is a palindrome using a Deque:",
                text_ar: "للتحقق مما إذا كانت السلسلة النصية متناظرة (Palindrome) باستخدام Deque:",
                options: ["Insert all then remove from one end", "Compare front and rear removals", "Use only front operations", "Use only rear operations"],
                options_ar: ["إدراج الكل ثم الإزالة من طرف واحد", "مقارنة عمليات الإزالة الأمامية والخلفية", "استخدام العمليات الأمامية فقط", "استخدام العمليات الخلفية فقط"],
                correct: 1,
                explanation: "You remove from both ends and compare characters.",
                explanation_ar: "تقوم بالإزالة من كلا الطرفين ومقارنة الأحرف."
            },
            {
                id: "q-23",
                text: "The Sliding Window Maximum problem can be solved in O(n) using:",
                text_ar: "يمكن حل مشكلة Sliding Window Maximum في O(n) باستخدام:",
                options: ["Max Heap", "Deque", "Stack", "Queue"],
                options_ar: ["Max Heap", "Deque", "Stack", "Queue"],
                correct: 1,
                explanation: "A Deque can store indices of useful elements for the current window.",
                explanation_ar: "يمكن للـ Deque تخزين فهارس العناصر المفيدة للنافذة الحالية."
            },
            {
                id: "q-24",
                text: "LRU (Least Recently Used) Cache implementation involves:",
                text_ar: "يتضمن تنفيذ ذاكرة التخزين المؤقت LRU (الأقل استخداماً مؤخراً):",
                options: ["Queue and Hash Map", "Stack and Array", "Tree", "Heap"],
                options_ar: ["Queue و Hash Map", "Stack و Array", "Tree", "Heap"],
                correct: 0,
                explanation: "A Doubly Linked List (acting as a Queue) and a Hash Map provide O(1) operations.",
                explanation_ar: "توفر القائمة المتصلة المزدوجة (التي تعمل كطابور) وخريطة التجزئة عمليات O(1)."
            },
            {
                id: "q-25",
                text: "Which pointer tracks the first element in a Queue?",
                text_ar: "أي مؤشر يتتبع العنصر الأول في الطابور (Queue)؟",
                options: ["Rear", "Front", "Top", "Bottom"],
                options_ar: ["الخلف (Rear)", "الأمام (Front)", "الأعلى (Top)", "الأسفل (Bottom)"],
                correct: 1,
                explanation: "Front pointer points to the element to be dequeued next.",
                explanation_ar: "يشير المؤشر الأمامي (Front) إلى العنصر الذي سيتم إخراجه تالياً."
            },
            {
                id: "q-26",
                text: "If `front == rear` (and initialized to -1), the queue is:",
                text_ar: "إذا كان `front == rear` (وتم تهيئتهما بـ -1)، فإن الطابور يكون:",
                options: ["Full", "Empty", "Has 1 element", "Invalid"],
                options_ar: ["ممتلئ", "فارغ", "يحتوي على عنصر واحد", "غير صالح"],
                correct: 1,
                explanation: "Usually indicates an empty queue in array implementation.",
                explanation_ar: "عادة ما يشير إلى طابور فارغ في تنفيذ المصفوفة."
            },
            {
                id: "q-27",
                text: "Heap data structure is a common implementation for:",
                text_ar: "تعد بنية بيانات Heap تنفيذاً شائعاً لـ:",
                options: ["FIFO Queue", "Priority Queue", "Stack", "Deque"],
                options_ar: ["FIFO Queue", "Priority Queue", "Stack", "Deque"],
                correct: 1,
                explanation: "Heaps efficiently maintain the max/min element for priority queues.",
                explanation_ar: "تحافظ الأكوام (Heaps) بكفاءة على العنصر الأقصى/الأدنى لطوابير الأولويات."
            },
            {
                id: "q-28",
                text: "Traffic signal control systems often use:",
                text_ar: "غالباً ما تستخدم أنظمة التحكم في إشارات المرور:",
                options: ["Stack", "Circular Queue", "Tree", "Graph"],
                options_ar: ["Stack", "Circular Queue", "Tree", "Graph"],
                correct: 1,
                explanation: "Cyclic order of signals matches the Circular Queue concept.",
                explanation_ar: "الترتيب الدوري للإشارات يطابق مفهوم الطابور الدائري."
            },
            {
                id: "q-29",
                text: "Asynchronous data transfer (e.g., IO pipes) relies on:",
                text_ar: "يعتمد نقل البيانات غير المتزامن (مثل أنابيب الإدخال/الإخراج IO pipes) على:",
                options: ["Buffers (Queues)", "Stacks", "Variables", "Constants"],
                options_ar: ["Buffers (Queues)", "Stacks", "Variables", "Constants"],
                correct: 0,
                explanation: "Queues buffer data between producer and consumer operating at different speeds.",
                explanation_ar: "تقوم الطوابير بتخزين البيانات مؤقتاً بين المنتج والمستهلك اللذين يعملان بسرعات مختلفة."
            },
            {
                id: "q-30",
                text: "Applications dealing with request handling typically use:",
                text_ar: "تستخدم التطبيقات التي تتعامل مع معالجة الطلبات عادةً:",
                options: ["FCFS (First Come First Serve)", "LIFO", "Random", "None"],
                options_ar: ["FCFS (من يأتي أولاً يخدم أولاً)", "LIFO", "عشوائي", "لا شيء"],
                correct: 0,
                explanation: "FCFS is the natural behavior of a Queue.",
                explanation_ar: "FCFS هو السلوك الطبيعي للطابور."
            },
            {
                id: "q-31",
                text: "Topological Sort (Kahn's Algorithm) uses:",
                text_ar: "يستخدم الفرز الطوبولوجي (خوارزمية Kahn):",
                options: ["Queue", "Stack", "Heap", "Tree"],
                options_ar: ["Queue", "Stack", "Heap", "Tree"],
                correct: 0,
                explanation: "It enqueues nodes with 0 in-degree.",
                explanation_ar: "يقوم بإدراج العقد ذات الدرجة الداخلية 0 في الطابور."
            },
            {
                id: "q-32",
                text: "In a 0-indexed circular queue of size 5, if front=3 and rear=2, the queue is:",
                text_ar: "في طابور دائري بفهرس 0 وحجم 5، إذا كان front=3 و rear=2، فإن الطابور:",
                options: ["Empty", "Full", "Has 1 element", "Has 4 elements"],
                options_ar: ["فارغ", "ممتلئ", "يحتوي على عنصر واحد", "يحتوي على 4 عناصر"],
                correct: 1,
                explanation: "(2 + 1) % 5 == 3, so condition (rear+1)%N == front is met. It's full.",
                explanation_ar: "(2 + 1) % 5 == 3، لذا تم استيفاء الشرط (rear+1)%N == front. إنه ممتلئ."
            },
            {
                id: "q-33",
                text: "Deleting from a Priority Queue (Max Heap) takes:",
                text_ar: "يستغرق الحذف من طابور الأولويات (Max Heap):",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 2,
                explanation: "Removing the root requires reheapifying, which is O(log n).",
                explanation_ar: "تتطلب إزالة الجذر إعادة ترتيب الكومة (reheapifying)، وهو ما يستغرق O(log n)."
            },
            {
                id: "q-34",
                text: "Inserting into a Priority Queue (Max Heap) takes:",
                text_ar: "يستغرق الإدراج في طابور الأولويات (Max Heap):",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 2,
                explanation: "Insertion requires bubbling up, taking O(log n) time.",
                explanation_ar: "يتطلب الإدراج التصعيد لأعلى (bubbling up)، مما يستغرق وقت O(log n)."
            },
            {
                id: "q-35",
                text: "A blocking queue is commonly used in:",
                text_ar: "يستخدم طابور الحظر (Blocking Queue) عادةً في:",
                options: ["Single-threaded apps", "Multi-threaded Producer-Consumer", "Static websites", "Recursion"],
                options_ar: ["التطبيقات أحادية الخيط", "المنتج-المستهلك متعدد الخيوط", "المواقع الثابتة", "العودية"],
                correct: 1,
                explanation: "It blocks threads if valid operations (enqueue/dequeue) cannot be performed immediately.",
                explanation_ar: "يقوم بحظر الخيوط إذا لم يكن من الممكن تنفيذ العمليات الصالحة (الإدراج/الإزالة) على الفور."
            },
            {
                id: "q-36",
                text: "Rotten Oranges problem on a grid is solved using:",
                text_ar: "يتم حل مشكلة البرتقال الفاسد على شبكة باستخدام:",
                options: ["DFS", "BFS", "Backtracking", "Greedy"],
                options_ar: ["DFS", "BFS", "Backtracking", "Greedy"],
                correct: 1,
                explanation: "Rotting spreads layer by layer, suitable for BFS with a Queue.",
                explanation_ar: "ينتشر التعفن طبقة تلو الأخرى، مما يجعله مناسباً لـ BFS باستخدام طابور."
            },
            {
                id: "q-37",
                text: "Which queue variation allows insertion at both ends but deletion at only one?",
                text_ar: "أي نوع من الطوابير يسمح بالإدراج في كلا الطرفين ولكن الحذف من طرف واحد فقط؟",
                options: ["Input Restricted Deque", "Output Restricted Deque", "Priority Queue", "Simple Queue"],
                options_ar: ["Input Restricted Deque", "Output Restricted Deque", "Priority Queue", "Simple Queue"],
                correct: 1,
                explanation: "Output Restricted Deque restricts deletion to one end.",
                explanation_ar: "Output Restricted Deque يقيد الحذف بنهاية واحدة."
            },
            {
                id: "q-38",
                text: "Call center phone systems use queues to:",
                text_ar: "تستخدم أنظمة هواتف مراكز الاتصال الطوابير لـ:",
                options: ["Hold calls for agents", "Reject calls", "Stack calls", "Sort calls alphabetically"],
                options_ar: ["حجز المكالمات للوكلاء", "رفض المكالمات", "تكديس المكالمات", "فرز المكالمات أبجدياً"],
                correct: 0,
                explanation: "Waiting calls are held in a FIFO queue until an agent is free.",
                explanation_ar: "يتم الاحتفاظ بالمكالمات المنتظرة في طابور FIFO حتى يفرغ الوكيل."
            },
            {
                id: "q-39",
                text: "When implementing a queue with an array, we shift elements on dequeue to avoid wasted space. Time complexity becomes:",
                text_ar: "عند تنفيذ طابور باستخدام مصفوفة، نقوم بإزاحة العناصر عند الإزالة لتجنب إهدار المساحة. يصبح التعقيد الزمني:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Shifting all remaining elements takes O(n) time.",
                explanation_ar: "تستغرق إزاحة جميع العناصر المتبقية وقتاً O(n)."
            },
            {
                id: "q-40",
                text: "Double buffering in graphics uses:",
                text_ar: "يستخدم التخزين المؤقت المزدوج (Double Buffering) في الرسومات:",
                options: ["Two queues", "Two stacks", "Two buffers (often swapped)", "Linked List"],
                options_ar: ["طابورين", "مكدسين", "مخزنين مؤقتين (غالباً يتم تبديلهما)", "قائمة متصلة"],
                correct: 2,
                explanation: "While conceptually buffers, the swapping mechanism is key. Queues manage the flow of frames.",
                explanation_ar: "بينما هي مخازن مؤقتة من الناحية المفاهيمية، فإن آلية التبديل هي المفتاح. تدير الطوابير تدفق الإطارات."
            },
            {
                id: "que-tf-1",
                text: "Queue follows the LIFO principle.",
                text_ar: "يتبع الطابور مبدأ LIFO.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "Queue follows the FIFO (First In First Out) principle.",
                explanation_ar: "يتبع الطابور مبدأ FIFO (ما يدخل أولاً يخرج أولاً)."
            },
            {
                id: "que-tf-2",
                text: "A circular queue can reuse vacated spaces in the array.",
                text_ar: "يمكن للطابور الدائري إعادة استخدام المساحات الفارغة في المصفوفة.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Circular queues overcome the limitation of linear queues by connecting the end back to the front.",
                explanation_ar: "تتغلب الطوابير الدائرية على قيود الطوابير الخطية من خلال ربط النهاية بالبداية."
            }
        ]
    },
    {
        id: "linkedlist",
        title: "Linked Lists",
        title_ar: "القوائم المتصلة (Linked Lists)",
        description: "Singly, Doubly, and Circular linked lists.",
        description_ar: "القوائم المتصلة المفردة، المزدوجة، والدائرية.",
        icon: "🔗",
        questions: [
            {
                id: "ll-tf-1",
                text: "Linked list elements are stored in contiguous memory locations.",
                text_ar: "يتم تخزين عناصر القائمة المتصلة في مواقع ذاكرة متجاورة.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "Nodes can be scattered anywhere in the heap memory.",
                explanation_ar: "يمكن أن تكون العقد مبعثرة في أي مكان في ذاكرة الكومة."
            },
            {
                id: "ll-tf-2",
                text: "A doubly linked list allows traversal in both directions.",
                text_ar: "تسمح القائمة المتصلة المزدوجة بالاجتياز في كلا الاتجاهين.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Each node contains pointers to both the next and previous nodes.",
                explanation_ar: "تحتوي كل عقدة على مؤشرات لكل من العقدتين التالية والسابقة."
            },
            {
                id: "ll-1",
                text: "What does each node in a singly linked list contain?",
                text_ar: "ماذا تحتوي كل عقدة في القائمة المتصلة الأحادية؟",
                options: ["Data only", "Data and Pointer to next", "Data and Pointer to previous", "Pointer to head"],
                options_ar: ["البيانات فقط", "البيانات ومؤشر للتالي", "البيانات ومؤشر للسابق", "مؤشر للرأس"],
                correct: 1,
                explanation: "A singly linked list node typically holds the data and a reference (pointer) to the next node.",
                explanation_ar: "تحتوي عقدة القائمة المتصلة الأحادية عادةً على البيانات ومرجع (مؤشر) للعقدة التالية."
            },
            {
                id: "ll-2",
                text: "What is the time complexity to insert a node at the beginning of a linked list?",
                text_ar: "ما هو التعقيد الزمني لإدراج عقدة في بداية قائمة متصلة؟",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 0,
                explanation: "Updating the head pointer is a constant time operation.",
                explanation_ar: "تحديث مؤشر الرأس هو عملية تستغرق وقتاً ثابتاً."
            },
            {
                id: "ll-3",
                text: "In a Doubly Linked List, how many pointers does each node typically have?",
                text_ar: "في القائمة المتصلة المزدوجة، كم عدد المؤشرات التي تمتلكها كل عقدة عادةً؟",
                options: ["1", "2", "3", "0"],
                options_ar: ["1", "2", "3", "0"],
                correct: 1,
                explanation: "One pointer for the next node and one for the previous node.",
                explanation_ar: "مؤشر واحد للعقدة التالية وآخر للعقدة السابقة."
            },
            {
                id: "ll-4",
                text: "When implementing a Stack using a Linked List, which end is best for push/pop?",
                text_ar: "عند تنفيذ مكدس باستخدام قائمة متصلة، أي طرف هو الأفضل لعمليات الدفع/السحب؟",
                options: ["Wait for user input", "Head (Start)", "Tail (End)", "Random"],
                options_ar: ["انتظار إدخال المستخدم", "الرأس (Start)", "الذيل (End)", "عشوائي"],
                correct: 1,
                explanation: "Operations at the head are O(1) without needing to traverse the list.",
                explanation_ar: "العمليات عند الرأس تكون O(1) دون الحاجة لاجتياز القائمة."
            },
            {
                id: "ll-5",
                text: "To delete the last node of a Singly Linked List (without a tail pointer), time complexity is:",
                text_ar: "لحذف العقدة الأخيرة من قائمة متصلة أحادية (بدون مؤشر ذيل)، يكون التعقيد الزمني:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "You must traverse to the second-to-last node to update its next pointer to null.",
                explanation_ar: "يجب عليك الانتقال إلى العقدة ما قبل الأخيرة لتحديث مؤشرها التالي إلى null."
            },
            {
                id: "ll-6",
                text: "What is the main advantage of a Linked List over an Array?",
                text_ar: "ما هي الميزة الرئيسية للقائمة المتصلة مقارنة بالمصفوفة؟",
                options: ["Random Access", "Dynamic Size", "Cache Locality", "Memory Efficiency"],
                options_ar: ["الوصول العشوائي", "حجم ديناميكي", "محلية التخزين المؤقت", "كفاءة الذاكرة"],
                correct: 1,
                explanation: "Linked Lists grow and shrink dynamically without needing contiguous memory reallocation.",
                explanation_ar: "تنمو القوائم المتصلة وتتقلص ديناميكياً دون الحاجة إلى إعادة تخصيص ذاكرة متجاورة."
            },
            {
                id: "ll-7",
                text: "Floyd's Cycle Finding Algorithm uses:",
                text_ar: "تستخدم خوارزمية فلويد للكشف عن الدورة (Floyd's Cycle Finding):",
                options: ["Two pointers moving at same speed", "Two pointers moving at different speeds", "Stack", "Queue"],
                options_ar: ["مؤشرين يتحركان بنفس السرعة", "مؤشرين يتحركان بسرعات مختلفة", "Stack", "Queue"],
                correct: 1,
                explanation: "It uses a slow pointer (1 step) and a fast pointer (2 steps) to detect cycles.",
                explanation_ar: "تستخدم مؤشراً بطيئاً (خطوة واحدة) ومؤشراً سريعاً (خطوتين) للكشف عن الدورات."
            },
            {
                id: "ll-8",
                text: "In a Circular Linked List, the next pointer of the last node points to:",
                text_ar: "في القائمة المتصلة الدائرية، يشير المؤشر التالي للعقدة الأخيرة إلى:",
                options: ["Null", "Head", "Previous node", "Random"],
                options_ar: ["Null", "Head", "العقدة السابقة", "عشوائي"],
                correct: 1,
                explanation: "It points back to the Head, forming a circle.",
                explanation_ar: "يشير مرة أخرى إلى الرأس، مشكلاً دائرة."
            },
            {
                id: "ll-9",
                text: "Which pointer is sufficient to traverse a Circular Singly Linked List completely?",
                text_ar: "أي مؤشر يكفي لاجتياز قائمة متصلة دائرية أحادية بالكامل؟",
                options: ["Head", "Tail", "Any node", "None"],
                options_ar: ["Head", "Tail", "أي عقدة", "لا شيء"],
                correct: 2,
                explanation: "Start at any node and follow next pointers until you reach the start node again.",
                explanation_ar: "ابدأ عند أي عقدة واتبع المؤشرات التالية حتى تصل إلى عقدة البداية مرة أخرى."
            },
            {
                id: "ll-10",
                text: "Random access in a Linked List takes:",
                text_ar: "يستغرق الوصول العشوائي في القائمة المتصلة:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "You must traverse from the head to reach the k-th element.",
                explanation_ar: "يجب عليك الاجتياز من الرأس للوصول إلى العنصر k."
            },
            {
                id: "ll-11",
                text: "An XOR Linked List uses bitwise XOR to store:",
                text_ar: "تستخدم القائمة المتصلة XOR الـ bitwise XOR لتخزين:",
                options: ["Data", "Next and Previous addresses combined", "Head and Tail", "None"],
                options_ar: ["البيانات", "عناوين التالي والسابق مدمجة", "الرأس والذيل", "لا شيء"],
                correct: 1,
                explanation: "It stores `prev ^ next` in a single field to save memory (doubly linked functionality with one pointer space).",
                explanation_ar: "تقوم بتخزين `prev ^ next` في حقل واحد لتوفير الذاكرة (وظيفة الربط المزدوج بمساحة مؤشر واحد)."
            },
            {
                id: "ll-12",
                text: "To reverse a Singly Linked List, how many pointers are typically used in the iterative method?",
                text_ar: "لعكس قائمة متصلة أحادية، كم عدد المؤشرات المستخدمة عادةً في الطريقة التكرارية؟",
                options: ["1", "2", "3", "4"],
                options_ar: ["1", "2", "3", "4"],
                correct: 2,
                explanation: "Typically Prev, Current, and Next pointers are used.",
                explanation_ar: "عادة ما تستخدم مؤشرات Prev و Current و Next."
            },
            {
                id: "ll-13",
                text: "Merging two sorted linked lists of size N and M takes:",
                text_ar: "يستغرق دمج قائمتين متصلتين مفروزتين بحجم N و M:",
                options: ["O(1)", "O(min(N,M))", "O(N+M)", "O(N*M)"],
                options_ar: ["O(1)", "O(min(N,M))", "O(N+M)", "O(N*M)"],
                correct: 2,
                explanation: "You traverse both lists once.",
                explanation_ar: "تقوم باجتياز كلا القائمتين مرة واحدة."
            },
            {
                id: "ll-14",
                text: "Which sorting algorithm is well-suited for Linked Lists?",
                text_ar: "أي خوارزمية فرز مناسبة تماماً للقوائم المتصلة؟",
                options: ["Merge Sort", "Binary Search", "Heap Sort", "Quick Sort"],
                options_ar: ["Merge Sort", "Binary Search", "Heap Sort", "Quick Sort"],
                correct: 0,
                explanation: "Merge Sort works well as it doesn't require random access.",
                explanation_ar: "يعمل Merge Sort بشكل جيد لأنه لا يتطلب وصولاً عشوائياً."
            },
            {
                id: "ll-15",
                text: "A Skip List allows fast search in a Linked List hierarchy with complexity:",
                text_ar: "تسمح قائمة التخطي (Skip List) بالبحث السريع في التسلسل الهرمي للقائمة المتصلة بتعقيد:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                correct: 1,
                explanation: "It provides probabilistic O(log n) search, insertion, and deletion.",
                explanation_ar: "توفر بحثاً وإدراجاً وحذفاً احتمالياً بـ O(log n)."
            },
            {
                id: "ll-16",
                text: "Intersection point of two Linked Lists can be found by:",
                text_ar: "يمكن العثور على نقطة تقاطع قائمتين متصلتين عن طريق:",
                options: ["Difference in counts", "Hash Map", "Two pointer trick", "All of the above"],
                options_ar: ["الفرق في الأعداد", "خريطة التجزئة (Hash Map)", "خدعة المؤشرين", "كل ما سبق"],
                correct: 3,
                explanation: "All these methods can effectively find the intersection node.",
                explanation_ar: "يمكن لجميع هذه الطرق العثور بفعالية على عقدة التقاطع."
            },
            {
                id: "ll-17",
                text: "Linked Lists are stored in memory as:",
                text_ar: "يتم تخزين القوائم المتصلة في الذاكرة على شكل:",
                options: ["Contiguous blocks", "Non-contiguous nodes", "Stack frames", "Binary trees"],
                options_ar: ["كتل متجاورة", "عقد غير متجاورة", "إطارات Stack", "أشجار ثنائية"],
                correct: 1,
                explanation: "Nodes can be scattered anywhere in the heap memory.",
                explanation_ar: "يمكن أن تكون العقد مبعثرة في أي مكان في ذاكرة الكومة."
            },
            {
                id: "ll-18",
                text: "Deleting a node given only the pointer to that node (and it's not the last one) can be done in:",
                text_ar: "حذف عقدة مع العلم فقط بالمؤشر لتلك العقدة (وهي ليست الأخيرة) يمكن القيام به في:",
                options: ["O(1)", "O(n)", "Impossible", "O(log n)"],
                options_ar: ["O(1)", "O(n)", "مستحيل", "O(log n)"],
                correct: 0,
                explanation: "Copy the data from the next node to the current node and delete the next node.",
                explanation_ar: "انسخ البيانات من العقدة التالية إلى العقدة الحالية واحذف العقدة التالية."
            },
            {
                id: "ll-19",
                text: "Which type of Linked List allows traversal in both directions?",
                text_ar: "أي نوع من القوائم المتصلة يسمح بالاجتياز في كلا الاتجاهين؟",
                options: ["Singly", "Doubly", "Circular Singly", "Skip List"],
                options_ar: ["Singly", "Doubly", "Circular Singly", "Skip List"],
                correct: 1,
                explanation: "Doubly Linked Lists have Next and Prev pointers.",
                explanation_ar: "تحتوي القوائم المتصلة المزدوجة على مؤشرات Next و Prev."
            },
            {
                id: "ll-20",
                text: "A dummy or sentinel node is used to:",
                text_ar: "يتم استخدام عقدة وهمية أو حارسة (Sentinel Node) لـ:",
                options: ["Store extra data", "Simplify boundary conditions", "Mark ends", "Increase speed"],
                options_ar: ["تخزين بيانات إضافية", "تبسيط شروط الحدود", "تحديد النهايات", "زيادة السرعة"],
                correct: 1,
                explanation: "It eliminates special handling for head/tail operations.",
                explanation_ar: "فهي تلغي المعالجة الخاصة لعمليات الرأس/الذيل."
            },
            {
                id: "ll-21",
                text: "Memory waste in a Doubly Linked List is due to:",
                text_ar: "يعود إهدار الذاكرة في القائمة المتصلة المزدوجة إلى:",
                options: ["Data fragmentation", "Extra pointer per node", "Padding", "None"],
                options_ar: ["تجزئة البيانات", "مؤشر إضافي لكل عقدة", "الحشو (Padding)", "لا شيء"],
                correct: 1,
                explanation: "Storing the 'previous' pointer consumes extra memory per node compared to SLL.",
                explanation_ar: "يستهلك تخزين المؤشر 'السابق' ذاكرة إضافية لكل عقدة مقارنة بـ SLL."
            },
            {
                id: "ll-22",
                text: "Finding the middle of a Linked List in one pass requires:",
                text_ar: "يتطلب العثور على منتصف قائمة متصلة في تمريرة واحدة:",
                options: ["Counting elements", "Two pointers (Slow/Fast)", "Recursion", "Stack"],
                options_ar: ["عد العناصر", "مؤشرين (بطيء/سريع)", "العودية", "Stack"],
                correct: 1,
                explanation: "Move fast pointer 2 steps and slow pointer 1 step; when fast ends, slow is at middle.",
                explanation_ar: "حرك المؤشر السريع خطوتين والبطيء خطوة واحدة؛ عندما ينتهي السريع، يكون البطيء في المنتصف."
            },
            {
                id: "ll-23",
                text: "A Linked List is a:",
                text_ar: "القائمة المتصلة هي:",
                options: ["Linear Data Structure", "Non-linear Data Structure", "Technically both", "Neither"],
                options_ar: ["بنية بيانات خطية", "بنية بيانات غير خطية", "كلاهما تقنياً", "لا شيء"],
                correct: 0,
                explanation: "Elements are arranged sequentially.",
                explanation_ar: "يتم ترتيب العناصر بالتسلسل."
            },
            {
                id: "ll-24",
                text: "Removing duplicates from an unsorted Linked List using hashing takes:",
                text_ar: "تستغرق إزالة التكرارات من قائمة متصلة غير مفروزة باستخدام التجزئة (Hashing):",
                options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                options_ar: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                correct: 0,
                explanation: "One pass with a Hash Set to track seen values.",
                explanation_ar: "تمريرة واحدة مع مجموعة تجزئة (Hash Set) لتتبع القيم التي تمت رؤيتها."
            },
            {
                id: "ll-25",
                text: "To check if a Linked List is a palindrome, one common approach involves:",
                text_ar: "للتحقق مما إذا كانت القائمة المتصلة متناظرة (Palindrome)، يتضمن أحد الأساليب الشائعة:",
                options: ["Reversing second half", "Sorting", "Hashing", "Deleting nodes"],
                options_ar: ["عكس النصف الثاني", "الفرز", "التجزئة", "حذف العقد"],
                correct: 0,
                explanation: "Reverse the second half and compare with the first half.",
                explanation_ar: "اعكس النصف الثاني وقارنه بالنصف الأول."
            },
            {
                id: "ll-26",
                text: "Insertion Sort on a Linked List is:",
                text_ar: "فرز الإدراج (Insertion Sort) على القائمة المتصلة هو:",
                options: ["Impossible", "Possible but inefficient", "Possible and stable", "O(n)"],
                options_ar: ["مستحيل", "ممكن ولكنه غير فعال", "ممكن ومستقر", "O(n)"],
                correct: 2,
                explanation: "It is possible and stable, though O(n^2).",
                explanation_ar: "إنه ممكن ومستقر، على الرغم من أنه O(n^2)."
            },
            {
                id: "ll-27",
                text: "Which problem is Josephus problem related to?",
                text_ar: "بأي مشكلة تتعلق مشكلة جوزيفوس (Josephus problem)؟",
                options: ["Stack", "Queue", "Circular Linked List", "Tree"],
                options_ar: ["Stack", "Queue", "Circular Linked List", "Tree"],
                correct: 2,
                explanation: "Circular Linked Lists naturally model the circle.",
                explanation_ar: "القوائم المتصلة الدائرية تمثل الدائرة بشكل طبيعي."
            },
            {
                id: "ll-28",
                text: "Cache performance of Linked Lists is generally:",
                text_ar: "أداء التخزين المؤقت (Cache) للقوائم المتصلة بشكل عام:",
                options: ["Better than Arrays", "Worse than Arrays", "Same as Arrays", "Optimal"],
                options_ar: ["أفضل من المصفوفات", "أسوأ من المصفوفات", "نفس المصفوفات", "أمثل"],
                correct: 1,
                explanation: "Non-contiguous memory leads to poor spatial locality and more cache misses.",
                explanation_ar: "تؤدي الذاكرة غير المتجاورة إلى ضعف المكانية المكانية والمزيد من فقدان التخزين المؤقت."
            },
            {
                id: "ll-29",
                text: "Adding two numbers represented by Linked Lists (reverse order) involves:",
                text_ar: "تتضمن إضافة رقمين ممثلين بقوائم متصلة (ترتيب عكسي):",
                options: ["Traversing and carrying over", "Converting to int", "Reversing first", "Using stacks"],
                options_ar: ["الاجتياز والحمل (carry)", "التحويل إلى int", "العكس أولاً", "استخدام المكدسات"],
                correct: 0,
                explanation: "Traverse both lists, sum nodes + carry, and create new result node.",
                explanation_ar: "اجتياز القائمتين، جمع العقد + الحمل، وإنشاء عقدة نتيجة جديدة."
            },
            {
                id: "ll-30",
                text: "If Head is null, the Linked List is:",
                text_ar: "إذا كان Head يساوي null، فإن القائمة المتصلة تكون:",
                options: ["Full", "Empty", "One node", "Invalid"],
                options_ar: ["ممتلئة", "فارغة", "عقدة واحدة", "غير صالحة"],
                correct: 1,
                explanation: "A null head pointer signifies an empty list.",
                explanation_ar: "يشير مؤشر الرأس الفارغ إلى قائمة فارغة."
            },
            {
                id: "ll-31",
                text: "Inserting at the end of a Singly Linked List with only Head pointer takes:",
                text_ar: "يتطلب الإدراج في نهاية قائمة متصلة أحادية مع وجود مؤشر الرأس فقط:",
                options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
                options_ar: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
                correct: 1,
                explanation: "You must traverse the entire list to find the last node.",
                explanation_ar: "يجب عليك اجتياز القائمة بأكملها للعثور على العقدة الأخيرة."
            },
            {
                id: "ll-32",
                text: "Polynomial addition is an application of:",
                text_ar: "جمع كثيرات الحدود هو تطبيق لـ:",
                options: ["Arrays", "Linked Lists", "Stacks", "Heaps"],
                options_ar: ["Arrays", "Linked Lists", "Stacks", "Heaps"],
                correct: 1,
                explanation: "Linked lists can represent terms of a polynomial efficiently, especially if sparse.",
                explanation_ar: "يمكن للقوائم المتصلة تمثيل حدود كثيرة الحدود بكفاءة، خاصة إذا كانت متناثرة."
            },
            {
                id: "ll-33",
                text: "The 'Runner' technique refers to:",
                text_ar: "تشير تقنية 'العداء' (Runner technique) إلى:",
                options: ["Using two pointers", "Running code fast", "Skipping nodes", "Deleting nodes"],
                options_ar: ["استخدام مؤشرين", "تشغيل الكود بسرعة", "تخطي العقد", "حذف العقد"],
                correct: 0,
                explanation: "Also known as the Fast/Slow pointer or Tortoise/Hare technique.",
                explanation_ar: "تُعرف أيضاً بتقنية المؤشر السريع/البطيء أو السلحفاة/الأرنب."
            },
            {
                id: "ll-34",
                text: "What happens if you free a node without updating the previous node's next pointer?",
                text_ar: "ماذا يحدث إذا قمت بتحرير عقدة دون تحديث المؤشر التالي للعقدة السابقة؟",
                options: ["Dangling Pointer", "Memory Leak", "Correct deletion", "Stack Overflow"],
                options_ar: ["مؤشر معلق (Dangling Pointer)", "تسرب الذاكرة", "حذف صحيح", "طفح المكدس"],
                correct: 0,
                explanation: "The previous node still points to the deallocated memory location.",
                explanation_ar: "لا تزال العقدة السابقة تشير إلى موقع الذاكرة الذي تم إلغاء تخصيصه."
            },
            {
                id: "ll-35",
                text: "Swapping nodes in a Linked List without swapping data requires changing:",
                text_ar: "يتطلب تبديل العقد في قائمة متصلة دون تبديل البيانات تغيير:",
                options: ["Values", "Links (Pointers)", "Head only", "Tail only"],
                options_ar: ["القيم", "الروابط (المؤشرات)", "الرأس فقط", "الذيل فقط"],
                correct: 1,
                explanation: "You adjust the next (and prev) pointers to reorder the nodes.",
                explanation_ar: "تقوم بضبط المؤشرات التالية (والسابقة) لإعادة ترتيب العقد."
            },
            {
                id: "ll-36",
                text: "Segregating even and odd nodes in a Linked List can be done in:",
                text_ar: "يمكن فصل العقد الزوجية والفردية في قائمة متصلة في:",
                options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                options_ar: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                correct: 0,
                explanation: "One pass is sufficient to split and reconnect them.",
                explanation_ar: "تمريرة واحدة كافية لفصلها وإعادة توصيلها."
            },
            {
                id: "ll-37",
                text: "The address of the first node is aka:",
                text_ar: "يُعرف عنوان العقدة الأولى بـ:",
                options: ["Base address", "Head", "Top", "Root"],
                options_ar: ["العنوان الأساسي", "الرأس (Head)", "الأعلى (Top)", "الجذر (Root)"],
                correct: 1,
                explanation: "The pointer to the first node is called the Head.",
                explanation_ar: "يسمى المؤشر إلى العقدة الأولى بالرأس (Head)."
            },
            {
                id: "ll-38",
                text: "Implementing a Queue with a Circular Linked List requires how many pointers?",
                text_ar: "كم عدد المؤشرات المطلوبة لتنفيذ طابور باستخدام قائمة متصلة دائرية؟",
                options: ["Two (Front, Rear)", "One (Rear only)", "Three", "Zero"],
                options_ar: ["اثنان (مقدمة، خلفية)", "واحد (خلفي فقط)", "ثلاثة", "صفر"],
                correct: 1,
                explanation: "A single 'Rear' pointer is sufficient; Rear->Next is Front.",
                explanation_ar: "يكفي مؤشر 'خلفي' واحد؛ حيث يشير Rear->Next إلى المقدمة."
            },
            {
                id: "ll-39",
                text: "Find the Nth node from the end of a linked list requires:",
                text_ar: "يتطلب العثور على العقدة N من نهاية قائمة متصلة:",
                options: ["Two passes or Two pointers", "Sorting", "Hashing", "Binary Search"],
                options_ar: ["تمريرتين أو مؤشرين", "فرز", "تجزئة", "بحث ثنائي"],
                correct: 0,
                explanation: "Move fast pointer N steps, then move both until fast reaches end.",
                explanation_ar: "حرك المؤشر السريع N خطوات، ثم حرك كليهما حتى يصل السريع للنهاية."
            },
            {
                id: "ll-40",
                text: "Can a Linked List contain a cycle?",
                text_ar: "هل يمكن أن تحتوي القائمة المتصلة على دورة؟",
                options: ["No", "Yes", "Only Doubly Linked List", "Only if size > 10"],
                options_ar: ["لا", "نعم", "فقط القائمة المتصلة المزدوجة", "فقط إذا كان الحجم > 10"],
                correct: 1,
                explanation: "Yes, if a node points back to a previous node in the list.",
                explanation_ar: "نعم، إذا كانت العقدة تشير مرة أخرى إلى عقدة سابقة في القائمة."
            }
        ]
    },
    {
        id: "tree",
        title: "Trees",
        title_ar: "الأشجار (Trees)",
        description: "Binary Trees, Traversals (Inorder, Preorder, Postorder).",
        description_ar: "الأشجار الثنائية، الاجتياز (Inorder, Preorder, Postorder).",
        icon: "🌳",
        questions: [
            {
                id: "tr-1",
                text: "What is the maximum number of nodes in a binary tree of height 'h' (root at height 0)?",
                text_ar: "ما هو أقصى عدد من العقد في شجرة ثنائية ارتفاعها 'h' (الجذر عند الارتفاع 0)؟",
                options: ["2^h", "2^(h+1) - 1", "2^h - 1", "h^2"],
                options_ar: ["2^h", "2^(h+1) - 1", "2^h - 1", "h^2"],
                correct: 1,
                explanation: "Geometric series sum: 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1.",
                explanation_ar: "مجموع المتسلسلة الهندسية: 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1."
            },
            {
                id: "tr-2",
                text: "Which traversal visits the root node LAST?",
                text_ar: "أي اجتياز يزور عقدة الجذر أخيراً؟",
                options: ["Preorder", "Inorder", "Postorder", "Level Order"],
                options_ar: ["Preorder", "Inorder", "Postorder", "Level Order"],
                correct: 2,
                explanation: "Postorder traversal: Left -> Right -> Root.",
                explanation_ar: "Postorder traversal: يسار -> يمين -> جذر."
            },
            {
                id: "tr-3",
                text: "In a Binary Search Tree (BST), the left child is always:",
                text_ar: "في شجرة البحث الثنائية (BST)، يكون الابن الأيسر دائماً:",
                options: ["Greater than root", "Smaller than root", "Equal to root", "Any value"],
                options_ar: ["أكبر من الجذر", "أصغر من الجذر", "مساوياً للجذر", "أي قيمة"],
                correct: 1,
                explanation: "BST property: Left < Root < Right.",
                explanation_ar: "خاصية BST: يسار < جذر < يمين."
            },
            {
                id: "tr-4",
                text: "For the tree: Root(A) -> Left(B), Right(C). What is the Preorder traversal?",
                text_ar: "للشجرة: Root(A) -> Left(B), Right(C). ما هو اجتياز Preorder؟",
                options: ["B A C", "A B C", "B C A", "C B A"],
                options_ar: ["B A C", "A B C", "B C A", "C B A"],
                correct: 1,
                explanation: "Preorder: Root -> Left -> Right (A -> B -> C).",
                explanation_ar: "Preorder: جذر -> يسار -> يمين (A -> B -> C)."
            },
            {
                id: "tr-5",
                text: "Which traversal is natural for processing a BST in sorted order?",
                text_ar: "أي اجتياز يعتبر طبيعياً لمعالجة BST بترتيب مفروز؟",
                options: ["Preorder", "Inorder", "Postorder", "Level Order"],
                options_ar: ["Preorder", "Inorder", "Postorder", "Level Order"],
                correct: 1,
                explanation: "Inorder traversal of a BST visits nodes in non-decreasing order.",
                explanation_ar: "يزور اجتياز Inorder لشجرة BST العقد بترتيب غير متناقص."
            },
            {
                id: "tr-6",
                text: "What is the worst-case time complexity for searching in a BST?",
                text_ar: "ما هو أسوأ تعقيد زمني للبحث في BST؟",
                options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
                options_ar: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "In a skewed tree (like a linked list), searching takes O(n).",
                explanation_ar: "في شجرة مائلة (مثل القائمة المتصلة)، يستغرق البحث O(n)."
            },
            {
                id: "tr-7",
                text: "AVL Tree is a type of:",
                text_ar: "شجرة AVL هي نوع من:",
                options: ["Binary Search Tree", "Heap", "Hash Table", "Graph"],
                options_ar: ["Binary Search Tree", "Heap", "Hash Table", "Graph"],
                correct: 0,
                explanation: "AVL trees are self-balancing Binary Search Trees.",
                explanation_ar: "أشجار AVL هي أشجار بحث ثنائية ذاتية التوازن."
            },
            {
                id: "tr-8",
                text: "In a min-heap, the root node contains the:",
                text_ar: "في min-heap، تحتوي عقدة الجذر على:",
                options: ["Maximum element", "Minimum element", "Median element", "Random element"],
                options_ar: ["العنصر الأقصى", "العنصر الأدنى", "العنصر الوسيط", "عنصر عشوائي"],
                correct: 1,
                explanation: "In a min-heap, every parent is smaller than its children.",
                explanation_ar: "في min-heap، يكون كل أب أصغر من أبنائه."
            },
            {
                id: "tr-9",
                text: "What is the height of a complete binary tree with N nodes?",
                text_ar: "ما هو ارتفاع شجرة ثنائية كاملة باحتواء N عقدة؟",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                options_ar: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: 1,
                explanation: "A complete binary tree is balanced, so height is log2(N).",
                explanation_ar: "الشجرة الثنائية الكاملة متوازنة، لذا الارتفاع هو log2(N)."
            },
            {
                id: "tr-10",
                text: "The number of edges in a tree with N nodes is always:",
                text_ar: "عدد الحواف في شجرة تحتوي على N عقدة هو دائماً:",
                options: ["N", "N - 1", "N + 1", "2N"],
                options_ar: ["N", "N - 1", "N + 1", "2N"],
                correct: 1,
                explanation: "A tree is a connected acyclic graph with N-1 edges.",
                explanation_ar: "الشجرة عبارة عن رسم بياني متصل غير دوري بـ N-1 حافة."
            },
            {
                id: "tr-11",
                text: "Which data structure is used for Level Order Traversal?",
                text_ar: "أي بنية بيانات تستخدم لاجتياز ترتيب المستوى؟",
                options: ["Stack", "Queue", "Set", "Map"],
                options_ar: ["Stack", "Queue", "Set", "Map"],
                correct: 1,
                explanation: "BFS (Level Order) uses a queue to track nodes at the current level.",
                explanation_ar: "يستخدم BFS (ترتيب المستوى) طابوراً لتتبع العقد في المستوى الحالي."
            },
            {
                id: "tr-12",
                text: "A Full Binary Tree is one where:",
                text_ar: "الشجرة الثنائية الممتلئة (Full Binary Tree) هي التي:",
                options: ["Every node has 0 or 2 children", "Every level is completely filled", "Left child is always smaller", "Height is minimal"],
                options_ar: ["كل عقدة لها 0 أو 2 أبناء", "كل مستوى مملوء بالكامل", "الابن الأيسر أصغر دائماً", "الارتفاع هو الحد الأدنى"],
                correct: 0,
                explanation: "Also known as a proper binary tree, every node has either 0 or 2 children.",
                explanation_ar: "تُعرف أيضاً بالشجرة الثنائية السليمة، حيث تحتوي كل عقدة إما على 0 أو 2 أبناء."
            },
            {
                id: "tr-13",
                text: "What is the maximum number of nodes at level 'L' in a binary tree?",
                text_ar: "ما هو الحد الأقصى لعدد العقد في المستوى 'L' في شجرة ثنائية؟",
                options: ["2*L", "2^L", "L^2", "2^(L-1)"],
                options_ar: ["2*L", "2^L", "L^2", "2^(L-1)"],
                correct: 1,
                explanation: "At level 0: 1 node (2^0). At level L: 2^L nodes.",
                explanation_ar: "في المستوى 0: عقدة واحدة (2^0). في المستوى L: 2^L عقدة."
            },
            {
                id: "tr-14",
                text: "Which of these is NOT a self-balancing BST?",
                text_ar: "أي مما يلي ليست شجرة بحث ثنائية (BST) ذاتية التوازن؟",
                options: ["AVL Tree", "Red-Black Tree", "Splay Tree", "Standard BST"],
                options_ar: ["AVL Tree", "Red-Black Tree", "Splay Tree", "Standard BST"],
                correct: 3,
                explanation: "Standard BST does not guarantee balance explicitly.",
                explanation_ar: "لا تضمن BST القياسية التوازن بشكل صريح."
            },
            {
                id: "tr-15",
                text: "Huffman coding uses which type of tree?",
                text_ar: "يستخدم ترميز هوفمان (Huffman coding) أي نوع من الأشجار؟",
                options: ["Binary Tree", "Trie", "B-Tree", "AVL Tree"],
                options_ar: ["Binary Tree", "Trie", "B-Tree", "AVL Tree"],
                correct: 0,
                explanation: "It constructs a binary tree based on character frequencies.",
                explanation_ar: "يقوم ببناء شجرة ثنائية بناءً على تكرار الأحرف."
            },
            {
                id: "tr-16",
                text: "Threaded Binary Trees main advantage is:",
                text_ar: "الميزة الرئيسية للأشجار الثنائية المترابطة (Threaded Binary Trees) هي:",
                options: ["Faster search", "Less memory", "Traversals without stack/recursion", "Self-balancing"],
                options_ar: ["بحث أسرع", "ذاكرة أقل", "الاجتياز بدون مكدس/عودية", "التوازن الذاتي"],
                correct: 2,
                explanation: "Threads (pointers to predecessor/successor) allow traversal without extra space.",
                explanation_ar: "تسمح الخيوط (مؤشرات إلى السلف/الخلف) بالاجتياز دون مساحة إضافية."
            },
            {
                id: "tr-17",
                text: "Deleting a leaf node in a BST takes:",
                text_ar: "حذف عقدة ورقية في BST يستغرق:",
                options: ["O(1)", "O(log n)", "O(n)", "O(Height)"],
                options_ar: ["O(1)", "O(log n)", "O(n)", "O(Height)"],
                correct: 3,
                explanation: "It depends on the height of the tree to find the node.",
                explanation_ar: "يعتمد ذلك على ارتفاع الشجرة للعثور على العقدة."
            },
            {
                id: "tr-18",
                text: "Postorder traversal is used for:",
                text_ar: "يستخدم اجتياز Postorder لـ:",
                options: ["Deleting the tree", "Copying the tree", "Calculating height", "All of the above"],
                options_ar: ["حذف الشجرة", "نسخ الشجرة", "حساب الارتفاع", "كل ما سبق"],
                correct: 3,
                explanation: "Postorder visits children before the parent, useful for deletion and bottom-up calculations.",
                explanation_ar: "يزور Postorder الأبناء قبل الأب، وهو مفيد للحذف والحسابات من الأسفل إلى الأعلى."
            },
            {
                id: "tr-19",
                text: "To construct a unique binary tree, which pair of traversals is sufficient?",
                text_ar: "لبناء شجرة ثنائية فريدة، أي زوج من الاجتيازات كافٍ؟",
                options: ["Inorder and Preorder", "Preorder and Postorder", "Level Order and Postorder", "None"],
                options_ar: ["Inorder و Preorder", "Preorder و Postorder", "Level Order و Postorder", "لا شيء مما سبق"],
                correct: 0,
                explanation: "Inorder plus Preorder (or Postorder) uniquely identifies a binary tree.",
                explanation_ar: "Inorder مع Preorder (أو Postorder) يحدد شجرة ثنائية بشكل فريد."
            },
            {
                id: "tr-20",
                text: "The conceptual structure of a Directory (FileSystem) is:",
                text_ar: "الهيكل المفاهيمي للدليل (نظام الملفات) هو:",
                options: ["Graph", "Tree", "Queue", "Stack"],
                options_ar: ["رسم بياني (Graph)", "شجرة (Tree)", "طابور (Queue)", "مكدس (Stack)"],
                correct: 1,
                explanation: "Hierarchical file systems are structured as trees.",
                explanation_ar: "يتم تنظيم أنظمة الملفات الهرمية كأشجار."
            },
            {
                id: "tr-21",
                text: "Finding the Lowest Common Ancestor (LCA) in a BST takes:",
                text_ar: "العثور على السلف المشترك الأدنى (LCA) في BST يستغرق:",
                options: ["O(n)", "O(Height)", "O(n^2)", "O(1)"],
                options_ar: ["O(n)", "O(Height)", "O(n^2)", "O(1)"],
                correct: 1,
                explanation: "You traverse down from the root based on values.",
                explanation_ar: "أنت تجتاز للأسفل من الجذر بناءً على القيم."
            },
            {
                id: "tr-22",
                text: "Mirroring a binary tree involves:",
                text_ar: "عكس (Mirroring) شجرة ثنائية يتضمن:",
                options: ["Swapping left and right children recursively", "Rotating left", "Rotating right", "Sorting"],
                options_ar: ["تبديل الأبناء الأيسر والأيمن بشكل متكرر (recursively)", "التدوير لليسار", "التدوير لليمين", "الفرز"],
                correct: 0,
                explanation: "Recursively swap left and right pointers at every node.",
                explanation_ar: "تبديل المؤشرات اليسرى واليمنى بشكل متكرر عند كل عقدة."
            },
            {
                id: "tr-23",
                text: "Diameter of a tree is:",
                text_ar: "قطر الشجرة هو:",
                options: ["Length of longest path between any two nodes", "Height of tree", "Number of leaf nodes", "Sum of all nodes"],
                options_ar: ["طول أطول مسار بين أي عقدتين", "ارتفاع الشجرة", "عدد العقد الورقية", "مجموع كل العقد"],
                correct: 0,
                explanation: "The diameter (or width) is the number of edges on the longest path between two leaf nodes.",
                explanation_ar: "القطر (أو العرض) هو عدد الحواف في أطول مسار بين عقدتين ورقيتين."
            },
            {
                id: "tr-24",
                text: "Serialization of a Binary Tree means:",
                text_ar: "تسلسل (Serialization) شجرة ثنائية يعني:",
                options: ["Converting to a string/array representation", "Sorting", "Balancing", "Deleting"],
                options_ar: ["التحويل إلى تمثيل نصي أو مصفوفة", "الفرز", "الموازنة", "الحذف"],
                correct: 0,
                explanation: "Storing the tree structure in a file or buffer to reconstruct it later.",
                explanation_ar: "تخزين هيكل الشجرة في ملف أو مخزن مؤقت لإعادة بنائها لاحقاً."
            },
            {
                id: "tr-25",
                text: "A Perfect Binary Tree of height h has how many leaf nodes?",
                text_ar: "شجرة ثنائية مثالية بارتفاع h تحتوي على كم عدد من العقد الورقية؟",
                options: ["2^h", "2^(h-1)", "h", "2h"],
                options_ar: ["2^h", "2^(h-1)", "h", "2h"],
                correct: 0,
                explanation: "At height h (assuming root at 0), there are 2^h leaves.",
                explanation_ar: "عند ارتفاع h (بافتراض أن الجذر عند الارتفاع 0)، يوجد 2^h ورقة."
            },
            {
                id: "tr-26",
                text: "Which tree structure is used in database indexing?",
                text_ar: "أي هيكل شجرة يستخدم في فهرسة قواعد البيانات؟",
                options: ["B-Tree", "Binary Tree", "Heap", "Stack"],
                options_ar: ["B-Tree", "شجرة ثنائية (Binary Tree)", "كومة (Heap)", "مكدس (Stack)"],
                correct: 0,
                explanation: "B-Trees (and B+ Trees) are optimized for disk storage and indexing.",
                explanation_ar: "تعد أشجار B (وأشجار +B) محسنة لتخزين القرص والفهرسة."
            },
            {
                id: "tr-27",
                text: "Trie data structure is efficient for:",
                text_ar: "بنية بيانات Trie فعالة لـ:",
                options: ["Dictionary/Prefix search", "Sorting numbers", "Shortest path", "MST"],
                options_ar: ["البحث في القاموس أو البادئة", "فرز الأرقام", "أقصر مسار", "الحد الأدنى لشجرة الامتداد (MST)"],
                correct: 0,
                explanation: "Tries (Prefix Trees) store strings character by character.",
                explanation_ar: "تخزن Tries (أشجار البادئة) السلاسل حرفاً بحرف."
            },
            {
                id: "tr-28",
                text: "Evaluating an expression tree is typically done using:",
                text_ar: "يتم تقييم شجرة التعبير عادةً باستخدام:",
                options: ["Postorder Traversal", "Inorder Traversal", "Preorder Traversal", "BFS"],
                options_ar: ["اجتياز Postorder", "اجتياز Inorder", "اجتياز Preorder", "البحث بالعرض أولاً (BFS)"],
                correct: 0,
                explanation: "Postorder corresponds to evaluating sub-expressions first (like RPN).",
                explanation_ar: "يتوافق Postorder مع تقييم التعبيرات الفرعية أولاً (مثل تدوين RPN)."
            },
            {
                id: "tr-29",
                text: "Left-Skewed Binary Tree is equivalent to:",
                text_ar: "الشجرة الثنائية المائلة لليسار تعادل:",
                options: ["Linked List", "Array", "Stack", "Queue"],
                options_ar: ["قائمة متصلة (Linked List)", "مصفوفة (Array)", "مكدس (Stack)", "طابور (Queue)"],
                correct: 0,
                explanation: "Every node has only a left child, forming a linear chain.",
                explanation_ar: "كل عقدة لها ابن أيسر فقط، مما يشكل سلسلة خطية."
            },
            {
                id: "tr-30",
                text: "Successor of a node in BST is:",
                text_ar: "خليفة (Successor) العقدة في BST هو:",
                options: ["Smallest node in right subtree", "Largest node in left subtree", "Parent", "Root"],
                options_ar: ["أصغر عقدة في الشجرة الفرعية اليمنى", "أكبر عقدة في الشجرة الفرعية اليسرى", "الأب", "الجذر"],
                correct: 0,
                explanation: "The in-order successor is the minimum value in the right subtree.",
                explanation_ar: "الخليفة في الترتيب (in-order successor) هو القيمة الصغرى في الشجرة الفرعية اليمنى."
            },
            {
                id: "tr-31",
                text: "Checking if a binary tree is a BST requires checking:",
                text_ar: "التحقق مما إذا كانت الشجرة الثنائية هي BST يتطلب التحقق من:",
                options: ["Every node respects min/max constraints", "Root > Left", "Root < Right", "Height balance"],
                options_ar: ["كل عقدة تحترم قيود الحد الأدنى والحد الأقصى", "الجذر > اليسار", "الجذر < اليمين", "توازن الارتفاع"],
                correct: 0,
                explanation: "Simply checking immediate children is insufficient; range constraints must propagate.",
                explanation_ar: "مجرد التحقق من الأبناء المباشرين غير كافٍ؛ يجب أن تنتشر قيود النطاق."
            },
            {
                id: "tr-32",
                text: "What traversal prints nodes level by level?",
                text_ar: "أي اجتياز يطبع العقد مستوى بمستوى؟",
                options: ["Level Order (BFS)", "Preorder", "Inorder", "Postorder"],
                options_ar: ["ترتيب المستوى (BFS)", "Preorder", "Inorder", "Postorder"],
                correct: 0,
                explanation: "Standard Level Order Traversal.",
                explanation_ar: "اجتياز ترتيب المستوى القياسي."
            },
            {
                id: "tr-33",
                text: "Morris Traversal achieves inorder traversal with space complexity:",
                text_ar: "يحقق اجتياز موريس (Morris Traversal) اجتيازاً مرتباً (inorder) بتعقيد مساحة:",
                options: ["O(1)", "O(n)", "O(log n)", "O(h)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(h)"],
                correct: 0,
                explanation: "It modifies the tree temporarily (threading) to avoid using recursion or a stack.",
                explanation_ar: "يقوم بتعديل الشجرة مؤقتاً (threading) لتجنب استخدام العودية أو المكدس."
            },
            {
                id: "tr-34",
                text: "Given Preorder and Inorder, the root is:",
                text_ar: "بمعطيات Preorder و Inorder، الجذر هو:",
                options: ["First element of Preorder", "Last element of Preorder", "First element of Inorder", "Middle of Inorder"],
                options_ar: ["العنصر الأول في Preorder", "العنصر الأخير في Preorder", "العنصر الأول في Inorder", "منتصف Inorder"],
                correct: 0,
                explanation: "Preorder always visits root first.",
                explanation_ar: "اجتياز Preorder يزور الجذر دائماً أولاً."
            },
            {
                id: "tr-35",
                text: "Complexity to insert in a Binary Heap?",
                text_ar: "تعقيد الإدراج في الكومة الثنائية (Binary Heap) هو:",
                options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
                options_ar: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
                correct: 0,
                explanation: "You insert at the end and bubble up.",
                explanation_ar: "تقوم بالإدراج في النهاية ثم الصعود للأعلى (bubble up)."
            },
            {
                id: "tr-36",
                text: "Sum of leaf nodes algorithm typically uses:",
                text_ar: "خوارزمية مجموع العقد الورقية تستخدم عادةً:",
                options: ["DFS/Recursion", "Binary Search", "Sorting", "Greedy"],
                options_ar: ["البحث بالعمق (DFS) / العودية", "البحث الثنائي", "الفرز", "الخوارزمية الجشعة (Greedy)"],
                correct: 0,
                explanation: "Traverse the tree, if leaf, add value, else recurse.",
                explanation_ar: "اجتياز الشجرة، إذا كانت العقدة ورقة، أضف قيمتها، وإلا استمر بالاجتياز بشكل عودي."
            },
            {
                id: "tr-37",
                text: "What is an internal node?",
                text_ar: "ما هي العقدة الداخلية (Internal Node)؟",
                options: ["Node with at least one child", "Leak node", "Root only", "Null node"],
                options_ar: ["عقدة لها ابن واحد على الأقل", "عقدة ورقية", "الجذر فقط", "عقدة فارغة (Null)"],
                correct: 0,
                explanation: "Any node that is not a leaf is an internal node.",
                explanation_ar: "أي عقدة ليست ورقة تعتبر عقدة داخلية."
            },
            {
                id: "tr-38",
                text: "Segment Tree is used for:",
                text_ar: "تستخدم شجرة القطع (Segment Tree) لـ:",
                options: ["Range queries", "String matching", "Sorting", "Pathfinding"],
                options_ar: ["استعلامات النطاق (Range queries)", "مطابقة السلاسل", "الفرز", "إيجاد المسارات"],
                correct: 0,
                explanation: "Efficiently answers range sum/min/max queries.",
                explanation_ar: "تجيب بكفاءة على استعلامات المجموع أو الحد الأدنى أو الأقصى للنطاق."
            },
            {
                id: "tr-39",
                text: "Top View of a Binary Tree requires:",
                text_ar: "العرض العلوي (Top View) لشجرة ثنائية يتطلب:",
                options: ["Level Order and Horizontal Distance", "Pre-order only", "In-order only", "Post-order only"],
                options_ar: ["ترتيب المستوى والمسافة الأفقية", "الترتيب المسبق فقط", "الترتيب البيني فقط", "الترتيب البعدي فقط"],
                correct: 0,
                explanation: "Top view is the set of nodes visible when the tree is viewed from the top, calculated using horizontal distances.",
                explanation_ar: "العرض العلوي هو مجموعة العقد المرئية عند النظر للشجرة من الأعلى، ويحسب باستخدام المسافات الأفقية."
            },
            {
                id: "tr-40",
                text: "ZigZag traversal uses:",
                text_ar: "اجتياز ZigZag يستخدم:",
                options: ["Two stacks or Deque", "One queue", "Recursion only", "Array"],
                options_ar: ["مكدسين أو Deque", "طابور واحد", "العودية فقط", "مصفوفة"],
                correct: 0,
                explanation: "You need to alternate direction level by level, which is efficiently done using two stacks.",
                explanation_ar: "تحتاج إلى تبديل الاتجاه مستوى تلو الآخر، وهو ما يتم بكفاءة باستخدام مكدسين."
            },
            {
                id: "tr-tf-1",
                text: "In a binary search tree, the left child's value is always greater than the parent's value.",
                text_ar: "في شجرة البحث الثنائية، تكون قيمة الابن الأيسر دائماً أكبر من قيمة الأب.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "In a BST, the left child is always less than or equal to the parent.",
                explanation_ar: "في شجرة البحث الثنائية (BST)، يكون الابن الأيسر دائماً أصغر من أو يساوي الأب."
            },
            {
                id: "tr-tf-2",
                text: "A binary tree with N nodes has exactly N-1 edges.",
                text_ar: "الشجرة الثنائية التي تحتوي على N من العقد لها بالضبط N-1 من الحواف.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "In any tree, the number of edges is one less than the number of nodes.",
                explanation_ar: "في أي شجرة، عدد الحواف أقل بواحد من عدد العقد."
            }
        ]
    },
    {
        id: "searching",
        title: "Searching Algos",
        title_ar: "خوارزميات البحث",
        description: "Linear search, Binary search, and optimized search techniques.",
        description_ar: "البحث الخطي، البحث الثنائي، وتقنيات البحث المحسنة.",
        icon: "🔍",
        questions: [
            {
                id: "sr-1",
                text: "What is the precondition for Binary Search?",
                text_ar: "ما هو الشرط المسبق للبحث الثنائي (Binary Search)؟",
                options: ["Array must be sorted", "Array must be unsorted", "Array size must be even", "No precondition"],
                options_ar: ["يجب أن تكون المصفوفة مرتبة", "يجب أن تكون المصفوفة غير مرتبة", "يجب أن يكون حجم المصفوفة زوجياً", "لا يوجد شرط مسبق"],
                correct: 0,
                explanation: "Binary search relies on the sorted property to eliminate half the search space.",
                explanation_ar: "يعتمد البحث الثنائي على خاصية الترتيب لاستبعاد نصف مساحة البحث في كل خطوة."
            },
            {
                id: "sr-2",
                text: "What is the worst-case time complexity of Linear Search?",
                text_ar: "ما هو أسوأ تعقيد زمني للبحث الخطي (Linear Search)؟",
                options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
                options_ar: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
                correct: 2,
                explanation: "In the worst case (element not present or at the end), it checks all n elements.",
                explanation_ar: "في أسوأ الحالات (العنصر غير موجود أو في النهاية)، يتم فحص جميع عناصر المصفوفة (n عنصر)."
            },
            {
                id: "sr-3",
                text: "What is the best-case time complexity of Binary Search?",
                text_ar: "ما هو أفضل تعقيد زمني للبحث الثنائي؟",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 0,
                explanation: "Best case is when the middle element is the target: O(1).",
                explanation_ar: "أفضل حالة هي عندما يكون العنصر الأوسط هو الهدف مباشرة: O(1)."
            },
            {
                id: "sr-4",
                text: "Binary Search is applicable to which data structure?",
                text_ar: "على أي بنية بيانات يمكن تطبيق البحث الثنائي؟",
                options: ["Sorted Array", "Linked List (Standard)", "Stack", "Queue"],
                options_ar: ["مصفوفة مرتبة", "قائمة متصلة (قياسية)", "مكدس", "طابور"],
                correct: 0,
                explanation: "Direct access is required for efficient Binary Search, making standard Linked Lists unsuitable (O(n) to find middle).",
                explanation_ar: "الوصول المباشر مطلوب للبحث الثنائي الفعال، مما يجعل القوائم المتصلة القياسية غير مناسبة (تستغرق O(n) للعثور على الوسط)."
            },
            {
                id: "sr-5",
                text: "Jump Search moves ahead by fixed steps. What is the optimal step size?",
                text_ar: "يتحقق البحث بالقفز (Jump Search) عبر خطوات ثابتة. ما هو حجم الخطوة الأمثل؟",
                options: ["n/2", "sqrt(n)", "log n", "1"],
                options_ar: ["n/2", "sqrt(n)", "log n", "1"],
                correct: 1,
                explanation: "The optimal step size is the square root of n.",
                explanation_ar: "حجم الخطوة الأمثل هو الجذر التربيعي لـ n."
            },
            {
                id: "sr-6",
                text: "Interpolation Search works best on:",
                text_ar: "يعمل بحث الاستكمال (Interpolation Search) بشكل أفضل على:",
                options: ["Randomly distributed data", "Uniformly distributed data", "Clustered data", "Any sorted data"],
                options_ar: ["البيانات الموزعة عشوائياً", "البيانات الموزعة بانتظام", "البيانات المتكتلة", "أي بيانات مرتبة"],
                correct: 1,
                explanation: "It estimates the position based on the value distribution.",
                explanation_ar: "يقوم بتخمين الموضع بناءً على توزيع القيم."
            },
            {
                id: "sr-7",
                text: "Ternary Search cuts the search space into:",
                text_ar: "البحث الثلاثي (Ternary Search) يقسم مساحة البحث إلى:",
                options: ["2 parts", "3 parts", "4 parts", "Random parts"],
                options_ar: ["جزأين", "3 أجزاء", "4 أجزاء", "أجزاء عشوائية"],
                correct: 1,
                explanation: "It divides the array into three parts using two midpoints.",
                explanation_ar: "يقوم بتقسيم المصفوفة إلى ثلاثة أجزاء باستخدام نقطتي منتصف."
            },
            {
                id: "sr-8",
                text: "Which search algorithm is preferred for unbounded arrays (infinite size)?",
                text_ar: "أي خوارزمية بحث تفضل للمصفوفات غير المحدودة (ذات الحجم اللانهائي)؟",
                options: ["Binary Search", "Exponential Search", "Linear Search", "Jump Search"],
                options_ar: ["البحث الثنائي", "البحث الأسي (Exponential Search)", "البحث الخطي", "البحث بالقفز"],
                correct: 1,
                explanation: "Exponential search finds the range where the element exists, then does binary search.",
                explanation_ar: "البحث الأسي يجد النطاق الذي يوجد فيه العنصر، ثم يقوم ببحث ثنائي."
            },
            {
                id: "sr-9",
                text: "What is the average case complexity of Linear Search?",
                text_ar: "ما هو تعقيد البحث الخطي في الحالة المتوسطة؟",
                options: ["O(n)", "O(n/2)", "O(log n)", "O(1)"],
                options_ar: ["O(n)", "O(n/2)", "O(log n)", "O(1)"],
                correct: 0,
                explanation: "On average, you scan half the elements, which is still O(n).",
                explanation_ar: "في المتوسط، تقوم بمسح نصف العناصر، وهو ما يظل O(n)."
            },
            {
                id: "sr-10",
                text: "In Binary Search, if element is smaller than mid, we search in:",
                text_ar: "في البحث الثنائي، إذا كان العنصر أصغر من المنتصف، نبحث في:",
                options: ["Right half", "Left half", "Current position", "Whole array"],
                options_ar: ["النصف الأيمن", "النصف الأيسر", "الموضع الحالي", "المصفوفة بأكملها"],
                correct: 1,
                explanation: "Since the array is sorted ascendingly, smaller elements are to the left.",
                explanation_ar: "بما أن المصفوفة مرتبة تصاعدياً، فإن العناصر الأصغر تكون على اليسار."
            },
            {
                id: "sr-11",
                text: "The recurrence relation for Binary Search is:",
                text_ar: "علاقة التكرار (Recurrence) للبحث الثنائي هي:",
                options: ["T(n) = T(n-1) + 1", "T(n) = 2T(n/2) + 1", "T(n) = T(n/2) + 1", "T(n) = T(n/3) + 1"],
                options_ar: ["T(n) = T(n-1) + 1", "T(n) = 2T(n/2) + 1", "T(n) = T(n/2) + 1", "T(n) = T(n/3) + 1"],
                correct: 2,
                explanation: "Problem size reduces by half in each step.",
                explanation_ar: "يتقلص حجم المشكلة إلى النصف في كل خطوة."
            },
            {
                id: "sr-12",
                text: "Search in a Row-wise and Column-wise sorted matrix takes:",
                text_ar: "البحث في مصفوفة مرتبة حسب الصفوف والأعمدة يستغرق:",
                options: ["O(n^2)", "O(n + m)", "O(log nm)", "O(1)"],
                options_ar: ["O(n^2)", "O(n + m)", "O(log nm)", "O(1)"],
                correct: 1,
                explanation: "You can start from the top-right corner and move left or down.",
                explanation_ar: "يمكنك البدء من الزاوية العلوية اليمنى والتحرك يساراً أو لأسفل."
            },
            {
                id: "sr-13",
                text: "Complexity of searching in a Hash Table (Average case)?",
                text_ar: "تعقيد البحث في جدول التجزئة (Hash Table) في الحالة المتوسطة؟",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 2,
                explanation: "Hash tables provide constant time access on average.",
                explanation_ar: "توفر جداول التجزئة وصولاً في زمن ثابت في المتوسط."
            },
            {
                id: "sr-14",
                text: "To find the first occurrence of a number in a sorted array with duplicates using Binary Search:",
                text_ar: "للعثور على أول ظهور لرقم في مصفوفة مرتبة تحتوي على تكرارات باستخدام البحث الثنائي:",
                options: ["Stop at first match", "If match, move left", "If match, move right", "Use Linear Search"],
                options_ar: ["التوقف عند أول تطابق", "إذا تطابق، تحرك يساراً", "إذا تطابق، تحرك يميناً", "استخدام البحث الخطي"],
                correct: 1,
                explanation: "If you find the target, continue searching in the left half.",
                explanation_ar: "إذا وجدت الهدف، استمر في البحث في النصف الأيسر."
            },
            {
                id: "sr-15",
                text: "Linear Search can be used on:",
                text_ar: "يمكن استخدام البحث الخطي على:",
                options: ["Array", "Linked List", "Both", "None"],
                options_ar: ["المصفوفة", "القائمة المتصلة", "كلاهما", "لا شيء منهما"],
                correct: 2,
                explanation: "It works on any iterable data structure.",
                explanation_ar: "يعمل على أي بنية بيانات قابلة للتكرار."
            },
            {
                id: "sr-16",
                text: "What is the complexity of Depth First Search (DFS) on a graph/tree?",
                text_ar: "ما هو تعقيد البحث بالعمق أولاً (DFS) على رسم بياني أو شجرة؟",
                options: ["O(V)", "O(E)", "O(V + E)", "O(V*E)"],
                options_ar: ["O(V)", "O(E)", "O(V + E)", "O(V*E)"],
                correct: 2,
                explanation: "DFS visits every vertex and edge once.",
                explanation_ar: "يزور DFS كل رأس وحافة مرة واحدة."
            },
            {
                id: "sr-17",
                text: "Breadth First Search uses which data structure?",
                text_ar: "أي بنية بيانات يستخدمها البحث بالعرض أولاً (BFS)؟",
                options: ["Stack", "Queue", "Heap", "Tree"],
                options_ar: ["مكدس (Stack)", "طابور (Queue)", "كومة (Heap)", "شجرة"],
                correct: 1,
                explanation: "To process nodes in arrival order (FIFO).",
                explanation_ar: "لمعالجة العقد بترتيب الوصول (FIFO)."
            },
            {
                id: "sr-18",
                text: "Binary Search is an example of:",
                text_ar: "البحث الثنائي هو مثال على:",
                options: ["Greedy Algo", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
                options_ar: ["خوارزمية جشعة", "البرمجة الديناميكية", "فرق تسد (Divide and Conquer)", "التعقب الخلفي (Backtracking)"],
                correct: 2,
                explanation: "It recursively divides the problem into smaller subproblems.",
                explanation_ar: "يقوم بتقسيم المشكلة بشكل متكرر إلى مشكلات فرعية أصغر."
            },
            {
                id: "sr-19",
                text: "Searching in a Red-Black tree takes:",
                text_ar: "البحث في شجرة Red-Black يستغرق:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "Since it is a balanced BST, height is logarithmic.",
                explanation_ar: "بما أنها شجرة بحث ثنائية متوازنة، فإن الارتفاع يكون لوغاريتمياً."
            },
            {
                id: "sr-20",
                text: "Which searching algorithm requires the least comparisons on average for uniform data?",
                text_ar: "أي خوارزمية بحث تتطلب أقل عدد من المقارنات في المتوسط للبيانات الموزعة بانتظام؟",
                options: ["Binary Search", "Linear Search", "Interpolation Search", "Jump Search"],
                options_ar: ["البحث الثنائي", "البحث الخطي", "بحث الاستكمال (Interpolation Search)", "البحث بالقفز"],
                correct: 2,
                explanation: "Interpolation search can achieve O(log log n) on uniform data.",
                explanation_ar: "بحث الاستكمال يمكن أن يحقق O(log log n) على البيانات الموزعة بانتظام."
            },
            {
                id: "sr-21",
                text: "In exponential search, how many steps does finding the range take?",
                text_ar: "في البحث الأسي، كم عدد الخطوات التي يستغرقها العثور على النطاق؟",
                options: ["O(n)", "O(log i)", "O(1)", "O(i)"],
                options_ar: ["O(n)", "O(log i)", "O(1)", "O(i)"],
                correct: 1,
                explanation: "Where i is the position of the element.",
                explanation_ar: "حيث i هو موضع العنصر."
            },
            {
                id: "sr-22",
                text: "Fibonacci Search divides the array using:",
                text_ar: "يقسم بحث فيبوناتشي (Fibonacci Search) المصفوفة باستخدام:",
                options: ["Midpoint", "Golden Ratio / Fibonacci numbers", "Random pivot", "Thirds"],
                options_ar: ["نقطة المنتصف", "النسبة الذهبية / أرقام فيبوناتشي", "محور عشوائي", "أثلاث"],
                correct: 1,
                explanation: "It uses Fibonacci numbers to determine split points.",
                explanation_ar: "يستخدم أرقام فيبوناتشي لتحديد نقاط التقسيم."
            },
            {
                id: "sr-23",
                text: "If an array is rotated sorted, finding an element takes:",
                text_ar: "إذا كانت المصفوفة مرتبة ومدورة، فإن العثور على عنصر يستغرق:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                correct: 1,
                explanation: "Modified binary search handles the rotation.",
                explanation_ar: "البحث الثنائي المعدل يتعامل مع التدوير."
            },
            {
                id: "sr-24",
                text: "Searching for a pattern in a string is efficiently done by:",
                text_ar: "يتم البحث عن نمط في سلسلة نصية بكفاءة عن طريق:",
                options: ["Linear Search", "KMP Algorithm", "Binary Search", "Bubble Sort"],
                options_ar: ["البحث الخطي", "خوارزمية KMP", "البحث الثنائي", "الفرز الفقاعي (Bubble Sort)"],
                correct: 1,
                explanation: "Knuth-Morris-Pratt avoids re-checking characters.",
                explanation_ar: "تتجنب خوارزمية Knuth-Morris-Pratt إعادة فحص الأحرف."
            },
            {
                id: "sr-25",
                text: "Rabin-Karp algorithm uses:",
                text_ar: "تستخدم خوارزمية Rabin-Karp:",
                options: ["Hashing", "Sorting", "Stack", "Queue"],
                options_ar: ["التجزئة (Hashing)", "الفرز", "مكدس", "طابور"],
                correct: 0,
                explanation: "It uses rolling hash values to compare substrings.",
                explanation_ar: "تستخدم قيم التجزئة المتدرجة (rolling hash) لمقارنة السلاسل الفرعية."
            },
            {
                id: "sr-26",
                text: "Searching in a Skip List is probabilistic:",
                text_ar: "البحث في القائمة المتخطية (Skip List) احتمالي:",
                options: ["O(n)", "O(log n)", "O(1)", "O(sqrt n)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(sqrt n)"],
                correct: 1,
                explanation: "With high probability, search complexity is logarithmic.",
                explanation_ar: "باحتمالية عالية، يكون تعقيد البحث لوغاريتمياً."
            },
            {
                id: "sr-27",
                text: "Given an array where difference between neighbors is 1, search for X can be optimized to:",
                text_ar: "بإعطاء مصفوفة حيث الفرق بين الجيران هو 1، يمكن تحسين البحث عن X إلى:",
                options: ["O(n)", "O(n) ولكن مع قفزات", "O(log n)", "O(1)"],
                options_ar: ["O(n)", "O(n) ولكن مع قفزات", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "You can jump by abs(current - target).",
                explanation_ar: "يمكنك القفز بمقدار abs(العنصر الحالي - الهدف)."
            },
            {
                id: "sr-28",
                text: "Binary Search Tree worst case occurs when tree is:",
                text_ar: "تحدث أسوأ حالة لشجرة البحث الثنائية عندما تكون الشجرة:",
                options: ["Complete", "Balanced", "Skewed", "Perfect"],
                options_ar: ["كاملة (Complete)", "متوازنة", "مائلة (Skewed)", "مثالية (Perfect)"],
                correct: 2,
                explanation: "It behaves like a linked list with O(n) search.",
                explanation_ar: "إنها تتصرف مثل القائمة المتصلة مع بحث O(n)."
            },
            {
                id: "sr-29",
                text: "To count occurrences of a number in sorted array with duplicates using Binary Search:",
                text_ar: "لعد تكرارات رقم في مصفوفة مرتبة تحتوي على تكرارات، باستخدام البحث الثنائي:",
                options: ["Find first and last occurrence", "Find one and scan neighbors", "Impossible", "Use Hash map"],
                options_ar: ["البحث عن أول وآخر ظهور", "البحث عن واحد ومسح الجيران", "مستحيل", "استخدام جدول التجزئة"],
                correct: 0,
                explanation: "Difference between indices of last and first occurrence + 1.",
                explanation_ar: "الفرق بين فهارس آخر ظهور وأول ظهور + 1."
            },
            {
                id: "sr-30",
                text: "Searching in a Singly Linked List is always:",
                text_ar: "البحث في القائمة المتصلة الأحادية يكون دائماً:",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                options_ar: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correct: 2,
                explanation: "Sequential access prevents binary search.",
                explanation_ar: "الوصول التسلسلي يمنع البحث الثنائي."
            },
            {
                id: "sr-31",
                text: "Ubiquitous Binary Search is a variant that:",
                text_ar: "البحث الثنائي واسع الانتشار (Ubiquitous Binary Search) هو نوع يـ:",
                options: ["Always returns index", "Always works on unsorted", "Uses lower_bound concept", "Is slower"],
                options_ar: ["يرجع الفهرس دائماً", "يعمل دائماً على مصفوفة غير مرتبة", "يستخدم مفهوم lower_bound", "أبطأ"],
                correct: 2,
                explanation: "It focuses on finding the first element >= target.",
                explanation_ar: "يركز على إيجاد أول عنصر أكبر من أو يساوي الهدف."
            },
            {
                id: "sr-32",
                text: "Complexity of searching in a B-Tree of order m with N keys?",
                text_ar: "تعقيد البحث في شجرة B من الرتبة m مع N مفاتيح؟",
                options: ["O(log_m N)", "O(N)", "O(m log N)", "O(1)"],
                options_ar: ["O(log_m N)", "O(N)", "O(m log N)", "O(1)"],
                correct: 0,
                explanation: "Height is log base m of N.",
                explanation_ar: "الارتفاع هو لوغاريتم N للأساس m."
            },
            {
                id: "sr-33",
                text: "Searching for a cycle in a Linked List uses:",
                text_ar: "البحث عن دورة في قائمة متصلة يستخدم:",
                options: ["Binary Search", "Two Pointer (Floyd's)", "Linear Search", "Sorting"],
                options_ar: ["البحث الثنائي", "مؤشرين (Floyd's)", "البحث الخطي", "الفرز"],
                correct: 1,
                explanation: "Tortoise and Hare algorithm.",
                explanation_ar: "خوارزمية السلحفاة والأرنب."
            },
            {
                id: "sr-34",
                text: "Sublist Search (checking if one list is inside another) takes:",
                text_ar: "يستغرق البحث عن قائمة فرعية (التحقق مما إذا كانت قائمة داخل أخرى):",
                options: ["O(N*M)", "O(N)", "O(M)", "O(log N)"],
                options_ar: ["O(N*M)", "O(N)", "O(M)", "O(log N)"],
                correct: 0,
                explanation: "Comparing each node of larger list with head of smaller list.",
                explanation_ar: "مقارنة كل عقدة في القائمة الكبيرة مع رأس القائمة الصغيرة."
            },
            {
                id: "sr-35",
                text: "Find peak element in an array (neighbors are smaller) takes:",
                text_ar: "إيجاد عنصر الذروة في مصفوفة (الجيران أصغر) يستغرق:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                correct: 1,
                explanation: "Binary search can identify a peak by checking slope.",
                explanation_ar: "يمكن للبحث الثنائي تحديد الذروة من خلال التحقق من الميل."
            },
            {
                id: "sr-36",
                text: "Finding the majority element (appears > n/2 times) can be done in O(n) using:",
                text_ar: "إيجاد عنصر الأغلبية (يظهر أكثر من n/2 مرة) يمكن القيام به في O(n) باستخدام:",
                options: ["Linear Search", "Moore's Voting Algo", "Binary Search", "Sorting"],
                options_ar: ["البحث الخطي", "خوارزمية مور للتصويت (Moore's Voting)", "البحث الثنائي", "الفرز"],
                correct: 1,
                explanation: "Cancel out different elements to leave the majority.",
                explanation_ar: "إلغاء العناصر المختلفة لترك عنصر الأغلبية."
            },
            {
                id: "sr-37",
                text: "Search a word in a 2D grid of characters (Word Search) uses:",
                text_ar: "البحث عن كلمة في شبكة ثنائية الأبعاد من الأحرف يستخدم:",
                options: ["DFS/Backtracking", "Binary Search", "Queue", "Heap"],
                options_ar: ["البحث بالعمق (DFS) / التعقب الخلفي", "البحث الثنائي", "طابور", "كومة"],
                correct: 0,
                explanation: "Explore all 8 directions recursively.",
                explanation_ar: "استكشاف جميع الاتجاهات الثمانية بشكل تكراري."
            },
            {
                id: "sr-38",
                text: "A* Search Algorithm is used for:",
                text_ar: "تستخدم خوارزمية البحث *A لـ:",
                options: ["Sorting", "Pathfinding in graphs", "Database Query", "Compression"],
                options_ar: ["الفرز", "إيجاد المسارات في الرسوم البيانية", "استعلام قواعد البيانات", "الضغط"],
                correct: 1,
                explanation: "It uses heuristics to find the shortest path efficiently.",
                explanation_ar: "تستخدم المقاييس التجريبية (heuristics) لإيجاد أقصر مسار بكفاءة."
            },
            {
                id: "sr-39",
                text: "To search if a sum of two elements equals K in a sorted array:",
                text_ar: "للبحث عما إذا كان مجموع عنصرين يساوي K في مصفوفة مرتبة:",
                options: ["Two Pointers", "Binary Search for complement", "Both", "None"],
                options_ar: ["مؤشرين (Two Pointers)", "البحث الثنائي عن المكمل", "كلاهما", "لا شيء منهما"],
                correct: 2,
                explanation: "Both two pointers (O(n)) and binary search (O(n log n)) work.",
                explanation_ar: "كلا من المؤشرين (O(n)) والبحث الثنائي (O(n log n)) يعملان."
            },
            {
                id: "sr-40",
                text: "Bloom Filter is a probabilistic structure to check:",
                text_ar: "فلتر بلوم هو بنية احتمالية للتحقق من:",
                options: ["If element is definitely present", "If element is possibly present or definitely not", "Sorting order", "Range count"],
                options_ar: ["إذا كان العنصر موجوداً بالتأكيد", "إذا كان العنصر موجوداً بشكل محتمل أو غير موجود بالتأكيد", "ترتيب الفرز", "عد النطاق"],
                correct: 1,
                explanation: "It can return false positives, but never false negatives.",
                explanation_ar: "يمكن أن يعطي نتائج إيجابية خاطئة، ولكن لا يعطي نتائج سلبية خاطئة أبداً."
            },
            {
                id: "sr-tf-1",
                text: "Binary search can be applied to an unsorted array.",
                text_ar: "يمكن تطبيق البحث الثنائي على مصفوفة غير مرتبة.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "Binary search requires the data to be sorted to work correctly.",
                explanation_ar: "يتطلب البحث الثنائي أن تكون البيانات مرتبة ليعمل بشكل صحيح."
            },
            {
                id: "sr-tf-2",
                text: "Linear search has a time complexity of O(n) in the worst case.",
                text_ar: "البحث الخطي له تعقيد زمني قدره O(n) في أسوأ الحالات.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "In the worst case, you might need to check every element in the array.",
                explanation_ar: "في أسوأ الحالات، قد تحتاج إلى فحص كل عنصر في المصفوفة."
            }
        ]
    },
    {
        id: "complexity",
        title: "Time Complexity",
        title_ar: "التعقيد الزمني (Big O)",
        description: "Analyze algorithm efficiency and Big O notation.",
        description_ar: "تحليل كفاءة الخوارزميات وترميز Big O.",
        icon: "📈",
        questions: [
            {
                id: "tc-1",
                text: "What is the time complexity of the following code?\n<pre><code>for(i=0; i&lt;N; i++) { \n  a = a + 5;\n}\nfor(j=0; j&lt;M; j++) { \n  b = b + 10;\n}</code></pre>",
                text_ar: "ما هو التعقيد الزمني للكود التالي؟\n<pre><code>for(i=0; i&lt;N; i++) { \n  a = a + 5;\n}\nfor(j=0; j&lt;M; j++) { \n  b = b + 10;\n}</code></pre>",
                options: ["O(N * M)", "O(N + M)", "O(N)", "O(M)"],
                options_ar: ["O(N * M)", "O(N + M)", "O(N)", "O(M)"],
                correct: 1,
                explanation: "The loops are sequential, not nested. Total time is proportional to N + M.",
                explanation_ar: "الحلقات متتالية وليست متداخلة. الوقت الإجمالي يتناسب مع N + M."
            },
            {
                id: "tc-2",
                text: "What is the time complexity analysis?\n<pre><code>for(i=0; i&lt;N; i++) {\n  for(j=N; j&gt;i; j--) {\n     a = a + i + j;\n  }\n}</code></pre>",
                text_ar: "ما هو تحليل التعقيد الزمني؟\n<pre><code>for(i=0; i&lt;N; i++) {\n  for(j=N; j&gt;i; j--) {\n     a = a + i + j;\n  }\n}</code></pre>",
                options: ["O(N)", "O(N log N)", "O(N^2)", "O(1)"],
                options_ar: ["O(N)", "O(N log N)", "O(N^2)", "O(1)"],
                correct: 2,
                explanation: "This is a standard nested loop structure where the inner loop runs proportional to N, resulting in O(N^2).",
                explanation_ar: "هيكل حلقة متداخلة قياسي حيث تعمل الحلقة الداخلية بشكل يتناسب مع N، مما يؤدي إلى O(N^2)."
            },
            {
                id: "tc-3",
                text: "What is the time complexity?\n<pre><code>for(i=1; i&lt;n; i=i*2) {\n  print(i);\n}</code></pre>",
                text_ar: "ما هو التعقيد الزمني؟\n<pre><code>for(i=1; i&lt;n; i=i*2) {\n  print(i);\n}</code></pre>",
                options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
                options_ar: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
                correct: 2,
                explanation: "The variable i doubles each time, so the loop runs log2(n) times.",
                explanation_ar: "تتضاعف قيمة المتغير i في كل مرة، لذا تعمل الحلقة log2(n) مرة."
            },
            {
                id: "tc-4",
                text: "Time complexity of Merge Sort is:",
                text_ar: "التعقيد الزمني للفرز بالدمج (Merge Sort) هو:",
                options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
                options_ar: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
                correct: 1,
                explanation: "Merge sort divides the array in half and merges, taking linearithmic time consistently.",
                explanation_ar: "يقوم الفرز بالدمج بتقسيم المصفوفة إلى النصف ودمجها، مما يستغرق وقتاً لوغاريتمياً خطياً بشكل ثابت."
            },
            {
                id: "tc-5",
                text: "Assuming P != NP, which problem complexity class is hardest?",
                text_ar: "بافتراض أن P != NP، أي فئة من تعقيد المشكلات هي الأصعب؟",
                options: ["P", "NP", "NP-Complete", "NP-Hard"],
                options_ar: ["P", "NP", "NP-Complete", "NP-Hard"],
                correct: 3,
                explanation: "NP-Hard problems are at least as hard as the hardest problems in NP.",
                explanation_ar: "مشكلات NP-Hard هي على الأقل بصعوبة أصعب المشكلات في NP."
            },
            {
                id: "tc-6",
                text: "Accessing an element in a Hash Table (Average case):",
                text_ar: "الوصول إلى عنصر في جدول تجزئة (الحالة المتوسطة):",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 0,
                explanation: "Good hashing provides constant time access on average.",
                explanation_ar: "توفر التجزئة الجيدة وصولاً في زمن ثابت في المتوسط."
            },
            {
                id: "tc-7",
                text: "Adding an edge to an Adjacency Matrix representation of a graph:",
                text_ar: "إضافة حافة إلى تمثيل مصفوفة الجوار (Adjacency Matrix) للرسم البياني:",
                options: ["O(V)", "O(E)", "O(1)", "O(V^2)"],
                options_ar: ["O(V)", "O(E)", "O(1)", "O(V^2)"],
                correct: 2,
                explanation: "You simply update the cell at (u, v).",
                explanation_ar: "ببساطة تقوم بتحديث الخلية عند (u, v)."
            },
            {
                id: "tc-8",
                text: "What is the complexity of: <pre><code>function(n) { \n  if (n &lt;= 1) return; \n  function(n-1); \n  function(n-1); \n}</code></pre>",
                text_ar: "ما هو تعقيد: <pre><code>function(n) { \n  if (n &lt;= 1) return; \n  function(n-1); \n  function(n-1); \n}</code></pre>",
                options: ["O(n)", "O(2^n)", "O(n^2)", "O(log n)"],
                options_ar: ["O(n)", "O(2^n)", "O(n^2)", "O(log n)"],
                correct: 1,
                explanation: "Each call branches into two, creating a binary tree of calls with height n.",
                explanation_ar: "كل استدعاء يتفرع إلى اثنين، مما ينشئ شجرة ثنائية من الاستدعاءات بارتفاع n."
            },
            {
                id: "tc-9",
                text: "Worst-case complexity of Quick Sort:",
                text_ar: "أسوأ تعقيد زمني للفرز السريع (Quick Sort):",
                options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
                options_ar: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
                correct: 1,
                explanation: "Occurs when the pivot is always the smallest or largest element.",
                explanation_ar: "يحدث عندما يكون المحور (pivot) دائماً هو العنصر الأصغر أو الأكبر."
            },
            {
                id: "tc-10",
                text: "Finding all subsets of a set of size N (Power Set):",
                text_ar: "إيجاد جميع المجموعات الجزئية لمجموعة بحجم N (مجموعة القوى):",
                options: ["O(n^2)", "O(2^n)", "O(n!)", "O(n)"],
                options_ar: ["O(n^2)", "O(2^n)", "O(n!)", "O(n)"],
                correct: 1,
                explanation: "There are 2^n possible subsets.",
                explanation_ar: "يوجد 2^n مجموعة جزئية ممكنة."
            },
            {
                id: "tc-11",
                text: "Amortized complexity of appending to a dynamic array:",
                text_ar: "التعقيد المستهلك (Amortized complexity) لإضافة عنصر إلى مصفوفة ديناميكية:",
                options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                options_ar: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "While resizing is O(n), it happens rarely, making the average operation O(1).",
                explanation_ar: "بينما تكون إعادة الحجم O(n)، إلا أنها تحدث نادراً، مما يجعل متوسط العملية O(1)."
            },
            {
                id: "tc-12",
                text: "Dijkstra's Algorithm with a Binary Heap:",
                text_ar: "خوارزمية ديكسترا (Dijkstra) مع كومة ثنائية (Binary Heap):",
                options: ["O(E + V log V)", "O(E log V)", "O(V^2)", "O(E + V)"],
                options_ar: ["O(E + V log V)", "O(E log V)", "O(V^2)", "O(E + V)"],
                correct: 1,
                explanation: "Extract min is O(log V) and decrease key (traversing edges) contributes to O(E log V).",
                explanation_ar: "استخراج الحد الأدنى هو O(log V) وتقليل المفتاح (عبور الحواف) يساهم في O(E log V)."
            },
            {
                id: "tc-13",
                text: "Kruskal's Algorithm for MST complexity:",
                text_ar: "تعقيد خوارزمية كروسكال (Kruskal) لإيجاد شجرة الامتداد الدنيا (MST):",
                options: ["O(E log E)", "O(E^2)", "O(V^2)", "O(E + V)"],
                options_ar: ["O(E log E)", "O(E^2)", "O(V^2)", "O(E + V)"],
                correct: 0,
                explanation: "Dominated by sorting the edges.",
                explanation_ar: "تهيمن عليها عملية فرز الحواف."
            },
            {
                id: "tc-14",
                text: "Floyd-Warshall Algorithm complexity:",
                text_ar: "تعقيد خوارزمية فلويد-وارشال (Floyd-Warshall):",
                options: ["O(V^3)", "O(V^2)", "O(E log V)", "O(E + V)"],
                options_ar: ["O(V^3)", "O(V^2)", "O(E log V)", "O(E + V)"],
                correct: 0,
                explanation: "Three nested loops iterating over vertices.",
                explanation_ar: "ثلاث حلقات متداخلة تمر عبر الرؤوس (vertices)."
            },
            {
                id: "tc-15",
                text: "Complexity of: <pre><code>for(i=1; i&lt;=n; i++) {\n for(j=1; j&lt;=i; j=j*2) { ... } \n}</code></pre>",
                text_ar: "تعقيد الكود التالي: <pre><code>for(i=1; i&lt;=n; i++) {\n for(j=1; j&lt;=i; j=j*2) { ... } \n}</code></pre>",
                options: ["O(n^2)", "O(n)", "O(n log n)", "O(log n)"],
                options_ar: ["O(n^2)", "O(n)", "O(n log n)", "O(log n)"],
                correct: 2,
                explanation: "The inner loop runs log(i) times. Sum of log(i) for i=1 to n is log(n!) = O(n log n).",
                explanation_ar: "الحلقة الداخلية تعمل log(i) مرة. مجموع log(i) من i=1 إلى n هو log(n!) = O(n log n)."
            },
            {
                id: "tc-16",
                text: "Which complexity is faster?",
                text_ar: "أي تعقيد هو الأسرع؟",
                options: ["O(n)", "O(log n)", "O(sqrt n)", "O(n log n)"],
                options_ar: ["O(n)", "O(log n)", "O(sqrt n)", "O(n log n)"],
                correct: 1,
                explanation: "Logarithmic growth is much slower than square root or linear.",
                explanation_ar: "النمو اللوغاريتمي أبطأ بكثير من الجذر التربيعي أو الخطي."
            },
            {
                id: "tc-17",
                text: "Complexity of generating all permutations of string length N:",
                text_ar: "تعقيد توليد جميع التباديل (permutations) لسلسلة نصية بطول N:",
                options: ["O(n)", "O(2^n)", "O(n!)", "O(n^n)"],
                options_ar: ["O(n)", "O(2^n)", "O(n!)", "O(n^n)"],
                correct: 2,
                explanation: "There are n! permutations.",
                explanation_ar: "يوجد n! من التباديل."
            },
            {
                id: "tc-18",
                text: "Bellman-Ford Algorithm complexity:",
                text_ar: "تعقيد خوارزمية بلمان-فورد (Bellman-Ford):",
                options: ["O(VE)", "O(V^2)", "O(E log V)", "O(V + E)"],
                options_ar: ["O(VE)", "O(V^2)", "O(E log V)", "O(V + E)"],
                correct: 0,
                explanation: "Relaxes all E edges V-1 times.",
                explanation_ar: "تقوم بإرخاء جميع الحواف (E) لعدد V-1 من المرات."
            },
            {
                id: "tc-19",
                text: "Build a Heap from an array of N elements:",
                text_ar: "بناء كومة (Heap) من مصفوفة مكونة من N عناصر:",
                options: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
                options_ar: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Using the linear time build-heap algorithm.",
                explanation_ar: "باستخدام خوارزمية بناء الكومة في زمن خطي."
            },
            {
                id: "tc-20",
                text: "Space complexity of DFS (recursive) implementation?",
                text_ar: "التعقيد المكاني لتنفيذ البحث بالعمق (DFS) بشكل عودي؟",
                options: ["O(1)", "O(V)", "O(E)", "O(log V)"],
                options_ar: ["O(1)", "O(V)", "O(E)", "O(log V)"],
                correct: 1,
                explanation: "Stack depth can go up to V in the worst case.",
                explanation_ar: "يمكن أن يصل عمق المكدس إلى V في أسوأ الحالات."
            },
            {
                id: "tc-21",
                text: "Deleting from a Singly Linked List given a pointer to the node (not tail):",
                text_ar: "حذف عقدة من قائمة متصلة أحادية بمعلومية مؤشر العقدة (ليست الأخيرة):",
                options: ["O(n)", "O(1)", "O(log n)", "O(V)"],
                options_ar: ["O(n)", "O(1)", "O(log n)", "O(V)"],
                correct: 1,
                explanation: "Copy next node's data and delete next node.",
                explanation_ar: "نسخ بيانات العقدة التالية وحذف العقدة التالية."
            },
            {
                id: "tc-22",
                text: "Radix Sort time complexity:",
                text_ar: "التعقيد الزمني للفرز الأساسي (Radix Sort):",
                options: ["O(n^2)", "O(nk)", "O(n log n)", "O(k log n)"],
                options_ar: ["O(n^2)", "O(nk)", "O(n log n)", "O(k log n)"],
                correct: 1,
                explanation: "O(d * (n + b)) where d is digits (k), n is elements, b is base.",
                explanation_ar: "O(d * (n + b)) حيث d هي عدد الأرقام (k)، n هي عدد العناصر، b هو الأساس."
            },
            {
                id: "tc-23",
                text: "Checking if a number is prime (naive trial division up to sqrt(n)):",
                text_ar: "التحقق مما إذا كان الرقم أولياً (القسمة التجريبية حتى جذر n):",
                options: ["O(n)", "O(sqrt n)", "O(log n)", "O(1)"],
                options_ar: ["O(n)", "O(sqrt n)", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "You only need to check divisors up to the square root.",
                explanation_ar: "تحتاج فقط للتحقق من القواسم حتى الجذر التربيعي."
            },
            {
                id: "tc-24",
                text: "Euclidean algorithm for GCD(a, b):",
                text_ar: "خوارزمية إقليدس للقاسم المشترك الأكبر (GCD):",
                options: ["O(log(min(a,b)))", "O(a+b)", "O(min(a,b))", "O(1)"],
                options_ar: ["O(log(min(a,b)))", "O(a+b)", "O(min(a,b))", "O(1)"],
                correct: 0,
                explanation: "It is logarithmic in the size of the smaller number.",
                explanation_ar: "إنه لوغاريتمي بالنسبة لحجم الرقم الأصغر."
            },
            {
                id: "tc-25",
                text: "Strassen's Matrix Multiplication complexity:",
                text_ar: "تعقيد خوارزمية ستراسن لضرب المصفوفات:",
                options: ["O(n^3)", "O(n^2.81)", "O(n^2)", "O(n log n)"],
                options_ar: ["O(n^3)", "O(n^2.81)", "O(n^2)", "O(n log n)"],
                correct: 1,
                explanation: "Better than the standard O(n^3) algorithm.",
                explanation_ar: "أفضل من خوارزمية O(n^3) القياسية."
            },
            {
                id: "tc-26",
                text: "Deleting min from a Fibonacci Heap:",
                text_ar: "حذف الحد الأدنى من كومة فيبوناتشي (Fibonacci Heap):",
                options: ["O(1)", "O(log n)", "O(n)", "O(1) amortized"],
                options_ar: ["O(1)", "O(log n)", "O(n)", "O(1) amortized"],
                correct: 1,
                explanation: "Amortized cost is O(log n).",
                explanation_ar: "التكلفة المستهلكة (Amortized) هي O(log n)."
            },
            {
                id: "tc-27",
                text: "Searching in a 2D sorted matrix (stepwise):",
                text_ar: "البحث في مصفوفة مرتبة ثنائية الأبعاد (بشكل تدريجي):",
                options: ["O(Rows * Cols)", "O(Rows + Cols)", "O(log(Rows * Cols))", "O(1)"],
                options_ar: ["O(Rows * Cols)", "O(Rows + Cols)", "O(log(Rows * Cols))", "O(1)"],
                correct: 1,
                explanation: "Start from top-right, move left or down.",
                explanation_ar: "ابدأ من الزاوية اليمنى العليا، وتحرك يساراً أو لأسفل."
            },
            {
                id: "tc-28",
                text: "Complexity of Sieve of Eratosthenes up to N:",
                text_ar: "تعقيد غربال إراتوستينس لإيجاد الأعداد الأولية حتى N:",
                options: ["O(N)", "O(N log N)", "O(N log log N)", "O(N^2)"],
                options_ar: ["O(N)", "O(N log N)", "O(N log log N)", "O(N^2)"],
                correct: 2,
                explanation: "It is nearly linear, specifically N log log N.",
                explanation_ar: "إنه خطي تقريباً، وبالتحديد N log log N."
            },
            {
                id: "tc-29",
                text: "What is the worst-case time for Insert in a Red-Black Tree?",
                text_ar: "ما هو أسوأ تعقيد زمني للإدراج في شجرة Red-Black؟",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "Self-balancing ensures logarithmic height.",
                explanation_ar: "تعديل التوازن الذاتي يضمن ارتفاعاً لوغاريتمياً."
            },
            {
                id: "tc-30",
                text: "Finding the median of an unsorted array using QuickSelect:",
                text_ar: "إيجاد الوسيط (median) لمصفوفة غير مرتبة باستخدام QuickSelect:",
                options: ["O(n log n)", "O(n) average", "O(1)", "O(n^2) always"],
                options_ar: ["O(n log n)", "O(n) average", "O(1)", "O(n^2) always"],
                correct: 1,
                explanation: "Average case is linear, though worst case is O(n^2).",
                explanation_ar: "الحالة المتوسطة خطية، على الرغم من أن أسوأ حالة هي O(n^2)."
            },
            {
                id: "tc-31",
                text: "Union-Find with Path Compression and Union by Rank:",
                text_ar: " Union-Find مع ضغط المسار (Path Compression) والاتحاد حسب الرتبة:",
                options: ["O(log n)", "O(1)", "O(alpha(n))", "O(n)"],
                options_ar: ["O(log n)", "O(1)", "O(alpha(n))", "O(n)"],
                correct: 2,
                explanation: "Inverse Ackermann function, which is nearly constant.",
                explanation_ar: "دالة عكس أكرمان (Inverse Ackermann)، وهي ثابتة تقريباً."
            },
            {
                id: "tc-32",
                text: "Complexity of calculating Nth Fibonacci number using DP (Memoization):",
                text_ar: "تعقيد حساب رقم فيبوناتشي رقم N باستخدام البرمجة الديناميكية (Memoization):",
                options: ["O(2^n)", "O(n)", "O(log n)", "O(1)"],
                options_ar: ["O(2^n)", "O(n)", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "You compute each state once.",
                explanation_ar: "تقوم بحساب كل حالة مرة واحدة فقط."
            },
            {
                id: "tc-33",
                text: "Master Theorem helps solve:",
                text_ar: "تساعد نظرية السيد (Master Theorem) في حل:",
                options: ["Graph problems", "Greedy problems", "Recurrence relations", "Sorting"],
                options_ar: ["مشكلات الرسوم البيانية", "الخوارزميات الجشعة", "علاقات التكرار (Recurrence relations)", "الفرز"],
                correct: 2,
                explanation: "Used for analyzing divide-and-conquer recurrences.",
                explanation_ar: "تستخدم لتحليل علاقات التكرار في خوارزميات فرق تسد."
            },
            {
                id: "tc-34",
                text: "Space complexity of Merge Sort (arrays):",
                text_ar: "التعقيد المكاني للفرز بالدمج (Merge Sort) للمصفوفات:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 1,
                explanation: "Requires O(n) auxiliary space for merging.",
                explanation_ar: "يتطلب O(n) من المساحة الإضافية للدمج."
            },
            {
                id: "tc-35",
                text: "Complexity of reversing a string of length N:",
                text_ar: "تعقيد عكس سلسلة نصية بطول N:",
                options: ["O(1)", "O(N)", "O(N^2)", "O(log N)"],
                options_ar: ["O(1)", "O(N)", "O(N^2)", "O(log N)"],
                correct: 1,
                explanation: "Iterate through half the string.",
                explanation_ar: "المرور عبر نصف السلسلة النصية."
            },
            {
                id: "tc-36",
                text: "Best Algorithm for Topological Sort:",
                text_ar: "أفضل خوارزمية للفرز الموضعي (Topological Sort):",
                options: ["O(V+E)", "O(V*E)", "O(V^2)", "O(E log V)"],
                options_ar: ["O(V+E)", "O(V*E)", "O(V^2)", "O(E log V)"],
                correct: 0,
                explanation: "DFS or Kahn's algorithm (BFS) are linear in graph size.",
                explanation_ar: "خوارزمية DFS أو خوارزمية كاهن (BFS) هما خطيان بالنسبة لحجم الرسم البياني."
            },
            {
                id: "tc-37",
                text: "Sliding Window Maximum (Deque method):",
                text_ar: "الحد الأقصى للنافذة المنزلقة (طريقة Deque):",
                options: ["O(n)", "O(nk)", "O(n log k)", "O(n log n)"],
                options_ar: ["O(n)", "O(nk)", "O(n log k)", "O(n log n)"],
                correct: 0,
                explanation: "Each element is added and removed at most once.",
                explanation_ar: "تتم إضافة وإزالة كل عنصر مرة واحدة على الأكثر."
            },
            {
                id: "tc-38",
                text: "Convex Hull (Graham Scan):",
                text_ar: "الغلاف المحدب (Convex Hull) (طريقة Graham Scan):",
                options: ["O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
                options_ar: ["O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
                correct: 1,
                explanation: "Dominated by sorting points by angle.",
                explanation_ar: "تهيمن عليها عملية فرز النقاط حسب الزاوية."
            },
            {
                id: "tc-39",
                text: "Traveling Salesperson Problem (Dynamic Programming):",
                text_ar: "مشكلة البائع المتجول (Traveling Salesperson) بالبرمجة الديناميكية:",
                options: ["O(n!)", "O(n^2 * 2^n)", "O(n^2)", "O(2^n)"],
                options_ar: ["O(n!)", "O(n^2 * 2^n)", "O(n^2)", "O(2^n)"],
                correct: 1,
                explanation: "Uses bitmask DP.",
                explanation_ar: "يستخدم البرمجة الديناميكية مع الأقنعة الثنائية (bitmask DP)."
            },
            {
                id: "tc-40",
                text: "Complexity of `git status` (conceptually):",
                text_ar: "تعقيد أمر `git status` (من الناحية النظرية):",
                options: ["O(1)", "O(Number of files)", "O(Number of commits)", "O(Size of repo)"],
                options_ar: ["O(1)", "O(عدد الملفات)", "O(عدد الالتزامات)", "O(حجم المستودع)"],
                correct: 1,
                explanation: "It must check the status of files in the working directory.",
                explanation_ar: "يجب عليه التحقق من حالة الملفات في دليل العمل."
            },
            {
                id: "tc-tf-1",
                text: "O(n log n) is more efficient than O(n²).",
                text_ar: "O(n log n) أكثر كفاءة من O(n²).",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Log-linear time grows much slower than quadratic time as N increases.",
                explanation_ar: "الوقت اللوغاريتمي الخطي ينمو بشكل أبطأ بكثير من الوقت التربيعي مع زيادة N."
            },
            {
                id: "tc-tf-2",
                text: "Constant time O(1) means execution time depends on input size.",
                text_ar: "الوقت الثابت O(1) يعني أن وقت التنفيذ يعتمد على حجم المدخلات.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "O(1) means execution time is independent of input size.",
                explanation_ar: "O(1) يعني أن وقت التنفيذ مستقل عن حجم المدخلات."
            }
        ]
    },
    {
        id: "code-analysis",
        title: "Code Analysis",
        title_ar: "تحليل الأكواد",
        description: "Analyze code snippets for time and space complexity.",
        description_ar: "تحليل مقاطع الأكواد للتعقيد الزمني والمكاني.",
        icon: "💻",
        questions: [
            {
                id: "ca-1",
                text: "What is the time complexity of this code segment?\n<pre><code>for(var i=1; i &lt; n; i++) {\n  // operation\n}</code></pre>",
                text_ar: "ما هو التعقيد الزمني لهذا الجزء من الكود؟\n<pre><code>for(var i=1; i &lt; n; i++) {\n  // عملية\n}</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                correct: 1,
                explanation: "The loop iterates exactly n-1 times, which is linear O(n).",
                explanation_ar: "تتكرر الحلقة n-1 من المرات بالضبط، وهو تعقيد خطي O(n)."
            },
            {
                id: "ca-2",
                text: "What is the complexity of this logarithmic loop?\n<pre><code>for(var i=1; i &lt; n; i *= 2) {\n  // operation\n}</code></pre>",
                text_ar: "ما هو تعقيد هذه الحلقة اللوغاريتمية؟\n<pre><code>for(var i=1; i &lt; n; i *= 2) {\n  // عملية\n}</code></pre>",
                options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                options_ar: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                correct: 2,
                explanation: "The variable i doubles in each iteration, reaching n in log₂(n) steps.",
                explanation_ar: "تتضاعف قيمة المتغير i في كل تكرار، لتصل إلى n خلال log₂(n) خطوة."
            },
            {
                id: "ca-3",
                text: "Time complexity of these nested loops?\n<pre><code>for(i=0; i &lt; n; i++) {\n  for(j=0; j &lt; n; j++) {\n    // operation\n  }\n}</code></pre>",
                text_ar: "التعقيد الزمني لهذه الحلقات المتداخلة؟\n<pre><code>for(i=0; i &lt; n; i++) {\n  for(j=0; j &lt; n; j++) {\n    // عملية\n  }\n}</code></pre>",
                options: ["O(n)", "O(n²)", "O(2^n)", "O(n log n)"],
                options_ar: ["O(n)", "O(n²)", "O(2^n)", "O(n log n)"],
                correct: 1,
                explanation: "Each loop runs n times independently, resulting in n × n = O(n²).",
                explanation_ar: "كل حلقة تعمل n مرة بشكل مستقل، مما ينتج عنه n × n = O(n²)."
            },
            {
                id: "ca-4",
                text: "Complexity of a loop increasing by k?\n<pre><code>for(var i=1; i &lt; n; i *= k) {\n  // operation\n}</code></pre>",
                text_ar: "تعقيد حلقة تزداد بمقدار ضربي k؟\n<pre><code>for(var i=1; i &lt; n; i *= k) {\n  // عملية\n}</code></pre>",
                options: ["O(n)", "O(log_k n)", "O(k)", "O(n/k)"],
                options_ar: ["O(n)", "O(log_k n)", "O(k)", "O(n/k)"],
                correct: 1,
                explanation: "Multiplying by a constant base k results in a logarithmic complexity O(log_k n).",
                explanation_ar: "الضرب في أساس ثابت k يؤدي إلى تعقيد لوغاريتمي O(log_k n)."
            },
            {
                id: "ca-5",
                text: "What is the complexity of this loop sequence?\n<pre><code>for(i=0; i &lt; n; i++) { /*...*/ }\nfor(j=0; j &lt; n; j++) { /*...*/ }</code></pre>",
                text_ar: "ما هو تعقيد تسلسل هذه الحلقات؟\n<pre><code>for(i=0; i &lt; n; i++) { /*...*/ }\nfor(j=0; j &lt; n; j++) { /*...*/ }</code></pre>",
                options: ["O(n²)", "O(2n)", "O(n)", "O(1)"],
                options_ar: ["O(n²)", "O(2n)", "O(n)", "O(1)"],
                correct: 2,
                explanation: "Sequential loops result in n + n = 2n, which simplifies to O(n).",
                explanation_ar: "الحلقات المتتالية تنتج n + n = 2n، وهو ما يبسط إلى O(n)."
            },
            {
                id: "ca-6",
                text: "Complexity of accessing an array element by index?\n<pre><code>int x = array[i];</code></pre>",
                text_ar: "تعقيد الوصول إلى عنصر في مصفوفة عبر الفهرس؟\n<pre><code>int x = array[i];</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                correct: 0,
                explanation: "Arrays support direct memory access via index in constant time.",
                explanation_ar: "تدعم المصفوفات الوصول المباشر للذاكرة عبر الفهرس في وقت ثابت."
            },
            {
                id: "ca-7",
                text: "Complexity of searching for a value in a balanced BST?\n<pre><code>node = bst.find(value);</code></pre>",
                text_ar: "تعقيد البحث عن قيمة في شجرة بحث ثنائية متوازنة؟\n<pre><code>node = bst.find(value);</code></pre>",
                options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
                options_ar: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
                correct: 2,
                explanation: "A balanced BST allows eliminating half the nodes in each step, taking O(log n).",
                explanation_ar: "تسمح شجرة البحث الثنائية المتوازنة باستبعاد نصف العقد في كل خطوة، مما يستغرق O(log n)."
            },
            {
                id: "ca-8",
                text: "Time complexity of this nested structure?\n<pre><code>for(i=1; i &lt;= n; i++) {\n  for(j=1; j &lt;= n; j *= 2) {\n    // operation\n  }\n}</code></pre>",
                text_ar: "التعقيد الزمني لهذا الهيكل المتداخل؟\n<pre><code>for(i=1; i &lt;= n; i++) {\n  for(j=1; j &lt;= n; j *= 2) {\n    // عملية\n  }\n}</code></pre>",
                options: ["O(n²)", "O(n log n)", "O(log n)", "O(n)"],
                options_ar: ["O(n²)", "O(n log n)", "O(log n)", "O(n)"],
                correct: 1,
                explanation: "Outer runs n times, inner runs log n times. Total is O(n log n).",
                explanation_ar: "الحلقة الخارجية تعمل n مرة، والداخلية تعمل log n مرة. الإجمالي هو O(n log n)."
            },
            {
                id: "ca-9",
                text: "Average case complexity of hash table insertion?\n<pre><code>hashTable.put(key, value);</code></pre>",
                text_ar: "تعقيد الإدراج في جدول التجزئة في الحالة المتوسطة؟\n<pre><code>hashTable.put(key, value);</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 0,
                explanation: "With a good hash function, insertion is average O(1).",
                explanation_ar: "مع دالة تجزئة جيدة، يكون الإدراج في المتوسط O(1)."
            },
            {
                id: "ca-10",
                text: "What is the time complexity of this recursive function?\n<pre><code>void solve(int n) {\n  if(n &lt;= 1) return;\n  solve(n-1);\n}</code></pre>",
                text_ar: "ما هو التعقيد الزمني لهذه الدالة العودية؟\n<pre><code>void solve(int n) {\n  if(n &lt;= 1) return;\n  solve(n-1);\n}</code></pre>",
                options: ["O(1)", "O(log n)", "O(n)", "O(2^n)"],
                options_ar: ["O(1)", "O(log n)", "O(n)", "O(2^n)"],
                correct: 2,
                explanation: "The function calls itself once per level, n levels deep: O(n).",
                explanation_ar: "تستدعي الدالة نفسها مرة واحدة في كل مستوى، بعمق n مستويات: O(n)."
            },
            {
                id: "ca-11",
                text: "Complexity of this recursive branching?\n<pre><code>void solve(int n) {\n  if(n &lt;= 0) return;\n  solve(n-1);\n  solve(n-1);\n}</code></pre>",
                text_ar: "تعقيد هذا التفرع العودي؟\n<pre><code>void solve(int n) {\n  if(n &lt;= 0) return;\n  solve(n-1);\n  solve(n-1);\n}</code></pre>",
                options: ["O(n)", "O(n²)", "O(2^n)", "O(log n)"],
                options_ar: ["O(n)", "O(n²)", "O(2^n)", "O(log n)"],
                correct: 2,
                explanation: "Each call generates two more, doubling at each level: O(2^n).",
                explanation_ar: "كل استدعاء يولد استدعاءين إضافيين، مما يضاعف العدد عند كل مستوى: O(2^n)."
            },
            {
                id: "ca-12",
                text: "Complexity of finding an element in a Sorted Array using Binary Search?\n<pre><code>while(low &lt;= high) {\n  mid = (low + high) / 2;\n  // ...\n}</code></pre>",
                text_ar: "تعقيد العثور على عنصر في مصفوفة مرتبة باستخدام البحث الثنائي؟\n<pre><code>while(low &lt;= high) {\n  mid = (low + high) / 2;\n  // ...\n}</code></pre>",
                options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                options_ar: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                correct: 2,
                explanation: "Binary search halves the search space in each step: O(log n).",
                explanation_ar: "البحث الثنائي يقسم مساحة البحث إلى النصف في كل خطوة: O(log n)."
            },
            {
                id: "ca-13",
                text: "Complexity of deleting from the HEAD of a Singly Linked List?\n<pre><code>head = head.next;</code></pre>",
                text_ar: "تعقيد الحذف من رأس قائمة متصلة مفردة؟\n<pre><code>head = head.next;</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 0,
                explanation: "Only the pointer reference needs to be changed: O(1).",
                explanation_ar: "يحتاج الأمر فقط إلى تغيير مرجع المؤشر: O(1)."
            },
            {
                id: "ca-14",
                text: "What is the complexity of this loop reducing by half?\n<pre><code>for(var i=n; i &gt; 1; i /= 2) {\n  // operation\n}</code></pre>",
                text_ar: "ما هو تعقيد هذه الحلقة التي تتقلص للنصف؟\n<pre><code>for(var i=n; i &gt; 1; i /= 2) {\n  // عملية\n}</code></pre>",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                options_ar: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "Halving n repeatedly takes log₂(n) steps.",
                explanation_ar: "تقسيم n على 2 بشكل متكرر يستغرق log₂(n) خطوة."
            },
            {
                id: "ca-15",
                text: "Complexity of building a Heap from N elements (Floyd's algorithm)?\n<pre><code>heapify(array);</code></pre>",
                text_ar: "تعقيد بناء كومة (Heap) من N عنصر (خوارزمية Floyd)؟\n<pre><code>heapify(array);</code></pre>",
                options: ["O(n log n)", "O(n)", "O(n²)", "O(1)"],
                options_ar: ["O(n log n)", "O(n)", "O(n²)", "O(1)"],
                correct: 1,
                explanation: "Optimized building of a heap from an unordered array is O(n).",
                explanation_ar: "البناء المحسن للكومة من مصفوفة غير مرتبة يتم في O(n)."
            },
            {
                id: "ca-16",
                text: "Worst-case time complexity of selection sort?\n<pre><code>for(i=0; i &lt; n-1; i++) {\n  min = findMin(i, n);\n  swap(i, min);\n}</code></pre>",
                text_ar: "تعقيد الوقت في أسوأ حالة لفرز التحديد (Selection Sort)؟\n<pre><code>for(i=0; i &lt; n-1; i++) {\n  min = findMin(i, n);\n  swap(i, min);\n}</code></pre>",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(√n)"],
                options_ar: ["O(n)", "O(n log n)", "O(n²)", "O(√n)"],
                correct: 2,
                explanation: "Selection sort always performs a nested loop search: O(n²).",
                explanation_ar: "فرز التحديد يقوم دائماً ببحث عبر حلقات متداخلة: O(n²)."
            },
            {
                id: "ca-17",
                text: "Complexity of popping an element from a Stack?\n<pre><code>data = stack.pop();</code></pre>",
                text_ar: "تعقيد سحب (Pop) عنصر من المكدس؟\n<pre><code>data = stack.pop();</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 0,
                explanation: "Stacks only interact with the top element: O(1).",
                explanation_ar: "المكدسات تتعامل فقط مع العنصر العلوي: O(1)."
            },
            {
                id: "ca-18",
                text: "Space complexity of an Adjacency Matrix for a graph with V vertices?\n<pre><code>matrix[V][V];</code></pre>",
                text_ar: "التعقيد المكاني لمصفوفة المجاورة لرسم بياني يحتوي على V من الرؤوس؟\n<pre><code>matrix[V][V];</code></pre>",
                options: ["O(V)", "O(E)", "O(V²)", "O(V + E)"],
                options_ar: ["O(V)", "O(E)", "O(V²)", "O(V + E)"],
                correct: 2,
                explanation: "Representing connections between V nodes requires a V × V matrix. O(V²).",
                explanation_ar: "تمثيل الاتصالات بين V من العقد يتطلب مصفوفة V × V. تعقيدها O(V²)."
            },
            {
                id: "ca-19",
                text: "Complexity of merging two sorted arrays of size N?\n<pre><code>while(i &lt; n &amp;&amp; j &lt; n) { /* comparison */ }</code></pre>",
                text_ar: "تعقيد دمج مصفوفتين مرتبتين بحجم N؟\n<pre><code>while(i &lt; n &amp;&amp; j &lt; n) { /* مقارنة */ }</code></pre>",
                options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
                options_ar: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
                correct: 2,
                explanation: "Each element is visited once during merging: O(2n) = O(n).",
                explanation_ar: "تتم زيارة كل عنصر مرة واحدة أثناء الدمج: O(2n) = O(n)."
            },
            {
                id: "ca-20",
                text: "Complexity of updating a value in a segment tree of size N?\n<pre><code>update(1, 0, n-1, idx, val);</code></pre>",
                text_ar: "تعقيد تحديث قيمة في شجرة قطاع (Segment Tree) بحجم N؟\n<pre><code>update(1, 0, n-1, idx, val);</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 2,
                explanation: "Updates traverse the height of the tree: O(log n).",
                explanation_ar: "التحديثات تجتاز ارتفاع الشجرة: O(log n)."
            },
            {
                id: "ca-21",
                text: "Time complexity of these triple nested loops?\n<pre><code>for(i=0; i &lt; n; i++) {\n  for(j=0; j &lt; n; j++) {\n    for(k=0; k &lt; n; k++) {\n       // O(1) ops\n    }\n  }\n}</code></pre>",
                text_ar: "التعقيد الزمني لهذه الحلقات الثلاثية المتداخلة؟\n<pre><code>for(i=0; i &lt; n; i++) {\n  for(j=0; j &lt; n; j++) {\n    for(k=0; k &lt; n; k++) {\n       // عمليات O(1)\n    }\n  }\n}</code></pre>",
                options: ["O(3n)", "O(n³)", "O(n²)", "O(n log n)"],
                options_ar: ["O(3n)", "O(n³)", "O(n²)", "O(n log n)"],
                correct: 1,
                explanation: "Executed N × N × N times: O(n³).",
                explanation_ar: "يتم التنفيذ N × N × N من المرات: O(n³)."
            },
            {
                id: "ca-22",
                text: "Complexity of searching in a Skewed BST (worst case)?\n<pre><code>// Tree is just a line of nodes</code></pre>",
                text_ar: "تعقيد البحث في شجرة بحث ثنائية منحرفة (أسوأ حالة)؟\n<pre><code>// الشجرة عبارة عن خط من العقد فقط</code></pre>",
                options: ["O(log n)", "O(1)", "O(n)", "O(n²)"],
                options_ar: ["O(log n)", "O(1)", "O(n)", "O(n²)"],
                correct: 2,
                explanation: "A skewed BST degrades into a linked list: O(n).",
                explanation_ar: "شجرة البحث الثنائية المنحرفة تتحلل إلى قائمة متصلة: O(n)."
            },
            {
                id: "ca-23",
                text: "Complexity of inserting at the END of a Dynamic Array (Amortized)?\n<pre><code>vector.push_back(val);</code></pre>",
                text_ar: "تعقيد الإدراج في نهاية مصفوفة ديناميكية (بالتكلفة المستهلكة)؟\n<pre><code>vector.push_back(val);</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 0,
                explanation: "Most insertions are O(1), occasionally O(n) during resizing. Average is O(1).",
                explanation_ar: "معظم عمليات الإدراج هي O(1)، وأحياناً O(n) أثناء تغيير الحجم. المتوسط هو O(1)."
            },
            {
                id: "ca-24",
                text: "Complexity of iterating over all edges in Adjacency List representation?\n<pre><code>for(u in nodes) {\n  for(v in adj[u]) { /* processing edge */ }\n}</code></pre>",
                text_ar: "تعقيد المرور عبر جميع الحواف في تمثيل قائمة المجاورة؟\n<pre><code>for(u in nodes) {\n  for(v in adj[u]) { /* معالجة الحافة */ }\n}</code></pre>",
                options: ["O(V²)", "O(E)", "O(V + E)", "O(V log V)"],
                options_ar: ["O(V²)", "O(E)", "O(V + E)", "O(V log V)"],
                correct: 2,
                explanation: "Visits every vertex and every edge: O(V + E).",
                explanation_ar: "يزور كل رأس وكل حافة: O(V + E)."
            },
            {
                id: "ca-25",
                text: "Worst-case time complexity of Quick Sort?\n<pre><code>// Pivot is always the smallest/largest element</code></pre>",
                text_ar: "تعقيد الوقت في أسوأ حالة للفرز السريع (Quick Sort)؟\n<pre><code>// المحور دائماً هو أصغر/أكبر عنصر</code></pre>",
                options: ["O(n log n)", "O(n)", "O(n²)", "O(2^n)"],
                options_ar: ["O(n log n)", "O(n)", "O(n²)", "O(2^n)"],
                correct: 2,
                explanation: "Inefficient pivots cause O(n) partitions: O(n²).",
                explanation_ar: "المحاور غير الفعالة تسبب O(n) من التقسيمات: O(n²)."
            },
            {
                id: "ca-26",
                text: "Complexity of finding the Minimum element in a Min-Heap?\n<pre><code>min = heap[0];</code></pre>",
                text_ar: "تعقيد العثور على العنصر الأصغر في كومة صغرى (Min-Heap)؟\n<pre><code>min = heap[0];</code></pre>",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                options_ar: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correct: 0,
                explanation: "The minimum is always at the root of a Min-Heap: O(1).",
                explanation_ar: "الأصغر يكون دائماً في جذر الكومة الصغرى: O(1)."
            },
            {
                id: "ca-27",
                text: "Complexity of deleting an element at an arbitrary index from a Dynamic Array?\n<pre><code>array.erase(index);</code></pre>",
                text_ar: "تعقيد حذف عنصر عند فهرس عشوائي من مصفوفة ديناميكية؟\n<pre><code>array.erase(index);</code></pre>",
                options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                options_ar: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                correct: 1,
                explanation: "All subsequent elements must be shifted to fill the gap: O(n).",
                explanation_ar: "يجب إزاحة جميع العناصر اللاحقة لملء الفجوة: O(n)."
            },
            {
                id: "ca-28",
                text: "Space complexity of BFS on a Graph (using Queue)?\n<pre><code>queue.push(start_node);</code></pre>",
                text_ar: "التعقيد المكاني للبحث بالعرض أولاً (BFS) على رسم بياني؟\n<pre><code>queue.push(start_node);</code></pre>",
                options: ["O(1)", "O(V)", "O(E)", "O(V²)"],
                options_ar: ["O(1)", "O(V)", "O(E)", "O(V²)"],
                correct: 1,
                explanation: "Queue stores nodes at the current level, max O(V).",
                explanation_ar: "تخزن قائمة الانتظار العقد في المستوى الحالي، بحد أقصى O(V)."
            },
            {
                id: "ca-29",
                text: "Complexity of Pre-order traversal on a Binary Tree?\n<pre><code>void traverse(node) {\n  print(node.val);\n  traverse(node.left);\n  traverse(node.right);\n}</code></pre>",
                text_ar: "تعقيد الاجتياز السابق للترتيب (Pre-order) على شجرة ثنائية؟\n<pre><code>void traverse(node) {\n  print(node.val);\n  traverse(node.left);\n  traverse(node.right);\n}</code></pre>",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(2n)"],
                options_ar: ["O(n)", "O(log n)", "O(n log n)", "O(2n)"],
                correct: 0,
                explanation: "Visits every node exactly once: O(n).",
                explanation_ar: "يزور كل عقدة مرة واحدة بالضبط: O(n)."
            },
            {
                id: "ca-tf-1",
                text: "A loop from 1 to N with a nested loop from 1 to N results in O(n²).",
                text_ar: "حلقة من 1 إلى N بداخلها حلقة أخرى من 1 إلى N تؤدي إلى تعقيد O(n²).",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Nested loops result in multiplication of complexities: N * N = N².",
                explanation_ar: "تؤدي الحلقات المتداخلة إلى ضرب التعقيدات: N * N = N²."
            },
            {
                id: "ca-tf-2",
                text: "Logarithmic time complexity O(log n) grows faster than linear O(n).",
                text_ar: "التعقيد الزمني اللوغاريتمي O(log n) ينمو أسرع من التعقيد الخطي O(n).",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "O(log n) is much slower/more efficient than O(n).",
                explanation_ar: "O(log n) أبطأ بكثير/أكثر كفاءة من O(n)."
            }
        ]
    },
    {
        id: "stack-apps",
        title: "Stack Applications (Infix/Prefix/Postfix)",
        title_ar: "تطبيقات المكدس (Infix/Prefix/Postfix)",
        description: "Master expression conversion and evaluation: Infix, Prefix, and Postfix.",
        description_ar: "أتقن تحويل وتقييم التعبيرات: Infix و Prefix و Postfix.",
        icon: "⚙️",
        questions: [
            {
                id: "sa-1",
                text: "Which data structure is primarily used for converting an Infix expression to Postfix?",
                text_ar: "ما هي بنية البيانات المستخدمة بشكل أساسي لتحويل التعبير من Infix إلى Postfix؟",
                options: ["Queue", "Stack", "Linked List", "Tree"],
                options_ar: ["طابور (Queue)", "مكدس (Stack)", "قائمة متصلة", "شجرة"],
                correct: 1,
                explanation: "The Shunting-yard algorithm uses a Stack to hold operators until they can be added to the Postfix output.",
                explanation_ar: "تستخدم خوارزمية Shunting-yard المكدس (Stack) للاحتفاظ بالعمليات حتى يحين وقت إضافتها للمخرجات."
            },
            {
                id: "sa-2",
                text: "What is the Postfix form of the Infix expression: (A + B) * C?",
                text_ar: "ما هو شكل الـ Postfix للتعبير التالي: (A + B) * C؟",
                options: ["AB+C*", "ABC+*", "A+BC*", "AB*C+"],
                options_ar: ["AB+C*", "ABC+*", "A+BC*", "AB*C+"],
                correct: 0,
                explanation: "(A + B) becomes AB+, then multiplying by C results in AB+C*.",
                explanation_ar: "(A + B) تصبح AB+، ثم الضرب في C ينتج عنه AB+C*."
            },
            {
                id: "sa-3",
                text: "In Postfix notation, where are the operators placed?",
                text_ar: "في تدوين Postfix، أين يتم وضع العمليات؟",
                options: ["Before operands", "In between operands", "After operands", "At the beginning"],
                options_ar: ["قبل المعاملات", "بين المعاملات", "بعد المعاملات", "في البداية"],
                correct: 2,
                explanation: "Postfix notation (Reverse Polish Notation) places operators after their operands.",
                explanation_ar: "تدوين Postfix يضع العمليات بعد المعاملات الخاصة بها."
            },
            {
                id: "sa-4",
                text: "What is the value of the Postfix expression: 5 3 + 2 * ?",
                text_ar: "ما هي قيمة تعبير الـ Postfix التالي: 5 3 + 2 * ؟",
                options: ["11", "16", "25", "10"],
                options_ar: ["11", "16", "25", "10"],
                correct: 1,
                explanation: "5+3=8, then 8*2=16.",
                explanation_ar: "5+3=8، ثم 8*2=16."
            },
            {
                id: "sa-5",
                text: "Which of the following is the Prefix form of: A + B * C?",
                text_ar: "أي مما يلي هو شكل الـ Prefix للتعبير: A + B * C؟",
                options: ["+A*BC", "+*ABC", "ABC*+", "A+BC*"],
                options_ar: ["+A*BC", "+*ABC", "ABC*+", "A+BC*"],
                correct: 0,
                explanation: "Operator precedence: B*C is *BC, then A + (*BC) is +A*BC.",
                explanation_ar: "أولوية العمليات: B*C تصبح *BC، ثم A + (*BC) تصبح +A*BC."
            },
            {
                id: "sa-6",
                text: "When evaluating a Postfix expression, what do you do when you encounter an operand?",
                text_ar: "عند تقييم تعبير Postfix، ماذا تفعل عندما تواجه معاملاً (رقماً)؟",
                options: ["Pop from stack", "Push to stack", "Discard it", "Multiply it"],
                options_ar: ["سحب من المكدس", "دفع إلى المكدس", "تجاهله", "ضربه"],
                correct: 1,
                explanation: "During Postfix evaluation, all operands are pushed onto the stack until an operator is met.",
                explanation_ar: "أثناء تقييم Postfix، يتم دفع جميع المعاملات إلى المكدس حتى يتم العثور على عملية."
            },
            {
                id: "sa-7",
                text: "What is the Postfix expression for: A * (B + C) / D?",
                text_ar: "ما هو تعبير الـ Postfix لـ: A * (B + C) / D؟",
                options: ["ABC+*D/", "AB*C+D/", "ABCD+*/", "ABC+D*/"],
                options_ar: ["ABC+*D/", "AB*C+D/", "ABCD+*/", "ABC+D*/"],
                correct: 0,
                explanation: "B+C is BC+, then A*BC+ is ABC+*, then ABC+*/D is ABC+*D/.",
                explanation_ar: "B+C تصبح BC+، ثم A*BC+ تصبح ABC+*، ثم قسمة الناتج على D تصبح ABC+*D/."
            },
            {
                id: "sa-8",
                text: "The expression +AB is called:",
                text_ar: "التعبير +AB يسمى تدوين:",
                options: ["Infix", "Postfix", "Prefix", "None of the above"],
                options_ar: ["إدخالي (Infix)", "بعدي (Postfix)", "قبلي (Prefix)", "لا شيء مما سبق"],
                correct: 2,
                explanation: "+AB is Prefix (Polish Notation) because the operator comes before the operands.",
                explanation_ar: "تدوين الـ Prefix يضع العمليات قبل المعاملات (+AB)."
            },
            {
                id: "sa-9",
                text: "What is the value of the Postfix expression: 10 2 / 5 + ?",
                text_ar: "ما هي قيمة تعبير الـ Postfix التالي: 10 2 / 5 + ؟",
                options: ["10", "15", "5", "7"],
                options_ar: ["10", "15", "5", "7"],
                correct: 0,
                explanation: "10/2=5, then 5+5=10.",
                explanation_ar: "10/2=5، ثم 5+5=10."
            },
            {
                id: "sa-10",
                text: "Which operator has the highest precedence in expression evaluation?",
                text_ar: "أي عملية لها الأولوية القصوى في تقييم التعبيرات؟",
                options: ["+", "-", "*", "^ (Power)"],
                options_ar: ["+", "-", "*", "^ (الأس)"],
                correct: 3,
                explanation: "The exponentiation operator (^) usually has higher precedence than multiplication or addition.",
                explanation_ar: "عملية الأس (^) عادة ما يكون لها أولوية أعلى من الضرب أو الجمع."
            },
            {
                id: "sa-11",
                text: "To convert Infix to Postfix, if we encounter an opening parenthesis '(', we:",
                text_ar: "لتحويل Infix إلى Postfix، إذا واجهنا قوس فتح '('، نقوم بـ:",
                options: ["Pop all elements", "Push it onto stack", "Append to output", "Ignore it"],
                options_ar: ["سحب جميع العناصر", "دفعه إلى المكدس", "إضافته للمخرجات", "تجاهله"],
                correct: 1,
                explanation: "Parentheses are pushed into the stack to mark the beginning of a sub-expression.",
                explanation_ar: "يتم دفع الأقواس إلى المكدس لتمييز بداية تعبير فرعي."
            },
            {
                id: "sa-12",
                text: "What is the Infix equivalent of the Postfix: AB-C* ?",
                text_ar: "ما هو ما يعادل Infix للـ Postfix التالي: AB-C* ؟",
                options: ["A - B * C", "(A - B) * C", "A * (B - C)", "A - (B * C)"],
                options_ar: ["A - B * C", "(A - B) * C", "A * (B - C)", "A - (B * C)"],
                correct: 1,
                explanation: "AB- is (A-B), then (A-B)C* is (A-B)*C.",
                explanation_ar: "AB- تقابل (A-B)، ثم (A-B)C* تقابل (A-B)*C."
            },
            {
                id: "sa-13",
                text: "Evaluating Postfix: 2 3 ^ 4 +",
                text_ar: "تقييم Postfix التالي: 2 3 ^ 4 +",
                options: ["10", "12", "14", "24"],
                options_ar: ["10", "12", "14", "24"],
                correct: 1,
                explanation: "2^3 = 8, then 8+4 = 12.",
                explanation_ar: "2^3 = 8، ثم 8+4 = 12."
            },
            {
                id: "sa-14",
                text: "Prefix form of: (A-B/C)*(D*E-F)",
                text_ar: "شكل الـ Prefix لـ: (A-B/C)*(D*E-F)",
                options: ["*-A/BC-DEF", "*-/ABC-*DEF", "*-A/BC-*DEF", "None"],
                options_ar: ["*-A/BC-DEF", "*-/ABC-*DEF", "*-A/BC-*DEF", "لا شيء"],
                correct: 2,
                explanation: "After step-by-step conversion, the prefix is *-A/BC-*DEF.",
                explanation_ar: "بعد التحويل خطوة بخطوة، يكون الـ prefix هو *-A/BC-*DEF."
            },
            {
                id: "sa-15",
                text: "Stack is useful for 'Parenthesis Balancing' because of its property:",
                text_ar: "المكدس مفيد لـ 'موازنة الأقواس' بسبب خاصية:",
                options: ["FIFO", "LIFO", "Linear access", "Random access"],
                options_ar: ["FIFO", "LIFO", "الوصول الخطي", "الوصول العشوائي"],
                correct: 1,
                explanation: "Last-In, First-Out allows matching the most recently opened parenthesis with its closing partner.",
                explanation_ar: "خاصية 'آخر من يدخل، أول من يخرج' تسمح بمطابقة آخر قوس تم فتحه مع قوس الإغلاق الخاص به."
            },
            {
                id: "sa-16",
                text: "Conversion of Infix to Prefix requires:",
                text_ar: "تحويل Infix إلى Prefix يتطلب:",
                options: ["Reversing input", "Doubling stack", "Sorting", "None"],
                options_ar: ["عكس المدخلات", "مضاعفة المكدس", "الفرز", "لا شيء"],
                correct: 0,
                explanation: "A common method involves reversing the infix string, converting it to postfix-like, then reversing again.",
                explanation_ar: "تتضمن إحدى الطرق الشائعة عكس سلسلة infix، وتحويلها لترميز يشبه postfix، ثم عكسها مرة أخرى."
            },
            {
                id: "sa-17",
                text: "Evaluating Postfix: 6 2 3 * /",
                text_ar: "تقييم Postfix التالي: 6 2 3 * /",
                options: ["9", "1", "0", "12"],
                options_ar: ["9", "1", "0", "12"],
                correct: 1,
                explanation: "2*3=6, then 6/6=1.",
                explanation_ar: "2*3=6، ثم 6/6=1."
            },
            {
                id: "sa-18",
                text: "If stack is [+, (], and we encounter ')', what do we do?",
                text_ar: "إذا كان المكدس يحتوي على [+, (] وواجهنا ')'، ماذا نفعل؟",
                options: ["Push it", "Pop until '('", "Clear stack", "Wait"],
                options_ar: ["دفعه", "سحب حتى '('", "مسح المكدس", "انتظار"],
                correct: 1,
                explanation: "When a closing parenthesis is found, pop and display elements until an opening parenthesis is encountered.",
                explanation_ar: "عند العثور على قوس إغلاق، نسحب ونعرض العناصر حتى نصل إلى قوس الفتح."
            },
            {
                id: "sa-19",
                text: "Postfix of A+B*C+D:",
                text_ar: "الـ Postfix لـ A+B*C+D:",
                options: ["ABC*+D+", "ABC*D++", "ABCD+*+", "None"],
                options_ar: ["ABC*+D+", "ABC*D++", "ABCD+*+", "لا شيء"],
                correct: 0,
                explanation: "B*C is BC*, then A+BC* is ABC*+, then ABC*+D+.",
                explanation_ar: "B*C تصبح BC*، ثم A+BC* تصبح ABC*+، ثم إضافة D تصبح ABC*+D+."
            },
            {
                id: "sa-20",
                text: "Which operation is performed first for Postfix: 8 2 / 2 ^ ?",
                text_ar: "أي عملية يتم تنفيذها أولاً في الـ Postfix: 8 2 / 2 ^ ؟",
                options: ["^", "/", "*", "-"],
                options_ar: ["^", "/", "*", "-"],
                correct: 1,
                explanation: "In Postfix, operations are performed in the order they appear from left to right.",
                explanation_ar: "في الـ Postfix، يتم تنفيذ العمليات بالترتيب الذي تظهر به من اليسار إلى اليمين."
            },
            {
                id: "sa-tf-1",
                text: "Postfix expressions require parentheses to define operation priority.",
                text_ar: "تعبيرات Postfix تتطلب أقواساً لتحديد أولوية العمليات.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 1,
                explanation: "Postfix notation is unambiguous and does not need parentheses.",
                explanation_ar: "تدوين Postfix لا يحتاج إلى أقواس لأنه واضح وغير غامض."
            },
            {
                id: "sa-tf-2",
                text: "The Shunting-yard algorithm is used to convert Infix to Postfix.",
                text_ar: "تُستخدم خوارزمية Shunting-yard لتحويل Infix إلى Postfix.",
                options: ["True", "False"],
                options_ar: ["صح", "خطأ"],
                correct: 0,
                explanation: "Developed by Edsger Dijkstra, this algorithm uses a stack for operator priority.",
                explanation_ar: "تم تطوير هذه الخوارزمية بواسطة إيدجر ديكسترا، وهي تستخدم مكدساً لأولويات العمليات."
            }
        ]
    }
];


