from sqlalchemy.orm import Session

from ..models import Batch
from ..schemas.batch import BatchCreate


def get_batches(db: Session):
    return db.query(Batch).all()


def get_batch(db: Session, batch_id: int):
    return db.query(Batch).filter(Batch.id == batch_id).first()


def create_batch(db: Session, batch_in: BatchCreate):
    batch = Batch(**batch_in.dict())
    db.add(batch)
    db.commit()
    db.refresh(batch)
    return batch
