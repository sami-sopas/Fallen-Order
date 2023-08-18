module.exports = {
    purge: [
        './public/**/*.html', //aplica el procesamiento post css
    ],
    darkMode : false, //or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'pattern': 'url(../img/pattern.jpg)',
                'space-pattern': 'url(../img/space-pattern.jpg)',
                'sister': 'url(../img/sister.png)'
            }),
            screens:{
                'xsm': '320px'
            }
        }
    },
    variants : {
        extend: {},
    },
    plugins: []
}