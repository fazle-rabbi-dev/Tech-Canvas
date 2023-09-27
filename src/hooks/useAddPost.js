import { useState } from "react";
import { showToast } from "@/utils";
import { useRouter } from "next/router";

function useAddPost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "thumbnail":
        setThumbnail(value);
        break;

      case "desc":
        setDesc(value);
        break;

      case "date":
        setDate(value);
        break;

      case "content":
        setContent(value);
        break;

      case "tags":
        setTags(value);
        break;

      default:
      // code
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !desc || !content || !tags || !thumbnail) {
      showToast("Oops! inavild form input", "error");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token === "guest") {
        setLoading(false);
        return showToast(
          "Access Denied: Guest users are not permitted to perform CRUD operations",
          "error",
          4000
        );
      }
      const res = await fetch(`/api/admin/add-post`, {
        method: "POST",
        body: JSON.stringify({
          title,
          thumbnail,
          tags,
          desc,
          content,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      });
      const response = await res.json();
      if (response.success) {
        showToast(response.message);
        router.push("/admin/dashboard");
      } else {
        showToast(response.message);
        setLoading(false);
      }
    } catch (e) {
      showToast(e.message);
      setLoading(false);
    }
  };

  return {
    title,
    thumbnail,
    desc,
    tags,
    date,
    content,
    onChange,
    handleSubmit,
    loading
  };
}

export default useAddPost;
