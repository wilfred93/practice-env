/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: {
        50: '#f9f9fb',
        100: '#f2f4f9',
        200: '#e8eaef',
        300: '#c5c8d3',
        400: '#acafbc',
        500: '#7d808c',
        600: '#656975',
        700: '#535760',
        800: '#3e4147',
        900: '#1f2123',
        DEFAULT: '#ffffff',
      },
      'refurbed-blue': {
        50: '#f6f6ff',
        100: '#c8cde1',
        200: '#a5adcd',
        300: '#6a74a9',
        400: '#4b5492',
        500: '#2f3061',
        600: '#292954',
        700: '#222347',
        800: '#1c1c39',
        900: '#171933',
        'accent': '#2d2f8c',
        DEFAULT: '#2f3061',
      },
      blue: {
        50: '#f0f4fc',
        100: '#d9e3f8',
        200: '#b3c6f1',
        300: '#7199e9',
        400: '#5984e7',
        500: '#4271db',
        600: '#3b66c5',
        700: '#355aaf',
        800: '#2e4f99',
        900: '#284483',
        'accent': '#0b48d1',
        DEFAULT: '#4271db',
      },
      green: {
        50: '#edf8f7',
        100: '#d1edea',
        200: '#a2dad6',
        300: '#74c8c1',
        400: '#45b5ad',
        500: '#17a398',
        600: '#159389',
        700: '#12827a',
        800: '#10726a',
        900: '#0e625b',
        'accent': '#00d6c5',
        DEFAULT: '#17a398',
      },
      coral: {
        50: '#fef4f4',
        100: '#fce4e3',
        200: '#f9c8c7',
        300: '#f5adac',
        400: '#f29190',
        500: '#ef7674',
        600: '#dc5858',
        700: '#c54b4b',
        800: '#bb4141',
        900: '#b73b3b',
        'accent': '#ff3a36',
        DEFAULT: '#ef7674',
      },
      porsche: {
        50: '#fef6ea',
        100: '#fde9ca',
        200: '#ffdba6',
        300: '#ffd392',
        400: '#fdcb82',
        500: '#ebb76a',
        600: '#e4a84d',
        700: '#d19841',
        800: '#c18934',
        900: '#a7752a',
        'accent': '#ffab2d',
        DEFAULT: '#ebb76a',
      },
      storm:{
        900: '#1F2123',
      },
      success: {
        light: '#f2ffec',
        dark: '#2f8307'
      },
      warning: {
        light: '#fff9f0',
        dark: '#b55308'
      },
      error: {
        light: '#fcf7f7',
        dark: '#bb4141'
      },
      info: {
        light: '#f9f9fb',
        dark: '#535760'
      },
    },
  },
  plugins: [],
}