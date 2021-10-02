import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Main from './style'

export default class Dashboard extends Component {
    render() {
        return (
            <Main>
                <Link to='/test'>Testga kirish</Link>
            </Main>
        )
    }
}
