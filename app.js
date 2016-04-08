
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        var sprite = new cc.Sprite(res.HelloWorld_png);
        sprite.x = size.width/2;
        sprite.y = size.height/2;
        this.addChild(sprite);

        var label = new cc.LabelTTF("HelloWorld", "kaiti", 32);
        label.color = cc.color(255, 0, 0, 1);
        label.x = size.width/2;
        label.y = 400;
        this.addChild(label);

        var item = new cc.MenuItemImage(res.CloseNormal_png, res.CloseSelected_png, function
            (sender) {
            alert(sender.tag);
        } );
        item.tag = 101;



        var item1 = new cc.MenuItemImage(res.CloseNormal_png, res.CloseNormal_png, function(sender){ alert(sender.tag)});
        var item2 = new cc.MenuItemImage(res.CloseSelected_png, res.CloseSelected_png, function (sender) {alert(sender.tag)});

        item1.tag = 102;
        item2.tab = 103;9

        //var self = this;
        var itemtag = new cc.MenuItemToggle(item1, item2);

        itemtag.setCallback(function () {
            //alert("itemtag");
            var scene = new GameScene();
            var ts = new cc.TransitionJumpZoom(2.0, scene);
            cc.director.runScene(ts);

            //var layer = new GameLayer();
            //self.addChild(layer);
        })

        itemtag.x = size.width/3;
        itemtag.y = size.height/3;

        var menu = new cc.Menu(item, itemtag);
        this.addChild(menu);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

