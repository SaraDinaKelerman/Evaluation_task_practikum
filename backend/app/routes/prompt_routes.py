from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.prompt_model import Prompt
from app.schemas.prompt_schema import PromptCreate, PromptResponse
from app.services.ai_service import generate_ai_response

router = APIRouter()


@router.post("/", response_model=PromptResponse)
def create_prompt(
    request: PromptCreate,
    db: Session = Depends(get_db)
):

    ai_answer = generate_ai_response(request.prompt)

    new_prompt = Prompt(
        user_id=request.user_id,
        category_id=request.category_id,
        sub_category_id=request.sub_category_id,
        prompt=request.prompt,
        ai_response=ai_answer
    )

    db.add(new_prompt)
    db.commit()
    db.refresh(new_prompt)

    return new_prompt


@router.get("/", response_model=list[PromptResponse])
def get_prompts(db: Session = Depends(get_db)):
    prompts = db.query(Prompt).all()

    return prompts