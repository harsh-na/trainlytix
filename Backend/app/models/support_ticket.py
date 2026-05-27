from sqlalchemy import BigInteger, Column, DateTime, ForeignKey, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class SupportTicket(Base):
    __tablename__ = "support_tickets"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    subject = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    priority = Column(String(50), nullable=False, server_default=text("'medium'"))
    status = Column(String(50), nullable=False, server_default=text("'open'"))
    assigned_to = Column(BigInteger, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))
    resolved_at = Column(DateTime, nullable=True)

    trainee = relationship("Trainee", back_populates="support_tickets")
