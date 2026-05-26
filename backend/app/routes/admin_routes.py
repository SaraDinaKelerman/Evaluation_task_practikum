from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user_model import User
from app.models.prompt_model import Prompt

router = APIRouter()


@router.get("/users")
def admin_get_users(
    db: Session = Depends(get_db)
):

    users = db.query(User).all()

    return users


@router.get("/prompts")
def admin_get_prompts(
    db: Session = Depends(get_db)
):

    prompts = db.query(Prompt).all()

    return prompts