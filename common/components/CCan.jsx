import { createContext } from 'react'
import { createContextualCan } from '@casl/react'

export const AbilityContext = createContext()
export const CCan = createContextualCan(AbilityContext.Consumer)
