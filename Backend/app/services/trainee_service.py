from sqlalchemy.orm import Session

from ..models import Trainee
from ..schemas.trainee import TraineeCreate


def get_trainees(db: Session):
    return db.query(Trainee).all()


def get_trainee(db: Session, trainee_id: int):
    return db.query(Trainee).filter(Trainee.id == trainee_id).first()


def create_trainee(db: Session, trainee_in: TraineeCreate):
    trainee = Trainee(**trainee_in.dict())
    db.add(trainee)
    db.commit()
    db.refresh(trainee)
    return trainee
