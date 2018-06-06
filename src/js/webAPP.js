/**
 * TODO
 * Convert the webAPP.js to JSP file
 * 
 * Wep APP URL
 * Fase 1: is a ".js" file
 * Fase 2: is a ".jsp" file
 * 
 * Both files must:
 * * Send data to RestAPI
 * * Get data from RestAPI
 * * Session analyzer
 */

import axios from 'axios';

export default class webApp {
    constructor() {
        
    }

    async getPage(URL) {
        const self = this;
        try {
          const res = await axios(URL);
          this.result = res;
        } catch (error) {
          alert(error);
        }
    }
}