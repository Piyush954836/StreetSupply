// middleware/isVendorAuth.js
export const isVendorAuth = (req, res, next) => {
  if (req.session && req.session.vendor) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
