// models/InventoryLog.js (ESM)
import mongoose from 'mongoose';

const inventoryLogSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  materialName: String,
  quantity: Number,
  unit: String,
  type: {
    type: String,
    enum: ['add', 'consume'], // 'add' = purchased, 'consume' = used in menu
    required: true,
  },
  relatedOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'GroupOrder' },
  date: { type: Date, default: Date.now },
});

const InventoryLog = mongoose.model('InventoryLog', inventoryLogSchema);
export default InventoryLog;
