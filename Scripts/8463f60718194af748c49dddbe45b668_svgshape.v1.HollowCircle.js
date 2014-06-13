define.skin('svgshape.v1.svg_8463f60718194af748c49dddbe45b668.HollowCircle', function (def) {
    def.inherits('core.managers.skin.BaseSkin2');
    def.skinParams([
        {'id':'strokewidth','type':Constants.SkinParamTypes.SIZE, 'defaultValue': '1px'},
        {'id':'fillcolor', 'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_11'},
        {'id':'stroke','type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'}
    ]);
    def.html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">' + 
        '<g>' + 
        '<ellipse cx="77.218" cy="70.908" rx="64.368" ry="64.368"/>' + 
        '</g>' + 
        '</svg>'
    );
    def.css([
        'svg {width: 100%; height: 100%; position: absolute; left:0; top:0; right:0; bottom:0; margin:auto;}',
        'ellipse {fill: [fillcolor]; stroke: [stroke]; stroke-width:[strokewidth];}'
    ]);
});