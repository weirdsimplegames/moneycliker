  const cookie = document.getElementById('cookie');
let numberofcooke = document.getElementById('numberofcookie');
let buygrama = document.getElementById('buygrama');
let grammas = document.getElementById('grammas');
let buyfarm = document.getElementById('buyfarm');
let farms = document.getElementById('farms');
let buycurser = document.getElementById('buycurser');
let cursers = document.getElementById('cursers');

let cookies = 0;
let grammaboost = 1; 
let grammacost = 50;
let farmboost = 1; 
let farmcost = 500;
let cursercost = 10;
let curserboost = 0; 
setInterval(() => {
  cookies += curserboost;
  numberofcooke.textContent = 'Money:' + cookies;
}, 2000)



cookie.onclick = function changecookienumber() {
  cookies += 1 * grammaboost * farmboost;
  numberofcooke.textContent = 'Money:' + cookies;
}

buygrama.onclick = function addgrama() {
  if (cookies === grammacost || cookies > grammacost) {
    cookies -= 50;
    grammaboost += 0.25;
    grammacost += 50;
    
    grammas.textContent += "🧑‍✈";
  }

}

buyfarm.onclick = function addfarm() {
  if (cookies === farmcost || cookies > farmcost) {
    cookies -= 50;
    farmboost += 0.50;
    farmcost += 100;
    
    farms.textContent += "💂";
  }

}



buycurser.onclick = function addcurser() {
  if (cookies === cursercost || cookies > cursercost) {
    cookies -= 10;
    curserboost += 0.5;
    cursercost += 3;
    
    cursers.textContent += "⇖";
  }

}
