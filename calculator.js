let display=document.getElementById('result');


let calculate="";
let total;
function todisplay(event)
{
    let newvalue;
    let calculatevalue
    let totalvalue;
    
    //  console.log("event.target.textcontent",event.target.textContent)
     //it is storing one by one  event value
    newvalue=event.target.textContent;
    if(newvalue=="(")
    {
        //it is storing the calculate length
         totalvalue=calculate.length-1;
        //  console.log("total value",totalvalue);
         calculatevalue=calculate[totalvalue];
        //  console.log('calculatevalue',calculatevalue);
         if(calculatevalue!='+'&&calculatevalue!='-'&&calculatevalue!='*'&&calculatevalue!='/')
         {
            // console.log('calculatevalue',calculatevalue);
           calculate+='*';
        //    console.log("calculate",calculate);
         }   
    }
   calculate+=event.target.textContent;
  
   display.textContent=calculate;
     
}
//to calculating total display
function toequal()
{
    let newtotal
    total=eval(calculate);
     newtotal=total;
    //  console.log("newtotal",newtotal)
     if(newtotal!=Math.floor(total))
     {
          total=newtotal.toFixed(2);
     }
    // console.log("total",total);
    display.textContent=total;
    calculate=display.textContent;
}

//to clear all the function
function toclear()
{
    display.textContent="0";
    calculate="";
}
//to back button

function toback()
{
     let totalvalue=calculate.length;
    //  console.log("length is:",calculate.length);
    //   console.log("total value",totalvalue);
   if(calculate.length>1)
   {
    //   console.log(calculate)
    display.textContent = calculate.substring(0,totalvalue-1);
   calculate=display.textContent;
//    console.log('calculate value is:'+display.textContent);
//    console.log("last calculate value",calculate);
   }
   else 
   {
    display.textContent="0";
    calculate="";
   }
  
  
}

