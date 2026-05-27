from sqlalchemy import BigInteger, Column, Date, DateTime, ForeignKey, String, Text, Time, text
from sqlalchemy.orm import relationship

from .base import Base


class Session(Base):
    __tablename__ = "sessions"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    module_id = Column(BigInteger, ForeignKey("modules.id"), nullable=True)
    trainer_id = Column(BigInteger, ForeignKey("trainers.id"), nullable=True)
    title = Column(String(255), nullable=False)
    session_date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=True)
    end_time = Column(Time, nullable=True)
    meeting_link = Column(Text, nullable=True)
    location = Column(Text, nullable=True)
    session_type = Column(String(50), nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'scheduled'"))
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    batch = relationship("Batch", back_populates="sessions")
    module = relationship("Module", back_populates="sessions")
    trainer = relationship("Trainer", back_populates="sessions")
    attendances = relationship("Attendance", back_populates="session", cascade="all, delete-orphan")
    feedbacks = relationship("Feedback", back_populates="session")
