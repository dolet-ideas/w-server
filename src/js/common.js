import PubSub from 'pubsub-js';
import './app'
import "../style/style.sass";

PubSub.publish('MY TOPIC', 'hello world!');
