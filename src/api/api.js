export const getData = async() => {
    const response = await fetch('http://localhost:3000/api/data')
    const data = await response.json()
    return data
}


export const createProjectApi = async() => {
    const response = await fetch('http://localhost:3000/create_project')
    const data = await response.json()
    return data 
}