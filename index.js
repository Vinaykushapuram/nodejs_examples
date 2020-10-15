var rect={
    perimete:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};


function solve( l,b )
{
    if(l<=0 || b<=0 )console.log("check dimensions");
    else
    
    {console.log(rect.perimete(l,b));
          console.log(rect.area(l,b));
    }

}
solve(0,2);
solve(3,4);