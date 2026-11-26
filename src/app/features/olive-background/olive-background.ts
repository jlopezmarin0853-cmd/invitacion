import {
AfterViewInit,
Component,
ElementRef,
ViewChild
}
from '@angular/core';

import { CommonModule }
from '@angular/common';


interface Leaf {

  x: number;
  y: number;

  size: number;

  speed: number;

  rotation: number;

  rotationSpeed: number;

}
@Component({
  imports: [],
  standalone:true,
  selector: 'app-olive-background',
  styleUrl: './olive-background.scss',
  templateUrl: './olive-background.html',
})


export class OliveBackground implements AfterViewInit{


@ViewChild(
'canvas',
{ static:true }
)

canvasRef!:ElementRef<
HTMLCanvasElement
>;

private ctx!:
CanvasRenderingContext2D;

private leaves:
Leaf[] = [];

private width = 0;
private height = 0;

ngAfterViewInit(){

const canvas =
this.canvasRef
.nativeElement;

this.ctx =
canvas.getContext('2d')!;

this.resize();

this.createLeaves();

this.animate();

window.addEventListener(

'resize',

()=>{

this.resize();

}

);

}

private resize(){

const canvas =
this.canvasRef
.nativeElement;

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

this.width =
canvas.width;

this.height =
canvas.height;

}

private createLeaves(){

this.leaves=[];

const total =
window.innerWidth < 768
? 25
: 60;

for(let i=0;i<total;i++){

this.leaves.push({

x:
Math.random() *
this.width,

y:
Math.random() *
this.height,

size:
Math.random()*12+8,

speed:
Math.random()*0.5+0.2,

rotation:
Math.random()*360,

rotationSpeed:
Math.random()*0.8-0.4

});

}

}

private drawLeaf(
leaf:Leaf
){

this.ctx.save();

this.ctx.translate(
leaf.x,
leaf.y
);

this.ctx.rotate(
leaf.rotation
*
Math.PI
/
180
);

this.ctx.beginPath();

this.ctx.ellipse(

0,
0,

leaf.size,
leaf.size/2,

0,

0,

Math.PI*2

);

const colors = [

'rgba(85,107,47,.12)',

'rgba(194,165,106,.10)',

'rgba(63,79,36,.08)'

];

this.ctx.fillStyle =
colors[
Math.floor(
Math.random() *
colors.length
)
];

this.ctx.fill();

this.ctx.restore();

}

private animate=()=>{

requestAnimationFrame(
this.animate
);

this.ctx.clearRect(

0,
0,
this.width,
this.height

);

this.leaves.forEach(

leaf=>{

leaf.y+=leaf.speed;

leaf.x+=

Math.sin(
leaf.y*.01
)*.3;

leaf.rotation +=

leaf.rotationSpeed;

if(
leaf.y>
this.height+50
){

leaf.y=-50;

leaf.x=
Math.random()*
this.width;

}

this.drawLeaf(
leaf
);

}

);

}

}
