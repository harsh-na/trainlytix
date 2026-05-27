from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, Numeric, String, text
from sqlalchemy.orm import relationship

from .base import Base


class Assessment(Base):
    __tablename__ = "assessments"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    module_id = Column(BigInteger, ForeignKey("modules.id"), nullable=True)
    title = Column(String(255), nullable=False)
    assessment_type = Column(String(50), nullable=True)
    total_marks = Column(Numeric(5, 2), nullable=True)
    due_date = Column(DateTime, nullable=True)
    created_by = Column(BigInteger, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    batch = relationship("Batch", back_populates="assessments")
    module = relationship("Module", back_populates="assessments")
    submissions = relationship("AssessmentSubmission", back_populates="assessment", cascade="all, delete-orphan")
