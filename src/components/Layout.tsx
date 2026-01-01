import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Award, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'דף הבית', path: '/', icon: Home },
        { name: 'מרכז למידה', path: '/study', icon: BookOpen },
        { name: 'מבחנים', path: '/exams', icon: Award },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-aws-dark text-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                                <span className="font-bold text-xl text-aws-light">CloudPrep Pro</span>
                                <span className="text-xs bg-aws-blue px-2 py-0.5 rounded text-white hidden sm:block">CLF-C02 Premium</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={clsx(
                                            'px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors',
                                            isActive ? 'bg-aws-blue text-white' : 'text-gray-300 hover:bg-aws-hover hover:text-white'
                                        )}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-white p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-aws-dark border-t border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={clsx(
                                        'block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2',
                                        location.pathname === item.path ? 'bg-aws-blue text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    )}
                                >
                                    <item.icon size={18} />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-grow max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Outlet />
            </main>

            <footer className="bg-white border-t mt-auto py-6">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                    Built for AWS CLF-C02 Preparation • 2026 Edition
                </div>
            </footer>
        </div>
    );
}
