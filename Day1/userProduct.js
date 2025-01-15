const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]


  function signUp(users){
    const userId = prompt('Enter your iD');
    const userName = prompt('Enter your name');
    const describe = prompt('What are you getting?');
    const pricing = prompt('Enter price of product getting');
    const rating = prompt('What rating will you give this');
    

    const existedUser = users.some(user => user.__id == userId);

    if (existedUser) {
      console.log('Account exist already, login')
    } else{
      const newUSer = {
        __id : userId,
        name : userName,
        description: describe,
        price : pricing,
        ratings : [{userId : __id, rate : rating}],
        likes : [__id]
      }
    }
    user.push(newUSer);
    console.log('Congrats, signedUp successfully');
     
  }

  function signIn(users){
    const userName = prompt('What is your username');
    const userId = prompt('Enter your Id')

    const existedUser = users.find(user => user.__id === userId && user.name === userName)

    if(existedUser){
      console.log('SignIn successfully')
    }else {
      console.log('Create an account')
    }
  }