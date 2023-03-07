import Button from '@/components/atoms/Button'
import axios from 'axios'
import React, { useEffect } from 'react'

// /users/USERNAME/repos
const Home = () => {
  const getRepo = async () => {
    const x = await axios({
      method: 'GET',
      url: process.env.githubApi + '/users/uutbudiarto/repos',
      headers: {
        Authorization: 'Bearer ' + process.env.githubToken
      }
    })
    console.log(x.data)
  }
  useEffect(() => {
    getRepo()
  }, [])

  return <div>OK</div>
}

export default Home
