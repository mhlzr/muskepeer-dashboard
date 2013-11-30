/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define(['chartjs'], function (Chart) {
    return {
        init: function ($el, viewModel) {

            var canvas = $el.find('canvas')[0],
                ctx = canvas.getContext('2d');

            new Chart(ctx).Pie([
                {
                    value: 30,
                    color: "#F38630"
                },
                {
                    value: 50,
                    color: "#E0E4CC"
                },
                {
                    value: 100,
                    color: "#69D2E7"
                }
            ], {})

        }
    };
});