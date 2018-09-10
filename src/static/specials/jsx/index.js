import style from '../css/index.less'
import config from '../../../configHtml/config'
console.log(config.HTMLDirs)
let oDiv = document.getElementById('wrapper')
console.log(oDiv)
// let oA = document.createElement('a')
// oA.class = 'page'
// oA.href = 'a'
let str = ''
config.HTMLDirs.forEach((val) => {
  // console.log(val)
  // let oA = document.createElement('a')
  // oA.class = 'page'
  // oA.href = 'specials/' + val.page + '.html'
  str += `<a class="page" href="/specials/${val.page}.html">${val.title}</a>`
})
for (let i = 0; i < 7; i++) {
  str += '<div class="page bg" href="javascript:;"></div>'
}
console.log(str)
oDiv.innerHTML = str
