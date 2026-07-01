function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VgPBIzRL7G":
        Script1();
        break;
      case "6m6Vz2432wr":
        Script2();
        break;
      case "5sOhcbBOUCj":
        Script3();
        break;
      case "6dXjIHYlKc2":
        Script4();
        break;
      case "6JTxefmBFsX":
        Script5();
        break;
      case "65833azWOGg":
        Script6();
        break;
      case "6EM2GaSEOwX":
        Script7();
        break;
      case "5Z4GrFztHWm":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5owq2IC4Y2Y');
const duration = 750;
const easing = 'ease-out';
const id = '637XYbXzfYT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6KkcqcFBiAr');
const duration = 750;
const easing = 'ease-out';
const id = '5gmSN9qZjhE';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5akHFn7c0wR');
const duration = 750;
const easing = 'ease-out';
const id = '6GlzxRiiDQe';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6j3Ggb4ehAI');
const duration = 750;
const easing = 'ease-out';
const id = '6L60GGFdk1p';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6dt4V6tIYHD');
const duration = 750;
const easing = 'ease-out';
const id = '68ndjWeZI6D';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('66y0idFO4II');
const duration = 750;
const easing = 'ease-out';
const id = '6Gho817LQki';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('61cYCFmdSeA');
const duration = 750;
const easing = 'ease-out';
const id = '5yFukti9O62';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5iHTC59W1Mx');
const duration = 750;
const easing = 'ease-out';
const id = '5iUxHjaqPGc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
