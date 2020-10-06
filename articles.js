'use strict'

const article = document.querySelector('article.article')
const actualites = document.getElementById('actualite')
const related = document.getElementById('related')

const populateArticle = data => {
  fetch(data.source)
    .then(result => {
      if (result.ok) return result.text()
    })
    .then(source => {
      article.querySelector('h2').innerText = data.headline
      document.querySelector('title').innerText = data.headline
      article.querySelector('h3').innerText = data.chapo
      article.querySelector('.date-created').setAttribute('datetime', data.dateCreated)
      article.querySelector('.date-created').innerText = new Date(data.dateCreated).toLocaleDateString()
      article.querySelector('.author-name').innerText = data.authorName
      article.querySelector('header picture img').src = data.images[0].url
      article.querySelector('.content').innerHTML = marked(source)
    })
}

fetch('/articles.json')
  .then(result => {
    if (!result.ok) throw new Error('No index file')
    return result.json()
  })
  .catch(console.error)
  .then(data => {
    if (data) {
      if (article) populateArticle(data.find(e => e.uid === article.dataset.uid))
    }
  })
