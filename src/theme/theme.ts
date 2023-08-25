import { colors } from "./colors"
import { ColorTypes } from "./colors"

type ThemeTypes = {
  colors: ColorTypes
}

export const theme = {
  colors:  { ...colors }
}