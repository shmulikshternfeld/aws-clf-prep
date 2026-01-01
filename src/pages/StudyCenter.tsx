import { useState } from 'react';
import { learningDomains, refresherResources, type LearningDomain } from '../data/learning-modules';
import {
    Cloud, ShieldCheck, Server, CreditCard,
    BookOpen, Zap, ChevronRight, X, Sparkles, GraduationCap
} from 'lucide-react';

const iconMap: Record<string, any> = {
    'Cloud': Cloud,
    'ShieldCheck': ShieldCheck,
    'Server': Server,
    'CreditCard': CreditCard
};

export default function StudyCenter() {
    const [activeTab, setActiveTab] = useState<'learning' | 'refresher'>('learning');
    const [selectedDomain, setSelectedDomain] = useState<LearningDomain | null>(null);

    return (
        <div className="space-y-8 pb-12">
            {/* Hero Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
                <div className="z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="text-aws-blue" size={32} />
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AWS אקדמיית ה-Cloud</h1>
                    </div>
                    <p className="text-gray-600 max-w-xl text-lg">
                        המרכז המקיף ללמידה ותרגול. בחרו בין העמקה במודולים הלימודיים לבין חזרה מהירה לפני מבחן.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex bg-gray-100 p-1 rounded-xl z-10 w-full md:w-auto">
                    <button
                        onClick={() => setActiveTab('learning')}
                        className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'learning'
                                ? 'bg-white text-aws-dark shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <BookOpen size={18} />
                        נושאי לימוד
                    </button>
                    <button
                        onClick={() => setActiveTab('refresher')}
                        className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'refresher'
                                ? 'bg-white text-aws-dark shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <Zap size={18} />
                        חזרה למבחן
                    </button>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-10 -translate-y-10"></div>
            </div>

            {/* Main Content */}
            {activeTab === 'learning' ? (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {learningDomains.map((domain) => {
                            const Icon = iconMap[domain.icon];
                            return (
                                <button
                                    key={domain.id}
                                    onClick={() => setSelectedDomain(domain)}
                                    className={`text-right group relative overflow-hidden p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${domain.color} bg-opacity-30 border-opacity-50 hover:border-opacity-100 bg-white`}
                                >
                                    <div className={`absolute top-0 right-0 w-full h-1 ${domain.color.replace('text', 'bg').split(' ')[0]}`}></div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl ${domain.color.replace('border', 'bg').replace('text', 'bg').split(' ')[0]} bg-opacity-20`}>
                                            <Icon size={28} />
                                        </div>
                                        <Sparkles className="text-gray-300 group-hover:text-yellow-400 transition-colors" size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{domain.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{domain.description}</p>
                                    <div className="flex items-center text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                                        התחל למידה
                                        <ChevronRight size={16} className="mr-1" />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <RefresherView />
            )}

            {/* Domain Details Modal */}
            {selectedDomain && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedDomain(null)}>
                    <div
                        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-gray-50 px-8 py-5 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                {(() => {
                                    const Icon = iconMap[selectedDomain.icon];
                                    return <Icon className="text-aws-blue" />;
                                })()}
                                {selectedDomain.title}
                            </h2>
                            <button
                                onClick={() => setSelectedDomain(null)}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8 space-y-12">
                            {selectedDomain.modules.map((module) => (
                                <section key={module.id} className="relative">
                                    <div className="absolute top-0 right-[-1.5rem] w-1 h-full bg-gradient-to-b from-gray-200 to-transparent rounded-full"></div>
                                    <h3 className="text-2xl font-bold text-aws-dark mb-2">{module.title}</h3>
                                    <p className="text-lg text-gray-600 mb-6 border-b border-gray-100 pb-4">{module.summary}</p>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2 prose prose-slate max-w-none text-gray-700 leading-loose" dangerouslySetInnerHTML={{ __html: module.content }}></div>

                                        <div className="bg-blue-50 p-6 rounded-xl h-fit border border-blue-100">
                                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                                <Zap size={18} className="text-blue-600 fill-current" />
                                                נקודות מפתח
                                            </h4>
                                            <ul className="space-y-3">
                                                {module.keyPoints.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-blue-800">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                                        <span dir="ltr" className="font-medium text-right">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>

                        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-100 text-center">
                            <button
                                onClick={() => setSelectedDomain(null)}
                                className="px-8 py-2 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-colors"
                            >
                                סגור
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function RefresherView() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RefresherCard
                title={refresherResources.wellArchitected.title}
                icon={Sparkles}
                color="text-purple-600 bg-purple-50"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-500">
                                {refresherResources.wellArchitected.headers.map((h, i) => <th key={i} className="pb-2 font-medium">{h}</th>)}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {refresherResources.wellArchitected.rows.map((row, i) => (
                                <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-3 pl-4 font-bold text-gray-800" dir="ltr">{row[0]}</td>
                                    <td className="py-3 text-gray-600">{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </RefresherCard>

            <RefresherCard
                title={refresherResources.supportPlans.title}
                icon={CreditCard}
                color="text-green-600 bg-green-50"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-500">
                                {refresherResources.supportPlans.headers.map((h, i) => <th key={i} className="pb-2 font-medium">{h}</th>)}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {refresherResources.supportPlans.rows.map((row, i) => (
                                <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-3 pl-2 font-bold text-gray-800" dir="ltr">{row[0]}</td>
                                    <td className="py-3 pl-2 text-gray-600">{row[1]}</td>
                                    <td className="py-3 pl-2 text-gray-600">{row[2]}</td>
                                    <td className="py-3 text-xs text-gray-500" dir="ltr">{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </RefresherCard>

            <div className="lg:col-span-2 bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-orange-500">
                        <Server size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">פורטים נפוצים (Common Ports)</h3>
                        <p className="text-sm text-gray-500">חובה לזכור למבחן לצורך הגדרת Security Groups</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                        ['SSH', '22', 'Linux Admin'],
                        ['RDP', '3389', 'Windows Admin'],
                        ['HTTP', '80', 'Web Traffic'],
                        ['HTTPS', '443', 'Secure Web'],
                        ['MySQL', '3306', 'Database']
                    ].map(([proto, port, desc]) => (
                        <div key={proto} className="bg-white p-3 rounded-xl shadow-sm italic text-center border border-white/50">
                            <div className="font-black text-2xl text-slate-800 mb-1" dir="ltr">{port}</div>
                            <div className="text-xs font-bold text-aws-blue uppercase tracking-wider">{proto}</div>
                            <div className="text-[10px] text-gray-400 mt-1">{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function RefresherCard({ title, icon: Icon, children, color }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
                    <Icon size={20} className={color.split(' ')[0]} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            {children}
        </div>
    );
}
