const EventEmitter = require('events');

//pulser class inherit from eventemitter
class Pulser extends EventEmitter {
    start() {
        setInterval(() => {
            console.log(`${new Date().toISOString()} >>>> pulse`);
            this.emit('pulse');
            console.log(`${new Date().toISOString()} <<<< pulse`);
        })
    }
}

module.exports = Pulser;