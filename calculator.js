let display=document.getElementById('result');

let calculate="";
let newcalculate="";
let bracketopen=0;
let total;
function todisplay(event)
{
    let newvalue;
   newvalue=event.target.textContent;
//    console.log("newvalue",newvalue);
   if(newcalculate=="")
   {
       calculate+=newvalue;
       console.log("calculate",calculate);
       display.textContent=calculate;
    //    console.log("display.textcontent",display.textContent);
   }
   else
   {
      newcalculate+=newvalue;
      calculate+=newvalue;
      console.log("newcalculate",newcalculate);
       console.log("calculate",calculate);
      display.textContent=calculate;

   }
       
}

//when the bracket is open
function tobracketopen(event)
{
    //counting the bracketopen
    bracketopen+=1;
    console.log("bracketopen",bracketopen);
     
   // newcalculate null then this condition become true
    if(newcalculate=="")
    {
        let totalvalue;
        // console.log(event.target.textContent);
        totalvalue=calculate.length;
        // console.log(totalvalue);
        if(totalvalue==0)
        {
            calculate+=event.target.textContent;
            display.textContent=calculate;  
        }
        else
        {
            let newtotalvalue;
            let newcalculatevalue;
            // display.textContent=event.target.textContent;
            
            //In newtotalvalue variable calculate variable previous value will store
            newtotalvalue=calculate.length-1;
            // console.log("calculate[newtotalvalue",calculate[newtotalvalue]);
            // console.log("calculate",calculate);
            newcalculatevalue=calculate[newtotalvalue];
            // console.log(newcalculatevalue);
    
            //if newcalculatevalue doesn't have the +,-,*,/ operators then this condition become true
            if(newcalculatevalue!='+'&& newcalculatevalue!='-'&& newcalculatevalue!='*' && newcalculatevalue!='/'  )
            {
                // display.textContent=event.target.textContent;
                newcalculate=calculate;
                calculate+=event.target.textContent;
                display.textContent=calculate;
                newcalculate+="*";
                newcalculate+=event.target.textContent;
                // console.log("newcalculate",newcalculate);
            }
            else
            {
                calculate+=event.target.textContent;
                display.textContent=calculate;
                 
            }
    
    
        }

    }
    // newcalculate is not null
    else
    {
       let newvalue;
       let newlength;
       newlength=calculate.length-1;
       newvalue=calculate[newlength];
    //    console.log("newvalue",newvalue);
       //if newvalue doesn't have the +,-,*,/ operators then this condition become true
        if(newvalue!='+' && newvalue!='-' && newvalue!='*' && newvalue!='/')
        {
            newcalculate+='*';
            calculate+=event.target.textContent;
            display.textContent=calculate;
            newcalculate+=event.target.textContent;
            // console.log("newcalculate",newcalculate);
            // console.log("calculate",calculate);

        }
        else
        {
           calculate+=event.target.textContent;
           newcalculate+=event.target.textContent;
           display.textContent=calculate;
        //    console.log("newcalculate",newcalculate);
        //     console.log("calculate",calculate);

                
        }

    }
   
}

//to calculating total display
function toequal()
{
    let newtotal;
    let calculatelen;
    let newvalue;
    let calculatevalue;

    //it storing the returning value
    let newcalculatevalue;
   
        if(newcalculate=="")
        {
            //if bracketopen greater than or equal to 1 then this condition become true
            if(bracketopen>=1)
            {
               //call closebracket function 
                newcalculatevalue=closebracket(calculate);
                 //counting the openbracket and closed bracket we call countbracketfunction and giving argument
                 calculatevalue=countbracket(newcalculatevalue);
                 if(calculatevalue!=0)
                 {
                    for(let i=0;i<calculatevalue;i++)
                    {
                        newcalculatevalue+=")";

                    }
                 }

                total=eval(newcalculatevalue);
                newtotal=total;
                //  console.log("newtotal",newtotal)

                //checking the condition newtotal is 0 then this condition become true
                if(newtotal==0)
                {
                    display.textContent=total;
                 calculate="";
                //bracket open will become zero again
                 bracketopen=0;

                }
                else{
                      
                    if(newtotal!=Math.floor(total))
                        {
                        total=newtotal.toFixed(2);
                        }
                        // console.log("total",total);
                        display.textContent=total;
                       calculate=display.textContent;
                       //bracket open will become zero again
                        bracketopen=0;

                }

               
            }
            //if bracketopen is not greater than 1
            else
            {

                total=eval(calculate);
                newtotal=total;
                  console.log("newtotal",newtotal)
                   //checking the condition newtotal is 0 then this condition become true
                   if(newtotal==0)
                    {
                        display.textContent=total;
                        calculate="";

                    }
                    else
                    {
                        if(newtotal!=Math.floor(total))
                            {
                            total=newtotal.toFixed(2);
                            }
                            // console.log("total",total);
                            display.textContent=total;
                           calculate=display.textContent;


                    }    

            }  
                     
       }
            
        //newcalculate is not null
      else
        { 
            //if bracketopen greater than or equal to 1 then this condition become true
            if(bracketopen>=1)
            { 
                    //calling the function closebracket passing the newcalculate argument
                     newcalculatevalue=closebracket(newcalculate);
                     //counting the openbracket and closed bracket we call countbracketfunction and giving argument
                         calculatevalue=countbracket(newcalculatevalue);
                         if(calculatevalue!=0)
                         {
                            for(let i=0;i<calculatevalue;i++)
                            {
                                newcalculatevalue+=")";

                            }
                         }

                     total=eval(newcalculatevalue);
                     newtotal=total;
                  console.log("total",total)
                    //checking the condition newtotal is 0 then this condition become true
                    if(newtotal==0)
                    {
                        display.textContent=total;
                   calculate="";
                    newcalculate="";
                   //bracket open will become zero again
                     bracketopen=0;

                    }
                    else
                    {
                        if(newtotal!=Math.floor(total))
                            {
                                 total=newtotal.toFixed(2);
                            }
                           // console.log("total",total);
                           display.textContent=total;
                           calculate=display.textContent;
                           newcalculate="";
                           //bracket open will become zero again
                           bracketopen=0;

                    }

                 
                        
            } 
              //bracket open is not greater than 1
            else
            {
                total=eval(newcalculate);
                newtotal=total;
                 console.log("newtotal",newtotal)
                 //checking the condition newtotal is 0 then this condition become true
                 if(newtotal==0)
                {
                    display.textContent=total;
                    calculate="";
                    newcalculate="";

                }
                else
                {
                    if(newtotal!=Math.floor(total))
                        {
                             total=newtotal.toFixed(2);
                        }
                       // console.log("total",total);
                       display.textContent=total;
                       calculate=display.textContent;
                       newcalculate="";

                }
               

            }
              
        }
    
        
 }      


//close bracket function
function closebracket(calculation)
{
    //it is storing the calculation length;
    let calculatelength;
    //it is storing single calculation value
    let calculatevalue;
    //it is storing after the single calculation value
    let newcalculatevalue;

    //it is storing all the calculations which through conditions
    let newvalue;


       calculatelength=calculation.length;
       console.log("calculation",calculation);
       console.log("calculation length",calculatelength);
       for(let i=0;i<calculatelength;i++)
       {
           calculatevalue=calculation[i];
           //checking the condition that calculatevalue is ) bracket or not 
           if(calculatevalue==")")
           {
               console.log("i",i);
                newcalculatevalue=calculation[i+1];
                //checking condition newcalculatevalue is not undefined
                if(newcalculatevalue!==undefined)
                {
                    //then checking the condition newcalculatevalue is not +,-,*,/,) then this condition become true;
                    if(newcalculatevalue!='+' && newcalculatevalue!='-' && newcalculatevalue!='*' && newcalculatevalue!='/' && newcalculatevalue!=')')
                    {
                        //extracting the values
                        newvalue=calculation.substring(0,i+1);
                        newvalue+="*";
                        console.log("newvalue",newvalue);
                        console.log("newcalculatevalue",newcalculatevalue);

                    }
                    else
                    {
                        newvalue+=calculatevalue;
                        console.log("newvalue",newvalue);

                    }
                    
                }
                //if newcalculatevalue is undefined then else condition become true
                else
                {

                    //calculatevalue  is not null then this condition become true
                    if(calculatevalue!=null)
                    {
                        newvalue+=calculatevalue;
                        console.log("newvalue",newvalue);
                    }



                }

               
           }
           //if calculatevalue is not ) then this else become true
           else
           {
                //if newvalue is null then this condition become true
               if(newvalue==null)
               {
                    newvalue=calculatevalue;
               }
               else
               {
                newvalue+=calculatevalue;
               console.log("newvalue",newvalue)   

               }
            

           }

       }


     //returning the newvalue;
    return newvalue;
    
}

//counting the bracket
function countbracket(calculation)
{
    let opencount=0;
    let closecount=0;
    let newcount;
    let bracketclose;
    let calculatelen;
    console.log("calculation",calculation);
    calculatelen=calculation.length;
    for(let i=0;i<calculatelen;i++)
    {
        if(calculation[i]=="(")
        {
             opencount++;
        }
        if(calculation[i]==")")
        {
            closecount++;
        }
         
    }
    //checking the condition that opencount and closed count is not same then this condition become true
    if(opencount>closecount)
    {
       newcount =opencount-closecount;
       console.log("newcount",newcount);
       return newcount;
        
    }

    else if(opencount==closecount)
    {
        newcount=0;
        return newcount;
    }
    console.log("opencount is",opencount);
    console.log("closedcount is",closecount);




}

//to clear all the function
function toclear()
{
    display.textContent="0";
    calculate="";
    newcalculate="";
}
//to back button
function toback()
{
    
    if(newcalculate=="")
    {
         let totalvalue=calculate.length;
    //if calculate length less than 1 then this condition become false
   if(calculate.length>1)
   {
    //extracting the values
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
    else
    {
       let newlength,oldlength;
       let newvalue,oldvalue;
       //it's checking the length
       newlength=newcalculate.length-1;
       oldlength=calculate.length-1;
          
       oldvalue=calculate[oldlength];
        newvalue=newcalculate[newlength];
        console.log("newvalue",newvalue);
        
            // newvalue is equal to ( then this condition become false
           if(newvalue!="(")
           {
              //checking the calculate length is greater than 1
              if(calculate.length>1)
                {
                    //extracting the calculate and newcalculate values
                    display.textContent = calculate.substring(0,oldlength);
                    newcalculate=newcalculate.substring(0,newlength)
                 calculate=display.textContent;
                 console.log("calculate",calculate);
                 console.log("newcalculate",newcalculate);

                } 
                else
                {
                    display.textContent="0";
                    calculate="";
                    newcalculate="";

                }
               
           }
        else
        {
            //bracketopen is decreasing
            bracketopen-=1;
            console.log("bracketopen",bracketopen);
            if(calculate.length>1)
            {
                 //changing the newlength
            newlength=newcalculate.length-2;
            console.log("oldlength",oldlength);
            console.log("newlength",newlength);
            //it's checking the length
            display.textContent = calculate.substring(0,oldlength);
            calculate=display.textContent;
            //if condition become false then newcalculate extract
            newcalculate=newcalculate.substring(0,newlength);
            console.log("calculate",calculate);
         console.log("newcalculate",newcalculate);
            }
            else
            {
                display.textContent="0";
                    calculate="";
                    newcalculate="";
            }
           
        }  

    }    
}




