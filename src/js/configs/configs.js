import { createHistory, createHashHistory }     from 'history';
import { useRouterHistory }                     from "react-router";


export function isProduction() {
  return    window.location.hostname == 'ec2-54-235-235-7.compute-1.amazonaws.com'
        ||  window.location.hostname == 'mondeavie.ca'
}

export function getBaseUrlApi() {
  if( isProduction() ){
    return 'http://ec2-54-235-235-7.compute-1.amazonaws.com:9000/public/api';
  } else {
    return 'http://localhost:3000/public/api';
  }
}

export function getBaseUrlImage() {
  if( isProduction() ){
    return 'http://ec2-54-235-235-7.compute-1.amazonaws.com:9000';
  } else {
    return 'http://localhost:3000';
  }
}

export function getHistory() {
  if( isProduction() ){
    let  browserHistory = useRouterHistory(createHistory)({ basename: '/' });
    return browserHistory;

  } else {
    let  hashHistory = useRouterHistory(createHashHistory)({ basename: '/' });
    return hashHistory;
  }
}