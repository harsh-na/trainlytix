from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, Integer, Numeric, text
from sqlalchemy.orm import relationship

from .base import Base


class PerformanceSummary(Base):
    __tablename__ = "performance_summary"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    attendance_percentage = Column(Numeric(5, 2), nullable=True)
    average_score = Column(Numeric(5, 2), nullable=True)
    rank = Column(Integer, nullable=True)
    completion_percentage = Column(Numeric(5, 2), nullable=True)
    last_updated = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    trainee = relationship("Trainee", back_populates="performance_summaries")
    batch = relationship("Batch", back_populates="performance_summaries")
