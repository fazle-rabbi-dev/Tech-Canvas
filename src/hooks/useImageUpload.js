import { useState, useEffect, useRef } from "react";
import { storage } from "@/utils/firebase-config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function useImageUpload() {
  const [imageDownloadURL, setImageDownloadURL] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [enableUpload, setEnableUpload] = useState(false)
  
  const imageField = useRef();

  const handleFileUpload = (e) => {
    // const file = e.target.files[0];
    const file = imageField.current.files[0];
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress updates
        let progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = Math.ceil(progress)
        console.log(`Upload is ${progress}% done`);
        setUploadProgress(`${progress}`)
      },
      (error) => {
        // Handle errors
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((imageURL) => {
          setImageDownloadURL(imageURL);
          // console.log("Upload complete");
          // console.log("File available at", imageURL);
        });
      },
      () => {
        // Upload complete
        console.log("Upload paused");
      }
    );
  };

  const handleCopyImageLink = (e) => {
    e.preventDefault()
    if (imageDownloadURL && window.navigator.clipboard) {
      window.navigator.clipboard
        .writeText(imageDownloadURL)
        .then(() => {
          console.log("Text copied to clipboard");
          setImageDownloadURL("")
          setUploadProgress(0)
          setEnableUpload(false)
          imageField.current.value = ""
        })
        .catch((err) => {
          console.error("Error writing to clipboard:", err);
        });
    }
  };

  return {
    handleFileUpload,
    imageDownloadURL,
    imageField,
    handleCopyImageLink,
    uploadProgress,
    enableUpload,
    setEnableUpload
  };
}

export default useImageUpload;
