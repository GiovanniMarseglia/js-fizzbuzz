for(let i=1; i<101; i++){
    
    
    if(i % 3){ 
        if(i % 5){
            document.getElementById("roww").innerHTML +=  (`<div class="col-2 g-5"><div class="bg-primary d-flex justify-content-center align-items-center" style="aspect-ratio:1; width:150px;" > ${i}</div>
                
    </div>`)
        }else{
            document.getElementById("roww").innerHTML +=  (`<div class="col-2 g-5" ><div class="bg-warning d-flex justify-content-center align-items-center" style="aspect-ratio:1; width:150px;" > Buzz </div>
                
    </div>`)
        }
    }else{ 

        if(i % 5){
            document.getElementById("roww").innerHTML +=  (`<div class="col-2 g-5" ><div class="bg-success d-flex justify-content-center align-items-center" style="aspect-ratio:1; width:150px;" > Fizz </div>
                
    </div>`)
        }else{
            document.getElementById("roww").innerHTML +=  (`<div class="col-2 g-5" ><div class="bg-danger d-flex justify-content-center align-items-center" style="aspect-ratio:1; width:150px;" > FizzBuzz </div>
                
    </div>`)
        }

    }

}