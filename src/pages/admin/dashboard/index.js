import Link from 'next/link';
import { BlogLists, DashboardTags, Loading } from "@/components";
import { useAuthContext } from "@/context-api"
import { useRouter } from 'next/router';
import Head from "next/head"

function AdminDashboard() {
  const { authLoading, isLoggedIn, authToken } = useAuthContext()
  const router = useRouter();
  
  /* The Bellow Code Implemented In AuthContext */
  /*useEffect(() => {
    if(!authLoading && !isLoggedIn){
      router.push("/")
    }
  },[authLoading, isLoggedIn]);
  */
  
  if(authLoading || !isLoggedIn){
    return <Loading />
  }
  
  return (
    <section className="">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <h2 className="text-4xl font-bold font-satoshi-medium text-center">
        Admin Dashboard
      </h2>
      {
        authToken === "guest" && (
            <span className="block text-center italic  text-purple-600 dark:text-purple-300">
              Logged in as guest user
            </span>
          )
      }
      <BlogLists />
      <DashboardTags />
    </section>
  )
}

export default AdminDashboard
