export default () => {
    const witcher= $('.witcher');
    const sparks_back= $('.sparks_back');
    const sparks_front= $('.sparks_front');

    const layer= $('.main');

    layer.mousemove(function(e){
        const ivalueX= (e.pageX * -1 / 30);
        const cvalueX= (e.pageX * -1 / 40);
        const cvalueY= (e.pageY * -1 / 60);
            witcher.css('transform', 'translate3d('+ivalueX+'px,'+0+'px, 0)');
            sparks_back.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
            sparks_front.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
    });
}