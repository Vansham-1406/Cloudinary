const cloudinary = require("../services/Cloudinary")

exports.storyData = async (req,res) => {
    console.log(req.body)

    try {
        const storedImage = await cloudinary.v2.uploader.upload(req.body.image, {
          upload_preset: "ml_default",
        });
        console.log("storedImage", storedImage);
      } 
      catch (error) {
        console.log('error', error)
      }

}