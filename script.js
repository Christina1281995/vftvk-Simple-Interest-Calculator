function compute()
{
    // Get values from the form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validation: Check if nothing was entered
    if(principal == ""){  
        alert("Please enter a starting amount!");
        document.getElementById("principal").focus();
    }

    // Validation: Check if number is 0 or negative
    else if(parseInt(principal) <= 0){ 
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    // Calculate interest and display result
    else{   
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    // Result formatting
    document.getElementById("result").innerHTML = "<p> If you deposit <span class=\"highlight\">" + principal + "</span>, <br>"
        + "at an interest rate of <span class=\"highlight\">" + rate  + "%.</span> <br>"
        + "You will receive an amount of <span class=\"highlight\">" + interest + "</span>, <br>"
        + "in the year <span class=\"highlight\">" + year + "</span></p>"; 
    }
}

// Update the interest rate label when slider is changed
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval + "%";
}
