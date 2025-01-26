const themes = {
    light: {
        background: '#f8f9fa',
        color: '#333',
    },
    dark: {
        background: '#333',
        color: '#f8f9fa',
    },
};

const ThemeToggleButton = styled.button`
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeProvider theme={themes[theme]}>
            <div style={{ background: themes[theme].background, color: themes[theme].color }}>
                <ThemeToggleButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle Theme
                </ThemeToggleButton>
            </div>
        </ThemeProvider>
    );
}

export default ThemeToggle;