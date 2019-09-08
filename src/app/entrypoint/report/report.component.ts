import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    public pieChartLabels: Label[] = [['เรื่องร้องเรียน'], ['เรื่องยุติ']];
    public pieChartData: number[] = [300, 500];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartColors = [
        {
            backgroundColor: ['rgba(255,162,182,1)', 'rgba(140,200,243,1)'],
        },
    ];

    reportList: string[] = [
        'รายงานเรื่องร้องเรียนที่อยู่ระหว่างดำเนินการ',
        'รายงานจำนวนเรื่องร้องเรียน ที่มีการร้องเรียนเข้ามาตามช่องทางการร้องเรียนต่าง ๆ',
        'รายงานจำนวนเรื่องร้องเรียนของแต่ละจังหวัด',
        'รายงานเรื่องโต้แย้ง',
        'รายงานจำนวนเรื่องร้องเรียนเชิงระบบ',
        'รายงานสถิติเรื่องร้องเรียนที่ยุติตามมาตรา',
        'รายงานผลการดำเนินการเรื่องร้องเรียนแล้วเสร็จ(ยุติ)ปีงบประมาณตามระยะเวลา',
        'สถิติเรื่องร้องเรียนทั้งหมดตั้งแต่ปีงบประมาณ พ.ศ.2543 ทั้งที่อยู่ระหว่างการดำเนินการและยุติ',
        'การจำแนกเรื่องที่ดำเนินการแล้วเสร็จตามผลการดำเนินการ',
        'การจำแนกเรื่องที่ดำเนินการแล้วเสร็จ และส่งหน่วยงานอื่น',
        'การรายงานผลการดำเนินการเรื่องร้องเรียน',
        'สถิติเรื่องร้องเรียนตามหน่วยงาน',
        'การรายงานจำนวนและสถานะของเรื่องร้องเรียนในแต่ละปีงบประมาณ',
        'การรายงานผลจำนวนเรื่องร้องเรียนที่เข้ามาตามช่องทางการร้องเรียน'
    ];

    barChartOptions: ChartOptions = {
        responsive: true,
        scales: {xAxes: [{}], yAxes: [{}]},
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        },
        legend: {
            position: 'bottom',
        },
    };

    barChartLabels1: Label[] = ['ปี 2560', 'ปี 2561', 'ปี 2562'];
    barChartData1: ChartDataSets[] = [
        {data: [65, 59, 80], label: 'เรื่องร้องเรียน'},
        {data: [28, 48, 40], label: 'เรื่องยุติ'}
    ];

    barChartLabels2: Label[] = ['ไม่เกิน 1 ปี', '1 ปี - 1 ปี 3 เดือน', '1 ปี 3 เดือน - 1 ปี 6 เดือน', '1 ปี 6 เดือน - 2 ปี', 'เกิน 2  ปี'];
    barChartData2: ChartDataSets[] = [
        {data: [44, 59, 80, 66, 77], label: 'ยังไม่มอบหมาย'},
        {data: [28, 56, 40, 61, 55], label: 'สกค.'},
        {data: [28, 56, 16, 61, 55], label: 'สตร.'},
        {data: [56, 56, 40, 19, 67], label: 'สอบสวน 1'},
        {data: [28, 56, 40, 61, 20], label: 'สอบสวน 2'},
        {data: [75, 45, 15, 86, 56], label: 'สอบสวน 3'},
        {data: [15, 56, 53, 61, 85], label: 'สอบสวน 4'},
        {data: [78, 56, 40, 77, 55], label: 'สอบสวน 5'},
    ];

    geoChartOption = {
        region: 'TH',
        colorAxis: {
            colors: ['#fad500', '#d66200', '#ff0025']
        },
        resolution: 'provinces',
        backgroundColor: '#E0F2F1',
        datalessRegionColor: '#CFD8DC',
        defaultColor: '#f5f5f5',
    };
    @ViewChild("geoChartElement", {static: false}) geoChartElement;


    constructor() {
    }

    ngOnInit() {
        this.createChart();
    }

    createChart() {
        let result = [
            ['สงขลา', 50],
            ['กรุงเทพมหานคร', 100],
            ['เชียงใหม่', 350],
            ['นนทบุรี', 20],
            ['ยะลา', 88],
            ['ขอนแก่น', 100],
            ['ชัยภูมิ', 2],
            ['ชลบุรี', 1000],
            ['ระนอง', 400],
            ['อุบลราชธานี', 200],
            ['เชียงใหม่', 800],
            ['กาญจนบุรี', 10],
            ['เชียงราย', 10],
            ['ตาก', 10],
            ['กำแพงเพรช', 10],
            ['สุรินทร์', 10],
            ['กาฬสินธุ์', 10],
            ['บุรีรัมย์', 10],
            ['มหาสารคาม', 10],
            ['มุกดาหาร', 10],
            ['ยโสธร', 10],
        ];
        let data = [['จังหวัด', 'จำนวน'], ...result];

        window['google'].charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': 'AIzaSyBJ_AVXeSEifdoBOETZkMHl4CuB_mwkQc0'
        });
        window['google'].charts.setOnLoadCallback(() => {
            let chart = new window['google'].visualization.GeoChart(this.geoChartElement.nativeElement);
            chart.draw(window['google'].visualization.arrayToDataTable(data), this.geoChartOption);
        });
    }
}
