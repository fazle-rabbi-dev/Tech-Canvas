import { useEditPost, useImageUpload } from "@/hooks";
import Head from "next/head";
import { Save } from "lucide-react";
import { useAuthContext } from "@/context-api";
import { Loading } from "@/components";
import { useRouter } from 'next/router';

function EditPost() {
  const {
    title,
    thumbnail,
    desc,
    tags,
    date,
    content,
    onChange,
    handleSubmit,
    loading,
  } = useEditPost();
  const {
    imageField,
    handleFileUpload,
    imageDownloadURL,
    handleCopyImageLink,
    uploadProgress,
    enableUpload,
    setEnableUpload,
  } = useImageUpload();
  const { authLoading, isLoggedIn, authToken } = useAuthContext();
  const router = useRouter();
  
  if (authLoading || !isLoggedIn) {
    return <Loading />;
  }

  return (
    <section className="mb-20">
      <Head>
        <title>Edit Blog Post</title>
      </Head>
      <h2 className="text-center text-4xl font-bold font-satoshi-medium">
        Edit Post
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-10"
        enctype="multipart/form-data"
        accept-charset="utf-8"
      >
        <div className="mb-4">
          <input
            name="title"
            onChange={onChange}
            placeholder="Post title"
            className="w-full rounded outline-0 p-2 border-[1px] bg-white dark:bg-gray-800 dark:ring-0 dark:ring-offset-0 ring-1 ring-gray-300 focus:ring-purple-400"
            type="text"
            id="title"
            value={title}
          />
        </div>
        <div className="mb-4">
          <input
            name="tags"
            onChange={onChange}
            placeholder="Post tags"
            className="w-full rounded outline-0 p-2 border-[1px] bg-white dark:bg-gray-800 dark:ring-0 dark:ring-offset-0 ring-1 ring-gray-300 focus:ring-purple-400"
            type="text"
            id="tags"
            value={tags}
          />
        </div>
        <div className="mb-4">
          <input
            name="thumbnail"
            onChange={onChange}
            placeholder="Post thumbnail"
            className="w-full rounded outline-0 p-2 border-[1px] bg-white dark:bg-gray-800 dark:ring-0 dark:ring-offset-0 ring-1 ring-gray-300 focus:ring-purple-400"
            type="text"
            id="thumbnail"
            value={thumbnail}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="desc"
            onChange={onChange}
            placeholder="Post description"
            className="resize-none w-full rounded outline-0 p-2 border-[1px] bg-white dark:bg-gray-800 dark:ring-0 dark:ring-offset-0 ring-1 ring-gray-300 focus:ring-purple-400"
            type="text"
            id="desc"
            value={desc}
          />
        </div>
        <div className="relative mb-4">
          <span
            className={`${
              date && "hidden"
            } absolute top-2 left-2 text-gray-400`}
          >
            Choose date
          </span>
          <input
            name="date"
            onChange={onChange}
            placeholder="Date"
            className="w-full rounded outline-0 p-2 border-[1px] bg-white dark:bg-gray-800 dark:ring-0 dark:ring-offset-0 ring-1 ring-gray-300 focus:ring-purple-400"
            type="date"
            id="date"
            value={date}
          />
        </div>
        {/* Image Upload */}
        <div className="rounded mb-2 p-2 bg-white dark:bg-gray-800 border-[1px] ring-1 ring-gray-50 dark:ring-0">
          {authToken === "guest" && (
            <span className="text-sm italic font-bold leading-5 mb-2 block">
              Since, you are a{" "}
              <span className="text-purple-600 dark:text-purple-300">
                guest
              </span>{" "}
              user so, you can't upload any files!
            </span>
          )}
          <div className="w-full">
            <input
              disabled={authToken === "guest"}
              ref={imageField}
              name="image"
              placeholder="Choose image"
              className="w-full rounded outline-0"
              type="file"
              id="image"
              onChange={() => setEnableUpload(true)}
            />
            <div className="hidden h-full flex flex-col justify-center items-center">
              <button className="bg-gray-200 py-1 px-2 rounded" type="button">
                Select An Image
              </button>
              <span className="text-gray-600 text-sm">
                {imageField?.current?.files[0]?.name}
              </span>
            </div>
          </div>
          <div className="my-2 relative">
            <div className="">
              <div className={`${uploadProgress ? "visible" : "hidden"}`}>
                <h4>Uploading {uploadProgress}% done...</h4>
                {/* Custom Progress Bar */}
                <div className="h-3 w-full rounded bg-gray-50">
                  <div
                    style={{ width: `${uploadProgress}%` }}
                    className={`h-3 w-0 rounded bg-purple-600`}
                  ></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <button
                  disabled={!enableUpload}
                  onClick={handleFileUpload}
                  className="disabled:bg-gray-400 inline-flex justify-center items-center bg-gray-700 text-white px-2 py-1 rounded"
                  type="button"
                >
                  Upload{" "}
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-upload"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={handleCopyImageLink}
                  className={`${
                    imageDownloadURL ? "visible rounded" : "hidden"
                  } inline-flex justify-center items-center bg-gray-700 text-white px-2 py-1 rounded" type="button`}
                >
                  Copy{" "}
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-copy"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className={`${imageDownloadURL ? "visible" : "hidden"}`}>
              <span className="mt-2 inline-flex gap-2 text-gray-600 dark:text-gray-300 text-xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-square"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                Image Uploaded Successful
              </span>
              <p className="break-all text-sm">
                {imageDownloadURL && imageDownloadURL}
              </p>
            </div>
          </div>
        </div>
        <div className="relative mb-2">
          <button
            className="block mb-2 ms-auto text-gray-800 dark:text-gray-200 border-[1px] border-gray-800 dark:border-gray-700 rounded py-1 px-2"
            type="button"
          >
            Preview
          </button>
          <textarea
            name="content"
            onChange={onChange}
            placeholder="What's on your mind? write in markdown..."
            className="w-full font-supreme-regular rounded outline-0 p-2 border-[1px] bg-white dark:bg-gray-800 dark:ring-0 dark:ring-offset-0 resize-none h-52 ring-1 ring-gray-300 focus:ring-purple-400"
            type="text"
            id="title"
            value={content}
          />
        </div>
        <button
          className="flex gap-2 justify-center items-center font-satoshi-medium bg-purple-600 text-white px-4 py-[7px] w-full text-center rounded disabled:bg-purple-400"
          type="submit"
          disabled={loading}
        >
          Save
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-save"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
}

export default EditPost;
