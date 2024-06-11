import React from "react"
import { Link, Navigate } from "react-router-dom"
import { Button, Card, CardBody, Form, Container, Row, Col, } from "reactstrap"
import { CardHead } from "components/Card"
import { InputNormal, InputPassword } from "components/Input"
import { CheckBox } from "components/Controls"
// import { CardBodyTitle } from "components/Titles"
import { signIn } from "api/api_user"
import auth from "components/auth/authHelper"
import HCaptcha from "./HCaptcha"

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }

  state = {
    'email': '',
    'password': '',
    'flag': false,
    'token': null,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    signIn(this.state).then((data) => {
      if (data.error) { alert(data.error) }
      if (data.token) {
        auth.authenticate('jwt', data)
        this.setState({ flag: true })
      }
    })
  }

  render() {

    const CardFooter = () => (
      <Row>
        <Col xs="6">
          <Button color="link" className="text-light" >
            <small>Forgot password?</small>
          </Button>
        </Col>
        <Col className="text-right" xs="6">
          <Button color="link" className="text-light" to='/register-page' tag={Link} >
            <small>Create new account</small>
          </Button>
        </Col>
      </Row>
    )
    if (this.state.flag === true) { return <Navigate to="/landing-page" replace={true} /> }

    return (
      <main ref="main">
        <section className="section section-shaped sectionBg">
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHead title='Sign in with' />
                  <CardBody className="px-lg-5 py-lg-5">
                    {/* <CardBodyTitle title='Or sign in with credentials' /> */}
                    <Form role="form" onSubmit={this.handleSubmit}>
                      <InputNormal title='Email' icon='ni ni-email-83' onChange={this.handleChange('email')} />
                      <InputPassword onChange={this.handleChange('password')} />
                      <CheckBox title='Remember me' />
                      <HCaptcha setToken={(hcaptcha) => this.setState({ token: hcaptcha })} />
                      <div className="text-center">

                        <Button className="my-4" color="primary" type="submit" disabled={!this.state.token}>
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <CardFooter />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    )
  }
}

export default Login
