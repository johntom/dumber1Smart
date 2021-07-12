// import {Grid} from "../../../source/typescript/smart.elements"

export class Grid3 {

  constructor() {

  }



  async attached() {

    await window.Smart('#grid', class {
      get  properties()  {
         return {
          sorting: {
            enabled: true,
            mode: 'many'
          },
          filtering: {
            enabled: true
          },
          header: {
            visible: true
          },
          dataSource: new window.Smart.DataAdapter({
            dataSource:  window.generateData(1000),
            dataFields: [
              'id: number',
              'firstName: string',
              'lastName: string',
              'productName: string',
              'quantity: number',
              'price: number',
              'date: date',
              'total: number'
            ]
          }),
          columns: [
            {
              label: 'Id', dataField: 'id', allowSort: false, allowHide: false
            },
            {
              label: 'First Name', dataField: 'firstName'
            },
            { label: 'Last Name', dataField: 'lastName' },
            { label: 'Product', dataField: 'productName' },
            { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
            { label: 'Delivery Date', dataField: 'date', align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
            { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
          ]
        };
      }
    });

  }
}
