
import { gql } from 'apollo-boost';

export const GET_PORTFOLIO = gql`
query Portfolio($id: ID) {
  portfolio(id: $id) {
     _id, 
     title, 
     company, 
     companyWebsite
     location
     jobTitle
     description
     startDate
     endDate
    }
  }
`

export const GET_PORTFOLIOS = gql `
  query portfolios {
    portfolios {
       _id, 
       title, 
       company, 
       companyWebsite
       location
       jobTitle
       description
       startDate
       endDate
      }
    }`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(input: {
      title: "New Job"
      company: "New Company"
      companyWebsite: "New Website"
      location: "Nova localizacao"
      jobTitle: "Novo Job title"
      description: "Nova descricao"
      startDate: "2020-12-12T23:59Z"
      endDate: "2021-08-30T23:59Z"
    }) {
      _id, 
       title, 
       company, 
       companyWebsite
       location
       jobTitle
       description
       startDate
       endDate
    }
  }`;

export const UPDATE_PORTFOLIO = gql `
  mutation UpatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
      title: "Update Job"
      company: "Update Company"
      companyWebsite: "Update Website"
      location: "Update Nova localizacao"
      jobTitle: "Update Novo Job title"
      description: "Update Nova descricao"
      startDate: "2020-12-12T23:59Z"
      endDate: "2021-08-30T23:59Z"
    }) {
      _id, 
       title, 
       company, 
       companyWebsite
       location
       jobTitle
       description
       startDate
       endDate
    }
  }`;

  export const DELETE_PORTFOLIO = gql `
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
  `