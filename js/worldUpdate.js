$(document).ready(function(){
    var url="https://api.covid19api.com/summary";
    $.getJSON(url,function(data){
        console.log(data)
        var confirmed=data.Global.TotalConfirmed;
        var recovered=data.Global.TotalRecovered;
        var deaths=data.Global.TotalDeaths;
        $("#confirmed").append(confirmed);
        $("#recovered").append(recovered);
        $("#deaths").append(deaths);
        console.log(confirmed)
        var wtable=document.getElementById("wtable");

        for(var i=1;i<=(data.Countries.length);i++){
            var x=wtable.insertRow();
            x.insertCell(0);

            wtable.rows[i].cells[0].innerHTML=data['Countries'][i-1]['Country'];

            x.insertCell(1);

            wtable.rows[i].cells[1].innerHTML=data['Countries'][i-1]['TotalConfirmed'];

            x.insertCell(2);

            wtable.rows[i].cells[2].innerHTML=data['Countries'][i-1]['TotalRecovered'];

            x.insertCell(3);

            wtable.rows[i].cells[3].innerHTML=data['Countries'][i-1]['TotalDeaths'];

            x.insertCell(4);

            wtable.rows[i].cells[4].innerHTML=data['Countries'][i-1]['NewConfirmed'];

            x.insertCell(5);

            wtable.rows[i].cells[5].innerHTML=data['Countries'][i-1]['NewRecovered'];

            x.insertCell(6);

            wtable.rows[i].cells[6].innerHTML=data['Countries'][i-1]['NewDeaths'];
        }

    })
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#wtable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
})
