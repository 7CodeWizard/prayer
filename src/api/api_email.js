import axios from 'axios'
import { END_POINT } from 'config'

export async function sendEmail(fromEmail, fromName, email, name, text) {
    try {
        const res = await axios.post(`${END_POINT}/send-email`, { fromEmail: fromEmail, fromName: fromName, email: email, name: name, text: text })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
