import { useEffect, useState }
from "react"

import {
    getUsers
} from "../services/userService"

import type {
    User
} from "../types/user"


function AdminPage() {

    const [users, setUsers] =
    useState<User[]>([])


    useEffect(() => {

        loadUsers()

    }, [])


    async function loadUsers() {

        const data =
        await getUsers()

        setUsers(data)
    }


    return (

        <div className="container">

            <h1>Admin Dashboard</h1>

            {users.map((user) => (

                <div
                    key={user.id}
                    className="card"
                >

                    <p>
                        <strong>ID:</strong>
                        {user.id}
                    </p>

                    <p>
                        <strong>Name:</strong>
                        {user.name}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        {user.phone}
                    </p>

                </div>

            ))}

        </div>
    )
}

export default AdminPage