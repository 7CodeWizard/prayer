const express = require('express')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID') // Replace with your Google Client ID

const app = express()
app.use(express.json())

app.post('/register', async (req, res) => {
  const { token } = req.body
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 'YOUR_GOOGLE_CLIENT_ID',
    })
    const payload = ticket.getPayload()
    const { sub, email, name, picture } = payload

    // Save user data to your database
    // For example: saveUser({ googleId: sub, email, name, picture })

    res.status(201).json({ message: 'User registered successfully', user: { sub, email, name, picture } })
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' })
  }
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
