<h1 align="center">
  Vue Google Tag Conversions
</h1>

<br>
<br>

<h4 align="center">Simple implementation of Google Tag Conversion Tracking</h4>

<br>

# Requirements

* **Vue.js.** >= 2.0.0
* **Google Tag Manager account.** To send data to

# Configuration

`npm install https://github.com/arckinteractive/vue-gtag-conversion.git -S` or `yarn add vhttps://github.com/arckinteractive/vue-gtag-conversion.git` if you use [Yarn package manager](https://yarnpkg.com/)

Here is an example of configuration:

```javascript
import VueGtag from 'vue-gtag-conversion';

Vue.use(VueGtag, {
  id: 'AW-xxxxxxx', // Your Adwords ID
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: process.env.NODE_ENV !== 'production' (optional)
  debug: true, // Whether or not display console log debugs (optional)
});
```

This injects the tag manager script in the page, except when `enabled` is set to `false`. 
In that case it will be injected when calling `this.$gtag.enable(true)` for the first time.

# Documentation

Once the configuration is completed, you can access vue gtag instance in your components:

```javascript
export default {
  name: 'MyComponent',
  data() {
    return {
      someData: false
    };
  },
  methods: {
    onClick: function() {
      this.$gtag.reportConversion({
        'send_to': 'AW-XXXXXXXXX/abcdefghijklm', // the custom tag to be reported
        value: 99.0,
        currency: 'USD',
        'transaction_id': '',
      });
    }
  },
};
```

You can also access the instance anywhere whenever you imported `Vue` by using `Vue.gtag`. It is especially useful when you are in a store module or
somewhere else than a component's scope.

## Methods

### Enable plugin

Check if plugin is enabled

```
this.$gtag.enabled()
```

Enable plugin

```
this.$gtag.enable(true)
```

Disable plugin

```
this.$gtag.enable(false)
```

### Debug plugin

Check if plugin is in debug mode

```
this.$gtag.debugEnabled()
```

Enable debug mode

```
this.$gtag.debug(true)
```

Disable plugin

```
this.$gtag.debug(false)
```
