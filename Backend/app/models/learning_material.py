from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class LearningMaterial(Base):
    __tablename__ = "learning_materials"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    module_id = Column(BigInteger, ForeignKey("modules.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    file_url = Column(Text, nullable=False)
    material_type = Column(String(50), nullable=True)
    uploaded_by = Column(BigInteger, nullable=True)
    uploaded_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    module = relationship("Module", back_populates="learning_materials")
