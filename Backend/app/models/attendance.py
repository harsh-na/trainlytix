from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, String, Text, UniqueConstraint, text
from sqlalchemy.orm import relationship

from .base import Base


class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    session_id = Column(BigInteger, ForeignKey("sessions.id", ondelete="CASCADE"), nullable=False)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    status = Column(String(20), nullable=False)
    check_in_time = Column(DateTime, nullable=True)
    remarks = Column(Text, nullable=True)
    marked_by = Column(BigInteger, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    __table_args__ = (UniqueConstraint("session_id", "trainee_id", name="unique_session_trainee"),)

    session = relationship("Session", back_populates="attendances")
    trainee = relationship("Trainee", back_populates="attendances")
