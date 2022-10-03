import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/primeiro'
//import BomDia from './componentes/BomDia'
//import Multi, {BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

// ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
//ReactDOM.render(<BomDia name="Vitão"/>, document.getElementById('root'))
/*
ReactDOM.render(
    <div>
        <BoaNoite name="Vitão" />
        <Multi.BoaTarde name="Vitão2" />
    </div>
    , document.getElementById('root'))

    */

ReactDOM.render(
    <div>
        <Saudacao tipo="BomDia" nome="joão" />
    </div>
    ,document.getElementById('root')
)