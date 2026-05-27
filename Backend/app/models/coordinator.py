from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, String, text
from sqlalchemy.orm import relationship

from .base import Base


class Coordinator(Base):
    __tablename__ = "coordinators"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    coordinator_code = Column(String(100), unique=True, nullable=False)
    first_name = Column(String(100), nullable=True)
    last_name = Column(String(100), nullable=True)
    phone = Column(String(20), nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    user = relationship("User", back_populates="coordinator")
    batches = relationship("Batch", back_populates="coordinator")
