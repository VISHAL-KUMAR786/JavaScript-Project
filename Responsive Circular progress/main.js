let options = {
    startAngle: -1.55,
    size: 150, // circle width
    value: 0.85,
    fill: {gradient: ["#a445b2","#fa4299"]}
}

$(".circle .bar").circleProgress(options).on('circle-animation-progress',function(event,progress,stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)+"%"))
})

$(".js .bar").circleProgress({
    value: 0.70,
})
$(".reactjs .bar").circleProgress({
    value: 0.60,
})
//   background: -webkit-linear-gradient(left, #a445b2, #fa4299);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;