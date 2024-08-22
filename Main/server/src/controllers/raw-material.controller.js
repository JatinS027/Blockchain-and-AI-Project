// import RawMaterial from '../models/raw-material.model';

// const saveRawMaterialDetails = async (req, res) => {
//     let rawMaterial = new RawMaterial(req.body.description, req.body.quantity, req.body.rawMaterialAddress);
//     let returnValue = await rawMaterial.save();
//     if (returnValue) {
//         res.status(201).send({
//             'message': 'Saved!',
//             'error': false
//         });
//     } else {
//         res.status(201).send({
//             'message': 'Saved!',
//             'error': true
//         });
//     }
// }

// export { saveRawMaterialDetails };
import RawMaterial from '../models/raw-material.model';

const saveRawMaterialDetails = async (req, res) => {
    try {
        const { description, quantity, rawMaterialAddress } = req.body;
        
        // Validate request body properties
        if (!description || !quantity || !rawMaterialAddress) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        // Create a new RawMaterial instance
        const rawMaterial = new RawMaterial(description, quantity, rawMaterialAddress);

        // Save the raw material details
        const savedRawMaterial = await rawMaterial.save();

        if (savedRawMaterial) {
            return res.status(201).json({ success: true, message: 'Raw material details saved successfully' });
        } else {
            return res.status(500).json({ success: false, error: 'Failed to save raw material details' });
        }
    } catch (error) {
        console.error('Error saving raw material details:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export { saveRawMaterialDetails };
