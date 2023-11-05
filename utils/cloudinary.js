const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const cloudinaryUploadImg = async(filesToUpload) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(filesToUpload, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id
                },
                {resource_type: "auto"}
            )
        })
    })
}


const cloudinaryDeleteImg = async(filesToDelete) => {
    return new Promise((resolve) => {
        cloudinary.uploader.destroy(filesToDelete, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id
                },
                {resource_type: "auto"}
            )
        })
    })
}

module.exports = {cloudinaryUploadImg, cloudinaryDeleteImg}