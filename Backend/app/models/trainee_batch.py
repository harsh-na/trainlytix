from sqlalchemy import BigInteger, Column, Date, ForeignKey, String, UniqueConstraint, text
from sqlalchemy.orm import relationship

from .base import Base


class TraineeBatch(Base):
    __tablename__ = "trainee_batches"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    enrollment_date = Column(Date, nullable=False, server_default=text("CURRENT_DATE"))
    status = Column(String(50), nullable=False, server_default=text("'active'"))

    __table_args__ = (UniqueConstraint("trainee_id", "batch_id", name="unique_trainee_batch"),)

    trainee = relationship("Trainee", back_populates="trainee_batches")
    batch = relationship("Batch", back_populates="trainee_batches")
