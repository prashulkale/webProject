


var smcircle = document.querySelector("#smcircle");

var arrow = document.querySelector(".arrowsvg");

var wheel = document.querySelector(".wheelsvg");

var main = document.querySelector("#main");

var ttxt = document.querySelector('.ttxt');

var text = document.querySelector('.tt');

var circle = document.querySelector('.circle');

var img = document.querySelector('.img img');

var icon = document.querySelector('.icon');

var rightnav = document.querySelector('#rightnav');

var rightnavh3 = document.querySelectorAll('#rightnav h3');

var flag = 0;
// function menuClick(){
    
    icon.addEventListener('click',function(){
        if(flag === 0){
            rightnav.style.width = '230px';
                        for(let i of rightnavh3){
                            i.style.opacity = '1';
                        }
                         rightnav.style.backgroundColor = 'black';
                         flag = 1;
        }
        else{
            rightnav.style.width = '20px';
            for(let i of rightnavh3){
                i.style.opacity = '0';
            }
            
            
            rightnav.style.backgroundColor = 'transparent';
                         flag =0;
        }
    })
// }

// mouseClick ();

function mouseopacity(){

        document.querySelector('body').addEventListener('mouseleave',function(){
            smcircle.style.opacity = '0';
        })
        document.querySelector('body').addEventListener('mousemove',function(){
            smcircle.style.opacity = '1';
        })
    }

mouseopacity();




function smCircle(){
    window.onmousemove = function(e){
        smcircle.style.top = e.clientY + 'px';
        smcircle.style.left = e.clientX + 'px';
    }
    
}
  
smCircle();




function textillate(){

    
    $('.xyz').textillate({ in: { effect: 'fadeInUp' } });
    
    
    $('.tt').textillate({ in: { effect: 'fadeInUp' } });
}

textillate();




function rotateicon(){
    icon.addEventListener('mousemove',function(){
        icon.style.transform = 'rotate(-90deg)';
        icon.style.transition = '.5s';
    })
    icon.addEventListener('mouseleave',function(){
        icon.style.transform = 'rotate(-90deg)';
        icon.style.transition = '0s';
    })


}

rotateicon();



function mixBlandMode(){
document.querySelectorAll('.insider').forEach( elem => {


    elem.addEventListener('mousemove',function(d){
        smcircle.style.width = '55px';
        smcircle.style.height = '55px';
        smcircle.style.backgroundColor = 'white';
        smcircle.style.mixBlendMode = 'difference';
        smcircle.style.borderColor = 'rgba(0,0,0, 0)';
       
        arrow.style.opacity = '1';
        wheel.style.opacity = '1';
        
        main.style.backgroundColor = `${d.target.dataset.color}`;
    })


    elem.addEventListener('mouseleave',function(){
        smcircle.style.width = '15px';
        smcircle.style.height = '15px';
        smcircle.style.backgroundColor = "transparent"; 
        smcircle.style.mixBlendMode = 'initial';
        smcircle.style.borderColor = 'black';
        arrow.style.opacity = '0';
        wheel.style.opacity = '0';

        
        main.style.backgroundColor = '#f8f8f8';

    })

});

}
mixBlandMode();



function textcolor(){
    document.querySelectorAll('.img').forEach(function(w){
        w.addEventListener('mousemove',function(){
            document.querySelectorAll('#abc').forEach(function(e){
            e.style.color = 'white';
            })

        })
        w.addEventListener('mouseleave',function(){
            document.querySelectorAll('#abc').forEach(function(e){
            e.style.color = 'black';
            })

        })
    })
}

textcolor();



function mixBlandMode1(){
    document.querySelectorAll('.enlarge1').forEach(function(elem){
        elem.addEventListener('mousemove',function(){
            smcircle.style.transform =  'translate(-50%,-50%)';

            smcircle.style.width = '60px';
            smcircle.style.height = '60px';
            smcircle.style.backgroundColor = 'white';
            smcircle.style.mixBlendMode = 'difference';
        })   
        elem.addEventListener('mouseleave',function(){
            smcircle.style.width = '15px';
            smcircle.style.height = '15px';
            smcircle.style.backgroundColor = 'transparent';
            icon.style.transform = 'rotate(90deg)';
               
            smcircle.style.borderColor = 'black';
            smcircle.style.mixBlendMode = 'initial';
        })
    })
}
mixBlandMode1();



function footer(){
    var arr = [
        {a:'TALK DISISINE'},
        {a:'MEET ON ZOOM'},
        {a:'WORK TOGATHER'},
        {a:'GARB COFFEE'},
        {a:'DO LUNCH'}
    ]
    
    
    var clutter ='';
    arr.forEach(function(e){
        
    
        clutter += `<h1 >LET’S <span>${a}</span></h1>` ;
            document.querySelector('.footer h1').innerHTML = clutter;
        })
    
    
    
}


function moveCircle(){s
        circle.addEventListener('mousemove',function(){
            circle.style.width = '160px';
            circle.style.height = '160px';

       
        })
        circle.addEventListener('mouseleave',function(){
            circle.style.width = '140px';
            circle.style.height = '140px';
       
        })
};

moveCircle();











































