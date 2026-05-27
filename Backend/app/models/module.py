from sqlalchemy import BigInteger, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from .base import Base


class Module(Base):
    __tablename__ = "modules"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    course_id = Column(BigInteger, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    module_name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    sequence_order = Column(Integer, nullable=True)

    course = relationship("Course", back_populates="modules")
    sessions = relationship("Session", back_populates="module")
    learning_materials = relationship("LearningMaterial", back_populates="module", cascade="all, delete-orphan")
    assessments = relationship("Assessment", back_populates="module")
