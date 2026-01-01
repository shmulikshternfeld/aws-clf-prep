import { Link } from 'react-router-dom';
import { Play, TrendingUp, BookOpen, AlertCircle } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="space-y-8">
            <header className="text-center sm:text-right">
                <h1 className="text-3xl font-bold text-gray-900">ברוך הבא למערכת הלימוד, ענן פרקטישנר!</h1>
                <p className="mt-2 text-gray-600">הדרך שלך להסמכת AWS מתחילה כאן. עקוב אחר ההתקדמות שלך ובצע סימולציות.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">מבחנים שהושלמו</p>
                        <p className="text-2xl font-bold text-aws-blue">0/20</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-full text-aws-blue">
                        <TrendingUp size={24} />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">ציון ממוצע</p>
                        <p className="text-2xl font-bold text-emerald-600">-</p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-full text-emerald-600">
                        <AwardWrapper />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">מושגים שנלמדו</p>
                        <p className="text-2xl font-bold text-purple-600">0%</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                        <BookOpen size={24} />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/exams" className="group relative block p-6 bg-gradient-to-br from-aws-dark to-[#2c3e50] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Play size={100} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">התחל מבחן מלא</h3>
                    <p className="text-gray-300 mb-4">סימולציה מלאה של 65 שאלות, 90 דקות. חווה את הדבר האמיתי.</p>
                    <span className="inline-flex items-center gap-2 bg-aws-light text-aws-dark font-bold px-4 py-2 rounded-lg group-hover:bg-white transition-colors">
                        <Play size={18} />
                        התחל עכשיו
                    </span>
                </Link>

                <Link to="/study" className="group relative block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-aws-blue transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">מרכז למידה</h3>
                    <p className="text-gray-600 mb-4">חזור על מושגי יסוד, שירותי AWS ומונחים קריטיים לפני המבחן.</p>
                    <span className="text-aws-blue font-semibold group-hover:underline">עבור למושגים &larr;</span>
                </Link>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">פעילות אחרונה</h3>
                <div className="text-center py-8 text-gray-500 flex flex-col items-center gap-2">
                    <AlertCircle size={40} className="text-gray-300" />
                    <p>עדיין לא ביצעת מבחנים. זה הזמן להתחיל!</p>
                </div>
            </div>
        </div>
    );
}

function AwardWrapper() {
    // Small local component for icon
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
    )
}
