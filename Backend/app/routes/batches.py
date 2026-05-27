from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..schemas.batch import BatchCreate, BatchResponse
from ..services.batch_service import create_batch, get_batches

router = APIRouter(prefix="/batches", tags=["batches"])


@router.post("/", response_model=BatchResponse)
def create_batch_endpoint(batch_in: BatchCreate, db: Session = Depends(get_db)):
    return create_batch(db, batch_in)


@router.get("/", response_model=list[BatchResponse])
def list_batches(db: Session = Depends(get_db)):
    return get_batches(db)
