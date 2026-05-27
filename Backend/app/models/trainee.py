from sqlalchemy import BigInteger, Column, Date, DateTime, ForeignKey, Numeric, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class Trainee(Base):
    __tablename__ = "trainees"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    trainee_code = Column(String(100), unique=True, nullable=False)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=True)
    phone = Column(String(20), nullable=True)
    gender = Column(String(20), nullable=True)
    dob = Column(Date, nullable=True)
    address = Column(Text, nullable=True)
    qualification = Column(String(255), nullable=True)
    experience_years = Column(Numeric(4, 1), nullable=True)
    joining_date = Column(Date, nullable=True)
    profile_image = Column(Text, nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'active'"))
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))
    updated_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    user = relationship("User", back_populates="trainee")
    trainee_batches = relationship("TraineeBatch", back_populates="trainee", cascade="all, delete-orphan")
    attendances = relationship("Attendance", back_populates="trainee", cascade="all, delete-orphan")
    assessment_submissions = relationship("AssessmentSubmission", back_populates="trainee", cascade="all, delete-orphan")
    performance_summaries = relationship("PerformanceSummary", back_populates="trainee", cascade="all, delete-orphan")
    feedbacks = relationship("Feedback", back_populates="trainee", cascade="all, delete-orphan")
    support_tickets = relationship("SupportTicket", back_populates="trainee", cascade="all, delete-orphan")
