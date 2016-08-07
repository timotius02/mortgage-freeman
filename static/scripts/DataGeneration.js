
var nessieKey = '0b7d0a3d96fef1c82a94ab07d65695af';

var customer = '57a74057bc727e4b519f23d2';
var account = '57a740a6bc727e4b519f23d4';

var foodIds = [ "57a68e4cbc727e4b519f204b", "57a68f1dbc727e4b519f204d", "577d60be0733d0184021f588"];
var shoppingIds = ["57a68f51bc727e4b519f204e", "57a68f76bc727e4b519f204f"];
var groceryId = "57a68ecabc727e4b519f204c";
var entertainmentIds = ["576d46800733d0184021f50e","576d465b0733d0184021f50c"];
var billIds = ["576d44b20733d0184021f502","576d456c0733d0184021f507"];
var rentId = "57474d10cb410085213e72b5";
var utilityId = "57474d32cb410085213e72b6";
var insuranceId = "57474d47cb410085213e72b7";
var waterid = "57474d5ccb410085213e72b8";

var notReallyRandomInt = 1;

$(document).ready(function() {
    CreateDeposit( "08", "2015", 4150, 131, 107, 322, 61, "40", "1000");

});

function net(month, year, deposit, food, entertainment, groceries, shopping, withdrawals, bills ) {
    var monthlyTotal = (deposit - food - entertainment - groceries - shopping - +withdrawals -+bills);
    console.log("month " + month + ": " + monthlyTotal);
    return monthlyTotal;
}

function MockAccountForMonth(month, year, deposit, food, entertainment, groceries, shopping, withdrawals, bills) {


    var date = year + "-" + month + "-01";

    CreateDeposit(account, date, deposit);
    CreatePayment( account, foodIds[ notReallyRandomInt % foodIds.length], date, food);
    CreatePayment( account, entertainmentIds[ notReallyRandomInt % entertainmentIds.length], date, entertainment);
    CreatePayment( account, groceryId, date, groceries);
    CreatePayment( account, shoppingIds[ notReallyRandomInt % shoppingIds.length], date, shopping);
    CreateWithdrawal( account, date, withdrawals );
    CreateBill( account, date, bills, "576d44b20733d0184021f502");

}

function CreateWithdrawal(payer, date, amount) {
    var data = {
        "medium": "balance",
        "transaction_date": date,
        "status": "completed",
        "amount": amount,
        "description": "Money for sponsoring hackathons."
    };
    url = 'accounts/'+ payer +'/withdrawals?';
    notReallyRandomInt++;
    ApiCall(url, data);
}

function CreatePayment(payer, merchant, date, amount){
    var data = {
        "merchant_id": merchant,
        "purchase_date": date,
        "amount": amount,
        "status": "completed",
        "medium": "balance",
        "description": "Paying for thing."
    };
    var url = 'accounts/'+ payer +'/purchases?';
    notReallyRandomInt++;
    ApiCall(url, data);
}

function CreateDeposit(recieverId ,date, amount){
    var data = {
        "medium": "balance",
        "transaction_date": date,
        "status": "completed",
        "description": "Paycheck",
        "amount": amount
    };
    var url = 'accounts/'+ recieverId +'/deposits?';
    notReallyRandomInt++;
    ApiCall(url, data);
}

function CreateBill(payer, date, amount, reciever){
    var data = {
        "status": "completed",
        "payee": reciever,
        "payment_date": date,
        "payment_amount": amount
    };
    var url = 'accounts/'+ payer +'/bills?';
    notReallyRandomInt++;
    ApiCall(url, data);
}

function ApiCall( url, data) {
    return $.ajax({
        type: "POST",
        url: 'http://api.reimaginebanking.com/'+ url +'key=' + nessieKey,
        contentType: "application/json",
        data: JSON.stringify(data),
        dataType: "json",
        success: function(results){
            console.log(results);
        }
    });
}