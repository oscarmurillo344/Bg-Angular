import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { D0Types } from '@swimlane/ngx-charts';
const data: any[] = [
  {
    "name": "South Korea",
    "series": [
      {
        "value": 2308,
        "name": "2016-09-18"
      },
      {
        "value": 5244,
        "name": "2016-09-21"
      },
      {
        "value": 2495,
        "name": "2016-09-17"
      },
      {
        "value": 3357,
        "name": "2016-09-17"
      },
      {
        "value": 5738,
        "name": "2016-09-24"
      }
    ]
  },
  {
    "name": "Fiji",
    "series": [
      {
        "value": 2558,
        "name": "2016-09-18T17:16:56.731Z"
      },
      {
        "value": 3430,
        "name": "2016-09-21T14:39:06.708Z"
      },
      {
        "value": 5839,
        "name": "2016-09-17T21:49:20.495Z"
      },
      {
        "value": 3392,
        "name": "2016-09-17T18:02:53.352Z"
      },
      {
        "value": 3457,
        "name": "2016-09-24T01:40:47.756Z"
      }
    ]
  },
  {
    "name": "Romania",
    "series": [
      {
        "value": 4348,
        "name": "2016-09-18T17:16:56.731Z"
      },
      {
        "value": 2400,
        "name": "2016-09-21T14:39:06.708Z"
      },
      {
        "value": 5913,
        "name": "2016-09-17T21:49:20.495Z"
      },
      {
        "value": 2241,
        "name": "2016-09-17T18:02:53.352Z"
      },
      {
        "value": 5622,
        "name": "2016-09-24T01:40:47.756Z"
      }
    ]
  },
  {
    "name": "Tonga",
    "series": [
      {
        "value": 2608,
        "name": "2016-09-18T17:16:56.731Z"
      },
      {
        "value": 4502,
        "name": "2016-09-21T14:39:06.708Z"
      },
      {
        "value": 4661,
        "name": "2016-09-17T21:49:20.495Z"
      },
      {
        "value": 2735,
        "name": "2016-09-17T18:02:53.352Z"
      },
      {
        "value": 2635,
        "name": "2016-09-24T01:40:47.756Z"
      }
    ]
  },
  {
    "name": "Liechtenstein",
    "series": [
      {
        "value": 4284,
        "name": "2016-09-18T17:16:56.731Z"
      },
      {
        "value": 6824,
        "name": "2016-09-21T14:39:06.708Z"
      },
      {
        "value": 6297,
        "name": "2016-09-17T21:49:20.495Z"
      },
      {
        "value": 6796,
        "name": "2016-09-17T18:02:53.352Z"
      },
      {
        "value": 5999,
        "name": "2016-09-24T01:40:47.756Z"
      }
    ]
  }
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  multi: any[] = data.map( d=> {
    d.series.map( dt => {
      let datePi = new DatePipe("en-US")
      dt.name = datePi.transform(dt.name,"dd-MMM")
      return dt
    })
    return d
  })
  view: any[] = [undefined, undefined];
  // options
  legend: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).pipe(
      map(result => result.matches),
      shareReplay()
    );
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }
  
  ngOnInit(): void {
    this.isHandset$.subscribe( (data:boolean) => {
    if(!data){
      this.view = [undefined,undefined] 
    }else{
      this.view = [310, undefined];
    }
    })
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
