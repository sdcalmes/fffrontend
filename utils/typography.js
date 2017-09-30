import Typography from 'typography'
import theme from 'typography-theme-fairy-gates'
import CodePlugin from 'typography-plugin-code'

theme.plugins = [new CodePlugin()]

//const typography = new Typography(theme)

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography