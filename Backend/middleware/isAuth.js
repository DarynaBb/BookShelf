import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = req.cookies?.jwt;
    if(!token) {
        console.log("not found Token")
        return res.status(401).send({error: "not authorisiert"}); 
    }try {
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedPayload.userId;
        next();
        
    }catch (error) {
        console.log(error);
        return res.status(401).send({error: "not authorisiert"});
    }

}



