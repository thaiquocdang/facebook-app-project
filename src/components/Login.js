import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../API/StateProvider'
import { actionTypes } from "../API/reducer"

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((err) => alert(err.message) )
    }
    return (
        <div>
            <div className="login">
                <div className="login__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"/>
                    <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Login