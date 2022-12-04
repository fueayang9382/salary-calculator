console.log('JQ');
let fullEmployeesList =[];
let monthlyBudget = 0;
$(document).ready(readyNow);

function readyNow() {
    $('#submitWorkerInfo').on('click', addSubmittedWorkerInfo)
    $('body').on('click', '.firstThisEmployees', fireThisPerson)
    
}
//This is for button section only!!!/////////////

// grab value --> set values as object --> .push into array. 
function addSubmittedWorkerInfo() {
    console.log('Submit button is working!!! YES!');//clicker working

    let firstname = $('#firstNameInsert').val();
    let lastName = $('#lastNameInsert').val();
    let idName = $('#workeriD').val();
    let title = $('#workTitle').val();
    let annualSalary = $('#yearSalary').val();
   
    let employeeObject = {
        firstName: firstname,
        TheLastName: lastName, 
        iD:idName,
        titleName: title,
        bigSalary: annualSalary
    }

    
    fullEmployeesList.push(employeeObject)
    addToTable()
    console.log('logging inside of addSubmittedWorkerInfo function',fullEmployeesList);

    $('#firstNameInsert').val('');
    $('#lastNameInsert').val('');
    $('#workeriD').val('');
    $('#workTitle').val('');
    $('#yearSalary').val('');

}//end of my value-->object-->array
    console.log('logging OUTSIDE of addSubmittedWorkerInfo function.',fullEmployeesList);


function addToTable(){
    $('.employeesTable').empty();
    for(i=0;i<fullEmployeesList.length; i++){ 
    $('table').append(`
        <tr class="employeesTable">
            <td>${fullEmployeesList[i].firstName}</td> 
            <td>${fullEmployeesList[i].TheLastName}</td>
            <td>${fullEmployeesList[i].iD}</td>
            <td>${fullEmployeesList[i].titleName}</td>
            <td>${fullEmployeesList[i].bigSalary}</td> 
            <td><button class="firstThisEmployees" >Fire</button></td>
        </tr>
    `)}
    sumSalaryAll();
} 

function fireThisPerson(){
    $(this).parent().parent().remove();
}

function sumSalaryAll(){
    let workerMonthlySalary = $('#yearSalary').val()/12
    monthlyBudget += workerMonthlySalary
    console.log('this is the monthly budget plus updating', monthlyBudget);
    $('#updatingMonthlyBudget').text(`The company Monthly Budget: $${monthlyBudget}`);
    if(monthlyBudget > 20000){
        $('#updatingMonthlyBudget').css('background-color', 'red')
    }
}

// if monthlyBudget > $20,000 ---> highlight css red. 



// $('#theComapanyMonthlyBudget').append(`
//     <tr class="theComapanyMonthlyBudget">
//         <td>${theComapanyMonthlyBudget}</td>  
//     </tr>`)




// // need to divide the annaul salary by 12 to get monthly salary.
// let workerMonthlySalary = (Number($('.yearSalary') / 12))
// console.log('this is this worker salary',workerMonthlySalary);//test 
// //add each monthly salary to monthlyBudget. 
// monthlyBudget += workerMonthlySalary

// $('#theComapanyMonthlyBudget').append(`
// <tr class="theComapanyMonthlyBudget">
//     <td>${theComapanyMonthlyBudget}</td>  
// </tr>`)



