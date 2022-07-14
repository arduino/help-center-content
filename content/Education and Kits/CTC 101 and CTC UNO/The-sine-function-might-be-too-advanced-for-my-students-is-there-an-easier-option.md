---
title: "The sine function might be too advanced for my students, is there an easier option?"
id: 360017053720
---

For an easier version, instead of the sine function, it’s possible to use a counter that counts up and down between 0 and 255. Example:

```
int red = 255;
int direction=1;
int speed=1;
void setup() {
  size(400, 400);
}

void draw() {
  if(red>=255){
     direction=-1;
  }
  if(red<=0){
    direction=1;
  }
  red=red+speed*direction;
  noStroke();
  fill(red, 0, 0);
  ellipse(mouseX, mouseY, 30, 30);
}
```
