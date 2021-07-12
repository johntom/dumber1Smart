// import {Grid} from "../../../source/typescript/smart.elements"

export class Grid1 {
  
  constructor() {

  }
  onClick() {
    alert('this is ms fast!' + this.firstname);
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 

  async attached() {

    Smart('#grid', class {
      get properties() {
        return {
          behavior: { columnResizeMode: 'growAndShrink' },
          appearance: {
            alternationCount: 2,
            showRowHeader: true,
            showRowHeaderSelectIcon: true,
            showRowHeaderFocusIcon: true
          },
          paging: {
            enabled: true
          },
          pager: {
            visible: true
          },
          sorting: {
            enabled: true
          },
          editing: {
            enabled: true
          },
          selection: {
            enabled: true,
            allowCellSelection: true,
            allowRowHeaderSelection: true,
            allowColumnHeaderSelection: true,
            mode: 'extended'
          },
          behavior: { columnResizeMode: 'growAndShrink' },
          dataSource: new Smart.DataAdapter(
          {
            dataSource: generateData(500),
            dataFields:
            [
              'id: number',
              'firstName: string',
              'lastName: string',
              'productName: string',
              'quantity: number',
              'price: number',
              'total: number'
            ]
          }),
          columns: [
          {
            label: 'First Name', dataField: 'firstName', columnGroup: 'name'
          },
          { label: 'Last Name', dataField: 'lastName', columnGroup: 'name' },
          { label: 'Product', dataField: 'productName', columnGroup: 'order'},
          { label: 'Quantity', dataField: 'quantity', columnGroup: 'order'},
          { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2', columnGroup: 'order', formatFunction(settings) {
            const rowId = settings.row;
            const columnDataField = settings.column;
            const template = settings.template;
            
            if (settings.value >= 4) {
              settings.cell.background = '#00A45A';
              settings.cell.color = '#fff';
            }
            else if (settings.value < 2) 
            {
              settings.cell.background = '#DF3800';
              settings.cell.color = '#fff';
            }
            else {
              settings.cell.background = '#FFFDE1';
              settings.cell.color = '#333';				
            }
            
            settings.value = '$' + new Number(settings.value).toFixed(2);
          }
          },
          { label: 'Total', dataField: 'total', cellsFormat: 'c2', columnGroup: 'order', formatFunction(settings) {
            const rowId = settings.row;
            const columnDataField = settings.column;
            const template = settings.template;
            
            if (settings.value >= 20) {
              settings.cell.background = '#00A45A';
              settings.cell.color = '#fff';
            }
            if (settings.value <= 5) {
              settings.cell.background = '#DF3800';
              settings.cell.color = '#fff';
            }
            else {
              settings.cell.background = '#FFFDE1';
              settings.cell.color = '#333';				
            }
            
            settings.value = '$' + new Number(settings.value).toFixed(2);
          } }
          ],
          columnGroups: [
            { label: 'Customer Name', align: 'center', name: 'name' },
            { label: 'Order Detals', align: 'center', name: 'order' }
          ]
        }
      }
    });


  }
}
