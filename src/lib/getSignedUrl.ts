import { S3 } from "aws-sdk";
import { env } from "../env/server.mjs";

export const getSignedUrl = async (fileName: string) => {
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
    Expires: 60 * 60 * 24, //24 hours
  };

  const signedUrl = await s3.getSignedUrl("getObject", s3Params);

  return signedUrl;
};
