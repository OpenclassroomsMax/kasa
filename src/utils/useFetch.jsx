import { useState, useEffect } from 'react'

export function useFetch(url) {
	const [fetchedData, setFetchedDat] = useState(null)
	
	const [error, setError] = useState(false)

	useEffect(() => {
		if (!url) return
		
		async function fetchData() {
			try {
				const response = await fetch(url)
				console.log(url)
				console.log(response)

				const data = await response.json()
				console.log(data)
				setFetchedDat(data)
	
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				
				
				console.log(fetchData)
			}
		}
		fetchData()
	}, [url])
	return { fetchedData, error }
}