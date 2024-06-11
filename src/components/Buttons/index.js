import React from 'react'
import { Button } from 'reactstrap'

const SmallLinkBtn = ({ item }) => (
  <a
    className="nav-link-icon ml-3 text-gray"
    href={item.link}
  >
    <i className={item.icon} />
    <span className="nav-link-inner--text d-lg-none ml-2">
      {item.title}
    </span>
  </a>
)

const EmailBtn = ({ title, img, onclick }) => (
  <Button
    className="btn-neutral btn-icon ml-1"
    color="default"
    onClick={onclick}
  >
    <span className="btn-inner--icon mr-1">
      <img alt="..." src={img} />
    </span>
    <span className="btn-inner--text">{title}</span>
  </Button>
)

const NameBtn = ({ title, color }) => (
  <>
    <Button color='link' className={`text-${color}`}>
      <i style={{ fontSize: '25px' }}>{title}</i>
    </Button> <br />
  </>
)

export { SmallLinkBtn, EmailBtn, NameBtn }