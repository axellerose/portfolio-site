const breakpoints = ['40em', '52em', '64em', '80em'] // [640px , 832px, 1024px, 1280px]

// aliases
breakpoints.sm = breakpoints[0] // 640px
breakpoints.md = breakpoints[1] // 832px
breakpoints.lg = breakpoints[2] // 1024px
breakpoints.xl = breakpoints[3] // 1280px


export const breakpointsAliases = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
]

export default {
    breakpoints,
    colors: {
        white: '#FFF',
        yellow: ['#F4C271', '#FFC868'],
        background: [
            '#3A3C4D',
            '#282B3A',
            '#282B3A'
        ],
        text: {
            primary: '#DFE0E9',
            secondary: '#94949A',
        }
    },

    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}


