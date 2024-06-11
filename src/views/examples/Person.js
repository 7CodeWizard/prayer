import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { useParams } from 'react-router-dom'

import { read } from 'api/api_user'
import auth from 'components/auth/authHelper'
import { END_POINT } from 'config'
import { ProfileAvatar } from 'components/Avatars'
import PrayerTabs from 'components/Tabs'
import { ProfileSmallText } from 'components/Titles'



const Person = () => {

    const { userName } = useParams()
    const [profile, setProfile] = useState({})
    const jwt = auth.isAuthenticated()

    console.log()
    useEffect(() => {
        read({ id: userName }, { t: jwt.token }).then((data) => {
            setProfile(data)
        })
    }, [userName, jwt])

    return (
        <section className="section section-shaped">
            <Container>
                <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                        {profile.userName}'s Profile
                    </h6>
                </div>
                <div className="modal-body">
                    <div className='itemCenter'>
                        <ProfileAvatar avatar={`${END_POINT}/api/userInfo/photo/${profile._id}`} />
                    </div>
                    <div className="text-center pt-2">
                        <h3>
                            User Name : <b>{profile?.userName}</b> <br />
                        </h3>
                        <div className="h6 font-weight-300">
                            Location : <b>{profile?.location}</b>
                            <ProfileSmallText title={'Email'} data={profile?.email} />
                        </div>
                    </div>
                    <Container>
                        <PrayerTabs id={userName} />
                    </Container>
                </div>
            </Container>
        </section>
    )
}

export default Person