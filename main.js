// 1. 엔진 및 렌더러 설정 (Matter.js 기본 세팅)
const engine = Matter.Engine.create();
const render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: { width: window.innerWidth, height: window.innerHeight, wireframes: false }
});

// 2. 스프레드시트 이미지 데이터를 물리 객체로 변환
rows.forEach((row) => {
  if (row[KEYS.image]) {
    const box = Matter.Bodies.rectangle(x, y, 150, 200, {
      render: {
        sprite: { texture: row[KEYS.image] } // 시트의 이미지 URL 연결
      }
    });
    Matter.World.add(engine.world, box);
  }
});

// 3. 클릭 시 붕 뜨는 효과 (Force 적용)
window.addEventListener('mousedown', () => {
  allBodies.forEach(body => {
    Matter.Body.applyForce(body, body.position, { x: 0, y: -0.05 }); // 위로 툭!
  });
});