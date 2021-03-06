import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://ipfs.impool18.com', // url = base url + request url
  // url: '/ipns/QmR2f2HMQy3JyP6XfH25BzJSEPGAqg9qTPwfX31mu2xPAe/class.json',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

export default service