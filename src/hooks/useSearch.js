import { useState } from 'react'
import { showToast } from "@/utils"
import { useRouter } from 'next/router';

function useSearch() {
  const [value, setValue] = useState("")
  const [showSearchBar, setShowSearchBar] = useState("")
  const router = useRouter();
  
  const onChange = (e) => {
    setValue(e.target.value)
  }
  
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    
    if(!value){
      return showToast("Oops! type something","error")
    }
    setShowSearchBar(false);
    router.push(`/search/?q=${value}`);
  };
  
  
  return { value, onChange, showSearchBar, toggleSearchBar, handleSearch }
}

export default useSearch
