    var member = [];
    for(i=0;i<20;i++){
        member[i] = "あああああ"+ (i+1);
    }
    var count = 0;
    // $.get("assets/member.json", function(data){
    //     var hoge = JSON.parse(data);
    //     member = hoge.member;
    // });
    var seat_random = _.shuffle(_.range(20));
    function shuffle(){
        member = _.shuffle(member);
        shuffle_msg();
        shuffle_obj();
    }
function shuffle_msg(){
    $("#msg1").toggle('explode','',500);
    $("#msg2").toggle('explode','',500);
    if(count == 20){
        return false;
    }
    setTimeout("shuffle_msg()",1000);
}
function shuffle_obj(){
    if(count == 20){
        return true;
    };
    var obj = $("#seat_"+(seat_random[count]+1)).shuffleLetters({
            'text': member[seat_random[count]]
            });
    count++;
    setTimeout("shuffle_obj()",300);
}
