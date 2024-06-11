import React, { Component } from "react"

import {
  Card,
  CardBody,
  Form,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap"
import { Navigate } from "react-router-dom"

import { CardHead } from "components/Card"
// import { CardBodyTitle } from "components/Titles"
import { InputNormal, InputPassword } from "components/Input"
import { CheckBox } from "components/Controls"
import { FaithAvatar } from "components/Avatars"

import { createAcount } from "api/api_user"
// import ToastRegister from "components/Toasts"
import ReactFlagsSelect from "react-flags-select"
import { faithNameInfo, faithIamgeInfo } from "constant"

class Register extends Component {

  state = {
    // 'result': '',
    'firstName': "",
    'lastName': "",
    'userName': "",
    'password': "",
    'email': "",
    'location': "AU",
    'faith': 'Baha',
    'redirectto': false,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onSelectFlag = (countryCode) => {
    this.setState({ 'location': countryCode })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    createAcount(this.state).then((data) => {
      if (data.error) {
        // this.setState({ 'result': data.error })
        alert(data.error)
      } else if (data.message) {
        // this.setState({ 'result': data.message })
        this.setState({ ...this.state, 'redirectto': true })
      }
    })
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {

    return (
      <main ref="main">
        {this.state.redirectto === true ? (<Navigate to="/login-page" replace={true} />) : (
          <section className="section section-shaped sectionBg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHead title='Sign up with' />
                    <CardBody className="px-lg-5 py-lg-5">
                      {/* <CardBodyTitle title='Or sign up with credentials' /> */}
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <div className="d-flex">
                          <InputNormal title='First Name' icon='ni ni-circle-08' onChange={this.handleChange('firstName')} /> &nbsp; &nbsp;
                          <InputNormal title='Last Name' icon='ni ni-circle-08' onChange={this.handleChange('lastName')} />
                        </div>
                        <InputNormal title='User Name' icon='ni ni-circle-08' onChange={this.handleChange('userName')} />
                        <InputNormal title='Email' icon='ni ni-email-83' onChange={this.handleChange('email')} />
                        {/* <InputNormal title='Country' icon='ni ni-email-83' onChange={this.handleChange('country')} /> */}
                        <ReactFlagsSelect
                          className='input-group-alternative flag'
                          selected={this.state.location}
                          onSelect={this.onSelectFlag}
                        />
                        <div className="my-3">
                          <select value={this.state.faith} className='input-group-alternative select mr-3' style={{ width: '200px' }} onChange={this.handleChange('faith')} >
                            {faithNameInfo.map((name, index) => (
                              <option key={index}>{name}</option>
                            ))}
                          </select>
                          <FaithAvatar src={faithIamgeInfo[this.state.faith]} />
                        </div>
                        <InputPassword onChange={this.handleChange('password')} />
                        <InputPassword />
                        <div style={{ display: 'flex' }}>
                          <CheckBox title='I agree with the ' />
                          <a href="#pablo">&nbsp; Privacy Policy</a>
                        </div>
                        <div className="text-center">
                          <Button color="primary" className="mt-3" type='submit'>Create Acount</Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        )}
        {/* {
          this.state.result && <ToastRegister message={this.state.result} setState={() => this.setState({ 'result': '' })} />
        } */}
      </main>
    )
  }
}

export default Register
