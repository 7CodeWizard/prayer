import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import { sendEmail } from 'api/api_email'


const ContactUs = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log('value : ', e.target.value)
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_zc4juap', // paste your ServiceID here (you'll get one when your service is created).
        'template_0wlw26u', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Jaron Gaston', // put your name here.
          from_email: form.email,
          to_email: 'jarongaston11020.senior.dev@gmail.com', //put your email here.
          message: form.message,

        },
        'W_CUepI1Vwp6912Ar' //paste your Public Key here. You'll get it in your profile section.

      )
      .then(
        () => {
          alert('Thank you. I will get back to you as soon as possible.')
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          console.log(error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  const handleClick = () => {
    sendEmail('takedaharuhito0914@gmail.com', 'sasuke', 'jackjames5630@gmail.com', 'blaze', 'hello').then((data) => {
      console.log(data)
    })
  }

  return (
    <section className="section section-lg sectionBg pt-lg-0 section-contact-us" >
      <Container style={{ paddingTop: '150px' }}>
        <Row className="justify-content-center">
          <Col lg="8">
            <Card className="bg-gradient-secondary shadow" style={{ borderRadius: '10px' }}>
              <CardBody className="p-lg-5">
                <h4 className="mb-1">Require Assistance?</h4>
                <p className="mt-0">
                  We will try to get back to you, as soon as possible
                </p>
                <Form ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-user-run" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your name"
                        type="text"
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email address"
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="message"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
                {/* <Button onClick={handleClick}>send</Button> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs