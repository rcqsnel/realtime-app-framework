var dispatcher = require('../dispatcher/Dispatcher');

function dispatch(action) {
    dispatcher.dispatch(action);
}

function dispatchServer(action) {
    io.socket.post('/cah/io/action', {action: action});
}

io.socket.on('action', function(action) {
    dispatcher.dispatch(action);
});

// ACTIONS

var PlayerActions = {

    identify: function(playerId) {

        var action = {
            actionType: 'IDENTIFY_PLAYER',
            playerId: playerId
        };

        dispatchServer(action);

    },

    connect: function() {
        var action = {
            actionType: 'CONNECT'
        };

        dispatchServer(action);
    },

    startGame: function() {

        var action = {
            actionType: 'START_GAME'
        };

        dispatchServer(action);

    },

    playCard: function(card) {

        var action = {
            actionType: 'PLAY_CARD',
            card: card
        };

        dispatchServer(action);

    },

    selectCard: function(playerId, card) {

        var action = {
            actionType: 'SELECT_CARD',
            card: card,
            playerId: playerId
        };

        dispatchServer(action);

    },

    confirmCard: function(playerId) {

        var action = {
            actionType: 'CONFIRM_CARD',
            playerId: playerId
        };

        dispatchServer(action);

    },

    changeId: function(playerId) {

        var action = {
            actionType: 'CHANGE_ID',
            playerId: playerId
        };

        dispatch(action);

    }

};

module.exports = PlayerActions;