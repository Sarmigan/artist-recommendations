"use client"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)
    const artist = formData.get("artist")

    router.push(`/recommendations/${artist}`)
  }
 
  return (
    <form onSubmit={onSubmit} className="h-screen flex flex-col items-center justify-center">
      <input type="text" required="true" name="artist" className="focus:outline-none focus:scale-125 duration-75 rounded-lg p-4 m-5 md:uppercase text-center"/>
      <br></br>
      <button type="submit" className="hover:scale-125 duration-75 font-bold">FIND SIMILAR ARTISTS!</button>
    </form>
  )
}