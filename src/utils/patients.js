
export const getPatientWeight = () => {
    const randomWeight = Math.floor(Math.random() * 500 + 0 + 25)
    return randomWeight
}

export const getPatients = async () => {
    const url = `https://randomuser.me/api/?results=5`


    try {
        let response = await fetch(url)
        let data = await response.json()
        return data.results
    } catch (err) {
        console.log('An Error occured:', err);
    }
}



export const patients = getPatients