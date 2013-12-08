/**
 * @author Matthieu Holzer
 * @date 07.12.13
 */

define(['eventemitter2'], function (EventEmitter) {

    var STATE_PREFIX = '/#!';

    var _ee = new EventEmitter({delimiter: ':', wildcard: true}),
        _projectUuid = null,
        _sectionName = 'overview'; //default

    return {

        emit: _ee.emit,
        on: _ee.on,
        off: _ee.off,

        setInitialDashboardState: function () {
            var state = this.getDashboardState();
            this.setDashboardState(state.projectUuid, state.sectionName, true);
        },

        setDashboardState: function (projectUuid, sectionName, isInitial) {

            var url = STATE_PREFIX;

            projectUuid = projectUuid || _projectUuid;
            sectionName = sectionName || _sectionName;

            isInitial = isInitial || false;

            if (projectUuid) url += '/' + projectUuid;
            if (sectionName) url += '/' + sectionName;

            history.pushState({
                projectUuid: projectUuid,
                sectionName: sectionName
            }, '', url);

            //inform subscribers
            if (_projectUuid != projectUuid || isInitial) {
                this.emit('project:change', projectUuid);
            }
            if (_sectionName != sectionName || isInitial) {
                this.emit('section:change', sectionName);
            }

            //keep reference
            _projectUuid = projectUuid;
            _sectionName = sectionName;

        },

        getDashboardState: function () {
            var HASH_REGEX = new RegExp(/#!\/([0-9A-F-]*)\/(\w*)/);


            if (history.state) {
                _projectUuid = history.state.projectUuid;
                _sectionName = history.state.sectionName
            }

            else if (HASH_REGEX.test(location.hash)) {
                var match = HASH_REGEX.exec(location.hash);
                _projectUuid = match[1] || null;
                _sectionName = match[2] || null;
            }

            return{
                hasProject: !!_projectUuid,
                projectUuid: _projectUuid,
                hasSection: !!_sectionName,
                sectionName: _sectionName
            }
        },

        getDashboardStateUrl: function (config) {

            var state = this.getDashboardState();

            // http://localhost/#!/345678/overview
            if (config.absolute && config.section) {
                return window.location.href;
            }
            // /#!/345678/overview
            else if (!config.absolute && config.section) {
                return '/' + window.location.hash;
            }
            // http://localhost/#!/345678/
            else if (config.absolute && !config.section) {

                if (!state.hasProject) {
                    return location.origin;
                }

                return location.origin + STATE_PREFIX + '/' + state.projectUuid;
            }
            else {
                var url = STATE_PREFIX;

                if (state.hasProject) {
                    url += '/' + state.projectUuid;
                }

                if (state.hasSection) {
                    url += '/' + state.sectionName;
                }

                return url;

            }
        }
    };
});