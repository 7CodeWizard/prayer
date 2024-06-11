import React from 'react'


const CardBodyTitle = ({ title }) => (
  <div className="text-center text-muted mb-4">
    <small>{title}</small>
  </div>
)

const ProfileSmallText = ({ title, data }) => (
  <div className="h6 font-weight-300">
    {title} : <b>{data}</b> <br />
  </div>
)


export { CardBodyTitle, ProfileSmallText }