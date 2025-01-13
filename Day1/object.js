const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
function mostSkilledWorker(users){
      mostSkilled = ''
      maxSkilled = 0;

      for(const user in users){
        const skilledWorker = users[user].skills.length;
        if (skilledWorker > maxSkilled) {
            maxSkilled = skilledWorker;
            mostSkilledWorker= user
        }
      }

      console.log(`The person with the most skills is ${mostSkilledUser}, with ${maxSkills} skills.`);

}


function loggedUsersNo(users){
    loggedIn = 0;
     
    for(const loggedUser in users){
        
        const logUser = users[loggedUser].isLoggedIn;
        if (logUser === true){
            loggedIn += 1;
        }

    }
   console.log(`The total logged in user is ${loggedIn} `)
}

function userPoint(users){
    let usersWithPoint = 0;

    for(const user in users){
        const usersPoint = users[user].points;

        if (usersPoint > 50){
            usersWithPoint += 1;
        }
    }
    console.log(`The total number of users with point greater than 50 is ${usersWithPoint}`)
}

function mernStackDev(users){
    const mernDevelopers = [];

     for (const user in users){
        if(['MongoDB', 'Express', 'React', 'Node'].every(skill => skills.includes(skill))){
            mernDevelopers.push(user);
        }
    }

    console.log(`MERN Stack Developers: ${mernDevelopers.join(", ")}`)
}