var sys=require('sys');

var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_millions(input){ //converts millions to words
    if (input>=1000000){
        return convert_millions(Math.floor(input/1000000))+" million "+convert_thousands(input%1000000);
    }
    else {
        return convert_thousands(input);
    }
}

function convert_thousands(input){ //converts thoudsands to words
    if (input>=1000){
        return convert_hundreds(Math.floor(input/1000))+" thousand "+convert_hundreds(input%1000);
    }
    else{
        return convert_hundreds(input);
    }
}

function convert_hundreds(input){ //converts hundreds to words
    if (input>99){
        return ones[Math.floor(input/100)]+" hundred "+convert_tens(input%100);
    }
    else{
        return convert_tens(input);
    }
}

function convert_tens(input){ //converts tens to wors
    if (input<10) return ones[input];
    else if (input>=10 && input<20) return teens[input-10];
    else{
        return tens[Math.floor(input/10)]+" "+ones[input%10];
    }
}

function wordsToNum(input){ //words to numbers
    if (input==0) return "zero"; //if input is 0
    else return convert_millions(input);
}

function main(){
    var cases=[0,1,2,7,10,11,12,13,15,19,20,21,25,29,30,35,50,55,69,70,99,100,101,119,510,900,1000,5001,5019,5555,10000,11000,100000,199001,1000000,1111111,190000009];
    for (var i=0;i<cases.length;i++ ){
        sys.puts(cases[i]+": "+wordsToNum(cases[i]));
    }
}

main();
