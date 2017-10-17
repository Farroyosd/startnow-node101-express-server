//cd ~/oca/startnow-web101-san-diego-top-spots


$(document).ready(function() {
// write your code here
$.getJSON('/data', function(data){
for(let i = 0; i <data.length;i++){
    var name = data[i].name;
    var description = data[i].description;
    var link = data[i].location;
    $('#table').append('<tr>'+'<td>'+ name + '</td>'+'<td>' + description + '</td>'+ '<td>' + '<button type="button" class="btn btn-primary">'+'<a'+' href="https://www.google.com/maps/@'+ link + ',16z?hl=en"'+'>' + '</a>'+ 'Open in Google Maps' + '</button>' + '</td>'+'</tr>')
}
})
});
