import { useEffect, useState } from "react"



export default function useFetch(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data.articles)
                    console.log(data.articles)

                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading, setLoading }

}