jQuery(document).ready(function($){
    let kcs_value = 0;
    let rank = 0;
    $.get("https://api.coinpaprika.com/v1/ticker/kcs-kucoin-shares", function(data, status){
        kcs_value = data.price_usd;
        rank = data.rank;
    });

    setTimeout(function(){
        $("#kcsPrice").text(kcs_value);
    },1000);

    $("#at_1").on("keyup change", function(){
        var user=$("#at_1").val();
        var yearlyEarningsKcs=(user*10.87/100).toFixed(5);;
        var monthlyEarningsKcs=(yearlyEarningsKcs/12).toFixed(5);
        var dailyEarningsKcs=(yearlyEarningsKcs/365).toFixed(5);;
        var yearlyEarningsUsd=(yearlyEarningsKcs*kcs_value).toFixed(2);;
        var monthlyEarningsUsd=(monthlyEarningsKcs*kcs_value).toFixed(2);;
        var dailyEarningsUsd=(dailyEarningsKcs*kcs_value).toFixed(2);;
        $("#at_2").text(yearlyEarningsKcs)
        $("#at_3").text(yearlyEarningsUsd)
        $("#at_4").text(monthlyEarningsKcs)
        $("#at_5").text(monthlyEarningsUsd)
        $("#at_6").text(dailyEarningsKcs)
        $("#at_7").text(dailyEarningsUsd)
    });
});
