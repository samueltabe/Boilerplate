const user = [
    {name:'Ben', premium:true},
    {name:'Gen', premium:false},
    {name:'Bell', premium:true},
    {name:'Ginn', premium:true},
    {name:'Bleny', premium:false}
];

export const preUser = (user) => {
    return user.filter(user => !user.premium); 
};

export default user;