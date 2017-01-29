
import home from './components/home';
import header from './components/subs/header';
import comparison from './components/subs/comparison';
import exampletitle from './components/subs/exampletitle';
import example from './components/subs/example';

export default {
    type: 'feature',
    name: 'home',
    component: {
        home,
        header,
        comparison,
        exampletitle,
        example
    }
};
