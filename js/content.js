import {
  Create
} from "./createmain.js";

//content linux button
export class Linux extends Create {
  constructor(title, eleDivs, putClass) {
    super()
    this.title = title;
    this.eleDivs = eleDivs;
    this.putClass = putClass;

    const btn6 = document.querySelector('.asideIcons li[data-option="linux"]');
    btn6.addEventListener('click', () => this.activeBlockLinux());
  }

  activeBlockLinux() {
    if (this.checkClass()) {
      this.section.classList.remove('active');
    } else {
      // create a block whit content
      this.setContent();
      //config content block: number of child, class name and number of parents
      this.putDivs(2, 'bl', 1);

      document.querySelector(`div.bl2`).innerHTML = '<img class="slider" src="../img/linux1.png">'
      this.sliderProgram('linux', 'png', 3500);

      const text = [{
        txt: '<h2>Masz dosyć używania Windows, chciałbyś spróbować innego systemu operacyjnego. Linux jest dla Ciebie!</h2>',
      }, {
        txt: ' - instalacja wybranej wersji linxua i dopasowanie dystrybucji do umiejętności użytkownika w obsłudze komputera,'
      }, {
        txt: ' - instalacja sterowników dla komponentów komputera lub laptopa,'
      }, {
        txt: ' - reinstalacja systemu,'
      }, {
        txt: ' - pomoc w rozwiązywaniu problemów,'
      }, {
        txt: ' - udzielam krótkiego kursu z zakresu obsługi linuxa przy odbiorze sprzętu '
      }, {
        txt: ' <div class="price">Cena za powyższą usługę: <span>od 30 zł</span></div>'
      }, {
        txt: '<h2>Zalety linuxa :</h2>'
      }, {
        txt: '- system działa zarówno na starszych urządzeniach jak i nowych,'
      }, {
        txt: '- nadaje się do codziennego użytku jak i również do rozrywki,'
      }, {
        txt: '- zajmuje o wiele mniej miejsca na dysku,'
      }, {
        txt: '- przyjazny dla początkujących,'
      }, {
        txt: '- jest darmowy i nie trzeba kupować żadnych licencji, wszystkie programy również są darmowe'
      }, {
        txt: ' <div class="hr">Chcesz używać Windowsa jak i Linuxa przy pomocy Dual Boot ?  Istnieje możliwość posiadania dwóch różnych systemów na jednym komputerze lub laptopie. Przy starcie komputera wybierasz system, na którym chcesz pracować.</div>'
      }];
      this.doAList(text, 1);
    }
  }
}
//end of line content linux

//content reinstall button
export class Reinstall extends Create {
  constructor(title, eleDivs, putClass) {
    super()
    this.title = title;
    this.eleDivs = eleDivs;
    this.putClass = putClass;

    const btn5 = document.querySelector('.asideIcons li[data-option="reinstall"]');
    btn5.addEventListener('click', () => this.activeBlockReinstall());
  }

  activeBlockReinstall() {
    if (this.checkClass()) {
      this.section.classList.remove('active');
    } else {
      // create a block whit content
      this.setContent();
      //config content block: number of child, class name and number of parents
      this.putDivs(2, 'bre', 1);

      document.querySelector(`div.bre1`).innerHTML = '<img class="slider" src="../img/installW1.png">'
      this.sliderProgram('installW', 'png', 3500);

      const text = [{
        txt: '<h2>Chcesz zmienić wersję lub przeinstalować system ?</h2>',
      }, {
        txt: ' - oferuję pomoc przy zakupie nowej wersji systemu Windows i jej instalacji,'
      }, {
        txt: ' - ponowna instalacja obecnego systemu operacyjnego,'
      }, {
        txt: ' - przywracanie systemu do stanu fabrycznego, czyli takiego, jaki otrzymano przy zakupie komputera (obejmuje laptopy, notebooki oraz tablety),'
      }, {
        txt: ' - po wgraniu systemu instaluję podstawowe sterowniki do karty graficznej, dzwiękowej i internet,'
      }, {
        txt: ' - oferuję również instację i konfigurację systemu operacyjnego Linux '
      }, {
        txt: ' <div class="price">Cena za powyższą usługę: <span>od 50 zł</span></div>'
      }, {
        txt: '<h2>Okres świadczenia wsparcia dla systemu Windows 7 dobiega końca! Nie czekaj, zmień system na nowszy lub inny system operacyjny.</h2>'
      }, {
        txt: 'Co oznacza brak wsparcia dla Windows 7 ?'
      }, {
        txt: '- Microsoft przestanie zapewniać aktualizacje oprogramowania, zabezpieczeń oraz brak poprawek systemu'
      }, {
        txt: 'Najlepszym sposobem na zachowanie bezpieczeństwa będzie zmiana systemu na nowszy lub inny system operacyjny'
      }, {
        txt: ' <div class="hr">Doradztwo oraz wsparcie dla każdego.</div>'
      }];
      this.doAList(text, 2);
    }
  }
}
//end of line content recovery

//content recovery button
export class Recovery extends Create {
  constructor(title, eleDivs, putClass) {
    super()
    this.title = title;
    this.eleDivs = eleDivs;
    this.putClass = putClass;

    const btn4 = document.querySelector('.asideIcons li[data-option="recovery"]');
    btn4.addEventListener('click', () => this.activeBlockRecovery());
  }
  activeBlockRecovery() {
    if (this.checkClass()) {
      this.section.classList.remove('active');
    } else {
      // create a block whit content
      this.setContent();
      //config content block: number of child, class name and number of parents
      this.putDivs(2, 'br', 1);

      document.querySelector(`div.br2`).innerHTML = '<img class="slider" src="../img/recovery1.jpg">'
      this.sliderProgram('recovery', 'jpg', 3500);

      const text = [{
        txt: '<h2>Utraciłeś dane ?</h2>',
      }, {
        txt: ' - oferuję odzyskiwanie danych z dysków twardych,'
      }, {
        txt: ' - przywracanie skasowanych zdjęć,'
      }, {
        txt: ' - odzyskiwanie danych z pendrive,'
      }, {
        txt: ' - odzyskiwanie danych z pamięci flash,'
      }, {
        txt: ' - naprawa uszkodzonych sektorów, co powoduje brakiem dostępu do dysku '
      }, {
        txt: ' <div class="price">Cena za powyższą usługę: <span>od 300 zł</span></div>'
      }, {
        txt: '<h2>Uwagi oraz proces odzyskiwania danych :</h2>'
      }, {
        txt: '- nie próbuj samodzielnie odzyskiwać danych, może pogorszyć to proces przywracania ich,  '
      }, {
        txt: '- należy zaprzestać pracy na uszkodzonym urządzeniu oraz zabezpieczyć odpowiednio nośnik,'
      }, {
        txt: '- po wykonanej analizie będzie podany raport uszkodzenia oraz dowiesz się, jakie dane i w jakim stopniu będą odzyskane'
      }, {
        txt: ' <div class="hr">Odzyskiwanie danych jest to specjalistyczna usługa, którą trzeba podjąć w przypadku całkowitego lub częściowego uszkodzenia nośnika danych, takiego jak dysk twardy lub inne urządzenia przenośne.</div>'
      }];
      this.doAList(text, 1);
    }
  }
}
//end of line content recovery

//content format button
export class Format extends Create {
  constructor(title, eleDivs, putClass) {
    super()
    this.title = title;
    this.eleDivs = eleDivs;
    this.putClass = putClass;

    const btn3 = document.querySelector('.asideIcons li[data-option="format"]');
    btn3.addEventListener('click', () => this.activeBlockFormat());
  }
  activeBlockFormat() {
    if (this.checkClass()) {
      this.section.classList.remove('active');
    } else {
      // create a block whit content
      this.setContent();
      //config content block: number of child, class name and number of parents
      this.putDivs(2, 'bf', 1);

      document.querySelector('div.bf1').innerHTML = '<img class="slider" src="../img/windows1.jpg">'
      this.sliderProgram('windows', 'jpg', 3500);

      const text = [{
        txt: '<h2>Formatowanie komputera jest jedną z tych czynności, którą powinno się wykonać raz na jakiś czas, a zaletą tego jest:</h2>',
      }, {
        txt: ' - sformatowany komputer zazwyczaj działa o wiele szybciej,'
      }, {
        txt: ' - bardziej wydajny i łatwiej się na nim pracuje,'
      }, {
        txt: ' - nie utracisz ważnych plików przechowywanych na pulpicie w innych lokalizacjach,'
      }, {
        txt: ' - oczyścisz wolną przestrzeń dyskową, zabieraną przez nieużywane programy ,'
      }, {
        txt: ' - oczyszcza system ze szkodliwych oprogramowań,'
      }, {
        txt: ' <div class="price">Cena za powyższą usługę: <span>30 zł, możliwa instalacja systemu 50 zł</span></div>'
      }, {
        txt: '<h2>Regularne czyszczenie systemu jest elementem istotnym ponieważ: </h2>'
      }, {
        txt: '- nagromadzone i niepotrzebne pliki czy wpisy w rejestrze potrafią znacznie wpływać na działanie systemu,'
      }, {
        txt: '- spadek wydajności systemu,'
      }, {
        txt: '- niespodziewane błędy wynikające ze źle usuniętych oprogramowań,'
      }, {
        txt: ' <div class="price">Cena za powyższą usługę: <span>20 zł</span></div>'
      }, {
        txt: ' <div class="hr">Nie czekaj, aż komputer powie STOP!</div>'
      }];

      this.doAList(text, 2);
    }
  }
}
//end of line content phone

//content page button
export class Pages extends Create {
  constructor(title, eleDivs, putClass) {
    super()
    this.title = title;
    this.eleDivs = eleDivs;
    this.putClass = putClass;

    const btn2 = document.querySelector('.asideIcons li[data-option="pages"]');
    btn2.addEventListener('click', () => this.activeBlockPages());
  }
  activeBlockPages() {
    if (this.checkClass()) {
      this.section.classList.remove('active');
    } else {
      // create a block whit content
      this.setContent();
      //config content block: number of child, class name and number of parents
      this.putDivs(2, 'tag', 2);
      let iconIndex = 0;
      let txtIndex = 0;
      // set icons in div element and text 
      const iconsList = [{
        icon: 'fas fa-mobile',
        txt: 'Strony mobilne'
      }, {
        icon: 'fas fa-eye',
        txt: 'Nowoczesne'
      }, {
        icon: 'fas fa-laptop-code',
        txt: 'Planowanie'
      }, {
        icon: 'far fa-window-maximize',
        txt: 'Optymalizacja'
      }];

      // create list element buttons
      for (let i = 0; i < 1; i++) {
        const ulElem = document.createElement('ul');
        document.querySelector(`div.${this.putClass}1`).appendChild(ulElem);
        ulElem.className = 'ulCont'
        for (let j = 0; j < 4; j++) {
          const liElem = document.createElement('li');
          document.querySelector('div.pageContent1 ul.ulCont').appendChild(liElem);
          liElem.className = 'icon';
          liElem.id = `btn${++this.classNum}`;
        }
        this.classCounter();
        document.querySelector(`div.${this.putClass}1 ul > li`).classList.add('active');
      }
      // putting font awsome in buttons and text
      const selectIconst = [...document.querySelectorAll('li.icon')];
      selectIconst.forEach(items => {
        const setIcon = iconsList[iconIndex++].icon;
        const setText = iconsList[txtIndex++].txt;
        items.innerHTML = `<i class='${setIcon}'></i><span>${setText}</span>`;
      })
      // end of line buttons

      // create tags of title button

      const mobile = {
        img: '<img src="../img/mobile.jpg">',
        txt: '<h2>Świetnie wyglądające na urządzeniach moblinych </h2><p>Małe jest piękne, więc dlaczego nie oglądać na telefonie komórkowym? Masz dostęp do swojej strony na urządzeniach mobilnych oraz tabletach, gdzie będzie wyglądać równie wyjątkowo, gdyż zaletą moich stron jest responsywność oraz estetyka.</p>'
      }
      const goodLook = {
        img: '<img src="../img/goodlook.png">',
        txt: "<h2>Nowoczesne i zgodne z aktualnymi standardami</h2><p>Utworzone strony są tak skonstruowane aby cieszyły oko i były przejrzyste. Standard stron to dla mnie priorytet, gdzie do utworzenia strony wykorzystuję najwyższy potencjał z HTML, Javascript oraz CSS'a wraz z preprocesorem Sass.</p>"
      }
      const planning = {
        img: '<img src="../img/planning.png">',
        txt: '<h2>Nie masz pomysłu na stronę? Nic trudnego...</h2><p>Razem dojdziemy do realizacji marzeń poprzez szczegółowe rozwiązania. Pomogę zaplanować wygląd strony, dobrać odpowiednie barwy, stworzyć animację i wiele innych konstruktywnych pomysłów. Czas realizacji jest indiwidualny do zaplanowanego projektu.</p>'
      }

      const project = {
        img: '<img src="../img/project.png">',
        txt: '<h2>Zoptymalizowane pod kątem wyszukiwarek internetowych</h2><p>Wyszukiwarki internetowe bez problemu znajdą Twoją stronę w labiryncie internetu. Oceny stron przez przeglądarki są zasadniczym kryterium dla wyszukiwania danej strony, więc dokładam wszelkich starań, aby Twoja strona była numerem jeden! </p>'
      }

      const tag1 = document.querySelector(`div.${this.putClass}2 div.tag1`);
      const tag2 = document.querySelector(`div.${this.putClass}2 div.tag2`);

      tag1.innerHTML = mobile.img;
      tag2.innerHTML = mobile.txt;

      function putContent() {
        this.iconsPages = (nameIcon, index) => {
          this.activeElement = selectIconst.findIndex(icon => icon.classList.contains('active'));
          this.nameIcon = nameIcon;
          this.index = index
          tag1.innerHTML = this.nameIcon.img;
          tag2.innerHTML = this.nameIcon.txt;
          selectIconst[this.activeElement].classList.remove('active')
          selectIconst[index].classList.add('active');
        }
        if (this.id === "btn1") {
          this.iconsPages(mobile, 0);
        } else if (this.id === "btn2") {
          this.iconsPages(goodLook, 1);
        } else if (this.id === "btn3") {
          this.iconsPages(planning, 2);
        } else if (this.id === "btn4") {
          this.iconsPages(project, 3);
        }
      }
      selectIconst.forEach(items => items.addEventListener('click', putContent));
    }
  }
}
//end of line content page

// content phone button
export class Phone extends Create {
  constructor(title, eleDivs, putClass, company, name, lastName) {
    super()
    this.title = title;
    this.eleDivs = eleDivs;
    this.putClass = putClass;
    this.company = company;
    this._name = name;
    this._lastname = lastName;

    const btn1 = document.querySelector('.asideIcons li[data-option="phone"]');
    btn1.addEventListener('click', () => this.activeBlockPhone());
  }
  // create blocks and content
  activeBlockPhone() {
    if (this.checkClass()) {
      this.section.classList.remove('active');
    } else {
      // create a block whit content
      this.setContent();
      document.querySelector('div.phoneContent1').innerHTML = `<p class="company">${this.company}</p><p>${this._name} ${this._lastname}<p>telefon:  <span><button class="showPhone">Pokaż</button></span> <p>e-mail:  <span><button class="showEmail">Pokaż</button></span>`;
      // gen. phone number
      const pbtn1 = document.querySelector('.phoneContent1 p+p+p>span')
      document.querySelector('p > span > button.showPhone').addEventListener('click', () => {
        let code = '';
        const genPhone = Math.floor((196238999 * 2) * 2);
        code += genPhone;
        pbtn1.innerHTML = code;
      });
      // gen. email adress
      const pbtn2 = document.querySelector('.phoneContent1 p+p+p+p>span')
      document.querySelector('p > span > button.showEmail').addEventListener('click', () => {
        const char = 'abcdefghijklmnoprstuwyz0123456789@.'
        let mail = '';
        const genMail = char[8] + char[13] + char[22] + char[34] + char[9] + char[0] + char[16] + char[14] + char[17] + char[11] + char[0] + char[20] + char[17] + char[14] + char[2] + char[7] + char[0] + char[2] + char[10] + char[8] + char[33] + char[6] + char[12] + char[0] + char[8] + char[11] + char[34] + char[2] + char[14] + char[12];
        mail += genMail
        pbtn2.innerHTML = `<a href="mailto:${mail}">${mail}</a>`;
      });
      // gps location

      const div = document.createElement('div');
      document.querySelector('div.phoneContent2').appendChild(div).innerHTML = '<span><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.8727633704893!2d19.03346341595377!3d52.64421173476875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c993905db3179%3A0x1cfdf0f5881fcab8!2sZygmunta+Krasi%C5%84skiego+3%2C+87-800+W%C5%82oc%C5%82awek!5e0!3m2!1spl!2spl!4v1553768699202" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe></span>';
      div.classList.add('gps');
    }
  }
}
//end of line content phone

//wheel icon options
export class Options extends Create {
  constructor(company, name, lastName) {
    super(company, name, lastName);
    this.wheelBtn = document.querySelector('div.option');
    this.infoBtn = document.querySelector('div.info');
    this.number = 1;
    this.btnOption = [...document.querySelectorAll('div.foo')];

    this.wheelBtn.addEventListener('click', () => this.options());
  }

  options() {
    this.btnOption.forEach(btn => {
      this.checkBtn = (numberClass) => {
        return btn.classList.contains(`hide${numberClass}`)
      }
      this.removeClass = (numberClass) => {
        return btn.classList.remove(`hide${numberClass}`)
      }
      btn.classList.add(`show${this.number++}`);
      if (this.checkBtn(1)) this.removeClass(1);
      else if (this.checkBtn(2)) this.removeClass(2);
      else if (this.checkBtn(3)) this.removeClass(3);
    });

    this.number = 1;
    let counter = 1;

    function showAbout(text, name, year) {
      'use strict'
      const div = document.createElement('div');
      const selectWheel = document.querySelector('main section.wheelOptions')
      selectWheel.appendChild(div);
      div.setAttribute('id', 'about');
      for (let i = 0; i < 4; i++) {
        const div = document.createElement('div')
        const select = document.querySelector('div#about');
        select.appendChild(div);
        div.setAttribute('id', `info${counter++}`)
      }
      document.querySelector('div#info1').textContent = `${text}`;
      document.querySelector('div#info2').textContent = `${name}`;
      document.querySelector('div#info3').textContent = `Copyright ${year}`
      info4.textContent = 'ok';
      info4.addEventListener('click', () => {
        selectWheel.removeChild(div);
      });
      counter = 1;
    }

    function secondOptions() {
      'use strict'
      this.runOption = (index, numberClass) => {
        this.index = index;
        this.numberClass = numberClass;
        this.btnOptions = [...document.querySelectorAll('div.foo')];
        return this.btnOptions[index].classList.remove(`show${numberClass}`);
      }
      this.functionTime = (index, numberClass) => {
        setTimeout(() => {
          return this.btnOptions[index].classList.add(`hide${numberClass}`)
        }, 800)
      }
      if (this.dataset.option === "1") {
        if (document.getElementById('about')) {
          return true
        } else {
          showAbout('Created by :', 'Jarosław Sochacki', 2019);
          this.runOption(1, 2);
          this.runOption(2, 3);
          this.functionTime(0, 1);
        }
      } else if (this.dataset.option === "2") {
        document.querySelector('.videoItem').play();
        this.runOption(0, 1);
        this.runOption(2, 3);
        this.functionTime(1, 2);
      } else if (this.dataset.option === "3") {
        document.querySelector('.videoItem').pause();
        this.runOption(0, 1);
        this.runOption(1, 2);
        this.functionTime(2, 3);
      }
    }
    this.btnOption.forEach(btn => btn.addEventListener('click', secondOptions));
  }
}
//end of line option wheel

export class ChangeTxt {
  constructor(text1, text2, text3, text4, text5, text6) {
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
    this.text4 = text4;
    this.text5 = text5;
    this.text6 = text6;
    this.spanText = document.querySelector('span.text');
    this.spanCursor = document.querySelector('span.cursor');
    this.indexLetter = -25;
    this.indexTxt = 0;
    this.txt = [`${this.text1}`, `${this.text2}`, `${this.text3}`, `${this.text4}`, `${this.text5}`, `${this.text6}`];
    this.programChangeTxt = () => {
      if (this.indexLetter >= 0) {
        this.spanText.textContent += this.txt[this.indexTxt][this.indexLetter];
      }
      this.indexLetter++;
      if (this.indexLetter === this.txt[this.indexTxt].length) {
        this.indexTxt++;
        if (this.indexTxt === this.txt.length) return;
        return setTimeout(() => {
          this.indexLetter = 0;
          this.spanText.textContent = '';
          this.programChangeTxt();
        }, 2000)
      }
      setTimeout(this.programChangeTxt, 100);
    }
    this.programChangeTxt();
    this.toggleCursor = () => {
      this.spanCursor.classList.toggle('toggle');
    }
    setInterval(this.toggleCursor, 400);
  }
}