/**
 * @author Matthieu Holzer
 * @date 07.12.13
 */

define([], function () {

    return {

        uuid: '2345678902765456789',
        title: 'TestProject',
        active: true,

        owner: {
            email: 'matthieholzer@gmx.de',
            name: 'Matthieu Holzer',
            publicKey: ''
        },

        computation: {
            hasDependingTasks: false,
            hasFiniteTasks: true,
            hasDataFiles: false,
            validationIterations: -1 //-1 : Inifinite, 0 : None; >0 : Amount,
        },

        network: {
            useGeoLocation: true
        }
    }

});