import { validationResult } from 'express-validator';

export const authenticateUser = (req, res, next) => {
    // Validate user input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    next(); // Proceed to the next middleware or route
};
