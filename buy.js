const cusname = document.getElementById("cusname");
const email = document.getElementById("email");
const telnumber = document.getElementById("telnumber");
const customername = document.getElementById("customername");
const customernumber = document.getElementById("customernumber");
const customermail = document.getElementById("customermail");
const buttonaddorder = document.getElementById("addorder");
const buttonorder = document.getElementById("order");
const coc = document.getElementById("coc");
const co = document.getElementById("co");
const customerdetails = document.getElementById("customerdetails");
const teamanuf = document.getElementById("teamanuf");
const packagetype = document.getElementById("packagetype");
const quantitysize = document.getElementById("quantitysize");
const extra = document.getElementById(extra);

customerdetails.addEventListener("click",details);
function details(){
customername.innerText=("cusname: "+ cusname.value); 
customernumber.innerText=("telnumber : "+ telnumber.value); 
  customername.innerText=("email : "+ email.value); 
}
let manuf=null;
  let total=0;
let maxtotal=0;
let q=0;

teamanuf.addEventListener("change",mt);
function mt(){
if (document.getElementById("dil").checked){
  manuf=`Dilma`
  q=1000;
}
if (document.getElementById("jon").checked){
  manuf=`Jones`
  q=1500;
}
if (document.getElementById("geo").checked){
  manuf=`George Steuart`
  q=1000;
}
if (document.getElementById("mal").checked){
  manuf=`Malwatte Valley Plantations`
  q=2000;
}
if (document.getElementById("pres").checked){
  manuf=`Prestige Ceylon Teas`
  q=1000;
}
if (document.getElementById("emp").checked){
    manuf=`Empire teas`
    q=2000;
}
maxtotal=q;
coc.innerText=`Current  Cost is  ${maxtotal}`;
co.innerText=`The manufacturer selected is ${manuf}. `
}

let packag;
let pack;
packagetype.addEventListener("click",package);
function package(){
if (document.getElementById("papo").checked){
    packag=`Paper Pouches`
 pack=1000;
}
if (document.getElementById("tin").checked){
    packag=`Tins`
pack=5000;
}
if (document.getElementById("bag").checked){
    packag=`Bags`
 pack=2500;
}
maxtotal=maxtotal+pack;
coc.innerText=`Current  Cost is  ${maxtotal}`;
co.innerText=`The manufacturer selected is ${manuf}. The package type is ${packag}.`
}

let sizetotal;
let size;
let nomanuf=" ";
let s;
size.addEventListener("click",psize);
function psize(){
if (document.getElementById("small").checked){
 s=1000;
size=`Small`
}
if (document.getElementById("medium").checked){
s=2500;
size=`Medium`
}
if (document.getElementById("large").checked){
s=5000;
size=`Large`
}
maxtotal=maxtotal+s;
coc.innerText=`Current  Cost is  ${maxtotal}`;

co.innerText=`The manufacturer selected is ${manuf}. The package type is ${packag}.The size is ${size}.`;
nomanuf=nomanuf + " " + manuf; 
}

let t=0;
let x=0;
let y=0;
let nototal=0;
extras.addEventListener("click",ex);
function ex(){
  if (document.getElementById("mug").checked==true){
t=500;
  }
  else{
    t=0;
  }
  if (document.getElementById("silver").checked==true){
 x=1000;
  }
  else{
    x=0;
  }
  if (document.getElementById("wooden").checked==true){
    y=1500;
  }
  else{
    y=0;
  }
  total=maxtotal+t+x+y;
  coc.innerText=`Current  Cost is  ${total}`;
 nototal=nototal+total;
}


let a=0;
const ooc= document.getElementById("ooc");
const overo = document.getElementById("overo");
let notea=" " ;
buttonaddorder.addEventListener("click",overallorder);
function overallorder(){
a=a+1;
ooc.innerText=`The overall cost is ${nototal}.`
overo.innerText=`The tea manufacturers ordered are ${nomanuf}`
}

buttonorder.addEventListener("click",order)
function order(){
 alert("ordered successfully." ); 
customername.innerText=null; 
customernumber.innerText=null;
customermail.innerText=null; 
co.innerText=null;
coc.innerText=`0`;
ooc.innerText=`0`;
overo.innerText=null;
}
buttonaddorder.addEventListener("click",overallordero)
function overallordero(){
co.innerText=null;
coc.innerText=`0`;
}

let loyaltypoints=0;
const loyaltypoint=document.getElementById("loyalty points");
const buttoncl=document.getElementById("check loyalty");
buttoncl.addEventListener("click",checkloyalty);
function checkloyalty(){
if (a>3){
loyaltypoint=a*20;
loyaltypoints.innerText=`The loyalty points is : ${loyaltypoint}`
}
else{
 loyalty.innerText=`0`;
}
}

const buttonaddfavourite= document.getElementById("addFavourite");
const buttonorderfavourite = document.getElementById("orderfavourite");
buttonaddfavourite.addEventListener("click",addEntry);
let directory;
var en;
buttonorderfavourite.addEventListener("click",showEntries);
function showEntries(){
store=JSON.parse(localStorage.getItem('directory'));
coc.innerText="The cost is "+store.total;
co.innerText=store.cusname +" " + store.telnumber +" " + store.email +" "+ store.manuf +" "+ store.packag +" "+ store.size;
}
function addEntry(){
  const entry={
    "cusname":cusname.value,
    "telnumber":telnumber.value,
    "email":email.value,
    "manuf":manuf,
    "packag":packag,
    "size":size,
    "total":total,
  };
  localStorage.setItem('directory',JSON.stringify(entry));
}