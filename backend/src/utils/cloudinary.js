import {v2 as cloudinary} from "cloudinary";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET
});



const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return
        // upload file
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded
        // console.log("File uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response
    } catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file if the uploading fail
    }
}





// deleting method

const publicIdWithoutExtension = async(imageUrl) => {
    const pathSegments = imageUrl.split('/');
    const lastSegment = pathSegments[pathSegments.length-1];
    const valueWithoutExtension = lastSegment.replace(".jpg","");
    return valueWithoutExtension
}


const deleteFromCloudinary = async (publicId) => {

    try {
        const newPublicId  = await publicIdWithoutExtension(publicId)

        const response = await cloudinary.uploader.destroy(`${newPublicId}`)

        return response
    } catch (error) {
        throw new Error("Could not delete")
    }

};




export {uploadOnCloudinary,deleteFromCloudinary}