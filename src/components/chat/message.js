import initialize from './firebase';

export default class Message {
    constructor(user) {
        this.firebase = initialize();
        this.user = user;
    }
    getDbRef(){
        return this.firebase.database().ref('messages/');
    }
    getAll(callback) {
        this.getDbRef()
        .orderByKey()
        .on('value', (snapshot)=>{
            callback(this.transform(snapshot.val()));
        });


        // return [
        //     { type: 'text', author: "me", data: { text: "Why don't they have salsa on the table?" } },
        //     { type: 'text', author: "them", data: { text: "What do you need salsa for?" } },
        //     { type: 'text', author: "me", data: { text: "Salsa is now the number one condiment in America." } },
        // ];
    }
    transform(data = []){
        return data.filter(e=> typeof e === 'object').map(e =>{
            return {
                type: 'text', 
                author: e.author === this.user.userName ? 'me' : 'them' ,
                data: { 
                    text: e.text 
                }
            }
        })
    }
};

