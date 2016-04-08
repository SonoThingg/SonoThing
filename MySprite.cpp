//
//  MySprite.cpp
//  Box2DDemo
//
//  Created by yangxin on 16-2-22.
//
//
//修改到分支
#include "MySprite.h"
MySprite *MySprite::create()
{
    MySprite *s = new MySprite();
    if(s && s->init())
    {
        s->autorelease();
        return s;
    }
    CC_SAFE_DELETE(s); //if(s) delete s
    return NULL;
}
bool MySprite::init()
{
    if(!Sprite::initWithFile("CloseNormal.png"))
    {
        return false;
    }
    _hp = 5;
    return true;
}
void MySprite::setHp(int h)
{
    _hp = h;
}
int MySprite::getHp()
{
    return _hp;
}