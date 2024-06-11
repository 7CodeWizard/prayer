import React from 'react'
import { GoogleLogin } from 'react-google-login'

const GoogleSignIn = () => {
  const clientId = 'YOUR_GOOGLE_CLIENT_ID' // Replace with your Google Client ID

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj)
    // Send the token to your backend for verification and user registration
    const { tokenId } = response
    fetch('YOUR_BACKEND_URL/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: tokenId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Registration success:', data)
      })
      .catch((error) => {
        console.error('Registration error:', error)
      })
  }

  const onFailure = (response) => {
    console.log('Login failed: res:', response)
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleSignIn
