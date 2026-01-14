import React from 'react'
import Saludo from './componentes/saludo'

const App = () => {
  console.log('Hola Mundo soy Victor')
  const a =5
  let b = 10
  const fecha = new Date()
  const nombre = "Alan"
  const edad = 19
  console.log('La suma de a + b es', a+b )
  console.log('Fecha actual:', fecha.toDateString())
  return (
    <>
    <h1>Hola Mundo Soy Victor</h1>
    <h2>Hoy estamos a: {fecha.toDateString()}</h2>
      <Saludo nombre="Gabirel" edad="28"/>
      <Saludo nombre={nombre} edad={edad}/>
      <Saludo nombre="Daniela" edad="20"/>
    </>
  )
}

export default App