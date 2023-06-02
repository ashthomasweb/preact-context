/******************************************************************************
* FILENAME:
*   modal.component.js

* DESCRIPTION:
*  

* NOTES:
*   - 

* (c) Copyright Ashley Thomas
* Usage Rights: Not for public use or redistribution.

******************************************************************************/

import { h } from 'preact';
import { useContext } from 'preact/hooks';

import { Link } from 'preact-router/match';
import style from './style.css';
import { GlobalContext } from '../../context/global/GlobalState'

import {
    /* Assets */
    /* Database */
    /* Helper Functions */
    /* Components */
    /* Icons */
} from '../../export-hub'

const Modal = () => {
    //   const {
    //     state: { display },
    //     dispatch,
    //   } = useContext(MainContext)
    const {
        state: { userObj },
        dispatch,
    } = useContext(GlobalContext)

    const changeAge = () => {
        dispatch({
            type: 'SET_CURRENT_USER_AGE',
            payload: { age: 100 }
        })
    }

    return (
        <div className='modal-test' >
            <h2>Welcome to your Context</h2>
            <span>
                Save your code.
                <br />
                Organize your process.
            </span>
            <span>
                Current User is: { userObj.name}
                Current User Age: { userObj.age}
            </span>
            <button
                onClick={changeAge}
                >
                Become a Centaur!
            </button>
        </div>
    )
}

export default Modal

/* END of document ***********************************************************/
