import express from 'express';
import bcrypt from 'bcryptjs';
import Vendor from '../models/Vendor.js';
import MenuItem from '../models/MenuItem.js'; // Required to populate menu
import { isVendorAuth } from '../middleware/isVendorAuth.js';

const router = express.Router();

// Register Vendor
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.status(409).json({ message: 'Vendor already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newVendor = await Vendor.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    // Save to session
    req.session.vendor = { id: newVendor._id, email: newVendor.email };
    res.status(201).json({ message: 'Vendor registered', vendor: req.session.vendor });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Vendor
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.session.vendor = { id: vendor._id, email: vendor.email };
    res.status(200).json({ message: 'Login successful', vendor: req.session.vendor });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Vendor Auth Check
router.get('/isVendorAuth', (req, res) => {
  if (req.session.vendor) {
    res.json({ vendor: req.session.vendor });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

// Dashboard (Protected)
router.get('/dashboard', isVendorAuth, (req, res) => {
  res.json({ vendor: req.session.vendor });
});

// Get Vendor Details (Protected)
router.get('/me', isVendorAuth, async (req, res) => {
  try {
    const vendorId = req.session.vendor.id;

    const vendor = await Vendor.findById(vendorId).populate('menu');
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.json(vendor);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

export default router;
