const BASE_URL = '/api/notions';


export async function deleteOne(id) {
    return await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
}

export async function create(title, notion, goals, songName, moodRating, email) {
    const result = await fetch(`${BASE_URL}`,
        {
            method: 'POST', body: JSON.stringify({
                title, notion, goals, songName, moodRating, email
            }), headers: {
                "content-type": "application/json"
            }
        })
    return result

}

export async function notionsPerUser(user) {
    const res = await fetch(`${BASE_URL}/${user}`)
    const data = await res.json()
    return data

}

export async function update(title, notion, goals, songName, moodRating, email, id) {
    const result = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT', body: JSON.stringify({
            title, notion, goals, songName, moodRating, email
        }), headers: { "content-type": "application/json" }
    })
    return result
}
