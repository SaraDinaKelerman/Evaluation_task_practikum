from openai import OpenAI

from app.config.settings import settings


client = OpenAI(
    api_key=settings.OPENAI_API_KEY
)


def generate_ai_response(prompt: str):

    try:

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful learning assistant."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response.choices[0].message.content

    except Exception as e:

        return f"AI error: {str(e)}"