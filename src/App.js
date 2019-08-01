import React from 'react'
import { Button } from './Button'
import { Header } from './Header'

export default class App extends React.Component{

    render(){
        return (
            <div>
                <Header />
                <Button />
            </div>
        )
    }

}