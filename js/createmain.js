export class Create {
  constructor() {
    this.classNum = 0;
    this.section = document.querySelector('main section.showInfo');
    this.divContainer = document.querySelector('section div.mainContainer');
    this.containerBlock = document.querySelector('section div.containerBlock');
    this.checkClass = () => this.section.classList.contains('active');
  }
  classCounter() {
    if (this.classNum >= this.eleDivs) {
      this.classNum = 0;
    }
  }

  setContent() {
    this.section.classList.add('active');
    this.divContainer.textContent = '';
    document.querySelector('.iconClose').addEventListener('click', () => {
      this.section.classList.remove('active');
      this.divContainer.textContent = '';
    });
    this.section.classList.add('active');
    const h1 = document.createElement('h1');
    this.divContainer.appendChild(h1);
    h1.innerHTML = `<span>${this.title}</span>`;
    h1.classList.add('header');
    for (let i = 0; i < this.eleDivs; i++) {
      const div = document.createElement('div');
      this.divContainer.appendChild(div);
      div.classList.add(`${this.putClass}${++this.classNum}`);
      this.classCounter();
    }
  }

  putDivs(numberOfChild, setNameClass, numberOfParent) {
    this.numberOfChild = numberOfChild;
    this.setNameClass = setNameClass;
    this.numberOfParent = numberOfParent;
    for (let i = 0; i < numberOfChild; i++) {
      const div = document.createElement('div');
      document.querySelector(`div.${this.putClass}${this.numberOfParent}`).appendChild(div);
      div.classList.add(`${this.setNameClass}${++this.classNum}`);
    }
    this.classCounter();
  }

  sliderProgram(fileName, imgFormat, time) {
    this.fileName = fileName;
    this.imgFormat = imgFormat;
    this.time = time;
    this.image = document.querySelector('img.slider');
    let active = 0;
    this.sliderList = [{
      img: `../img/${this.fileName+(++active)}.${this.imgFormat}`
    }, {
      img: `../img/${this.fileName+(++active)}.${this.imgFormat}`
    }, {
      img: `../img/${this.fileName+(++active)}.${this.imgFormat}`
    }, {
      img: `../img/${this.fileName+(++active)}.${this.imgFormat}`
    }, {
      img: `../img/${this.fileName+(++active)}.${this.imgFormat}`
    }];
    if (active >= this.sliderList.length) {
      active = 0
    }

    this.changeSlide = () => {
      active++;
      if (active === this.sliderList.length) {
        active = 0;
        clearInterval(slider);
      }
      this.image.src = this.sliderList[active].img;
    }
    let slider = setInterval(this.changeSlide, this.time);

    const keyChangeSlide = (event) => {
      if (event.keyCode === 39) {
        clearInterval(slider);
        this.changeSlide();
        slider = setInterval(this.changeSlide, this.time);
      }
      if (event.keyCode === 37) {
        clearInterval(slider);
        active--;
        if (active === this.sliderList.length) {
          active = 0;
        } else if (active === -1) {
          active = this.sliderList.length - 1;
        }
        this.image.src = this.sliderList[active].img;
        slider = setInterval(this.changeSlide, this.time);
      }
    }
    window.addEventListener('keydown', keyChangeSlide);
  }

  doAList(text, selectClass) {
    this.selectClass = selectClass;
    this.qs = document.querySelector(`div.${this.setNameClass}${this.selectClass}`)
    let index = 0;
    for (let i = 0; i < 1; i++) {
      const ulElem = document.createElement('ul');
      this.qs.appendChild(ulElem);
      for (let j = 0; j < text.length; j++) {
        const liElem = document.createElement('li');
        document.querySelector(`div.${this.setNameClass}${this.selectClass} ul`).appendChild(liElem);
        liElem.innerHTML = text[index++].txt;
      }
      this.classCounter();
    }
  }
}