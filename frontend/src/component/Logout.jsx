import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
  const [authUser, setAuthUser] = useAuth()

  const handleLogout = () => {
    try {
      setAuthUser(null)
      localStorage.removeItem("Users")
      toast.success("Logout successfully")

      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (error) {
      toast.error("Error while logging out")
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
    >
      Logout
    </button>
  )
}

export default Logout
