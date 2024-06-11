import React from "react"
import { Container, CardBody, Card, } from "reactstrap"

import auth from "components/auth/authHelper"
import { CardHead } from "components/Card"


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
                        <Card className="bg-gradient-secondary shadow" style={{ borderRadius: '10px' }}>
                            <CardBody className="p-lg-5">
                                <h1 className="m-5" style={{ textAlign: 'center' }}><b>Global Healing Consciousness Project</b></h1>
                                <h4 className="mb-1">Embrace Consciousness for Healing and World Peace</h4>
                                <p className="mt-0">
                                    Welcome to our space, where hearts and minds unite for healing and world peace. Here, we believe in the profound power of collective consciousness. By coming together to pray and meditate, we can foster a world filled with harmony, compassion, and understanding.
                                </p>
                                <h4 className="mb-1">The Power of Consciousness</h4>
                                <p className="mt-0">
                                    Consciousness is the essence of our awareness and perception. It’s the spark that enables us to experience life and connect with one another on a deeper level. When we tune into our consciousness with positive intentions, we open the door to incredible healing and transformation.
                                </p>
                                <h4 className="mb-1">Our Mission</h4>
                                <p className="mt-0">
                                    Our mission is simple: to bring people together in the spirit of peace and healing. We aim to create a global community where individuals can join forces in prayer and meditation, amplifying the positive energy that each of us holds. By focusing on love, empathy, and unity, we can make a meaningful impact on the world.
                                </p>
                                <h4 className="mb-1">Why Pray and Meditate Together?</h4>
                                <p className="mt-0">
                                    ·	Amplified Positive Energy: When we come together, our collective energy is magnified, creating a powerful force for good.
                                </p>
                                <p className="mt-0">
                                    ·	Healing and Well-Being: Shared moments of prayer and meditation can promote physical, emotional, and spiritual healing.
                                </p>
                                <p className="mt-0">
                                    ·	Global Harmony: Unified efforts help bridge divides and foster a sense of global community and understanding.
                                </p>
                                <h4 className="mb-1">How You Can Participate</h4>
                                <p className="mt-0">
                                    1.	There are two main sections. One is prayer, where users can submit their prayer request and in which in turn others can send you their prayers. The second section is regarding to meditation, here users will request and those whom contribute will send details on when and how long they wish to meditate for, in terms we call it energy. Energy is clearly translated to 1 energy for 1 minute.
                                </p>
                                <p className="mt-0">
                                    2.	Let’s synchronize our minds and hearts for a common cause.
                                </p>
                                <p className="mt-0">
                                    3.	Share Your Prayers: Submit your prayers and intentions on our website. We’ll include them in our collective sessions.
                                </p>
                                <p className="mt-0">
                                    4.	Spread the Word: Encourage others to join us. The more people we bring together, the stronger our collective impact will be.
                                </p>
                                <h4 className="mb-1">Our Principles</h4>
                                <p className="mt-0">
                                    ·	Pro Peace: We are dedicated to promoting peace in every thought, word, and action.
                                </p>
                                <p className="mt-0">
                                    ·	Pro Healing: We focus on healing ourselves and the world around us.
                                </p>
                                <p className="mt-0">
                                    ·	Positive Intentions: Our prayers and meditations are always directed towards positive outcomes. We do not support any form of harm or negativity. We are a pro movement, pro peace, pro love, pro support. Not any pray against movements.
                                </p>
                                <h4 className="mb-1">Get Involved</h4>
                                <p className="mt-0">Ready to be part of a movement that’s all about healing and peace? Connect with others by sharing the requests on social media. Join our mailing list for updates.</p>
                                <p className="mt-0">Note, all requests are online for 2 weeks, and then are archived.
                                    The requester can share their progress in their request page.
                                </p>
                                <p className="mt-0">Together, we can harness the power of our consciousness to create a better, more peaceful world. Let’s make a difference, one prayer and meditation at a time.</p>
                            </CardBody>
                        </Card>
                        {/* </Col>
                        </Row> */}
                    </Container>
                </section>
            </main>
        )
    }
}

export default Landing
