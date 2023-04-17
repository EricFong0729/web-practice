$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    let millisecsPerDay = 24*60*60*1000;

    for (let i = 0; i < topicCount; i++){        
        if(i%2 == 1){
            $("#courseTable").append(
                "<tr style='background-color: red'>"+
                `<td>${i + 1}</td>`+
                `<td>${(new Date(startDate.getTime() + 7*i*millisecsPerDay)).toLocaleDateString()}</td>`+
                `<td>${topic[i]}</td>`+
                "</tr>"
            );
        }
        else{
            $("#courseTable").append(
                "<tr style='background-color: blue'>"+
                `<td>${i + 1}</td>`+
                `<td>${(new Date(startDate.getTime() + 7*i*millisecsPerDay)).toLocaleDateString()}</td>`+
                `<td>${topic[i]}</td>`+
                "</tr>"
            );
        }
    } 
 });