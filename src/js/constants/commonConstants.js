'use strict';

import * as Configs                     from '../configs/configs';

console.log('Configs.getBaseUrlApi()', Configs.getBaseUrlApi())
export default {
  BASE_URL_API : Configs.getBaseUrlApi(),
  BASE_URL_IMAGE: Configs.getBaseUrlImage()
}