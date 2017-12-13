
let users = [{
    id: 1,
    name: 'Leong Yok Tien',
    tn: require('../../assets/userProfile1_tn.jpg')
},{
    id: 2,
    name: 'Imrul Hasan',
    tn: require('../../assets/userProfile2_tn.jpg')   
}]


export default (id) =>  {
    let user = users.find(u=> u.id == id);
    return user || users[0];
};

