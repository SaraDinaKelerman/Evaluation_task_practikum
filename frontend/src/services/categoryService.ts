import type { Category } from "../types/category"

const API_URL = "http://127.0.0.1:8000/categories"


export async function getCategories():
Promise<Category[]> {

    const response = await fetch(API_URL)

    return response.json()
}

