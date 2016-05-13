'use strict';

import CommonConstants                from './CommonConstants';

console.log('CommonConstants.BASE_URL_API', CommonConstants.BASE_URL_API)
export default {
    URL : CommonConstants.BASE_URL_API + '/conferences',
    GET_CONFERENCES: 'GET_CONFERENCES',
    RECEIVE_CONFERENCES: 'RECEIVE_CONFERENCES',
    CHANGE_EVENT: 'CHANGE_EVENT'
}