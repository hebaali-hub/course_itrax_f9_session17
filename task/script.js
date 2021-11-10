document.getElementById("opt_id").oninput = function () {
    "use strict";
    var o_num1 = document.getElementById("input_num1").value;
    var o_num2 = document.getElementById("input_num2").value;

    var res = document.getElementById("res_id");
    var opt = document.getElementById("opt_id").value;
    var num1 = parseInt(o_num1);
    var num2 = parseInt(o_num2);
   
    if (isNaN(o_num1) || isNaN(o_num2)|| !o_num2 || !o_num1) {
        res.innerHTML = "must enter number after choose operation";
        res.style.background="red";
        res.style.width="500px";
        res.style.color="white";
    } else if (num2==0 && opt == '/') {
        res.innerHTML = "not allow divide by zero";
        res.style.background="red";
        res.style.width="500px";
        res.style.color="white";

    }
    
   
    else {
        res.style.background="green";
        res.style.width="500px";
        res.style.color="white";

        switch (opt) {
            case '+':
                res.innerHTML = num1 + num2;
                
                break;
            case '-':
                res.innerHTML = num1 - num2;
                break;
            case '*':
                res.innerHTML = num1 * num2;
                break;
            default:

                res.innerHTML = num1 / num2;

                break;
        }



    }





};



