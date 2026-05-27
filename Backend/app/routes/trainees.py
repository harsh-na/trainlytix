from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..schemas.trainee import TraineeCreate, TraineeResponse
from ..services.trainee_service import create_trainee, get_trainees

router = APIRouter(prefix="/trainees", tags=["trainees"])


@router.post("/", response_model=TraineeResponse)
def create_trainee_endpoint(trainee_in: TraineeCreate, db: Session = Depends(get_db)):
    return create_trainee(db, trainee_in)


@router.get("/", response_model=list[TraineeResponse])
def list_trainees(db: Session = Depends(get_db)):
    return get_trainees(db)
