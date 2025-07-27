import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SupplierRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contactNumber: "",
    email: "",
    password: "",
    location: { coordinates: [0, 0] }, // [longitude, latitude]
    availableMaterials: [{ materialName: "", quantityAvailable: "", unit: "" }],
  });

  const [message, setMessage] = useState("");
  const [locating, setLocating] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setFormData((prev) => ({
            ...prev,
            location: { ...prev.location, coordinates: [longitude, latitude] },
          }));
          setLocating(false);
        },
        (err) => {
          console.error("Location error:", err);
          setMessage("Could not fetch location. Please allow location access.");
          setLocating(false);
        }
      );
    } else {
      setMessage("Geolocation not supported by your browser.");
      setLocating(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMaterialChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...formData.availableMaterials];
    updated[index][name] = value;
    setFormData((prev) => ({ ...prev, availableMaterials: updated }));
  };

  const addMaterial = () => {
    setFormData((prev) => ({
      ...prev,
      availableMaterials: [
        ...prev.availableMaterials,
        { materialName: "", quantityAvailable: "", unit: "" },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/api/supplier/register", formData);

    if (response.status === 201) {
      window.alert("Registration successful. Please login.");
      navigate("/supplier/login");
    } else {
      window.alert("Registration failed. Please try again.");
    }
  } catch (error: any) {
    if (error.response?.data?.message) {
      window.alert(`Error: ${error.response.data.message}`);
    } else {
      window.alert("An unexpected error occurred.");
    }
  }
};


  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Supplier Registration</h2>

      {locating && (
        <p className="text-blue-600 mb-4">Fetching your location...</p>
      )}
      {message && <p className="text-red-500 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Business Name"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Available Materials</h3>
          {formData.availableMaterials.map((mat, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 mb-2">
              <input
                className="border px-3 py-2 rounded"
                placeholder="Material Name"
                name="materialName"
                value={mat.materialName}
                onChange={(e) => handleMaterialChange(index, e)}
              />
              <input
                className="border px-3 py-2 rounded"
                type="number"
                placeholder="Quantity"
                name="quantityAvailable"
                value={mat.quantityAvailable}
                onChange={(e) => handleMaterialChange(index, e)}
              />
              <input
                className="border px-3 py-2 rounded"
                placeholder="Unit (e.g., kg)"
                name="unit"
                value={mat.unit}
                onChange={(e) => handleMaterialChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600 text-sm mt-2"
            onClick={addMaterial}
          >
            + Add Material
          </button>
        </div>

        <button
          type="submit"
          disabled={locating}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SupplierRegister;
