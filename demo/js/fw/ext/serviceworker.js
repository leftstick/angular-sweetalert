import runtime from 'serviceworker-webpack-plugin/lib/runtime';

export default function() {
    if ('serviceWorker' in navigator) {
        runtime.register();
    }
}
