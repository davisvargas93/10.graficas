import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-grafico-lineas',
  templateUrl: './grafico-lineas.component.html'
})
export class GraficoLineasComponent  {

  constructor() { 

  }
    // lineChart
    public lineChartData:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ];
    public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
    public lineChartOptions:any = {
      responsive: true
    };
    public lineChartColors:Array<any> = [
      { // gris
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // gris Oscuro 
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // gris
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
   
    public randomize():void {
      let _lineChartData:Array<any> = new Array(this.lineChartData.length);
      for (let i = 0; i < this.lineChartData.length; i++) {
        _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
          _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
      }
      this.lineChartData = _lineChartData;
    }
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    } 

    public pdfmake(){
      //called first time before the ngOnInit()
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      var dd = { 
        background: 'simple text',

        content: [
          // if you don't need styles, you can use a simple string to define a paragraph
          'This is a standard paragraph, using default style',
     
          // using a { text: '...' } object lets you set styling properties
          { text: 'This paragraph will have a bigger font', fontSize: 15 },
     
          // if you set pass an array instead of a string, you'll be able
          // to style any fragment individually
          {
            text: [
              'This paragraph is defined as an array of elements to make it possible to ',
              { text: 'restyle part of it and make it bigger ', fontSize: 15 },
              'than the rest.'
            ]
          
          },
          'This paragraph fills full width, as there are no columns. Next paragraph however consists of three columns',
          {
            columns: [
              {
                // auto-sized columns have their widths based on their content
                width: 'auto',
                text: 'First column'
              },
              {
                // star-sized columns fill the remaining space
                // if there's more than one star-column, available width is divided equally
                width: '*',
                text: 'Second column'
              },
              {
                // fixed width
                width: 100,
                text: 'Third column'
              },
              {
                // percentage width
                width: '10%',
                text: 'Last column'
              }
            ],
            // optional space between columns
            columnGap: 10
          },
          'This paragraph goes below all columns and has full width',
          {
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*', 'auto', 100, '*' ],
      
              body: [
                this.lineChartLabels
/*                 [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ] */
              ]
            }
          }
        ]
      };
    pdfMake.createPdf(dd).download();
    }














}
