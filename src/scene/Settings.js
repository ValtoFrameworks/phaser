/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var CONST = require('./const');
var GetValue = require('../utils/object/GetValue');
var InjectionMap = require('./InjectionMap');

/**
 * Takes a Scene configuration object and returns a fully formed Systems object.
 *
 * @function Phaser.Scenes.Settings.create
 * @since 3.0.0
 *
 * @param {object} config - [description]
 *
 * @return {object} [description]
 */
var Settings = {

    create: function (config)
    {
        if (typeof config === 'string')
        {
            config = { key: config };
        }
        else if (config === undefined)
        {
            //  Pass the 'hasOwnProperty' checks
            config = {};
        }

        return {

            status: CONST.PENDING,

            key: GetValue(config, 'key', ''),
            active: GetValue(config, 'active', false),
            visible: GetValue(config, 'visible', true),

            isBooted: false,

            //  Loader payload array

            data: {},

            files: GetValue(config, 'files', false),

            //  Cameras

            cameras: GetValue(config, 'cameras', null),

            //  Scene Property Injection Map

            map: GetValue(config, 'map', InjectionMap),

            //  Physics

            physics: GetValue(config, 'physics', {}),

            //  Loader

            loader: GetValue(config, 'loader', {}),

            //  Plugins

            plugins: GetValue(config, 'plugins', false)

        };
    }

};

module.exports = Settings;
