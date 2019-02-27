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

