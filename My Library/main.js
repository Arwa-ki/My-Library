var orderBtn = document.getElementById("order-btn");
    var loginModal = document.getElementById("login-modal");
    var loginForm = document.getElementById("login-form");
    var home = document.getElementById("home");
    
    orderBtn.addEventListener("click", function() {
        loginModal.style.display = "block";
        home.style.pointerEvents = "none";
        home.style.opacity = "0.5";
    });
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        loginModal.style.display = "none";
        home.style.pointerEvents = "auto";
        home.style.opacity = "1";
    
    });
    const  navbarToggle= document.querySelector('.menu-toggle');
    const navbarMenu =document.querySelector('.menu')
    navbarToggle.addEventListener('click', ()=>{
        navbarMenu.classList.toggle('active');
    });
    navbarToggle.addEventListener('click',()=>{
        navbarMenu.classList.replace('close');
    });
    let currentItemIndex = 0;
    const items = document.querySelectorAll('.Arabic-items');
  
    function showPreviousItem() {
      items[currentItemIndex].style.display = 'none';
      currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
      items[currentItemIndex].style.display = 'block';
    }
  
    function showNextItem() {
      items[currentItemIndex].style.display = 'none';
      currentItemIndex = (currentItemIndex + 1) % items.length;
      items[currentItemIndex].style.display = 'block';
    }

    let currentItemIndexs = 0;
    const itemss = document.querySelectorAll('.English-items');
  
    function showPreviousItems() {
      itemss[currentItemIndexs].style.display = 'none';
      currentItemIndexs = (currentItemIndexs - 1 + itemss.length) % itemss.length;
      itemss[currentItemIndexs].style.display = 'block';
    }
  
    function showNextItems() {
      itemss[currentItemIndexs].style.display = 'none';
      currentItemIndexs = (currentItemIndexs + 1) % itemss.length;
      itemss[currentItemIndexs].style.display = 'block';
    }
      