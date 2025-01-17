Highcharts.chart('container', {
  chart: {
    type: 'pie'
  },
  title: {
    text: '2023來台觀光客國籍統計表'
  },
  tooltip: {
    valueSuffix: '人'
  },
  subtitle: {
    text:
    'Source:台灣觀光署'
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: [{
        enabled: true,
        distance: 20
      }, {
        enabled: true,
        distance: -40,
        format: '{point.percentage:.1f}%',
        style: {
          fontSize: '1.2em',
          textOutline: 'none',
          opacity: 0.7
        },
        filter: {
          operator: '>',
          property: 'percentage',
          value: 10
        }
      }]
    }
  },
  series: [
    {
      name: '人數',
      colorByPoint: true,
      data: [
        {
          name: '亞洲地區',
          sliced: true,
          selected: true,
          y:   5432055 

        },
        {
          name: '非洲地區',
          y:   9354 

        },
        {
          name: '美洲地區',
          y:   639976 

        },
        {
          name: '大洋洲地區',
          y:   104205 

        },
        {
          name: '歐洲地區',
          y:   298986 

        },
        {
          name: '其他未列明',
          y:  2375 

        }
      ]
    }
  ]
});