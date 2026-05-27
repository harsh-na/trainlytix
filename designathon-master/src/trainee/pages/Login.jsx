import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { GraduationCap, Loader2, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

const SPLIT_BG = "https://static.prod-images.emergentagent.com/jobs/65494c6f-7277-4134-a328-1f949e850228/images/a4b8a41c0b6ab2372f80d42b5a2c83ff2d6f5b7e36182d8bc18b6dca152f8bdc.png";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [email, setEmail] = useState("aanya.sharma@trainlytix.io");
  const [password, setPassword] = useState("trainee123");
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/app/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    toast.success("Welcome back!");
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left visual panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img
          src={SPLIT_BG}
          alt="Trainlytix"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-blue-900/60" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <span className="font-outfit text-2xl font-bold tracking-tight">Trainlytix</span>
          </div>
          <div className="space-y-5 max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200/80 font-semibold">Trainee Portal</p>
            <h2 className="font-outfit text-4xl xl:text-5xl font-bold leading-tight">Track your training journey, stay ahead.</h2>
            <p className="text-base text-slate-200/90 leading-relaxed">
              Manage sessions, assignments, attendance and performance — all in one place,
              built for ambitious trainees.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
              <Stat n="29" l="Modules" />
              <Stat n="14" l="Weeks" />
              <Stat n="92%" l="Attendance" />
            </div>
          </div>
          <p className="text-xs text-slate-300/70">© 2026 Trainlytix Learning Systems</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
            </div>
            <span className="font-outfit text-2xl font-bold tracking-tight text-slate-900">Trainlytix</span>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Sign in</p>
          <h1 className="font-outfit text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Welcome back, trainee.</h1>
          <p className="text-sm text-slate-500 mb-8">Enter your credentials to access your training dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-5" data-testid="login-form">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  data-testid="login-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@trainlytix.io"
                  className="w-full h-12 rounded-lg border border-slate-200 bg-white pl-11 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">Password</label>
                <button type="button" className="text-xs text-blue-600 hover:text-blue-700 font-medium">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  data-testid="login-password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 rounded-lg border border-slate-200 bg-white pl-11 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <button
              data-testid="login-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-slate-900/10 disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Sign in <ArrowRight className="h-4 w-4" /></>}
            </button>

            <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Demo credentials</span> are pre-filled. Any email + 6+ char password works.
            </div>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            New to Trainlytix? <span className="text-slate-900 font-semibold">Contact your training coordinator</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ n, l }) => (
  <div>
    <p className="font-outfit text-2xl font-bold">{n}</p>
    <p className="text-xs text-slate-300/80 mt-0.5">{l}</p>
  </div>
);

export default Login;
