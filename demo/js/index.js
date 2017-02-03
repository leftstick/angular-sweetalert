import angular from 'angular';
import {pluck} from './fw/helper/object';
import {declareFeatures, declareDirectives, declareComponents, declareRunners, declareFilters} from './fw/helper/ngDeclare';
import Extensions from './fw/ext/main';
import worker from './fw/ext/serviceworker';
import Things from './features/main';

class DemoApp {

    constructor() {
        worker();
        this.appName = 'angular-h-sweetalert';
        this.features = Things.filter(t => t.type === 'feature' && t.name);
    }

    validate() {
        if (!this.features || this.features.length === 0) {
            return console.warn('No features loaded');
        }

        const modNames = pluck(this.features, 'name').sort();
        for (let i = 0; i < modNames.length - 1; i++) {
            if (modNames[i] === modNames[i + 1]) {
                throw new Error('Duplicated Module: [ ' + modNames[i] + ' ], you have to specify another name');
            }
        }
    }

    findDependencies() {
        this.depends = [...Extensions, ...this.features.map(f => f.name)];
    }

    createApp() {
        declareFeatures(this.features);

        this.app = angular.module(this.appName, this.depends);
    }

    registerServices() {
        declareDirectives(this.app, Things.filter(t => t.type === 'directive'));
        declareComponents(this.app, Things.filter(t => t.type === 'component'));
        declareRunners(this.app, Things.filter(t => t.type === 'runner'));
        declareFilters(this.app, Things.filter(t => t.type === 'filter'));
    }

    destroySplash() {
        document.head.removeChild(document.querySelector('#splash-spinner'));
        document.body.removeChild(document.querySelector('.spinner'));
    }

    launch() {
        angular.bootstrap(document, [this.appName]);
    }

    run() {
        this.validate();
        this.findDependencies();
        this.createApp();
        this.registerServices();
        this.destroySplash();
        this.launch();
    }
}

new DemoApp().run();
