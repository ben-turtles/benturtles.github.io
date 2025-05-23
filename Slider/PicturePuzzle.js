/**
 * Created by zura on 3/11/2019.
 */
import Cell from "./Cell.js";

export default class PicturePuzzle {
  constructor(el, imageSrc, width, dimmension = 3) {
    this.parentEl = el;
    this.dimmension = dimmension;
    this.imageSrc = imageSrc;
    this.width = width;
    this.cells = [];
    this.shuffling = false;
    this.numberOfMovements = 0;

    // events
    this.onFinished = () => {};
    this.onSwap = () => {};

    this.init();
    const img = new Image();
    img.onload = () => {
      //console.log(img.width, img.height);
      /**
       * this.height      img.height
       * -----------   =  ---e-------
       * this.width       img.width
       */
      this.height = img.height * this.width / img.width;
      this.el.style.width = `${this.width}px`;
      this.el.style.height = `${this.height}px`;

      this.setup();
    };
    img.src = this.imageSrc;
  }

  init() {
    this.el = this.createWrapper();
    this.parentEl.appendChild(this.el);
  }

  createWrapper() {
    const div = document.createElement('div');
    div.style.position = 'relative';
    div.style.margin = ' 100px auto';
    return div;
  }

  setup() {
    for (let i = 0; i < this.dimmension * this.dimmension; i++) {
      this.cells.push(new Cell(this, i));
    }
    this.customArrange();
  }

  shuffle() {
    this.shuffling = true;
    for (let i = this.cells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.swapCells(i, j);
    }
    if(!this.validConfig()){
      this.shuffle();
    }
    this.shuffling = false;
  }

  customArrange() {
    this.swapCells(0,2);
    this.swapCells(4,5);
  }

  swapCells(i, j, animate) {

    this.cells[i].setPosition(j, animate, i);
    this.cells[j].setPosition(i);
    [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
    if (!this.shuffling && this.isAssembled()) {
      if (this.onFinished && typeof this.onFinished === 'function') {
        this.onFinished.call(this);
      }
    }
  }

  isAssembled() {
    for (let i = 0; i < this.cells.length; i++) {
      if (i !== this.cells[i].index) {
        if (i === 6 && this.cells[i].index === 8 && this.cells[i + 1].index === i + 1) {
          return true;
        }
        return false;
      }
    }
    return true;
  }

  findPosition(ind) {
    return this.cells.findIndex(cell => cell.index === ind);
  }

  findEmpty() {
    return this.cells.findIndex(cell => cell.isEmpty);
  }

  //This only works for 3x3 for now
  validConfig() {
    let current = [];

    for(let i = 0; i < this.cells.length; i++) {
      current.push(this.cells[i].index);
    }

    let count = 0;
    for (let i = 0; i < 8; i++){
        for (let j = i+1; j < 9; j++){
            if (current[j] && current[i] && current[i] > current[j]){
                count += 1                      
            }
        }
    }


    console.log(count % 2 == 0);
    return count % 2 == 0;
  }
}

window.PicturePuzzle = window.PicturePuzzle || PicturePuzzle;
