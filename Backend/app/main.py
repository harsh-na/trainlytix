from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine
from .models import Base
from .routes.batches import router as batches_router
from .routes.sessions import router as sessions_router
from .routes.trainees import router as trainees_router
from .routes.users import router as users_router

app = FastAPI(title="Trainlytix Maverick Execution Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(trainees_router)
app.include_router(batches_router)
app.include_router(sessions_router)

Base.metadata.create_all(bind=engine)


@app.get("/")
def read_root():
    return {"message": "Trainlytix backend is running"}
