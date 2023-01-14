let tarotList = [] ;

const toggleModal = () => {
    const basketModalEl = document.querySelector(".basket__modal")
    basketModalEl.classList.toggle("active")
}

const getTarots = () => {
    fetch(".products.json")
    .then((res) => res.json())
    .then((tarots) => (tarotList = tarots));
}

getTarots();

const createTarotStars = (starRate) => {
    let starRateHtml = "";
    for(let i =1; i<=5;i++){
        if(Math.round(starRate) >= i) 
            starRateHtml += `<i class="bi bi-star-fill active"></i>`;
        else starRateHtml += `<i class="bi bi-star-fill"></i>`;
    }

    return starRateHtml;
};

const createTarotItemsHtml = () => {
    const tarotListEl = document.querySelector(".tarot__list");
    let tarotListHtml = "";
    tarotList.forEach ((tarot, index) => {
        tarotListHtml += `<div class="col-5 ${index%2 == 0 && "offset-2" } my-5">
        <div class="row tarot__card">
          <div class="col-6">
            <img 
            class="img fluid shadow" 
            src="${tarot.imgSource}"
            width="258" 
            height="400"/>
          </div>

          <div class="col-6 d-flex flex-column justify-content-between">
            <div class="rozet__detay">
              <span class="fos gray fs-5">${tarot.author}</span><br/>
              <span class="fs-4 fw-bold">${tarot.name}</span><br/>
              <span class="rozet__star__rate">
                ${createTarotStars(book.starRate)}
                <span class="gray">${tarot.reviewCount} inceleme</span>
              </span>
            </div>
            <p class="rozet__anlami fos gray">
            ${tarot.description}
            </p>
            <div>
              <span class="black fw-bold fs-4 me-2">${tarot.price}₺</span>
              ${
                tarot.oldPrice ? 
                `<span class="fs-4 fw-bold old__price">${tarot.oldPrice}₺</span>`
            : ""
            }
              
            </div>
            <button class="btn__purple">Sepete Ekle</button>
            </div>
            
          </div>
        </div>`;
    });

    tarotListEl.innerHTML = tarotListHtml
};

setTimeout(() => {
    createTarotItemsHtml();
    
} 100);
