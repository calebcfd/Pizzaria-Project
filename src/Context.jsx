import React from 'react'
import {useState} from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [cart, setCart] = useState([])

    return (
        <Context.Provider value="">
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}