import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps= state => {
    return {

    }
}

const mapDispatchToProps = {
    
}

export const Button =  connect(mapStateToProps, mapDispatchToProps)(props => (
    <button onClick={props.incrementCount}>Increase Count</button>
))