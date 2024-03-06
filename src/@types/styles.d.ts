import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// guardandos os valores do default theme dentro da variável ThemeType
type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
