from sqlalchemy import BigInteger, Column, DateTime, Integer, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    duration_hours = Column(Integer, nullable=True)
    level = Column(String(50), nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    modules = relationship("Module", back_populates="course", cascade="all, delete-orphan")
    batch_courses = relationship("BatchCourse", back_populates="course", cascade="all, delete-orphan")
