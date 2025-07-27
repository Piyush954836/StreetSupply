// models/Vendor.js (ESM)
import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: String,
  shopName: String,
  contactNumber: String,
  email: { type: String, unique: true },
  password: String, // Store hashed
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
  },
  foodTypes: [String], // e.g., ["chaat", "momos"]
  approved: { type: Boolean, default: false },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
}, { timestamps: true });

vendorSchema.index({ location: '2dsphere' });

const Vendor = mongoose.model('Vendor', vendorSchema);
export default Vendor;
