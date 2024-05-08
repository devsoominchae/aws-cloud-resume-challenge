const total_counter = document.querySelector(".total-views");
async function updateTotalViews() {
    let response = await fetch("https://api.soominchae.net/getAndUpdateTotalViews")
    console.log(response)
    let data = await response.json()
    console.log(data);
    total_counter.innerHTML = `Views : ${data}`
}

const today_counter = document.querySelector(".today-views");
async function updateTodayViews() {
    let response = await fetch("https://api.soominchae.net/getAndUpdateTodayCount" )
    console.log(response)
    let data = await response.json()
    console.log(data);
    today_counter.innerHTML = `Today : ${data}`
}

async function getViewHistory() {
    let response = await fetch("https://api.soominchae.net/getViewHistory");
    let data = await response.json();
    
    return data;
}

function formatDate(date_string) {
    var original_date = new Date(date_string);

    var month = original_date.getMonth() + 1;
    var day = original_date.getDate();

    var formatted_month = (month < 10 ? '0' : '') + month;
    var formatted_day = (day < 10 ? '0' : '') + day;

    var formatted_date = formatted_month + '/' + formatted_day;

    return formatted_date

}

function getTicks(view_history) {
    var max_views = Math.max(...view_history);
    var min_views = Math.min(...view_history);

    var max_views_round_up = (Math.ceil(max_views / 10) * 10) * 1.2;
    var min_views_round_down = Math.floor(min_views / 10) * 10;

    var tick_list = [];

    for (var i = min_views_round_down; i<= max_views_round_up; i += 10){
        tick_list.push(i)
    }

    return tick_list;
}

function combineDateViews(view_history) {
    var dates_list = [];
    var current_date = new Date();

    for (var i = 0; i <= view_history.length; i++) {
        var date = new Date(current_date);
        date.setDate(current_date.getDate() - i);
        dates_list.push(formatDate(date.toDateString()));
    }

    var combined_list = [];

    for (var i = 0; i < view_history.length; i++) {
        combined_list.push([dates_list[i], view_history[i]]);
    }

    combined_list.reverse();

    console.log(combined_list);

    return combined_list;
}

function createChartData (date_view_list){
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Date');
    data.addColumn('number', 'Views'); 

    for (var item of date_view_list) {
        data.addRow(item)
    }

    return data;
}

function getChartOption(tick_list){
    var options = {
        vAxis: {
            ticks: tick_list,
        },
        hAxis : {
            textStyle:{color: 'white'}
        },
        curveType: 'function',
        legend: { 
            position: 'bottom',
            textStyle: {color: 'white'}
        },
        'backgroundColor': 'transparent',
        'width' : '80%',
        'height' : 400,
    };

    return options;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let view_history = getViewHistory().then(function(view_history) {
        console.log(view_history);        

        let tick_list = getTicks(view_history);

        let date_view_list = combineDateViews(view_history);
    
        let data = createChartData(date_view_list);

        let options = getChartOption(tick_list)        
    
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    
        chart.draw(data, options);
    });

}

updateTotalViews()

updateTodayViews()