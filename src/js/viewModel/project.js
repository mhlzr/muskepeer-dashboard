/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define(['../router'], function (router) {

    return function ViewModel(model) {
        this.url = router.getDashboardStateUrl({absolute: true, section: false});
    };
});