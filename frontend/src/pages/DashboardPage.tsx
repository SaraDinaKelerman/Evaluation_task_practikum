import { useEffect, useState } from "react"

import { createPrompt }
from "../services/promptService"

import { getCategories }
from "../services/categoryService"

import { getSubCategories }
from "../services/subCategoryService"

import type { Category }
from "../types/category"

import type { SubCategory }
from "../types/subCategory"


function DashboardPage() {

    const [prompt, setPrompt] =
    useState("")

    const [aiResponse, setAiResponse] =
    useState("")

    const [loading, setLoading] =
    useState(false)

    const [error, setError] =
    useState("")


    const [categories, setCategories] =
    useState<Category[]>([])

    const [subCategories,
    setSubCategories] =
    useState<SubCategory[]>([])

    const [selectedCategory,
    setSelectedCategory] =
    useState(1)

    const [selectedSubCategory,
    setSelectedSubCategory] =
    useState(1)


    useEffect(() => {

        loadData()

    }, [])


    async function loadData() {

        try {

            const categoriesData =
            await getCategories()

            const subCategoriesData =
            await getSubCategories()

            setCategories(categoriesData)

            setSubCategories(subCategoriesData)

        } catch {

            setError(
                "Failed to load categories"
            )
        }
    }


    async function handleSubmit(
        event: React.FormEvent
    ) {

        event.preventDefault()

        setLoading(true)

        setError("")

        try {

            const result =
            await createPrompt({

                user_id: 1,

                category_id:
                selectedCategory,

                sub_category_id:
                selectedSubCategory,

                prompt
            })

            setAiResponse(
                result.ai_response
            )

        } catch {

            setError(
                "Failed to generate AI response"
            )

        } finally {

            setLoading(false)
        }
    }


    return (

        <div className="container">

            <div className="card">

                <h1>Learning Dashboard</h1>

                <form onSubmit={handleSubmit}>

                    <select
                        value={selectedCategory}

                        onChange={(e) =>
                            setSelectedCategory(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    >

                        {categories.map(
                            (category) => (

                            <option
                                key={category.id}

                                value={category.id}
                            >

                                {category.name}

                            </option>

                        ))}

                    </select>

                    <select
                        value={selectedSubCategory}

                        onChange={(e) =>
                            setSelectedSubCategory(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    >

                        {subCategories.map(
                            (subCategory) => (

                            <option
                                key={subCategory.id}

                                value={subCategory.id}
                            >

                                {subCategory.name}

                            </option>

                        ))}

                    </select>

                    <textarea
                        placeholder="Ask something..."

                        value={prompt}

                        onChange={(e) =>
                            setPrompt(
                                e.target.value
                            )
                        }
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {loading
                            ? "Loading..."
                            : "Send Prompt"}

                    </button>

                </form>

                {error && (

                    <p>
                        {error}
                    </p>

                )}

            </div>

            {aiResponse && (

                <div className="card">

                    <h2>AI Response</h2>

                    <p>{aiResponse}</p>

                </div>

            )}

        </div>
    )
}

export default DashboardPage