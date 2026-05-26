from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user_model import User
from app.schemas.user_schema import UserCreate, UserResponse

router = APIRouter()


@router.post("/", response_model=UserResponse)
def create_user(
    request: UserCreate,
    db: Session = Depends(get_db)
):

    new_user = User(
        name=request.name,
        phone=request.phone
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.get("/", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):

    users = db.query(User).all()

    return users