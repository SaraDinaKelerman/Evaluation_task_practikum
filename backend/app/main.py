from fastapi import FastAPI

from app.database.database import engine, Base

from app.routes import user_routes
from app.routes import category_routes
from app.routes import sub_category_routes
from app.routes import prompt_routes
from app.routes import admin_routes

from app.models import user_model
from app.models import category_model
from app.models import sub_category_model
from app.models import prompt_model

Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(
    user_routes.router,
    prefix="/users",
    tags=["Users"]
)

app.include_router(
    category_routes.router,
    prefix="/categories",
    tags=["Categories"]
)

app.include_router(
    sub_category_routes.router,
    prefix="/sub-categories",
    tags=["Sub Categories"]
)

app.include_router(
    prompt_routes.router,
    prefix="/prompts",
    tags=["Prompts"]
)

app.include_router(
    admin_routes.router,
    prefix="/admin",
    tags=["Admin"]
)


@app.get("/")
def root():
    return {"message": "Evaluation_task_practikum Backend Works"}