import { useState } from "react"

import {
    createUser
} from "../services/userService"


function RegisterPage() {

    const [name, setName] =
    useState("")

    const [phone, setPhone] =
    useState("")


    async function handleSubmit(
        event: React.FormEvent
    ) {

        event.preventDefault()

        const newUser = {
            name,
            phone
        }

        const result =
        await createUser(newUser)

        console.log(result)

        alert("User created successfully")

        setName("")
        setPhone("")
    }


    return (

        <div className="container">

            <div className="card">

                <h1>Register User</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Name"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Phone"

                        value={phone}

                        onChange={(e) =>
                            setPhone(e.target.value)
                        }
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

            </div>

        </div>
    )
}

export default RegisterPage