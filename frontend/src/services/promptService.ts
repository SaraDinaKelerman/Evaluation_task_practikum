import type {
    PromptRequest,
    PromptResponse
} from "../types/prompt"

const API_URL = "http://127.0.0.1:8001/prompts"

export async function createPrompt(promptData: PromptRequest): Promise<PromptResponse> {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(promptData)
    })

    // 👇 ADD ERROR HANDLING HERE
    if (!response.ok) {
        throw new Error("Failed to create prompt")
    }

    return response.json()
}



export async function getUserHistory(
    userId: number
): Promise<PromptResponse[]> {

    const response = await fetch(
        `${API_URL}/user/${userId}`
    )

    return response.json()
}