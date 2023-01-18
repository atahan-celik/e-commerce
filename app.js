let tarotList = [], 
basketList = [] ;

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

// Slider

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// Sepet açıp kapatma

const toggleModal = () => {
    const basketModalEl = document.querySelector(".basket__modal")
    basketModalEl.classList.toggle("active")
}

const getTarots = () => {
    fetch("products.json")
        .then((res) => res.json())
        .then((tarots) => (tarotList = tarots));
};

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
            src="${tarot.imgSource}" data-lightbox="roadtrip"
            width="258" 
            height="400"/>
          </div>

          <div class="col-6 d-flex flex-column justify-content-between">
            <div class="rozet__detay">
              <span class="fos gray fs-5">${tarot.author}</span><br/>
              <span class="fs-4 fw-bold">${tarot.name}</span><br/>
              <span class="rozet__star__rate">
                ${createTarotStars(tarot.starRate)}
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
                `<span class="fs-6 fw-bold old__price">${tarot.oldPrice}₺</span>`
            : ""
            }
              
            </div>
            <button class="btn__burgundy" onclick="addTarotToBasket(${
                tarot.id
            })">Sepete Ekle</button>
            </div>
            
          </div>
        </div>`;
    });

    tarotListEl.innerHTML = tarotListHtml
};

const TAROT_TYPES = {
    ALL: "Tümü",
    TAROT: "Rozet, Broş",
 
};

const createTarotTypesHtml = () => {
    const filterEl = document.querySelector(".filter");
    let filterHtml = "";
    let filterTypes = ["ALL"];
    tarotList.forEach(tarot => {
        if(filterTypes.findIndex(filter => filter == tarot.type) == -1) 
        filterTypes.push(tarot.type);
    });

    filterTypes.forEach(type, index => {
        filterHtml += `<li class="${index == 0 ? "active" : null}" onclick="filterTarots(tihs)" data-types"${type}">
        ${TAROT_TYPES[type] || type}</li>`;

    });

    filterEl.innerHTML = filterHtml;
};

// Filtreleme işlevi

const filterTarots = (filterEl) => {
    document.querySelector(".filter .active").classList.remove("active");
    filterEl.classList.add("active");
    let tarotType = filterEl.dataset.type;
    getTarots();
        if(tarotType== "ALL")
            tarotList = tarotList.filter(tarot => tarot.type == tarotType);
    createTarotItemsHtml();
};

// Sepet Ürünlerini Listeleme işlevi

const listBasketItems = () => {
    localStorage.setItem("basketList", JSON.stringify(basketList));
    const basketListEl = document.querySelector(".basket__list");
    const basketCountEl = document.querySelector(".basket__count");
    basketCountEl.innerHTML = basketList.length > 0 ? basketList .length : null;
    const totalPriceEl = document.querySelector(".total__price");

    
    let basketListHtml = "";
    let totalPrice = 0;
    basketList.forEach(item => {
        totalPrice += item.product.price * item.quantity;
        basketListHtml += `<li class="basket__item">
        <img 
        src="${item.product.imgSource}"
        width="100"
        height="100"
        />
        <div class="basket__item-info">
          <h3 class="tarot__name">${item.product.name}</h3>
          <span class="tarot__price">${item.product.price}₺</span><br />
          <span class="tarot__sil" onclick="removeItemsToBasket(${item.product.id})">Sil</span>
        </div>
        <div class="tarot__count">
          <span class="eksilt" onclick="basketEksiltme(${item.product.id})">-</span>
          <span class="my-5">${item.quantity}</span>
          <span class="yukselt" onclick="basketYukseltme(${item.product.id})">+</span>
        </div>
      </li>`;
    });

    basketListEl.innerHTML = basketListHtml ? basketListHtml : 
    `<li class="basket__item">Sepetinizde Ürün Bulunmamaktadır.</li>`;
    totalPriceEl.innerHTML = 
    totalPrice > 0 ? "Toplam : " + totalPrice + "₺" : null ;
};

// Sepete ürün ekleme işlevi

const addTarotToBasket = (tarotId) => {
    let findedTarot = tarotList.find((tarot) => tarot.id == tarotId );
    if (findedTarot) {
        const basketAlreadyIndex = basketList.findIndex(
            (basket) => basket.product.id == tarotId
        );
        if (basketAlreadyIndex == -1) {
            let addedItem = { quantity: 1, product: findedTarot};
            basketList.push(addedItem);
        }else{
            if (basketList[basketAlreadyIndex].quantity < 
                basketList[basketAlreadyIndex].product.stock)
                basketList[basketAlreadyIndex].quantity +=1;
                else {
                    toastr.error("Üzgünüz, stoklarımız da bu ürün kalmamıştır.");
                return;
            }
        }
        listBasketItems();
        toastr.success("Ürün sepete eklendi.");
    }   
    
};

// Sepetten ürün silme işlevi

const removeItemsToBasket = (tarotId) => {
    const findedIndex = basketList.findIndex(basket => basket.product.id == tarotId);

    if (findedIndex !=-1) {
        basketList.splice(findedIndex,1);
    }
    listBasketItems();
};

// Sepetteki ürünü azaltma işlevi

const basketEksiltme = (tarotId) => {
    const findedIndex = basketList.findIndex(basket => basket.product.id == tarotId);
    if(findedIndex !=-1) {
        if (basketList[findedIndex].quantity !=1)
        basketList[findedIndex].quantity -= 1;
        else removeItemsToBasket(tarotId);
        listBasketItems();
    }
};

// Sepetteki ürünü arttırma işlevi

const basketYukseltme = (tarotId) => {
    const findedIndex = basketList.findIndex(basket => basket.product.id == tarotId);
    if(findedIndex !=-1) {
        if (basketList[findedIndex].quantity < basketList[findedIndex].product.stock)
        basketList[findedIndex].quantity += 1;
        else toastr.error("Üzgünüz, stoklarımız da bu ürün kalmamıştır.");
        listBasketItems();
    }
};

// Sayfa yenilendiğinde bilgileri hafıza da tutma işlevi

if(localStorage.getItem("basketList")) {
    basketList = JSON.parse(localStorage.getItem("basketList"));
    listBasketItems();
}

setTimeout(() => {
    createTarotItemsHtml();
    createTarotTypesHtml();
}, 100);

toastr.info("")
