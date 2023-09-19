import {Article} from '../../../src/entities/Article'

const defaultArticle = {
    id: "103",
    title: "Testing article",
    subtitle: "... and make others lives harder",
    image: "https://t4.ftcdn.net/jpg/05/72/75/99/360_F_572759975_8Tku6l3E3PAytqoLLRij9xwt1vybvbbi.jpg",
    views: 23,
    created: "27.02.2022",
    userId: "1",
    type: [
      "IT",
      "SCIENCE"
    ],
    blocks: []
  }

  export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: `http://localhost:8000/articles`,
    headers: {Authorization: 'asdg'},
    body: article ?? defaultArticle
  }).then(res => res.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {Authorization: 'asdg'},
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}