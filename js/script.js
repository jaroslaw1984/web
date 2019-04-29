import {
  Linux,
  Reinstall,
  Recovery,
  Format,
  Pages,
  Phone,
  Options,
  ChangeTxt
} from './content.js'

const linux = new Linux('Instalacja systemu operacyjnego Linux', 1, 'linuxContent');
const reinstall = new Reinstall('Instalacja systemu operacyjnego Windows', 1, 'reinstallContent');
const recovery = new Recovery('Odzyskiwanie danych z urządzeń', 1, 'recoveryContent');
const format = new Format('Formatowanie oraz czyszczenie systemu', 1, 'formatContent');
const pages = new Pages('Tworzenie stron internetowych', 2, 'pageContent');
const phone = new Phone('Więcej informacji', 2, 'phoneContent', 'Omegium Fix', 'Jarosław', 'Sochacki');
const options = new Options();
const changeTxt = new ChangeTxt('Omegium Fix', 'Tworzenie stron', 'Czyszczenie systemu', 'Odzyskiwanie danych', 'Instalacja Windowsa', 'Instalacja Linuxa');

//preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader').style.display = 'none';
});