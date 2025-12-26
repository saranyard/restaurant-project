function load() {
    window.location.href = "collection.html";
}
// ----





const frame = document.getElementById("frame");
const img=document.getElementById("img");

function reg() {
    if (frame.style.display === "block") {
        frame.style.display = "none";

    }
    else {
        frame.style.display = "flex";

    }
}

function cl()
{
 
        frame.style.display = "none";
    
}

function cl1()
{
 
        modal.style.display = "none";
         frame.style.display = "none";
    
}



const modal=document.getElementById("modal");
function createaccount()
{
    modal.style.display = "flex";
}



function login() {
    window.location.href = "home.html"
}
// function createaccount()
// {
//     wi
// }

function home()
{
    window.location.href = "home.html"
}
function log()
{
    frame.style.zIndex="9999";
    modal.style.display="none";
}

function buffet()
{
    window.location.href="buffet.html"
}



function toggleHeart(el) {
  if (el.textContent === "♡") {
    el.textContent = "♥";
  } else {
    el.textContent = "♡";
  }
}



function showName()
{
    document.getElementById("name").value="Amjath Althaf";
}
function showmail()
{
    document.getElementById('email').value='amjaann@gmail.com';
}
function showmobile()
{
    document.getElementById('mobile').value='+91 7867980688';
}
function showmsg()
{
    document.getElementById('txt').value='I need discount options for table booking';

}







function handleSubmit()
{
    document.getElementById("btn").style.display = "none";
    const msg = document.getElementById("successMsg");
    msg.style.display = "block";
    msg.style.color = "#b89c65";
    msg.style.fontSize = "25px";
    msg.style.fontWeight="bold";
    setTimeout(()=>{
        window.location.href="home.html";
    },3000);

    return false;
}





function more()
{
    window.location.href="buffet.html"
}

function more1()
{
    window.location.href="menu.html";
}




function showTab(tabId) {
    // remove active class from tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // remove active class from contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // add active to clicked tab
    event.target.classList.add('active');

    // show selected content
    document.getElementById(tabId).classList.add('active');
}



function additem()
{
    window.location.href="whishlist.html";
}


function change()
{
    window.location.href="menu.html";
}


function reservenow()
{
window.location.href="reservation.html";
}



function pay()
{
    window.location.href="reservation.html";
}

function sub()
{
    window.location.href="payment.html";
}






function togglePayment() {
    const options = document.getElementById("paymentOptions");
    const arrow = document.getElementById("arrow");

    if (options.style.display === "block") {
        options.style.display = "none";
        arrow.classList.remove("rotate");
    } else {
        options.style.display = "block";
        arrow.classList.add("rotate");
    }
}




function showCardForm() {
    document.getElementById("cardForm").style.display = "block";
}



function proceedPayment() {
  

 
alert("Reservation Success")
  
    setTimeout(function () {
        window.location.href = "confirmation.html"; // next page
    }, 3000); // 3000 ms = 3 seconds
}
