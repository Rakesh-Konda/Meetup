import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import contextName from '../../context/contextName'
import {DivR, DivI, Input, LableT, RBut, Para} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {show: false, name: '', show1: false, Fed: topicsList[0].displayText}

  Name = event => {
    this.setState({name: event.target.value})
  }

  Register = (Name, field, hlo, showNames) => event => {
    event.preventDefault()
    const {name, Fed} = this.state
    Name(name)
    field(Fed)
    hlo(showNames)
    if (name === '') {
      this.setState({show: true})
    } else if (name !== '') {
      this.setState({show1: true})
      const {history} = this.props
      history.replace('/')
    }
  }

  Vac = event => {
    this.setState({Fed: event.target.value})
  }

  render() {
    const {Fed} = this.state
    console.log(Fed)
    return (
      <contextName.Consumer>
        {value => {
          const {Name, field, hlo, showNames} = value
          const {show, show1} = this.state
          return (
            <DivR>
              <nav>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </nav>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </div>
              <form
                onSubmit={event =>
                  this.Register(Name, field, hlo, showNames)(event)
                }
              >
                <h1>Let us join</h1>
                <DivI>
                  <label htmlFor="name">NAME</label>
                  <Input
                    onChange={this.Name}
                    type="text"
                    id="name"
                    placeholder="Your name"
                  />
                </DivI>
                <DivI>
                  <LableT htmlFor="Fed">TOPICS</LableT>
                  <select id="Fed" onChange={this.Vac} value={Fed}>
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </DivI>
                <RBut type="submit">Register Now</RBut>
                {show && <Para>Please enter your name</Para>}
              </form>
            </DivR>
          )
        }}
      </contextName.Consumer>
    )
  }
}

export default Register
