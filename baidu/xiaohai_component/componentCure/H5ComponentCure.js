/* 基本图文组件对象 */

var H5ComponentCure = function(name,cfg){

    var component = new H5ComponentBase(name,cfg);
    var box = $('<div class="box">');
   // var box_left = $('<div class="box_left">');
    var w = cfg.width;
    var h = cfg.height;
    box.css({
        width : w,
        height : h ,
        transformOrigin: w/2 + 'px ' + h/2 +'px ' + (h/2)*-1 +'px ',
    });
    //box_left.css({
    //    width : w,
    //    height : h ,
    //    transformOrigin: w/2 + 'px ' + h/2 +'px ' + (h/2)*-1 +'px ',
    //});

    component.append(box);
    //box_left.append(box);

    for (var i=0;i<cfg.data.length;i++){
        var item = cfg.data[i];

        var color = item[1];
        var cure = $('<div class="cure cure'+i+'">');
        var text = $('<div class="text text'+i+'">');
        text.text(item[0]);
        cure.append(text);
        cure.css({
            width   : w,
            height  : h,
            position: 'absolute',
            backgroundColor : color,
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat'
        });

        switch (item[2]){
            case 1 :
                cure.css({
                    top : -h,
                    left : 0,
                    transformOrigin:'bottom',
                    transform:'rotateX(90deg)'

                });
                break;
            case 2 :
                cure.css({
                    top : h,
                    left : 0,
                    transformOrigin:'top',
                    transform:'rotateX(-90deg)'

                });
                break;

            case 3 :
                cure.css({
                    top : 0,
                    left : 0,

                });
                break;
            case 4 :
                cure.css({
                    top : 0,
                    left : 0,
                    transform:"translateZ(-"+h+"px) rotateX(180deg)"
                });
                break;
            case 5 :
                cure.css({
                    top : 0,
                    left : -w,
                    transformOrigin:'right',
                    transform:'rotateY(-90deg)'
                });
                break;
            case 6 :

                cure.css({
                    top : 0,
                    left : w,
                    transformOrigin:'left',
                    transform:'rotateY(90deg)'

                });
                break;
        }



        if (item[3]){
            cure.css('backgroundImage','url('+item[3]+')');
        }


        box.append(cure);
    }

    var l =0;
    //var n = 4;
    var n =0 ;
    var m =0;
    var z =0;
    $('body').click(function(){
            turn();
    })

    function turn(){

        setTimeout(function() {



            var anim = cfg.animate[l];
            //var m = (n/4) >> 0;
            //console.log(l);
            //console.log(n);
            //console.log(m);
            switch (anim){
                case 'top' :
                    m++;
                    console.log(m);
                    box.css({

                        transform:'rotateX('+90*m+'deg) rotateY('+90*n+'deg) rotateZ('+90*z+'deg)'
                    });
                    break;
                case 'right' :


                    if (m%2!=0){
                        z++;
                    }else{
                        n++;
                    }
                    console.log(n);
                    box.css({
                        transform:'rotateX('+90*m+'deg) rotateY('+90*n+'deg) rotateZ('+90*z+'deg)'
                    });
                    break;
                case 'bottom' :
                    m--;
                    console.log(m);
                    box.css({
                        transform:'rotateX('+90*m+'deg) rotateY('+90*n+'deg) rotateZ('+90*z+'deg)'
                    });
                    break;
                case 'left' :
                    if (m%2!=0){
                        z--;
                    }else{
                        n--;
                    }
                    console.log(n);
                    box.css({
                        transform:'rotateX('+90*m+'deg) rotateY('+90*n+'deg) rotateZ('+90*z+'deg)'
                    });
                    break;
            }
            l++;

            if (l<4) {
                turn();
            }else{
                l=0;
                turn();
            }
        }, 1500);

    }




    return component;

}