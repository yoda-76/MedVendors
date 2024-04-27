import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:true,
});

export default async function uploadFile(file, filename) {
  const filebuffer = await file.arrayBuffer();
  const mime = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(filebuffer).toString("base64");
  const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;
  const uploadToCloudinary = () => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload(fileUri, {
          public_id: `${filename}`,
          folder: "Med_Vendors/Degrees",
          invalidate: true,
        })
        .then((result) => {
          console.log(result);
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };
  await uploadToCloudinary();
  return;
}
