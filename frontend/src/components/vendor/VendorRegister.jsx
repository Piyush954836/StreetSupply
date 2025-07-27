import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const VendorRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    shopName: "",
    contactNumber: "",
    email: "",
    password: "",
    foodTypes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const foodTypesArray = formData.foodTypes.split(",").map((f) => f.trim());
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/vendor/register`,
      {
        ...formData,
        foodTypes: foodTypesArray,
        location: { type: "Point", coordinates: [0, 0] },
        role: "vendor"
      },
      { withCredentials: true } // send session cookie
    );

    alert("Registered successfully");
    navigate("/vendor/dashboard");
  } catch (error) {
    alert(error.response?.data?.message || "Registration failed");
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)] transition-all duration-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-2xl shadow-md border"
        style={{
          background: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-[hsl(var(--primary))]">
          Vendor Register
        </h2>

        {[
          { name: "name", placeholder: "Name" },
          { name: "shopName", placeholder: "Shop Name" },
          { name: "contactNumber", placeholder: "Contact Number" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "password", placeholder: "Password", type: "password" },
          { name: "foodTypes", placeholder: "Food Types (comma separated)" },
        ].map(({ name, placeholder, type = "text" }) => (
          <div key={name} className="mb-4">
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-b outline-none focus:ring-0 bg-transparent placeholder-gray-500 transition-all"
              style={{
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                transition: "var(--transition-smooth)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "hsl(var(--primary))")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "hsl(var(--border))")
              }
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 mt-4 rounded-full font-medium text-white shadow-md hover:scale-105 transition-transform"
          style={{
            background: "var(--gradient-hero)",
            transition: "var(--transition-smooth)",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default VendorRegister;
