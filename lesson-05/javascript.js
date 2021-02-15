function bankApp() {
    let bankAppOpen = true;
    let balance = 5000;
   
    while(bankAppOpen){
        let action = prompt("Select Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
        switch (action) {
            case 'Q':
            bankAppOpen = false;
            alert('You have quit the banking application');
            break;
           
            case 'W': 
            let withdrawal =  prompt("Enter a dollar amount to withdraw");   
            balance = (balance - Number(withdrawal));
            alert("Your new balance is: $"  + balance);
            break;
        
            case 'D': 
            let deposit =  prompt("Enter a dollar amount to deposit");
            balance = (balance + Number(deposit));   
            alert("Your new balance is: $" + balance);
            break;

            case  'B':
            alert("Your current balance is: $"  + balance);
            break;

            default: 
            alert("Your selection was not valid.  Please select  Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance.");
            break;
        
        }

    }
  

}


