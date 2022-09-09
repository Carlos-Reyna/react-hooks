// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({nameProp = 'Ken'}) {
  const [name, setName] = React.useState(nameProp? nameProp: '')

  function handleChange(event) {
    console.log(event);
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting nameProp='Ken'/>
}

export default App
