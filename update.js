$(document).ready(function(){
    var url="https://api.covid19india.org/data.json";
    $.getJSON(url,function(data){
        console.log(data)
        var active=data.statewise[0].active
        var confirmed=data.statewise[0].confirmed
        var recovered=data.statewise[0].recovered
        var deaths=data.statewise[0].deaths
        var states=[]
        var total_confirmed=[]
        var total_recovered=[]
        var total_deaths=[]

        $.each(data.statewise,function(id,obj){
            states.push(obj.state)
            total_confirmed.push(obj.confirmed)
            total_recovered.push(obj.recovered)
            total_deaths.push(obj.deaths)
        })
        states.shift()
        total_deaths.shift()
        total_recovered.shift()
        total_confirmed.shift()

        $("#active").append(active);
        $("#confirmed").append(confirmed);
        $("#recovered").append(recovered);
        $("#deaths").append(deaths);
        
        var mychart=document.getElementById("mychart").getContext("2d")
        var chart=new Chart(mychart,{
            type:"line",
            data:{
                labels:states,
                datasets:[{
                    label:"Confirmed Cases",
                    data:total_confirmed,
                    backgroundColor:"#f1c40f",
                    minBarLength:100
                },
                {
                    label:"Recovered Cases",
                    data:total_recovered,
                    backgroundColor:"#2ec771",
                    minBarLength:100
                },
                {
                    label:"Decreased",
                    data:total_deaths,
                    backgroundColor:"#c74c3c",
                    minBarLength:100
                },
            ]
            }
        })
    })
})