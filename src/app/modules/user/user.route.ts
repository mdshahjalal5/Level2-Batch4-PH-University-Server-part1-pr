import express from 'express';
const { Router } = express;

const router = Router();
router.post('/create-student');
router.get('/create-student', (req, res) => {
  res.send('amisha');
});

export const UserRoutes = router;
