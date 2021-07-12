// import {Grid} from "../../../source/typescript/smart.elements"

export class Grid4 {
  //https://codepen.io/johntom/pen/zYZyjLz
  constructor() {


    // this.vendors = [
    //   { _id: "52dd80511e8a8529108d132e", VendorID: "001937", VendorNumber: "001937", CompanyName: "ATLAS INDUSTRIAL SUPPLY CO", Address: "245 WEST WHITE HORSE\r\n" },
    //   { _id: "52dd80511e8a8529108d1358", VendorID: "003135", VendorNumber: "003135", CompanyName: "CASTLE HILL ELECTRICAL SUPPLY CORP.", Address: "2070 WESTCHESTER AVENUE\r\n" },
    //   { _id: "52dd80511e8a8529108d136b", VendorID: "003539", VendorNumber: "003539", CompanyName: "COLLIERS ABR, INC.", Address: "40 EAST 52ND STREET" },
    //   { _id: "52dd80511e8a8529108d1388", VendorID: "004460", VendorNumber: "004460", CompanyName: "DIGITAL EQUIPMENT CORP.", Address: "P.O. BOX 360566M\r\n" },
    //   { _id: "52dd80511e8a8529108d13a3", VendorID: "005470", VendorNumber: "005470", CompanyName: "E.M.A. INTERNATIONAL, INC.", Address: "27-20 JACKSON AVENUE\r\n4265 MEACHAM AVE, ELMONT" },
    //   { _id: "52dd80511e8a8529108d13a8", VendorID: "005537", VendorNumber: "005537", CompanyName: "EMPIRE INDUSTRIAL CORPORATION", Address: "P.O. BOX 97" },
    //   { _id: "52dd80511e8a8529108d13be", VendorID: "006255", VendorNumber: "006255", CompanyName: "FIREFLYER", Address: "P.O. BOX 5271\r\n" },
    //   { _id: "52dd80511e8a8529108d13c7", VendorID: "006582", VendorNumber: "006582", CompanyName: "FRAMEKING", Address: "1143 E PUTNAM AVENUE\r\n" },
    //   { _id: "52dd80511e8a8529108d13d1", VendorID: "007385", VendorNumber: "007385", CompanyName: "MIKE GIFFONE", Address: "\r\n" },
    //   { _id: "52dd80511e8a8529108d13e2", VendorID: "008370", VendorNumber: "008370", CompanyName: "ISLAND NAUTICAL CANVAS", Address: "225 FORDHAM STREET" },
    //   { _id: "52dd80511e8a8529108d13f2", VendorID: "009340", VendorNumber: "009340", CompanyName: "INFILCO DEGREMONT", Address: "P.O. BOX 29599\r\n" },
    //   { _id: "52dd80511e8a8529108d1413", VendorID: "01063", VendorNumber: "01063", CompanyName: "ABC ELECTRIC CORP.", Address: "24-25 46TH ST" }]

  }
  onClick() {
    alert('this is ms fast!' + this.firstname);
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  async attached() {



    const dataSource = [
      {
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
      }];

    Smart('#grid', class {
      get properties() {
        return {
          appearance: {
            showRowHeaderNumber: true
          },
          dataSource: new Smart.DataAdapter(
            {
              dataSource: generateData(1000),
              dataFields:
                [
                  'id: number',
                  'firstName: string',
                  'lastName: string',
                  'productName: string',
                  'available: bool',
                  'quantity: number',
                  'price: number',
                  'total: number'
                ]
            }),
         
          editing: {
            enabled: true,
            mode: 'row',
            action: 'none',
            dialog: {
              enabled: true,
              width:'600'
            },
            commandColumn: {
              visible: true,
              position: 'far'
            }
          },
          columns: [
            {
              label: 'First Name', dataField: 'firstName', width: "200"
            },
            { label: 'Last Name', dataField: 'lastName', width: "200" },
            { label: 'Product', dataField: 'productName', editor: 'autoComplete', width: "400" },
            { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
            { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
            { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
          ]
        }
      }
    });

  }

}
    // await window.Smart('#grid', class {
    //   get properties() {
    //     return {
    //       sorting: {
    //         enabled: true,
    //         mode: 'many'
    //       },
    //       filtering: {
    //         enabled: true
    //       },
    //       header: {
    //         visible: true
    //        },
    //       // dataSource: new window.Smart.DataAdapter({
    //       //   dataSource:  window.generateData(1000),
    //       dataSource: new window.Smart.DataAdapter({
    //       //   // dataSource: './beverages.json',
    //       dataSource: window.beverages,
    //       dataFields: [
    //         { name: 'name', dataType: 'string' },
    //         { name: 'type', dataType: 'string' },
    //         { name: 'calories', dataType: 'int' },
    //         { name: 'totalfat', dataType: 'string' },
    //         { name: 'protein', dataType: 'string' }
    //       ],

    //       columns:
    //         [
    //           { label: 'Name', dataField: 'name', width: 250 },
    //           { label: 'Beverage Type', dataField: 'type', width: 250 },
    //           { label: 'Calories', dataField: 'calories', width: 180 },
    //           { label: 'Total Fat', dataField: 'totalfat', width: 120 },
    //           { label: 'Protein', dataField: 'protein' }
    //         ]
    //     };
    //   }
    // });

    //           // dataSource: new window.Smart.DataAdapter({
    //           //   dataSource: this.vendors,
    //           //   dataFields: [
    //           //     { name: 'VendorID', dataType: 'string'},
    //           //     { name:'CompanyName', dataType: 'string'},
    //           //     { name:'Address', dataType: 'string'},
    //           //     // { name:'City', dataType: 'string'},
    //           //     // { name:'State', dataType: 'string'},
    //           //     // { name:'ZipCode', dataType: 'string'},
    //           //     // { name:'Type', dataType: 'number'},
    //           //     // { name:'updatedAt', dataType: 'date'}
    //           //   ]
    //           // }),
    //           // columns: [
    //           //   {  label: 'Id', dataField: 'VendorID', allowSort: false, allowHide: false       },
    //           //   { label: 'Company Name', dataField: 'CompanyName' },
    //           //   { label: 'Address', dataField: 'Address' },
    //           //   // { label: 'City', dataField: 'City', align: 'right', cellsAlign: 'right', },
    //           //   // { label: 'State', dataField: 'State', align: 'right', cellsAlign: 'right' },
    //           //   // { label: 'ZipCode', dataField: 'ZipCode', align: 'right', cellsAlign: 'right' },
    //           //   // { label: 'Type', dataField: 'Type', align: 'right', cellsAlign: 'right' },//, cellsFormat: 'c2'
    //           //   // { label: 'updatedAt', dataField: 'updatedAt', align: 'right', cellsAlign: 'right', cellsFormat:  'd' }
    //           // ] 
    //       //   };







