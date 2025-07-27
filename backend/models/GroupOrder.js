// models/GroupOrder.js (ESM)
import mongoose from 'mongoose';

const groupOrderSchema = new mongoose.Schema({
  orderInitiator: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  participatingVendors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }],
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  materials: [
    {
      materialName: String,
      totalQuantity: Number,
      unit: String,
      vendorBreakup: [
        {
          vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
          quantity: Number,
        },
      ],
    },
  ],
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'dispatched', 'delivered', 'cancelled'],
    default: 'pending',
  },
  createdAt: { type: Date, default: Date.now },
  expectedDelivery: Date,
});

const GroupOrder = mongoose.model('GroupOrder', groupOrderSchema);
export default GroupOrder;
