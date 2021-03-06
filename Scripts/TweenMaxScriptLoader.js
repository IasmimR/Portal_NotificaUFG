/**
 * Load TweenMax Script
 * TODO: Move this to POST_DEPLOY stage, load from our CDN
 **/

/**
 * @typedef {function} Tween
 * @typedef {function} Timeline
 *
 * @typedef {object} TweenEngine
 * @property {Tween} tween
 * @property {Timeline} timeline
 * @property {Tween} to
 * @property {Tween} from
 * @property {Tween} fromTo
 */

resource.getResourceValue('scriptLoader', function(scriptLoader) {
    var start = Date.now();
//    var version = '1.11.3';
    var version = '1.11.4';
    var url = serviceTopology.staticServerUrl + 'services/third-party/tweenmax/%version%/min/TweenMaxCustom.min.js'.replace('%version%', version);

    deployStatus('TweenMax', 'TweenMax started to load');

    scriptLoader.loadResource({
        url: url,
        noBlob: true
    }, {
        onFailed: function() {
            define.resource('TweenMax', null);
        },
        onLoad: function() {
            define.resource('TweenMax',
                /** @type {TweenResource} */
                {
                    timeline: window.TimelineMax,
                    tween: window.TweenMax,
                    set: window.TweenMax.set,
                    fromTo: window.TweenMax.fromTo,
                    from: window.TweenMax.from,
                    to: window.TweenMax.to,
                    staggerFromTo: window.TweenMax.staggerFromTo,
                    staggerFrom: window.TweenMax.staggerFrom,
                    staggerTo: window.TweenMax.staggerTo,
                    ticker: window.TweenMax.ticker
                }
            );
            deployStatus('TweenMax', 'TweenMax Loaded Successfully ' + Date.now() - start);

        }
    });
});