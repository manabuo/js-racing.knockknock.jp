/// <reference path="../../../lib/jquery.d.ts"/>
/// <reference path="../../../lib/box2dweb.d.ts"/>
/// <reference path="../../../lib/three.d.ts"/>
/// <reference path="../../../lib/lib.ts"/>
/// <reference path="../../../imjcart/logic/info/RunningPath.ts"/>

module imjcart.logic.info {

    export class CarInfo {

        private _name:string = null;
        private _x:number = null;
        private _y:number = null;
        private _bodyAngle:number = null;
        private _wheelAngle:number = null;
        private _speed:number = null;
        private _power:number = null;
        private _gear:number = null;
        private _direction:number = null;
        private _colorBody:string = null;
        private _colorWing:string = null;
        private _colorDriver:string = null;
        private _runningPath:imjcart.logic.info.RunningPath = null;

        constructor(x:number = 0, y:number = 0, bodyAngle:number = 0, wheelAngle:number = 0, speed:number = 0, power:number = 0, gear:number = 0, direction:number = 0, colorBody:string = null, colorWing:string = null, colorDriver:string = null, name:string = null) {
            this._x = x;
            this._y = y;
            this._bodyAngle = bodyAngle;
            this._wheelAngle = wheelAngle;
            this._speed = speed;
            this._power = power;
            this._gear = gear;
            this._direction = direction;
            this._colorBody = colorBody;
            this._colorWing = colorWing;
            this._colorDriver = colorDriver;
            this._name = name;
            this._runningPath = new imjcart.logic.info.RunningPath();
        }

        public get runningPath():imjcart.logic.info.RunningPath {
            return this._runningPath;
        }

        public set name(value:string) {
            this._name = value;
        }

        public get name():string {
            return this._name;
        }

        public set x(value:number) {
            this._x = value;
        }

        public get x():number {
            return this._x;
        }

        public set y(value:number) {
            this._y = value;
        }

        public get y():number {
            return this._y;
        }

        public set bodyAngle(value:number) {
            this._bodyAngle = value;
        }

        public get bodyAngle():number {
            return this._bodyAngle;
        }

        public set wheelAngle(value:number) {
            this._wheelAngle = value;
        }

        public get wheelAngle():number {
            return this._wheelAngle;
        }

        public set speed(value:number) {
            this._speed = value;
        }

        public get speed():number {
            return this._speed;
        }

        public set power(value:number) {
            this._power = value;
        }

        public get power():number {
            return this._power;
        }

        public set gear(value:number) {
            this._gear = value;
        }

        public get gear():number {
            return this._gear;
        }

        public set direction(value:number) {
            this._direction = value;
        }

        public get direction():number {
            return this._direction;
        }

        public set colorBody(value:string) {
            this._colorBody = value;
        }

        public get colorBody():string {
            return this._colorBody;
        }

        public set colorWing(value:string) {
            this._colorWing = value;
        }

        public get colorWing():string {
            return this._colorWing;
        }

        public set colorDriver(value:string) {
            this._colorDriver = value;
        }

        public get colorDriver():string {
            return this._colorDriver;
        }

    }

}