// import "@fontsource/lekton";
// import "@fontsource/exo/400.css";
import "@fontsource/quicksand";
import { between } from 'polished';

const breakpoints = ['40em', '52em', '64em', '80em'] // [640px , 832px, 1024px, 1280px]

// aliases
breakpoints.sm = breakpoints[0] // 640px
breakpoints.md = breakpoints[1] // 832px
breakpoints.lg = breakpoints[2] // 1024px
breakpoints.xl = breakpoints[3] // 1280px

export const breakpointsAliases = ["xs", "sm", "md", "lg"];

const fontFamilyPrimary = `
  font-family: "Quicksand";
  font-weght: 400;
`
const fontFamilySecondary = `
  font-family: "Quicksand";
  font-weght: 700;
`

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
      ${fontFamilyPrimary};
      font-size: 4em;
    `,
  h2: `
      ${fontFamilyPrimary};
      font-size: ${between('28px', '64px', '400px', '1500px')};
    `,
  h3: `
      ${fontFamilyPrimary};
      font-size: ${between('24px', '32px', '400px', '1500px')};
    `,
  h4: `
      ${fontFamilySecondary};
      font-size: ${between('16px', '24px', '400px', '1500px')};
      color: ${pallete.text.secondary};
    `,
  logo: `
      ${fontFamilyPrimary};
      font-size: 2em;
    `,
  body: `
      ${fontFamilySecondary};
      font-size: ${between('16px', '22px', '400px', '1500px')};
      line-height: 1.4em;
      `,
  input: `
      color: ${pallete.text.input};
      background: none;
      border: none;
      line-height: 1.2em;
      font-size: 1em;
      outline: none;
      ${fontFamilyPrimary};
      resize: none;
      &::placeholder {
        color: ${pallete.text.secondary}
      }
    `,
  label: `
    ${fontFamilySecondary};
    line-height: 1.2em;

  `,
  link: `
      color: ${pallete.text.active};
      ${fontFamilyPrimary};
      text-decoration: underline;
      font-size: 1.25em;
    `,
  button: `
      background-color: ${pallete.button};
      color: ${pallete.secondary};
      ${fontFamilyPrimary};
      font-size: 1em;
      font-weight: 700;
      border: none;
      padding: 10px 25px;
      border-radius: 10px;
      letter-spacing: 1px;
    `
}

const theme = {
  pallete,
  breakpoints,
  space,
  sizes,
  typography
}

export default theme;


