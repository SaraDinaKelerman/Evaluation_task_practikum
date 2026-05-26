from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.category_model import Category
from app.schemas.category_schema import (
    CategoryCreate,
    CategoryResponse
)

router = APIRouter()


@router.post("/", response_model=CategoryResponse)
def create_category(
    request: CategoryCreate,
    db: Session = Depends(get_db)
):

    new_category = Category(
        name=request.name
    )

    db.add(new_category)
    db.commit()
    db.refresh(new_category)

    return new_category


@router.get("/", response_model=list[CategoryResponse])
def get_categories(db: Session = Depends(get_db)):

    categories = db.query(Category).all()

    return categories