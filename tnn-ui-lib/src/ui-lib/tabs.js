import './styles/tabs.css';

class Tabs {

  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
  }

  toggleContent(e) {
    this.container
      .querySelectorAll('.content')
      .forEach(item => item.classList.remove('active'));
    this.container
      .querySelector(e.target.getAttribute('data-target'))
      .classList.add('active');
  }

}

export { Tabs as default };
