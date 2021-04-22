import "@fontsource/lekton";
import "@fontsource/exo/400.css";

const breakpoints = ['40em', '52em', '64em', '80em'] // [640px , 832px, 1024px, 1280px]

// aliases
breakpoints.sm = breakpoints[0] // 640px
breakpoints.md = breakpoints[1] // 832px
breakpoints.lg = breakpoints[2] // 1024px
breakpoints.xl = breakpoints[3] // 1280px

export const breakpointsAliases = ["xs", "sm", "md", "lg"];

const fontFamilyPrimary = "Lekton, sans-serif"
const fontFamilySecondary = "Exo, sasn-serif"

const space = [];
for (let i = 0; i <= 200; i++) {
  space[i] = `${i * 4}px`
}
const sizes = space

const pallete = {
  common: {
    black: "#000",
    white: "#fff",
    yellow: ['#F4C271', '#FEB639']
  },
  primary: {
    main: '#3A3C4D',
    contrastText: '#DFE0E9'
  },
  secondary: '#282B3A',
  text: {
    primary: '#DFE0E9',
    secondary: '#94949A',
    input: '#DFE0E9',
    active: '#F4C271'
  },
  button: '#FEB639'
}

const typography = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: {
    primary: fontFamilyPrimary,
    secondary: fontFamilySecondary
  },
  h1: `
      font-family: ${fontFamilyPrimary};
      font-size: 4em;
    `,
  h2: `
      font-family: ${fontFamilyPrimary};
      font-size: 2em;
    `,
  h3: `
      font-family: ${fontFamilyPrimary};
      font-size: 1.5em;
    `,
  h4: `
      font-family: ${fontFamilyPrimary};
      font-size: 1em;
      color: ${pallete.text.secondary};
      font-weight: 600;
    `,
  logo: `
      font-family: ${fontFamilyPrimary};
      font-size: 2em;
    `,
  body: `
      font-family: ${fontFamilySecondary};
      font-size: 1em;
      line-height: 1.4em;
      `,
  input: `
      color: ${pallete.text.input};
      background: none;
      border: none;
      line-height: 1.2em;
      font-size: 1em;
      outline: none;
      font-family: ${fontFamilyPrimary};
      resize: none;
      &::placeholder {
        color: ${pallete.text.secondary}
      }
    `,
  label: `
    font-family: ${fontFamilySecondary};
    line-height: 1.2em;

  `,
  link: `
      color: ${pallete.text.active};
      font-family: ${fontFamilyPrimary};
      text-decoration: underline;
    `,
  button: `
      background-color: ${pallete.button};
      color: ${pallete.secondary};
      font-family: ${fontFamilyPrimary};
      font-size: 1em;
      font-weight: 700;
      border: none;
      padding: 10px 25px;
      border-radius: 10px;
      letter-spacing: 1px;
    `,
  caption: `
      font-family: ${fontFamilySecondary};
      color: ${pallete.text.secondary};
    `,
}

const theme = {
  pallete,
  breakpoints,
  space,
  sizes,
  typography
}

export default theme;


