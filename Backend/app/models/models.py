from .base import Base
from .assessment import Assessment
from .assessment_submission import AssessmentSubmission
from .attendance import Attendance
from .batch import Batch
from .batch_course import BatchCourse
from .coordinator import Coordinator
from .course import Course
from .feedback import Feedback
from .learning_material import LearningMaterial
from .module import Module
from .notification import Notification
from .performance_summary import PerformanceSummary
from .session import Session
from .support_ticket import SupportTicket
from .trainee import Trainee
from .trainee_batch import TraineeBatch
from .trainer import Trainer
from .user import User

__all__ = [
    "Base",
    "User",
    "Trainee",
    "Trainer",
    "Coordinator",
    "Batch",
    "TraineeBatch",
    "Course",
    "Module",
    "BatchCourse",
    "Session",
    "Attendance",
    "LearningMaterial",
    "Assessment",
    "AssessmentSubmission",
    "PerformanceSummary",
    "Feedback",
    "Notification",
    "SupportTicket",
]


class Batch(Base):
    __tablename__ = "batches"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_name = Column(String(255), nullable=False)
    batch_code = Column(String(100), unique=True, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=True)
    mode = Column(String(50), nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'upcoming'"))
    trainer_id = Column(BigInteger, ForeignKey("trainers.id"), nullable=True)
    coordinator_id = Column(BigInteger, ForeignKey("coordinators.id"), nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    trainer = relationship("Trainer", back_populates="batches")
    coordinator = relationship("Coordinator", back_populates="batches")
    trainee_batches = relationship("TraineeBatch", back_populates="batch", cascade="all, delete-orphan")
    batch_courses = relationship("BatchCourse", back_populates="batch", cascade="all, delete-orphan")
    sessions = relationship("Session", back_populates="batch", cascade="all, delete-orphan")
    assessments = relationship("Assessment", back_populates="batch", cascade="all, delete-orphan")
    performance_summaries = relationship("PerformanceSummary", back_populates="batch", cascade="all, delete-orphan")


class TraineeBatch(Base):
    __tablename__ = "trainee_batches"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    enrollment_date = Column(Date, nullable=False, server_default=text("CURRENT_DATE"))
    status = Column(String(50), nullable=False, server_default=text("'active'"))

    __table_args__ = (UniqueConstraint("trainee_id", "batch_id", name="unique_trainee_batch"),)

    trainee = relationship("Trainee", back_populates="trainee_batches")
    batch = relationship("Batch", back_populates="trainee_batches")


class Course(Base):
    __tablename__ = "courses"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    duration_hours = Column(Integer, nullable=True)
    level = Column(String(50), nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    modules = relationship("Module", back_populates="course", cascade="all, delete-orphan")
    batch_courses = relationship("BatchCourse", back_populates="course", cascade="all, delete-orphan")


class Module(Base):
    __tablename__ = "modules"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    course_id = Column(BigInteger, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    module_name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    sequence_order = Column(Integer, nullable=True)

    course = relationship("Course", back_populates="modules")
    sessions = relationship("Session", back_populates="module")
    learning_materials = relationship("LearningMaterial", back_populates="module", cascade="all, delete-orphan")
    assessments = relationship("Assessment", back_populates="module")


class BatchCourse(Base):
    __tablename__ = "batch_courses"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    course_id = Column(BigInteger, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    assigned_date = Column(Date, nullable=False, server_default=text("CURRENT_DATE"))

    __table_args__ = (UniqueConstraint("batch_id", "course_id", name="unique_batch_course"),)

    batch = relationship("Batch", back_populates="batch_courses")
    course = relationship("Course", back_populates="batch_courses")


class Session(Base):
    __tablename__ = "sessions"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    module_id = Column(BigInteger, ForeignKey("modules.id"), nullable=True)
    trainer_id = Column(BigInteger, ForeignKey("trainers.id"), nullable=True)
    title = Column(String(255), nullable=False)
    session_date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=True)
    end_time = Column(Time, nullable=True)
    meeting_link = Column(Text, nullable=True)
    location = Column(Text, nullable=True)
    session_type = Column(String(50), nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'scheduled'"))
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    batch = relationship("Batch", back_populates="sessions")
    module = relationship("Module", back_populates="sessions")
    trainer = relationship("Trainer", back_populates="sessions")
    attendances = relationship("Attendance", back_populates="session", cascade="all, delete-orphan")
    feedbacks = relationship("Feedback", back_populates="session")


class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    session_id = Column(BigInteger, ForeignKey("sessions.id", ondelete="CASCADE"), nullable=False)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    status = Column(String(20), nullable=False)
    check_in_time = Column(DateTime, nullable=True)
    remarks = Column(Text, nullable=True)
    marked_by = Column(BigInteger, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    __table_args__ = (UniqueConstraint("session_id", "trainee_id", name="unique_session_trainee"),)

    session = relationship("Session", back_populates="attendances")
    trainee = relationship("Trainee", back_populates="attendances")


class LearningMaterial(Base):
    __tablename__ = "learning_materials"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    module_id = Column(BigInteger, ForeignKey("modules.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    file_url = Column(Text, nullable=False)
    material_type = Column(String(50), nullable=True)
    uploaded_by = Column(BigInteger, nullable=True)
    uploaded_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    module = relationship("Module", back_populates="learning_materials")


class Assessment(Base):
    __tablename__ = "assessments"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    module_id = Column(BigInteger, ForeignKey("modules.id"), nullable=True)
    title = Column(String(255), nullable=False)
    assessment_type = Column(String(50), nullable=True)
    total_marks = Column(Numeric(5, 2), nullable=True)
    due_date = Column(DateTime, nullable=True)
    created_by = Column(BigInteger, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    batch = relationship("Batch", back_populates="assessments")
    module = relationship("Module", back_populates="assessments")
    submissions = relationship("AssessmentSubmission", back_populates="assessment", cascade="all, delete-orphan")


class AssessmentSubmission(Base):
    __tablename__ = "assessment_submissions"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    assessment_id = Column(BigInteger, ForeignKey("assessments.id", ondelete="CASCADE"), nullable=False)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    submission_url = Column(Text, nullable=True)
    submitted_at = Column(DateTime, nullable=True)
    score = Column(Numeric(5, 2), nullable=True)
    feedback = Column(Text, nullable=True)
    status = Column(String(50), nullable=False, server_default=text("'submitted'"))
    evaluated_by = Column(BigInteger, nullable=True)

    __table_args__ = (UniqueConstraint("assessment_id", "trainee_id", name="unique_assessment_submission"),)

    assessment = relationship("Assessment", back_populates="submissions")
    trainee = relationship("Trainee", back_populates="assessment_submissions")


class PerformanceSummary(Base):
    __tablename__ = "performance_summary"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    batch_id = Column(BigInteger, ForeignKey("batches.id", ondelete="CASCADE"), nullable=False)
    attendance_percentage = Column(Numeric(5, 2), nullable=True)
    average_score = Column(Numeric(5, 2), nullable=True)
    rank = Column(Integer, nullable=True)
    completion_percentage = Column(Numeric(5, 2), nullable=True)
    last_updated = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    trainee = relationship("Trainee", back_populates="performance_summaries")
    batch = relationship("Batch", back_populates="performance_summaries")


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    session_id = Column(BigInteger, ForeignKey("sessions.id", ondelete="CASCADE"), nullable=True)
    trainer_id = Column(BigInteger, ForeignKey("trainers.id"), nullable=True)
    rating = Column(Integer, nullable=True)
    comments = Column(Text, nullable=True)
    submitted_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    __table_args__ = (CheckConstraint("rating BETWEEN 1 AND 5", name="rating_between_1_and_5"),)

    trainee = relationship("Trainee", back_populates="feedbacks")
    session = relationship("Session", back_populates="feedbacks")
    trainer = relationship("Trainer", back_populates="feedbacks")


class Notification(Base):
    __tablename__ = "notifications"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    type = Column(String(50), nullable=True)
    is_read = Column(Boolean, nullable=False, server_default=text("FALSE"))
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))

    user = relationship("User", back_populates="notifications")


class SupportTicket(Base):
    __tablename__ = "support_tickets"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    trainee_id = Column(BigInteger, ForeignKey("trainees.id", ondelete="CASCADE"), nullable=False)
    subject = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    priority = Column(String(50), nullable=False, server_default=text("'medium'"))
    status = Column(String(50), nullable=False, server_default=text("'open'"))
    assigned_to = Column(BigInteger, nullable=True)
    created_at = Column(DateTime, nullable=False, server_default=text("CURRENT_TIMESTAMP"))
    resolved_at = Column(DateTime, nullable=True)

    trainee = relationship("Trainee", back_populates="support_tickets")
