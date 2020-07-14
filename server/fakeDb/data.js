const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: user1Id,
      avatar: "https://i.ya-webdesign.com/images/avatar-png-1.png",
      email: "gmmunis@hotmail.com",
      name: "Guilherme M.Munis",
      username: "Gmmunis",
      info: "Olá eu sou o Guilherme e sou Programador!",
      password: "guigui",
      role: "admin"
    },
    {
      _id: user2Id,
      avatar: "https://i.ya-webdesign.com/images/avatar-png-1.png",
      email: "test@hotmail.com",
      name: "TestUser",
      username: "testUserName",
      info: "Olá eu sou o usuário de teste!",
      password: "testtest",
    }
  ],
  portfolios: [
    {
      title: 'Job in Fillet',
      company: 'Fillet',
      companyWebsite: 'www.google.com',
      location: 'São Paulo',
      jobTitle: 'Programador Front-end',
      description: 'fazia uns códigos.',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
      user: user1Id
    },
    {
      title: 'Job in Superare',
      company: 'Superare',
      companyWebsite: 'www.google.com',
      location: 'São Paulo',
      jobTitle: 'Programador Full Stack',
      description: 'fazia uns códigos.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
      user: user1Id
    },
    {
      title: 'Job in SmartMEI',
      company: 'SmartMEI',
      companyWebsite: 'www.google.com',
      location: 'São Paulo',
      jobTitle: 'Programador Full Stack',
      description: 'fazia uns códigos',
      startDate: '01/01/2010',
      endDate: '01/01/2011',
      user: user1Id
    }
  ]
}

module.exports = data;