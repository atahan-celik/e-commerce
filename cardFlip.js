var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});



let images = [
  "./assets/cardFlip/images/resim1.jpg",
  "./assets/cardFlip/images/resim2.jpg",
  "./assets/cardFlip/images/resim3.jpg",
  "./assets/cardFlip/images/resim4.jpg",
  "./assets/cardFlip/images/resim5.jpg",
  "./assets/cardFlip/images/resim6.jpg",
  "./assets/cardFlip/images/resim7.jpg",
  "./assets/cardFlip/images/resim8.jpg",
  "./assets/cardFlip/images/resim9.jpg",
  "./assets/cardFlip/images/resim10.jpg",
  "./assets/cardFlip/images/resim11.jpg",
  "./assets/cardFlip/images/resim12.jpg",
  "./assets/cardFlip/images/resim13.jpg",
  "./assets/cardFlip/images/resim14.jpg",
  "./assets/cardFlip/images/resim15.jpg",
  "./assets/cardFlip/images/resim16.jpg",
  "./assets/cardFlip/images/resim17.jpg",
  "./assets/cardFlip/images/resim18.jpg",
  "./assets/cardFlip/images/resim19.jpg",
  "./assets/cardFlip/images/resim20.jpg",
  "./assets/cardFlip/images/resim21.jpg",
  "./assets/cardFlip/images/resim22.jpg",
  "./assets/cardFlip/images/resim23.jpg",
  "./assets/cardFlip/images/resim24.jpg",
  "./assets/cardFlip/images/resim25.jpg",
  "./assets/cardFlip/images/resim26.jpg",
  "./assets/cardFlip/images/resim27.jpg",
  "./assets/cardFlip/images/resim28.jpg",
  "./assets/cardFlip/images/resim29.jpg",
  "./assets/cardFlip/images/resim30.jpg",
  "./assets/cardFlip/images/resim31.jpg",
  "./assets/cardFlip/images/resim32.jpg",
  "./assets/cardFlip/images/resim33.jpg",
  "./assets/cardFlip/images/resim34.jpg",
  "./assets/cardFlip/images/resim35.jpg",
  "./assets/cardFlip/images/resim36.jpg",
  "./assets/cardFlip/images/resim37.jpg",
  "./assets/cardFlip/images/resim38.jpg",
  "./assets/cardFlip/images/resim39.jpg",
  "./assets/cardFlip/images/resim40.jpg",
  "./assets/cardFlip/images/resim41.jpg",
  "./assets/cardFlip/images/resim42.jpg",
  "./assets/cardFlip/images/resim43.jpg",
  "./assets/cardFlip/images/resim44.jpg",
  "./assets/cardFlip/images/resim45.jpg",
  "./assets/cardFlip/images/resim46.jpg",
  "./assets/cardFlip/images/resim47.jpg",
  "./assets/cardFlip/images/resim48.jpg",
  "./assets/cardFlip/images/resim49.jpg",
  "./assets/cardFlip/images/resim50.jpg",
  "./assets/cardFlip/images/resim51.jpg",
  "./assets/cardFlip/images/resim52.jpg",
  "./assets/cardFlip/images/resim53.jpg",
  "./assets/cardFlip/images/resim54.jpg",
  "./assets/cardFlip/images/resim55.jpg",
  "./assets/cardFlip/images/resim56.jpg",
  "./assets/cardFlip/images/resim57.jpg",
  "./assets/cardFlip/images/resim58.jpg",
  "./assets/cardFlip/images/resim59.jpg",
  "./assets/cardFlip/images/resim60.jpg",
  "./assets/cardFlip/images/resim61.jpg",
  "./assets/cardFlip/images/resim62.jpg",
  "./assets/cardFlip/images/resim63.jpg",
  "./assets/cardFlip/images/resim64.jpg",
  "./assets/cardFlip/images/resim65.jpg",
  "./assets/cardFlip/images/resim66.jpg",
  "./assets/cardFlip/images/resim67.jpg",
  "./assets/cardFlip/images/resim68.jpg",
  "./assets/cardFlip/images/resim69.jpg",
  "./assets/cardFlip/images/resim70.jpg",
  "./assets/cardFlip/images/resim71.jpg",
  "./assets/cardFlip/images/resim72.jpg",
  "./assets/cardFlip/images/resim73.jpg",
  "./assets/cardFlip/images/resim74.jpg",
  "./assets/cardFlip/images/resim75.jpg",
  "./assets/cardFlip/images/resim76.jpg",
  "./assets/cardFlip/images/resim77.jpg",
  "./assets/cardFlip/images/resim78.jpg",

];
let currentImageIndex = Math.floor(Math.random() * images.length);

function changeImage1() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage1").src = images[currentImageIndex];
}

function changeImage2() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage2").src = images[currentImageIndex];
}

function changeImage3() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage3").src = images[currentImageIndex];
}

function changeImage4() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage4").src = images[currentImageIndex];
}

function changeImage5() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage5").src = images[currentImageIndex];
}

function changeImage6() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage6").src = images[currentImageIndex];
}

function changeImage7() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage7").src = images[currentImageIndex];
}

function changeImage8() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage8").src = images[currentImageIndex];
}

function changeImage9() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage9").src = images[currentImageIndex];
}

function changeImage10() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage10").src = images[currentImageIndex];
}

function changeImage11() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage11").src = images[currentImageIndex];
}

function changeImage12() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage12").src = images[currentImageIndex];
}

function changeImage13() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage13").src = images[currentImageIndex];
}

function changeImage14() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage14").src = images[currentImageIndex];
}

function changeImage15() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage15").src = images[currentImageIndex];
}

function changeImage16() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage16").src = images[currentImageIndex];
}

function changeImage17() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage17").src = images[currentImageIndex];
}

function changeImage18() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage18").src = images[currentImageIndex];
}

function changeImage19() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage19").src = images[currentImageIndex];
}

function changeImage20() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage20").src = images[currentImageIndex];
}

function changeImage21() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage21").src = images[currentImageIndex];
}

function changeImage22() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage22").src = images[currentImageIndex];
}

function changeImage23() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage23").src = images[currentImageIndex];
}

function changeImage24() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage24").src = images[currentImageIndex];
}

function changeImage25() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage25").src = images[currentImageIndex];
}

function changeImage26() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage26").src = images[currentImageIndex];
}

function changeImage27() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage27").src = images[currentImageIndex];
}

function changeImage28() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage28").src = images[currentImageIndex];
}

function changeImage29() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage29").src = images[currentImageIndex];
}

function changeImage30() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage30").src = images[currentImageIndex];
}

function changeImage31() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage31").src = images[currentImageIndex];
}

function changeImage32() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage32").src = images[currentImageIndex];
}

function changeImage33() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage33").src = images[currentImageIndex];
}

function changeImage34() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage34").src = images[currentImageIndex];
}

function changeImage35() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage35").src = images[currentImageIndex];
}

function changeImage36() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage36").src = images[currentImageIndex];
}

function changeImage37() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage37").src = images[currentImageIndex];
}

function changeImage38() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage38").src = images[currentImageIndex];
}

function changeImage39() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage39").src = images[currentImageIndex];
}

function changeImage40() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage40").src = images[currentImageIndex];
}

function changeImage41() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage41").src = images[currentImageIndex];
}

function changeImage42() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage42").src = images[currentImageIndex];
}

function changeImage43() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage43").src = images[currentImageIndex];
}

function changeImage44() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage44").src = images[currentImageIndex];
}

function changeImage45() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage45").src = images[currentImageIndex];
}

function changeImage46() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage46").src = images[currentImageIndex];
}

function changeImage47() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage47").src = images[currentImageIndex];
}

function changeImage48() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage48").src = images[currentImageIndex];
}

function changeImage49() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage49").src = images[currentImageIndex];
}

function changeImage50() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage50").src = images[currentImageIndex];
}

function changeImage51() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage51").src = images[currentImageIndex];
}

function changeImage52() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage52").src = images[currentImageIndex];
}

function changeImage53() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage53").src = images[currentImageIndex];
}

function changeImage54() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage54").src = images[currentImageIndex];
}

function changeImage55() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage55").src = images[currentImageIndex];
}

function changeImage56() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage56").src = images[currentImageIndex];
}

function changeImage57() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage57").src = images[currentImageIndex];
}

function changeImage58() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage58").src = images[currentImageIndex];
}

function changeImage59() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage59").src = images[currentImageIndex];
}

function changeImage60() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage60").src = images[currentImageIndex];
}

function changeImage61() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage61").src = images[currentImageIndex];
}

function changeImage62() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage62").src = images[currentImageIndex];
}

function changeImage63() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage63").src = images[currentImageIndex];
}

function changeImage64() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage64").src = images[currentImageIndex];
}

function changeImage65() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage65").src = images[currentImageIndex];
}

function changeImage66() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage66").src = images[currentImageIndex];
}

function changeImage67() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage67").src = images[currentImageIndex];
}

function changeImage68() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage68").src = images[currentImageIndex];
}

function changeImage69() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage69").src = images[currentImageIndex];
}

function changeImage70() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage70").src = images[currentImageIndex];
}

function changeImage71() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage71").src = images[currentImageIndex];
}

function changeImage72() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage72").src = images[currentImageIndex];
}

function changeImage73() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage73").src = images[currentImageIndex];
}

function changeImage74() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage74").src = images[currentImageIndex];
}

function changeImage75() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage75").src = images[currentImageIndex];
}

function changeImage76() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage76").src = images[currentImageIndex];
}

function changeImage77() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage77").src = images[currentImageIndex];
}

function changeImage78() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById("myImage78").src = images[currentImageIndex];
}
