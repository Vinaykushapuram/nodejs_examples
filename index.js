var rect=('./rectangle')


function solve( l,b )
{
    rect(l,b,(err,rectangle)=>
   { if(err)console.log("ERROR" +err.message);
    else{
        console.log(" area of recatnagle with l= "+l,"breadth b= "+b +" ="+ rectangle.area());
        console.log(" perimeter of recatnagle with l= "+l,"breadth b= "+b +" ="+ rectangle.perimeter());
    }
    console.log("this should print after above calculation ");
}
    );
}
solve(0,2);
solve(3,4);