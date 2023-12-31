import { config } from '../config/index.js';
import jwt from 'jsonwebtoken';

export const authorization = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    try {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      const { id } = jwt.verify(bearerToken, config.app.key);
      req.id = id;
      next();
    } catch (error) {
      res.status(401).json({ status: -1, message: 'Unauthenticated' });
    }
  } else {
    res.status(401).json({ status: -1, message: 'Unauthenticated' });
  }
};
