import express from 'express';
import bcrypt from 'bcryptjs';
import Supplier from '../models/Supplier.js';
import { isSupplierLoggedIn } from '../middleware/isSupplierAuth.js';

const router = express.Router();

// Supplier Registration
router.post('/register', async (req, res) => {
  try {
    const { name, businessName, contactNumber, email, password, location, availableMaterials } = req.body;

    const existing = await Supplier.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const supplier = new Supplier({
      name,
      businessName,
      contactNumber,
      email,
      password: hashedPassword,
      location,
      availableMaterials
    });

    await supplier.save();
    res.status(201).json({ message: 'Supplier registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Supplier Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const supplier = await Supplier.findOne({ email });
  if (!supplier) return res.status(400).json({ message: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, supplier.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

  // Create session
  req.session.supplier = {
    id: supplier._id,
    name: supplier.name,
    businessName: supplier.businessName,
    email: supplier.email,
  };

  res.json({ message: 'Login successful', supplier: req.session.supplier });
});

router.get('/dashboard', isSupplierLoggedIn, async (req, res) => {
  try {
    const fullSupplier = await Supplier.findById(req.session.supplier.id);
    if (!fullSupplier) return res.status(404).json({ message: 'Supplier not found' });

    res.json({ supplier: fullSupplier });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


router.get('/check-session', (req, res) => {
  if (req.session.supplier) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

export default router;
