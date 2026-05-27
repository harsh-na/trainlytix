from sqlalchemy import BigInteger, CheckConstraint, Column, DateTime, ForeignKey, Integer, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    session_id = Column(BigInteger, ForeignKey("sessions.id", ondelete="CASCADE"), nullable=True)
    trainer_id = Column(BigInteger, ForeignKey("trainers.id"), nullable=True)
    rating = Column(Integer, nullable=True)
    comments = Column(Text, nullable=True)
    submitted_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    __table_args__ = (CheckConstraint("rating BETWEEN 1 AND 5", name="rating_between_1_and_5"),)

    trainee = relationship("Trainee", back_populates="feedbacks")
    session = relationship("Session", back_populates="feedbacks")
    trainer = relationship("Trainer", back_populates="feedbacks")
