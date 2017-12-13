
let users = [{
    id: 1,
    userName: 'leong',
    fullName: 'Leong Yok Tien',
    tn: require('../../assets/userProfile1_tn.jpg')
},{
    id: 2,
    fullName: 'Imrul Hasan',
    userName: 'imrul',
    tn: require('../../assets/userProfile2_tn.jpg')   
}]


export default (id) =>  {
    let user = users.find(u=> u.id == id);
    return user || users[0];
};

