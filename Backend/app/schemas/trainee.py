from datetime import date, datetime
from typing import Optional
from pydantic import BaseModel


class TraineeBase(BaseModel):
    user_id: int
    trainee_code: str
    first_name: str
    last_name: Optional[str] = None
    phone: Optional[str] = None
    gender: Optional[str] = None
    dob: Optional[date] = None
    address: Optional[str] = None
    qualification: Optional[str] = None
    experience_years: Optional[float] = None
    joining_date: Optional[date] = None
    profile_image: Optional[str] = None
    status: Optional[str] = None


class TraineeCreate(TraineeBase):
    pass


class TraineeResponse(TraineeBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
