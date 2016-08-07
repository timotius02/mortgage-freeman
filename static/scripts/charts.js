var ctx = $("#lineChart");
var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Net Monthly Income",
            fill: false,
            lineTension: 0,
            backgroundColor: "red",
            borderColor: "red",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "red",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "red",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};

var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {

    }
});

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
            data: [300, 50, 100, 90, 200],
            backgroundColor: [
                "#FFB3BA",
                "#BAE1FF",
                "#FFFFBA",
                "#BAFFC9",
                "#FFDFBA",
            ],
            hoverBackgroundColor: [
                "#ff808c",
                "#80c8ff",
                "#ffff80",
                "#80ff9b",
                "#ffc380"
            ]
        }]
};
var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: data2,
    options: {

    }
});
