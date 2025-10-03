


var isOk = false;


if(isOk)   
 {
  console.log("Hey i am tharun. any i am having the boi bank");
  console.log("My password is 000000hg");
 }
 else{
    console.log("YOu do't have permission")
 }



let isHDFCBankAccess = false;
let isSBIBankAccess = false;


if (isHDFCBankAccess) {
    console.log("YOu are belonging to the boi bank");
}
else if (isSBIBankAccess) {
    console.log("YOu are belonging to the sbi bank");
}

else {
    console.log("you do't the account");
}





let bank1Name = "boi";
let bank2Name = "SBI";

let bankNameAccess = "abcd";



          // ""boi""
switch (bankNameAccess) {
    case bank1Name: {
        console.log("Hey !! tharun  you are having the boi bank access");
        break;
    }
    case bank2Name: {
        console.log("Hey !! tharun  you are having the sbi bank access");
        break;
    }
    
    default: {
        console.log("Hey !! Sorry you do't have any bacnk account id");
    }
}


let day = 14;

switch (day) {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    } case 3: {
        console.log("Wednesday");
        break;
    } case 4: {
        console.log("thursday");
        break;
    } case 5: {
        console.log("friday");
        break;
    } case 6: {
        console.log("saturday");
        break;
    }
    case 7: {
        console.log("sunday");
        break;
    }
    default: {
        console.log("your input is wrong .please check the proper input")
    }


}