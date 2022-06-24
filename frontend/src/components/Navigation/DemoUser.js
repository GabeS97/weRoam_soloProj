import React from 'react'
import * as actionSesh from '../../store/session'
import { useDispatch } from 'react-redux'
import '../LoginFormModal/LoginForm.css'
import { useHistory } from 'react-router-dom'

const DemoUser = ({ hideForm }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()

        const credential = 'Demo-lition'
        const password = 'password'

        dispatch(actionSesh.login({ credential, password }))
        history.push('/spots')
        hideForm()
    }
    return (
        <button id='demo_button' onClick={handleClick} type="submit">Demo</button>
    )
}

export default DemoUser
