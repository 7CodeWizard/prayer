import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form, } from 'reactstrap'

import { BackgroundDefault } from 'components/Background'
import { InputNormal } from 'components/Input'
import { create } from 'api/api_prayer'
import FileUpload from './Upload'
import auth from 'components/auth/authHelper'

const AddContribute = () => {

  const [data, setData] = useState({
    title: '',
    type: 'prayer',
    photo: '',
    description: '',
  })

  const jwt = auth.isAuthenticated()
  const navigate = useNavigate()

  const handleChange = name => event => {
    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let prayerData = new FormData();
    prayerData.append('title', data.title)
    prayerData.append('type', data.type)
    prayerData.append('description', data.description)
    prayerData.append('photo', data.photo)
    create({ id: jwt.user._id }, { t: jwt.token }, prayerData).then((data) => {
      if (data) {
        // alert("Successfully")
        navigate('/landing-page')
      }
    })
  }

  return (
    <section className='section section-shaped' style={{ paddingTop: '150px', height: 'auto' }}>
      <BackgroundDefault />
      <Container className='p-5'>
        <Card className='p-5 h-100 flexCol text-center' style={{ background: '#f1f1f1', }}>
          <div>
            <p className='text-success h1'>Create New Contribute</p>
          </div>
          <Form role="form" onSubmit={handleSubmit}>
            <InputNormal title='Title' icon='ni ni-support-16' onChange={handleChange('title')} />
            <div className='text-center'>
              <select className='input-group-alternative select' defaultValue={'prayer'} onChange={handleChange('type')} >
                <option>prayer</option>
                <option>meditation</option>
              </select>
            </div>
            <FileUpload onChange={handleChange('photo')} required />
            <textarea placeholder='Description' className='textarea border my-3' onChange={handleChange('description')} required >
            </textarea>
            <div>
              <Button className='float-right' color='danger' type='submit'>Submit</Button>
            </div>
          </Form>
        </Card>
        {/* <GoogleSignIn /> */}
        {/* <MyHCaptcha /> */}
      </Container>
    </section>
  )
}

export default AddContribute