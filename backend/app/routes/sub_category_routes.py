from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.sub_category_model import SubCategory
from app.schemas.sub_category_schema import (
    SubCategoryCreate,
    SubCategoryResponse
)

router = APIRouter()


@router.post("/", response_model=SubCategoryResponse)
def create_sub_category(
    request: SubCategoryCreate,
    db: Session = Depends(get_db)
):

    new_sub_category = SubCategory(
        name=request.name,
        category_id=request.category_id
    )

    db.add(new_sub_category)
    db.commit()
    db.refresh(new_sub_category)

    return new_sub_category


@router.get("/", response_model=list[SubCategoryResponse])
def get_sub_categories(
    db: Session = Depends(get_db)
):

    sub_categories = db.query(SubCategory).all()

    return sub_categories