// import Animasection from './animasection.js';
// Animasection.observeAll()

const callback = function (entries) {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.remove(...entry.target.getAttribute('data-class-out').split(' '))
      entry.target.classList.add(...entry.target.getAttribute('data-class-in').split(' '))


    } else {

      entry.target.classList.remove(...entry.target.getAttribute('data-class-in').split(' '))
      entry.target.classList.add(...entry.target.getAttribute('data-class-out').split(' '))

    }
  });
};
function dropdownFunction(element) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
  list.classList.add("target");
  for (i = 0; i < dropdowns.length; i++) {
    if (!dropdowns[i].classList.contains("target")) {
      dropdowns[i].classList.add("hidden");
    }
  }
  list.classList.toggle("hidden");
}

function dropdown() {
  return {
    options: [],
    selected: [],
    show: false,
    open() { this.show = true },
    close() { this.show = false },
    isOpen() { return this.show === true },
    select(index, event) {

      if (!this.options[index].selected) {

        this.options[index].selected = true;
        this.options[index].element = event.target;
        this.selected.push(index);

      } else {
        this.selected.splice(this.selected.lastIndexOf(index), 1);
        this.options[index].selected = false
      }
    },
    remove(index, option) {
      this.options[option].selected = false;
      this.selected.splice(index, 1);


    },
    loadOptions() {
      const options = document.getElementById('select').options;
      for (let i = 0; i < options.length; i++) {
        this.options.push({
          value: options[i].value,
          text: options[i].innerText,
          selected: options[i].getAttribute('selected') != null ? options[i].getAttribute('selected') : false
        });
      }


    },
    selectedValues() {
      return this.selected.map((option) => {
        return this.options[option].value;
      })
    }
  }
}
export class WelcomePage {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  firstname='johnny'
  constructor() {


  }
  onClick() {
    alert('this is ms fast!'+this.firstname+' process.env.NODE_ENV  '+process.env.NODE_ENV+' process.env.NODE_ENV  '+process.env.address  );
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  OpenDrawer() {

    openButton.addEventListener('click', () => drawer.show());
  }
  // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.43/dist/themes/base.css">
  // <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.43/dist/shoelace.js"></script>

  async attached() {

    // const colorPicker = document.querySelector('sl-color-picker');
    // colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    // const checkbox = document.querySelector('sl-checkbox');

    // // side
    // const drawer = document.querySelector('.drawerl-placement-start');
    // const openButton = drawer.nextElementSibling;
    // const closeButton = drawer.querySelector('sl-button[type="primary"]');
    // openButton.addEventListener('click', () => drawer.show());
    // closeButton.addEventListener('click', () => drawer.hide());


    // //top
    // // const drawer = document.querySelector('.drawer-placement-top');
    // // const openButton = drawer.nextElementSibling;
    // // const closeButton = drawer.querySelector('sl-button[type="primary"]');
    // // openButton.addEventListener('click', () => drawer.show());
    // // closeButton.addEventListener('click', () => drawer.hide());


    // this.checkbox.addEventListener('sl-change', event => {
    //   console.log(event.target.checked ? 'checked' : 'not checked');
    //   // alert('showlace is !');



    // });
    // A nice way to initialise default options
    this.options = Object.assign(this, {
      root: null, // relative to document viewport 
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.5 // visible amount of item shown in relation to root (higher values can cause problems)
    }, this.options);

    // this.observer = new IntersectionObserver(this.onChange, this.options);
    const observer = new IntersectionObserver(callback, this.options);
    const targets = document.querySelectorAll('[data-class-in], [data-class-out]');
    targets.forEach(target => observer.observe(target));

  
   


  }




}