import { useEffect, useState } from "react"

import {
    getUserHistory
} from "../services/promptService"

import type {
    PromptResponse
} from "../types/prompt"


function HistoryPage() {

    const [history, setHistory] =
    useState<PromptResponse[]>([])


    useEffect(() => {

        loadHistory()

    }, [])


    async function loadHistory() {

        const data =
        await getUserHistory(1)

        setHistory(data)
    }


    return (

        <div className="container">

            <h1>Learning History</h1>

            {history.map((item) => (

                <div
                    key={item.id}
                    className="card"
                >

                    <h3>Prompt</h3>

                    <p>{item.prompt}</p>

                    <h3>AI Response</h3>

                    <p>{item.ai_response}</p>

                </div>

            ))}

        </div>
    )
}

export default HistoryPage