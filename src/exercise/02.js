// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorage = () => {
  function getItem(key) {
    return window.localStorage.getItem(key)
  }

  function setItem(key, value) {
    window.localStorage.setItem(key, value)
  }

  return {getItem, setItem}
}

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const {getItem, setItem} = useLocalStorage()
  const extraCredit = () => getItem('name') ?? initialName
  const [name, setName] = React.useState(extraCredit())

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() => {
    // your side-effect code here.
    // this is where you can make HTTP requests or interact with browser APIs.
    setItem('name', name)
  })

  function handleChange(event) {
    setName(event.target.value)
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
  return <Greeting />
}

export default App
