import fs from "fs";
import ImageKit from "imagekit";
import "dotenv/config";

interface UploadResult {
  url: string;
}

const uploadOnImageKit = async (localFilePath: string): Promise<{ error?: string; details?: string } | string> => {
  if (!localFilePath) {
    return { error: "No file path provided" };
  }

  if (!fs.existsSync(localFilePath)) {
    return { error: "File not found" };
  }

  try {
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
    });

    const fileName = localFilePath.split("/").pop()!;

    const data = fs.readFileSync(localFilePath);

    // Convert `imagekit.upload` to a Promise
    const uploadResult: UploadResult = await new Promise((resolve, reject) => {
      imagekit.upload(
        { file: data, fileName },
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result && result.url) {
            resolve({ url: result.url });
          } else {
            reject(new Error("Unexpected result from ImageKit"));
          }
        }
      );
    });

    console.log(uploadResult.url);
    return uploadResult.url;
  } catch (err) {
    try {
      await fs.promises.unlink(localFilePath);
    } catch (unlinkError) {
      console.error("Error deleting local file:", unlinkError);
    }

    return {
      error: "Internal error during image upload"
    };
  }
};

export default uploadOnImageKit;
