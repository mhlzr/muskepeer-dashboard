/**
 * @author Matthieu Holzer
 * @date 07.12.13
 */

define(['qr-js'], function (qr) {

    return {
        init: function ($el, viewModel) {

            qr.canvas({
                canvas: $el.find('canvas')[0],
                value: viewModel.url
            });

        }
    };
});