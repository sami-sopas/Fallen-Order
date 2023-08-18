module.exports = {
    purge: [
        './public/**/*.html', //aplica el procesamiento post css
    ],
    darkMode : false, //or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'pattern': 'url(../img/pattern.jpg)'
            })
        }
    },
    variants : {
        extend: {},
    },
    plugins: []
}