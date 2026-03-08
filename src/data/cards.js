import CardComp1 from '@/components/cards/CardComp1.vue'
import CardComp2 from '@/components/cards/CardComp2.vue'
import CardComp3 from '@/components/cards/CardComp3.vue'
import CardComp4 from '@/components/cards/CardComp4.vue'

// this is the cards file
const cards = [
  {
    id: 1,
    name: 'card-1',
    component: CardComp1,
    html: `
        <div class="card">
        <div class="card__content"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        </div>
    `,
    css: `
        .card {
        position: relative;
        width: 190px;
        height: 254px;
        background: lightgrey;
        box-shadow: #d11bff42 0 15px 40px -5px;
        z-index: 1;
        border-radius: 21px;
        overflow: hidden;
        }

        .card__content {
        background: linear-gradient(rgba(255, 255, 255, 0.473), rgba(150, 150, 150, 0.25));
        z-index: 1;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 21px;
        }

        .card .blob {
        position: absolute;
        z-index: -1;
        border-radius: 5em;
        width: 200px;
        height: 200px;
        }

        .card .blob:nth-child(2) {
        left: -50px;
        top: -90px;
        background: #ff930f;
        }

        .card .blob:nth-child(3) {
        left: 110px;
        top: -20px;
        z-index: -1;
        background: #bf0fff;
        }

        .card .blob:nth-child(4) {
        left: -40px;
        top: 100px;
        background: #ff1b6b;
        }

        .card .blob:nth-child(5) {
        left: 100px;
        top: 180px;
        background: #0061ff;
        }

    `,
  },
  {
    id: 2,
    name: 'card-2',
    component: CardComp2,
    html: `
<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <p>Front Side</p>
    </div>
    <div class="card-back">
      <p>Back Side</p>
    </div>
  </div>
</div>
    `,
    css: `
        .card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}


    `,
  },
  {
    id: 3,
    name: 'card-3',
    component: CardComp3,
    html: `
  <div class="book">
    <p>Hello</p>
    <div class="cover">
      <p>Hover Me</p>
    </div>
  </div>
    `,
    css: `
.book {
  position: relative;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: whitesmoke;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
}

.cover {
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.book:hover .cover {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-80deg);
}

p {
  font-size: 20px;
  font-weight: bolder;
}

    `,
  },
  {
    id: 4,
    name: 'card-4',
    component: CardComp4,
    html: `
  <div class="card">
    <div class="head">Window</div>
    <div class="content">
      This is a neobrutalist-style window with a button and space for any content you want!
      <br />
      <button class="button">Button</button>
    </div>
  </div>
    `,
    css: `
.card {
  font-family: Montserrat, sans-serif;
  width: 300px;
  height: 250px;
  translate: -6px -6px;
  background: #ff66a3;
  border: 3px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  overflow: hidden;
  transition: all 0.3s ease;
}

.head {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  height: 32px;
  background: #ffffff;
  padding: 5px 12px;
  color: #000000;
  border-bottom: 3px solid #000000;
}

.content {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
}

.button {
  padding: 5px 10px;
  margin-top: 10px;
  border: 3px solid #000000;
  box-shadow: 3px 3px 0 #000000;
  font-weight: 750;
  background: #4ade80;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button:hover {
  translate: 1.5px 1.5px;
  box-shadow: 1.5px 1.5px 0 #000000;
  background: #1ac2ff;
}

.button:active {
  translate: 3px 3px;
  box-shadow: 0 0 0 #000000;
}

.card:hover {
  translate: -6px;
}
    `,
  },
]

export default cards
