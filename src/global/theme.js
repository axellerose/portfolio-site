import "@fontsource/lekton"
const breakpoints = ['40em', '52em', '64em', '80em'] // [640px , 832px, 1024px, 1280px]

// aliases
breakpoints.sm = breakpoints[0] // 640px
breakpoints.md = breakpoints[1] // 832px
breakpoints.lg = breakpoints[2] // 1024px
breakpoints.xl = breakpoints[3] // 1280px

export const breakpointsAliases = ["xs", "sm", "md", "lg"];

const fontFamilyPrimary = "Lekton, sans-serif"

const space = [];
for (let i = 0; i <= 200; i++) {
  space[i] = `${i * 4}px`
}
const sizes = space

const pallete = {
  common: {
    black: "#000",
    white: "#fff",
    yellow: ['#F4C271', '#FFC868']
  },
  primary: {
    main: '#3A3C4D',
    contrastText: '#DFE0E9'
  },
  secondary: ['#3A3C4D', '#282B3A'],
  text: {
    primary: '#DFE0E9',
    secondary: '#94949A',
    input: '#DFE0E9'
  },
  button: {
    primary: '#F4C271'
  }
}

const typography = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: {
    primary: fontFamilyPrimary,
  },
  h1: `
      font-family: ${fontFamilyPrimary};
    `,
  h2: `
      font-family: ${fontFamilyPrimary};
 
    `,
  subtitle1: `
      font-family: ${fontFamilyPrimary};
  
    `,
  body1: `
      font-family: ${fontFamilyPrimary};
  
      `,
  body2: `
      font-family: ${fontFamilyPrimary};

      `,
  body3: `
      font-family: ${fontFamilyPrimary};
    `,
  input: `
      color: ${pallete.text.input};
      font-family: ${fontFamilyPrimary};
    `,
  button: `
      color: inherit;
      font-family: ${fontFamilyPrimary};
      
    `,
  caption: `
      font-family: ${fontFamilyPrimary};
      color: ${pallete.text.secondary};
    `,
}

export default {
  pallete,
  breakpoints,
  space,
  sizes,
  typography
}


