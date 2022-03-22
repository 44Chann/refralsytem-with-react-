import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { NewsCard } from "./NewsCard"

export const Headline = () => {
    const [country, setCountry] = useState("us")
    let API_KEY = "8d0ccc8b9174417aa93d627465cb0b3e"
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    const { data, loading, error, setLoading } = useFetch(url)
    console.log(data)

    function handleSelectChange(event) {
        setCountry(event.target.value);
    }


    return (
        <>
            <div className="my-9 w-[90%] m-auto max-w-4xl">
                <div className="flex justify-between">
                    <h1>top headline from "{country}" </h1>
                    <select className="bg-transparent px-2 py-1 rounded-full focus:border-none outline-none flex  items-center" value={country} onChange={handleSelectChange}> //set value here
                        <option value="us">usa</option>
                        <option value="in">india</option>
                    </select>
                </div>
                {loading ? loading && <div>loading</div> : data ? data.map((ar) => {
                    return <NewsCard img={ar.urlToImage} title={ar.title} content={ar.description} url={ar.url} name={ar.source.name} />
                })
                    : <>
                        {loading && <div>loading</div>}
                    </>
                }
            </div>
        </>
    )

}


