import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  let token
  // console.log(req.headers.authorization)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('token decoded: ', decoded);
      // don't send back password
      // now we have req.user in all our protected routes.
      // req.user = await User.findById(decoded.id)
      req.user = await User.findById(decoded.id).select('-password');
      console.log('req.user: ', req.user);

      next();
    } catch (error) {
      console.error(error);
      res.status(401)
      throw new Error('Not authorized, no token')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
    // return res.status(401).json({
    //   message: 'Unauthorized request'
    // })

  }

  // next()
})

export { protect }

