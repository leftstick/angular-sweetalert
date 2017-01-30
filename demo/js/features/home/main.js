
import home from './components/home';
import header from './components/subs/header';
import comparison from './components/subs/comparison';
import install from './components/subs/install';
import importmodule from './components/subs/importmodule';
import exampletitle from './components/subs/exampletitle';
import example from './components/subs/example';
import docs from './components/subs/docs';

export default {
    type: 'feature',
    name: 'home',
    component: {
        home,
        header,
        comparison,
        install,
        importmodule,
        exampletitle,
        example,
        docs
    }
};
