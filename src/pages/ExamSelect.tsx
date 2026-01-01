import { Link } from 'react-router-dom';
import { exams, topicQuizzes } from '../data/exams-config';
import { Clock, HelpCircle, ArrowLeft } from 'lucide-react';


export default function ExamSelect() {
    return (
        <div className="space-y-12">

            {/* Introduction */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold mb-4">מבחני סימולציה (Mock Exams)</h1>
                <p className="text-gray-600 max-w-3xl">
                    חבילת המבחנים הזו כוללת 20 מבחנים מלאים (65 שאלות כ"א) וכן מבחנים ממוקדים לפי נושאים.
                    המבחנים מדמים את הסביבה האמיתית: 90 דקות, מנגנון סימון שאלות, וניקוד מותאם.
                </p>
            </section>

            {/* Full Exams Grid */}
            <section>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 h-8 bg-aws-blue rounded-full"></div>
                    <h2 className="text-2xl font-bold">מבחנים מלאים</h2>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">{exams.length} מבחנים</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {exams.map((exam) => (
                        <Link
                            key={exam.id}
                            to={`/exam/${exam.id}`}
                            className="bg-white group hover:ring-2 hover:ring-aws-blue hover:shadow-lg transition-all rounded-xl border border-gray-200 overflow-hidden"
                        >
                            <div className="h-2 bg-aws-dark group-hover:bg-aws-blue transition-colors"></div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-aws-blue transition-colors">{exam.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Clock size={16} /> {exam.timeLimitMinutes} דק'</span>
                                    <span className="flex items-center gap-1"><HelpCircle size={16} /> 65 שאלות</span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded">חדש</span>
                                    <span className="text-aws-blue font-semibold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        התחל <ArrowLeft size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Topic Quizzes */}
            <section>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 h-8 bg-aws-light rounded-full"></div>
                    <h2 className="text-2xl font-bold">תרגול לפי נושאים</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topicQuizzes.map((quiz) => (
                        <Link
                            key={quiz.id}
                            to={`/exam/${quiz.id}?mode=quiz`} // Reuse exam engine for simplicity
                            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-aws-light hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">{quiz.topic}</h3>
                                <p className="text-sm text-gray-500">{quiz.questionIds.length} שאלות</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-end">
                                <span className="text-aws-light font-bold text-sm">תרגל עכשיו</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
