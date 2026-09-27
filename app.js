const electricians = [
 {name:"Vicky Chopra",phone:"+919796276416",rating:5.0},
 {name:"Chaten Suri",phone:"+919541373714",rating:4.6},
 {name:"Virender Kumar",phone:"+919419155499 / +918492897975",rating:4.5}
];

function card(e,i){
 const stars="★".repeat(Math.floor(e.rating))+(e.rating%1?"½":"");
 const phones=e.phone.split(" / ");
 const callLinks=phones.map(p=>`<a class="call" href="tel:${p.trim()}">📞 Call ${p.trim()}</a>`).join("");
 return `<article class="card">
   <div class="avatar">👷</div>
   <div class="name">${i+1}. ${e.name}</div>
   <div class="stars">${stars} ${e.rating.toFixed(1)}</div>
   <div>15-hour service</div>
   ${callLinks}
 </article>`;
}

document.getElementById("topList").innerHTML =
 electricians.map(card).join("") +
 `<div class="coming-soon">⚡ New numbers are coming soon!!!</div>`;

document.getElementById("allList").innerHTML =
 electricians.map(card).join("") +
 `<div class="coming-soon">⚡ New numbers are coming soon!!!</div>`;

document.getElementById("complaintForm").addEventListener("submit", e=>{
 e.preventDefault();
 const item={name:name.value,phone:phone.value,problem:problem.value,date:new Date().toLocaleString()};
 const old=JSON.parse(localStorage.getItem("krishnaComplaints")||"[]");
 old.push(item);
 localStorage.setItem("krishnaComplaints",JSON.stringify(old));
 document.getElementById("success").innerHTML="<p>✅ Complaint saved successfully. Krishna Electricals team can contact you.</p>";
 e.target.reset();
});
