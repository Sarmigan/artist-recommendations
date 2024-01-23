import Link from "next/link"

async function fetchRecommendations(artist){
    const res = await fetch(`http://127.0.0.1:5000/recommendations/?artist=${encodeURI(artist)}`)

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async ({ params }) => {

    const { artist } = params

    const data = await fetchRecommendations(artist)

    if(data.similarartists){
        if(data.similarartists.artist.length == 0){
            return (
                <div className="font-bold flex flex-col items-center m-5 h-screen">
                    <div className="flex text-4xl text-center mb-96">
                        <p>SORRY, I COULDNT FIND</p><p className="mx-5 text-6xl text-center">{decodeURI(artist).toUpperCase()}...</p>
                    </div>
                    <div className="flex text-xl text-center mb-96">
                        <a className="shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all font-bold p-2 border-solid border-2 rounded-lg border-black" href="/">FIND ANOTHER ARTIST!</a>
                    </div>
                </div>
            )
        } else{
            return (
                <div className="font-bold flex flex-col items-center justify-center m-5">
                    <div className="flex text-4xl text-center mb-12">
                        <p>IF YOU LIKE </p><p className="mx-5 text-6xl text-center">{decodeURI(artist).toUpperCase()}</p><p> YOU MIGHT LIKE...</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {}
                        {data.similarartists.artist.map((info) => {
                        return (
                            <a href={`http://127.0.0.1:3000/recommendations/${encodeURI(info.name)}`} className="my-1 hover:scale-125 duration-300">{info.name}</a>
                        )
                        })}
                    </div>
                </div>
            )
        }
    } else{
        return (
            <div className="font-bold flex flex-col items-center m-5 h-screen">
                <div className="flex text-4xl text-center mb-96">
                    <p>SORRY, I COULDNT FIND</p><p className="mx-5 text-6xl text-center">{decodeURI(artist).toUpperCase()}...</p>
                </div>
                <div className="flex text-xl text-center mb-96">
                    <a className="shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all font-bold p-2 border-solid border-2 rounded-lg border-black" href="/">FIND ANOTHER ARTIST!</a>
                </div>
            </div>
        )
    }
}

export default Page