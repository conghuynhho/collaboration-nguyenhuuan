function onClickToggle (){
  // toggle navbar
  const navbar = document.getElementById('nav');
  if(navbar){
    navbar.classList.toggle('open');
  }
  // change icon of toggle button
  const toggleButton = document.getElementById('toggleButton');
  if(toggleButton){
    toggleButton.classList.toggle('open')
  }
}
var button = document.querySelectorAll('.btn-store')
var item = document.querySelectorAll('.store-item')
for ( var i = 0; i< button.length; i++){
  button[i].onclick = function(e){
    e.preventDefault();
    var fitter = e.target.dataset.item;
    item.forEach(function(items){
      if(fitter == 'all')
      {
        items.style.display = 'block'
      }
      else {
        if(items.classList.contains(fitter)){
          items.style.display = 'block';
        }
        else{
        
          items.style.display = 'none';
        }
      }
    })
  }
}
// search button
var search = document.querySelector('.form-control')
var item = document.querySelectorAll('.store-item');
search.onkeyup = function(e){
  e.preventDefault();
  const searchFilter = e.target.value.toLowerCase().trim();
  item.forEach(function(items){
    if(items.textContent.includes(searchFilter))
    {
      items.style.display = 'block'
    }
    else {
      items.style.display = 'none'
    }
  })
}



const filterButtons = document.querySelectorAll('.btn-store');
const storeItems = document.querySelectorAll('.card'); 
filterButtons.forEach(button => {
  button.onclick = function(e){
    e.preventDefault();
    const filter = e.target.dataset.item;
    console.log(filter);
    storeItems.forEach(item => {
      if(filter === 'all'){
        item.style.display = 'block'
      }
      else{
        if(item.classList.contains(filter)) item.style.display = "block";
        else item.style.display = 'none'
      }
    })
  }
})


const searchBox = document.getElementById('searchBox');
searchBox.onkeyup = ()=>{
  const value = searchBox.value.toLowerCase().trim()
  storeItems.forEach(item => {
    if(item.textContent.includes(value)) item.style.display = 'block'
    else item.style.display = 'none'
  })
}
