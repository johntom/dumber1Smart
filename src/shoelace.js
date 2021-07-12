// add event to sl input and do an observable listen


// import '@vaadin/vaadin-button';
// import '@vaadin/vaadin-grid';
// import '@vaadin/vaadin-text-field';
// import '@vaadin/vaadin-grid/vaadin-grid-selection-column'; // fixed from documentation
// import '@vaadin/vaadin-grid/vaadin-grid-sort-column'; // fixed from documentation
// import '@vaadin/vaadin-grid/vaadin-grid-filter-column'; // fixed from documentation
// import '@vaadin/vaadin-combo-box'; // fixed from documentation

// import '@vaadin/vaadin-date-time-picker'; // fixed from documentation

// import '@vaadin/vaadin-form-layout';
// import '@vaadin/vaadin-split-layout';
export class Shoelace {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  firstname = 'John'
  selectedopt = ''

  constructor() {

  }
  onClick() {
    alert('this is ms fast!' + this.firstname);
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

    const slCheckbox = document.querySelector('sl-checkbox');
    slCheckbox.addEventListener('sl-change', event => {
      console.log(event.target.checked ? 'checked' : 'not checked');
    });
    const slRating = document.querySelector('sl-rating');
    // slRating.addEventListener('sl-change', (event) => console.log(event.target.srcElement.value));
    slRating.addEventListener('sl-change', (event) => console.log(event.srcElement.value));

    const colorPicker = document.querySelector('sl-color-picker');
    colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];



    // const slInput = document.querySelector('sl-input'); on enter
    const slInput = document.querySelector('sl-input');

    slInput.addEventListener('sl-input', (event) => {
      this.firstname = event.srcElement.value
      console.log('change', event.srcElement.value, ' this.firstname', this.firstname)
    })

    // const drawer = document.querySelector('.drawerl-placement-start');
    // const openButton = drawer.nextElementSibling;
    // const closeButton = drawer.querySelector('sl-button[type="primary"]');
    // openButton.addEventListener('click', () => drawer.show());
    // closeButton.addEventListener('click', () => drawer.hide());

    // ///////////////customElements.whenDefined('vaadin-combo-box').then(() => {

    var myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${token}`);

    const tenants = await fetch('https://backend.gtztest.com/api/parktower/tenant', {
      method: 'get',
      // headers: myHeaders,
      mode: 'cors'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        this.tenarry = result
      })
      .catch(error => {
        console.error('Error:', error);
      });
    // let tenant={}
    console.log(this.tenarry)

    const tenantsreduce = this.tenarry.map(tenant => {
      // return tenant['CompanyName'] + ' | ' + tenant.TenantNumber
      return '<strong>' + tenant['CompanyName'] + ' </strong>| ' + tenant.TenantNumber
    }).sort();

    console.log(tenantsreduce)


    const a = document.querySelector('.a');

    // for (const i of Array(100).keys()) {
    for (const i of tenantsreduce) {

      a.innerHTML += `<sl-menu-item value="${i}">${i}</sl-menu-item>`;
      // b.innerHTML += `<sl-menu-item value="${i+1}">${i+1}</sl-menu-item>`;
    }


    const accounts = await fetch('https://backend.gtztest.com/api/parktower/account', {
      method: 'get',
      // headers: myHeaders,
      mode: 'cors'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        this.acctarray = result
      })
      .catch(error => {
        console.error('Error:', error);
      });
    // let tenant={}
    console.log(this.acctarray)

    const acctreduce = this.acctarray.map(account => {
      return account.Desc + ' | ' + account.AccountID
    }).sort();

    console.log(acctreduce)


    const b = document.querySelector('.b');

    // for (const i of Array(100).keys()) {
    for (const i of acctreduce) {

      b.innerHTML += `<sl-menu-item value="${i}">${i}</sl-menu-item>`;
      // b.innerHTML += `<sl-menu-item value="${i+1}">${i+1}</sl-menu-item>`;
    }





    customElements.whenDefined('vaadin-combo-box').then(() => {

      const comboBox = document.querySelector('vaadin-combo-box');
      const span = document.querySelector('span');
      // const fruits = ['Apple', 'Orange', 'Banana', 'pear', 'grapes', 'kiwi'];
      const fruits = tenantsreduce
      comboBox.items = fruits;
      // comboBox.value = 'Apple';

      comboBox.addEventListener('change', (event) => {
        span.textContent = event.target.value;
        this.pickfruit = `${event.target.value} `
        //  let  vals = this.pickfruit.split('|')
        let theval = this.pickfruit.split('|')[1].trim();
        // //  this.pickfruit += `id : ${vals[1]}`
        //  this.pickfruit += `id : ${theval}`

        const rec = this.tenarry.find(f => f.TenantNumber === theval)
        this.pickfruit += `TenantNumber : ${rec.TenantNumber} Active : ${rec.Active}`
        console.log('this.pickfruit:', this.pickfruit);
      });
    });
    /////////////////////////////////////////




    const form = document.querySelector('.form-overview');
    // Watch for the slSubmit event
    form.addEventListener('sl-submit', event => {
      const formData = event.detail.formData;
      let output = '';

      //
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      //
      // Example 2: Output all form control names + values
      //
      let acct = []
      for (const entry of formData.entries()) {
        output += `${entry[0]}: ${entry[1]}\n`;
        if (entry[0] === 'account') acct.push(entry[1])
      }

      // this is a 1x outside form combo from vaadin
      // output +=`tenant: ${this.pickfruit}\n`;
      output += 'Acct:' + acct
      alert(output);

      //
      // Example 3: Get all form controls that were serialized as 
      // an array of HTML elements
      //
      console.log(event.detail.formControls);
    });
    //   const slInputs = document.querySelectorAll('sl-input');
    //  for (const inp of ) slInput.addEventListener('sl-input', (event) => {
    //        this.firstname=event.srcElement.value
    //     console.log('change', event.srcElement.value,' this.firstname',this.firstname)
    //   })


    const slTxtarea = document.querySelector(' sl-textarea');
    slTxtarea.addEventListener('sl-change', (event) => console.log('textarea', event.srcElement.value));

    const slRadioGroup = document.querySelector('sl-radio-group');
    // slRadioGroup.addEventListener('sl-change', (event) => console.log('slRadioGroup',event.srcElement.value));
    slRadioGroup.addEventListener('sl-change', (event) => {
      for (let i = 0; i < slRadioGroup.childElementCount; i++) {
        if (slRadioGroup.children[i].checked) {
          console.log(slRadioGroup.children[i].textContent)
          this.selectedopt = slRadioGroup.children[i].textContent
        }
      }


    })



    const slSwitch = document.querySelector('sl-switch');
    slSwitch.addEventListener('sl-change', (event) => {
      console.log(event.target.checked ? 'slSwitch checked' : 'slSwitch not checked');
    })

    const slSelect = document.querySelector('sl-select');
    slSelect.addEventListener('sl-change', (event) => {
      this.slist = event.srcElement.value;
      console.log('slselect', event.srcElement.value);
    })




    // side
    const drawer = document.querySelector('.drawerl-placement-start');
    const openButton = drawer.nextElementSibling;
    const closeButton = drawer.querySelector('sl-button[type="primary"]');
    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());

    //top
    const drawer2 = document.querySelector('.drawer-placement-top');
    const openButton2 = drawer2.nextElementSibling;
    const closeButton2 = drawer2.querySelector('sl-button[type="primary"]');
    openButton2.addEventListener('click', () => drawer2.show());
    closeButton2.addEventListener('click', () => drawer2.hide());

    //bot
    const drawer3 = document.querySelector('.drawer-placement-bottom');
    const openButton3 = drawer3.nextElementSibling;
    const closeButton3 = drawer3.querySelector('sl-button[type="primary"]');
    openButton3.addEventListener('click', () => drawer3.show());
    closeButton3.addEventListener('click', () => drawer3.hide());

    //right
    const drawer4 = document.querySelector('.drawer-placement-overview');
    const openButton4 = drawer4.nextElementSibling;
    const closeButton4 = drawer4.querySelector('sl-button[type="primary"]');
    openButton4.addEventListener('click', () => drawer4.show());
    closeButton4.addEventListener('click', () => drawer4.hide());
    openButton4.addEventListener('click', () => drawer4.show());
    closeButton4.addEventListener('click', () => drawer4.hide());
  }

}
