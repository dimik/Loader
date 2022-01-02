// Simulates network delay to be able to see preloader
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class NetologyService {
  async getPrograms() {
    const response = await fetch(process.env.NETOLOGY_URL)
    const result = await response.json()
    await delay(2000)
    return result?.data ?? []
  }
}

export default new NetologyService()
