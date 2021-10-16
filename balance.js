function transfermoney()
{
    var sendername=document.getElementById("sname").value;
    var receivername=document.getElementById("rname").value;
    var amount=parseInt(document.getElementById("amount").value);
    var senderaccount=sendername+"BankBalance";
    var senderbalance=parseInt(document.getElementById(senderaccount).innerHTML);
    if(amount > senderbalance)
    {
        alert("Sorry! Sender has Insufficient Balance.")
    }
    else
    {
        var receiveraccount=receivername+"BankBalance";
        var senderbalanceleft=parseInt(document.getElementById(senderaccount).innerHTML)-amount;
        var total=parseInt(document.getElementById(receiveraccount).innerHTML)+amount;
        document.getElementById(senderaccount).innerHTML=senderbalanceleft;
        document.getElementById(receiveraccount).innerHTML=total;
        alert(`Hurray!Transfer Successfully Completed. Rs.${amount} is sent to ${receivername}.`)
    }
}
function withdraw()
{
        var name=document.getElementById("wname").value;
        var wamount=parseInt(document.getElementById("wamount").value);
        var account=name+"BankBalance";
        var balance=parseInt(document.getElementById(account).innerHTML);
        if(wamount > balance)
        {
        alert("Looks like you don't have enough Balance!");
        }
        var balanceleft=parseInt(document.getElementById(account).innerHTML)-wamount;
        document.getElementById(account).innerHTML=balanceleft;
        alert("Withdrawal is Successful");
}
function deposit()
{
        var name=document.getElementById("dname").value;
        var damount=parseInt(document.getElementById("damount").value);
        var account=name+"BankBalance";
        var balanceleft=parseInt(document.getElementById(account).innerHTML)+damount;
        document.getElementById(account).innerHTML=balanceleft;
        alert("Deposit is Successful");
}
function transferhistory()
{
        var sendername=document.getElementById("sname").value;
        var receivername=document.getElementById("rname").value;
        var amount=parseInt(document.getElementById("amount").value);
        var createtag=document.createElement("li");
        var textNode=document.createTextNode(`Rs.${amount} is sent from ${sendername} to ${receivername} on ${Date()}.`);
        createtag.appendChild(textNode);
        var element=document.getElementById("transferhistorycontent");
        element.insertBefore(createtag,element.firstChild);

        var name=document.getElementById("wname").value;
        var wamount=parseInt(document.getElementById("wamount").value);
        var createtag1=document.createElement("li");
        var Node=document.createTextNode(`Rs.${wamount} is withdrawed from ${name}'s account on ${Date()}.`);
        createtag1.appendChild(Node);
        var element1=document.getElementById("transferhistorycontent");
        element1.insertBefore(createtag1,element1.firstChild);

        var name1=document.getElementById("dname").value;
        var damount=parseInt(document.getElementById("damount").value);
        var createtag2=document.createElement("li");
        var Node=document.createTextNode(`Rs.${damount} is deposited in ${name1}'s account on ${Date()}.`);
        createtag2.appendChild(Node);
        var element2=document.getElementById("transferhistorycontent");
        element2.insertBefore(createtag2,element2.firstChild);
}
