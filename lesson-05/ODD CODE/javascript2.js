function bankApp() {
        let bankOpen = true;
        let balance = 5000;
        let action = prompt("Select Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
    while(bankOpen = true){
        switch (action) {
            case 'Q':
            alert('You have quit the banking application');               
            // bankOpen = false;
            break;
            // case 'W': {
            // let withdrawal =  prompt("Enter a dollar amount to withdraw");   
            // balance = (balance - withdrawal);
            // alert("Your new balance is: $"  + balance);
            // }
            // prompt("Select Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
            // break;
            // case 'D': {
            // let deposit =  prompt("Enter a dollar amount to deposit");
            // balance = (balance + deposit);   
            // alert("Your new balance is: $" + balance);
            // }
            // prompt("Select Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
            // break;
            // case  'B':
            // alert("Your current balance is: $"  + balance);
            // prompt("Se{lect Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
            // break;
            // default: 
            // alert("Your selection was not valid.  Please select  Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance.");
            // prompt("Select Q to Quit; W to withdraw funds, D to deposit funds or B to view your balance");
            // break;
        
        }
    }

}

