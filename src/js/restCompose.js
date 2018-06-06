/**
 * TODO
 * 
 * Fase 1: We use jQuery to call our webapp.js as script [http://api.jquery.com/jquery.getscript/]
 * 
 * Fase 2: but later, when we connect directly to the webapp.jsp we don't need jQuery
 * instead we can use axio.js to make a basic AJAX call
 *  
 */

import 'jquery';
import { webappURL } from './config';
import webApp from './webAPP';

const state = {};

// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
export const loadHTML = async (URL, DOM) => {
  
    let xhr = $.ajax({
        url: webappURL,
        dataType: "script",
        cache: false
    });

    xhr.done(function(data) {

        // new search object and add to state
        state.page = new webApp();

        try {
            // get the requested page
            state.page.getPage(URL)
            
            // render result in UI
            .then(() => {
                document.querySelector(DOM).innerHTML = state.page.result.data;
            });           
            
        } catch (error) {
            alert(error);
        }

    });

}