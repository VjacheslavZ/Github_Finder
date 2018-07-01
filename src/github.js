"use strict";

export class GitHub {
    constructor() {
        this.client_id = '04e28630e4fb3a17fad3';
        this.client_secret = 'ab36d3d2c936e7bdc50a254f65d107c58e13a7bf';
    };

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}