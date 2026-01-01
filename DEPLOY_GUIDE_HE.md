# מדריך העלאה ל-GitHub Pages

הפרויקט שלך מוכן טכנית לפריסה!
ביצעתי את השינויים הדרושים בקבצי הקונפיגורציה.
בגלל שההתקנה האוטומטית נתקעה קודם, נבצע אותה ידנית בשלב הראשון.

## שלב 1: התקנת `gh-pages` (ידנית)
פתח את הטרמינל (בתיקייה `aws`) והרץ:
```bash
npm install gh-pages --save-dev
```
זה אמור לקחת דקה-שתיים. אם זה נתקע שוב, ייתכן שיש בעיית אינטרנט זמנית.

## שלב 2: יצירת Repository ב-GitHub
1.  כנס ל-[GitHub](https://github.com/new).
2.  צור **Repository** חדש (למשל תקרא לו `aws-clf-prep`).
3.  **אל** תסמן "Initialize with README".
4.  העתק את כתובת ה-HTTPS של ה-Repo (למשל: `https://github.com/YourName/aws-clf-prep.git`).

## שלב 3: עדכון שם הפרויקט (חובה!)
לפני ההעלאה, עליך לעדכן שני קבצים עם השם שבחרת ל-Repo:

1.  **בקובץ `vite.config.ts`**:
    *   חפש את השורה: `base: '/<REPO_NAME>/',`
    *   שנה את `<REPO_NAME>` לשם ה-Repo שיצרת (למשל `base: '/aws-clf-prep/',`).

2.  **בקובץ `package.json`**:
    *   חפש את השורה: `"homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>",`
    *   עדכן את שם המשתמש שלך ושם ה-Repo.

## שלב 4: חיבור והעלאה
בטרמינל, הרץ את הפקודות הבאות לפי הסדר:

```bash
# 1. אתחול גיט (אם צריך)
git init

# 2. הוספת כל הקבצים
git add .
git commit -m "Initial commit for deployment"

# 3. הפניית הענף הראשי
git branch -M main

# 4. חיבור לגיטהב (החלף בכתובת שלך!)
git remote add origin https://github.com/Moshiko/aws-clf-prep.git

# 5. פריסה לאוויר
npm run deploy
```

אחרי שהפקודה `npm run deploy` תסיים, הלינק לאתר שלך יופיע בקונסול (או בתוך GitHub תחת Settings -> Pages).

בהצלחה!
