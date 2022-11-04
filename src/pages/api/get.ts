import { S3 } from "aws-sdk";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "../../env/server.mjs";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const fileName = req.query.file as string;
  console.log("fileName", fileName);

  const s3 = new S3({
    apiVersion: "2006-03-01",
    accessKeyId: env.MY_AWS_ACCESS_KEY,
    secretAccessKey: env.MY_AWS_SECRET_KEY,
    region: env.MY_AWS_REGION,
    signatureVersion: "v4",
  });

  const s3Params = {
    Bucket: env.MY_AWS_BUCKET_NAME,
    Key: fileName,
    Expires: 60 * 60 * 24 * 7, //7 days
  };

  const uploadUrl = await s3.getSignedUrl("getObject", s3Params);
  console.log("getObject", uploadUrl);

  res.status(200).json({
    uploadUrl,
  });
};

export default get;
//getObject
