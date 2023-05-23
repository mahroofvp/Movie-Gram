import axios from "axios"
import {baseUrl} from '../src/Components/Constants/Constants'

const instance = axios.create({
    baseUrl : baseUrl

})

export default instance