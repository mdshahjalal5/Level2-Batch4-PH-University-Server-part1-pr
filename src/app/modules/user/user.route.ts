import express from 'express';
const { Router } = express;

const router = Router();
router.post('/create-student');

export const UserRoutes = router;
