import { useState } from "react";
import { showToast } from "@/utils";
import { useRouter } from "next/router";
import Head from "next/head";
import { useAuthContext } from "@/context-api";
import { Loading } from "@/components";

function DeletePostPage() {
  const [loading, setLoading] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const router = useRouter();
  const { authLoading, isLoggedIn, authToken } = useAuthContext();

  const handleDelete = async () => {
    if (confirmText !== "im sure") {
      showToast("Oops! type im sure", "error");
    } else {
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
        const res = await fetch(
          `/api/admin/delete-post?slug=${router.query.slug}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: token,
            },
          }
        );
        const response = await res.json();
        showToast(response.message);
        setConfirmText("");
        // setLoading(false)
        router.push("/admin/dashboard");
      } catch (e) {
        showToast(e.message);
        setLoading(false);
      }
    }
  };

  if (authLoading || !isLoggedIn) {
    return <Loading />;
  }

  return (
    <section className="">
      <Head>
        <title>Delete Blog Post</title>
      </Head>
      <div className="">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Are you sure you want to delete this blog post?
        </h2>
        <input
          onChange={(e) => setConfirmText(e.target.value)}
          className="px-2 py-1 mt-4 w-full bg-white shadow rounded outline-0 text-md dark:text-gray-600"
          placeholder="Type im sure"
          type="text"
          value={confirmText}
        />
        <button
          onClick={handleDelete}
          className="mt-2 block ms-auto bg-rose-700 text-white font-medium text-sm rounded px-2 py-2 disabled:bg-gray-400 disabled:dark:bg-gray-400"
          type="button"
          disabled={loading}
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default DeletePostPage;
