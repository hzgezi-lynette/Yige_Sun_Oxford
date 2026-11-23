(function(){
 var nodes=document.querySelectorAll('.node'),panels=document.querySelectorAll('.panel');
 panels.forEach(function(p){p.hidden=true});
 nodes.forEach(function(n){n.addEventListener('click',function(){
  var id=n.getAttribute('data-p'),open=n.getAttribute('aria-expanded')==='true';
  nodes.forEach(function(x){x.setAttribute('aria-expanded','false')});
  panels.forEach(function(p){p.hidden=true});
  if(!open){n.setAttribute('aria-expanded','true');var p=document.getElementById(id);p.hidden=false;p.scrollIntoView({behavior:'smooth',block:'nearest'});}
 });});
})();
