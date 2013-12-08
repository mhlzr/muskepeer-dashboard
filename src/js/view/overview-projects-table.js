/**
 * @author Matthieu Holzer
 * @date 07.12.13
 */

define(['ractive'], function (Ractive) {
    return {
        init: function ($el, viewModel, $template) {

            $template = $template || $el;

            _binding = new Ractive({
                el: $el,
                template: $template.html(),
                data: viewModel
            });


        }
    };
});