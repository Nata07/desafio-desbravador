import axios from "axios"

export async function getUser(username: string) {
  try{
    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log('response data')
    console.log(response.data)
    return response.data
  }catch(error) {
    console.log(error)
  }
}