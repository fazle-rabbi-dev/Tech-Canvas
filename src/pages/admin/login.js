import { ArrowRight } from "lucide-react";
import { useAdminLogin } from "@/hooks";
import { Loading, DynamicMetadata } from "@/components"

const metadata = {
  title: "Admin Login",
  desc: "Login to admin panel to manage blog content"
}

function AdminPage() {
  const { loading, authLoading, isLoggedIn, handleLogin, userName, password, setUserName, setPassword } =
    useAdminLogin();
  
  if(authLoading || isLoggedIn){
    return <Loading />
  }
  
  return (
    <section>
      <DynamicMetadata data={metadata} />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black dark:text-white">
            Login in to admin dashboard
          </h2>
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-200">
              📢 You Can Login As Guest And Explore Admin Dashbord
            </p>
            <pre className="text-sm">
              Username: guest
            </pre>
            <pre className="text-sm">
              Password: guest
            </pre>
          </div>
          <form onSubmit={handleLogin} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Username{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-purple-600 px-3.5 py-2.5 font-satoshi-medium leading-7 text-white hover:bg-purple-700 disabled:bg-purple-800"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 border-[1px] rounded rounded-full mr-2 animate-spin">
                        <span className="">..</span>
                      </span>
                      Logining
                    </>
                  ) : (
                    "Login"
                  )}
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
