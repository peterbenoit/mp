cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/com.thelinuxkid.cordova.mixpanel/www/mixpanel.js",
        "id": "com.thelinuxkid.cordova.mixpanel.Mixpanel",
        "clobbers": [
            "plugin.mixpanel"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.phonegap.plugins.PushPlugin": "2.4.0",
    "com.thelinuxkid.cordova.mixpanel": "0.0.1",
    "cordova-plugin-device": "1.0.1"
}
// BOTTOM OF METADATA
});