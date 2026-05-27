import type { SubCategory }
from "../types/subCategory"

const API_URL = "http://127.0.0.1:8000/subcategories"


export async function getSubCategories():
Promise<SubCategory[]> {

    const response = await fetch(API_URL)

    return response.json()
}