import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
    
    }
}


export const Header = connect(mapStateToProps)(props => (
    <h1>The Count is: {props.count}</h1>
))