
let modal = document.getElementById('myModal');
let btn = document.getElementById("myButton");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
     modal.style.display = 'block';

}

span.onclick = function () {
     modal.style.display = 'none';
}

window.onclick = function (event) {
     if (event.target == modal) {
          modal.style.display = 'none';
     }
}

// let tab;
// let tabContent;

// window.onload = function () {
//      tabContent = document.getElementsByClassName('tabContent');
//      tab = document.getElementsByClassName('tab');
//      hibeTabsContent(1);
// }

// function hibeTabsContent(a) {
//      for (let i = a; i < tabContent.length; i++) {
//           tabContent[i].classList.remove('show');
//           tabContent[i].classList.add('hide');
//           tab[i].classList.remove('whiteborder');
//      }
// }

// document.getElementById('tabs').onclick = function (event) {
//      let target = event.target;
//      if (target.className == 'tab') {
//           for (let i = 0; i < tab.length; i++) {
//                if (target == tab[i]) {
//                     showTabsContent(i);
//                     break;
//                }
//           }
//      }
// }

// function showTabsContent(b) {
//      if (tabContent[b].classList.contains('hide')) {
//           hibeTabsContent(0);
//           tab[b].classList.add('whiteborder');
//           tabContent[b].classList.remove('hide');
//           tabContent[b].classList.add('show');
//      }
// }

// function one() {
//      let checkbox = document.getElementById('one');

//      if (checkbox.checked) {
//           alert('true')
//      } else {
//           alert(false)
//      }
// }

// function two() {
//      let rog = document.getElementsByName('r1');
//      for (let i = 0; i < rog.length; i++) {
//           if (rog[i].checked) {
//                alert('Выбран ' + i + ' элеиент');
//           }
//      }
// }

// function fun1() {
//      let sel = document.getElementById('mySelect').selectedIndex;
//      let options = document.getElementById('mySelect').options;
//      alert('good Game ' + options[sel].text);
// }

// function one() {
//      let range = document.getElementById('r1');
//      let div = document.getElementById('test');
//      div.style.width = range.value + 'px';
// }

// function fun1() {
//      let rtl = document.getElementById('rtl').value;
//      let rtr = document.getElementById('rtr').value;
//      let rbl = document.getElementById('rbl').value;
//      let rbr = document.getElementById('rbr').value;
//      let ttl = document.getElementById('ttl');
//      let ttr = document.getElementById('ttr');
//      let tbl = document.getElementById('tbl');
//      let tbr = document.getElementById('tbr');

//      let block = document.getElementById('block');

//      ttl.value = rtl;
//      ttr.value = rtr;
//      tbr.value = rbr;
//      tbl.value = rbl;

//      block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
// }

// document.getElementById('nav').onmouseover = function (event) {
//      let target = event.target;
//      if (target.className == 'menu_item') {
//           let s = target.getElementsByClassName('submenu');
//           closeMenu();
//           s[0].style.display = 'block';
//      }
// }

// document.onmouseover = function (event) {
//      let target = event.target;
//      console.log(event.target);
//      if (target.className != 'menu_item' && target.className != 'submenu') {
//           closeMenu();
//      }

// }

// function closeMenu() {
//      let menu = document.getElementById('nav');
//      let subm = document.getElementsByClassName('submenu');
//      for (let i = 0; i < subm.length; i++) {
//           subm[i].style.display = 'none';

//      }
// }