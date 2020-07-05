export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
    primary: 'blueviolet',
    secondary: 'blue'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    default: 20,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {
  },
  text: {
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      outline: {
        color: 'primary',
        bg: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'primary',
        borderRadius: 'default'
      },
    },
    secondary: {
      color: 'white',
      bg: 'secondary'
    }
  }
}