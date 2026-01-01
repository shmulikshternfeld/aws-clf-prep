export interface LearningModule {
    id: string;
    title: string;
    summary: string;
    content: string; // HTML/Markdown formatted text
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
        description: 'הבנת היסודות של מחשוב ענן, היתרונות של AWS, וכלכלה בסיסית של הענן.',
        icon: 'Cloud',
        color: 'bg-blue-50 text-blue-600 border-blue-200',
        modules: [
            {
                id: 'what-is-cloud',
                title: 'מהו מחשוב ענן?',
                summary: 'אספקה לפי דרישה של כוח מחשוב, מסד נתונים, אחסון ומשאבי IT אחרים.',
                content: `
                    <p>מחשוב ענן הוא אספקה לפי דרישה (On-demand) של משאבי IT דרך האינטרנט, עם תמחור לפי שימוש (Pay-as-you-go). במקום לקנות, להחזיק ולתחזק מרכזי נתונים פיזיים ושרתים, אתם יכולים לגשת לשירותים טכנולוגיים, כגון כוח מחשוב, אחסון ומסדי נתונים, על בסיס צורך, מספק ענן כמו AWS.</p>
                    <h4 class="font-bold mt-4 mb-2">יתרונות מרכזיים:</h4>
                    <ul class="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>החלפת הוצאות הוניות (CAPEX) בהוצאות תפעוליות (OPEX):</strong> משלמים רק על מה שמשתמשים בו, ללא השקעה ראשונית ענקית בחומרה.</li>
                        <li><strong>יתרון לגודל (Economies of Scale):</strong> בשל כמות הלקוחות העצומה, AWS יכולה להציע מחירים נמוכים יותר ממה שהייתם משיגים לבד.</li>
                        <li><strong>הפסקת ניחוש קיבולת (Capacity Planning):</strong> אין צורך לנחש כמה שרתים תצטרכו. אפשר לגדול ולקטון באופן אוטומטי (Auto Scaling).</li>
                        <li><strong>הגדלת מהירות וזריזות (Speed & Agility):</strong> משאבים חדשים זמינים תוך דקות, מה שמאפשר לצוותים לנסות רעיונות חדשים מהר.</li>
                        <li><strong>פריסה גלובלית תוך דקות:</strong> ניתן להשיק את האפליקציה במספר אזורים (Regions) ברחבי העולם בקליק.</li>
                    </ul>
                `,
                keyPoints: [
                    "On-demand delivery",
                    "Pay-as-you-go pricing",
                    "CAPEX vs OPEX",
                    "High Availability & Scalability"
                ]
            },
            {
                id: 'cloud-types',
                title: 'מודלים של מחשוב ענן',
                summary: 'ההבדלים בין IaaS, PaaS, SaaS וסוגי פריסה (ציבורי, פרטי, היברידי).',
                content: `
                    <p>ישנם שלושה מודלים עיקריים של שירותי ענן, ושלושה מודלים של פריסה.</p>
                    
                    <h4 class="font-bold mt-4 mb-2">מודלים של שירות (Service Models):</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>IaaS (Infrastructure as a Service):</strong> נותן את השליטה המרבית. אתם שוכרים את התשתית (שרתים, רשתות) ומנהלים את מערכת ההפעלה והאפליקציות. דוגמה: <em>Amazon EC2</em>.</li>
                        <li><strong>PaaS (Platform as a Service):</strong> מסיר את הצורך בניהול התשתית (חומרה, מערכת הפעלה). אתם מתמקדים רק בקוד ובניהול האפליקציה. דוגמה: <em>AWS Elastic Beanstalk</em>.</li>
                        <li><strong>SaaS (Software as a Service):</strong> מוצר מוגמר שמנוהל ומתוחזק על ידי הספק. המשתמש רק משתמש בתוכנה. דוגמה: <em>Gmail, Dropbox, Zoom</em> (וגם שירותי AWS מסוימים כמו <em>Amazon Connect</em>).</li>
                    </ul>

                    <h4 class="font-bold mt-4 mb-2">מודלים של פריסה (Deployment Models):</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>ענן ציבורי (Public Cloud):</strong> התשתית שייכת לספק הענן (AWS) ומשותפת בין ארגונים שונים בצורה מאובטחת.</li>
                        <li><strong>ענן פרטי (Private Cloud):</strong> תשתית ענן המוקדשת אך ורק לארגון אחד. יכולה להיות בתוך הדאטה-סנטר של הארגון עצמו (On-Premises).</li>
                        <li><strong>ענן היברידי (Hybrid Cloud):</strong> חיבור בין ענן ציבורי לענן פרטי, המאפשר לנתונים ואפליקציות לעבור ביניהם.</li>
                    </ul>
                `,
                keyPoints: [
                    "IaaS = EC2 (More control)",
                    "PaaS = Elastic Beanstalk (Less ops)",
                    "SaaS = Completed Software",
                    "Hybrid = Cloud + On-Prem"
                ]
            }
        ]
    },
    {
        id: 'security',
        title: 'אבטחה ותאימות (Security)',
        description: 'מודל האחריות המשותפת, ניהול זהויות (IAM) ושירותי אבטחה מרכזיים.',
        icon: 'ShieldCheck',
        color: 'bg-red-50 text-red-600 border-red-200',
        modules: [
            {
                id: 'shared-responsibility',
                title: 'מודל האחריות המשותפת',
                summary: 'חלוקת האחריות בין AWS לבין הלקוח (Security OF the cloud vs IN the cloud).',
                content: `
                    <p>אבטחה ותאימות היא אחריות משותפת בין AWS לבין הלקוח.</p>
                    
                    <h4 class="font-bold mt-4 mb-2">אחריות AWS (Security OF the Cloud):</h4>
                    <p>AWS אחראית על הגנת התשתית שמריצה את כל השירותים בענן. זה כולל:</p>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>חומרה, תוכנה, רשתות ומתקנים פיזיים (Data Centers).</li>
                        <li>Compute, Storage, Database, Networking (Physical).</li>
                    </ul>

                    <h4 class="font-bold mt-4 mb-2">אחריות הלקוח (Security IN the Cloud):</h4>
                    <p>האחריות של הלקוח נקבעת לפי שירותי הענן בהם הוא משתמש. זה כולל:</p>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>מערכת הפעלה (OS) ועדכוני תוכנה (Patching) ב-EC2.</li>
                        <li>הצפנת נתונים (צד שרת וצד לקוח).</li>
                        <li>ניהול זהויות והרשאות (IAM Users, Policies).</li>
                        <li>הגדרת חומת אש (Security Groups, ACLs).</li>
                    </ul>
                `,
                keyPoints: [
                    "AWS = Physical, Global Infra",
                    "Customer = Data, Patching OS, IAM, Encryption",
                    "Shared Responsibility Model"
                ]
            },
            {
                id: 'iam',
                title: 'ניהול זהויות (IAM)',
                summary: 'משתמשים, קבוצות, תפקידים (Roles) ומדיניות (Policies).',
                content: `
                    <p><strong>IAM (Identity and Access Management)</strong> הוא שירות גלובלי (ללא עלות) המאפשר לנהל גישה לשירותי ומשאבי AWS בצורה מאובטחת.</p>

                    <h4 class="font-bold mt-4 mb-2">רכיבי מפתח:</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>IAM User:</strong> זהות בתוך חשבון ה-AWS שלך (אדם או אפליקציה). כברירת מחדל, למשתמש חדש אין הרשאות כלל.</li>
                        <li><strong>IAM Group:</strong> אוסף של משתמשים. הרשאות שניתנות לקבוצה חלות על כל המשתמשים בה (דרך יעילה לניהול).</li>
                        <li><strong>IAM Role:</strong> זהות שאפשר "לקחת" (Assume) באופן זמני. משמש בעיקר עבור שירותי AWS (למשל, EC2 שצריך לגשת ל-S3) או למשתמשים חיצוניים. אינו משויך לאדם ספציפי לטווח ארוך (משתמש ב-Temporary Credentials).</li>
                        <li><strong>IAM Policy:</strong> מסמך JSON המגדיר הרשאות (מה מותר ומה אסור). משייכים אותו למשתמשים, קבוצות או תפקידים.</li>
                    </ul>

                    <h4 class="font-bold mt-4 mb-2">עקרונות חשובים:</h4>
                    <ul class="list-disc list-inside text-gray-700">
                        <li><strong>Principle of Least Privilege:</strong> לתת רק את ההרשאות המינימליות הנדרשות לביצוע המשימה ולא מעבר לכך.</li>
                        <li><strong>Root User:</strong> המשתמש הראשון שנוצר. יש לו גישה מלאה להכל. אין להשתמש בו למשימות יומיומיות! יש לאבטח אותו עם MFA ולנעול אותו בכספת.</li>
                    </ul>
                `,
                keyPoints: [
                    "Least Privilege Principle",
                    "Root User = Protect with MFA",
                    "Roles = Temporary Access",
                    "Policies = JSON permissions"
                ]
            }
        ]
    },
    {
        id: 'technology',
        title: 'טכנולוגיה ושירותים (Technology)',
        description: 'שירותי הליבה של AWS: מחשוב, אחסון, רשתות ומסדי נתונים.',
        icon: 'Server',
        color: 'bg-purple-50 text-purple-600 border-purple-200',
        modules: [
            {
                id: 'compute-services',
                title: 'שירותי מחשוב (Compute)',
                summary: 'EC2, Lambda, Elastic Beanstalk ועוד.',
                content: `
                    <h4 class="font-bold mt-2 mb-1">Amazon EC2 (Elastic Compute Cloud)</h4>
                    <p class="mb-2">שרתים וירטואליים בענן. שליטה מלאה על מערכת ההפעלה. מתאים לאפליקציות מסורתיות, אירוח אתרים, ועיבוד נתונים. תומך ב-Auto Scaling ו-Load Balancing (ELB).</p>
                    
                    <h4 class="font-bold mt-2 mb-1">AWS Lambda</h4>
                    <p class="mb-2">שירות <strong>Serverless</strong>. מריץ קוד בתגובה לאירועים (Event-driven). משלמים רק על זמן הריצה (במילי-שניות). אין צורך לנהל שרתים. נהדר לעיבוד תמונות, API Backends, ואוטומציה.</p>

                    <h4 class="font-bold mt-2 mb-1">Amazon ECS & EKS</h4>
                    <p class="mb-2">שירותים להרצת קונטיינרים (Docker). ECS הוא השירות המנוהל של AWS, ו-EKS מבוסס על Kubernetes.</p>
                `,
                keyPoints: [
                    "EC2 = Virtual Servers (IaaS)",
                    "Lambda = Serverless Code",
                    "Auto Scaling = Scale out/in",
                    "ELB = Distribute traffic"
                ]
            },
            {
                id: 'storage-services',
                title: 'שירותי אחסון (Storage)',
                summary: 'S3, EBS, EFS ו-Storage Gateway.',
                content: `
                    <h4 class="font-bold mt-2 mb-1">Amazon S3 (Simple Storage Service)</h4>
                    <p class="mb-2">אחסון <strong>אובייקטים</strong> (קבצים, תמונות, וידאו). סקיילבילי לחלוטין. גישה דרך HTTP. משתמשים ב-Buckets. מתאים לארכיון, Data Lakes, ואתרים סטטיים. מציע אחסון זול לטווח ארוך (Glacier).</p>
                    
                    <h4 class="font-bold mt-2 mb-1">Amazon EBS (Elastic Block Store)</h4>
                    <p class="mb-2">אחסון <strong>בלוקים</strong> (כמו כונן קשיח) שמתחבר ל-EC2. נשמר באותו AZ (Availability Zone). נדרש להתקנת מערכת הפעלה ודאטה שצריך ביצועים גבוהים.</p>

                    <h4 class="font-bold mt-2 mb-1">Amazon EFS (Elastic File System)</h4>
                    <p class="mb-2">מערכת קבצים משותפת (NFS) למספר שרתי EC2 (לינוקס). סקיילבילית וגמישה.</p>
                `,
                keyPoints: [
                    "S3 = Object Storage (Global/Region level)",
                    "EBS = Block Storage (AZ level) for EC2",
                    "Glacier = Archive (Low cost)",
                    "Storage Gateway = Hybrid storage"
                ]
            },
            {
                id: 'networking',
                title: 'רשתות (Networking)',
                summary: 'VPC, Route 53, CloudFront.',
                content: `
                    <h4 class="font-bold mt-2 mb-1">Amazon VPC (Virtual Private Cloud)</h4>
                    <p class="mb-2">הרשת הפרטית שלכם בענן. מאפשרת להגדיר Subnets (Public/Private), טבלאות ניתוב (Route Tables), ושערי גישה (Internet Gateway, NAT Gateway).</p>
                    
                    <h4 class="font-bold mt-2 mb-1">Amazon Route 53</h4>
                    <p class="mb-2">שירות DNS מנוהל וגלובלי. מתרגם שמות דומיין (כמו www.google.com) לכתובות IP. כולל בדיקות תקינות (Health Checks) וניתוב מבוסס Latency או Geo.</p>

                    <h4 class="font-bold mt-2 mb-1">Amazon CloudFront</h4>
                    <p class="mb-2">רשת הפצת תוכן (CDN). מאיצה את הגלישה לאתר על ידי שמירת עותקים (Caching) בנקודות קצה (Edge Locations) קרובות למשתמש.</p>
                `,
                keyPoints: [
                    "VPC = Private Network",
                    "Security Group = Instance Firewall",
                    "NACL = Subnet Firewall",
                    "CloudFront = CDN (Edge Locations)"
                ]
            }
        ]
    },
    {
        id: 'billing',
        title: 'תמחור ותמיכה (Billing)',
        description: 'מודלים של תמחור, כלי ניהול עלויות ותוכניות תמיכה.',
        icon: 'CreditCard',
        color: 'bg-green-50 text-green-600 border-green-200',
        modules: [
            {
                id: 'pricing-models',
                title: 'מודלי תמחור EC2',
                summary: 'On-Demand, Savings Plans, Spot, Reserved Instances.',
                content: `
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>On-Demand:</strong> המחיר היקר ביותר לשעה/שנייה. גמישות מקסימלית. ללא התחייבות.</li>
                        <li><strong>Savings Plans / Reserved Instances:</strong> הנחה משמעותית (עד 72%) תמורת התחייבות לשימוש של 1 או 3 שנים.</li>
                        <li><strong>Spot Instances:</strong> ניצול משאבים פנויים של AWS. הנחה של עד 90%. אבל! AWS יכולה לקחת את השרת בהתראה של 2 דקות. מתאים לעיבודים שאפשר להפסיק באמצע.</li>
                        <li><strong>Dedicated Hosts:</strong> שרת פיזי המוקדש רק לכם (לצורכי רישוי תוכנה ורגולציה).</li>
                    </ul>
                `,
                keyPoints: [
                    "On-Demand = Flexible, No commitment",
                    "Reserved/Savings = Commitment (1 or 3 years), Cheapest stable",
                    "Spot = Cheapest overall, risk of interruption"
                ]
            },
            {
                id: 'cost-tools',
                title: 'כלי ניהול עלויות',
                summary: 'Budgets, Cost Explorer, Pricing Calculator.',
                content: `
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>AWS Budgets:</strong> מאפשר להגדיר תקציב ולקבל התראה (במייל/SMS) כאשר חורגים ממנו (או צפויים לחרוג).</li>
                        <li><strong>Cost Explorer:</strong> כלי ויזואלי לניתוח היסטוריית העלויות והשימוש. מאפשר לראות מגמות ותחזיות לעתיד.</li>
                        <li><strong>AWS Pricing Calculator:</strong> הערכת עלויות <em>לפני</em> שמתחילים להשתמש בשירותים.</li>
                        <li><strong>Cost Allocation Tags:</strong> תגיות שניתן להצמיד למשאבים כדי לשייך עלויות למחלקות או פרויקטים ספציפיים.</li>
                    </ul>
                `,
                keyPoints: [
                    "Budgets = Set limits & Alerts",
                    "Cost Explorer = Visualize & Forecast",
                    "Tags = Organize costs"
                ]
            }
        ]
    }
];

export const refresherResources = {
    wellArchitected: {
        title: 'The AWS Well-Architected Framework (6 Pillars)',
        headers: ['עמוד כותרת (Pillar)', 'מיקוד עיקרי'],
        rows: [
            ['Operational Excellence', 'ניהול וניטור מערכות כדי לספק ערך עסקי, ושיפור מתמיד של תהליכים. (Automation, Small changes)'],
            ['Security', 'הגנה על מידע ומערכות. ניהול זהויות, הצפנה, ואבטחת מידע.'],
            ['Reliability', 'היכולת של המערכת להתאושש מתקלות ולהמשיך לתפקד. (Recovery, Scaling).'],
            ['Performance Efficiency', 'שימוש יעיל במשאבי מחשוב. בחירת סוגי שרתים נכונים ואימוץ טכנולוגיות חדשות.'],
            ['Cost Optimization', 'הימנעות מהוצאות מיותרות. הבנת ההוצאות ובקרה עליהן.'],
            ['Sustainability', 'צמצום ההשפעה הסביבתית של עומסי העבודה בענן.']
        ]
    },
    supportPlans: {
        title: 'תוכניות תמיכה של AWS',
        headers: ['Plan', 'מחיר', 'זמינות תמיכה', 'Response Time (Critical)'],
        rows: [
            ['Basic', 'חינם', 'שירות לקוחות בלבד (ללא תמיכה טכנית)', '-'],
            ['Developer', 'החל מ-$29', 'דוא"ל בשעות עסקים', '12 שעות (General)'],
            ['Business', 'החל מ-$100', '24/7 טלפון, צ\'אט ודוא"ל', 'שעה אחת (Production Down)'],
            ['Enterprise', 'החל מ-$15,000', '24/7 + מנהל תיק טכני (TAM)', '15 דקות (Biz Critical System Down)']
        ]
    }
};
