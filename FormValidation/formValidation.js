document.getElementById("mySubmit").disabled = true;    
// Function on selected input
function focusFunction(grupo){
    document.getElementById(grupo).parentElement.querySelector("label").className="label_form_focused"
    console.log(document.getElementById(grupo).parentElement);
}
//
function blurValidation (variable) {
    if(document.getElementById(variable).value ===""){
        document.getElementById(variable).parentElement.querySelector("label").classList.remove("label_form_focused");
        document.getElementById(variable).parentElement.querySelector("label").className="label_form";
        document.getElementById(variable).parentElement.querySelector("span").innerHTML=" This field is required"
        document.getElementById(variable).parentElement.querySelector("input").style.boxShadow="0 2px 0 0 rgb(128, 16, 16)";
        }
        else{
            document.getElementById(variable).parentElement.querySelector("label").style.color="#999";
            document.getElementById(variable).parentElement.querySelector("span").innerHTML="";
            document.getElementById(variable).parentElement.querySelector("input").style.boxShadow="0 2px 0 0 lightgreen";
            }
    }

function validateEmail (email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(document.getElementById(email).value)==false){
        document.getElementById(email).parentElement.querySelector("input").style.boxShadow="0 2px 0 0 rgb(128, 16, 16)";
        document.getElementById(email).parentElement.querySelector("span").innerHTML=" Please insert a valid email"        
    }
  }

function validatePassword(pass){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&])(?!.*\s).{4,6}$/;
    if ( regex.test(document.getElementById(pass).value) == false ){
        document.getElementById(pass).parentElement.querySelector("input").style.boxShadow="0 2px 0 0 rgb(128, 16, 16)";
        document.getElementById(pass).parentElement.querySelector("span").innerHTML=" Password must be betwen 5-8 and include a number"
    }else{
        document.getElementById(pass).parentElement.querySelector("span").innerHTML=""
        document.getElementById(pass).parentElement.querySelector("input").style.boxShadow="0 2px 0 0 lightgreen";
    }
}
// validate password match
function validatePassMatch(){
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('repassword');
    let message = document.getElementById('rePassMessage');   
    if (pass1.value == pass2.value){       
        document.getElementById("mySubmit").disabled = false;
        document.getElementById("mySubmit").className="button activated";        
    }else{
        document.getElementById("mySubmit").disabled = true;
        message.innerHTML = "Passwords Do Not Match!";
    }
}