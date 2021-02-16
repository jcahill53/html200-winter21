function bankApp() {
    let bankAppOpen = true;
    let balance = 5000;
  
    while(bankAppOpen){
        let action = prompt("Select Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
        switch (action) {
          //QUIT THE APPLICATION
          case 'Q':
            bankAppOpen = false;
            alert('You have quit the banking application');
            break;
          //WITHDRAWALS
          case 'W': 
            let withdrawal =  prompt("Enter a dollar amount to withdraw"); 
            //Do not allow withdrawal to proceed if insufficient funds exist  
            if ((balance - Number(withdrawal)) <= 0) {
                alert("You have insufficient funds to proceed with this withdrawal.  Please select another action.");
            //evaluate if the withdrawal will result in a balance of $300 or less 
            } else if ((balance - Number(withdrawal)) <= 300) {
                    //Send a warning if the balance will be less than or equal to $300 and prompt the user whether to continue
                    let proceed = prompt("The withdrawal will reduce your balance to $300 or less.  Enter N to end the withdrawal request and select another action.");
                    if (proceed = 'N') {
                    alert ('Your withdrawal has been cancelled.  Please select another action.')
                    } else    {
                      balance = (balance - Number(withdrawal));
                      alert("Your new balance is: $"  + balance);
                    }           
              }
              //if no conditions above exist proceed with the withdrawal
              else {
              balance = (balance - Number(withdrawal));
              alert("Your new balance is: $"  + balance);
            }        
          break;
          //DEPOSITS
          case 'D': 
              let deposit =  prompt("Enter a dollar amount to deposit");
              if (Number(deposit)>50000) {
                  alert ("Deposits may not exceed $50,000.  Please select another action.")
                } else {
                  balance = (balance + Number(deposit));   
                  alert("Your new balance is: $" + balance);
                }
           break;
           //BALANCE
           case  'B':
              if (balance <=300) {
              alert("WARNING:  Your current balance is: $"  + balance +" and is below the recommended minimum balance. ");
              } else {
              alert("Your current balance is: $"  + balance);
              }
           break;
            //DEFAULT IF VALID VALUE IS NOT SELECTED
            default: 
              alert("Your selection was not valid.  Please select  Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance.");
            break;
        
        }
   }
}


