import users from "./users.js"

/*
* Task #1
*/
const getUserNames = users => users
  .map(user => user.name);

console.log(`Task #1:`, getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/*
* Task #2
*/
const getUsersWithEyeColor = (users, color) => users
  .filter((user) => user.eyeColor === color);

console.log(`Task #2:`, getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*
* Task #3
*/
const getUsersWithGender = (users, gender) => users
  .filter(user => user.gender === gender)
  .map(user => user.name);

console.log(`Task #3:`, getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*
* Task #4
*/
const getInactiveUsers = users => users
  .filter(user => !user.isActive);

console.log(`Task #4:`, getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*
* Task #5
*/
const getUserWithEmail = (users, email) => users
  .find(user => email === user.email);

console.log(`Task #5.1:`, getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.log(`Task #5.2:`, getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}

/*
* Task #6
*/
const getUsersWithAge = (users, min, max) => users
  .filter(user => user.age >= min && user.age <= max);

console.log(`Task #6.1:`, getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(`Task #6.2:`, getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*
* Task #7
*/
const calculateTotalBalance = users => users
  .reduce((acc, user) => acc += user.balance, 0);

console.log(`Task #7:`, calculateTotalBalance(users));
// 20916

/*
* Task #8
*/
const getUsersWithFriend = (users, friendName) => users
  .filter(({ friends }) => friends.includes(friendName))
  .map(({ name }) => name);

console.log(`Task #8.1:`, getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(`Task #8.2:`, getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

/*
* Task #9
*/
const getNamesSortedByFriendsCount = users => users
  .sort((curr, next) => curr.friends.length - next.friends.length);

console.log(`Task #9:`, getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*
* Task #10
*/
const getSortedUniqueSkills = users => users
    .flatMap(({ skills }) => skills)
    .filter((skill, idx, arr) => arr.indexOf(skill) === idx)
    .sort();

console.log(`Task #10:`, getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]