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
      <input type="text" required="true" name="artist" className="focus:outline-none focus:scale-125 duration-300 rounded-lg p-4 m-5 md:uppercase text-center"/>
      <br></br>
      <button type="submit" className="shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all font-bold p-2 border-solid border-2 rounded-lg border-black">FIND SIMILAR ARTISTS!</button>
    </form>
  )
}