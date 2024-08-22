import { Router } from 'express';
import { saveRawMaterialDetails } from '../controllers/raw-material.controller'

const rawMaterialRouter = Router();

rawMaterialRouter.route('/save-details').post(saveRawMaterialDetails);

export default rawMaterialRouter;



// const express = require('express');
// const router = express.Router();

// // Define route handler for saving raw material details
// router.post('/save-details', async (req, res) => {
//     // Your route handler code here
// });

// module.exports = router;