import React, { useState } from 'react'
import { Button, Card, CardBody, Col, } from 'reactstrap'

import { colorInfo } from 'constant'
import { ModalContribute } from 'components/Modals'
import auth from 'components/auth/authHelper'
import { Link } from 'react-router-dom'
import { deleteCard } from 'api/api_prayer'
import { FaTrash } from 'react-icons/fa'

const PrayerCard = ({ data, index, setFlag, flag }) => {
  const [state, setState] = useState(false)
  const [data1, setData1] = useState(data)
  const jwt = auth.isAuthenticated()

  const handleDelete = (id) => {
    deleteCard(id).then((data) => {
      setFlag(!flag)
    })
  }

  return (
    <Col lg="4">
      <Card className="card-lift--hover shadow border-0 my-3 border" >
        <CardBody className="py-5 text-center">
          <h6 className={`text-${colorInfo[index % 6]} text-uppercase`}>
            {data1.title}
          </h6>
          <div className="shadow-lg w-auto imgCover" style={{ height: '200px', backgroundImage: `url(http://localhost:5000/api/prayer/photo/${data1._id})` }}> </div>
          {jwt && jwt.user._id ?
            <>
              {jwt.user._id === data1.postedBy || jwt.user._id === data1.postedBy._id ?
                <Button
                  className="mt-4"
                  color={colorInfo[index % 6]}
                  onClick={() => setState(true)}
                >
                  {data1.type === 'prayer' ? 'My Prayer' : 'My Meditation'}
                </Button> : <>
                  {!data.feed ? <Button
                    className="mt-4"
                    color={colorInfo[index % 6]}
                    onClick={() => setState(true)}
                  >
                    Contribute
                  </Button> : <Button
                    className="mt-4"
                    color={colorInfo[index % 6]}
                    disabled
                  >
                    Finished
                  </Button>}
                </>
              }
            </> : <Button className="mt-4" color='success' to='/login-page' tag={Link}>Login</Button>
          }
          {jwt && <ModalContribute data={data1} state={state} setState={setState} color={colorInfo[index]} />}
          {jwt && jwt.user._id === data1.postedBy._id && <span className='ni text-red float-right' style={{ marginTop: '30px', fontSize: '20px' }} onClick={() => handleDelete(data1._id)}><FaTrash /></span>}
        </CardBody>
      </Card>
    </Col>
  )
}

export default PrayerCard