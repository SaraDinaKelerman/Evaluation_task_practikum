from dotenv import load_dotenv
import os

load_dotenv()


class Settings:

    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "sqlite:///./Evaluation_task_practikum.db"
    )

    OPENAI_API_KEY = os.getenv(
        "OPENAI_API_KEY"
    )


settings = Settings()