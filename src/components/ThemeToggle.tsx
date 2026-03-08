import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
    className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps = {}) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check local storage or system preference on mount
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const nextTheme = !prev;
            if (nextTheme) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return nextTheme;
        });
    };

    return (
        <div
            className={`flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 ${isDark
                ? "bg-zinc-950 border border-zinc-800"
                : "bg-white border border-zinc-200"
                } ${className}`}
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
            aria-label="Toggle theme"
        >
            <div className="flex justify-between items-center w-full">
                <div
                    className={`flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 ${isDark
                        ? "transform translate-x-0 bg-zinc-800"
                        : "transform translate-x-8 bg-gray-200"
                        }`}
                >
                    {isDark ? (
                        <Moon
                            className="w-4 h-4 text-white"
                            strokeWidth={1.5}
                        />
                    ) : (
                        <Sun
                            className="w-4 h-4 text-gray-700"
                            strokeWidth={1.5}
                        />
                    )}
                </div>
                <div
                    className={`flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 ${isDark
                        ? "bg-transparent"
                        : "transform -translate-x-8"
                        }`}
                >
                    {isDark ? (
                        <Sun
                            className="w-4 h-4 text-gray-500"
                            strokeWidth={1.5}
                        />
                    ) : (
                        <Moon
                            className="w-4 h-4 text-black"
                            strokeWidth={1.5}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
