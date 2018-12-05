import { loadScript } from './utils';
import pluginConfig from './config';
import Plugin from './plugin';

/**
 * Installation procedure
 *
 * @param Vue
 * @param initConf
 */
const install = function (Vue, initConf = {}) {
  // Apply default configuration
  initConf = { ...pluginConfig, ...initConf }

  pluginConfig.id = initConf.id
  pluginConfig.debug = initConf.debug
  pluginConfig.enabled = initConf.enabled

  // Add to vue prototype and also from globals
  Vue.prototype.$gtag = Vue.gtag = new Plugin();

  // Load script when enabled
  if (pluginConfig.enabled) {
    loadScript(initConf.id);
  }
}

// Export module
export default { install }