from datetime import date, datetime
from typing import Optional
from pydantic import BaseModel


class BatchBase(BaseModel):
    batch_name: str
    batch_code: str
    start_date: date
    end_date: Optional[date] = None
    mode: Optional[str] = None
    status: Optional[str] = None
    trainer_id: Optional[int] = None
    coordinator_id: Optional[int] = None
    description: Optional[str] = None


class BatchCreate(BatchBase):
    pass


class BatchResponse(BatchBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
