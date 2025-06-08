
export const register = async ( username,email, password) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
    method: "POST",
    credentials: "include", // VERY important for session cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username,email, password }),
  });

  const data = await res.json(); // ✅ Read once

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};

// utils/api.js
export const login = async (email, password) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API base URL is not defined.");
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json(); 
    return data; // ✅ Return the response object directly

    
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
  
};

export const logout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  const data = await res.json(); // ✅ Required for same error check

  if (!res.ok) {
    throw new Error(data.message || "Logout failed");
  }

  return data;
};

export const fetchResumeHistory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resumes/history`, {
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch resume history");
  }

  return data;
};


export async function deleteResume(fileName) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete/${encodeURIComponent(fileName)}`, {
      method: "DELETE",
      credentials: "include", // if you're using cookies for auth
    });
    if (!response.ok) throw new Error("Failed to delete resume");
    return await response.json();
  } catch (err) {
    console.error("API deleteResume error:", err.message);
    throw err;
  }
}
