const path = require('path');

const getImage = async (req, res) => {
  const { id } = req.params;
  try {
    res.sendFile(path.join(__dirname, '../upload', id));
  } catch (err) {
    res.status(400).json("Server error, can't retrieve image");
  }
};

const uploadImage = (req, res) => {
  const path = String(req.file.filename);
  try {
    res.status(200).json({
      path: `http://localhost:5004/download/${path}`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getImage, uploadImage };
