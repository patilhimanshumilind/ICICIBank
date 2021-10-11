$( document ).ready(function() {
  console.log( "ready!" );


    //date picker
    $('.date_picker_content').datepicker({
      orientation: "bottom",
      format: 'dd/mm/yyyy',
      autoclose: true
  });

    $(".date_picker_input").change(function(){
        if ($(this).val()== "") {
            $(this).siblings(".datapicker_label").show();
        } else {
            $(this).siblings(".datapicker_label").hide();
        }
    });

    //modal
    $("#changeRequest").on('show.bs.modal', function (e) {
      $("#impsModal").modal("hide");
      $("body").css("overflow","hidden");
    });
    $("#ncdModification").on('show.bs.modal', function (e) {
      $("#impsModal").modal("hide");
      $("body").css("overflow","hidden");
    });

    $('.select_wrap').fancySelect();

});

$(function () {
    Highcharts.wrap(Highcharts.seriesTypes.column.prototype, 'translate', function (proceed) {
        proceed.apply(this, [].slice.call(arguments, 1));
        var series = this,
            cpw = 0.166,
            shapeArgs,
            x, y, h, w;

        Highcharts.each(series.points, function (point) {
            shapeArgs = point.shapeArgs;
            x = shapeArgs.x;
            y = shapeArgs.y;
            h = shapeArgs.height;
            w = shapeArgs.width;

            point.shapeType = 'path';
            if (point.negative) {
                point.shapeArgs = {
                    d: [
                        'M', x, y,
                        'L', x, y + h - w/2,
                        'C', x, y + h + w/5, x + w, y + h + w/5, x + w, y + h - w/2, 'L', x + w, y,
                        'L', x, y]
                };
            } else {
                point.shapeArgs = {
                    d: [
                        'M', x, y + w/2,
                        'L', x, y + h,
                        'L', x + w, y + h,
                        'L', x + w, y + w/2,
                        'C', x + w, y - w/5, x, y - w/5, x, y + w/2]
                };
            }
        });
    });
    Highcharts.chart('graph-container', {
        chart: {
            type: 'column',
            backgroundColor: "rgba(0,0,0,0)",
           
        },
        series: [{
            showInLegend: false,  
            data: [5, -3, 4, -7, 2, -6, 4,-3,7,-6,5,-6,8],
        }],
      
        plotOptions: {
            column: {
              negativeColor: '#EF9F51',
            }
        },
          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#AED2EF',
                zIndex: 10
            }],
            labels: {
              enabled: false
            },
            title: {
                text: null
            },
          },
          xAxis: {
           
            visible: false,
          },
    });
    Highcharts.chart('graph-container1', {
        chart: {
            type: 'column',
            backgroundColor: "rgba(0,0,0,0)",
        },
        series: [{
            showInLegend: false,  
            data: [5, -3, 4, -7, 2, -6, 4,-3,7,-6,5,-6,8],
            
        }],
        
        plotOptions: {
            column: {
              negativeColor: '#EF9F51',
            }
          },
          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#AED2EF',
                zIndex: 10
            }],
            labels: {
              enabled: false
            },
            title: {
                text: null
            },
          },
          xAxis: {
            visible: false
        },
    });
    Highcharts.chart('graph-container2', {
        chart: {
            type: 'column',
            backgroundColor: "rgba(0,0,0,0)",
        },
        series: [{
            showInLegend: false,  
            data: [5, -3, 4, -7, 2, -6, 4,-3,7,-6,5,-6,8],
            
        }],
        plotOptions: {
            column: {
              negativeColor: '#EF9F51',
            }
          },
          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#AED2EF',
                zIndex: 10
            }],
            labels: {
              enabled: false
            },
            title: {
                text: null
            },
          },
          xAxis: {
            visible: false
        },
    });
    Highcharts.chart('graph-container3', {
        chart: {
            type: 'column',
            backgroundColor: "rgba(0,0,0,0)",
        },
        series: [{
            showInLegend: false,  
            data: [5, -3, 4, -7, 2, -6, 4,-3,7,-6,5,-6,8],
            
        }],
        plotOptions: {
            column: {
              negativeColor: '#EF9F51',
            }
          },
          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#AED2EF',
                zIndex: 10
            }],
            labels: {
              enabled: false
            },
            title: {
                text: null
            },
          },
          xAxis: {
            visible: false,
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
        },
    });
});
