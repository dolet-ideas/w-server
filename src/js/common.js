import PubSub from 'pubsub-js';
import './app'

PubSub.publish('MY TOPIC', 'hello world!');
