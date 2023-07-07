import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import contextName from '../../context/contextName'
import {Image, But, Div, ImageMeet, Head} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <contextName.Consumer>
        {value => {
          const {InitialName, FieldName, showNames, hlo} = value
          console.log(InitialName, FieldName, showNames)
          return (
            <div>
              <nav>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </nav>
              <Div>
                {showNames ? (
                  <div>
                    <h1>Welcome to Meetup</h1>
                    <p>Please register for the topic</p>
                  </div>
                ) : (
                  <div>
                    <Head>Hello {InitialName}</Head>
                    <p>Welcome to {FieldName}</p>
                  </div>
                )}

                {showNames && (
                  <Link to="/register">
                    <But type="button">Register</But>
                  </Link>
                )}

                <ImageMeet
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </Div>
            </div>
          )
        }}
      </contextName.Consumer>
    )
  }
}

export default Home
