// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
//     а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject)=>{
        allUsers.map(user => {
            if (user.name === userName) {
            resolve({...user, active: !user.active })
            } return user
            reject('error')
   })
    })
}

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger).catch(error => console.log(error));
toggleUserState(users, 'Lux').then(logger).catch(error => console.log(error));

