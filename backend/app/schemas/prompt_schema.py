from pydantic import BaseModel
from datetime import datetime


class PromptCreate(BaseModel):
    user_id: int
    category_id: int
    sub_category_id: int
    prompt: str


class PromptResponse(BaseModel):
    id: int
    user_id: int
    category_id: int
    sub_category_id: int
    prompt: str
    ai_response: str | None
    created_at: datetime

    class Config:
        from_attributes = True