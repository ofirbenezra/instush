import React, {Component} from 'react';
import InstushGallery from "./InstushGallery";
import $ from 'jquery'

class MyComponent extends React.Component {
    x = -1
    intervalId = "";
    entranceTypes = ["popUp", "opacity", "morph", "popUpFromCenter", "bounceImg", "bounceInLeftImg"];
    middleMovements = ["floating", "lightfloating", "rotate"];
    exitTypes = ["popUpReverse", "opacityReverse", "popUpFromCenterReverse","bounceOutLeftImg"];
    animationEvent;
    transitionEvent;

    constructor(){
        super();
        this.x = -1;
        this.images = [];
        this.parent = this;
        this.images[0] = "https://scontent.cdninstagram.com/vp/8168d4496a962fa5c3207191e4a3603b/5B8A4D32/t51.2885-15/sh0.08/e35/p640x640/30830377_1500374726757918_8596285117758963712_n.jpg";
        this.images[1] = "https://scontent.cdninstagram.com/vp/70f90043759bc4ec58e0f66e7fadf0a0/5B91A754/t51.2885-15/s640x640/sh0.08/e35/30856605_462719490826875_7331815766217457664_n.jpg";
        this.images[2] = "https://scontent.cdninstagram.com/vp/f7294ce74c847efb600d2fab5bbf8caf/5B853BF1/t51.2885-15/s640x640/sh0.08/e35/29740406_1867992409899334_6841505688435294208_n.jpg";
        this.images[3] = "https://scontent.cdninstagram.com/vp/ca1cdcbb50d70c51e059c27dacad1c4d/5B7A3124/t51.2885-15/s640x640/sh0.08/e35/29737268_1708358872555749_4548182955566039040_n.jpg";
        this.images[4] = "https://scontent.cdninstagram.com/vp/ea60e3739fa683589357cc4ff64a81d9/5B94596D/t51.2885-15/s640x640/sh0.08/e35/31109153_1999804640258622_189922332842655744_n.jpg";
        this.animationEvent = this.whichAnimationEvent();
        this.transitionEvent = this.whichTransitionEvent();
        this.intervalId = setInterval(this.callNextMovement.bind(this), 100);

    }

    getRandomInt(min, max) {
        return Math.floor((Math.random() * max) + min);
    };


/////////////////////////////// exit   ////////////////////////////////

    callReversePopup(exitTransition) {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        //imgElem.classList.remove("popUp");
        imgElem.classList.add("imageShowPos");
        imgElem.classList.add(exitTransition);

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.remove("imageShowPos")
                imgElem.classList.add("initialPos");
                imgElem.classList.remove(exitTransition);
                this.intervalId = setInterval(this.callNextMovement, 100);
            });
    }


    callReverseOpacity() {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.remove("imageShowPos")
        imgElem.classList.add("opacityReverse");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("initialPos");

                imgElem.classList.remove("opacity");
                imgElem.classList.remove("opacityReverse");
                this.intervalId = setInterval(this.callNextMovement, 100);
            });
    }

    callbounceOutLeft() {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.remove("imageShowPos")
        imgElem.classList.add("bounceOutLeftImg");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("initialPos");
                imgElem.classList.remove("bounceOutLeftImg");
                this.intervalId = setInterval(this.callNextMovement, 100);
            });
    }

/////////////////////////////// 2   ////////////////////////////////

    callLightFloating(){
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.remove("imageShowPos")
        imgElem.classList.add("lightfloating");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove("lightfloating");

                //callAfterMiddleMovement(transition);
                this.callExitMovement();
                //this.intervalId = setInterval(this.callReversePopup, 100);
            })
    }

    callFloating(){
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.remove("imageShowPos")
        imgElem.classList.add("floating");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove("floating");

                //callAfterMiddleMovement(transition);
                this.callExitMovement();
                //this.intervalId = setInterval(callReversePopup, 100);
            })
    }

    callRotate(){
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.remove("imageShowPos")
        imgElem.classList.add("rotate");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove("rotate");
                //callAfterMiddleMovement();
                this.callExitMovement();
            })
    }


/////////////////////////////// entrance   ////////////////////////////////


    callOpacity() {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.remove("initialPos");
        imgElem.classList.add("opacity");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove("opacity");
                //this.intervalId = setInterval(callReverseOpacity, 3000);
                this.callMiddleMovement();
            });
    }


    callPopup(transition) {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.add(transition);
        imgElem.classList.remove("initialPos");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove(transition);
                this.callMiddleMovement();
            });
    }

    callMorph() {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.add("morph");
        imgElem.classList.remove("initialPos");

        $(this).one(this.transitionEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove("morph");
                this.callMiddleMovement();
            });

    }

    callBounce(transition) {
        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        imgElem.classList.add(transition);
        imgElem.classList.remove("initialPos");

        $(this).one(this.animationEvent,
            function(event) {
                var imgElem = document.getElementById("imagesContainer");
                imgElem.classList.add("imageShowPos")
                imgElem.classList.remove(transition);
                this.callMiddleMovement();
            });

    }

//////////////////////////////////////////////////////////////////////////////

    callExitMovement(){

        clearInterval(this.intervalId);
        var exitTypesItem = this.exitTypes[this.getRandomInt(0,this.exitTypes.length)];
        switch(exitTypesItem){
            case "popUpReverse":
            case "popUpFromCenterReverse":

                console.log("popUpReverse");
                this.intervalId = setInterval(this.callReversePopup, 100, exitTypesItem);
                break;
            case "opacityReverse":
                console.log("opacityReverse");
                this.intervalId = setInterval(this.callReverseOpacity, 100);
                break;
            case "bounceOutLeftImg":
                console.log("bounceOutLeftImg");
                this.intervalId = setInterval(this.callbounceOutLeft, 100);
                break;

        }


    }

    callMiddleMovement(){

        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        //imgElem.classList.add("imageShowPos");
        var middleMovementsItem = this.middleMovements[this.getRandomInt(0,this.middleMovements.length)];
        switch(middleMovementsItem){
            case "floating":

                console.log("floating");
                this.intervalId = setInterval(this.callFloating, 100);

                break;
            case "lightfloating":
                console.log("lightfloating");
                this.intervalId = setInterval(this.callLightFloating, 100);

                break;
            case "rotate":
                console.log("rotate");
                this.intervalId = setInterval(this.callRotate, 100);

                break;
        }

    }


    callNextMovement(){

        console.log("callNextMovement");
        this.x = (this.x === this.images.length - 1) ? 0 : this.x+ 1;

        console.log("callNextMovement after x");

        clearInterval(this.intervalId);
        var imgElem = document.getElementById("imagesContainer");
        var img = document.getElementById("img");
        img.src = this.images[this.x];
        imgElem.classList.add("initialPos");

        console.log("callNextMovement after add");

        var flipTypeScreen = this.entranceTypes[this.getRandomInt(0,this.entranceTypes.length)];

        console.log("callNextMovement flipTypeScreen is " + flipTypeScreen);

        switch(flipTypeScreen){
            case "opacity":

                console.log("opacity");
                this.intervalId = setInterval(this.callOpacity.bind(this), 100);

                break;
            case "popUp":
            case "popUpFromCenter":

                console.log("popUp");
                this.intervalId = setInterval(this.callPopup.bind(this), 100, flipTypeScreen);

                break;
            case "morph":
                console.log("morph");
                this.intervalId = setInterval(this.callMorph.bind(this), 100);

                break;
            case "bounceImg":
            case "bounceInLeftImg":
                console.log("bounceImg");
                this.intervalId = setInterval(this.callBounce.bind(this), 100, flipTypeScreen);
                break;
        }

    }


    whichAnimationEvent(){
        var t,
            el = document.createElement("fakeelement1");

        var animations = {
            "animation"      : "animationend",
            "OAnimation"     : "oAnimationEnd",
            "MozAnimation"   : "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        }

        for (t in animations){
            if (el.style[t] !== undefined){
                return animations[t];
            }
        }
    }

    //this.animationEvent = this.whichAnimationEvent();

    whichTransitionEvent(){
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        }

        for (t in transitions){
            if (el.style[t] !== undefined){
                return transitions[t];
            }
        }
    }

    render() {
        return <div id="imagesContainer">
            <img id="img" className="initialPos"
                 src="https://scontent.cdninstagram.com/vp/ea60e3739fa683589357cc4ff64a81d9/5B94596D/t51.2885-15/s640x640/sh0.08/e35/31109153_1999804640258622_189922332842655744_n.jpg">
            </img>
            <div id="likesCounter"><h1>9</h1></div>
            <img id="imgHeart" src={ require('./images/heart.png') }/>

            <div id="userDataContainer">
                <img id="imgUserData" src={ require('./images/userImage.png') }></img>
                <div id="userDataName"><h1>Shlomi T</h1></div>
            </div>
        </div>
    }
}

export default MyComponent;