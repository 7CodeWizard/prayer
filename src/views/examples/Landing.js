import React from "react"
import { Link } from "react-router-dom"
import { Container, Button, } from "reactstrap"

import auth from "components/auth/authHelper"
import PrayerTabs from "components/Tabs"
import { ModalPaypal } from "components/Modals"

class Landing extends React.Component {
  state = {
    plainTabs: 0,
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }

  jwt = auth.isAuthenticated()
  render() {
    return (
      <main ref="main" className="">
        <section className="section section-shaped sectionBg" style={{ paddingTop: '200px' }}>
          <Container>
            {
              this.jwt &&
              <>
                <Button color="danger" style={{ borderRadius: '10px' }} to='/add-contribute' tag={Link}>Request</Button>
                <ModalPaypal />
              </>
            }
            <PrayerTabs />
          </Container>
        </section>
      </main>
    )
  }
}

export default Landing
