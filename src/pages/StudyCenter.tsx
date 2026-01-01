import { useState } from 'react';
import { concepts } from '../data/concepts-db';
import { Search, Book } from 'lucide-react';

export default function StudyCenter() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredConcepts = concepts.filter(c =>
        c.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.definition.includes(searchTerm)
    );

    return (
        <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">מרכז למידה</h1>
                    <p className="text-gray-600">מאגר מושגים מקיף להכנה למבחן. חפש מושג או סרוק את הרשימה.</p>
                </div>
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="חפש מושג..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aws-blue transition-all"
                    />
                    <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredConcepts.map((concept, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold text-aws-dark font-mono" dir="ltr">{concept.term}</h3>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{concept.category}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {concept.definition}
                        </p>
                    </div>
                ))}

                {filteredConcepts.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-400 flex flex-col items-center">
                        <Book size={48} className="mb-4 opacity-20" />
                        <p>לא נמצאו מושגים התואמים את החיפוש.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
