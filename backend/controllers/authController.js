// import bcrypt from 'bcryptjs';
// import generateToken from '../utils/generateToken.js';
// import Vendor from '../models/Vendor.js';

// export const vendorRegister = async (req, res) => {
//   const { email, password, name, contact, shopName, ...rest } = req.body;

//   try {
//     const existingVendor = await Vendor.findOne({ email });
//     if (existingVendor) {
//       return res.status(400).json({ message: 'Vendor already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const vendor = await Vendor.create({
//       email,
//       password: hashedPassword,
//       name,
//       contact,
//       shopName,
//       ...rest,
//     });

//     res.status(201).json({
//       message: 'Vendor registered successfully',
//       token: generateToken(vendor._id, 'vendor'),
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const vendorLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const vendor = await Vendor.findOne({ email });
//     if (!vendor) {
//       return res.status(404).json({ message: 'Vendor not found' });
//     }

//     const isMatch = await bcrypt.compare(password, vendor.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     req.session.vendor = {
//       id: vendor._id,
//       name: vendor.name,
//       email: vendor.email,
//       shopName: vendor.shopName || '',
//     };

//     res.status(200).json({
//       message: 'Vendor logged in successfully',
//       vendor,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
