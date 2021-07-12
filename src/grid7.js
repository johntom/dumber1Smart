// // import {Grid} from "../../../source/typescript/smart.elements"

export class Grid7 {

  constructor() {

  }


  async getData() {
    // let filterstr = ''
    // // this.dataset = await this.api.postAPIFB('bergen.fdb', 'get', 'scibal', this.user, filterstr)
    // this.dataset = await this.api.getSearchExtendAPINew('brm', 'scibal', this.user.token, filterstr)

    // // call mongo async getSearchExtendAPINew(database, collection, token, filt) {


    // console.log('this.dataset ', this.dataset)

    // let scibal = await fetch('https://backend.gtztest.com/api/parktower/zips', {
      
      let scibal = await fetch('http://localhost:8080/api/brm/scibal', {
    
    method: 'get',
      
      // headers: myHeaders,
      mode: 'cors'
  })
      .then(response => response.json())
      .then(result => {
          console.log('Success:', result);
          this.scibal = result
          console.log(this.scibal)

      })
      .catch(error => {
          console.error('Error:', error);
      });




    return
}


  async attached() {
  

    await this.getData()
    // console.log('this.dataset ', this.dataset)
    let url = 'http://localhost:8080/api/brm/scibal'


    const data1 = this.scibal;
    window.Smart('#grid', class {
      get properties() {


        return {
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
          columnChooser: {
            enabled: true
          },
          header: {
            visible: true
          },
          editing: {
            enabled: true,
            action: 'none',
            commandColumn: {
              visible: true,
              dataSource: {
                commandColumnEdit: {
                  visible: false
                },
                commandColumnDelete: {
                  visible: false
                },
                commandColumnMenu: {
                  visible: true
                },
                commandColumnRowMenu: {
                  visible: true
                }
              }
            }
          },
          // appearance: {
          //     showRowHeaderNumber: true,

          //     showColumnHeaderLines: false,
          //     showColumnLines: false,
          //     allowSortAnimation: true
          // },
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
            //  dataSource: url,
            dataSourceType: 'json',
            autoBind: true,
            // dataSource: data1,
            dataSource: data1,
            dataFields: [
              'claim: string',
              'type: string',
              'file: string'
            ]
          }),
          columns: [
            { label: 'claim', dataField: 'claim', allowSort: false, allowHide: false, width: 180 },


            { label: 'type', dataField: 'type', width: 180 },

            { label: 'file', dataField: 'file', width: 180 }

          ]
        };
      }
    });



  }
}
