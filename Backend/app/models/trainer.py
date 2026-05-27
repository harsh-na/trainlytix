from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, Numeric, String, text
from sqlalchemy.orm import relationship

from .base import Base


class Trainer(Base):
    __tablename__ = "trainers"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    trainer_code = Column(String(100), unique=True, nullable=False)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=True)
    specialization = Column(String(255), nullable=True)
    phone = Column(String(20), nullable=True)
    experience_years = Column(Numeric(4, 1), nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    user = relationship("User", back_populates="trainer")
    batches = relationship("Batch", back_populates="trainer")
    sessions = relationship("Session", back_populates="trainer")
    feedbacks = relationship("Feedback", back_populates="trainer")
