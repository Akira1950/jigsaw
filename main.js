        enchant();
        window.onload = function () {
            var game = new Game(320, 320);
            game.fps = 24;
            game.preload('gogh.png','floor.gif','wall.gif');

            //game.rootScene.backgroundColor = "blue";
            game.onload = function () {
                //物理シミュレーションの世界を設定(y軸方向に重力 9.8[m/s^2])
                var physicsWorld = new PhysicsWorld(0, 9.8);

                //ジョイントの表示用スプライト
                var jointShowSprite = new Sprite(game.width, game.height);
                game.rootScene.addChild(jointShowSprite);

                //四角形の作成
                var box = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box.image = game.assets['gogh.png'];
                box.frame = 0;
                box.position = {x: 24,y: 104};
                game.rootScene.addChild(box);
                var box1 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box1.image = game.assets['gogh.png'];
                box1.frame = 1;
                box1.position = {x: 54,y: 72};
                game.rootScene.addChild(box1);
                var box2 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box2.image = game.assets['gogh.png'];
                box2.frame = 2;
                box2.position = {x: 84,y: 40};
                game.rootScene.addChild(box2);
                var box3 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box3.image = game.assets['gogh.png'];
                box3.frame = 3;
                box3.position = {x: 114,y: 8};
                game.rootScene.addChild(box3);
                var box4 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box4.image = game.assets['gogh.png'];
                box4.frame = 4;
                box4.position = {x: 292,y: 104};
                game.rootScene.addChild(box4);
                var box5 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box5.image = game.assets['gogh.png'];
                box5.frame = 5;
                box5.position = {x: 262,y: 72};
                game.rootScene.addChild(box5);
                var box6 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box6.image = game.assets['gogh.png'];
                box6.frame = 6;
                box6.position = {x: 232,y: 40};
                game.rootScene.addChild(box6);
                var box7 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box7.image = game.assets['gogh.png'];
                box7.frame = 7;
                box7.position = {x: 202,y: 8};
                game.rootScene.addChild(box7);
                var box8 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box8.image = game.assets['gogh.png'];
                box8.frame = 8;
                box8.position = {x: 64,y: 164};
                game.rootScene.addChild(box8);
                var box9 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box9.image = game.assets['gogh.png'];
                box9.frame = 9;
                box9.position = {x: 94,y: 132};
                game.rootScene.addChild(box9);
                var box10 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box10.image = game.assets['gogh.png'];
                box10.frame = 10;
                box10.position = {x: 124,y: 100};
                game.rootScene.addChild(box10);
                var box11 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box11.image = game.assets['gogh.png'];
                box11.frame = 11;
                box11.position = {x: 154,y: 68};
                game.rootScene.addChild(box11);
                var box12 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box12.image = game.assets['gogh.png'];
                box12.frame = 12;
                box12.position = {x: 252,y: 164};
                game.rootScene.addChild(box12);
                var box13 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box13.image = game.assets['gogh.png'];
                box13.frame = 13;
                box13.position = {x: 222,y: 132};
                game.rootScene.addChild(box13);
                var box14 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box14.image = game.assets['gogh.png'];
                box14.frame = 14;
                box14.position = {x: 192,y: 100};
                game.rootScene.addChild(box14);
                var box15 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box15.image = game.assets['gogh.png'];
                box15.frame = 15;
                box15.position = {x: 162,y: 164};
                game.rootScene.addChild(box15);
                //四角形の作成
                var box16 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box16.image = game.assets['gogh.png'];
                box16.frame = 16;
                box16.position = {x: 44,y: 134};
                game.rootScene.addChild(box16);
                var box17 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box17.image = game.assets['gogh.png'];
                box17.frame = 17;
                box17.position = {x: 74,y: 102};
                game.rootScene.addChild(box17);
                var box18 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box18.image = game.assets['gogh.png'];
                box18.frame = 18;
                box18.position = {x: 104,y: 70};
                game.rootScene.addChild(box18);
                var box19 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box19.image = game.assets['gogh.png'];
                box19.frame = 19;
                box19.position = {x: 134,y: 38};
                game.rootScene.addChild(box19);
                var box20 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box20.image = game.assets['gogh.png'];
                box20.frame = 20;
                box20.position = {x: 274,y: 134};
                game.rootScene.addChild(box20);
                var box21 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box21.image = game.assets['gogh.png'];
                box21.frame = 21;
                box21.position = {x: 244,y: 102};
                game.rootScene.addChild(box21);
                var box22 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box22.image = game.assets['gogh.png'];
                box22.frame = 22;
                box22.position = {x: 214,y: 70};
                game.rootScene.addChild(box22);
                var box23 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box23.image = game.assets['gogh.png'];
                box23.frame = 23;
                box23.position = {x: 184,y: 38};
                game.rootScene.addChild(box23);
                var box24 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box24.image = game.assets['gogh.png'];
                box24.frame = 24;
                box24.position = {x: 80,y: 196};
                game.rootScene.addChild(box24);
                var box25 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box25.image = game.assets['gogh.png'];
                box25.frame = 25;
                box25.position = {x: 110,y: 164};
                game.rootScene.addChild(box25);
                var box26 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box26.image = game.assets['gogh.png'];
                box26.frame = 26;
                box26.position = {x: 140,y: 132};
                game.rootScene.addChild(box26);
                var box27 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box27.image = game.assets['gogh.png'];
                box27.frame = 27;
                box27.position = {x: 240,y: 196};
                game.rootScene.addChild(box27);
                var box28 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box28.image = game.assets['gogh.png'];
                box28.frame = 28;
                box28.position = {x: 210,y: 164};
                game.rootScene.addChild(box28);
                var box29 = new PhyBoxSprite(32, 32, DYNAMIC_SPRITE, 1.0, 0.5, 0, true);
                box29.image = game.assets['gogh.png'];
                box29.frame = 29;
                box29.position = {x: 180,y: 132};
                game.rootScene.addChild(box29);

                //軸
                var axis = new PhyCircleSprite(2, STATIC_SPRITE, 1.0, 0.5, 0.3, true);

                //床生成
                var floor = new PhyBoxSprite(320, 8, STATIC_SPRITE, 1.0, 0.5, 0, false);
                floor.image = game.assets["floor.gif"];
                floor.position = { x: 160, y: 304 };
                game.rootScene.addChild(floor);

                //壁の作成
                var floor = new PhyBoxSprite(8, 300, STATIC_SPRITE, 0, 0, 0.3, false);
                floor.image = game.assets["wall.gif"];
                floor.position = {x: 312,y: 150};
                game.rootScene.addChild(floor);
                var floor = new PhyBoxSprite(8, 300, STATIC_SPRITE, 0, 0, 0.3, false);
                floor.image = game.assets["wall.gif"];
                floor.position = {x: 8,y: 150};
                game.rootScene.addChild(floor);

                box.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box);
                 });
                box1.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box1);
                 });
                box2.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box2);
                 });
                box3.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box3);
                 });
                box4.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box4);
                 });
                box5.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box5);
                 });
                box6.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box6);
                 });
                box7.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box7);
                 });
                box8.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box8);
                 });
                box9.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box9);
                 });
                box10.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box10);
                 });
                box11.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box11);
                 });
                box12.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box12);
                 });
                box13.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box13);
                 });
                box14.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box14);
                 });
                box15.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box15);
                 });
                box16.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box16);
                 });
                box17.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box17);
                 });
                box18.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box18);
                 });
                box19.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box19);
                 });
                box20.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box20);
                 });
                box21.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box21);
                 });
                box22.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box22);
                 });
                box23.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box23);
                 });
                box24.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box24);
                 });
                box25.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box25);
                 });
                box26.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box26);
                 });
                box27.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box27);
                 });
                box28.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box28);
                 });
                box29.addEventListener('touchstart', function(event) { //eventにタッチされた座標が入ってくる
                        this.applyImpulse(new b2Vec2(0,-1));
                        axis.position = { x: this.x + 16 , y: this.y };
                        game.rootScene.addChild(axis); // シーンに追加
                        var joint = new PhyDistanceJoint(axis, box29);
                 });

                box.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box1.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box2.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box3.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box4.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box5.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box6.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box7.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box8.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box9.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box10.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box11.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box12.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box13.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box14.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box15.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box16.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box17.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box18.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box19.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box20.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box21.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box22.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box23.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box24.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box25.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box26.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box27.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box28.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });
                box29.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
                        axis.destroy();
                 });

	// シーンにタッチ移動時イベントを登録
	game.rootScene.addEventListener("touchmove", function(event) {
	    // タッチした位置に移動
                    axis.x = event.x;
                    axis.y = event.y;
                    if(axis.y > 267){
                          axis.y = 267;
                    }
                    if(axis.x > 290){
                          axis.x = 290;
                    }
                    if(axis.x < 26){
                          axis.x = 26;
                    }
	});

                game.rootScene.addEventListener(enchant.Event.ENTER_FRAME, function (e) {
                    physicsWorld.step(game.fps); //物理シミュレーション内の時間を進める
                });
            };
            game.start();   // ゲームスタート
        }