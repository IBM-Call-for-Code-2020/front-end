import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, Home, Chat } from './page'
import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </>
  )
}

export default App
