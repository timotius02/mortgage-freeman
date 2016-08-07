var ctx = $("#lineChart");
var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Net Monthly Income",
            fill: false,
            lineTension: 0,
            backgroundColor: "#da253d",
            borderColor: "#da253d",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#da253d",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#da253d",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};


var ctx2 = $("#pieChart");
var data2 = {
    labels: [
        "Food",
        "Groceries",
        "Shopping",
        "Entertainment",
        "Withdrawls",
        "Bills"
    ],
    datasets: [
        {
            data: [300, 50, 100, 90, 200, 250],
            backgroundColor: [
                "#da253d",
                "#56AEE2",
                "#e2cf56",
                "#56E289",
                "#8A56E2",
                "#E28956"
            ],
            hoverBackgroundColor: [
                "#E25668",
                "#2598da",
                "#ffff80",
                "#25da67",
                "#6725da",
                "#da6725"
            ]
        }]
};


function genChart() {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {

        }
    });

    var myDoughnutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: data2,
        options: {

        }
    });

}
