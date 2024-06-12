import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
  /* Methodology # 1 = below. However, all commented out to use "loader" (Optimization methodology # 2) = above
  const [data, setData] = useState(0)
  // To call the API whenever Github comp. gets rendered/loaded/mounted, useEffect()
  useEffect(() => {
    fetch('https://api.github.com/users/manuweb3')
      .then((response) => response.json())
      .then((data) => setData(data)) // data["followers"] also works => [] is good for both static and dynamic keys of a JS Object
      .catch((error) => console.log(`Error: ${error}`))
      .finally(() => {
        console.log('Finally done')
      })
  }, [])
  */

  return (
    <div className="bg-gray-700 text-white text-3xl text-center p-4 m-4">
      Github followers: {data.followers}
      {/*  setData(data.followers) also works but then img's url won't get avatar_url */}
      <img src={`${data.avatar_url}`} alt="Git Picture" width="200" />
    </div>
  )
}

export default Github

// for the time being, keeping the method within this same file.
export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/manuweb3')
    return response.json() // still a "Promise", that's why 2nd .then() is added above
  } catch (error) {
    console.log(`Error: ${error}`)
  } finally {
    console.log('Finally, done!')
  }
}
