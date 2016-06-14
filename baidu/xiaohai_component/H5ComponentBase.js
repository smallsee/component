/* 基本图文组件对象 */

var H5ComponentBase = function(name,cfg){
    var cfg = cfg || {};
    var id = ('h5_c_'+Math.random()).replace('.','_');
    var cls =' h5_component_'+cfg.type  ;
    var component = $('<div class="h5_component '+cls+' h5_component_name_'+name + ' "  id="'+id+'">');

    cfg.text   && component.text(cfg.text); //插入文字
    cfg.width  && component.width(cfg.width); //设置宽
    cfg.height && component.height(cfg.height); //设置高
    cfg.css && component.css( cfg.css );
    cfg.bg  && component.css('backgroundImage','url('+cfg.bg+')');

    if (cfg.center === true){
        component.css({
            marginLeft : (cfg.width/2 * -1) + 'px',
            left : '50%'
        })
    }

    // ...很多自定义参数
    component.on('onLoad',function(){

        component.addClass(cls+'_load').removeClass(cls+'_leave');
        cfg.animateIn && component.animate(cfg.animateIn);
        return false;
    });
    component.on('onLeave',function(){
        component.addClass(cls+'_leave').removeClass(cls+'_load');
        cfg.animateOut && component.animate(cfg.animateOut);
        return false;
    })


    return component;

}