import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/vendor/login`,
        {
          email,
          password,
          role: "vendor",
        },
        { withCredentials: true }
      );

      alert("Login successful");
      navigate("/vendor/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)] transition-all duration-500">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 rounded-2xl shadow-md border"
        style={{
          background: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-[hsl(var(--secondary))]">
          Vendor Login
        </h2>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border-b bg-transparent outline-none placeholder-gray-500"
            style={{
              borderColor: "hsl(var(--border))",
              transition: "var(--transition-smooth)",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "hsl(var(--secondary))")
            }
            onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border-b bg-transparent outline-none placeholder-gray-500"
            style={{
              borderColor: "hsl(var(--border))",
              transition: "var(--transition-smooth)",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "hsl(var(--secondary))")
            }
            onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-2 rounded-full font-medium text-white shadow-md hover:scale-105 transition-transform"
          style={{
            background: "var(--gradient-secondary)",
            transition: "var(--transition-smooth)",
          }}
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account?{" "}
        <Link to="/vendor/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default VendorLogin;
