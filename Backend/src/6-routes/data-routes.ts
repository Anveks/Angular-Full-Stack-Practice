import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";

const router = express.Router();

router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await dataService.getAllCategories();
        response.json(categories);
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
