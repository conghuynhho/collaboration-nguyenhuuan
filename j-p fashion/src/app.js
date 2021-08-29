import data from './store/data.js'
import { Home } from './screens/Home.js'

const router = () => {
  console.log('hi')
  const body = document.getElementById('main-section')
  body.innerHTML = Home.render() 
}

window.addEventListener('load', router)
console.log(data)