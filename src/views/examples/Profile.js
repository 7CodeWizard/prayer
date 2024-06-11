import React from "react"

// reactstrap components
import { Container, Card, Row, Col, } from "reactstrap"

// core components
import { ProfileAvatar } from "components/Avatars"
import { ModalProfile } from "components/Modals"
import { read } from "api/api_user"
import auth from "components/auth/authHelper"
import PrayerTabs from "components/Tabs"
import ReactFlagsSelect from "react-flags-select"
import { FaithAvatar } from "components/Avatars"
import { faithIamgeInfo } from "constant"
import { TableFeed } from "components/Tables"
import { ProfileSmallText } from "components/Titles"

class Profile extends React.Component {

  jwt = auth.isAuthenticated()

  state = {
    user: {}
  }

  setUser = (data) => {
    this.setState({
      user: data
    })
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
    read({
      id: this.jwt.user._id
    }, {
      t: this.jwt.token
    }).then((data) => {
      this.setState({
        user: data
      })
    })
  }
  render() {
    const ProfileData = () => (
      <div className="text-center">
        <div style={{ paddingTop: '150px' }}>
          <h3>
            Full Name : <b>{this.state.user.firstName} {" "} {this.state.user.lastName}</b> <br />
            User Name : <b>{this.state.user.userName}</b> <br />
          </h3>
          <ProfileSmallText title={'Email'} data={this.state.user.email} />
          <div className="itemCenter">
            <ReactFlagsSelect className="flag" selected={this.state.user.location} disabled />
          </div>
          <div>
            Faith : <FaithAvatar src={faithIamgeInfo[this.state.user.faith]} />
          </div>
        </div>
        <PrayerTabs id={this.state.user._id} />
        <TableFeed />
      </div >
    )

    return (
      <main className="profile-page" ref="main">
        <section className="section sectionBg">
          <Container>
            <Card className="card-profile shadow" style={{ marginTop: '100px' }}>
              <Row className="justify-content-center">
                <Col>
                  <ProfileAvatar avatar={`http://localhost:5000/api/userInfo/photo/${auth.isAuthenticated().user._id}`} />
                  <ProfileData />
                </Col>
              </Row>
              <ModalProfile person={this.state.user} setUser={this.setUser} />
            </Card>
          </Container>
        </section>
      </main>
    )
  }
}

export default Profile
