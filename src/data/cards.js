// this is the cards file
const cards = [
  {
    id: 1,
    name: 'card-1',
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
]

export default cards
