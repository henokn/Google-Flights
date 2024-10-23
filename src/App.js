/* eslint-disable no-console */

import { useState } from "react"
import './App.css'

function App() {
  // const [posts, setPosts] = useState([])

  const [latitude, setLatitude] = useState("")
  const [longtude, setLongtude] = useState("")

  const [searchText, setSearchText] = useState("")

  // const getPosts = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/posts")
  //     if (!response.ok) {
  //       throw Error(response.statusText)
  //     }
  //     const json = await response.json()
  //     setPosts(json)
  //     console.log(json)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  const getGoogleFlights = async () => {
    // const lat = latitude;
    // const lng = longtude;

    // const data = new URLSearchParams();
    // data.append('lat', latitude);
    // data.append('lng', longtude);

    const queryParams = new URLSearchParams({ lat: latitude, lng: longtude });
    try {
      // const response = await fetch("https://rapidapi.com/apiheya/api/sky-scrapper/api/v1/flights/getNearByAirports", { latitude, longtude });
      // const response = await fetch('https://rapidapi.com/apiheya/api/sky-scrapper/api/v1/flights/getNearByAirports', {
      const response = await fetch(`https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?${queryParams}`, {
        // mode: 'no-cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
          'x-rapidapi-key': '5ede8a1789msh447b3f981f92f25p1a77e5jsne40b62d84966'
        },

        // body: JSON.stringify({
        //   latitude,
        //   longtude
        // })
        // body: data
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json()
      // setPosts(json)
      console.log(json)
    } catch (error) {
      console.error(error.message)
    }
  }

  const searchGoogleFlights = async () => {

    const queryParams = new URLSearchParams({ query: searchText });
    try {

      const response = await fetch(`https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?${queryParams}`, {
        // mode: 'no-cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
          'x-rapidapi-key': '5ede8a1789msh447b3f981f92f25p1a77e5jsne40b62d84966'
        },

      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json()
      // setPosts(json)
      console.log(json)
    } catch (error) {
      console.error(error.message)
    }
  }

  // const createPost = async () => {
  //   const url = "http://localhost:8000/posts"
  //   const data = { id: 4, title: "New Post", postid: 4, author: "New" }
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     if (!response.ok) {
  //       throw Error(response.statusText)
  //     }
  //     const json = await response.json()
  //     getPosts()
  //     console.log(json)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  // const updatePost = async () => {
  //   const url = "http://localhost:8000/posts/4"
  //   const data = {
  //     title: "Updated Post",
  //     postid: 4,
  //     author: "New",
  //   }
  //   try {
  //     const response = await fetch(url, {
  //       method: "PUT",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     if (!response.ok) {
  //       throw Error(response.statusText)
  //     }
  //     const json = await response.json()
  //     getPosts()
  //     console.log(json)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  // const deletePost = async () => {
  //   const url = "http://localhost:8000/posts/4"
  //   try {
  //     const response = await fetch(url, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     if (!response.ok) {
  //       throw Error(response.statusText)
  //     }
  //     const json = await response.json()
  //     getPosts()
  //     console.log(json)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  return (
    <div className="container mx-auto p-4 m-4 border-solid border-2 border-gray-600 bg-gray-200">
      {/* <h1 className="text-4xl text-gray-800 py-2 text-center">
        React Rest Example
      </h1>
      <ul className="flex flex-wrap py-4">
        <li className="mr-3">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10"
            onClick={getPosts}
          >
            Get
          </button>
        </li>
        <li className="mr-3">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10 mr-3"
            onClick={createPost}
          >
            Post
          </button>
        </li>
        <li className="mr-3">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded
    h-10 mr-3"
            onClick={updatePost}
          >
            Put
          </button>
        </li>
        <li className="mr-3">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10 mr-3"
            onClick={deletePost}
          >
            Delete
          </button>
        </li>
      </ul>
      <table className="table-auto py-4 border-gray-500">
        <thead>
          <tr className="bg-gray-500">
            <th className="px-4 py-2 border-gray-600">Id</th>
            <th className="px-4 py-2 border-gray-600">Title</th>
            <th className="px-4 py-2 border-gray-600">Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2 border-gray-600">{post.id}</td>
              <td className="border px-4 py-2 border-gray-600">{post.title}</td>
              <td className="border px-4 py-2 border-gray-600">
                {post.author}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="responsive">
        <div className="box">
          <div className="title">Get Near By Airports</div>
          <div style={{ display: "flex", padding: 5, aligncontents: "center", alignItems: "center", marginBottom: 10 }}>
            <div className="lable">Latitude</div>
            <input className="input" type="text" onChange={e => setLatitude(e.target.value)} required="required" />
          </div>
          <div style={{ display: "flex", padding: 5, aligncontents: "center", alignItems: "center", marginBottom: 10 }}>
            <div className="lable">Longtude</div>
            <input className="input" type="text" onChange={e => setLongtude(e.target.value)} required="required" />
          </div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10 mr-3" onClick={getGoogleFlights}>Get Near By Airports</button>
        </div>

        <div className="box">
          <div className="title">Search Airports</div>
          <div style={{ display: "flex", padding: 5, aligncontents: "center", alignItems: "center", marginBottom: 10 }}>
            <div className="lable">Required Parameters query</div>
            <input className="input" type="text" onChange={e => setSearchText(e.target.value)} required="required" />
          </div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10 mr-3" onClick={searchGoogleFlights}>Search Airports</button>
        </div>
      </div>
    </div>
  )
}

export default App
