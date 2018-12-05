import pluginConfig from './config'

/**
 * Console log depending on config debug mode
 * @param {...*} message
 */
export const logDebug = function (message) {
  if (pluginConfig.debug) {
    console.log('VueGtag :', ...arguments)
  }
}

/**
 * Load GTag script tag
 * @param {String}  id  GTag ID
 */
export const loadScript = function (id) {
  const script = document.createElement('script');

  script.async = true;
  script.src   = `https://www.googletagmanager.com/gtag/js?id=${id}`;

  gtag('js', new Date());
  gtag('config', id);

  document.body.appendChild(script);
}

/**
 * Check if GTag script is in the document
 * @return {boolean}
 */
export const hasScript = function () {
  return Array
    .from(document.getElementsByName('script'))
    .some(script => script.src.includes('googletagmanager.com/gtag/'));
}

export const gtag = function() {
    const dataLayer = (window.dataLayer = window.dataLayer || []);

    dataLayer.push(arguments);

    logDebug('Current dataLayer', window.dataLayer);
}