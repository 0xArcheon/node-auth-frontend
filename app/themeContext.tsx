import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<"light" | "dark">("light");
const ThemeToggleContext = createContext<() => void>(() => { });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    const toggleTheme = () =>
        setTheme((prev) => (prev == 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext value={theme}>
            <ThemeToggleContext value={toggleTheme}>
                {children}
            </ThemeToggleContext>
        </ThemeContext>
    );
}

export function useTheme() {
    const theme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeToggleContext);
    return { theme, toggleTheme };
}