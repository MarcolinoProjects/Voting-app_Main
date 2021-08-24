var amqp = require('amqplib/callback_api');
const host = process.env.RABBIT_HOST? process.env.RABBIT_HOST :'amqp://rabbitmq:rabbitmq@localhost'
class Rabbitmq {
    socketIO=undefined
    constructor() {
        const reference = this;
        amqp.connect(host, function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                    throw error1;
                }
                const queue = 'events';
                channel.assertQueue(queue, {
                    durable: false
                });
                channel.consume(queue, function(msg) {
                    if (reference.socketIO){
                        const votingSession = JSON.parse(msg.content.toString())
                        reference.socketIO.emit(votingSession.uuid, msg.content.toString())
                    }
                }, {
                    noAck: true
                });
            });
        });
    }
    bindSocketIO(socketIO){
        this.socketIO=socketIO
    }
}

const rabbit = new Rabbitmq()
module.exports = rabbit;
