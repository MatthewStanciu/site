import { map } from 'lodash'

export const mx = map(
  ['(min-width:40em)', '(min-width:52em)', '(min-width:64em)'],
  w => `@media screen and ${w}`
)
