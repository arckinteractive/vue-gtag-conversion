import { logDebug, loadScript, hasScript, gtag } from './utils';
import pluginConfig from './config';
/**
 * Plugin main class
 */
var inBrowser = typeof window !== 'undefined';

export default class AnalyticsPlugin {
  enabled() {
    return pluginConfig.enabled;
  }

  enable(val) {
    pluginConfig.enabled = val

    if (inBrowser && !!val && !hasScript()) {
      loadScript(pluginConfig.id);
    }
  }

  debugEnabled() {
    return pluginConfig.debug;
  }

  debug(val) {
    pluginConfig.debug = val;
  }

  reportConversion() {
    if (inBrowser && pluginConfig.enabled) {
      logDebug('Recording Conversion', {
        ...arguments,
      });

      gtag('event', 'conversion', { ...arguments });
    }
  }
}