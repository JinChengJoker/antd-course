export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'HelloWorld'
            },
            {
                path: '/helloworld',
                component: 'HelloWorld'
            },
            {
                path: '/demo',
                component: 'Demo'
            },
            {
                path: '/dashboard',
                routes: [
                    {
                        path: '/dashboard',
                        component: 'Dashboard/Analysis'
                    },
                    {
                        path: '/dashboard/analysis',
                        component: 'Dashboard/Analysis'
                    },
                    {
                        path: '/dashboard/monitor',
                        component: 'Dashboard/Monitor'
                    },
                    {
                        path: '/dashboard/workplace',
                        component: 'Dashboard/Workplace'
                    }
                ]
            },
            {
                path: '/puzzlecards',
                component: 'PuzzleCards'
            }
        ]
    }],
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true
        }
    }
}