import initialize from './firebase';

export default class Message {
    constructor() {
        this.firebase = initialize();
    }
    getAll() {
        return [
            { type: 'text', author: "me", data: { text: "Why don't they have salsa on the table?" } },
            { type: 'text', author: "them", data: { text: "What do you need salsa for?" } },
            { type: 'text', author: "me", data: { text: "Salsa is now the number one condiment in America." } },
        ];
    }
};

