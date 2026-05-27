from sqlalchemy.orm import Session

from ..models import Session as SessionModel
from ..schemas.session import SessionCreate


def get_sessions(db: Session):
    return db.query(SessionModel).all()


def get_session(db: Session, session_id: int):
    return db.query(SessionModel).filter(SessionModel.id == session_id).first()


def create_session(db: Session, session_in: SessionCreate):
    session = SessionModel(**session_in.dict())
    db.add(session)
    db.commit()
    db.refresh(session)
    return session
