/**
 * Created by student on 16/3/9.
 */
var GameLayer;
GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var bg = new cc.Sprite(res.HelloWorld_png);
        //bg.x = cc.winSize.width/2;
        //bg.y = cc.winSize.height/2;
        bg.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        this.addChild(bg);
        //this.actionDemo();
        //this.scheduleDemo();
        //this.touchDemo();
        //this.customDemo();
        //this.musicDemo();
        //this.saveData();
        //this.pariticleDemo();
        //this.uiDemo();
        this.eidtBoxDemo();
        return true;
    },
    scheduleDemo: function () {
        this.scheduleUpdate();
        //this.schedule(this.update, 1, cc.REPEAT_FOREVER, 0);
    },
    update: function (t) {
        console.log(t);
        console.log("helloworld");
        this.unscheduleUpdate();
        //this.unschedule(this.update);

    },
    actionDemo: function () {

        var sprite = new cc.Sprite(res.CloseNormal_png);
        sprite.attr
        ({
            x: 100,
            y: 100
        });
        this.addChild(sprite);
        var move = cc.moveTo(2.0, cc.p(300, 300));
        var jt = cc.jumpTo(2.0, cc.p(500, 500), 10, 10);
        var seq = cc.sequence(move, jt);
        sprite.runAction(seq);

        sprite.tag = 102;

        var call = cc.callFunc(function (sender, a) {
            alert(sender.tag);//101 102 102
            alert(a);//1 1 1
            alert(this.tag);//101 101 102
        }, this, 1);
        this.tag = 101;
        sprite.runAction(call);

        //帧动画
        //cc.SpriteFrameCache.addSpriteFrame(,)

        cc.spriteFrameCache.addSpriteFrames(res.minerActon_plist, res.minerAction_png);
        var sprite1 = new cc.Sprite("#miner_0701.png");
        sprite1.attr({
            x: 400,
            y: 300
        });
        this.addChild(sprite1);
        var frames = [];
        for (var i = 701; i <= 710; i++) {
            var picName = "miner_0" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(picName);
            frames.push(frame);
        }
        var animation = new cc.Animation(frames, 0.1, true);
        var animate = new cc.Animate(animation);
        sprite1.runAction(cc.repeatForever(animate));

    },
    touchDemo: function () {
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var p = touch.getLocation();
                console.log(p.x);
                console.log(p.y);
                return true;
            },
            onTouchMoved: function (touch, event) {

            },
            onTouchEnded: function (touch, event) {
                console.log("onTouchEnded");
            }
        });
        cc.eventManager.addListener(listener, this);

    },
    customDemo: function () {
        console.log("HHH");
        cc.eventManager.addCustomListener("HelloWorld", function () {
            console.log("HelloWorld");
            alert("HelloWorld");
        });
        //下面层中
        var call = cc.callFunc(function () {
            cc.eventManager.dispatchCustomEvent("HelloWorld");
            console.log("WorldHello");
        });
        var seq = cc.sequence(cc.delayTime(3), call);
        this.runAction(seq);
    },
    musicDemo: function () {
        cc.audioEngine.playMusic(res.backmsic_mp3, true);
    },
    saveData: function () {
        cc.sys.localStorage.setItem("music", true);//保存
        var ls = cc.sys.localStorage.getItem("music");//获取
        //cc.sys.localStorage.removeItem("music");//删除
        console.log("12345566");
        console.log(ls);

    },
    pariticleDemo: function () {
        //var p = new cc.ParticleSystem(res.mystar1_plist);
        //p.texture = cc.textureCache.addImage(res.mystar1_png);
        //p.x = cc.winSize.width/2;
        //p.y = cc.winSize.height/2;
        //p.duration = -1;
        //this.addChild(p);

        var p1 = new cc.ParticleSnow();
        p1.texture = cc.textureCache.addImage(res.CloseNormal_png);
        p1.x = cc.winSize.width / 2;
        p1.y = cc.winSize.height / 2;
        p1.duraction = 30;
        this.addChild(p1);

        var p2 = new cc.ParticleFlower();
        p2.x = cc.winSize.width / 3;
        p2.y = cc.winSize.height / 3;
        p2.duraction = 10;
        this.addChild(p2);
    },

    uiDemo: function () {
        var starBtn = new ccui.Button(res.CloseNormal_png);
        starBtn.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        starBtn.addTouchEventListener(function (sender) {
            console.log("Button was Clicked!");
        });
        this.addChild(starBtn);

    },

    eidtBoxDemo: function () {

        var nom9spriteBg = new cc.Scale9Sprite(res.CloseNormal_png);
        var pre9spriteBg = new cc.Scale9Sprite(res.CloseSelected_png);
        var dis9spriteBg = new cc.Scale9Sprite(res.CloseNormal_png);

        var edtBox = new cc.EditBox(cc.size(249, 44), nom9spriteBg, pre9spriteBg, dis9spriteBg);
        edtBox.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        edtBox.setFontSize(20);
        edtBox.setDelegate(this);
        edtBox.setMaxLength(8);
        edtBox.setFontColor(cc.color(255, 0, 0, 255));
        this.addChild(edtBox);

    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});