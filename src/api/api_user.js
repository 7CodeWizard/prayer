import axios from 'axios'
import { END_POINT } from 'config'

export async function createAcount(form) {
    console.log(form)
    try {
        const res = await axios.post(`${END_POINT}/api/userInfo`, form)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function signIn(form) {
    try {
        const res = await axios.post(`${END_POINT}/auth/signin`, form)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function signOut() {
    try {
        const res = await axios.post(`${END_POINT}/auth/signout`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function read(params, credentials) {
    try {
        let response = await fetch(`${END_POINT}/api/userInfo/` + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                // 'Content-Type': 'multipart/form-data'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export async function update(params, credentials, user) {
    try {
        let response = await fetch(`${END_POINT}/api/userInfo/` + params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                // 'Content-Type': 'multipart/form-data'
            },
            body: user
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export async function comments(params, dataId, feed, postId, title, userName) {
    try {
        const res = await axios.put(`${END_POINT}/api/userInfo/comment`, { userId: params.userId, dataId: dataId, feed: feed, postId: postId, title: title, userName: userName })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function uncomment(params, feed) {
    try {
        const res = await axios.put(`${END_POINT}/api/userInfo/uncomment`, { userId: params.userId, feed: feed })
        return res.data
    } catch (error) {
        console.log(error)
    }
}