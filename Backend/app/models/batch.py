from sqlalchemy import BigInteger, Column, Date, DateTime, ForeignKey, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class Batch(Base):
    __tablename__ = "batches"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_name = Column(String(255), nullable=False)
    batch_code = Column(String(100), unique=True, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=True)
    mode = Column(String(50), nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'upcoming'"))
    trainer_id = Column(BigInteger, ForeignKey("trainers.id"), nullable=True)
    coordinator_id = Column(BigInteger, ForeignKey("coordinators.id"), nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    trainer = relationship("Trainer", back_populates="batches")
    coordinator = relationship("Coordinator", back_populates="batches")
    trainee_batches = relationship("TraineeBatch", back_populates="batch", cascade="all, delete-orphan")
    batch_courses = relationship("BatchCourse", back_populates="batch", cascade="all, delete-orphan")
    sessions = relationship("Session", back_populates="batch", cascade="all, delete-orphan")
    assessments = relationship("Assessment", back_populates="batch", cascade="all, delete-orphan")
    performance_summaries = relationship("PerformanceSummary", back_populates="batch", cascade="all, delete-orphan")
