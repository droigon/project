import React from 'react';
import { ThemeContext } from './ThemeContext';
import sun from '../images/sun.png'
import moon from '../images/moon.png'

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <img src={sun}
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400  text-2xl cursor-pointer"
                />
            ) : (
                    <img src={moon}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;