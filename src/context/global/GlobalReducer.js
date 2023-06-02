/******************************************************************************
* FILENAME:
*   GlobalReducer.js

* DESCRIPTION:
*   Global reducer for React useContext/Reducer Hook pattern.

* NOTES:
*   - 

* (c) Copyright Ashley Thomas
* Usage Rights: Not for public use or redistribution.

******************************************************************************/
import {
    /* Assets */
    /* Database */
    /* Helper Functions */
    /* Components */
    /* Icons */
} from '../../export-hub'

export const initialGlobalState = {
    userObj: {
        name: 'Ash',
        age: 39
    },
}

export const GlobalReducer = (state = initialGlobalState, action) => {

    switch (action.type) {

        case 'SET_CURRENT_USER_AGE': {
            console.log(`Trace: SET_CURRENT_USER_AGE()`)
            let userObj = {
                ...userObj,
                age: action.payload.age
            }
            return {
                ...state,
                userObj
            }
        }

        default: {
            return state
        }
    }
}

/* END of document ***********************************************************/