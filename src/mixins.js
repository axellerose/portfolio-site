import { css } from "styled-components"
import { breakpointsAliases } from "./theme"

export const down = breakpointsAliases.reduce((acc, bp) => {
    acc[bp] = (strings, ...args) => css`
    @media (max-width: ${props => props.theme.breakpoints[bp]}) {
      ${css(strings, ...args)}
    }
  `
    return acc
}, {})

export const up = breakpointsAliases.reduce((acc, bp) => {
    acc[bp] = (strings, ...args) => css`
    @media (min-width: ${props => props.theme.breakpoints[bp]}) {
      ${css(strings, ...args)}
    }
  `
    return acc
}, {})
