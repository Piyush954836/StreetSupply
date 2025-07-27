// models/Supplier.js (ESM)
import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  name: String,
  businessName: String,
  contactNumber: String,
  email: { type: String, unique: true },
  password: String,
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
  },
  availableMaterials: [
    {
      materialName: String,
      quantityAvailable: Number,
      unit: String, // e.g., kg, litre, packet
    },
  ],
  approved: { type: Boolean, default: false },
});

supplierSchema.index({ location: '2dsphere' });

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier;
