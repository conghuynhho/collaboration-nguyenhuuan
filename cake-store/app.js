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
