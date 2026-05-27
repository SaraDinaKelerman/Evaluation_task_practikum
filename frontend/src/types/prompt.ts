export interface PromptRequest {
    user_id: number
    category_id: number
    sub_category_id: number
    prompt: string
}

export interface PromptResponse {
    id?: number
    user_id: number
    category_id: number
    sub_category_id: number
    prompt: string
    ai_response: string
}