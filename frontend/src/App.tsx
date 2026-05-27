import { useState } from "react"

function App() {
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")
    const [loading, setLoading] = useState(false)

    async function sendPrompt() {
    setLoading(true)

    try {
        console.log("➡ Sending prompt:", prompt)

        const res = await fetch("http://127.0.0.1:8001/prompts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                category_id: 1,
                sub_category_id: 1,
                prompt: prompt
            })
        })

        console.log("⬅ Status:", res.status)

        const data = await res.json()
        console.log("⬅ Response:", data)

        setResponse(data.ai_response || JSON.stringify(data))

    } catch (err) {
        console.log("❌ ERROR:", err)
        setResponse("Backend error - check console")
    }

    setLoading(false)
}

    return (
        <div style={{ padding: 20 }}>
            <h1>AI APP</h1>

            <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write prompt..."
            />

            <button onClick={sendPrompt}>
                {loading ? "Loading..." : "Send"}
            </button>

            <h3>Response:</h3>
            <p>{response}</p>
        </div>
    )
}

export default App
