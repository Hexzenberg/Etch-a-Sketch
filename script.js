document.addEventListener("DOMContentLoaded",function(){//loads the dom before executing rest of the code
    const but=document.querySelector('#but');
    but.style.margin='10px';
    const container=document.querySelector('#container');
    container.style.height='475px';
    container.style.width='475px';
    const divs=[];
    for(let i=0;i<256;i++){
      const div=document.createElement('div');
      div.style.backgroundColor='lightyellow';
      let a=Math.floor(475/16);
      div.style.width=`${a}px`;
      div.style.height=`${a}px`;
      div.style.border='1px solid yellow';
      div.style.margin='1px';
      divs.push(div);//pushing div into the divs array
      container.appendChild(div);
    }
    container.style.display='grid';
    container.style.gridTemplateColumns='repeat(16,0fr)';
    container.style.gridTemplateRows='repeat(16,0fr)';
    but.addEventListener('click',function(){
        const numGrids=prompt('Enter the number of grids:');
        if(numGrids){
            const numGridsParsed=parseInt(numGrids,10);
            if(!isNaN(numGridsParsed)&&numGridsParsed>=1){//Clearing existing divs if the number entered is valid
                divs.forEach(function(div){
                    container.removeChild(div);
                });
                divs.length=0;//Creating new grids
                const gridColumns=Math.sqrt(numGridsParsed);
                let a=Math.floor(475/gridColumns);
                container.style.gridTemplateColumns=`repeat(${gridColumns},0fr)`;
                container.style.gridTemplateRows=`repeat(${gridColumns},0fr)`;
                for(let i=0;i<numGridsParsed;i++){
                    const div=document.createElement('div');
                    div.style.backgroundColor='lightyellow';
                    div.style.width=`${a}px`;
                    div.style.height=`${a}px`;
                    div.style.border='1px solid yellow';
                    div.style.margin='1px';
                    divs.push(div);
                    container.appendChild(div);
                }
                divs.forEach((div)=>{
                    div.addEventListener('mouseover',function(){
                        div.style.backgroundColor='skyblue';
                        div.style.borderColor='rgb(29,172,172)';
                    });
                    div.addEventListener('mouseout',function(){
                        div.style.transition='background-color 250ms ease-out 50ms';//syntax:transition='property duration timing-function delay';
                        div.style.backgroundColor='lightyellow';
                        div.style.border='1px solid yellow';
                    });
                });
            }
            else{
                alert('Please enter a valid number of grids');
            }
        }
    });
    divs.forEach((div)=>{
        div.addEventListener('mouseover',function(){
            div.style.backgroundColor='skyblue';
            div.style.borderColor='rgb(29,172,172)';
        });
        div.addEventListener('mouseout',function(){
            div.style.transition='background-color 250ms ease-out 50ms';//syntax:transition='property duration timing-function delay';
            div.style.backgroundColor='lightyellow';
            div.style.border='1px solid yellow';
        });
    });
});
