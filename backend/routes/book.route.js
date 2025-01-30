import express from "express"
import { getBooks, update,createBooks, updateBook, deleteBook } from "../controllers/book.controller.js";


const router = express.Router();
router.post("/",createBooks);
router.get("/",getBooks);
router.get("/:id",updateBook);
router.put("/:id",update);
router.delete("/:id",deleteBook);

export default router