/* ============================================================
   Shared Pixel Rabbit sprite / dance / burst engine
   used by index.html and reports/*.html
   ============================================================ */

const RABBIT_COLORS = {
  1:'#d4a574', 3:'#f5a0b5', 4:'#1a1a1a', 5:'#ffffff',
  6:'#a06040', 7:'#ffb6c1', 8:'#f5ead6', 9:'#c47a7a'
};
const RABBIT_BASE = [
  [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,3,3,1,0,0,1,3,3,1,0,0,0],
  [0,0,0,1,3,3,1,0,0,1,3,3,1,0,0,0],
  [0,0,0,1,3,3,1,0,0,1,3,3,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,1,4,4,4,1,1,1,1,4,4,4,1,0,0],
  [0,0,1,4,4,5,1,1,1,1,4,4,5,1,0,0],
  [0,0,1,4,4,4,1,1,1,1,4,4,4,1,0,0],
  [0,0,1,1,1,1,1,6,6,1,1,1,1,1,0,0],
  [0,0,7,7,1,1,1,1,1,1,1,1,7,7,0,0],
  [0,0,1,1,1,1,1,9,9,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,8,8,8,8,8,8,1,1,0,0,0],
  [0,0,1,1,8,8,8,8,8,8,8,8,1,1,0,0],
  [0,0,1,1,8,8,8,8,8,8,8,8,1,1,0,0],
  [0,0,0,1,1,8,8,8,8,8,8,1,1,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0]
];
function applyFace(s, face){
  if(face==='cheer'){
    s[9]  = [0,0,1,1,4,1,1,1,1,1,1,4,1,1,0,0];
    s[10] = [0,0,1,4,1,4,1,1,1,4,1,4,1,1,0,0];
    s[11] = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0];
  } else if(face==='wink'){
    s[9]  = [0,0,1,1,4,1,1,1,1,1,4,4,4,1,0,0];
    s[10] = [0,0,1,4,1,4,1,1,1,1,4,4,5,1,0,0];
    s[11] = [0,0,1,1,1,1,1,1,1,1,4,4,4,1,0,0];
  } else if(face==='excited'){
    s[9]  = [0,0,1,1,4,1,1,1,1,1,1,4,1,1,0,0];
    s[10] = [0,0,1,4,1,4,1,1,1,4,1,4,1,1,0,0];
    s[11] = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0];
    s[14] = [0,0,1,1,1,9,9,9,9,9,9,1,1,1,0,0];
  } else if(face==='angry'){
    s[9]  = [0,0,1,4,1,1,1,1,1,1,1,1,4,1,0,0];
    s[10] = [0,0,1,1,4,1,1,1,1,1,1,4,1,1,0,0];
    s[11] = [0,0,1,1,1,4,1,1,1,1,4,1,1,1,0,0];
    s[14] = [0,0,1,1,1,1,9,9,9,9,1,1,1,1,0,0];
  }
}
function applyPose(s, pose){
  if(pose==='base') return s;
  switch(pose){
    case 'rightArm':
      s[15][13]=1; s[14][14]=1; s[13][15]=1; break;
    case 'leftArm':
      s[15][2]=1; s[14][1]=1; s[13][0]=1; break;
    case 'bothArms':
      s[15][13]=1; s[15][2]=1;
      s[14][14]=1; s[14][1]=1;
      s[13][15]=1; s[13][0]=1;
      s[22]=[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0];
      s[23]=[0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0];
      break;
    case 'rightKick':
      s[22]=[0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0];
      s[23]=[0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0]; break;
    case 'leftKick':
      s[22]=[0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0];
      s[23]=[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0]; break;
    case 'stepRight':
      s[22]=[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0];
      s[23]=[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0]; break;
    case 'stepLeft':
      s[22]=[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0];
      s[23]=[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0]; break;
    case 'crouch':
      s[22]=[0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0];
      s[23]=[0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0]; break;
    case 'spin':
      for(let y=0;y<s.length;y++) s[y].reverse();
      break;
  }
  return s;
}
function spriteToSVG(svg, sprite){
  let p='';
  sprite.forEach((row,y)=>row.forEach((c,x)=>{
    if(c>0) p += `<rect x="${x}" y="${y}" width="1" height="1" fill="${RABBIT_COLORS[c]}"/>`;
  }));
  svg.innerHTML = p;
}
function staticRabbit(svgId, mood){
  const svg=document.getElementById(svgId); if(!svg) return;
  const s=RABBIT_BASE.map(r=>[...r]);
  if(mood==='cheer'){applyFace(s,'cheer'); applyPose(s,'bothArms');}
  else if(mood==='wink'){applyFace(s,'wink');}
  else if(mood==='excited'){applyFace(s,'excited'); applyPose(s,'bothArms');}
  else if(mood==='happy'){applyFace(s,'cheer');}
  spriteToSVG(svg,s);
}

const DANCE_SEQUENCE = [
  {pose:'rightArm', face:'wink',    t:'translateY(-4px) rotate(4deg)'},
  {pose:'leftArm',  face:'wink',    t:'translateY(-4px) rotate(-4deg)'},
  {pose:'stepRight',face:'cheer',   t:'translateY(0px) rotate(3deg)'},
  {pose:'stepLeft', face:'cheer',   t:'translateY(0px) rotate(-3deg)'},
  {pose:'crouch',   face:'excited', t:'translateY(4px) rotate(0deg)'},
  {pose:'bothArms', face:'excited', t:'translateY(-12px) rotate(0deg)'},
  {pose:'base',     face:'cheer',   t:'translateY(2px) rotate(0deg)'},
  {pose:'rightKick',face:'cheer',   t:'translateY(0px) rotate(5deg)'},
  {pose:'leftKick', face:'cheer',   t:'translateY(0px) rotate(-5deg)'},
  {pose:'bothArms', face:'excited', t:'translateY(-6px) rotate(0deg)'},
  {pose:'spin',     face:'cheer',   t:'translateY(-2px) scaleX(-1)'},
  {pose:'base',     face:'excited', t:'translateY(0px) rotate(0deg)'}
];
const SPIN_STARS = [
  {x:-60,y:-50,dx:-12,dy:-10,color:'#FF2D78',s:10},
  {x: 65,y:-40,dx: 14,dy: -8,color:'#A855F7',s: 8},
  {x:-55,y: 40,dx:-10,dy: 12,color:'#FDE047',s:10},
  {x: 58,y: 48,dx: 12,dy: 10,color:'#FF2D78',s: 8},
  {x:-70,y:  5,dx:-14,dy:  0,color:'#A855F7',s:12},
  {x: 72,y: -8,dx: 14,dy: -4,color:'#FDE047',s:10},
  {x:  6,y:-58,dx:  0,dy:-14,color:'#FF2D78',s: 8},
  {x:-10,y: 55,dx: -4,dy: 14,color:'#A855F7',s:12}
];
const STAR_PIXELS = [
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [0,1,1,1,0],
  [0,0,1,0,0]
];
function pixelStar(size,color){
  let p='';
  STAR_PIXELS.forEach((r,y)=>r.forEach((c,x)=>{
    if(c) p += `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}"/>`;
  }));
  return `<svg width="${size}" height="${size}" viewBox="0 0 5 5" style="display:block">${p}</svg>`;
}
function burstStars(id){
  const root = document.getElementById(id || 'starBurst');
  if(!root) return;
  root.innerHTML = '';
  SPIN_STARS.forEach((star,i)=>{
    const d = document.createElement('div');
    d.className = 's';
    d.style.marginLeft = star.x + 'px';
    d.style.marginTop  = star.y + 'px';
    d.style.setProperty('--sx', star.dx + 'px');
    d.style.setProperty('--sy', star.dy + 'px');
    d.style.animation = `star-pop2 .7s ease-out ${i*0.04}s both`;
    d.innerHTML = pixelStar(star.s, star.color);
    root.appendChild(d);
  });
  setTimeout(()=>{ root.innerHTML=''; }, 900);
}
function runDance(svgId, burstId, offset){
  const svg = document.getElementById(svgId);
  if(!svg) return;
  let i = offset || 0;
  function tick(){
    const frame = DANCE_SEQUENCE[i];
    const s = RABBIT_BASE.map(r=>[...r]);
    applyFace(s, frame.face);
    applyPose(s, frame.pose);
    spriteToSVG(svg, s);
    svg.style.transform = frame.t;
    svg.style.transition = 'transform .15s ease-out';
    if(frame.pose === 'spin') burstStars(burstId);
    i = (i + 1) % DANCE_SEQUENCE.length;
  }
  tick();
  setInterval(tick, 250);
}
