from datetime import date, time, datetime
from typing import Optional
from pydantic import BaseModel


class SessionBase(BaseModel):
    batch_id: int
    module_id: Optional[int] = None
    trainer_id: Optional[int] = None
    title: str
    session_date: date
    start_time: Optional[time] = None
    end_time: Optional[time] = None
    meeting_link: Optional[str] = None
    location: Optional[str] = None
    session_type: Optional[str] = None
    status: Optional[str] = None


class SessionCreate(SessionBase):
    pass


class SessionResponse(SessionBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
