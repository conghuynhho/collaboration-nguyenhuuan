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



