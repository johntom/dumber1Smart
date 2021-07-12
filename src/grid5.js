// // import {Grid} from "../../../source/typescript/smart.elements"

import url from "postcss-url";

export class Grid5 {

  constructor() {
    // this.setupdemo();
  }
  onClick() {
    alert('this is ms fast!' + this.firstname);
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // async setupdemo() {
  //   await this.getdata();
  //   console.log('this is ms fast  this.gotdata!', this.gotdata);
  //   //  this.sleep(1000)
  //   //alert( this.dataSource.length)
  //   // this.setupgrid();
  // }



  async attached() {
    // async setupgrid() {
    let url = 'https://backend.gtztest.com/api/gallerynm/beverages';
    window.Smart('#grid', class {
      get properties() {
        return {
           behavior: { allowColumnReorder: true },
            sorting: {
              enabled: true,
              mode: 'many'
            },
            filtering: {
              enabled: true,
              filterRow: {
                visible: true
              },

            },
            header: {
              visible: true,
              buttons: ['columns']
            },
            columnChooser: {
              enabled: true
            },

            editing: {
              enabled: true,
              mode: 'cell'
            },


          appearance: {
            showRowHeaderNumber: true,

            showColumnHeaderLines: false,
            showColumnLines: false,
            allowSortAnimation: true
          },
          editing: {

            enabled: true,
            mode: 'cell'

          },

          onRender: () => {

            setTimeout(() => {

              grid.sorting = {
                enabled: true,
                mode: 'many'
              };

              grid.header = {
                visible: true,
                 buttons: ['columns']
              };

              grid.filtering = {
                enabled: true
              };

            }, 160);

          },
          dataSource: new window.Smart.DataAdapter({
            // dataSource: window.generateData(1000),
            dataSourceType: 'json',
            autoBind: true,
            dataSource: url,
            dataSourcex: [{
              "id": "1",
              "name": "Hot Chocolate",
              "type": "Chocolate Beverage",
              "calories": "370",
              "totalfat": "16g",
              "protein": "14g"
            }, {
              "id": 2,
              "name": "Peppermint Hot Chocolate",
              "type": "Chocolate Beverage",
              "calories": "440",
              "totalfat": "16g",
              "protein": "13g"
            }, {
              "id": "3",
              "name": "Salted Caramel Hot Chocolate",
              "type": "Chocolate Beverage",
              "calories": "450",
              "totalfat": "16g",
              "protein": "13g"
            }, {
              "id": "4",
              "name": "White Hot Chocolate",
              "type": "Chocolate Beverage",
              "calories": "420",
              "totalfat": "16g",
              "protein": "12g"
            }, {
              "id": "5",
              "name": "Caffe Americano",
              "type": "Espresso Beverage",
              "calories": "15",
              "totalfat": "0g",
              "protein": "1g"
            }, {
              "id": "6",
              "name": "Caffe Latte",
              "type": "Espresso Beverage",
              "calories": "190",
              "totalfat": "7g",
              "protein": "12g"
            }, {
              "id": "7",
              "name": "Caffe Mocha",
              "type": "Espresso Beverage",
              "calories": "330",
              "totalfat": "15g",
              "protein": "13g"
            }, {
              "id": "8",
              "name": "Cappuccino",
              "type": "Espresso Beverage",
              "calories": "120",
              "totalfat": "4g",
              "protein": "8g"
            }, {
              "id": "9",
              "name": "Caramel Brulee Latte",
              "type": "Espresso Beverage",
              "calories": "420",
              "totalfat": "9g",
              "protein": "8g"
            }, {
              "id": "10",
              "name": "Caramel Macchiato",
              "type": "Espresso Beverage",
              "calories": "240",
              "totalfat": "11g",
              "protein": "10g"
            }, {
              "id": "11",
              "name": "Peppermint Hot Chocolate",
              "type": "Espresso Beverage",
              "calories": "440",
              "totalfat": "10g",
              "protein": "13g"
            }, {
              "id": "12",
              "name": "Cinnamon Dolce Latte",
              "type": "Espresso Beverage",
              "calories": "260",
              "totalfat": "6g",
              "protein": "10g"
            }, {
              "id": "13",
              "name": "Eggnog Latte",
              "type": "Espresso Beverage",
              "calories": "460",
              "totalfat": "16g",
              "protein": "13g"
            }, {
              "id": "14",
              "name": "Espresso",
              "type": "Espresso Beverage",
              "calories": "5",
              "totalfat": "1g",
              "protein": "1g"
            }, {
              "id": "15",
              "name": "Espresso Con Panna",
              "type": "Espresso Beverage",
              "calories": "30",
              "totalfat": "1g",
              "protein": "0g"
            }, {
              "id": "16",
              "name": "Espresso Macchiato",
              "type": "Espresso Beverage",
              "calories": "100",
              "totalfat": "1g",
              "protein": "0g"
            }, {
              "id": "17",
              "name": "Flavored Latte",
              "type": "Espresso Beverage",
              "calories": "250",
              "totalfat": "6g",
              "protein": "12g"
            }, {
              "id": "18",
              "name": "Gingerbread Latte",
              "type": "Espresso Beverage",
              "calories": "320",
              "totalfat": "13g",
              "protein": "12g"
            }, {
              "id": "19",
              "name": "White Chocolate Mocha",
              "type": "Espresso Beverage",
              "calories": "470",
              "totalfat": "18g",
              "protein": "15g"
            }, {
              "id": 20,
              "name": "Skinny Peppermint Mocha",
              "type": "Espresso Beverage",
              "calories": 130,
              "totalfat": "15g",
              "protein": "13g"
            }, {
              "id": "21",
              "name": "Skinny Flavored Latte",
              "type": "Espresso Beverage",
              "calories": "120",
              "totalfat": "0g",
              "protein": "12g"
            }, {
              "id": "22",
              "name": "Pumpkin Spice Latte",
              "type": "Espresso Beverage",
              "calories": "380",
              "totalfat": "13g",
              "protein": "14g"
            }, {
              "id": "23",
              "name": "Caffe Vanilla Frappuccino",
              "type": "Frappuccino Blended Beverage",
              "calories": "310",
              "totalfat": "3g",
              "protein": "3g"
            }, {
              "id": "24",
              "name": "Caffe Vanilla Frappuccino Light",
              "type": "Frappuccino Blended Beverage",
              "calories": "180",
              "totalfat": "0g",
              "protein": "3g"
            }, {
              "id": "25",
              "name": "Caramel Brulee Frappuccino",
              "type": "Frappuccino Blended Beverage",
              "calories": "410",
              "totalfat": "13g",
              "protein": "4g"
            }, {
              "id": "26",
              "name": "Caramel Brulee Frappuccino Light",
              "type": "Frappuccino Blended Beverage",
              "calories": "190",
              "totalfat": "0g",
              "protein": "3g"
            }, {
              "id": "27",
              "name": "Eggnog Frappuccino",
              "type": "Frappuccino Blended Beverage",
              "calories": "420",
              "totalfat": "18g",
              "protein": "7g"
            }, {
              "id": "28",
              "name": "Mocha Frappuccino",
              "type": "Frappuccino Blended Beverage",
              "calories": "400",
              "totalfat": "15g",
              "protein": "5g"
            }, {
              "id": "29",
              "name": "Tazo Green Tea Creme Frappuccino",
              "type": "Frappuccino Blended Beverage",
              "calories": "430",
              "totalfat": "16g",
              "protein": "6g"
            }],

            dataFields: [
              'id: number',
              'name: string',
              'type: string',
              'calories: int',

              'totalfat: string',
              'protein: string'
            ]
          }),
          columns: [
            { label: 'Id', dataField: 'id', allowSort: false, allowHide: false, width: 50 },

            // { label: 'Name', dataField: 'name', width: 250 },
            {
              label: 'name', dataField: 'name', width: 250, editor: {
                template: 'autoComplete',
                dropDownButtonPosition: 'right'
              }
            },
            { label: 'Beverage Type', dataField: 'type', width: 250 },
            { label: 'Calories', dataField: 'calories', width: 180 },
            { label: 'Total Fat', dataField: 'totalfat', width: 120 },
            { label: 'Protein', dataField: 'protein', width: 100 }
          ]
        };
      }
    });

    // const datas = this.dataSource;
    // await window.Smart('#grid', class {
    //   get properties() {
    //     return {

    //       behavior: { allowColumnReorder: true },
    //       sorting: {
    //         enabled: true,
    //         mode: 'many'
    //       },
    //       filtering: {
    //         enabled: true,
    //         filterRow: {
    //           visible: true
    //         },

    //       },
    //       header: {
    //         visible: true,
    //         buttons: ['columns']
    //       },
    //       columnChooser: {
    //         enabled: true
    //       },

    //       editing: {
    //         enabled: true,
    //         mode: 'cell'
    //       },

    //       appearance: {
    //         showRowHeaderNumber: true,

    //         showColumnHeaderLines: false,
    //         showColumnLines: false,
    //         allowSortAnimation: true
    //       },
    //       dataSource: new window.Smart.DataAdapter({
    //         // dataSource: datas,

    //         dataSource: 'https://backend.gtztest.com/api/gallerynm/beverages',
    //         dataSourceType: 'json',
    //         // dataSource: './beverages.json',
    //         dataFields: [
    //           'id: number',
    //           'name: string',
    //           'type: string',
    //           'calories: int',
    //           'totalfat: string',
    //           'protein: string',
    //           'image:string'
    //         ]
    //       }),
    //       columns: [
    //         { label: 'Id-', dataField: 'id', allowSort: false, allowHide: false, width: 50 },

    //         // { label: 'Name', dataField: 'name', width: 250 ,editor: 'autoComplete' },

    //         // { label: 'Name', dataField: 'name', width: 250 ,
    //         // editor: { 
    //         //   template: 'autoComplete',
    //         //   autoOpen: true,
    //         //   dropDownButtonPosition: 'right'
    //         // }
    //         // },

    //         { label: 'name', dataField: 'name', width: 250, editor: { 
    //           template: 'autoComplete',
    //           dropDownButtonPosition: 'right'
    //         }
    //         },
    //         //  { label: 'Name', dataField: 'name', width: 250, template: '<sl-button type="primary"><a href="http://www.gtz.com" target="_blank">{{value}}</a></sl-button>' },
    //         // { label: 'Namde-url', dataField: 'name', width: 250, template: 'url' },

    //         { label: 'Beverage Type', dataField: 'type', width: 250, editor: 'autoComplete' },




    //         { label: 'Calories', dataField: 'calories', width: 180 },
    //         { label: 'Total Fat', dataField: 'totalfat', width: 120 },
    //         { label: 'Protein', dataField: 'protein', width: 100 },
    //         {
    //           label: 'Project images', description: 'Project images', showDescriptionButton: true, width: 200, dataField: 'protein', allowResize: true,
    //           template: function (formatObject) {
    //             formatObject.template = `<img style="width: 75px;" src="https://storage.googleapis.com/gtzdocs/DSC01121.jpg">`;
    //           }
    //         },



    //       ],
    //       // conditionalFormatting: [
    //       //   {
    //       //     column: 'Calories',
    //       //     condition: 'greaterThan',
    //       //     firstValue: 0,
    //       //     text: '#FFFFFF',
    //       //     highlight: '#45D29A'
    //       //   }],
    //     };
    //   }
    // });

  }


  // async getdata() {
  //   const vendor = await fetch('https://backend.gtztest.com/api/gallerynm/beverages', {
  //     method: 'get',
  //     // headers: myHeaders,
  //     mode: 'cors'
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log('Success:', result);
  //       this.dataSource = result
  //       console.log(this.dataSource)


  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });


  //   return;

  // }
  // onCommand: function (args) {
  //   if (args.name === 'commandColumnRowMenuCommand') {
  //     const row = args.details;
  //     const menu = document.getElementById('menu');
  //     args.event.preventDefault();
  //     menu.setAttribute('data-row-id', row.id);
  //     menu.onItemClick = (event) => {
  //       const detail = event.detail;
  //       document.querySelector("#log").innerHTML = detail.label + ' is clicked';
  //     };
  //     menu.open(args.event.pageX - 150, args.event.pageY + 20);
  //     args.handled = true;
  //   }
  // },
  // editing: {
  //   enabled: true,
  //   action: 'none',
  //   commandColumn: {
  //     visible: true,
  //     dataSource: {
  //       commandColumnEdit: {
  //         visible: false
  //       },
  //       commandColumnDelete: {
  //         visible: false
  //       },
  //       commandColumnMenu: {
  //         visible: true
  //       },
  //       commandColumnRowMenu: {
  //         visible: true
  //       }
  //     }
  //   }
  // },

  // selection: {
  //   enabled: true,
  //   checkBoxes: {
  //     enabled: true,
  //     autoShow: true
  //   }
  // },
  // editing: {
  //   enabled: true,
  //   mode: 'row',
  //   action: 'none',
  //   dialog: {
  //     enabled: true
  //   },
  //   commandColumn: {
  //     visible: true,
  //     position: 'far'
  //   }
  // },

  async getdatax() {
    this.dataSource = [{
      "id": "1",
      "name": "Hot Chocolate",
      "type": "Chocolate Beverage",
      "calories": "370",
      "totalfat": "16g",
      "protein": "14g"
    }, {
      "id": 2,
      "name": "Peppermint Hot Chocolate",
      "type": "Chocolate Beverage",
      "calories": "440",
      "totalfat": "16g",
      "protein": "13g"
    }, {
      "id": "3",
      "name": "Salted Caramel Hot Chocolate",
      "type": "Chocolate Beverage",
      "calories": "450",
      "totalfat": "16g",
      "protein": "13g"
    }, {
      "id": "4",
      "name": "White Hot Chocolate",
      "type": "Chocolate Beverage",
      "calories": "420",
      "totalfat": "16g",
      "protein": "12g"
    }, {
      "id": "5",
      "name": "Caffe Americano",
      "type": "Espresso Beverage",
      "calories": "15",
      "totalfat": "0g",
      "protein": "1g"
    }, {
      "id": "6",
      "name": "Caffe Latte",
      "type": "Espresso Beverage",
      "calories": "190",
      "totalfat": "7g",
      "protein": "12g"
    }, {
      "id": "7",
      "name": "Caffe Mocha",
      "type": "Espresso Beverage",
      "calories": "330",
      "totalfat": "15g",
      "protein": "13g"
    }, {
      "id": "8",
      "name": "Cappuccino",
      "type": "Espresso Beverage",
      "calories": "120",
      "totalfat": "4g",
      "protein": "8g"
    }, {
      "id": "9",
      "name": "Caramel Brulee Latte",
      "type": "Espresso Beverage",
      "calories": "420",
      "totalfat": "9g",
      "protein": "8g"
    }, {
      "id": "10",
      "name": "Caramel Macchiato",
      "type": "Espresso Beverage",
      "calories": "240",
      "totalfat": "11g",
      "protein": "10g"
    }, {
      "id": "11",
      "name": "Peppermint Hot Chocolate",
      "type": "Espresso Beverage",
      "calories": "440",
      "totalfat": "10g",
      "protein": "13g"
    }, {
      "id": "12",
      "name": "Cinnamon Dolce Latte",
      "type": "Espresso Beverage",
      "calories": "260",
      "totalfat": "6g",
      "protein": "10g"
    }, {
      "id": "13",
      "name": "Eggnog Latte",
      "type": "Espresso Beverage",
      "calories": "460",
      "totalfat": "16g",
      "protein": "13g"
    }, {
      "id": "14",
      "name": "Espresso",
      "type": "Espresso Beverage",
      "calories": "5",
      "totalfat": "1g",
      "protein": "1g"
    }, {
      "id": "15",
      "name": "Espresso Con Panna",
      "type": "Espresso Beverage",
      "calories": "30",
      "totalfat": "1g",
      "protein": "0g"
    }, {
      "id": "16",
      "name": "Espresso Macchiato",
      "type": "Espresso Beverage",
      "calories": "100",
      "totalfat": "1g",
      "protein": "0g"
    }, {
      "id": "17",
      "name": "Flavored Latte",
      "type": "Espresso Beverage",
      "calories": "250",
      "totalfat": "6g",
      "protein": "12g"
    }, {
      "id": "18",
      "name": "Gingerbread Latte",
      "type": "Espresso Beverage",
      "calories": "320",
      "totalfat": "13g",
      "protein": "12g"
    }, {
      "id": "19",
      "name": "White Chocolate Mocha",
      "type": "Espresso Beverage",
      "calories": "470",
      "totalfat": "18g",
      "protein": "15g"
    }, {
      "id": 20,
      "name": "Skinny Peppermint Mocha",
      "type": "Espresso Beverage",
      "calories": 130,
      "totalfat": "15g",
      "protein": "13g"
    }, {
      "id": "21",
      "name": "Skinny Flavored Latte",
      "type": "Espresso Beverage",
      "calories": "120",
      "totalfat": "0g",
      "protein": "12g"
    }, {
      "id": "22",
      "name": "Pumpkin Spice Latte",
      "type": "Espresso Beverage",
      "calories": "380",
      "totalfat": "13g",
      "protein": "14g"
    }, {
      "id": "23",
      "name": "Caffe Vanilla Frappuccino",
      "type": "Frappuccino Blended Beverage",
      "calories": "310",
      "totalfat": "3g",
      "protein": "3g"
    }, {
      "id": "24",
      "name": "Caffe Vanilla Frappuccino Light",
      "type": "Frappuccino Blended Beverage",
      "calories": "180",
      "totalfat": "0g",
      "protein": "3g"
    }, {
      "id": "25",
      "name": "Caramel Brulee Frappuccino",
      "type": "Frappuccino Blended Beverage",
      "calories": "410",
      "totalfat": "13g",
      "protein": "4g"
    }, {
      "id": "26",
      "name": "Caramel Brulee Frappuccino Light",
      "type": "Frappuccino Blended Beverage",
      "calories": "190",
      "totalfat": "0g",
      "protein": "3g"
    }, {
      "id": "27",
      "name": "Eggnog Frappuccino",
      "type": "Frappuccino Blended Beverage",
      "calories": "420",
      "totalfat": "18g",
      "protein": "7g"
    }, {
      "id": "28",
      "name": "Mocha Frappuccino",
      "type": "Frappuccino Blended Beverage",
      "calories": "400",
      "totalfat": "15g",
      "protein": "5g"
    }, {
      "id": "29",
      "name": "Tazo Green Tea Creme Frappuccino",
      "type": "Frappuccino Blended Beverage",
      "calories": "430",
      "totalfat": "16g",
      "protein": "6g"
    }]
    return
  }

}




// export class Grid5 {

//   constructor() {

//   }
//   onClick() {
//     alert('this is ms fast!' + this.firstname);
//     console.log('this is ms fast clicked!');
//   }
//   async sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }



//   async attached() {


//     await this.getdata();
//     const datasource = this.vendorarray;
//     // alert('displaygrid ' + datasource.length)
//     window.Smart('#grid', class {
//       get properties() {
//         return {

//           sorting: {
//             enabled: true,
//             mode: 'many'
//           },
//           filtering: {
//             enabled: true,
//             filterRow: {
//               visible: true
//             },

//           },
//           header: {
//             visible: true
//           },
//           dataSource: new window.Smart.DataAdapter({
//             dataSource: datasource,
//             dataFields: [
//               'id: int',
//               // '_id: string',
//               'VendorID: string',
//               'CompanyName: string',
//               'City: string',
//               // 'Address: string',

//               // 'State: string',
//                'ZipCode: string'
//               // 'Type: int',
//               // 'updatedAt: date'
//             ]
//           }),
//           columns: [
//             { label: 'id', dataField: 'id', allowSort: false, allowHide: false, width: 100 },

//             { label: 'VendorID', dataField: 'VendorID', allowSort: true, allowHide: false, width: 100 },

//             { label: 'CompanyName', dataField: 'CompanyName', allowSort: true, width: 250 },
//             { label: 'City', dataField: 'City', allowSort: true, width: 250 },
//             // { label: 'Address', dataField: 'Address', width: 250 },
//             // // { label: 'State', ddataField: 'State', allowSort: true, width: 250 },

//              { label: 'ZipCode', dataField: 'ZipCode', allowSort: true, width: 250 },
//             //           { label: 'Type', dataField: 'Type', width: 180 },
//             //           { label: 'updatedAt', dataField: 'updatedAt', allowSort: true,width: 120, cellsFormat: 'd' }
//           ]
//         };
//       }
//     });
//   }
//   async getdata() {
//     const vendor = await fetch('https://backend.gtztest.com/api/parktower/vendor', {
//       method: 'get',
//       // headers: myHeaders,
//       mode: 'cors'
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('Success:', result);
//         this.vendorarray = result
//         console.log(this.vendorarray)

//         //this.vendors=vendor //.sort();
//         // this.vendors = this.vendors.map(vendor => {}).sort();
//         //.map().sort();

//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//     // let tenant={}
//     let ct = 0
//     let tenant2 = {}
//     let vends = this.vendorarray.map(tenant => {
//       // return tenant['CompanyName'] + ' | ' + tenant.TenantNumber
//       ct++
//       tenant.id = ct
//       if (tenant.State === null) {
//         tenant.State = 'na'
//       }

//       if (tenant.City === null) {
//         tenant.City = 'na'
//       }

//       if (tenant.Address === null) {
//         tenant.Address = 'na'
//       }
//       if (tenant.ZipCode === null || tenant.ZipCode === '' || tenant.ZipCode === undefined) {
//         tenant.ZipCode = 'na'
//       }



//       return { id:tenant.id,VendorID:tenant.VendorID,CompanyName:tenant.CompanyName,City:tenant.City,ZipCode:tenant.ZipCode}

//     }).sort();
//     this.vendorarray = vends;
//     return;

//   }

// }
