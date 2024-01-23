async function fetchRecommendations(artist){
    const res = await fetch(`http://127.0.0.1:5000/recommendations/?artist=${artist}`)

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async ({ params }) => {

    const { artist } = params

    const data = await fetchRecommendations(artist)

    if(data.similarartists){
        return (
            <div className="font-bold flex flex-col items-center justify-center m-5 h-full">
                <div className="flex text-4xl text-center mb-12">
                    <p>IF YOU LIKE </p><p className="mx-5 text-6xl text-center">{decodeURI(artist).toUpperCase()}</p><p> YOU MIGHT LIKE...</p>
                </div>
                <div className="flex flex-col items-center">
                    {}
                    {data.similarartists.artist.map((info) => {
                    return (
                        <a href={`http://127.0.0.1:3000/recommendations/${encodeURI(info.name)}`} className="my-1 hover:scale-125">{info.name}</a>
                    )
                    })}
                </div>
            </div>
        )
    } else{
        return (
            <div className="font-bold flex items-center justify-center m-5">
                <div className="flex text-4xl text-center mb-12">
                    <p>I COULDNT FIND</p><p className="mx-5 text-6xl text-center">{decodeURI(artist).toUpperCase()}</p>
                </div>
            </div>
        )
    }
}

export default Page