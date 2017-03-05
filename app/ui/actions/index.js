import axios from 'axios'

const ROOT_URL = "https://artsfordementia.herokuapp.com/api"

export const FETCH_STORIES = "FETCH_STORIES"

export function fetchStories(){
    const response = axios.get(`${ROOT_URL}/stories`)
    
    return {
        type: FETCH_STORIES,
        payload: response
    }
}
