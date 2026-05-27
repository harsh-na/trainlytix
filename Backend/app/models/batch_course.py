from sqlalchemy import BigInteger, Column, Date, ForeignKey, String, UniqueConstraint, text
from sqlalchemy.orm import relationship

from .base import Base


class BatchCourse(Base):
    __tablename__ = "batch_courses"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    course_id = Column(BigInteger, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    assigned_date = Column(Date, nullable=False, server_default=text("CURRENT_DATE"))

    __table_args__ = (UniqueConstraint("batch_id", "course_id", name="unique_batch_course"),)

    batch = relationship("Batch", back_populates="batch_courses")
    course = relationship("Course", back_populates="batch_courses")
