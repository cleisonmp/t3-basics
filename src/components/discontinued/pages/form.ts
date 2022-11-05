// import { S3 } from "aws-sdk";
// import { randomUUID } from "crypto";
// import { type NextApiRequest, type NextApiResponse } from "next";
// import { env } from "../../env/server.mjs";

// import formidable from "formidable";
// import type { File } from "formidable";
// import fs from "fs";
// import type { PutObjectCommandOutput } from "@aws-sdk/client-s3";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const form = async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log("inside request");

//   const form = new formidable.IncomingForm();
//   console.log("form", form);

//   const s3Client = new S3Client({
//     region: env.MY_AWS_REGION,
//     credentials: {
//       accessKeyId: env.MY_AWS_ACCESS_KEY,
//       secretAccessKey: env.MY_AWS_SECRET_KEY,
//     },
//   });

//   const uploadArr: PutObjectCommand[] = [];

//   form.parse(req, async function (err, fields, files) {
//     if (err) {
//       res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
//       res.end(String(err));
//       return;
//     }

//     console.log("fields===", fields);
//     console.log("files===", files);

//     console.log(
//       "(files.file as File).filepath=",
//       (files.file as File).filepath
//     );

//     const data = fs.readFileSync((files.file as File).filepath);
//     // fs.writeFileSync(`./public/${file.name}`, data);
//     // await fs.unlinkSync(file.path);
//     // return;

//     /*uploadArr.push(
//       new PutObjectCommand({
//         Bucket: env.MY_AWS_BUCKET_NAME,
//         Key: "file-name",
//         Body: data,
//       })
//     );*/

//     const s3Request = new PutObjectCommand({
//       Bucket: env.MY_AWS_BUCKET_NAME,
//       Key: "file-name.png",
//       Body: data,
//     });

//     console.log("uploadCommand", uploadArr[0]);
//     console.log("asdasdasdasdasdasd");
//     console.log("after parse");

//     const responseArr: PutObjectCommandOutput[] = [];
//     try {
//       /*uploadArr.forEach(async (upload, indx) => {
//         console.log("sending=", indx);
//         const response = await s3Client.send(upload);
//         responseArr.push(response);
//         console.log("response=", response);
//       });*/

//       const response = await s3Client.send(s3Request);
//       responseArr.push(response);
//       console.log("response=", response);
//     } catch (error) {
//       res.status(400).json({
//         mes: "deu zebra",
//       });
//     }
//     // const response = await s3Client.send(uploadCommand);

//     return res.status(200).json(responseArr);
//   });
// };

// export default form;
//export const

//not being used
//kept as example
export {};
// //getObject
