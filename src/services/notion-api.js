const BASE_URL = '/api/notions';


export async function deleteOne(id) {
    return await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
}

export async function create(title, notion, goals, songName, moodRating, email) {
    const result = await fetch('http://localhost:3001/api/notions',
        {
            method: 'post', body: JSON.stringify({
                title, notion, goals, songName, moodRating, email
            }), headers: {
                "content-type": "application/json"
            }
        })
    return result

}

export async function notionsPerUser(user) {
    const res = await fetch(`http://localhost:3001/api/notions/user/${user}`)
    const data = await res.json()
    return data

}

