import { TRAINEE } from "../lib/mockData";
import { Mail, Phone, MapPin, Calendar, BadgeCheck, GraduationCap, User } from "lucide-react";

const Profile = () => {
  const initials = TRAINEE.name.split(" ").map(n => n[0]).join("");
  
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        </div>
        <div className="px-6 sm:px-8 pb-6 -mt-12 flex flex-col sm:flex-row sm:items-end gap-4">
          <div className="h-24 w-24 rounded-full ring-4 ring-white shadow-md bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            {initials}
          </div>
          <div className="flex-1">
            <h2 className="font-outfit text-2xl font-bold text-slate-900">{TRAINEE.name}</h2>
            <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
              <BadgeCheck className="h-4 w-4 text-blue-600" /> {TRAINEE.id} · {TRAINEE.batch}
            </p>
          </div>
          <button data-testid="edit-profile-btn" className="h-10 px-4 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Edit Profile</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Personal Information">
          <Field icon={User} label="Full name" value={TRAINEE.name} />
          <Field icon={Mail} label="Email" value={TRAINEE.email} />
          <Field icon={Phone} label="Phone" value={TRAINEE.phone} />
          <Field icon={MapPin} label="Location" value={TRAINEE.location} />
        </Section>
        <Section title="Training Details">
          <Field icon={GraduationCap} label="Batch" value={TRAINEE.batch} />
          <Field icon={BadgeCheck} label="Batch code" value={TRAINEE.batchCode} />
          <Field icon={User} label="Mentor" value={TRAINEE.mentor} />
          <Field icon={Calendar} label="Joined on" value={TRAINEE.joinedAt} />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
    <h3 className="font-outfit text-base font-semibold text-slate-900 mb-4">{title}</h3>
    <div className="space-y-3">{children}</div>
  </section>
);

const Field = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="h-5 w-5 text-slate-400 mt-0.5" />
    <div className="flex-1">
      <p className="text-xs text-slate-500 font-medium uppercase">{label}</p>
      <p className="text-sm text-slate-900 mt-1">{value}</p>
    </div>
  </div>
);

export default Profile;
