import postcssPxToRem from 'postcss-pxtorem'

export default ( { env }) => {
    const isProt = env === 'production'
    const plugins = []

    if (isProd) {
        plugins.push(
            postcssPxToRem({
                propList: ['*'],
                mediaQuery: true,
            })
        )
    }

    return {
        plugins,
    }
}