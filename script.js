const flour=document.getElementById("flour"); 
const water=document.getElementById("water");
const starter=document.getElementById("starter");
const s_flour=document.getElementById("s_flour"); 
const s_water=document.getElementById("s_water");
const s_starter=document.getElementById("s_starter");
const salt=document.getElementById("salt");
const hydration=document.getElementById("hydration");
const clear=document.getElementById("clear");

const res= document.getElementsByName("res")


flour.addEventListener("input",()=>{
    
        water.value=Math.ceil((flour.value/100)*67)
        starter.value=Math.ceil((flour.value/100)*25)
        s_flour.innerHTML="Flour:"+ (flour.value|| 0)+"g";
        s_water.innerHTML="Water:"+water.value+"ml";
        s_starter.innerHTML="Starter:"+starter.value+"g";
        salt.innerHTML="Salt:"+ Math.ceil((flour.value/100)*2) + "g";
        if(flour.value && flour.value==0 ){
            hydration.innerHTML="Hydration:0%";
        }else{
            hydration.innerHTML="Hydration:71%";
        }
        
})
function cleardiv2(){
        s_flour.innerHTML="Flour:"+0+"g";
        s_water.innerHTML="Water:"+0+"ml";
        s_starter.innerHTML="Starter:"+0+"g";
        salt.innerHTML="Salt:"+0+ "g";
        hydration.innerHTML="Hydration:"+0+"%";
    }

// clear.addEventListener("onclick",()=>{
   
//     // res.forEach((element)=>{
//         console.log("element");
//     // })
// })
