import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Button, Modal,
  Card, CardHeader, CardBody,
  Form,
  Container,
  Input,
  UncontrolledTooltip,
} from "reactstrap"
import {
  FacebookShareButton, TwitterShareButton,
  LinkedinShareButton, InstapaperShareButton, InstapaperIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share'
import ReactFlagsSelect from 'react-flags-select'

import { update } from 'api/api_user'

import { InputNormal } from 'components/Input'
import { ProfileAvatar } from 'components/Avatars'
import { NameBtn } from 'components/Buttons'
import FileUpload from 'views/examples/Upload'
import auth from 'components/auth/authHelper'
import { energys } from 'api/api_prayer'
import { TableUser } from 'components/Tables'
import { FaithAvatar } from 'components/Avatars'
import { faithIamgeInfo, faithNameInfo } from 'constant'
import { ribbon } from 'assets'
import { comments } from 'api/api_user'
import { prayerUpdate } from 'api/api_prayer'

const ModalHelp = () => {

  const [state, setState] = useState(true)

  return (
    <Modal
      className="modal-dialog-centered"
      toggle={() => setState(false)}
      isOpen={state}

    >
      <div className='modalHelp' style={{ borderRadius: '0.3rem' }}>
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-notification" style={{ color: '#f1f1f1' }}>
            Welcome To The Global Healing Consciousness Program
          </h6>
          <Button
            color='link'
            aria-label="Close"
            className="close"
            onClick={() => { setState(false) }}
          >
            <span aria-hidden={true}>×</span>
          </Button>
        </div>
        <div className="modal-body">
          <div className="py-3 text-center">
            <i className="ni ni-bell-55 ni-3x" />
            <h4 className="heading mt-4" style={{ color: '#f1f1f1' }}>This is an organization from the people for the people.</h4>
            <p>
              We provide a platform for prayer requests and direct meditation focus groups.
            </p>
            <p>
              Like all great changes, share our consciousness project with others.
            </p>
            <p>
              Greetings and Thank You
            </p>
            <p>
              GHCP runs off Donations.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

const ModalProfile = ({ person, setUser }) => {

  const [state, setState] = useState(false)
  const [selected, setSelected] = useState()


  const [values, setValues] = useState({})
  const jwt = auth.isAuthenticated()

  const clickSubmit = (e) => {
    e.preventDefault()
    let userData = new FormData()
    values.firstName && userData.append('firstName', values.firstName)
    values.lastName && userData.append('lastName', values.lastName)
    values.userName && userData.append('userName', values.userName)
    selected && userData.append('location', selected)
    values.email && userData.append('email', values.email)
    values.faith && userData.append('faith', values.faith)
    values.photo && userData.append('photo', values.photo)
    update({
      id: jwt.user._id
    }, {
      t: jwt.token
    }, userData).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, 'redirectToProfile': true })
        setUser(data)
        window.location.assign('/profile-page')
      }
      setState(false)
    })
  }

  const handleChange = name => event => {
    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value
    setValues({ ...values, [name]: value })
  }

  const onSelectFlag = (countryCode) => {
    setSelected(countryCode)
  }

  useEffect(() => {
    person.faith = person.faith ? person.faith : 'Christian'
    delete person.photo
    setSelected(person.location ? person.location : 'US')
    setValues(person)
  }, [person])

  return (
    <div className="card-profile-actions pb-4">
      <Button className="btn-1 ml-1 float-right" color="warning" type="button" onClick={() => setState(true)}>
        Edit Profile
      </Button>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={state}
        toggle={() => setState(false)}
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white pt-4 text-center">
              <h3 className="h3 text-success font-weight-bold">Edit Profile</h3>
            </CardHeader>
            <CardBody style={{ padding: '40px 80px' }}>
              <Form role="form" onSubmit={clickSubmit} >
                <InputNormal value={values.userName} title='User Name' icon='ni ni-circle-08' onChange={handleChange('userName')} />
                <InputNormal value={values.email} title='Email' icon='ni ni-email-83' onChange={handleChange('email')} />
                <FileUpload onChange={handleChange('photo')} />
                <div className='d-flex' style={{ justifyContent: 'space-around' }}>
                  <InputNormal value={values.firstName} title='First Name' icon='ni ni-circle-08' onChange={handleChange('firstName')} />
                  <InputNormal value={values.lastName} title='Last Name' icon='ni ni-circle-08' onChange={handleChange('lastName')} />
                </div>
                <div className='d-flex' style={{ justifyContent: 'space-around' }}>
                  <ReactFlagsSelect
                    className='input-group-alternative'
                    selected={selected}
                    onSelect={onSelectFlag}
                  />
                  <div >
                    <select value={values.faith} className='input-group-alternative select mr-3' style={{ width: '170px' }} onChange={handleChange('faith')} >
                      {faithNameInfo.map((name, index) => (
                        <option key={index}>{name}</option>
                      ))}
                    </select>
                    <FaithAvatar src={faithIamgeInfo[values.faith]} />
                  </div>
                </div>
                <div className='text-right px-5 mt-5'>
                  <Button className="btn-1 ml-1" color="success" type="submit" onClick={clickSubmit}>
                    Confirm
                  </Button>
                  <Button className="btn-1 ml-1" color="danger" type="button" onClick={() => setState(false)}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Modal>
    </div>
  )
}

const ModalUserData = ({ data, state, setState }) => (
  <Modal
    className="modal-dialog-centered"
    size="lg"
    isOpen={state}
    toggle={() => setState(false)}
  >
    <div className="modal-header">
      <h6 className="modal-title" id="modal-title-default">
        {data.userName} 's Profile
      </h6>
      <span className="ni ni-fat-remove lead mt-0" onClick={() => setState(false)} />
    </div>
    <div className="modal-body">
      <div className='itemCenter'>
        <ProfileAvatar avatar={data.avatar} />
      </div>
      <div className="text-center pt-2">
        <h3>
          User Name : <b>{data.userName}</b> <br />
        </h3>
        <div className="h6 font-weight-300">
          Location : <b>{data.location}</b>
        </div>
      </div>
    </div>
    <div className="modal-footer">
      <Button
        className="ml-auto"
        color="primary"
        onClick={() => setState(false)}
      >
        OK
      </Button>
    </div>
  </Modal>
)

const ModalContribute = ({ data, state, setState, color }) => {

  const [handFlag, setHandFlag] = useState(false)
  const [social, setSocial] = useState(false)
  const [total, setTotal] = useState(data.energys.length)
  const jwt = auth.isAuthenticated()
  const [contributions, setContributions] = useState(data && data.energys)
  const [text, setText] = useState('')
  const [data1, setData1] = useState(data)

  const [energy, setEnergy] = useState({
    num: Number,
    date: String,
  })

  const handleChange = (event) => {
    setEnergy({ ...energy, [event.target.name]: event.target.value })
    console.log(energy)
  }

  const handlePrefer = () => {
    console.log('data : ', energy)
    energys({
      userId: jwt.user._id
    }, energy, data._id, jwt.user.userName, jwt.user.location, jwt.user.faith).then((data) => {
      let temp = data.energys
      setContributions(temp)
      setHandFlag(false)
      setTotal(data.energys.length)
    })
  }

  const handleSocial = () => {
    setSocial(true)
  }

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    const uniqueData = contributions.reduce((acc, curr) => {
      if (!acc.some(item => item.userName === curr.userName)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    uniqueData.map((item) => {
      comments({ userId: jwt.user._id }, data._id, { feed: text }, item.postedBy._id, data.title, jwt.user.userName,)
    })
    prayerUpdate(data._id, text).then((data) => {
      setData1(data)
    })
  }

  useEffect(() => {
    setContributions(data && data.energys)
  }, [data])

  let totalEnergy = 0
  contributions.map((item) => {
    totalEnergy += item.num
  })

  const isOlderThanTwoWeeks = (createdAt) => {
    const now = new Date();
    const twoWeeksAgo = new Date(now.setDate(now.getDate() - 14));
    return new Date(createdAt) < twoWeeksAgo;
  };

  return (
    <Modal
      className="modal-dialog-centered"
      style={{ borderRadius: '30px' }}
      size="lg"
      isOpen={state}
      toggle={() => setState(false)}
    >
      <Container className={`p-5 text-center text-${color} `}>
        <Button color="link" id={`toggler`} className='ribbonBtn'>
          <img style={{ width: '50px', rotate: "30deg" }} src={ribbon} alt='' />
        </Button>
        <div className='my-2'>
          <NameBtn title={data.userName} color={color} />
          <b className='h2'>{data.title}</b>
        </div>
        <img className='w-100 border' src={`http://localhost:5000/api/prayer/photo/${data._id}`} alt='...' />
        <div className='mt-5 d-flex'>
          <div className='mr-3 itemCenter'>
            <span color='info'>Total {data.type === 'prayer' ? 'Prayers' : 'Energy'} <br /> <b style={{ fontSize: '20px' }}> {data.type === 'prayer' ? total : totalEnergy}</b></span>
          </div>
          <div className='w-100'>
            <h2>Request</h2>
            <p className='h5 p-2 border' style={{ height: '150px', overflow: 'auto' }}>
              {data.description}
            </p>
          </div>
        </div>
        {(jwt.user._id === data.postedBy._id && isOlderThanTwoWeeks(data.created)) &&
          <>
            {data1.feed ? <div><h2>Feedback</h2><p className='h5 p-2 border' style={{ height: '150px', overflow: 'auto' }}>
              {data1.feed}
            </p></div> :
              <div className='w-100 d-flex'>
                <Input
                  placeholder="Your feedBack"
                  type="text"
                  name='feedBack'
                  onChange={handleText}
                />
                <Button color='danger' onClick={handleSubmit}>send</Button>
              </div>
            }
          </>
        }

        <div className='my-4'>
          {jwt ?
            <>
              {(jwt.user._id === data.postedBy || jwt.user._id === data.postedBy._id) ? <></> : < Button color='success' onClick={() => { setHandFlag(true); data.type === 'prayer' && handlePrefer() }}>{data.type === 'prayer' ? '✋ Raise Hand' : '🙏 Meditate'}</Button>}
              <Button color='warning' onClick={handleSocial}>Share the love?</Button>
            </> :
            <Button color='success' to='/login-page' tag={Link}>Login</Button>
          }
        </div>
        {handFlag && data.type === 'meditation' &&
          <div className='itemCenter mb-4'>
            <input type='datetime-local' name='date' className='datePicker' onChange={handleChange} />
            <Input type='number' name='num' style={{ width: '100px' }} onChange={handleChange} placeholder='0' />
            <Button color='danger' onClick={handlePrefer}>Send</Button>
          </div>
        }
        {
          contributions[0] && <TableUser data={contributions} setData={setContributions} id={data.postedBy._id} prayerData={data} />
        }
      </Container>
      <ModalSocial state={social} setState={setSocial} />
    </Modal>
  )
}

const ModalContribute1 = ({ data, state, setState, color }) => {

  const [social, setSocial] = useState(false)
  const [total, setTotal] = useState(data.energys.length)
  const [contributions, setContributions] = useState(data && data.energys)

  useEffect(() => {
    setContributions(data && data.energys)
  }, [data])


  let totalEnergy = 0
  contributions.map((item) => {
    totalEnergy += item.num
  })

  return (
    <Modal
      className="modal-dialog-centered"
      style={{ borderRadius: '30px' }}
      size="lg"
      isOpen={state}
      toggle={() => setState(false)}
    >
      <Container className={`p-5 text-center text-${color} `}>
        <Button color="link" id={`toggler`} className='ribbonBtn'>
          <img style={{ width: '50px', rotate: "30deg" }} src={ribbon} alt='' />
        </Button>
        <div className='my-2'>
          <NameBtn title={data.userName} color={color} />
          <b className='h2'>{data.title}</b>
        </div>
        <img className='w-100 border' src={`http://localhost:5000/api/prayer/photo/${data._id}`} alt='...' />
        <div className='mt-5 d-flex'>
          <div className='mr-3 itemCenter'>
            <span color='info'>Total {data.type === 'prayer' ? 'Prayers' : 'Energy'} <br /> <b style={{ fontSize: '20px' }}> {data.type === 'prayer' ? total : totalEnergy}</b></span>
          </div>
          <div className='w-100'>
            <h2>Request</h2>
            <p className='h5 p-2 border' style={{ height: '150px', overflow: 'auto' }}>
              {data.description}
            </p>
          </div>
        </div>
        <>
          {data.feed && <div><h2>Feedback</h2><p className='h5 p-2 border' style={{ height: '150px', overflow: 'auto' }}>
            {data.feed}
          </p></div>
          }
        </>
      </Container>
      <ModalSocial state={social} setState={setSocial} />
    </Modal>
  )
}

const ModalPaypal = () => {

  const [state, setState] = useState(false)

  const handleApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      alert('Transaction completed by ' + details.payer.name.given_name);

      const transactionData = {
        orderID: data.orderID,
        payerID: data.payerID,
        paymentID: details.id
      };

      // Send transaction details to your server
      axios.post('http://localhost:5000/paypal-transaction-complete', transactionData)
        .then(response => {
          console.log('Transaction saved:', response.data);
        })
        .catch(error => {
          console.error('Error saving transaction:', error);
        });
    });
  };

  return (
    <>
      <Button color='warning' onClick={() => setState(true)}>Donate</Button>
      <Modal
        className="modal-dialog-centered"
        isOpen={state}
        toggle={() => setState(false)}
      >
        <div className="modal-body mt-4">
          <PayPalScriptProvider
            options={{
              "client-id": "AVnZkvL0g3QQw5WhmU-XXgQ3TZndS3mj1XA2HJGXVHqT-5vQPNcYmZzyVXXDlB9h97HD3MuybUl_d_pT",
              "disable-funding": "paylater"
            }}
          >
            <PayPalButtons
              style={{ layout: 'vertical', color: 'blue', }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: "10.00" // Can reference variables or functions. Example: 5.00 * quantity
                    }
                  }]
                });
              }}
              onApprove={handleApprove}
            />
          </PayPalScriptProvider>
        </div>
      </Modal>
    </>
  )
}

const ModalSocial = ({ state, setState }) => {

  const [data, setData] = useState('http://localhost:3000/profile-page')
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(data);
      alert('Copied!')
    } catch (error) {
    }
  }
  const url = 'Your domain address'
  const title = 'My website'

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        isOpen={state}
        toggle={() => setState(false)}
      >
        <Container className={`p-5`}>
          <h3>Share</h3>
          <hr className='mt-0' />
          <div className='m-4' style={{ justifyContent: 'space-between' }}>
            <div className="social-share-buttons" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={50} round />
              </FacebookShareButton>

              <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={50} round />
              </TwitterShareButton>

              <LinkedinShareButton url={url} title={title} summary={title} source={url}>
                <LinkedinIcon size={50} round />
              </LinkedinShareButton>
              <InstapaperShareButton url={url} title={title} summary={title} source={url}>
                <InstapaperIcon size={50} round />
              </InstapaperShareButton>
            </div>
            <UncontrolledTooltip delay={0} target="tooltip475038074">
              Follow us
            </UncontrolledTooltip>
          </div>
          <div>
            <p className='h5 p-2 border' style={{ height: '55px', overflow: 'auto', marginTop: '40px' }}>
              {url}
              <Button color='primary float-right' style={{ padding: '7px', borderRadius: '23px' }} onClick={copyToClipboard} >copy</Button>
            </p>
          </div>
        </Container>
      </Modal>
    </>
  )
}
export { ModalHelp, ModalPaypal, ModalProfile, ModalUserData, ModalContribute, ModalContribute1, ModalSocial }