import React, { useEffect, useState } from 'react'
import { Nav, NavItem, NavLink, Card, CardBody, TabContent, TabPane, Row, Container } from 'reactstrap'
import classnames from 'classnames'

import { tabInfo } from 'constant'
import PrayerCard from 'components/Card/PrayerCard'
import { listId } from 'api/api_prayer'
import { prayerList } from 'api/api_prayer'
import auth from 'components/auth/authHelper'
import { dove } from 'assets'
import { meditate } from 'assets'

const PrayerTabs = ({ id }) => {

    const [plainTabs, setPlainTabs] = useState(0)

    const toggleNavs = (e, state, index) => {
        e.preventDefault()
        setPlainTabs(index)
    }

    const [contribute, setContribute] = useState({
        prayers: [],
        meditations: []
    })

    const [flag, setFlag] = useState(true)

    const jwt = auth.isAuthenticated()


    useEffect(() => {
        id ? listId(id).then((data) => {
            let temp1 = [], temp2 = []
            data?.map((item) => (
                item.type === 'prayer' ? temp1.push(item) : temp2.push(item)
            ))
            setContribute({ ...contribute, 'prayers': temp1, 'meditations': temp2 })
        }) : prayerList().then((data) => {
            let temp1 = [], temp2 = []
            data?.map((item) => (
                item.type === 'prayer' ? temp1.push(item) : temp2.push(item)
            ))
            setContribute({ ...contribute, 'prayers': temp1, 'meditations': temp2 })
        })
    }, [id, flag])

    return (
        <Container className='my-5'>
            <div className="nav-wrapper">
                <Nav className="nav-fill flex-column flex-md-row" id="tabs-icons-text" pills role="tablist">
                    {tabInfo.map((title, index) => (
                        <NavItem key={index}>
                            <NavLink
                                aria-selected={plainTabs === index}
                                className={classnames("mb-sm-3 mb-md-0", { active: plainTabs === index })}
                                onClick={(e) => toggleNavs(e, "plainTabs", index)}
                                href="#pablo"
                                role="tab"
                            >
                                {title}  {title === 'Prayers' ? <img style={{ width: '35px', height: '35px' }} src={dove} alt='faith' /> : <img style={{ width: '35px', height: '35px' }} src={meditate} alt='faith' />}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </div>
            <Card className="shadow">
                <CardBody>
                    <TabContent activeTab={"plainTabs" + plainTabs}>
                        <TabPane tabId="plainTabs0">
                            <Row className="justify-content-center">
                                {contribute?.prayers?.map((item, index) => (
                                    <PrayerCard key={index} index={index} data={item} setFlag={setFlag} flag={flag} />
                                ))}
                            </Row>
                        </TabPane>
                        <TabPane tabId="plainTabs1">
                            <Row className="justify-content-center">
                                {contribute?.meditations?.map((item, index) => (
                                    <PrayerCard key={index} index={index} data={item} setFlag={setFlag} flag={flag} />
                                ))}
                            </Row>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </Container>
    )
}

export default PrayerTabs
