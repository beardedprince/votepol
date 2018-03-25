import { Component } from '@nestjs/common';

@Component()
export class PollService {
    private poll: string;

    create(poll) {
        const Ably = require('ably');
        var ably = new Ably.Realtime('7Xsr5w.6SvLAg:2E-lpcJO_x3-aHqN');
        var channel = ably.channels.get('votepol');

        const data = {
            points: 1,
            movie: poll.movie
        };
        channel.publish('vote', data);
    }
}