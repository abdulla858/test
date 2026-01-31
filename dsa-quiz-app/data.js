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
                id: "arr-40",
                text: "Which data structure is the building block of a Hash Table?",
                text_ar: "ما هي بنية البيانات التي تشكل اللبنة الأساسية لجدول التجزئة (Hash Table)؟",
                options: ["Array", "Tree", "Graph", "Heap"],
                options_ar: ["المصفوفة", "الشجرة", "الرسم البياني", "الكومة (Heap)"],
                correct: 0,
                explanation: "Hash tables typically use an array to store buckets of key-value pairs.",
                explanation_ar: "تستخدم جداول التجزئة عادةً مصفوفة لتخزين مجموعات أزواج المفتاح والقيمة."
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
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 2,
                explanation: "Removing the root requires reheapifying, which is O(log n)."
            },
            {
                id: "q-34",
                text: "Inserting into a Priority Queue (Max Heap) takes:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 2,
                explanation: "Insertion requires bubbling up, taking O(log n) time."
            },
            {
                id: "q-35",
                text: "A blocking queue is commonly used in:",
                options: ["Single-threaded apps", "Multi-threaded Producer-Consumer", "Static websites", "Recursion"],
                correct: 1,
                explanation: "It blocks threads if valid operations (enqueue/dequeue) cannot be performed immediately."
            },
            {
                id: "q-36",
                text: "Rotten Oranges problem on a grid is solved using:",
                options: ["DFS", "BFS", "Backtracking", "Greedy"],
                correct: 1,
                explanation: "Rotting spreads layer by layer, suitable for BFS with a Queue."
            },
            {
                id: "q-37",
                text: "Which queue variation allows insertion at both ends but deletion at only one?",
                options: ["Input Restricted Deque", "Output Restricted Deque", "Priority Queue", "Simple Queue"],
                correct: 1,
                explanation: "Output Restricted Deque restricts deletion to one end."
            },
            {
                id: "q-38",
                text: "Call center phone systems use queues to:",
                options: ["Hold calls for agents", "Reject calls", "Stack calls", "Sort calls alphabetically"],
                correct: 0,
                explanation: "Waiting calls are held in a FIFO queue until an agent is free."
            },
            {
                id: "q-39",
                text: "When implementing a queue with an array, we shift elements on dequeue to avoid wasted space. Time complexity becomes:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Shifting all remaining elements takes O(n) time."
            },
            {
                id: "q-40",
                text: "Double buffering in graphics uses:",
                options: ["Two queues", "Two stacks", "Two buffers (often swapped)", "Linked List"],
                correct: 2,
                explanation: "While conceptually buffers, the swapping mechanism is key. Queues manage the flow of frames."
            }
        ]
    },
    {
        id: "linkedlist",
        title: "Linked Lists",
        description: "Singly, Doubly, and implemented stacks/queues.",
        icon: "🔗",
        questions: [
            {
                id: "ll-1",
                text: "What does each node in a singly linked list contain?",
                options: ["Data only", "Data and Pointer to next", "Data and Pointer to previous", "Pointer to head"],
                correct: 1,
                explanation: "A singly linked list node typically holds the data and a reference (pointer) to the next node."
            },
            {
                id: "ll-2",
                text: "What is the time complexity to insert a node at the beginning of a linked list?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 0,
                explanation: "Updating the head pointer is a constant time operation."
            },
            {
                id: "ll-3",
                text: "In a Doubly Linked List, how many pointers does each node typically have?",
                options: ["1", "2", "3", "0"],
                correct: 1,
                explanation: "One pointer for the next node and one for the previous node."
            },
            {
                id: "ll-4",
                text: "When implementing a Stack using a Linked List, which end is best for push/pop?",
                options: ["Wait for user input", "Head (Start)", "Tail (End)", "Random"],
                correct: 1,
                explanation: "Operations at the head are O(1) without needing to traverse the list."
            },
            {
                id: "ll-5",
                text: "To delete the last node of a Singly Linked List (without a tail pointer), time complexity is:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "You must traverse to the second-to-last node to update its next pointer to null."
            },
            {
                id: "ll-6",
                text: "What is the main advantage of a Linked List over an Array?",
                options: ["Random Access", "Dynamic Size", "Cache Locality", "Memory Efficiency"],
                correct: 1,
                explanation: "Linked Lists grow and shrink dynamically without needing contiguous memory reallocation."
            },
            {
                id: "ll-7",
                text: "Floyd's Cycle Finding Algorithm uses:",
                options: ["Two pointers moving at same speed", "Two pointers moving at different speeds", "Stack", "Queue"],
                correct: 1,
                explanation: "It uses a slow pointer (1 step) and a fast pointer (2 steps) to detect cycles."
            },
            {
                id: "ll-8",
                text: "In a Circular Linked List, the next pointer of the last node points to:",
                options: ["Null", "Head", "Previous node", "Random"],
                correct: 1,
                explanation: "It points back to the Head, forming a circle."
            },
            {
                id: "ll-9",
                text: "Which pointer is sufficient to traverse a Circular Singly Linked List completely?",
                options: ["Head", "Tail", "Any node", "None"],
                correct: 2,
                explanation: "Start at any node and follow next pointers until you reach the start node again."
            },
            {
                id: "ll-10",
                text: "Random access in a Linked List takes:",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "You must traverse from the head to reach the k-th element."
            },
            {
                id: "ll-11",
                text: "An XOR Linked List uses bitwise XOR to store:",
                options: ["Data", "Next and Previous addresses combined", "Head and Tail", "None"],
                correct: 1,
                explanation: "It stores `prev ^ next` in a single field to save memory (doubly linked functionality with one pointer space)."
            },
            {
                id: "ll-12",
                text: "To reverse a Singly Linked List, how many pointers are typically used in the iterative method?",
                options: ["1", "2", "3", "4"],
                correct: 2,
                explanation: "Typically Prev, Current, and Next pointers are used."
            },
            {
                id: "ll-13",
                text: "Merging two sorted linked lists of size N and M takes:",
                options: ["O(1)", "O(min(N,M))", "O(N+M)", "O(N*M)"],
                correct: 2,
                explanation: "You traverse both lists once."
            },
            {
                id: "ll-14",
                text: "Which sorting algorithm is well-suited for Linked Lists?",
                options: ["Merge Sort", "Binary Search", "Heap Sort", "Quick Sort"],
                correct: 0,
                explanation: "Merge Sort works well as it doesn't require random access."
            },
            {
                id: "ll-15",
                text: "A Skip List allows fast search in a Linked List hierarchy with complexity:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                correct: 1,
                explanation: "It provides probabilistic O(log n) search, insertion, and deletion."
            },
            {
                id: "ll-16",
                text: "Intersection point of two Linked Lists can be found by:",
                options: ["Difference in counts", "Hash Map", "Two pointer trick", "All of the above"],
                correct: 3,
                explanation: "All these methods can effectively find the intersection node."
            },
            {
                id: "ll-17",
                text: "Linked Lists are stored in memory as:",
                options: ["Contiguous blocks", "Non-contiguous nodes", "Stack frames", "Binary trees"],
                correct: 1,
                explanation: "Nodes can be scattered anywhere in the heap memory."
            },
            {
                id: "ll-18",
                text: "Deleting a node given only the pointer to that node (and it's not the last one) can be done in:",
                options: ["O(1)", "O(n)", "Impossible", "O(log n)"],
                correct: 0,
                explanation: "Copy the data from the next node to the current node and delete the next node."
            },
            {
                id: "ll-19",
                text: "Which type of Linked List allows traversal in both directions?",
                options: ["Singly", "Doubly", "Circular Singly", "Skip List"],
                correct: 1,
                explanation: "Doubly Linked Lists have Next and Prev pointers."
            },
            {
                id: "ll-20",
                text: "A dummy or sentinel node is used to:",
                options: ["Store extra data", "Simplify boundary conditions", "Mark ends", "Increase speed"],
                correct: 1,
                explanation: "It eliminates special handling for head/tail operations."
            },
            {
                id: "ll-21",
                text: "Memory waste in a Doubly Linked List is due to:",
                options: ["Data fragmentation", "Extra pointer per node", "Padding", "None"],
                correct: 1,
                explanation: "Storing the 'previous' pointer consumes extra memory per node compared to SLL."
            },
            {
                id: "ll-22",
                text: "Finding the middle of a Linked List in one pass requires:",
                options: ["Counting elements", "Two pointers (Slow/Fast)", "Recursion", "Stack"],
                correct: 1,
                explanation: "Move fast pointer 2 steps and slow pointer 1 step; when fast ends, slow is at middle."
            },
            {
                id: "ll-23",
                text: "A Linked List is a:",
                options: ["Linear Data Structure", "Non-linear Data Structure", "Technically both", "Neither"],
                correct: 0,
                explanation: "Elements are arranged sequentially."
            },
            {
                id: "ll-24",
                text: "Removing duplicates from an unsorted Linked List using hashing takes:",
                options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                correct: 0,
                explanation: "One pass with a Hash Set to track seen values."
            },
            {
                id: "ll-25",
                text: "To check if a Linked List is a palindrome, one common approach involves:",
                options: ["Reversing second half", "Sorting", "Hashing", "Deleting nodes"],
                correct: 0,
                explanation: "Reverse the second half and compare with the first half."
            },
            {
                id: "ll-26",
                text: "Insertion Sort on a Linked List is:",
                options: ["Impossible", "Possible but inefficient", "Possible and stable", "O(n)"],
                correct: 2,
                explanation: "It is possible and stable, though O(n^2)."
            },
            {
                id: "ll-27",
                text: "Which problem is Josephus problem related to?",
                options: ["Stack", "Queue", "Circular Linked List", "Tree"],
                correct: 2,
                explanation: "Circular Linked Lists naturally model the circle."
            },
            {
                id: "ll-28",
                text: "Cache performance of Linked Lists is generally:",
                options: ["Better than Arrays", "Worse than Arrays", "Same as Arrays", "Optimal"],
                correct: 1,
                explanation: "Non-contiguous memory leads to poor spatial locality and more cache misses."
            },
            {
                id: "ll-29",
                text: "Adding two numbers represented by Linked Lists (reverse order) involves:",
                options: ["Traversing and carrying over", "Converting to int", "Reversing first", "Using stacks"],
                correct: 0,
                explanation: "Traverse both lists, sum nodes + carry, and create new result node."
            },
            {
                id: "ll-30",
                text: "If Head is null, the Linked List is:",
                options: ["Full", "Empty", "One node", "Invalid"],
                correct: 1,
                explanation: "A null head pointer signifies an empty list."
            },
            {
                id: "ll-31",
                text: "Inserting at the end of a Singly Linked List with only Head pointer takes:",
                options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
                correct: 1,
                explanation: "You must traverse the entire list to find the last node."
            },
            {
                id: "ll-32",
                text: "Polynomial addition is an application of:",
                options: ["Arrays", "Linked Lists", "Stacks", "Heaps"],
                correct: 1,
                explanation: "Linked lists can represent terms of a polynomial efficiently, especially if sparse."
            },
            {
                id: "ll-33",
                text: "The 'Runner' technique refers to:",
                options: ["Using two pointers", "Running code fast", "Skipping nodes", "Deleting nodes"],
                correct: 0,
                explanation: "Also known as the Fast/Slow pointer or Tortoise/Hare technique."
            },
            {
                id: "ll-34",
                text: "What happens if you free a node without updating the previous node's next pointer?",
                options: ["Dangling Pointer", "Memory Leak", "Correct deletion", "Stack Overflow"],
                correct: 0,
                explanation: "The previous node still points to the deallocated memory location."
            },
            {
                id: "ll-35",
                text: "Swapping nodes in a Linked List without swapping data requires changing:",
                options: ["Values", "Links (Pointers)", "Head only", "Tail only"],
                correct: 1,
                explanation: "You adjust the next (and prev) pointers to reorder the nodes."
            },
            {
                id: "ll-36",
                text: "Segregating even and odd nodes in a Linked List can be done in:",
                options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
                correct: 0,
                explanation: "One pass is sufficient to split and reconnect them."
            },
            {
                id: "ll-37",
                text: "The address of the first node is aka:",
                options: ["Base address", "Head", "Top", "Root"],
                correct: 1,
                explanation: "The pointer to the first node is called the Head."
            },
            {
                id: "ll-38",
                text: "Implementing a Queue with a Circular Linked List requires how many pointers?",
                options: ["Two (Front, Rear)", "One (Rear only)", "Three", "Zero"],
                correct: 1,
                explanation: "A single 'Rear' pointer is sufficient; Rear->Next is Front."
            },
            {
                id: "ll-39",
                text: "Find the Nth node from the end of a linked list requires:",
                options: ["Two passes or Two pointers", "Sorting", "Hashing", "Binary Search"],
                correct: 0,
                explanation: "Move fast pointer N steps, then move both until fast reaches end."
            },
            {
                id: "ll-40",
                text: "Can a Linked List contain a cycle?",
                options: ["No", "Yes", "Only Doubly Linked List", "Only if size > 10"],
                correct: 1,
                explanation: "Yes, if a node points back to a previous node in the list."
            }
        ]
    },
    {
        id: "tree",
        title: "Trees",
        description: "Binary Trees, Traversals (Inorder, Preorder, Postorder).",
        icon: "🌳",
        questions: [
            {
                id: "tr-1",
                text: "What is the maximum number of nodes in a binary tree of height 'h' (root at height 0)?",
                options: ["2^h", "2^(h+1) - 1", "2^h - 1", "h^2"],
                correct: 1,
                explanation: "Geometric series sum: 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1."
            },
            {
                id: "tr-2",
                text: "Which traversal visits the root node LAST?",
                options: ["Preorder", "Inorder", "Postorder", "Level Order"],
                correct: 2,
                explanation: "Postorder traversal: Left -> Right -> Root."
            },
            {
                id: "tr-3",
                text: "In a Binary Search Tree (BST), the left child is always:",
                options: ["Greater than root", "Smaller than root", "Equal to root", "Any value"],
                correct: 1,
                explanation: "BST property: Left < Root < Right."
            },
            {
                id: "tr-4",
                text: "For the tree: Root(A) -> Left(B), Right(C). What is the Preorder traversal?",
                options: ["B A C", "A B C", "B C A", "C B A"],
                correct: 1,
                explanation: "Preorder: Root -> Left -> Right (A -> B -> C)."
            },
            {
                id: "tr-5",
                text: "Which traversal is natural for processing a BST in sorted order?",
                options: ["Preorder", "Inorder", "Postorder", "Level Order"],
                correct: 1,
                explanation: "Inorder traversal of a BST visits nodes in non-decreasing order."
            },
            {
                id: "tr-6",
                text: "What is the worst-case time complexity for searching in a BST?",
                options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "In a skewed tree (like a linked list), searching takes O(n)."
            },
            {
                id: "tr-7",
                text: "AVL Tree is a type of:",
                options: ["Binary Search Tree", "Heap", "Hash Table", "Graph"],
                correct: 0,
                explanation: "AVL trees are self-balancing Binary Search Trees."
            },
            {
                id: "tr-8",
                text: "In a min-heap, the root node contains the:",
                options: ["Maximum element", "Minimum element", "Median element", "Random element"],
                correct: 1,
                explanation: "In a min-heap, every parent is smaller than its children."
            },
            {
                id: "tr-9",
                text: "What is the height of a complete binary tree with N nodes?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: 1,
                explanation: "A complete binary tree is balanced, so height is log2(N)."
            },
            {
                id: "tr-10",
                text: "The number of edges in a tree with N nodes is always:",
                options: ["N", "N - 1", "N + 1", "2N"],
                correct: 1,
                explanation: "A tree is a connected acyclic graph with N-1 edges."
            },
            {
                id: "tr-11",
                text: "Which data structure is used for Level Order Traversal?",
                options: ["Stack", "Queue", "Set", "Map"],
                correct: 1,
                explanation: "BFS (Level Order) uses a queue to track nodes at the current level."
            },
            {
                id: "tr-12",
                text: "A Full Binary Tree is one where:",
                options: ["Every node has 0 or 2 children", "Every level is completely filled", "Left child is always smaller", "Height is minimal"],
                correct: 0,
                explanation: "Also known as a proper binary tree, every node has either 0 or 2 children."
            },
            {
                id: "tr-13",
                text: "What is the maximum number of nodes at level 'L' in a binary tree?",
                options: ["2*L", "2^L", "L^2", "2^(L-1)"],
                correct: 1,
                explanation: "At level 0: 1 node (2^0). At level L: 2^L nodes."
            },
            {
                id: "tr-14",
                text: "Which of these is NOT a self-balancing BST?",
                options: ["AVL Tree", "Red-Black Tree", "Splay Tree", "Standard BST"],
                correct: 3,
                explanation: "Standard BST does not guarantee balance explicitly."
            },
            {
                id: "tr-15",
                text: "Huffman coding uses which type of tree?",
                options: ["Binary Tree", "Trie", "B-Tree", "AVL Tree"],
                correct: 0,
                explanation: "It constructs a binary tree based on character frequencies."
            },
            {
                id: "tr-16",
                text: "Threaded Binary Trees main advantage is:",
                options: ["Faster search", "Less memory", "Traversals without stack/recursion", "Self-balancing"],
                correct: 2,
                explanation: "Threads (pointers to predecessor/successor) allow traversal without extra space."
            },
            {
                id: "tr-17",
                text: "Deleting a leaf node in a BST takes:",
                options: ["O(1)", "O(log n)", "O(n)", "O(Height)"],
                correct: 3,
                explanation: "It depends on the height of the tree to find the node."
            },
            {
                id: "tr-18",
                text: "Postorder traversal is used for:",
                options: ["Deleting the tree", "Copying the tree", "Calculating height", "All of the above"],
                correct: 3,
                explanation: "Postorder visits children before the parent, useful for deletion and bottom-up calculations."
            },
            {
                id: "tr-19",
                text: "To construct a unique binary tree, which pair of traversals is sufficient?",
                options: ["Inorder and Preorder", "Preorder and Postorder", "Level Order and Postorder", "None"],
                correct: 0,
                explanation: "Inorder plus Preorder (or Postorder) uniquely identifies a binary tree."
            },
            {
                id: "tr-20",
                text: "The conceptual structure of a Directory (FileSystem) is:",
                options: ["Graph", "Tree", "Queue", "Stack"],
                correct: 1,
                explanation: "Hierarchical file systems are structured as trees."
            },
            {
                id: "tr-21",
                text: "Finding the Lowest Common Ancestor (LCA) in a BST takes:",
                options: ["O(n)", "O(Height)", "O(n^2)", "O(1)"],
                correct: 1,
                explanation: "You traverse down from the root based on values."
            },
            {
                id: "tr-22",
                text: "Mirroring a binary tree involves:",
                options: ["Swapping left and right children recursively", "Rotating left", "Rotating right", "Sorting"],
                correct: 0,
                explanation: "Recursively swap left and right pointers at every node."
            },
            {
                id: "tr-23",
                text: "Diameter of a tree is:",
                options: ["Length of longest path between any two nodes", "Height of tree", "Number of leaf nodes", "Sum of all nodes"],
                correct: 0,
                explanation: "The diameter (or width) is the number of edges on the longest path between two leaf nodes."
            },
            {
                id: "tr-24",
                text: "Serialization of a Binary Tree means:",
                options: ["Converting to a string/array representation", "Sorting", "Balancing", "Deleting"],
                correct: 0,
                explanation: "Storing the tree structure in a file or buffer to reconstruct it later."
            },
            {
                id: "tr-25",
                text: "A Perfect Binary Tree of height h has how many leaf nodes?",
                options: ["2^h", "2^(h-1)", "h", "2h"],
                correct: 0,
                explanation: "At height h (assuming root at 0), there are 2^h leaves."
            },
            {
                id: "tr-26",
                text: "Which tree structure is used in database indexing?",
                options: ["B-Tree", "Binary Tree", "Heap", "Stack"],
                correct: 0,
                explanation: "B-Trees (and B+ Trees) are optimized for disk storage and indexing."
            },
            {
                id: "tr-27",
                text: "Trie data structure is efficient for:",
                options: ["Dictionary/Prefix search", "Sorting numbers", "Shortest path", "MST"],
                correct: 0,
                explanation: "Tries (Prefix Trees) store strings character by character."
            },
            {
                id: "tr-28",
                text: "Evaluating an expression tree is typically done using:",
                options: ["Postorder Traversal", "Inorder Traversal", "Preorder Traversal", "BFS"],
                correct: 0,
                explanation: "Postorder corresponds to evaluating sub-expressions first (like RPN)."
            },
            {
                id: "tr-29",
                text: "Left-Skewed Binary Tree is equivalent to:",
                options: ["Linked List", "Array", "Stack", "Queue"],
                correct: 0,
                explanation: "Every node has only a left child, forming a linear chain."
            },
            {
                id: "tr-30",
                text: "Successor of a node in BST is:",
                options: ["Smallest node in right subtree", "Largest node in left subtree", "Parent", "Root"],
                correct: 0,
                explanation: "The in-order successor is the minimum value in the right subtree."
            },
            {
                id: "tr-31",
                text: "Checking if a binary tree is a BST requires checking:",
                options: ["Every node respects min/max constraints", "Root > Left", "Root < Right", "Height balance"],
                correct: 0,
                explanation: "Simply checking immediate children is insufficient; range constraints must propagate."
            },
            {
                id: "tr-32",
                text: "What traversal prints nodes level by level?",
                options: ["Level Order (BFS)", "Preorder", "Inorder", "Postorder"],
                correct: 0,
                explanation: "Standard Level Order Traversal."
            },
            {
                id: "tr-33",
                text: "Morris Traversal achieves inorder traversal with space complexity:",
                options: ["O(1)", "O(n)", "O(log n)", "O(h)"],
                correct: 0,
                explanation: "It modifies the tree temporarily (threading) to avoid using recursion or a stack."
            },
            {
                id: "tr-34",
                text: "Given Preorder and Inorder, the root is:",
                options: ["First element of Preorder", "Last element of Preorder", "First element of Inorder", "Middle of Inorder"],
                correct: 0,
                explanation: "Preorder always visits root first."
            },
            {
                id: "tr-35",
                text: "Complexity to insert in a Binary Heap?",
                options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
                correct: 0,
                explanation: "You insert at the end and bubble up."
            },
            {
                id: "tr-36",
                text: "Sum of leaf nodes algorithm typically uses:",
                options: ["DFS/Recursion", "Binary Search", "Sorting", "Greedy"],
                correct: 0,
                explanation: "Traverse the tree, if leaf, add value, else recurse."
            },
            {
                id: "tr-37",
                text: "What is an internal node?",
                options: ["Node with at least one child", "Leak node", "Root only", "Null node"],
                correct: 0,
                explanation: "Any node that is not a leaf is an internal node."
            },
            {
                id: "tr-38",
                text: "Segment Tree is used for:",
                options: ["Range queries", "String matching", "Sorting", "Pathfinding"],
                correct: 0,
                explanation: "Efficiently answers range sum/min/max queries."
            },
            {
                id: "tr-39",
                text: "Top View of a Binary Tree requires:",
                options: ["Horizontal distance tracking", "Height tracking", "Inorder traversal", "Postorder"],
                correct: 0,
                explanation: "Map horizontal distance to node values (first visited at that distance)."
            },
            {
                id: "tr-40",
                text: "ZigZag traversal uses:",
                options: ["Two stacks or Deque", "One queue", "Recursion only", "Array"],
                correct: 0,
                explanation: "You need to alternate direction level by level."
            }
        ]
    },
    {
        id: "searching",
        title: "Searching Algos",
        description: "Linear and Binary Search complexities.",
        icon: "🔍",
        questions: [
            {
                id: "sr-1",
                text: "What is the precondition for Binary Search?",
                options: ["Array must be sorted", "Array must be unsorted", "Array size must be even", "No precondition"],
                correct: 0,
                explanation: "Binary search relies on the sorted property to eliminate half the search space."
            },
            {
                id: "sr-2",
                text: "What is the worst-case time complexity of Linear Search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
                correct: 2,
                explanation: "In the worst case (element not present or at the end), it checks all n elements."
            },
            {
                id: "sr-3",
                text: "What is the best-case time complexity of Binary Search?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 0,
                explanation: "Best case is when the middle element is the target: O(1)."
            },
            {
                id: "sr-4",
                text: "Binary Search is applicable to which data structure?",
                options: ["Sorted Array", "Linked List (Standard)", "Stack", "Queue"],
                correct: 0,
                explanation: "Direct access is required for efficient Binary Search, making standard Linked Lists unsuitable (O(n) to find middle)."
            },
            {
                id: "sr-5",
                text: "Jump Search moves ahead by fixed steps. What is the optimal step size?",
                options: ["n/2", "sqrt(n)", "log n", "1"],
                correct: 1,
                explanation: "The optimal step size is the square root of n."
            },
            {
                id: "sr-6",
                text: "Interpolation Search works best on:",
                options: ["Randomly distributed data", "Uniformly distributed data", "Clustered data", "Any sorted data"],
                correct: 1,
                explanation: "It estimates the position based on the value distribution."
            },
            {
                id: "sr-7",
                text: "Ternary Search cuts the search space into:",
                options: ["2 parts", "3 parts", "4 parts", "Random parts"],
                correct: 1,
                explanation: "It divides the array into three parts using two midpoints."
            },
            {
                id: "sr-8",
                text: "Which search algorithm is preferred for unbounded arrays (infinite size)?",
                options: ["Binary Search", "Exponential Search", "Linear Search", "Jump Search"],
                correct: 1,
                explanation: "Exponential search finds the range where the element exists, then does binary search."
            },
            {
                id: "sr-9",
                text: "What is the average case complexity of Linear Search?",
                options: ["O(n)", "O(n/2)", "O(log n)", "O(1)"],
                correct: 0,
                explanation: "On average, you scan half the elements, which is still O(n)."
            },
            {
                id: "sr-10",
                text: "In Binary Search, if element is smaller than mid, we search in:",
                options: ["Right half", "Left half", "Current position", "Whole array"],
                correct: 1,
                explanation: "Since the array is sorted ascendingly, smaller elements are to the left."
            },
            {
                id: "sr-11",
                text: "The recurence relation for Binary Search is:",
                options: ["T(n) = T(n-1) + 1", "T(n) = 2T(n/2) + 1", "T(n) = T(n/2) + 1", "T(n) = T(n/3) + 1"],
                correct: 2,
                explanation: "Problem size reduces by half in each step."
            },
            {
                id: "sr-12",
                text: "Search in a Row-wise and Column-wise sorted matrix takes:",
                options: ["O(n^2)", "O(n + m)", "O(log nm)", "O(1)"],
                correct: 1,
                explanation: "You can start from the top-right corner and move left or down."
            },
            {
                id: "sr-13",
                text: "Complexity of searching in a Hash Table (Average case)?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 2,
                explanation: "Hash tables provide constant time access on average."
            },
            {
                id: "sr-14",
                text: "To find the first occurrence of a number in a sorted array with duplicates, you using Binary Search?",
                options: ["Stop at first match", "If match, move left", "If match, move right", "Use Linear Search"],
                correct: 1,
                explanation: "If you find the target, continue searching in the left half."
            },
            {
                id: "sr-15",
                text: "Linear Search can be used on:",
                options: ["Array", "Linked List", "Both", "None"],
                correct: 2,
                explanation: "It works on any iterable data structure."
            },
            {
                id: "sr-16",
                text: "What is the complexity of Depth First Search (DFS) on a graph/tree?",
                options: ["O(V)", "O(E)", "O(V + E)", "O(V*E)"],
                correct: 2,
                explanation: "DFS visits every vertex and edge once."
            },
            {
                id: "sr-17",
                text: "Breadth First Search uses which data structure?",
                options: ["Stack", "Queue", "Heap", "Tree"],
                correct: 1,
                explanation: "To process nodes in arrival order (FIFO)."
            },
            {
                id: "sr-18",
                text: "Binary Search is an example of:",
                options: ["Greedy Algo", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
                correct: 2,
                explanation: "It recursively divides the problem into smaller subproblems."
            },
            {
                id: "sr-19",
                text: "Searching in a Red-Black tree takes:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "Since it is a balanced BST, height is logarithmic."
            },
            {
                id: "sr-20",
                text: "Which searching algorithm requires the least comparisons on average for uniform data?",
                options: ["Binary Search", "Linear Search", "Interpolation Search", "Jump Search"],
                correct: 2,
                explanation: "Interpolation search can achieve O(log log n) on uniform data."
            },
            {
                id: "sr-21",
                text: "In exponential search, how many steps does finding the range take?",
                options: ["O(n)", "O(log i)", "O(1)", "O(i)"],
                correct: 1,
                explanation: "Where i is the position of the element."
            },
            {
                id: "sr-22",
                text: "Fibonacci Search divides the array using:",
                options: ["Midpoint", "Golden Ratio / Fibonacci numbers", "Random pivot", "Thirds"],
                correct: 1,
                explanation: "It uses Fibonacci numbers to determine split points."
            },
            {
                id: "sr-23",
                text: "If an array is rotated sorted, finding an element takes:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                correct: 1,
                explanation: "Modified binary search handles the rotation."
            },
            {
                id: "sr-24",
                text: "Searching for a pattern in a string is efficiently done by:",
                options: ["Linear Search", "KMP Algorithm", "Binary Search", "Bubble Sort"],
                correct: 1,
                explanation: "Knuth-Morris-Pratt avoids re-checking characters."
            },
            {
                id: "sr-25",
                text: "Rabin-Karp algorithm uses:",
                options: ["Hashing", "Sorting", "Stack", "Queue"],
                correct: 0,
                explanation: "It uses rolling hash values to compare substrings."
            },
            {
                id: "sr-26",
                text: "Searching in a Skip List is probabilistic:",
                options: ["O(n)", "O(log n)", "O(1)", "O(sqrt n)"],
                correct: 1,
                explanation: "With high probability, search complexity is logarithmic."
            },
            {
                id: "sr-27",
                text: "Given an array where difference between neighbors is 1, search for X can be optimized to:",
                options: ["O(n)", "O(n) but with jumps", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "You can jump by abs(current - target)."
            },
            {
                id: "sr-28",
                text: "Binary Search Tree worst case occurs when tree is:",
                options: ["Complete", "Balanced", "Skewed", "Perfect"],
                correct: 2,
                explanation: "It behaves like a linked list with O(n) search."
            },
            {
                id: "sr-29",
                text: "To count occurrences of a number in sorted array using Binary Search:",
                options: ["Find first and last occurrence", "Find one and scan neighbors", "Impossible", "Use Hash map"],
                correct: 0,
                explanation: "Difference between indices of last and first occurrence + 1."
            },
            {
                id: "sr-30",
                text: "Searching in a Singly Linked List is always:",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correct: 2,
                explanation: "Sequential access prevents binary search."
            },
            {
                id: "sr-31",
                text: "Ubiquitous Binary Search is a variant that:",
                options: ["Always returns index", "Always works on unsorted", "Uses lower_bound concept", "Is slower"],
                correct: 2,
                explanation: "It focuses on finding the first element >= target."
            },
            {
                id: "sr-32",
                text: "Complexity of searching in a B-Tree of order m with N keys?",
                options: ["O(log_m N)", "O(N)", "O(m log N)", "O(1)"],
                correct: 0,
                explanation: "Height is log base m of N."
            },
            {
                id: "sr-33",
                text: "Searching for a cycle in a Linked List uses:",
                options: ["Binary Search", "Two Pointer (Floyd's)", "Linear Search", "Sorting"],
                correct: 1,
                explanation: "Tortoise and Hare algorithm."
            },
            {
                id: "sr-34",
                text: "Sublist Search (checking if one list is inside another) takes:",
                options: ["O(N*M)", "O(N)", "O(M)", "O(log N)"],
                correct: 0,
                explanation: "Comparing each node of larger list with head of smaller list."
            },
            {
                id: "sr-35",
                text: "Find peak element in an array (neighbors are smaller) takes:",
                options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                correct: 1,
                explanation: "Binary search can identify a peak by checking slope."
            },
            {
                id: "sr-36",
                text: "Finding the majority element (appears > n/2 times) can be done in O(n) using:",
                options: ["Lineary Search", "Moore's Voting Algo", "Binary Search", "Sorting"],
                correct: 1,
                explanation: "Cancel out different elements to leave the majority."
            },
            {
                id: "sr-37",
                text: "Search a word in a 2D grid of characters (Word Search) uses:",
                options: ["DFS/Backtracking", "Binary Search", "Queue", "Heap"],
                correct: 0,
                explanation: "Explore all 8 directions recursively."
            },
            {
                id: "sr-38",
                text: "A* Search Algorithm is used for:",
                options: ["Sorting", "Pathfinding in graphs", "Database Query", "Compression"],
                correct: 1,
                explanation: "It uses heuristics to find the shortest path efficiently."
            },
            {
                id: "sr-39",
                text: "To search if a sum of two elements equals K in a sorted array:",
                options: ["Two Pointers", "Binary Search for complement", "Both", "None"],
                correct: 2,
                explanation: "Both two pointers (O(n)) and binary search (O(n log n)) work."
            },
            {
                id: "sr-40",
                text: "Bloom Filter is a probabilistic structure to check:",
                options: ["If element is definitely present", "If element is possibly present or definitely not", "Sorting order", "Range count"],
                correct: 1,
                explanation: "It can return false positives, but never false negatives."
            }
        ]
    },
    {
        id: "complexity",
        title: "Time Complexity",
        description: "Big O notation and code analysis.",
        icon: "⏳",
        questions: [
            {
                id: "tc-1",
                text: "What is the time complexity of the following code?\n<pre><code>for(i=0; i<N; i++) { \n  a = a + 5;\n}\nfor(j=0; j<M; j++) { \n  b = b + 10;\n}</code></pre>",
                options: ["O(N * M)", "O(N + M)", "O(N)", "O(M)"],
                correct: 1,
                explanation: "The loops are sequential, not nested. Total time is proportional to N + M."
            },
            {
                id: "tc-2",
                text: "What is the time complexity analysis?\n<pre><code>for(i=0; i<N; i++) {\n  for(j=N; j>i; j--) {\n     a = a + i + j;\n  }\n}</code></pre>",
                options: ["O(N)", "O(N log N)", "O(N^2)", "O(1)"],
                correct: 2,
                explanation: "This is a standard nested loop structure where the inner loop runs proportional to N, resulting in O(N^2)."
            },
            {
                id: "tc-3",
                text: "What is the time complexity?\n<pre><code>for(i=1; i<n; i=i*2) {\n  print(i);\n}</code></pre>",
                options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
                correct: 2,
                explanation: "The variable i doubles each time, so the loop runs log2(n) times."
            },
            {
                id: "tc-4",
                text: "Time complexity of Merge Sort is:",
                options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
                correct: 1,
                explanation: "Merge sort divides the array in half and merges, taking linearithmic time consistently."
            },
            {
                id: "tc-5",
                text: "Assuming P != NP, which problem complexity class is hardest?",
                options: ["P", "NP", "NP-Complete", "NP-Hard"],
                correct: 3,
                explanation: "NP-Hard problems are at least as hard as the hardest problems in NP."
            },
            {
                id: "tc-6",
                text: "Accessing an element in a Hash Table (Average case):",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 0,
                explanation: "Good hashing provides constant time access on average."
            },
            {
                id: "tc-7",
                text: "Adding an edge to an Adjacency Matrix representation of a graph:",
                options: ["O(V)", "O(E)", "O(1)", "O(V^2)"],
                correct: 2,
                explanation: "You simply update the cell at (u, v)."
            },
            {
                id: "tc-8",
                text: "What is the complexity of: <pre><code>function(n) { \n  if (n <= 1) return; \n  function(n-1); \n  function(n-1); \n}</code></pre>",
                options: ["O(n)", "O(2^n)", "O(n^2)", "O(log n)"],
                correct: 1,
                explanation: "Each call branches into two, creating a binary tree of calls with height n."
            },
            {
                id: "tc-9",
                text: "Worst-case complexity of Quick Sort:",
                options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
                correct: 1,
                explanation: "Occurs when the pivot is always the smallest or largest element."
            },
            {
                id: "tc-10",
                text: "Finding all subsets of a set of size N (Power Set):",
                options: ["O(n^2)", "O(2^n)", "O(n!)", "O(n)"],
                correct: 1,
                explanation: "There are 2^n possible subsets."
            },
            {
                id: "tc-11",
                text: "Amortized complexity of appending to a dynamic array:",
                options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "While resizing is O(n), it happens rarely, making the average operation O(1)."
            },
            {
                id: "tc-12",
                text: "Dijkstra's Algorithm with a Binary Heap:",
                options: ["O(E + V log V)", "O(E log V)", "O(V^2)", "O(E + V)"],
                correct: 1,
                explanation: "Extract min is O(log V) and decrease key (traversing edges) contributes to O(E log V)."
            },
            {
                id: "tc-13",
                text: "Kruskal's Algorithm for MST complexity:",
                options: ["O(E log E)", "O(E^2)", "O(V^2)", "O(E + V)"],
                correct: 0,
                explanation: "Dominated by sorting the edges."
            },
            {
                id: "tc-14",
                text: "Floyd-Warshall Algorithm complexity:",
                options: ["O(V^3)", "O(V^2)", "O(E log V)", "O(E + V)"],
                correct: 0,
                explanation: "Three nested loops iterating over vertices."
            },
            {
                id: "tc-15",
                text: "Complexity of: <pre><code>for(i=1; i<=n; i++) {\n for(j=1; j<=i; j=j*2) { ... } \n}</code></pre>",
                options: ["O(n^2)", "O(n)", "O(n log n)", "O(log n)"],
                correct: 2,
                explanation: "The inner loop runs log(i) times. Sum of log(i) for i=1 to n is log(n!) = O(n log n)."
            },
            {
                id: "tc-16",
                text: "Which complexity is faster?",
                options: ["O(n)", "O(log n)", "O(sqrt n)", "O(n log n)"],
                correct: 1,
                explanation: "Logarithmic growth is much slower than square root or linear."
            },
            {
                id: "tc-17",
                text: "Complexity of generating all permutations of string length N:",
                options: ["O(n)", "O(2^n)", "O(n!)", "O(n^n)"],
                correct: 2,
                explanation: "There are n! permutations."
            },
            {
                id: "tc-18",
                text: "Bellman-Ford Algorithm complexity:",
                options: ["O(VE)", "O(V^2)", "O(E log V)", "O(V + E)"],
                correct: 0,
                explanation: "Relaxes all E edges V-1 times."
            },
            {
                id: "tc-19",
                text: "Build a Heap from an array of N elements:",
                options: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
                correct: 1,
                explanation: "Using the linear time build-heap algorithm."
            },
            {
                id: "tc-20",
                text: "Space complexity of DFS (recursive) implementation?",
                options: ["O(1)", "O(V)", "O(E)", "O(log V)"],
                correct: 1,
                explanation: "Stack depth can go up to V in the worst case."
            },
            {
                id: "tc-21",
                text: "Deleting from a Singly Linked List given a pointer to the node (not tail):",
                options: ["O(n)", "O(1)", "O(log n)", "O(V)"],
                correct: 1,
                explanation: "Copy next node's data and delete next node."
            },
            {
                id: "tc-22",
                text: "Radix Sort time complexity:",
                options: ["O(n^2)", "O(nk)", "O(n log n)", "O(k log n)"],
                correct: 1,
                explanation: "O(d * (n + b)) where d is digits (k), n is elements, b is base."
            },
            {
                id: "tc-23",
                text: "Checking if a number is prime (naive trial division up to sqrt(n)):",
                options: ["O(n)", "O(sqrt n)", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "You only need to check divisors up to the square root."
            },
            {
                id: "tc-24",
                text: "Euclidean algorithm for GCD(a, b):",
                options: ["O(log(min(a,b)))", "O(a+b)", "O(min(a,b))", "O(1)"],
                correct: 0,
                explanation: "It is logarithmic in the size of the smaller number."
            },
            {
                id: "tc-25",
                text: "Strassen's Matrix Multiplication complexity:",
                options: ["O(n^3)", "O(n^2.81)", "O(n^2)", "O(n log n)"],
                correct: 1,
                explanation: "Better than the standard O(n^3) algorithm."
            },
            {
                id: "tc-26",
                text: "Deleting min from a Fibonacci Heap:",
                options: ["O(1)", "O(log n)", "O(n)", "O(1) amortized"],
                correct: 1,
                explanation: "Amortized cost is O(log n)."
            },
            {
                id: "tc-27",
                text: "Searching in a 2D sorted matrix (stepwise):",
                options: ["O(Rows * Cols)", "O(Rows + Cols)", "O(log(Rows * Cols))", "O(1)"],
                correct: 1,
                explanation: "Start from top-right, move left or down."
            },
            {
                id: "tc-28",
                text: "Complexity of Sieve of Eratosthenes up to N:",
                options: ["O(N)", "O(N log N)", "O(N log log N)", "O(N^2)"],
                correct: 2,
                explanation: "It is nearly linear, specifically N log log N."
            },
            {
                id: "tc-29",
                text: "What is the worst-case time for Insert in a Red-Black Tree?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                correct: 1,
                explanation: "Self-balancing ensures logarithmic height."
            },
            {
                id: "tc-30",
                text: "Finding the median of an unsorted array using QuickSelect:",
                options: ["O(n log n)", "O(n) average", "O(1)", "O(n^2) always"],
                correct: 1,
                explanation: "Average case is linear, though worst case is O(n^2)."
            },
            {
                id: "tc-31",
                text: "Union-Find with Path Compression and Union by Rank:",
                options: ["O(log n)", "O(1)", "O(alpha(n))", "O(n)"],
                correct: 2,
                explanation: "Inverse Ackermann function, which is nearly constant."
            },
            {
                id: "tc-32",
                text: "Complexity of calculating Nth Fibonacci number using DP (Memoization):",
                options: ["O(2^n)", "O(n)", "O(log n)", "O(1)"],
                correct: 1,
                explanation: "You compute each state once."
            },
            {
                id: "tc-33",
                text: "Master Theorem helps solve:",
                options: ["Graph problems", "Greedy problems", "Recurrence relations", "Sorting"],
                correct: 2,
                explanation: "Used for analyzing divide-and-conquer recurrences."
            },
            {
                id: "tc-34",
                text: "Space complexity of Merge Sort (arrays):",
                options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                correct: 1,
                explanation: "Requires O(n) auxiliary space for merging."
            },
            {
                id: "tc-35",
                text: "Complexity of reversing a string of length N:",
                options: ["O(1)", "O(N)", "O(N^2)", "O(log N)"],
                correct: 1,
                explanation: "Iterate through half the string."
            },
            {
                id: "tc-36",
                text: "Best Algorithm for Topological Sort:",
                options: ["O(V+E)", "O(V*E)", "O(V^2)", "O(E log V)"],
                correct: 0,
                explanation: "DFS or Kahn's algorithm (BFS) are linear in graph size."
            },
            {
                id: "tc-37",
                text: "Sliding Window Maximum (Deque method):",
                options: ["O(n)", "O(nk)", "O(n log k)", "O(n log n)"],
                correct: 0,
                explanation: "Each element is added and removed at most once."
            },
            {
                id: "tc-38",
                text: "Convex Hull (Graham Scan):",
                options: ["O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
                correct: 1,
                explanation: "Dominated by sorting points by angle."
            },
            {
                id: "tc-39",
                text: "Traveling Salesperson Problem (Dynamic Programming):",
                options: ["O(n!)", "O(n^2 * 2^n)", "O(n^2)", "O(2^n)"],
                correct: 1,
                explanation: "Uses bitmask DP."
            },
            {
                id: "tc-40",
                text: "Complexity of `git status` (conceptually):",
                options: ["O(1)", "O(Number of files)", "O(Number of commits)", "O(Size of repo)"],
                correct: 1,
                explanation: "It must check the status of files in the working directory."
            }
        ]
    }
];
