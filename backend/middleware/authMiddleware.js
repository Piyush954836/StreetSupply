export const sessionAuth = (roles = []) => {
  return (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (roles.length && !roles.includes(req.session.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};
