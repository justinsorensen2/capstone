import { createContext, useContext } from 'react'

// create the provider
export const UserProfileContext = createContext()

// allow collection of data from the provider
export const useUserProfile = () => useContext(UserProfileContext)
