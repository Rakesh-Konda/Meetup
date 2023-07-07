import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import contextName from './context/contextName'
import Home from './components/Home'
import './App.css'
import Register from './components/Register'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {InitialName: '', FieldName: 'Arts and Culture', showNames: true}

  Name = name => {
    this.setState({InitialName: name})
  }

  field = Fed => {
    this.setState({FieldName: Fed})
  }

  hlo = showNames => {
    this.setState({showNames: !showNames})
  }

  render() {
    const {InitialName, FieldName, showNames} = this.state
    return (
      <contextName.Provider
        value={{
          Name: this.Name,
          field: this.field,
          hlo: this.hlo,
          InitialName,
          FieldName,
          showNames,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </contextName.Provider>
    )
  }
}

export default App
