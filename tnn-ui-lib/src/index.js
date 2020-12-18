import Tooltip from './ui-lib/tooltip';
import Dropdown from './ui-lib/dropdown';
import Tabs from './ui-lib/tabs';
import Snackbar from './ui-lib/snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
})

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
  snackbar.show('button activated');
});
