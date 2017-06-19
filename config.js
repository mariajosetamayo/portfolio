exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://mariajosetamayo:milanka2010:)@ds127132.mlab.com:27132/portfolio' :
                            'mongodb://localhost/portfolio-dev');
