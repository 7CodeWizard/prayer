import React from 'react'
import { SmallLinkBtn } from 'components/Buttons'
import { navLinkInfo } from 'constant'

const TopBar = () => (
  <div className="topBar text-gray justifyBetween px-5">
    <div className="text-uppercase  font-weight-bold" style={{ fontSize: '12px' }}>
      Copyright © {new Date().getFullYear()}{" "} Contact: <a href='#pablo'>(+1 959 910 1572)</a>
    </div>
    <div className="d-flex">
      {
        navLinkInfo.map((item, index) => (
          <SmallLinkBtn item={item} key={index} />
        ))
      }
    </div>
  </div>
)


export default TopBar