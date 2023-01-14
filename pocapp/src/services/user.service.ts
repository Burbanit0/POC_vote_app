import axios from 'axios';
import { Poids } from '../pages/ScrutinW';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  saveContent(user_id: string, majoritaire:string) {
    return axios.post(API_URL + 'list/maj', 
    {
        user_id, 
        majoritaire
    });
  }

  saveOrder(user_id: string, ordre:string[]) {
    return axios.put(API_URL + 'list/ordre/user/' + user_id, 
    {
      ordre
    });
  }

  savePoids(user_id:string, poids:Poids[]) {
    return axios.put(API_URL + 'list/poids/user/' + user_id, 
    {
      poids
    });
  }

}

export default new UserService();
