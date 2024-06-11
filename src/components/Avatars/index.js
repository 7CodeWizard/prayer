import React from 'react'

const ProfileAvatar = ({ avatar }) => (
  <div className="order-lg-2 card-profile-image" lg="3" style={{ cursor: 'pointer' }}>
    <div
      alt="..."
      className="rounded-circle imgCover bg-white" style={{ width: '180px', height: '180px', backgroundImage: `url(${avatar})` }}
      src={avatar}
    />
  </div>
)

const FaithAvatar = ({ src }) => (
  <img style={{ width: '30px', height: '30px' }} src={src} alt='faith' />
)

export { ProfileAvatar, FaithAvatar }