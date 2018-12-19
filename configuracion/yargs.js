const argv = require('yargs').options({
        dirrecion: {
            demand: true,
            alias: 'd',
            desc: "Dirreción de las ciudades"
        }
    })
    .help()
    .argv;

module.exports = ({
    argv
});