import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/flowbite/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
            },
            maxWidth: {
                '7xl': '80rem',  // 1280px
                '8xl': '85rem',  // 1360px
                '9xl': '90rem',  // 1440px
                '10xl': '100rem', // 1600px
            },
            'animation': {
                'gradient-x': 'gradient-x 20s ease infinite',
            },
            'keyframes': {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    }
                },
            },
        },
    },

    plugins: [
        forms,
        require('flowbite/plugin')({
            charts: true,
        }),
        require('flowbite-typography')
    ],
};
