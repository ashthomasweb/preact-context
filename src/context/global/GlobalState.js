// /******************************************************************************
// * FILENAME:
// *   GlobalState.js

// * DESCRIPTION:
// *   Global State File.

// * NOTES:
// *   - 

// * (c) Copyright Ashley Thomas
// * Usage Rights: Not for public use or redistribution.

// ******************************************************************************/

// import { h, createContext } from 'preact'
// import { useReducer, useMemo } from 'preact/hooks'

// import { GlobalReducer } from './GlobalReducer'

// import {
//     /* Assets */
//     /* Database */
//     /* Helper Functions */
//     /* Components */
//     /* Icons */
// } from '../../export-hub'

// /** INITIAL STATE DECLARATION **************************************/

// const initialState = {
//     userObj: {
//         name: 'Ash',
//         age: 39
//     },
// }

// export const GlobalContext = createContext({ initialState, globalDispatch })

// const GlobalState = (props) => {
//     const [state, globalDispatch] = useReducer(GlobalReducer, initialState)

//     // const value = useMemo(
//     //     () => ({
//     //         state,
//     //         globalDispatch,
//     //     }),
//     //     [state]
//     // )

//     return (
//         <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>
//     )
// }

// export default GlobalState

// /* END of document ***********************************************************/

import { createContext } from 'preact'




export const GlobalContext = createContext()