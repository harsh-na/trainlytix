import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "trainlytix_auth_v1";

// Dummy credentials for different roles
const DUMMY_CREDENTIALS = {
  trainee: {
    email: "trainee@trainlytix.io",
    password: "trainee123",
    role: "trainee",
    name: "John Trainee"
  },
  trainer: {
    email: "trainer@trainlytix.io",
    password: "trainer123",
    role: "trainer",
    name: "Sarah Trainer"
  },
  admin: {
    email: "admin@trainlytix.io",
    password: "admin123",
    role: "admin",
    name: "Admin User"
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch (_) {}
    }
    setReady(true);
  }, []);

  // Role-based login with dummy credentials
  const login = async (email, password) => {
    await new Promise((r) => setTimeout(r, 500));
    
    if (!email || !email.includes("@")) {
      return { ok: false, error: "Please enter a valid email." };
    }
    if (!password || password.length < 6) {
      return { ok: false, error: "Password must be at least 6 characters." };
    }

    // Check against dummy credentials
    let matchedRole = null;
    for (const [role, creds] of Object.entries(DUMMY_CREDENTIALS)) {
      if (creds.email === email && creds.password === password) {
        matchedRole = role;
        break;
      }
    }

    if (!matchedRole) {
      return { ok: false, error: "Invalid email or password." };
    }

    const creds = DUMMY_CREDENTIALS[matchedRole];
    const session = {
      email: creds.email,
      name: creds.name,
      role: creds.role,
      token: "mock." + btoa(email + ":" + Date.now()),
      issuedAt: new Date().toISOString(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true, user: session };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, ready }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const DUMMY_CREDS = DUMMY_CREDENTIALS;