from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime
from datetime import datetime
from app.database.database import Base


class Prompt(Base):
    __tablename__ = "prompts"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))
    category_id = Column(Integer, ForeignKey("categories.id"))
    sub_category_id = Column(Integer, ForeignKey("sub_categories.id"))

    prompt = Column(Text, nullable=False)
    ai_response = Column(Text, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)