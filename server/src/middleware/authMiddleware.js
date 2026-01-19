import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token){
        return res.status(401).json({message: "Unauthorized: no token provided"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: ["HS256"]
        });

        req.userId = decoded.id;
        next();
    } catch(error){
        return res.status(403).json({message: "Forbidden: Invalid or expired token"});
    }
};