import axios from "axios"

export async function getUser(username: string) {
  try{
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
  }catch(error) {
    console.log(error)
  }
}

export async function getReposByUsername(username: string) {
  try{
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=300`)
    return response.data
  }catch(error) {
    console.log(error)
  }
}

export async function getReposDetails(login: string, repo: string) {
  try{
    const response = await axios.get(`https://api.github.com/repos/${login}/${repo}`)
    return response.data
  }catch(error) {
    console.log(error)
  }
}

