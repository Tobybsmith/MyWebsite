const home = document.getElementById('home')
const emma = document.getElementById('emma')
const proj = document.getElementById('projects')
const corp = document.getElementById('corp')

home.addEventListener('click', () => {
    window.location.href = './index.html'
})
emma.addEventListener('click', () => {
    window.location.href = 'https://emmapirieportfolio.weebly.com/'
})
proj.addEventListener('click', () => {
    window.location.href = './silly.html'
})
corp.addEventListener('click', () => {
    window.location.href = "https://extremelycorporate.ca/"
})