import React, { createContext, useContext, useState, useEffect } from "react";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simulate auth check
    const timer = setTimeout(() => {
      const storedUser = localStorage.getItem("admin_user");
      if (storedUser) {
        setAdminUser(JSON.parse(storedUser));
      }
      setReady(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const login = async (email, password) => {
    try {
      // Admin role only
      if (email === "admin@trainlytix.io" && password === "admin123") {
        const admin = {
          id: "ADM-001",
          name: "Admin User",
          email,
          role: "admin"
        };
        setAdminUser(admin);
        localStorage.setItem("admin_user", JSON.stringify(admin));
        return { ok: true };
      }
      return { ok: false, error: "Invalid credentials. Admin access only." };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  };

  const logout = () => {
    setAdminUser(null);
    localStorage.removeItem("admin_user");
  };

  return (
    <AdminAuthContext.Provider value={{ adminUser, login, logout, ready }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
