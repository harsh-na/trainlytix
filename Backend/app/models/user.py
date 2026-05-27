from sqlalchemy import BigInteger, Boolean, Column, DateTime, String, Text, text
from sqlalchemy.orm import relationship

from .base import Base


class User(Base):
    __tablename__ = "users"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(Text, nullable=False)
    role = Column(String(50), nullable=False)
    is_active = Column(Boolean, nullable=False, server_default=text("TRUE"))
    last_login = Column(DateTime, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    trainee = relationship("Trainee", back_populates="user", uselist=False, cascade="all, delete")
    trainer = relationship("Trainer", back_populates="user", uselist=False, cascade="all, delete")
    coordinator = relationship("Coordinator", back_populates="user", uselist=False, cascade="all, delete")
    notifications = relationship("Notification", back_populates="user", cascade="all, delete-orphan")
