import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { GraduationCap, Loader2, Mail, Lock, ArrowRight } from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { toast } from "sonner";

const SPLIT_BG = "https://static.prod-images.emergentagent.com/jobs/65494c6f-7277-4134-a328-1f949e850228/images/a4b8a41c0b6ab2372f80d42b5a2c83ff2d6f5b7e36182d8bc18b6dca152f8bdc.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, adminUser } = useAdminAuth();
  const [email, setEmail] = useState("admin@trainlytix.io");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);

  if (adminUser) return <Navigate to="/admin/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    toast.success("Welcome back, Admin!");
    navigate("/admin/dashboard");
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-red-900/60" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <span className="font-outfit text-2xl font-bold tracking-tight">Trainlytix</span>
          </div>
          <div className="space-y-5 max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-red-200/80 font-semibold">Admin Portal</p>
            <h2 className="font-outfit text-4xl xl:text-5xl font-bold leading-tight">Govern your training ecosystem with intelligence.</h2>
            <p className="text-base text-slate-200/90 leading-relaxed">
              Monitor operations, ensure compliance, manage automation — all from a centralized control hub.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
              <Stat n="6" l="Active Batches" />
              <Stat n="248" l="Trainees" />
              <Stat n="24" l="Trainers" />
            </div>
          </div>
          <p className="text-xs text-slate-300/70">© 2026 Trainlytix Learning Systems</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
            </div>
            <span className="font-outfit text-2xl font-bold tracking-tight text-slate-900">Trainlytix</span>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-red-600 font-semibold mb-3">Admin Access</p>
          <h1 className="font-outfit text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Admin Portal.</h1>
          <p className="text-sm text-slate-500 mb-8">Sign in to your admin account to manage the training platform.</p>

          <form onSubmit={handleSubmit} className="space-y-5" data-testid="admin-login-form">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  data-testid="admin-login-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@trainlytix.io"
                  className="w-full h-12 rounded-lg border border-slate-200 bg-white pl-11 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  data-testid="admin-login-password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 rounded-lg border border-slate-200 bg-white pl-11 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <button
              data-testid="admin-login-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white text-sm font-semibold transition inline-flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Signing in...
                </>
              ) : (
                <>
                  Sign in <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">Demo Credentials:</p>
            <p className="text-xs text-slate-600 text-center mt-1">Email: <span className="font-mono">admin@trainlytix.io</span></p>
            <p className="text-xs text-slate-600 text-center">Password: <span className="font-mono">admin123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ n, l }) => (
  <div>
    <p className="text-sm font-bold text-white">{n}</p>
    <p className="text-xs text-slate-300/70 mt-0.5">{l}</p>
  </div>
);

export default AdminLogin;
