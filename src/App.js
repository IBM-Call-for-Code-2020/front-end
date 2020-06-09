import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, Home, Chat } from 'pages'
import Loading from 'pages/loading'
import 'App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />

        <Route path="/debug/loading" component={Loading} />
      </Switch>
    </>
  )
}

export default App
