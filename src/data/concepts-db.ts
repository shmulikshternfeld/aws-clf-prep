import type { Concept } from './types';

export const concepts: Concept[] = [
    {
        term: "EC2 (Elastic Compute Cloud)",
        definition: "שירות מחשוב בענן המאפשר לשכור 'מחשבים וירטואליים' (Instance) לפי דרישה. ניתן להגדרה מבחינת מעבד, זיכרון, דיסק ומערכת הפעלה.",
        category: "Compute"
    },
    {
        term: "S3 (Simple Storage Service)",
        definition: "שירות אחסון אובייקטים (Object Storage) סקיילבילי ביותר. משמש לאחסון קבצים, גיבויים, ואחסון אתרים סטטיים. מציע עמידות של 99.999999999% (11 תשיעיות).",
        category: "Storage"
    },
    {
        term: "IAM (Identity and Access Management)",
        definition: "שירות לניהול זהויות והרשאות. מאפשר ליצור משתמשים, קבוצות ותפקידים (Roles) ולהגדיר בדיוק למי מותר לעשות מה בסביבת ה-AWS.",
        category: "Security"
    },
    {
        term: "VPC (Virtual Private Cloud)",
        definition: "רשת וירטואלית פרטית משלך בתוך הענן של AWS. מאפשר שליטה מלאה על כתובות IP, תתי-רשתות (Subnets), טבלאות ניתוב ושערי גישה.",
        category: "Networking"
    },
    {
        term: "Lambda",
        definition: "שירות מחשוב Serverless המאפשר להריץ קוד בתגובה לאירועים (כמו העלאת קובץ ל-S3 או בקשת HTTP) ללא ניהול שרתים כלל.",
        category: "Compute"
    },
    {
        term: "RDS (Relational Database Service)",
        definition: "שירות לניהול מסדי נתונים רלציוניים (SQL). תומך ב-MySQL, PostgreSQL, Oracle, SQL Server, ו-Aurora. מטפל בגיבויים, עדכונים ו-Failover באופן אוטומטי.",
        category: "Database"
    },
    {
        term: "DynamoDB",
        definition: "מסד נתונים NoSQL מהיר וגמיש בניהול מלא (Fully Managed). מותאם לביצועים גבוהים בכל סדר גודל.",
        category: "Database"
    },
    {
        term: "Route 53",
        definition: "שירות DNS (Domain Name System) בעל זמינות גבוהה וסקיילביליות. משמש לניהול דומיינים וניתוב תעבורה לשירותי AWS שונים עם יכולות Health Checks.",
        category: "Networking"
    },
    {
        term: "CloudWatch",
        definition: "שירות ניטור ו-Observability. אוסף מטריקות, לוגים ואירועים ממשאבי AWS ומאפליקציות, ומאפשר להגדיר התראות ותגובות אוטומטיות.",
        category: "Management"
    },
    {
        term: "CloudTrail",
        definition: "שירות המבצע רישום (Audit) של כל הפעולות שבוצעו בחשבון ה-AWS (מי עשה מה, מתי ומאיזה IP). חיוני לצורכי אבטחה ותקינה (Compliance).",
        category: "Security"
    },
    {
        term: "Elastic Load Balancing (ELB)",
        definition: "שירות המפזר אוטומטית תעבורת יישומים נכנסת בין מספר יעדים, כגון מופעי EC2, קונטיינרים וכתובות IP, כדי להבטיח זמינות ויתירות.",
        category: "Networking"
    },
    {
        term: "Auto Scaling",
        definition: "שירות המנטר את האפליקציה ומתאים אוטומטית את קיבולת המשאבים (למשל, הוספה או הסרה של שרתי EC2) כדי לשמור על ביצועים יציבים ועלויות נמוכות.",
        category: "Compute"
    },
    {
        term: "MFA (Multi-Factor Authentication)",
        definition: "מנגנון אבטחה הדורש יותר משיטה אחת לאימות זהות (למשל, סיסמה + קוד ממכשיר פיזי/אפליקציה). מומלץ מאוד להפעיל עבור משתמש השורש (Root) וכל משתמשי IAM.",
        category: "Security"
    },
    {
        term: "Total Cost of Ownership (TCO)",
        definition: "חישוב המשווה את העלות של הרצת תשתית מקומית (On-Premises) לעומת העלות של הרצת אותה תשתית בענן AWS.",
        category: "Billing"
    },
    {
        term: "AWS Trusted Advisor",
        definition: "כלי מקוון המספק המלצות בזמן אמת כדי לעזור לך לפעול לפי הדרישות המומלצות של AWS (Best Practices) בתחומים: עלות, ביצועים, אבטחה, עמידות בפני תקלות ומכסות שירות.",
        category: "Management"
    }
];
