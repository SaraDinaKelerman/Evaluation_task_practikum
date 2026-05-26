from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    phone: str


class UserResponse(BaseModel):
    id: int
    name: str
    phone: str

    class Config:
        from_attributes = True