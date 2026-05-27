import type { User } from "../types/user"

const API_URL = "http://127.0.0.1:8000/users"

export async function createUser(user: User) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    return response.json()
}

export async function getUsers() {
    const response = await fetch(API_URL)
    return response.json()
}
