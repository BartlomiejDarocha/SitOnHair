function Slider(selector){
    this.selector = selector;
    this.banner = document.querySelector(selector);
    this.slide = this.banner.querySelectorAll(".banner-slide");
    this.current = 0;
    this.prevSlideBtn = document.querySelector("#prevBtn");
    this.prevSlideClick = this.prevSlideBtn.addEventListener("click", function(){
        this.prevSlide();
    }.bind(this));
    this.nextSlideBtn = document.querySelector("#nextBtn");
    this.nextSlideClick= this.nextSlideBtn.addEventListener("click", function(){
       this.nextSlide();
    }.bind(this));
  
}

Slider.prototype.changeSlide =function(nr){
    for(const el of this.slide){
        el.classList.remove("banner-active-slide");
    }
    this.current = nr;
    this.slide[this.current].classList.add("banner-active-slide");
}

Slider.prototype.prevSlide = function(){
    this.current--;
    if(this.current<0){         
        this.current = this.slide.length-1;
    }
    this.changeSlide(this.current);
}

Slider.prototype.nextSlide = function(){
    this.current++;
    if(this.current>this.slide.length-1){
        this.current = 0;
    }
    this.changeSlide(this.current);
}

document.addEventListener('DOMContentLoaded', function() {

    let slider_top = new Slider(".banner");
});
