from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..schemas.session import SessionCreate, SessionResponse
from ..services.session_service import create_session, get_sessions

router = APIRouter(prefix="/sessions", tags=["sessions"])


@router.post("/", response_model=SessionResponse)
def create_session_endpoint(session_in: SessionCreate, db: Session = Depends(get_db)):
    return create_session(db, session_in)


@router.get("/", response_model=list[SessionResponse])
def list_sessions(db: Session = Depends(get_db)):
    return get_sessions(db)
