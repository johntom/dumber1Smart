
export class Grid6 {

  constructor() {
    this.setupdemo();
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async setupdemo() {
    this.gotdata= await this.getdata();
    console.log('this is ms fast  this.gotdata!', this.gotdata);
    this.sleep(1000)
    this.gotgrid=   await this.setupgrid();

    this.gotdatap= await this.getdatap();
    this.gotgridp=   await this.setupgridp();

  }

   // async attached() {
    async setupgrid() {

    const data = this.members;
    await window.Smart('#grid', class {
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
          header: {
            visible: true
          },
          columnChooser: {
            enabled: true
          },
          selection: {
            enabled: true,
          },
          onCommand: function (args) {
            if (args.name === 'commandColumnRowMenuCommand') {
              const row = args.details;
              const menu = document.getElementById('menu');
              args.event.preventDefault();
              menu.setAttribute('data-row-id', row.id);
              menu.onItemClick = (event) => {
                const detail = event.detail;
                document.querySelector("#log").innerHTML = detail.label + ' is clicked';
              };
              menu.open(args.event.pageX - 150, args.event.pageY + 20);
              args.handled = true;
            }
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
          
          dataSource: new window.Smart.DataAdapter({
            dataSource: data,

            dataFields: [
              '_id: string',
              'Company: string',
              'Member: string'
            ]
          }),
          columns: [

            { label: '_id', dataField: '_id', width: 250 },
            { label: 'Company', dataField: 'Company', width: 250 },
            { label: 'Member', dataField: 'Member', width: 180 }
          ]
        };
      }
    });
   
    const dataz = this.zips;
    await window.Smart('#grid2', class {
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
            dataSource: dataz,

            dataFields: [
              '_id: string',
              'city: string',
              'zip: string',
              'pop : int',
              "state: string"
            ]
          }),
          columns: [

            { label: '_id', dataField: '_id', width: 150 },
            { label: 'city', dataField: 'city', width: 150 },
            { label: 'zip', dataField: 'zip', width: 180 },
            { label: 'pop', dataField: 'pop', width: 180 },
            { label: 'state', dataField: 'state', width: 180 }
          ]
        };
      }
    });
  }

  async setupgridp() {

    const datas = this.dataSource;
    await window.Smart('#grid3', class {
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
          dataSource: new window.Smart.DataAdapter({
            dataSource: datas,
            // dataSource: './beverages.json',
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

            { label: 'Name', dataField: 'name', width: 250 },
            { label: 'Beverage Type', dataField: 'type', width: 250 },
            { label: 'Calories', dataField: 'calories', width: 180 },
            { label: 'Total Fat', dataField: 'totalfat', width: 120 },
            { label: 'Protein', dataField: 'protein', width: 50 }
          ]
        };
      }
    });

  }


  async getdatap() {
    const vendor = await fetch('https://backend.gtztest.com/api/parktower/beverages', {
      method: 'get',
      // headers: myHeaders,
      mode: 'cors'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        this.dataSource = result
        console.log(this.dataSource)


      })
      .catch(error => {
        console.error('Error:', error);
      });


    return;

  }
  async getdata() {
    const member = await fetch('https://backend.gtztest.com/api/parktower/member', {
      method: 'get',
      // headers: myHeaders,
      mode: 'cors'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        this.members = result
        console.log(this.members)


      })
      .catch(error => {
        console.error('Error:', error);
      });

 



    const zips = await fetch('https://backend.gtztest.com/api/parktower/zips', {
      method: 'get',
      // headers: myHeaders,
      mode: 'cors'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        this.zips = result
        console.log(this.zips)


      })
      .catch(error => {
        console.error('Error:', error);
      });
    // this.vendorarray = vends;
    return;

  }

}
// this.members = [{
//   "_id": "5be49402acfe864992d0c03c",
//   "Company": "LIV UNLIMITED",
//   "Member": "SCHULMAN, MITCHELL"
// },
// {
//   "_id": "5be49402acfe864992d0c03d",
//   "Company": "CADIAN CAPITAL",
//   "Member": "WENG, BOWEN"
// },
// {
//   "_id": "5be49402acfe864992d0c03e",
//   "Company": "SBM",
//   "Member": "WILLIAMS, CHAD"
// },
// {
//   "_id": "5be49402acfe864992d0c0eb",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "YI, CHUN WON"
// },
// {
//   "_id": "5be49403acfe864992d0c29d",
//   "Company": "BANCO DO BRASIL",
//   "Member": "SOARES, NATHALIA"
// },
// {
//   "_id": "5be49404acfe864992d0c478",
//   "Company": "PARK TOWER GROUP",
//   "Member": "WONG, MARILYN"
// },
// {
//   "_id": "5be49404acfe864992d0c47b",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "BREED, ALAN"
// },
// {
//   "_id": "5be49404acfe864992d0c480",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "HENSEN, ADRIENNE"
// },
// {
//   "_id": "5be49404acfe864992d0c504",
//   "Company": "PARK TOWER",
//   "Member": "JOSEPH, LEAVER"
// },
// {
//   "_id": "5be49404acfe864992d0c533",
//   "Company": "CANACCORD GENUITY",
//   "Member": "FERRISO, MARK"
// },
// {
//   "_id": "5be49404acfe864992d0c54d",
//   "Company": "CANACCORD GENUITY",
//   "Member": "BARNES, DAVID"
// },
// {
//   "_id": "5be49404acfe864992d0c55f",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "YU, BETTY"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61c4",
// //   "Company": "ACCESS",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e625b",
// //   "Company": "CADIAN CAPITAL",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e626b",
// //   "Company": "RIMOWA",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c043",
//   "Company": "ENGINEER",
//   "Member": "BUELL, JOHN"
// },
// {
//   "_id": "5be49402acfe864992d0c044",
//   "Company": "FTV CAPITAL",
//   "Member": "BERNSTEIN, BRAD"
// },
// {
//   "_id": "5be49402acfe864992d0c04f",
//   "Company": "GLENMEDE",
//   "Member": "MILLER, LEE"
// },
// {
//   "_id": "5be49402acfe864992d0c057",
//   "Company": "FTV",
//   "Member": "RAYLE, LIZ"
// },
// {
//   "_id": "5be49402acfe864992d0c0aa",
//   "Company": "FACILITIES",
//   "Member": "CEKAJ, MIKE"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61af",
// //   "Company": "BAIN",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49403acfe864992d0c37c",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "VOLOSHIN, RONEN"
// },
// {
//   "_id": "5be49403acfe864992d0c3f3",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "RIZZO, DEBRA"
// },
// {
//   "_id": "5be49404acfe864992d0c502",
//   "Company": "EAST WEST BANK",
//   "Member": "DO, DERRICK"
// },
// {
//   "_id": "5be49404acfe864992d0c542",
//   "Company": "Schlesinger, Lazetera & Auchincloss",
//   "Member": "SHUSTER, SVETLANA"
// },
// {
//   "_id": "5be49404acfe864992d0c549",
//   "Company": "RIMOWA",
//   "Member": "CADIZ, ANDREA"
// },
// {
//   "_id": "5be49404acfe864992d0c54c",
//   "Company": "RAYMOND JAMES",
//   "Member": "MURREY, GAVIN"
// },
// {
//   "_id": "5be49404acfe864992d0c568",
//   "Company": "LIV unLtd",
//   "Member": "KRAMER, KERRY"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61b6",
// //   "Company": "RAYMOND JAMES",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c059",
//   "Company": "BANCO DO BRASIL",
//   "Member": "BOGADO, DANIEL"
// },
// {
//   "_id": "5be49402acfe864992d0c05e",
//   "Company": "BANCO DO BRASIL",
//   "Member": "SOUZA, TALITA"
// },
// {
//   "_id": "5be49402acfe864992d0c062",
//   "Company": "GOTHAM CAPITAL",
//   "Member": "MARKS, DAVID"
// },
// {
//   "_id": "5be49404acfe864992d0c4f5",
//   "Company": "CADIAN CAPITAL",
//   "Member": "BANNASCH, ERIC"
// },
// {
//   "_id": "5be49404acfe864992d0c507",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "RIORDA, KATHLEEN"
// },
// {
//   "_id": "5be49404acfe864992d0c524",
//   "Company": "CADIAN CAPITAL",
//   "Member": "ZAHARIEV, MARTIN"
// },
// {
//   "_id": "5be49404acfe864992d0c52a",
//   "Company": "CADIAN CAPITAL",
//   "Member": "BURNS, LEYA"
// },
// {
//   "_id": "5be49404acfe864992d0c53e",
//   "Company": "CANACCORD GENUITY",
//   "Member": "BELLUZZI, ANTHONY"
// },
// {
//   "_id": "5be49404acfe864992d0c55c",
//   "Company": "BAUMAN RARE BOOKS",
//   "Member": "SHOER, LEAH"
// },
// {
//   "_id": "5be49404acfe864992d0c561",
//   "Company": "FACILITIES",
//   "Member": "CLEANER 3, TEMP"
// },
// {
//   "_id": "5be49404acfe864992d0c563",
//   "Company": "SBM",
//   "Member": "CINTRON, JEREMY"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e6196",
// //   "Company": "LIV UNLIMITED",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e6198",
// //   "Company": "AQUILINE HOLDINGS",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e61f2",
// //   "Company": "CHINA MERCHANTS BANK",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c042",
//   "Company": "BANCO DO BRASIL",
//   "Member": "KATARU, VAMSI"
// },
// {
//   "_id": "5be49403acfe864992d0c437",
//   "Company": "BANCO DO BRASIL",
//   "Member": "WILL, CRISTIANA"
// },
// {
//   "_id": "5be49404acfe864992d0c477",
//   "Company": "RAYMOND JAMES",
//   "Member": "SAWYER, KATHERINE"
// },
// {
//   "_id": "5be49404acfe864992d0c4d6",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "MULHALL, JULIANNE"
// },
// {
//   "_id": "5be49404acfe864992d0c4f7",
//   "Company": "CADIAN CAPITAL",
//   "Member": "GRIFFITH, JUSTIN"
// },
// {
//   "_id": "5be49404acfe864992d0c4fb",
//   "Company": "RAYMOND JAMES",
//   "Member": "DORAN, BRENDAN"
// },
// {
//   "_id": "5be49404acfe864992d0c515",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "LOLOVIC, AGIM"
// },
// {
//   "_id": "5be49404acfe864992d0c51d",
//   "Company": "CADIAN CAPITAL",
//   "Member": "AMAROSA, ASHLEY"
// },
// {
//   "_id": "5be49404acfe864992d0c545",
//   "Company": "PARK TOWER MGMT",
//   "Member": "TOCCI, RAYMOND"
// },
// {
//   "_id": "5be49404acfe864992d0c548",
//   "Company": "SBM",
//   "Member": "HERNANDEZ, MICHAEL"
// },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e624d",
// //   "Company": "OCONNOR CAPITAL",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c047",
//   "Company": "ENGINEER",
//   "Member": "MASHKULLI, ALIT"
// },
// {
//   "_id": "5be49402acfe864992d0c05b",
//   "Company": "SBM",
//   "Member": "NUNN, DELONE"
// },
// {
//   "_id": "5be49402acfe864992d0c0bf",
//   "Company": "GOTHAM CAPITAL",
//   "Member": "KHOLONDYREV, YURY"
// },
// {
//   "_id": "5be49402acfe864992d0c0c5",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": ""
// },
// {
//   "_id": "5be49404acfe864992d0c4e3",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "FLEMING, OLIVIA"
// },
// {
//   "_id": "5be49404acfe864992d0c4f9",
//   "Company": "BANCO DO BRASIL",
//   "Member": "VENTURINI, ANA"
// },
// {
//   "_id": "5be49404acfe864992d0c50d",
//   "Company": "EAST WEST BANK",
//   "Member": "STEIN, ANDREW"
// },
// {
//   "_id": "5be49404acfe864992d0c50e",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "LI, HUI"
// },
// {
//   "_id": "5be49404acfe864992d0c512",
//   "Company": "PARK TOWER GROUP",
//   "Member": ""
// },
// {
//   "_id": "5be49404acfe864992d0c528",
//   "Company": "PARK TOWER GROUP",
//   "Member": "MORTON, GUY"
// },
// {
//   "_id": "5be49404acfe864992d0c530",
//   "Company": "EAST WEST BANK",
//   "Member": "SANCHEZ, MAGDELYN"
// },
// {
//   "_id": "5be49404acfe864992d0c53c",
//   "Company": "CANACCORD GENUITY",
//   "Member": "TSAO, ELLEN"
// },
// {
//   "_id": "5be49404acfe864992d0c540",
//   "Company": "FACILITIES",
//   "Member": "RAMIREZ, LUIS"
// },
// {
//   "_id": "5be49404acfe864992d0c544",
//   "Company": "PURE LOGIC",
//   "Member": "OTERO, JOE"
// },
// {
//   "_id": "5be49404acfe864992d0c547",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "RUBIN, SAMUEL JED"
// },
// {
//   "_id": "5be49404acfe864992d0c54a",
//   "Company": "CANACCORD GENUITY",
//   "Member": "LORENZO, NICHOLAS"
// },
// {
//   "_id": "5be49404acfe864992d0c559",
//   "Company": "WELLS FARGO ADVISORS",
//   "Member": "HENLON, ANDREA"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61a3",
// //   "Company": "PARK TOWER",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e61e2",
// //   "Company": "FACILITIES",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e6241",
// //   "Company": "FACILLITIES",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c051",
//   "Company": "GLENMEDE",
//   "Member": "STANLEY, JONATHAN"
// },
// {
//   "_id": "5be49402acfe864992d0c05f",
//   "Company": "EAST WEST BANK",
//   "Member": "AMENITY CENTER, EAST WEST "
// },
// {
//   "_id": "5be49402acfe864992d0c0a6",
//   "Company": "UPS SECURITY",
//   "Member": "FINDLAY, ORLANDO"
// },
// {
//   "_id": "5be49402acfe864992d0c115",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "PRIETO, DENNIS"
// },
// {
//   "_id": "5be49403acfe864992d0c3df",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "BENNETT, PATRICK"
// },
// {
//   "_id": "5be49403acfe864992d0c418",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "DANIELS, COLIN"
// },
// {
//   "_id": "5be49404acfe864992d0c500",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "ROMAO, LAUREN"
// },
// {
//   "_id": "5be49404acfe864992d0c522",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "CAKIR, ALEX"
// },
// {
//   "_id": "5be49404acfe864992d0c539",
//   "Company": "CANACCORD GENUITY",
//   "Member": "RIEBE, DAVID"
// },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e6249",
// //   "Company": "CBRE",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c048",
//   "Company": "GARDA",
//   "Member": "DROBNY, JEFF"
// },
// {
//   "_id": "5be49402acfe864992d0c052",
//   "Company": "CADIAN CAPITAL",
//   "Member": "FORD, KARA"
// },
// {
//   "_id": "5be49402acfe864992d0c0f5",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "SANTANA, CHRIS"
// },
// {
//   "_id": "5be49402acfe864992d0c174",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "REN, LONG"
// },
// {
//   "_id": "5be49404acfe864992d0c50a",
//   "Company": "VINCI PARTNERS USA",
//   "Member": "LORENZI, MARIA FERNANDA"
// },
// {
//   "_id": "5be49404acfe864992d0c51f",
//   "Company": "BANCO DO BRASIL",
//   "Member": "MORADEI, MARIA CAROLINA"
// },
// {
//   "_id": "5be49404acfe864992d0c551",
//   "Company": "ENGINEER",
//   "Member": "TALBOT, TONY"
// },
// {
//   "_id": "5be49404acfe864992d0c555",
//   "Company": "ENGINEER",
//   "Member": "MISINI, AVIS"
// },
// {
//   "_id": "5be49404acfe864992d0c556",
//   "Company": "WELLS FARGO ADVISORS",
//   "Member": "STOLLER, ERIC"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61b4",
// //   "Company": "BANCO DO BRASIL",
// //   "Member": undefined
// // },
// {
//   "_id": "5be4937833953010c466421c",
//   "Company": "RAYMOND JAMES",
//   "Member": "MILLER, KENNETH"
// },
// {
//   "_id": "5be49402acfe864992d0c046",
//   "Company": "SULLIVAN & CROMWELL",
//   "Member": "ANTON, TESSA"
// },
// {
//   "_id": "5be49402acfe864992d0c054",
//   "Company": "FTV",
//   "Member": "JOHRI, ANISH"
// },
// {
//   "_id": "5be49402acfe864992d0c061",
//   "Company": "LIV UNLIMITED",
//   "Member": "ALERTE, PHILIP"
// },
// {
//   "_id": "5be49402acfe864992d0c083",
//   "Company": "GOTHAM CAPITAL",
//   "Member": "SEIBERT, BERNARD"
// },
// {
//   "_id": "5be49404acfe864992d0c509",
//   "Company": "EAST WEST BANK",
//   "Member": "LEE, RHONDA"
// },
// {
//   "_id": "5be49404acfe864992d0c523",
//   "Company": "BANCO DO BRASIL",
//   "Member": "KIM, KEVIN"
// },
// {
//   "_id": "5be49404acfe864992d0c536",
//   "Company": "CANACCORD GENUITY",
//   "Member": "LEE, ARLINDA"
// },
// {
//   "_id": "5be49404acfe864992d0c53a",
//   "Company": "CANACCORD GENUITY",
//   "Member": "RODZIEWICZ, KIMBERLY"
// },
// {
//   "_id": "5be49404acfe864992d0c543",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "KNOPF, JANET LYNNE"
// },
// {
//   "_id": "5be49404acfe864992d0c550",
//   "Company": "UPS",
//   "Member": "VACCARO, NICHOLAS"
// },
// {
//   "_id": "5be49404acfe864992d0c567",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "MEEHAN, CONOR"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61a6",
// //   "Company": "LIV unLtd",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61b1",
// //   "Company": "AURELIUS CAPITAL MANAGEMENT",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e6265",
// //   "Company": "MONARCH ALTERNATIVES",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c049",
//   "Company": "Garda",
//   "Member": "Cameron, Gary"
// },
// {
//   "_id": "5be49402acfe864992d0c04d",
//   "Company": "EAST WEST BANK",
//   "Member": "CHU, BRENDA"
// },
// {
//   "_id": "5be49402acfe864992d0c053",
//   "Company": "WALKER & DUNLOP",
//   "Member": "HEINE, JARED"
// },
// {
//   "_id": "5be49403acfe864992d0c248",
//   "Company": "BANCO DO BRASIL",
//   "Member": "GAJANO, ALESSANDRO"
// },
// {
//   "_id": "5be49403acfe864992d0c328",
//   "Company": "UPS SECURITY",
//   "Member": "WILLIAMS, ANTHONY"
// },
// {
//   "_id": "5be49404acfe864992d0c46c",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "GLASTEIN, IAN"
// },
// {
//   "_id": "5be49404acfe864992d0c47c",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "ROTUNDO, FAUSTO"
// },
// {
//   "_id": "5be49404acfe864992d0c501",
//   "Company": "EAST WEST BANK",
//   "Member": "CHANG, CHE LAI"
// },
// {
//   "_id": "5be49404acfe864992d0c505",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "LIU, DONALD"
// },
// {
//   "_id": "5be49404acfe864992d0c508",
//   "Company": "CADIAN CAPITAL",
//   "Member": "LEE, SUE"
// },
// {
//   "_id": "5be49404acfe864992d0c51a",
//   "Company": "AQUILINE HOLDINGS",
//   "Member": "LA RUFFA, VINCENZO"
// },
// {
//   "_id": "5be49404acfe864992d0c52d",
//   "Company": "CADIAN CAPITAL",
//   "Member": "MING, LIANE"
// },
// {
//   "_id": "5be49404acfe864992d0c534",
//   "Company": "CANACCORD GENUITY",
//   "Member": "GILLESPIE, JOHN"
// },
// {
//   "_id": "5be49404acfe864992d0c546",
//   "Company": "RAYMOND JAMES",
//   "Member": "CUEVO, CATALINA"
// },
// {
//   "_id": "5be49404acfe864992d0c54b",
//   "Company": "AQUILINE HOLDINGS",
//   "Member": "CICHOWSKI, MICHAEL"
// },
// {
//   "_id": "5be49404acfe864992d0c553",
//   "Company": "PARK TOWER REALTY",
//   "Member": "KLEIN, GEORGE"
// },
// {
//   "_id": "5be49404acfe864992d0c55a",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "GIBBER, LOUIS"
// },
// {
//   "_id": "5be49404acfe864992d0c564",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "WOLF, SABRINA"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e619d",
// //   "Company": "CANACCORD GENUITY",
// //   "Member": undefined
// // },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61ba",
// //   "Company": "Schlesinger",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49403acfe864992d0c446",
//   "Company": "Schlesinger, Lazetera & Auchincloss",
//   "Member": "DI NUZZO, ANNE"
// },
// {
//   "_id": "5be49404acfe864992d0c50f",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "SCHWITZER, JORDAN"
// },
// {
//   "_id": "5be49404acfe864992d0c531",
//   "Company": "CANACCORD GENUITY",
//   "Member": "CASANO, JASON"
// },
// {
//   "_id": "5be49404acfe864992d0c532",
//   "Company": "CANACCORD GENUITY",
//   "Member": "DWYER, ANTHONY"
// },
// {
//   "_id": "5be49404acfe864992d0c54e",
//   "Company": "AQUILINE HOLDINGS",
//   "Member": "FOOTE, JEFFREY"
// },
// {
//   "_id": "5be49404acfe864992d0c55d",
//   "Company": "FACILLITIES",
//   "Member": "lino, primo"
// },
// {
//   "_id": "5be49404acfe864992d0c55e",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "ZHANG, MU"
// },
// {
//   "_id": "5be49404acfe864992d0c566",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "PHELPS, DANIEL"
// },
// // // {
// // //   "_id": "5c8fbf9e2cfa28214c0e61b0",
// // //   "Company": "Garda",
// // //   "Member": undefined
// // // },
// // // {
// // //   "_id": "5c8fbf9e2cfa28214c0e61c0",
// // //   "Company": "UPS",
// // //   "Member": undefined
// // // },
// // {
// //   "_id": "5c8fbf9f2cfa28214c0e61ea",
// //   "Company": "PARK TOWER MGMT",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c041",
//   "Company": "RAYMOND JAMES",
//   "Member": "MOYLE, ROBERT"
// },
// {
//   "_id": "5be49402acfe864992d0c04a",
//   "Company": "Garda",
//   "Member": "Hu, Sean"
// },
// {
//   "_id": "5be49402acfe864992d0c04e",
//   "Company": "GLENMEDE",
//   "Member": "HENNESSY, REGINA"
// },
// {
//   "_id": "5be49402acfe864992d0c05d",
//   "Company": "BANCO DO BRASIL",
//   "Member": "GATHERER, JENNIFER"
// },
// {
//   "_id": "5be49402acfe864992d0c060",
//   "Company": "PARK TOWER",
//   "Member": "BABCOCK, LEE"
// },
// {
//   "_id": "5be49403acfe864992d0c2a9",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "CORZO, CHARLES"
// },
// {
//   "_id": "5be49403acfe864992d0c375",
//   "Company": "FACILITIES",
//   "Member": "HOTI, MIC"
// },
// {
//   "_id": "5be49403acfe864992d0c3fd",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "PETRILLI, RICHARD"
// },
// {
//   "_id": "5be49404acfe864992d0c4fe",
//   "Company": "GOTHAM CAPITAL",
//   "Member": "Godlasky, Lauren"
// },
// {
//   "_id": "5be49404acfe864992d0c511",
//   "Company": "PARK TOWER",
//   "Member": "LEAVER, JOSEPH"
// },
// {
//   "_id": "5be49404acfe864992d0c513",
//   "Company": "SULLIVAN & CROMWELL",
//   "Member": "RAMSURAT, SABRINA"
// },
// {
//   "_id": "5be49404acfe864992d0c519",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "FAN, WENGIRL"
// },
// {
//   "_id": "5be49404acfe864992d0c520",
//   "Company": "WELLS FARGO ADVISORS",
//   "Member": "MASTROIANNI, SUSANA"
// },
// {
//   "_id": "5be49404acfe864992d0c565",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "MARQUES, DANIEL"
// },
// // {
// //   "_id": "5c8fbf9e2cfa28214c0e61bf",
// //   "Company": "UPS SECURITY",
// //   "Member": undefined
// // },
// {
//   "_id": "5be49402acfe864992d0c045",
//   "Company": "FTV CAPITAL",
//   "Member": "GRISWOLD, KYLE"
// },
// {
//   "_id": "5be49402acfe864992d0c056",
//   "Company": "PARK TOWER",
//   "Member": "BATISTA, NOEL"
// },
// {
//   "_id": "5be49402acfe864992d0c058",
//   "Company": "LV UNLTD",
//   "Member": "WILLIAMS, RICKY"
// },
// {
//   "_id": "5be49402acfe864992d0c05a",
//   "Company": "PARK TOWER ",
//   "Member": "ANGELO, LARRY"
// },
// {
//   "_id": "5be49402acfe864992d0c0c0",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "JIAO, CHENGYUE"
// },
// {
//   "_id": "5be49402acfe864992d0c114",
//   "Company": "AURELIUS CAPITAL MANAGEMENT",
//   "Member": "GROPPER, DAN"
// },
// {
//   "_id": "5be49402acfe864992d0c17b",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "LOFFREDO, JOSEPH"
// },
// {
//   "_id": "5be49403acfe864992d0c397",
//   "Company": "Schlesinger, Lazetera & Auchincloss",
//   "Member": "MCNAMEE, SUZANNE"
// },
// {
//   "_id": "5be49404acfe864992d0c4f6",
//   "Company": "CADIAN CAPITAL",
//   "Member": "VULLIEZ, MARTIN"
// },
// {
//   "_id": "5be49404acfe864992d0c4ff",
//   "Company": "BANCO DO BRASIL",
//   "Member": "RODRIGUEZ jr., MILTON"
// },
// {
//   "_id": "5be49404acfe864992d0c50c",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "HUR, LES"
// },
// {
//   "_id": "5be49404acfe864992d0c526",
//   "Company": "CADIAN CAPITAL",
//   "Member": "EHLRING, BRENDAN"
// },
// {
//   "_id": "5be49404acfe864992d0c52f",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "MCKEOWN, MARYLYNN"
// },
// {
//   "_id": "5be49404acfe864992d0c535",
//   "Company": "CANACCORD GENUITY",
//   "Member": "HERRERO, MICHAEL"
// },
// {
//   "_id": "5be49404acfe864992d0c558",
//   "Company": "AQUILINE HOLDINGS",
//   "Member": "RICCARDI, COLE"
// },
// {
//   "_id": "5be49404acfe864992d0c560",
//   "Company": "CANACCORD GENUITY",
//   "Member": "GILLIGAN, KELLEY"
// },

// {
//   "_id": "5be49402acfe864992d0c050",
//   "Company": "GLENMEDE",
//   "Member": "GRASINGER, ERIC"
// },
// {
//   "_id": "5be49402acfe864992d0c05c",
//   "Company": "LIV UNLIMITED",
//   "Member": "BOURDIER, RAYMOND"
// },
// {
//   "_id": "5be49403acfe864992d0c32c",
//   "Company": "WELLS FARGO ADVISORS",
//   "Member": "KIM, PAUL"
// },
// {
//   "_id": "5be49404acfe864992d0c47e",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "CARRIER, JIM"
// },
// {
//   "_id": "5be49404acfe864992d0c4fa",
//   "Company": "RAYMOND JAMES",
//   "Member": "CASHMAN, ED"
// },
// {
//   "_id": "5be49404acfe864992d0c4fd",
//   "Company": "RAYMOND JAMES",
//   "Member": "LOM, STEPHANIE"
// },
// {
//   "_id": "5be49404acfe864992d0c50b",
//   "Company": "VINCI PARTNERS USA",
//   "Member": "FAZHULINA, NADIA"
// },
// {
//   "_id": "5be49404acfe864992d0c514",
//   "Company": "WALKER & DUNLOP",
//   "Member": "WEST, JOSH"
// },
// {
//   "_id": "5be49404acfe864992d0c52b",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "NOEL, JANELLE"
// },
// {
//   "_id": "5be49404acfe864992d0c52e",
//   "Company": "SBM",
//   "Member": "SAWYER, MALIK"
// },
// {
//   "_id": "5be49404acfe864992d0c538",
//   "Company": "CANACCORD GENUITY",
//   "Member": "MILLER, MATTHEW"
// },
// {
//   "_id": "5be49404acfe864992d0c554",
//   "Company": "ENGINEER",
//   "Member": "FLORES, ARTURO"
// },
// {
//   "_id": "5be49404acfe864992d0c569",
//   "Company": "LIV unLtd",
//   "Member": "CATER, TOMMY"
// },

// {
//   "_id": "5be49402acfe864992d0c04c",
//   "Company": "EDGEWOOD MANAGEMENT",
//   "Member": "ACCESS, AMENITY CENTER"
// },
// {
//   "_id": "5be49402acfe864992d0c055",
//   "Company": "WALKER & DUNLOP",
//   "Member": "MAHL, SETH"
// },
// {
//   "_id": "5be49402acfe864992d0c155",
//   "Company": "ENGINEER",
//   "Member": "MAHABIR, VARMA"
// },
// {
//   "_id": "5be49403acfe864992d0c28a",
//   "Company": "BANCO DO BRASIL",
//   "Member": "MALVEZZI, MICHELLE"
// },
// {
//   "_id": "5be49403acfe864992d0c426",
//   "Company": "AQUILINE HOLDINGS",
//   "Member": "SAN MARTIN, WENDY"
// },
// {
//   "_id": "5be49404acfe864992d0c4f8",
//   "Company": "BANCO DO BRASIL",
//   "Member": "de ALCANTARA, ANDREIA"
// },
// {
//   "_id": "5be49404acfe864992d0c517",
//   "Company": "WALKER & DUNLOP",
//   "Member": "SMITH, GEOFFREY"
// },
// {
//   "_id": "5be49404acfe864992d0c51b",
//   "Company": "BANCO DO BRASIL",
//   "Member": "PEIXOTO, MARCELLO"
// },
// {
//   "_id": "5be49404acfe864992d0c51c",
//   "Company": "TIGRIS FINANCIAL GROUP",
//   "Member": "TIERNEY, FORREST"
// },
// {
//   "_id": "5be49404acfe864992d0c51e",
//   "Company": "RAYMOND JAMES",
//   "Member": "CATES, SHEILA"
// },
// {
//   "_id": "5be49404acfe864992d0c53d",
//   "Company": "CANACCORD GENUITY",
//   "Member": "MARGULIS, ANNA"
// },
// {
//   "_id": "5be49404acfe864992d0c541",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "REICH, ADAM"
// },
// {
//   "_id": "5be49404acfe864992d0c54f",
//   "Company": "AURELIUS CONTRACTOR",
//   "Member": "MCCORMICK, FRANK"
// },
// {
//   "_id": "5be49404acfe864992d0c557",
//   "Company": "RAYMOND JAMES",
//   "Member": "VISITOR 1, RAYMOND JAMES"
// },
// {
//   "_id": "5be49404acfe864992d0c562",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "LEWIS, SAMANTHA"
// },


// {
//   "_id": "5be49402acfe864992d0c03f",
//   "Company": "LIV UNLTD",
//   "Member": "ROSEBOROUGH, SHANA"
// },
// {
//   "_id": "5be49402acfe864992d0c0c6",
//   "Company": "MONARCH ALTERNATIVE CAPITAL",
//   "Member": "BARTELS, PATRICK"
// },
// {
//   "_id": "5be49402acfe864992d0c177",
//   "Company": "SARATOGA PARTNERS",
//   "Member": "VALME, PETAL"
// },
// {
//   "_id": "5be49404acfe864992d0c483",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "MA, EMILY"
// },
// {
//   "_id": "5be49404acfe864992d0c503",
//   "Company": "EDGEWOOD MANAGEMENT LLC",
//   "Member": "MCBRIDE, KITTY"
// },
// {
//   "_id": "5be49404acfe864992d0c506",
//   "Company": "PARK TOWER GROUP",
//   "Member": "GLUCK, AMY"
// },
// {
//   "_id": "5be49404acfe864992d0c510",
//   "Company": "VINCI PARTNERS USA",
//   "Member": "FIUZA, PEDRO"
// },
// {
//   "_id": "5be49404acfe864992d0c518",
//   "Company": "UPS SECURITY",
//   "Member": "FREEMAN, ERNEST"
// },
// {
//   "_id": "5be49404acfe864992d0c521",
//   "Company": "ENGINEER",
//   "Member": "KHADAROO, STEVE"
// },
// {
//   "_id": "5be49404acfe864992d0c525",
//   "Company": "WALKER & DUNLOP",
//   "Member": "TOLAND, TOM"
// },
// {
//   "_id": "5be49404acfe864992d0c529",
//   "Company": "PARK TOWER GROUP",
//   "Member": "CONTRASTANO, EMILY"
// },
// {
//   "_id": "5be49404acfe864992d0c537",
//   "Company": "CANACCORD GENUITY",
//   "Member": "LYON, CAMILO"
// },
// {
//   "_id": "5be49404acfe864992d0c53b",
//   "Company": "CANACCORD GENUITY",
//   "Member": "ROZELMAN, EUGENE"
// },

// {
//   "_id": "5be49402acfe864992d0c04b",
//   "Company": "ASI",
//   "Member": "Cowan, Michael"
// },
// {
//   "_id": "5be49402acfe864992d0c0b1",
//   "Company": "POLO ELECTRIC",
//   "Member": "VACCARO, TODD"
// },
// {
//   "_id": "5be49404acfe864992d0c4fc",
//   "Company": "RAYMOND JAMES",
//   "Member": "DELBENE, AMANDA"
// },
// {
//   "_id": "5be49404acfe864992d0c516",
//   "Company": "CHINA MERCHANTS BANK",
//   "Member": "GUAN, RUIQING"
// },
// {
//   "_id": "5be49404acfe864992d0c527",
//   "Company": "UPS SECURITY",
//   "Member": "PERSAUD, DAVANAND"
// },
// {
//   "_id": "5be49404acfe864992d0c52c",
//   "Company": "RAYMOND JAMES",
//   "Member": ""
// },
// {
//   "_id": "5be49404acfe864992d0c53f",
//   "Company": "CONTARCTOR",
//   "Member": "MURPHY, DENNIIS"
// },
// {
//   "_id": "5be49404acfe864992d0c55b",
//   "Company": "PARK TOWER",
//   "Member": "MAYER, MATTHEW"
// }
// ]