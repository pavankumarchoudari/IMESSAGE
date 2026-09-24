import express from 'express';
import { getMessages, getUsersForSidebar, getUsersForSidebar } from '../controllers/message.controller.js';

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/:id", getMessages);
router.post("/send/:id",upload.single("media"), sendMessage);


export default router;
