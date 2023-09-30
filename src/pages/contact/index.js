import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { showToast } from "@/utils"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if(!formData.name || !formData.message){
      return showToast("Oops! type your name and message", "error")
    }
    
    try {
      setLoading(true)
      const res = await fetch(`/api/public/send-mail`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await res.json();
      if(response.success){
        setLoading(false)
        showToast("We just received your message")
      }else{
        setLoading(false)
        showToast(response.message, "error")
      }
    } catch (error) {
      setLoading(false)
      showToast(error.message, "error")
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10">
          <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3 dark:bg-gray-800">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10 dark:text-white">
            Love to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl dark:text-gray-400">
            Have a question or just want to get in touch? Feel free to reach out
            using the form below. We're always happy to hear from our readers!
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our friendly team would love to hear from you.
                </p>
                <form onSubmit={sendMessage} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="eg: john doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="eg: johndoe@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      name="phone"
                      placeholder="eg: 018XXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
                      htmlFor="message"
                    >
                      Messags
                    </label>
                    <textarea
                      className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      name="message"
                      placeholder="Leave us a message"
                      cols={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-purple-400"
                  >
                    {loading ? "Sending message..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
