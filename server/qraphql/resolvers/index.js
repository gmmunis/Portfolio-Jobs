
const data = {
  portfolios: [
    {
      _id: "sad87daasdhjdjsb",
      title: 'Job in Fillet',
      company: 'Fillet',
      companyWebsite: 'www.google.com',
      location: 'Brasil, São Paulo',
      jobTitle: 'Programador Front-End',
      description: 'fazendo uns códigos...',
      startDate: '11/02/2019',
      endDate: '13/12/2019'
    },
    {
      _id: "da789ad1",
      title: 'Job in Superare',
      company: 'Superare',
      companyWebsite: 'www.google.com',
      location: 'Brasil, São Paulo',
      jobTitle: 'Programador FullStack',
      description: 'fazendo uns códigos.',
      startDate: '13/12/2019',
      endDate: '06/07/2020'
    },
    {
      _id: "sadcxv9",
      title: 'Work in SmartMEI',
      company: 'SmartMEI',
      companyWebsite: 'www.google.com',
      location: 'Brasil, São Paulo',
      jobTitle: 'Programador FullStack',
      description: 'fazendo uns códigos',
      startDate: '13/07/2020',
      endDate: '00/00/0000'
    }
  ]
}

exports.portfolioResolvers = {
  hello: () => {
    return 'Hello World!'
  },
  portfolio: ({ id }) => {
    const portfolio = data.portfolios.find(p => p._id === id)
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios
  }
}