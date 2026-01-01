import { Link } from 'react-router-dom';
import { Play, TrendingUp, BookOpen, Quote } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="space-y-10 pb-12">
            {/* Hero Section */}
            <header className="text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-aws-blue opacity-5 rounded-bl-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 opacity-5 rounded-tr-full -ml-10 -mb-10"></div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    הדרך הבטוחה להסמכת <span className="text-aws-blue">AWS Cloud Practitioner</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    תרגול מקצועי, חומרי לימוד מקיפים וסימולציות נאמנות למקור (CLF-C02).
                    כל מה שצריך כדי לעבור את המבחן בהצלחה.
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    label="סימולציות שהושלמו"
                    value="0/20"
                    icon={TrendingUp}
                    color="text-aws-blue bg-blue-50"
                />
                <StatCard
                    label="ציון ממוצע"
                    value="-"
                    icon={AwardWrapper}
                    color="text-emerald-600 bg-emerald-50"
                />
                <StatCard
                    label="התקדמות בחומר הלימוד"
                    value="0%"
                    icon={BookOpen}
                    color="text-purple-600 bg-purple-50"
                />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/exams" className="group relative block p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 overflow-hidden hover:scale-[1.01] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <Play size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-aws-orange rounded-lg text-white">
                                <Play size={24} fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">סימולציית מבחן מלאה</h3>
                        </div>
                        <p className="text-gray-300 mb-8 text-lg font-light">
                            65 שאלות | 90 דקות | זהה למבחן האמיתי
                        </p>
                        <span className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                            התחל תרגול עכשיו
                            <span className="text-aws-orange">&larr;</span>
                        </span>
                    </div>
                </Link>

                <Link to="/study" className="group relative block p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-aws-blue/30">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-50 text-aws-blue rounded-lg">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">אקדמיית הענן</h3>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg">
                        מאגר ידע מקיף הכולל את כל שירותי הליבה, מושגי אבטחה, ומודלי תמחור. כולל סיכומי "Refresher" לרגע האחרון.
                    </p>
                    <span className="text-aws-blue font-bold group-hover:underline inline-flex items-center gap-2">
                        כניסה לאקדמיה
                        <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                    </span>
                </Link>
            </div>

            {/* Motivation / Tip */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 relative">
                <Quote className="absolute top-4 left-4 text-gray-300 transform rotate-180" size={40} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">טיפ להצלחה</h3>
                <p className="text-gray-600 italic relative z-10">
                    "במבחן האמיתי, חפשו תמיד את מילות המפתח בשאלה. המושגים 'More secure', 'Most cost-effective' או 'Least operational overhead' יכוונו אתכם לתשובה הנכונה ברוב המקרים."
                </p>
            </div>
        </div>
    );
}

function StatCard({ label, value, icon: Icon, color }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
                <p className="text-3xl font-bold text-slate-900 tracking-tight">{value}</p>
            </div>
            <div className={`p-4 rounded-xl ${color}`}>
                <Icon size={28} />
            </div>
        </div>
    );
}

function AwardWrapper({ size = 24, ...props }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    )
}
