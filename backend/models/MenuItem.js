// models/MenuItem.js (ESM)
import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  name: String,
  description: String,
  price: Number,
  ingredients: [
    {
      name: String,
      quantityRequired: Number,
      unit: String, // e.g., kg, litre
    },
  ],
  availableForBulk: { type: Boolean, default: false },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
