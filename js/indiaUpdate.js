$(document).ready(function(){
    var url="https://api.covid19india.org/data.json";
    $.getJSON(url,function(data){
        var active=data.statewise[0].active
        var confirmed=data.statewise[0].confirmed
        var recovered=data.statewise[0].recovered
        var deaths=data.statewise[0].deaths
        var states=[]
        var total_confirmed=[]
        var total_recovered=[]
        var total_deaths=[]
        var itable=document.getElementById("itable");
        
        for(var i=1;i<data.statewise.length;i++){
            var obj=data['statewise'][i]
            states.push(obj.state)
            total_confirmed.push(obj.confirmed)
            total_recovered.push(obj.recovered)
            total_deaths.push(obj.deaths)
            var x=itable.insertRow();
            x.insertCell(0);

            

            x.insertCell(1);

            itable.rows[i].cells[0].innerHTML=obj.state

            x.insertCell(2);

            itable.rows[i].cells[1].innerHTML=obj.confirmed

            x.insertCell(3);

            itable.rows[i].cells[2].innerHTML=obj.active;

            x.insertCell(4);

            itable.rows[i].cells[3].innerHTML=obj.recovered;

            x.insertCell(5);

            itable.rows[i].cells[4].innerHTML=obj.deaths;
            itable.rows[i].cells[5].innerHTML=obj.lastupdatedtime;
    
        }
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
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        })
        

        
    })   
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#itable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      }); 
    })
