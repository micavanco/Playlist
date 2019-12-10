import {from} from 'rxjs'
import axios from 'axios'

const TRACKLIST_URL = 'http://18.185.121.3:5000/'

export const tracklistService = {
  getData: () => (from(
    axios.get(TRACKLIST_URL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    })
  ))
}
