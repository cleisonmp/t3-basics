import { S3 } from "aws-sdk";
import { randomUUID } from "crypto";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "../../env/server.mjs";

const imageUpload = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3({
    apiVersion: "2006-03-01",
    accessKeyId: env.MY_AWS_ACCESS_KEY,
    secretAccessKey: env.MY_AWS_SECRET_KEY,
    region: env.MY_AWS_REGION,
    signatureVersion: "v4",
  });

  //TODO:  check and format the mime types correctly some files might break with this simples split
  const fileExtension = (req.query.fileType as string).split("/")[1];
  const fileKey = `${randomUUID()}.${fileExtension}`;

  const s3Params = {
    Bucket: env.MY_AWS_BUCKET_NAME,
    Key: fileKey, //userID+fileKey
    Expires: 60,
    ContentType: `image/${fileExtension}`,
  };

  const uploadUrl = await s3.getSignedUrl("putObject", s3Params);
  console.log("uploadUrl", uploadUrl);

  res.status(200).json({
    uploadUrl,
    fileKey,
  });
};

export default imageUpload;
//getObject
