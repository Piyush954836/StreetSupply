// middleware/auth.js
export const isSupplierLoggedIn = (req, res, next) => {
  if (req.session && req.session.supplier) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized. Please log in.' });
};
