(function inputLabelUpDown(){
    let formInputs = document.querySelectorAll('.form-group');
    for(let formInput of formInputs){
        let inputs = formInput.querySelectorAll('input, textarea');
        for(let input of inputs){
            input.addEventListener('change', function(){
                checkInputValue(formInput, input);
            });

            window.addEventListener('load', function(){
                checkInputValue(formInput, input);
            });
        }
    }

    function checkInputValue(formInput, input){
        if(input.value!=""){
            formInput.classList.add('not-empty-input');
        }
        else{
            formInput.classList.remove('not-empty-input');
        }    
    }
})();

(function alertDismissable(){
    let alerts = document.querySelectorAll(".dismissable");
    for(let alert of alerts){
        alert.insertAdjacentHTML('beforeend','<button class="close">&times;</button>');
        let closeBtn = alert.querySelector(".close");
        closeBtn.addEventListener("click", function(){
            alert.className += " dismissed";
            setInterval(function(){
                alert.style.display = "none";
            }, 1000);
        });
    }
})();

(function tab(){
    let tabs = document.querySelectorAll(".tab");
    for(let tab of tabs){
        let menuItems = tab.querySelectorAll(".tab__menu li a");
        let activeTab = tab.querySelector(".tab__menu .active");
        let tabBodies = tab.querySelectorAll(".tab__body > div");
        
        let i = 1;
        for(let tabBody of tabBodies){
            tabBody.id = tab.id + "-tab-" + i++; 
        }
        
        
        i = 1;
        for(let menuItem of menuItems){
            
            menuItem.href = "#" + tab.id +"-tab-"+ i++;
            
            menuItem.addEventListener("click", function(event){
                event.preventDefault();
                
                let menuActiveItem = tab.querySelector(".tab__menu .active");
                if(menuActiveItem !== null){
                    menuActiveItem.classList.remove("active");                    
                    tab.querySelector(".tab__body > .show").classList.remove("show");
                }
                menuItem.classList.add("active");
                tab.querySelector(menuItem.getAttribute("href")).classList.add("show");
                
            });
        }


        if(activeTab !== null){
            let activeBodyItem = tab.querySelector(".tab__body " + activeTab.getAttribute("href"));
                            activeBodyItem.classList.add('show');
                        }
    }
})();

