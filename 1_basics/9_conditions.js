/*
  CONDITIONS
*/

// IF STATEMENT
const a1 = 7;
if (a1 <= 10) { console.log("Within 10"); }
else if (a1 >= 11 && a1 <= 20 ) { console.log("Within 20"); }
else { console.log("Outbound"); }

// SWITCH
// switch used === comparison
switch (2) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break
  case "Text":
    console.log("Text");
    break
  default:
    console.log(4);
}
