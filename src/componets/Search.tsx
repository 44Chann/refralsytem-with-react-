import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { NewsCard } from "./NewsCard"



export const Search = () => {
    let { term } = useParams()

    let API_KEY = "8d0ccc8b9174417aa93d627465cb0b3e"
    let url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${API_KEY}`
    const { data, loading } = useFetch(url)
    return (
        <>
            <div className="my-9 w-[90%] m-auto max-w-4xl">
                <div >
                    <h1>Search Results for "{term}" </h1>
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