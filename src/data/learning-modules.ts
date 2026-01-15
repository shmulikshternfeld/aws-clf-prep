export type ContentBlock =
    | { type: 'html'; content: string }
    | { type: 'quiz'; id: string; question: string; options: string[]; correctIndex: number; explanation: string }
    | { type: 'alert'; title: string; content: string; style: 'info' | 'warning' | 'tip' };

export interface LearningModule {
    id: string;
    title: string;
    summary: string;
    content?: string; // Legacy support (keep for existing modules mostly)
    blocks?: ContentBlock[]; // New interactive structure
    keyPoints: string[];
}

export interface LearningDomain {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name
    color: string;
    modules: LearningModule[];
}

export const learningDomains: LearningDomain[] = [
    {
        id: 'cloud-concepts',
        title: 'מושגי ענן (Cloud Concepts)',
        description: 'הבנת היסודות של מחשוב ענן, היתרונות של AWS, אסטרטגיות הגירה ומודל CAF.',
        icon: 'Cloud',
        color: 'bg-blue-50 text-blue-600 border-blue-200',
        modules: [
            {
                id: 'what-is-cloud',
                title: 'מהו מחשוב ענן?',
                summary: 'הגדרה, יתרונות מרכזיים ומודלי פריסה.',
                content: `
                    <div class="space-y-6">
                        <div class="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                            <p class="text-gray-700 leading-relaxed">
                                מחשוב ענן הוא אספקה לפי דרישה (On-demand) של משאבי IT דרך האינטרנט, עם תמחור לפי שימוש (Pay-as-you-go).
                                במקום לנהל מרכזי נתונים פיזיים, אתם שוכרים גישה לשירותים טכנולוגיים כמו כוח מחשוב, אחסון ומסדי נתונים.
                            </p>
                        </div>

                        <div>
                            <h4 class="font-bold text-lg mb-3 flex items-center gap-2">
                                <span class="bg-blue-100 p-1 rounded">🚀</span> יתרונות מרכזיים
                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="bg-blue-50 p-3 rounded border border-blue-100">
                                    <strong class="block text-blue-900 mb-1">Trade CAPEX for OPEX</strong>
                                    <span class="text-sm text-blue-800">החלפת הוצאות הוניות (חומרה) בהוצאות תפעוליות משתנות. משלמים רק על מה שצורכים.</span>
                                </div>
                                <div class="bg-blue-50 p-3 rounded border border-blue-100">
                                    <strong class="block text-blue-900 mb-1">Economies of Scale</strong>
                                    <span class="text-sm text-blue-800">יתרון לגודל - AWS קונה בזול ומגלגלת את החיסכון אליכם.</span>
                                </div>
                                <div class="bg-blue-50 p-3 rounded border border-blue-100">
                                    <strong class="block text-blue-900 mb-1">Stop Guessing Capacity</strong>
                                    <span class="text-sm text-blue-800">גמישות (Elasticity) - המערכת גדלה וקטנה אוטומטית לפי הצורך.</span>
                                </div>
                                <div class="bg-blue-50 p-3 rounded border border-blue-100">
                                    <strong class="block text-blue-900 mb-1">Speed & Agility</strong>
                                    <span class="text-sm text-blue-800">חדשנות מהירה - משאבים זמינים תוך דקות במקום שבועות.</span>
                                </div>
                            </div>
                        </div>

                        <div>
                             <h4 class="font-bold text-lg mb-3">פריסה גלובלית (Global Infrastructure)</h4>
                             <p class="text-gray-700 mb-2">AWS פרוסה ברחבי העולם באזורים (Regions) המורכבים מ-Availability Zones.</p>
                             <ul class="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded bg-opacity-50">
                                <li class="flex items-start gap-2">
                                    <span class="font-bold min-w-[120px]">Region:</span>
                                    <span>מיקום פיזי גיאוגרפי (למשל: us-east-1). מכיל לפחות 2 AZs.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="font-bold min-w-[120px]">Availability Zone:</span>
                                    <span>מרכז נתונים אחד או יותר (Data Center) עם חשמל וקישוריות נפרדים. מספק יתירות (High Availability).</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="font-bold min-w-[120px]">Edge Location:</span>
                                    <span>נקודות קצה להפצת תוכן (CloudFront) במהירות למשתמשים.</span>
                                </li>
                             </ul>
                        </div>
                    </div>
                `,
                keyPoints: [
                    "On-demand delivery & Pay-as-you-go",
                    "CAPEX (Trade for) OPEX",
                    "Massive Economies of Scale",
                    "Region vs AZ vs Edge Location"
                ]
            },
            {
                id: 'cloud-types',
                title: 'מודלי שירות ופריסה',
                summary: 'IaaS, PaaS, SaaS וההבדלים בין ענן ציבורי, פרטי והיברידי.',
                content: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-lg mb-4 text-purple-700 border-b border-purple-100 pb-2">מודלים של שירות (Service Models)</h4>
                            <div class="grid gap-4">
                                <div class="relative pl-4 border-r-4 border-orange-400 bg-orange-50 p-3 rounded-r">
                                    <strong class="text-orange-900 block text-lg">IaaS (Infrastructure as a Service)</strong>
                                    <p class="text-sm text-gray-700 mt-1">שליטה מקסימלית. אתם מנהלים את מערכת ההפעלה, התיקונים והאפליקציה. AWS נותנת ברזלים ווירטואליזציה.</p>
                                    <div class="mt-2 text-xs font-mono bg-white inline-block px-2 py-1 rounded border border-orange-200 text-orange-800">דוגמה: Amazon EC2</div>
                                </div>
                                <div class="relative pl-4 border-r-4 border-blue-400 bg-blue-50 p-3 rounded-r">
                                    <strong class="text-blue-900 block text-lg">PaaS (Platform as a Service)</strong>
                                    <p class="text-sm text-gray-700 mt-1">פחות ניהול. AWS מנהלת את החומרה ומערכת ההפעלה. אתם מתמקדים רק בקוד.</p>
                                    <div class="mt-2 text-xs font-mono bg-white inline-block px-2 py-1 rounded border border-blue-200 text-blue-800">דוגמה: Elastic Beanstalk, RDS</div>
                                </div>
                                <div class="relative pl-4 border-r-4 border-green-400 bg-green-50 p-3 rounded-r">
                                    <strong class="text-green-900 block text-lg">SaaS (Software as a Service)</strong>
                                    <p class="text-sm text-gray-700 mt-1">מוצר מוגמר. אין התעסקות בתשתית בכלל. רק שימוש.</p>
                                    <div class="mt-2 text-xs font-mono bg-white inline-block px-2 py-1 rounded border border-green-200 text-green-800">דוגמה: Gmail, Dropbox, AWS Connect</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-bold text-lg mb-3 text-gray-800">מודלים של פריסה (Deployment)</h4>
                            <div class="flex flex-col sm:flex-row gap-3 text-sm">
                                <div class="flex-1 bg-gray-100 p-3 rounded text-center">
                                    <div class="font-bold mb-1">Public Cloud</div>
                                    <div class="text-gray-600">תשתית משותפת (Multi-tenant) בבעלות AWS.</div>
                                </div>
                                <div class="flex-1 bg-gray-100 p-3 rounded text-center">
                                    <div class="font-bold mb-1">Private Cloud</div>
                                    <div class="text-gray-600">תשתית ייעודית לארגון אחד (On-Prem / Dedicated).</div>
                                </div>
                                <div class="flex-1 bg-gray-100 p-3 rounded text-center">
                                    <div class="font-bold mb-1">Hybrid Cloud</div>
                                    <div class="text-gray-600">חיבור בין ענן פרטי לציבורי (AWS Direct Connect / VPN).</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                keyPoints: [
                    "IaaS = Administer OS & Apps (EC2)",
                    "PaaS = Build & Deploy (Elastic Beanstalk)",
                    "SaaS = Consume Software (Gmail)",
                    "Hybrid = Cloud + On-Prem integration"
                ]
            },
            {
                id: 'migration-caf',
                title: 'הגירה לענן (Migration & CAF)',
                summary: 'Cloud Adoption Framework (CAF) ושש אסטרטגיות ההגירה (6Rs).',
                content: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-lg mb-3 text-indigo-700">AWS Cloud Adoption Framework (CAF)</h4>
                             <p class="text-sm text-gray-700 mb-3">מסגרת עבודה שמסייעת לארגונים לבנות תוכנית יעילה למעבר לענן, מחולקת ל-6 פרספקטיבות:</p>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <div class="bg-indigo-50 p-2 rounded"><span class="font-bold">Business:</span> ערך עסקי ו-ROI.</div>
                                <div class="bg-indigo-50 p-2 rounded"><span class="font-bold">People:</span> הכשרות ושינוי ארגוני.</div>
                                <div class="bg-indigo-50 p-2 rounded"><span class="font-bold">Governance:</span> ניהול סיכונים ותעדופים.</div>
                                <div class="bg-indigo-50 p-2 rounded"><span class="font-bold">Platform:</span> ארכיטקטורה וטכנולוגיה.</div>
                                <div class="bg-indigo-50 p-2 rounded"><span class="font-bold">Security:</span> אבטחת מידע ותאימות.</div>
                                <div class="bg-indigo-50 p-2 rounded"><span class="font-bold">Operations:</span> תפעול שוטף ובריאות המערכת.</div>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-bold text-lg mb-3 text-emerald-700">6 אסטרטגיות הגירה (The 6 Rs)</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="bg-white border-l-4 border-emerald-500 shadow-sm p-2 rounded-r">
                                    <strong>Rehosting (Lift & Shift):</strong> העברה "כמו שזה" לענן. הכי מהיר.
                                </li>
                                <li class="bg-white border-l-4 border-emerald-500 shadow-sm p-2 rounded-r">
                                    <strong>Replatforming (Lift, Tinker & Shift):</strong> אופטימיזציות קלות (למשל, מעבר ל-RDS).
                                </li>
                                <li class="bg-white border-l-4 border-emerald-500 shadow-sm p-2 rounded-r">
                                    <strong>Refactoring (Re-architecting):</strong> שכתוב ל-Cloud Native (Serverless). הכי יעיל.
                                </li>
                                <li class="item opacity-75"><strong>Repurchasing:</strong> מעבר ל-SaaS.</li>
                                <li class="item opacity-75"><strong>Retaining:</strong> לא להעביר עדיין.</li>
                                <li class="item opacity-75"><strong>Retiring:</strong> כיבוי.</li>
                            </ul>
                        </div>
                    </div>
                `,
                keyPoints: [
                    "CAF = Business, People, Governance + Platform, Security, Operations",
                    "Rehosting = Lift & Shift",
                    "Refactoring = Full re-write (Serverless)",
                ]
            }
        ]
    },
    {
        id: 'ai-analytics',
        title: 'AI, ML & Analytics (New)',
        description: 'בינה מלאכותית, למידת מכונה וניתוח נתונים (נושא מרכזי בבחינה החדשה).',
        icon: 'Brain',
        color: 'bg-purple-600 text-white border-purple-500 shadow-purple-200',
        modules: [
            {
                id: 'ai-ml-services',
                title: 'שירותי AI ו-Machine Learning',
                summary: 'SageMaker, Bedrock ושירותי AI מוכנים (Pre-trained).',
                blocks: [
                    {
                        type: 'alert',
                        title: 'חשוב למבחן (CLF-C02)',
                        content: 'נושא זה קיבל משקל משמעותי יותר בגרסה החדשה של המבחן (C02). חשוב להכיר את ההבדל בין בניה עצמית (SageMaker) לשימוש במודלים מוכנים.',
                        style: 'warning'
                    },
                    {
                        type: 'html',
                        content: `
                        <div class="space-y-4">
                            <h4 class="font-bold text-purple-900">בניית מודלים (ML Platform)</h4>
                            <div class="bg-white p-3 rounded border-l-4 border-purple-500 shadow-sm">
                                <strong class="block text-lg">Amazon SageMaker</strong>
                                <p class="text-sm text-gray-600">שירות מנוהל מלא שמאפשר למדעני נתונים ומפתחים <strong>לבנות, לאמן ולפרוס</strong> מודלים של למידת מכונה במהירות.</p>
                            </div>

                            <h4 class="font-bold text-indigo-900 mt-4">Generative AI</h4>
                             <div class="bg-white p-3 rounded border-l-4 border-indigo-500 shadow-sm">
                                <strong class="block text-lg">Amazon Bedrock</strong>
                                <p class="text-sm text-gray-600">הדרך הקלה ביותר לבנות יישומי <strong>Generative AI</strong> עם מודלים בסיסיים (Foundation Models) מספקים מובילים (AI21, Anthropic, Meta) באמצעות API.</p>
                            </div>

                            <h4 class="font-bold text-blue-900 mt-4">שירותי AI מוכנים (AI Services)</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Lex:</strong> בניית צ'אטבוטים (אותה טכנולוגיה של Alexa).</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Polly:</strong> הופכת טקסט לדיבור (Text-to-Speech).</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Transcribe:</strong> הופכת דיבור לטקסט (Speech-to-Text).</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Rekognition:</strong> ניתוח תמונות ווידאו (זיהוי פנים, חפצים).</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Translate:</strong> תרגום שפות טבעי.</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Comprehend:</strong> הבנת שפה טבעית (NLP) ורגשות בטקסט.</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Kendra:</strong> מנוע חיפוש חכם לארגונים.</div>
                                <div class="bg-blue-50 p-2 rounded"><strong>Amazon Forecast:</strong> חיזוי (Forecasting) מדויק (למשל, ביקוש למוצרים).</div>
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-ai-1',
                        question: 'חברה רוצה להוסיף יכולת הקראת טקסט (Text-to-Speech) לאפליקציה שלה. באיזה שירות עליה להשתמש?',
                        options: [
                            'Amazon Lex',
                            'Amazon Polly',
                            'Amazon Transcribe',
                            'Amazon SageMaker'
                        ],
                        correctIndex: 1,
                        explanation: 'Amazon Polly הוא השירות שהופך טקסט לדיבור. Lex משמש לצ\'אטבוטים, Transcribe לדיבור-לטקסט, ו-SageMaker לבניית מודלים מאפס.'
                    }
                ],
                keyPoints: [
                    "SageMaker = Build, Train, Deploy Custom Models",
                    "Bedrock = Generative AI via API",
                    "Rekognition = Image/Video Analysis",
                    "Polly = Text to Speech",
                    "Lex = Chatbots"
                ]
            },
            {
                id: 'data-analytics',
                title: 'Data Analytics',
                summary: 'Athena, Glue, Kinesis, EMR ו-QuickSight.',
                blocks: [
                    {
                        type: 'html',
                        content: `
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 gap-4">
                                <div class="border border-blue-200 rounded p-3 bg-blue-50">
                                    <strong class="text-blue-900 block">Amazon Athena</strong>
                                    <span class="text-sm text-blue-800">שירות שאילתות אינטראקטיבי המאפשר לנתח נתונים ישירות ב-<strong>S3</strong> באמצעות <strong>SQL</strong> רגיל. Serverless לחלוטין. משלמים רק על הנתונים שנסרקו.</span>
                                </div>
                                <div class="border border-purple-200 rounded p-3 bg-purple-50">
                                    <strong class="text-purple-900 block">AWS Glue</strong>
                                    <span class="text-sm text-purple-800">שירות <strong>ETL</strong> (Extract, Transform, Load) מנוהל. מכין וטוען את המידע לניתוח. כולל Data Catalog.</span>
                                </div>
                                <div class="border border-orange-200 rounded p-3 bg-orange-50">
                                    <strong class="text-orange-900 block">Amazon Kinesis</strong>
                                    <span class="text-sm text-orange-800">איסוף ועיבוד נתונים <strong>בזמן אמת</strong> (Streaming Data) כגון לוגים, IoT, קליקים באתר.</span>
                                </div>
                                <div class="border border-teal-200 rounded p-3 bg-teal-50">
                                    <strong class="text-teal-900 block">Amazon EMR (Elastic MapReduce)</strong>
                                    <span class="text-sm text-teal-800">פלטפורמת <strong>Big Data</strong> בענן. הרצת מסגרות כמו Apache Spark, Hadoop, Hive לעיבוד כמויות עצומות של מידע.</span>
                                </div>
                                <div class="border border-pink-200 rounded p-3 bg-pink-50">
                                    <strong class="text-pink-900 block">Amazon QuickSight</strong>
                                    <span class="text-sm text-pink-800">כלי <strong>BI</strong> (Business Intelligence) מהיר ומבוסס ענן. מאפשר ליצור דשבורדים וויזואליזציות יפות.</span>
                                </div>
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-analytics-1',
                        question: 'איזה שירות מאפשר להריץ שאילתות SQL ישירות על קבצים המאוחסנים ב-S3 ללא צורך בניהול שרתים?',
                        options: [
                            'Amazon Redshift',
                            'Amazon Athena',
                            'AWS Glue',
                            'Amazon RDS'
                        ],
                        correctIndex: 1,
                        explanation: 'Athena הוא שירות Serverless המיועד בדיוק לזה - תשאול דאטה ב-S3 באמצעות SQL. Redshift דורש הקמת Cluster (Warehouse).'
                    }
                ],
                keyPoints: [
                    "Athena = SQL on S3 (Serverless)",
                    "Glue = ETL Service",
                    "Kinesis = Real-time Streaming",
                    "QuickSight = BI & Visualization"
                ]
            }
        ]
    },
    {
        id: 'security',
        title: 'אבטחה ותאימות (Security)',
        description: 'מודל האחריות המשותפת, IAM, הגנת DDoS והצפנה.',
        icon: 'ShieldCheck',
        color: 'bg-red-50 text-red-600 border-red-200',
        modules: [
            {
                id: 'shared-responsibility',
                title: 'מודל האחריות המשותפת',
                summary: 'Security OF the Cloud vs Security IN the Cloud.',
                blocks: [
                    {
                        type: 'html',
                        content: `
                        <div class="space-y-6">
                            <div class="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                                <h4 class="text-center font-bold text-xl mb-4 border-b border-gray-600 pb-2">Shared Responsibility Model</h4>
                                <div class="space-y-4">
                                    <div class="bg-orange-600 p-3 rounded text-center">
                                        <div class="font-bold text-lg">CUSTOMER (Security IN the Cloud)</div>
                                        <div class="text-xs opacity-90 mt-1">Data, Encryption, IAM, OS Patching, Firewall Config</div>
                                    </div>
                                    <div class="bg-blue-600 p-3 rounded text-center">
                                        <div class="font-bold text-lg">AWS (Security OF the Cloud)</div>
                                        <div class="text-xs opacity-90 mt-1">Physical Hardware, Global Infrastructure, Managed Services Logic</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-shared-1',
                        question: 'מי אחראי על עדכון מערכת ההפעלה (Patching) בשרת EC2?',
                        options: [
                            'AWS בלבד',
                            'הלקוח בלבד',
                            'AWS והלקוח יחד',
                            'אף אחד'
                        ],
                        correctIndex: 1,
                        explanation: 'EC2 הוא שירות IaaS. הלקוח שולט במערכת ההפעלה באופן מלא ולכן אחראי לעדכן אותה. (בשימוש ב-RDS, לעומת זאת, AWS אחראית).'
                    }
                ],
                keyPoints: [
                    "AWS = Physical Hardware & Global Infra",
                    "Customer = Data protection, IAM, Configuration"
                ]
            },
            {
                id: 'iam-auth',
                title: 'ניהול זהויות (IAM)',
                summary: 'Users, Groups, Roles, Policies.',
                content: `
                    <div class="space-y-5">
                        <p class="text-gray-700"><strong>IAM</strong> הוא שירות גלובלי וחינמי לניהול גישה.</p>
                        <div class="grid grid-cols-1 gap-3">
                            <div class="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-gray-200">
                                <span class="bg-gray-100 p-2 rounded font-mono font-bold text-blue-600">User</span>
                                <span class="text-sm text-gray-600">זהות קבועה (Long-term). אדם או אפליקציה.</span>
                            </div>
                            <div class="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-gray-200">
                                <span class="bg-gray-100 p-2 rounded font-mono font-bold text-blue-600">Role</span>
                                <span class="text-sm text-gray-600">זהות זמנית (Temporary credentials). מיועד לשירותי AWS (למשל EC2 שניגש ל-S3).</span>
                            </div>
                        </div>
                         <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-4">
                            <h5 class="font-bold text-yellow-800 text-sm">Best Practice: Least Privilege</h5>
                            <p class="text-xs text-yellow-900">לתת תמיד רק את ההרשאות המינימליות הנדרשות.</p>
                        </div>
                    </div>
                `,
                keyPoints: [
                    "IAM is Global & Free",
                    "Root User = MFA mandatory, don't use",
                    "Roles = Temporary Access"
                ]
            },
            {
                id: 'advanced-security',
                title: 'שירותי אבטחה מתקדמים',
                summary: 'WAF, Shield, Inspector, GuardDuty, KMS.',
                blocks: [
                    {
                        type: 'html',
                        content: `
                        <div class="grid grid-cols-1 gap-4">
                            <div class="border border-indigo-100 rounded-lg overflow-hidden">
                                <div class="bg-indigo-50 px-3 py-2 font-bold text-indigo-800 text-sm">Network Protection</div>
                                <div class="p-3 bg-white text-sm space-y-2">
                                    <div class="flex justify-between"><span class="font-bold">AWS WAF</span><span class="text-gray-500 text-right w-2/3">חומת אש לאפליקציות (SQL Injection, XSS).</span></div>
                                    <div class="flex justify-between border-t pt-2"><span class="font-bold">AWS Shield</span><span class="text-gray-500 text-right w-2/3">הגנה מפני התקפות DDoS.</span></div>
                                </div>
                            </div>
                            <div class="border border-green-100 rounded-lg overflow-hidden">
                                <div class="bg-green-50 px-3 py-2 font-bold text-green-800 text-sm">Detection</div>
                                <div class="p-3 bg-white text-sm space-y-2">
                                    <div class="flex justify-between"><span class="font-bold">Inspector</span><span class="text-gray-500 text-right w-2/3">סורק חולשות (Vulnerabilities) ב-EC2.</span></div>
                                    <div class="flex justify-between border-t pt-2"><span class="font-bold">GuardDuty</span><span class="text-gray-500 text-right w-2/3">זיהוי איומים חכם (Threat Detection) בעזרת לוגים.</span></div>
                                </div>
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-sec-1',
                        question: 'איזה שירות יתריע לך אם שרת ה-EC2 שלך נגוע בנוזקה (Malware) או מתקשר עם כתובות IP זדוניות?',
                        options: ['AWS WAF', 'Amazon GuardDuty', 'AWS Shield', 'Amazon Macie'],
                        correctIndex: 1,
                        explanation: 'GuardDuty משתמש בזיהוי איומים חכם (ML) על גבי לוגים כדי לזהות פעילות חשודה. WAF מגן על אפליקציות ווב, Shield מפני DDoS, ו-Macie מגן על מידע רגיש ב-S3.'
                    }
                ],
                keyPoints: ["WAF = Web Firewall", "Shield = DDoS", "GuardDuty = Intelligent Threat Detection"]
            }
        ]
    },
    {
        id: 'developer-tools',
        title: 'Developer Tools & DevOps (New)',
        description: 'כלי פיתוח, CI/CD, ניהול תצורה.',
        icon: 'Terminal',
        color: 'bg-zinc-50 text-zinc-700 border-zinc-300',
        modules: [
            {
                id: 'cicd',
                title: 'CI/CD Pipelines',
                summary: 'CodeCommit, CodeBuild, CodeDeploy, CodePipeline.',
                blocks: [
                    {
                        type: 'html',
                        content: `
                        <div class="space-y-4">
                            <p class="text-sm">סט הכלים של AWS לניהול מחזור חיי פיתוח התוכנה:</p>
                            <ul class="space-y-3 text-sm">
                                <li class="flex items-center gap-2 border p-2 rounded relative overflow-hidden">
                                    <div class="absolute inset-y-0 left-0 w-1 bg-green-500"></div>
                                    <strong>AWS CodeCommit:</strong> ניהול קוד מקור (כמו GitHub), מאובטח ופרטי.
                                </li>
                                <li class="flex items-center gap-2 border p-2 rounded relative overflow-hidden">
                                    <div class="absolute inset-y-0 left-0 w-1 bg-blue-500"></div>
                                    <strong>AWS CodeBuild:</strong> בניית הקוד (Compiling), הרצת טסטים ויצירת חבילות תוכנה.
                                </li>
                                <li class="flex items-center gap-2 border p-2 rounded relative overflow-hidden">
                                    <div class="absolute inset-y-0 left-0 w-1 bg-orange-500"></div>
                                    <strong>AWS CodeDeploy:</strong> אוטומציה של פריסת הקוד לשרתים (EC2, Lambda).
                                </li>
                                <li class="flex items-center gap-2 border p-2 rounded relative overflow-hidden">
                                    <div class="absolute inset-y-0 left-0 w-1 bg-purple-500"></div>
                                    <strong>AWS CodePipeline:</strong> המנצח על התזמורת. מחבר את כל השלבים ל-Pipeline אוטומטי.
                                </li>
                            </ul>
                             <div class="bg-gray-100 p-2 rounded text-xs mt-2">
                                <strong>AWS X-Ray:</strong> כלי לניפוי באגים (Debugging) באפליקציות מבוזרות. עוזר להבין איפה יש איטיות או שגיאות ב-Microservices.
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-dev-1',
                        question: 'איזה שירות משמש לאוטומציה של תהליך הבנייה (Build), הרצת בדיקות ויצירת Artifacts?',
                        options: ['AWS CodeCommit', 'AWS CodeBuild', 'AWS CodeDeploy', 'AWS CloudFormation'],
                        correctIndex: 1,
                        explanation: 'CodeBuild הוא שירות ה-Build המנוהל. CodeCommit הוא לקוד מקור, CodeDeploy לפריסה, ו-CloudFormation לתשתית.'
                    }
                ],
                keyPoints: ["CodeCommit = Source Control", "CodeBuild = Compile & Test", "CodePipeline = Orchestration", "X-Ray = Distributed Tracing"]
            }
        ]
    },
    {
        id: 'technology',
        title: 'טכנולוגיה ושירותי ליבה',
        description: 'Compute, Storage, Network, Databases.',
        icon: 'Server',
        color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
        modules: [
            {
                id: 'compute',
                title: 'שירותי מחשוב (Compute)',
                summary: 'EC2, Lambda, ECS/EKS.',
                content: `
                    <div class="space-y-4">
                        <div class="flex items-start gap-4 p-3 bg-white rounded shadow-sm border-l-4 border-orange-500">
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">Amazon EC2</h4>
                                <p class="text-sm text-gray-600 mt-1">שרתים וירטואליים. גמיש לחלוטין. דורש ניהול (Updates). השתמשו ב-Spot לחיסכון!</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-3 bg-white rounded shadow-sm border-l-4 border-yellow-500">
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">AWS Lambda</h4>
                                <p class="text-sm text-gray-600 mt-1">Serverless! הריצו קוד ללא שרתים. תשלום רק לפי זמן ריצה. אירועים קצרים (עד 15 דק').</p>
                            </div>
                        </div>
                    </div>
                `,
                keyPoints: ["EC2 = IaaS", "Lambda = Serverless", "Fargate = Serverless Containers"]
            },
            {
                id: 'storage',
                title: 'שירותי אחסון (Storage) & Snow Family',
                summary: 'S3, EBS, EFS, Storage Gateway, Snow Family.',
                blocks: [
                    {
                        type: 'html',
                        content: `
                        <div class="space-y-4">
                            <h4 class="font-bold text-gray-800 border-b pb-1">Core Storage Services</h4>
                            <div class="grid grid-cols-1 gap-2 text-sm">
                                <div class="bg-green-50 p-2 border-l-2 border-green-500"><strong>S3:</strong> Objects. טווח אינסופי. אתרים סטטיים.</div>
                                <div class="bg-gray-50 p-2 border-l-2 border-gray-500"><strong>EBS:</strong> Block. דיסק ל-EC2. ביצועים.</div>
                                <div class="bg-blue-50 p-2 border-l-2 border-blue-500"><strong>EFS:</strong> File. שיתוף קבצים לינוקס.</div>
                            </div>
                            
                            <h4 class="font-bold text-gray-800 border-b pb-1 mt-4">Data Migration (Snow Family)</h4>
                            <p class="text-sm text-gray-600">העברת כמויות עצומות של מידע לענן *פיזית* (כשאין אינטרנט מהיר).</p>
                             <div class="grid grid-cols-3 gap-2 text-xs text-center mt-2">
                                <div class="bg-slate-100 p-2 rounded">
                                    <div class="font-bold">Snowcone</div>
                                    <div>קטן (8TB-14TB). נייד, מחוספס.</div>
                                </div>
                                <div class="bg-slate-200 p-2 rounded">
                                    <div class="font-bold">Snowball</div>
                                    <div>בינוני (80TB). דמוי מזוודה. Edge Compute.</div>
                                </div>
                                <div class="bg-slate-300 p-2 rounded">
                                    <div class="font-bold">Snowmobile</div>
                                    <div>משאית ענקית! (Exabytes).</div>
                                </div>
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-storage-1',
                        question: 'אתם צריכים להעביר 50 Petabytes של מידע לארה"ב ואין לכם חיבור אינטרנט מהיר. באיזה שירות תשתמשו?',
                        options: ['AWS Direct Connect', 'Amazon S3 Transfer Acceleration', 'AWS Snowmobile', 'AWS Database Migration Service'],
                        correctIndex: 2,
                        explanation: 'עבור כמויות מידע בסדר גודל של Petabytes/Exabytes ללא אינטרנט מתאים, Snowmobile (המשאית) הוא הפתרון היעיל ביותר.'
                    }
                ],
                keyPoints: ["S3 = Objects", "EBS = Block", "Snowball = Physical Data Migration"]
            },
            {
                id: 'databases',
                title: 'מסדי נתונים (Databases)',
                summary: 'Relational vs Non-Relational (SQL vs NoSQL).',
                content: `
                   <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-lg mb-2 text-blue-700">Relational (SQL)</h4>
                            <ul class="space-y-2 text-sm">
                                <li class="bg-blue-50 p-2 rounded"><strong>RDS:</strong> מנוהל (Postgres, MySQL).</li>
                                <li class="bg-blue-50 p-2 rounded"><strong>Aurora:</strong> פיתוח של AWS. פי 5 מהיר יותר, משוכפל ל-3 AZs.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-2 text-orange-700">Non-Relational (NoSQL)</h4>
                            <div class="bg-orange-50 p-2 rounded text-sm"><strong>DynamoDB:</strong> Key-Value. מהיר בטירוף, Serverless.</div>
                        </div>
                         <div class="bg-red-50 p-2 rounded text-xs mt-2"><strong>Redshift:</strong> Data Warehouse לאנליטיקות.</div>
                         <div class="bg-purple-50 p-2 rounded text-xs mt-2"><strong>ElastiCache:</strong> Caching (Redis/Memcached).</div>
                   </div>
                `,
                keyPoints: ["RDS/Aurora = SQL", "DynamoDB = NoSQL", "Redshift = Warehouse", "ElastiCache = Caching"]
            },
            {
                id: 'networking',
                title: 'רשתות (Networking) & Content Delivery',
                summary: 'VPC, Route 53, CloudFront, Global Accelerator.',
                blocks: [
                    {
                        type: 'html',
                        content: `
                        <div class="space-y-4">
                            <div class="text-sm">
                                <strong>Amazon VPC:</strong> הרשת הפרטית שלכם.
                                <ul class="list-disc list-inside pl-2 text-gray-600">
                                    <li>Security Groups (Instance level).</li>
                                    <li>NACL (Subnet level).</li>
                                </ul>
                            </div>
                            <div class="text-sm border-t pt-2">
                                <strong>Amazon Route 53:</strong> שירות DNS (תרגום שמות ל-IP).
                            </div>
                            <div class="text-sm border-t pt-2">
                                <strong>Amazon CloudFront:</strong> שירות CDN. מגיש תוכן (תמונות/וידאו) מהר מנקודות קצה (Edge Locations) קרובות למשתמש.
                            </div>
                            <div class="text-sm border-t pt-2 bg-yellow-50 p-2 rounded">
                                <strong>AWS Global Accelerator:</strong> משפר ביצועים לאפליקציות גלובליות ע"י שימוש ברשת הסיבים הפרטית של AWS (במקום האינטרנט הציבורי). מספק IP קבוע סטטי.
                            </div>
                        </div>
                        `
                    },
                    {
                        type: 'quiz',
                        id: 'quiz-net-1',
                        question: 'איזה שירות מספק כתובות IP סטטיות ומשפר את זמינות וביצועי האפליקציה הגלובלית באמצעות הרשת של AWS?',
                        options: ['Amazon CloudFront', 'AWS Global Accelerator', 'Amazon Route 53', 'AWS Direct Connect'],
                        correctIndex: 1,
                        explanation: 'Global Accelerator משתמש ברשת של AWS ומספק 2 כתובות IP סטטיות כנקודת כניסה. CloudFront מיועד בעיקר ל-Caching של תוכן.'
                    }
                ],
                keyPoints: ["VPC = Private Network", "CloudFront = CDN (Caching)", "Global Accelerator = Performance via AWS Network"]
            }
        ]
    },
    {
        id: 'management',
        title: 'ניהול וניטור (Management)',
        description: 'CloudWatch, CloudTrail, Config, Auto Scaling.',
        icon: 'Activity',
        color: 'bg-teal-50 text-teal-600 border-teal-200',
        modules: [
            {
                id: 'monitoring',
                title: 'ניטור ולוגים',
                summary: 'CloudWatch vs CloudTrail.',
                content: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="card bg-orange-50 p-4 rounded-lg shadow-sm">
                            <h4 class="font-bold text-orange-800">CloudWatch</h4>
                            <p class="text-sm mt-1">ביצועים. Metrics (CPU %), Logs, Alarms.</p>
                        </div>
                        <div class="card bg-gray-50 p-4 rounded-lg shadow-sm">
                            <h4 class="font-bold text-gray-800">CloudTrail</h4>
                            <p class="text-sm mt-1">אודיטינג. מי עשה מה? (API Calls History).</p>
                        </div>
                    </div>
                `,
                keyPoints: ["CloudWatch = Performance", "CloudTrail = Auditing API"]
            },
            {
                id: 'automation',
                title: 'אוטומציה',
                summary: 'CloudFormation, Systems Manager.',
                content: `
                    <ul class="space-y-4 text-sm">
                        <li><strong>CloudFormation:</strong> Infrastructure as Code (Templates).</li>
                        <li><strong>Systems Manager (SSM):</strong> ניהול שרתים (Patching, Run Command) ללא SSH.</li>
                        <li><strong>AWS Config:</strong> מעקב אחר שינויי קונפיגורציה לאורך זמן.</li>
                    </ul>
                `,
                keyPoints: ["CloudFormation = IaC", "Config = Configuration History"]
            }
        ]
    },
    {
        id: 'billing',
        title: 'תמחור ותמיכה (Billing)',
        description: 'ניהול עלויות, Organizations, ותמיכה.',
        icon: 'CreditCard',
        color: 'bg-green-50 text-green-600 border-green-200',
        modules: [
            {
                id: 'organizations',
                title: 'AWS Organizations & Cost',
                summary: 'ניהול מרכזי.',
                content: `
                    <div class="space-y-4">
                        <ul class="list-disc list-inside text-sm text-gray-700">
                            <li><strong>Consolidated Billing:</strong> חשבונית אחת לכל החשבונות.</li>
                            <li><strong>Volume Discounts:</strong> איחוד שימוש להנחות.</li>
                            <li><strong>SCP:</strong> הגבלת הרשאות ברמת הארגון.</li>
                        </ul>
                    </div>
                `,
                keyPoints: ["One Bill", "SCP Control"]
            }
        ]
    }
];

export const refresherResources = {
    wellArchitected: {
        title: 'The AWS Well-Architected Framework (6 Pillars)',
        headers: ['Pillar', 'Focus'],
        rows: [
            ['Operational Excellence', 'Running & monitoring systems, automation.'],
            ['Security', 'Protecting data & systems, IAM.'],
            ['Reliability', 'Recovery from failure, scaling.'],
            ['Performance Efficiency', 'Using IT and computing resources efficiently.'],
            ['Cost Optimization', 'Avoiding unnecessary costs.'],
            ['Sustainability', 'Minimizing environmental impact.']
        ]
    },
    supportPlans: {
        title: 'AWS Support Plans',
        headers: ['Plan', 'Price', 'Tech Support', 'Response Time (Critical)'],
        rows: [
            ['Basic', 'Free', 'No', '-'],
            ['Developer', '$29/mo', 'Email (Biz hours)', '12 hours (General)'],
            ['Business', '$100/mo', '24/7 Phone/Chat', '1 hour (System Down)'],
            ['Enterprise', '$15k/mo', '24/7 + TAM', '15 min (Biz Critical)']
        ]
    }
};
