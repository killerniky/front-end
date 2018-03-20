const config = require('../config');
/*let getdata = require('../getdata');*/
const datacontroller = require('../getWifiAPI');

const appRouter = (app) => {


    datacontroller.getData((err, data) => {
        // Get data array from response
        let locaties = data.data;
        console.log(locaties);
        // GET ALL Locations
        app.get('/locaties', (req, res) => {
            console.log(locaties);

            if(locaties && locaties.length) {
                res.send({
                    status: config.STATUS.OK,
                    message: locaties,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find any locations',
                });
            }
        });

        // GET location DETAILS
        app.get('/locaties/:id', (req, res) => {
            let locatie = null;
            console.log('Get locatie', req.params.id);

            if(locaties && locaties.length) {
                locatie = locaties.filter((locatie) => ('' + locatie.id) === req.params.id);
            }
            if(locatie) {
                res.send({
                    status: config.STATUS.OK,
                    message: locatie[0],
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find any locatie',
                });
            }
        });

        // UPDATE location
        app.put('/locaties/:id', (req, res) => {
            let locatie = null;
            console.log('update locatie', req.body);

            if(locaties && locaties.length) {
                locatie = locaties.filter((locatie) => ('' + locatie.id) === req.params.id);
            }

            if(locatie[0]) {
                // locations[req.params.id] = req.body;
                locaties = locaties.map((s) => {
                    return ('' + s.id) === req.params.id ? req.body : s;
                })

                res.send({
                    status: config.STATUS.OK,
                    message: req.body,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find locatie for update',
                });
            }


        });

        // REMOVE locations
        app.delete('/locaties/:id', (req, res) => {
            console.log('Remove locatie', req.params.id);
            locaties = locaties.filter((locatie) => ('' + locatie.id) !== req.params.id);

            res.send({
                status: config.STATUS.OK,
                message: locaties,
            });
        });

        // ADD location
        app.post('/locaties/add', (req, res) => {
            const maxIndex = Math.max.apply(Math,locaties.map((o) => o.id));
            console.log('Add locatie', req.body, maxIndex);
            let locatie = req.body;
            locatie.id = maxIndex + 1;

            locaties.push(locatie);

            if(locaties[locaties.length - 1] === locatie) {
                res.send({
                    status: config.STATUS.OK,
                    message: locatie,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not add locatie',
                });
            }
        });
    });
}

module.exports = appRouter;
