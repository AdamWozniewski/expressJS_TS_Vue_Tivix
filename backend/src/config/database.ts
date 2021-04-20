export default {
    mongoUrl: 'mongodb://localhost:27017/',
    settings: {
        useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 3000,
        useCreateIndex: true,
    },
    databaseActions: [
        {
            type: 'reconnected',
            callback: 'Ponowne połączennie z bazy danych!',
        },
        {
            type: 'open',
            callback: 'Połączono z bazą danych!',
        },
        {
            type: 'disconnected',
            callback: 'Utracono połączonie z bazą danych!',
        },
        {
            type: 'reconnectFailed',
            callback: 'Ponowne połączenie nie zostało ustanowione!',
        },
        {
            type: 'error',
            callback: 'Błąd połączenia do bazy danych...',
        },
    ],
};
