import axios from 'axios'
import { END_POINT } from 'config'

export async function create(params, credentials, prayer) {
    try {
        let response = await fetch(`${END_POINT}/api/prayer/new/` + params.id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                // 'Content-Type': 'multipart/form-data'
            },
            body: prayer
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export async function listId(id) {
    try {
        let response = await fetch(`${END_POINT}/api/prayer/by/${id}`, {
            method: 'GET',
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }

}

export async function prayerOne(id) {
    try {
        let response = await fetch(`${END_POINT}/api/prayer/${id}`, {
            method: 'GET',
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }

}


export async function prayerList() {
    try {
        let response = await fetch(`${END_POINT}/api/prayer/`, {
            method: 'GET',
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }

}

export async function userList() {
    try {
        let response = await fetch(`${END_POINT}/api/userInfo/`, {
            method: 'GET',
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export async function energys(params, energy, postId, userName, location, faith) {
    try {
        const res = await axios.put(`${END_POINT}/api/prayer/energy`, { userId: params.userId, energy: energy, postId: postId, userName: userName, location: location, faith: faith })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function prayerUpdate(prayerId, feed) {
    try {
        const res = await axios.put(`${END_POINT}/api/prayer/prayerUpdate`, { prayerId: prayerId, feed: feed })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function unenergy(params, energy) {
    try {
        const res = await axios.put(`${END_POINT}/api/prayer/unenergy`, { userId: params.userId, energy: energy })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCard(id) {
    try {
        const res = await axios.delete(`${END_POINT}/api/prayer/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
