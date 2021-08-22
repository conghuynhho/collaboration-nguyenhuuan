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


