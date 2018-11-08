export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }]
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [{
            path: 'hello',
            component: './HelloWorld'
        }, {
            path: 'demo',
            component: './Demo'
        }]
    }]
}