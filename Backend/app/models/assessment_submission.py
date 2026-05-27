from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, Numeric, String, Text, UniqueConstraint, text
from sqlalchemy.orm import relationship

from .base import Base


class AssessmentSubmission(Base):
    __tablename__ = "assessment_submissions"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    assessment_id = Column(BigInteger, ForeignKey("assessments.id", ondelete="CASCADE"), nullable=False)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    submission_url = Column(Text, nullable=True)
    submitted_at = Column(DateTime, nullable=True)
    score = Column(Numeric(5, 2), nullable=True)
    feedback = Column(Text, nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'submitted'"))
    evaluated_by = Column(BigInteger, nullable=True)

    __table_args__ = (UniqueConstraint("assessment_id", "trainee_id", name="unique_assessment_submission"),)

    assessment = relationship("Assessment", back_populates="submissions")
    trainee = relationship("Trainee", back_populates="assessment_submissions")
