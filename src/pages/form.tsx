import { useState } from "react";
import axios from "axios";
import type { GetServerSideProps } from "next";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import type { ChangeEvent } from "react";

const FormUpload: NextPage = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [createObjectURL, setCreateObjectURL] = useState("");

  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      setImageFile(image);
      setCreateObjectURL(URL.createObjectURL(image));
    }
  };

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    //    uploadToClient(e.target.files[0]);

    if (!imageFile) {
      return;
    }

    const form = new FormData();
    form.append("someData", "=====someData======");
    form.append("file", imageFile);

    const response = await axios.post("/api/form", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("axios response", response);
  }

  return (
    <div>
      <div>
        <Image src={createObjectURL} alt="" width={400} height={400} />
        <h4>Select Image</h4>
        <form action="" onSubmit={handleSubmit}>
          <input type="file" name="myImage" onChange={uploadToClient} />
          <button className="btn btn-primary" type="submit">
            Send to server
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormUpload;
