/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
//Encrypted Password script- By Rob Heslop
//Script featured on Dynamic Drive 
//Visit http://www.dynamicdrive.com 

function submitentry(){
password = document.password1.password2.value.toLowerCase()
username = document.password1.username2.value.toLowerCase()
passcode = 1
usercode = 1
for(i = 0; i < password.length; i++) {
passcode *= password.charCodeAt(i);
}
for(x = 0; x < username.length; x++) {
usercode *= username.charCodeAt(x);
}
if(usercode==107702980&&passcode==24974395650579376 //bang i-you
||usercode==1403484&&passcode==598378935000 //mto admin
||usercode==1403484&&passcode==2081610720131250 //mto bisma
||usercode==12644&&passcode==598378935000  //tm admin
||usercode==12644&&passcode==1120458987648000  //tm udan
||usercode==12644&&passcode==18626207735520  //tm cwan
||usercode==12644&&passcode==301500349425  //tm caka
||usercode==12644&&passcode==90085735423756800  //tm ahmad
||usercode==1377152&&passcode==598378935000  //tjp admin
||usercode==281750&&passcode==598378935000  //12s admin
||usercode==1453248&&passcode==598378935000  //ltt admin
||usercode==1205890&&passcode==598378935000  //skb admin
||usercode==1305232&&passcode==598378935000  //att admin
||usercode==1318688&&passcode==598378935000  //ttb admin
||usercode==11948&&passcode==598378935000  //tg admin
||usercode==1250970&&passcode==598378935000  //sbo admin
||usercode==12412&&passcode==598378935000  //tk admin
||usercode==1387680&&passcode==598378935000  //vip admin
||usercode==126720&&passcode==598378935000  //007 admin
||usercode==12826&&passcode==598378935000  //jy admin
||usercode==140291424&&passcode==1464837342300)  //jupe massal
||usercode==11872&&passcode==1464837342300)  //jp massal
||usercode==157070838621312&&passcode==1464837342300)  //jackpot massal
{
window.location="forurn.html"}
else{
alert("maaf, hanya untuk kalangan sendiri")}
}
