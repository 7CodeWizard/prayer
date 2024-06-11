import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, Table } from 'reactstrap'
import { FaTrash } from 'react-icons/fa'

import ReactFlagsSelect from 'react-flags-select'
import auth from 'components/auth/authHelper'
import { FaithAvatar } from 'components/Avatars'
import { faithIamgeInfo } from 'constant'
import { read } from 'api/api_user'
import { uncomment } from 'api/api_user'
import { colorInfo } from 'constant'
import { ModalContribute1 } from 'components/Modals'
import { prayerOne } from 'api/api_prayer'
import { energy } from 'assets'


const TableUser = ({ data, prayerData }) => {

  const [userId, setUserId] = useState('')

  const handleClick = (selUserId) => {
    setUserId(selUserId._id ? selUserId._id : selUserId)
  }


  const jwt = auth.isAuthenticated()

  return (
    <>
      {
        userId === jwt.user._id ? <Navigate to={`/profile-page`} replace={true} /> :
          userId && <Navigate to={`/person-page/${userId}`} replace={true} />
      }
      <Table borderless hover>
        <thead className='bg-green'>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>UserName</th>
            <th>Faith</th>
            {prayerData.type === 'meditation' && <th>Start</th>}
            {prayerData.type === 'meditation' && <th>Contribute</th>}
            <th>Flag</th>
            {/* {id === jwt.user._id && <th>Feed</th>} */}
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#ddd' }}>
          {data.map((item, index) => {
            return (
              <tr key={index} >
                {prayerData.type === 'prayer' ? <th scope="row">✋</th> : <th scope="row">🙏</th>}
                <td onClick={() => handleClick(item.postedBy)}>
                  <img
                    className='rounded-circle '
                    style={{ width: '30px', height: '30px' }}
                    alt='...'
                    src={`http://localhost:5000/api/userInfo/photo/${item.postedBy._id ? item.postedBy._id : item.postedBy}`} />
                </td>
                <td onClick={() => handleClick(item.postedBy)}><u>{item.userName}</u></td>
                <td><FaithAvatar src={faithIamgeInfo[item.faith]} /></td>
                {prayerData.type === 'meditation' && <td style={{ padding: '0', paddingTop: '16px' }} >{item.date[8]}{item.date[9]}/{item.date[5]}{item.date[6]}/{item.date[0]}{item.date[1]}{item.date[2]}{item.date[3]}  ({item.date[11]}{item.date[12]}:{item.date[14]}{item.date[15]})</td>}
                {prayerData.type === 'meditation' && <td>{item.num}  <img style={{ width: '25px', height: '25px' }} src={energy} alt='energy' /></td>}
                <td>
                  <div className="itemCenter">
                    <ReactFlagsSelect className="flag" selected={item.location} disabled />
                  </div>
                </td>
                {/* {id === jwt.user._id &&
                  <td>

                    {
                      item.feed ?
                        <>{item.feed} </> :
                        <>
                          <Badge className='float-right' color="primary" id={`toggler${index}`} pill onClick={function noRefCheck() { }}>
                            feed
                          </Badge>
                          <UncontrolledCollapse toggler={`#toggler${index}`} className='itemCenter mt-3' style={{ width: '140px' }}>
                            <Input className='w-100' type='text' onChange={handleChange} />
                            <Badge className='float-right' color='danger' onClick={() => handleSubmit(item, index)} >Send</Badge>
                          </UncontrolledCollapse>
                        </>
                    }
                  </td>
                } */}

              </tr>)
          })}
        </tbody>
      </Table>
    </>
  )

}

const TableFeed = () => {

  const [feeds, setFeeds] = useState([])
  const [state, setState] = useState(false)
  const [data, setData] = useState()
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    read({
      id: jwt.user._id
    }, {
      t: jwt.token
    }).then((data) => {
      setFeeds(data.comments)
    })
  }, [])

  const handleDelete = (item) => {
    uncomment({ userId: jwt.user._id }, item).then((data) => {
      setFeeds(data.comments)
    })
  }

  const handleClick = (dataId) => {
    prayerOne(dataId).then((data) => {
      setData(data)
      setState(true)
    })
  }

  return (
    feeds.length > 0 &&
    <Container>
      <Table borderless hover>
        <thead className='bg-green'>
          <tr>
            <th style={{ width: '10%' }}>#</th>
            <th style={{ width: '10%' }} >From UserName</th>
            <th style={{ width: '50%', height: 'auto' }}>Feed Content</th>
            <th style={{ width: '20%' }}>Contribute Title</th>
            <th style={{ width: '10%' }}>Delete</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#ddd' }}>
          {feeds?.map((item, index) => {
            return (
              <tr key={index} >
                <td style={{ width: '10%' }} scope="row" onClick={() => handleClick(item.dataId)}>{index + 1}</td>
                <td style={{ width: '10%' }} onClick={() => handleClick(item.dataId)}>{item.userName}</td>
                <td style={{ width: '50%', height: 'auto', maxWidth: '400px' }} onClick={() => handleClick(item.dataId)}>
                  {item.feed}
                </td>
                <td style={{ width: '20%' }} onClick={() => handleClick(item.dataId)}>{item.title}</td>
                <td style={{ width: '10%', color: 'red' }} onClick={() => handleDelete(item)}>
                  <FaTrash />
                </td>
              </tr>)
          })}
        </tbody>
      </Table>
      {data && <ModalContribute1 data={data} state={state} setState={setState} color={colorInfo[1]} />}
    </Container>
  )
}

export { TableUser, TableFeed }