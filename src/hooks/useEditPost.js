import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { showToast } from "@/utils"

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

function useEditPost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  
  useEffect(() => {
    const getPost = async (slug) => {
      try {
        const res = await fetch(`/api/public/get-post?slug=${slug}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const response = await res.json();
        const { post } = response
        
        if(post){
          setTitle(post.title)
          setTags(post.tags.join(","))
          setThumbnail(post.thumbnail)
          setDesc(post.desc)
          setContent(post.content)
          const dateFromMongo = new Date(post.date);
          setDate(formatDate(dateFromMongo));
          
        }
      } catch (e) {
        showToast(e.message)
      }
    };
    
    if(router.query.slug){
      getPost(router.query.slug)
    }
  }, [router]);

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
    try {
      setLoading(true)
      const token = localStorage.getItem("token")
      if(token === "guest"){
        setLoading(false)
        return showToast("Access Denied: Guest users are not permitted to perform CRUD operations", "error", 4000)
      }
      const res = await fetch(`/api/admin/update-post?slug=${router.query.slug}`, {
        method: "POST",
        body: JSON.stringify({
          title,
          tags,
          thumbnail,
          desc,
          date,
          content,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": token
        },
      });
      const response = await res.json();
      if (response.success) {
        showToast(response.message)
        router.push("/admin/dashboard")
      }else{
        showToast(response.message)
        setLoading(false)
      }
    } catch (e) {
      showToast(e.message,"error")
      setLoading(false)
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

export default useEditPost;
