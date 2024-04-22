// несколько селектов с кнопкой сброса
const selectList = document.querySelectorAll(".custom-select");

selectList.forEach((el) => {
    const selectType = new Choices(el, {
        searchEnabled: false,
        shouldSort: false,
    })

    el.addEventListener(
        'change',
        function (event) {
            let textContent = event.target.textContent.replace(/\s+/g, '')
            if (textContent === "Сбросить") {
                selectType.setChoiceByValue('1');
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            } else {
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            }
        },
        false,
    );

})

$('.custom-select-inner .choices__item--choice[data-id=1]').hide();


// связанные списки
let listsArr = {
    minsk: ["Область", "Сбросить", "Минская область", "Брестская область", "Гродненская область", "Гомельская область", "Могилевская область", "Витебская область"],
    brest: ["Область", "Сбросить", "Фрунзунский", "Лененский", "Московский"],
    grodno: ["Область", "Сбросить", "Фрунзунский", "Лененский", "Московский"],
    gomel: ["Область", "Сбросить", "Фрунзунский", "Лененский", "Московский"],
    mogilev: ["Область", "Сбросить", "Фрунзунский", "Лененский", "Московский"],
    vit: ["Область", "Сбросить", "Фрунзунский", "Лененский", "Московский"]
};

let cityArr = {
    "3": ["Город", "Сбросить", "Минск", "Брест", "Гродн", "Гомель", "Могилев", "Витебск"],
    "4": ["Город", "Сбросить", "Брест", "Гродн", "Гомель"],
    "5": ["Город", "Сбросить", "Брест", "Гродн", "Гомель"],
    "6": ["Город", "Сбросить", "Брест", "Гродн", "Гомель"],
    "7": ["Город", "Сбросить", "Брест", "Гродн", "Гомель"],
    "8": ["Город", "Сбросить", "Брест", "Гродн", "Гомель"]
};

const countryEl = document.querySelector("#country");
const regionEl = document.querySelector("#region");
const cityEl = document.querySelector("#city");

const countrySelect = new Choices(countryEl, {
    searchEnabled: false,
    shouldSort: false,
})

const regionSelect = new Choices(regionEl, {
    searchEnabled: false,
    shouldSort: false,
})

const citySelect = new Choices(cityEl, {
    searchEnabled: false,
    shouldSort: false,
})


function addListener(el, select) {
    $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");

    el.addEventListener(
        'change',
        function (event) {
            let textContent = event.target.textContent.replace(/\s+/g, '')
            if (textContent === "Сбросить") {
                select.setChoiceByValue('1');
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            } else {
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            }
            $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
        },
        false,
    );
}

addListener(countryEl, countrySelect)
addListener(regionEl, regionSelect)
addListener(cityEl, citySelect)

window.onload = selectCountry;

function selectAdd() {
    countryEl.onchange = selectCountry;
    regionEl.onchange = selectCity;
}

selectAdd()

function selectCountry(ev) {
    regionSelect.clearChoices()
    $('[data-select="region-list"]').empty();
    let itemSelect = this.value || "minsk", o;
    for (let i = 0; i < listsArr[itemSelect].length; i++) {
        o = new Option(listsArr[itemSelect][i], i, false, false);
        $('[data-select="region-list"]').append(o);


        regionSelect.setChoices(
            [
                {value: `${i + 1}`, label: listsArr[itemSelect][i], disabled: false},

            ],
            'value',
            'label',
            false,
        );

    }
    $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
    $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
}

function selectCity(ev) {
    citySelect.clearChoices()
    $('[data-select="city-list"]').empty();
    let itemSelect = this.value || "1", o;
    for (let i = 0; i < cityArr[itemSelect].length; i++) {
        o = new Option(cityArr[itemSelect][i], i, false, false);
        $('[data-select="city-list"]').append(o);

        citySelect.setChoices(
            [
                {value: `${i + 1}`, label: cityArr[itemSelect][i], disabled: false},

            ],
            'value',
            'label',
            false,
        );
    }
    $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
    $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
}

//вывод бренд и моделей в блоке
let objBrands = {
    bmw: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati: {
        name: "bmw",
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley: {
        name: "bmw",
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw1: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati1: {
        name: "bmw",
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley1: {
        name: "bmw",
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda1: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw2: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati2: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley2: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda2: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw3: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati3: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley3: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda3: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw4: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati4: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley4: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda4: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw5: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati5: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley5: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda5: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw6: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati6: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley6: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
};
let objBrandsFull = {
    audi: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "BMW",
    },
    audi2: {
        name: "bmw",
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    audi3: {
        name: "bmw",
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    audi4: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "Honda",
    },
    audi5: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "BMW",
    },
    audi6: {
        name: "bmw",
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    audi7: {
        name: "bmw",
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    bmw: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati: {
        name: "bmw",
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley: {
        name: "bmw",
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw1: {
        name: "bmw",
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati1: {
        name: "bmw",
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley1: {
        name: "bmw",
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda1: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw2: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati2: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley2: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda2: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw3: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati3: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley3: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda3: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw4: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati4: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley4: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda4: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw5: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati5: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley5: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda5: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw6: {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati6: {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley6: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Harley7: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Harley11: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Harley112: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Harley22: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Harley23: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Harley24: {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
};

let objModel = {
    Alpha110: {
        id: 1,
        name: "Alpha 110",
    },
    Alpha50: {
        id: 2,
        name: "Alpha 50",
    },
    Cross: {
        id: 3,
        name: "Cross",
    },
    FX200: {
        id: 4,
        name: "FX 200",
    },
    GX250: {
        id: 5,
        name: "GX 250",
    },
    Jazz125: {
        id: 6,
        name: "Jazz 125",
    },
    Pegas200: {
        id: 7,
        name: "Pegas 200",
    },
    Phantom125: {
        id: 8,
        name: "Phantom 125",
    },
    Raptor140: {
        id: 9,
        name: "Raptor 140",
    },
    Raptor20023: {
        id: 10,
        name: "Raptor 20023",
    },
    Raptor200: {
        id: 11,
        name: "Raptor 200",
    },
    Raptor50: {
        id: 12,
        name: "Raptor 50",
    },
    SX250: {
        id: 13,
        name: "SX 250",
    },
    XMotos: {
        id: 14,
        name: "X-Motos",
    },
    ZR200: {
        id: 16,
        name: "ZR 200",
    },
    Alpha1101: {
        id: 17,
        name: "Alpha 1101",
    },
    Alpha501: {
        id: 18,
        name: "Alpha 501",
    },
    Cross1: {
        id: 19,
        name: "Cross1",
    },
    FX2001: {
        id: 20,
        name: "FX 2001",
    },
    GX2501: {
        id: 21,
        name: "GX 2501",
    },
    Jazz1251: {
        id: 22,
        name: "Jazz 1251",
    },
    Pegas2001: {
        id: 23,
        name: "Pegas 2001",
    },
    Phantom1251: {
        id: 24,
        name: "Phantom 1251",
    },
    Raptor1401: {
        id: 25,
        name: "Raptor 1401",
    },
    Raptor2001: {
        id: 26,
        name: "Raptor 2001",
    },
    Raptor20012: {
        id: 27,
        name: "Raptor 20012",
    },
    Raptor501: {
        id: 28,
        name: "Raptor 501",
    },
    SX2501: {
        id: 29,
        name: "SX 2501",
    },
    XMotos1: {
        id: 30,
        name: "X-Motos1",
    },
    ZR2001: {
        id: 31,
        name: "ZR 2001",
    },

}
let objModelFull = {
    Alpha110: {
        id: 1,
        name: "Alpha 110",
    },
    Alpha50: {
        id: 2,
        name: "Alpha 50",
    },
    Cross: {
        id: 3,
        name: "Cross",
    },
    FX200: {
        id: 4,
        name: "FX 200",
    },
    GX250: {
        id: 5,
        name: "GX 250",
    },
    Jazz125: {
        id: 6,
        name: "Jazz 125",
    },
    Pegas200: {
        id: 7,
        name: "Pegas 200",
    },
    Phantom125: {
        id: 8,
        name: "Phantom 125",
    },
    Raptor140: {
        id: 9,
        name: "Raptor 140",
    },
    Raptor20023: {
        id: 10,
        name: "Raptor 20023",
    },
    Raptor200: {
        id: 11,
        name: "Raptor 200",
    },
    Raptor50: {
        id: 12,
        name: "Raptor 50",
    },
    SX250: {
        id: 13,
        name: "SX 250",
    },
    XMotos: {
        id: 14,
        name: "X-Motos",
    },
    ZR200: {
        id: 16,
        name: "ZR 200",
    },
    Alpha1101: {
        id: 17,
        name: "Alpha 1101",
    },
    Alpha501: {
        id: 18,
        name: "Alpha 501",
    },
    Cross1: {
        id: 19,
        name: "Cross1",
    },
    FX2001: {
        id: 20,
        name: "FX 2001",
    },
    GX2501: {
        id: 21,
        name: "GX 2501",
    },
    Jazz125121: {
        id: 22,
        name: "Jazz 125121",
    },
    Pegas20013: {
        id: 23,
        name: "Pegas 20013",
    },
    Phantom55: {
        id: 24,
        name: "Phantom 55",
    },
    Raptor55: {
        id: 25,
        name: "Raptor 55",
    },
    Raptor555: {
        id: 26,
        name: "Raptor 555",
    },
    Raptor200122: {
        id: 27,
        name: "Raptor 200122",
    },
    Raptor5012: {
        id: 28,
        name: "Raptor 5012",
    },
    SX25012: {
        id: 29,
        name: "SX 25012",
    },
    XMotos12: {
        id: 30,
        name: "X-Motos12",
    },
    ZR20012: {
        id: 31,
        name: "ZR 20012",
    },
    Jazz12512: {
        id: 32,
        name: "Jazz 12512",
    },
    Pegas20012: {
        id: 33,
        name: "Pegas 20012",
    },
    Phantom12512: {
        id: 34,
        name: "Phantom 12512",
    },
    Raptor14012: {
        id: 35,
        name: "Raptor 14012",
    },
    Raptor20012: {
        id: 36,
        name: "Raptor 20012",
    },
    Raptor2000: {
        id: 37,
        name: "Raptor 2000",
    },
    Raptor5: {
        id: 38,
        name: "Raptor 5",
    },
    SX33: {
        id: 39,
        name: "SX 33",
    },
    XMotos15: {
        id: 40,
        name: "X-Motos15",
    },
    ZR200121: {
        id: 41,
        name: "ZR 200121",
    },

}

const templateBrandsItem = (img, text) => {
    return `
                                <div class="brand-list__el">
                                    <div class="brand-list__el__img">
                                        <img src="${img}" alt="img">
                                    </div>
                                    <div class="brand-list__el__title">
                                        ${text}
                                    </div>
                                </div>
`
}

const templateModalItem = (id, name) => {
    return `
    <div class="form-col brand-list__el">
         <input type="radio" class="radio-block" name="modalBrand" id="modal-${id}" value="${name}">
         <label for="modal-${id}" class="radio-mini__label">${name}</label>
    </div>
    `
}

const templateBrandsBtn = (text) => {
    return `
                                <div class="brand-list__el__btn" >
                                     ${text}
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L5 5L1 8.5" stroke="#ED1C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </div>
`
}

const templateNotBrands = (text) => {
    return `
                                <div class="brand-list__el" data-mark="no-mark">
                                     ${text}
                                </div>
`
}

const brandBlock = document.querySelector("#brandBlock");
const modelBlock = document.querySelector("#modelBlock");

function objContent(obj, flag) {
    brandBlock.innerHTML = "";
    for (let el in obj) {

        let itemBrand = templateBrandsItem(obj[el].img, obj[el].text);

        brandBlock.innerHTML = brandBlock.innerHTML + itemBrand;
    }
    if (flag) {
        brandBlock.innerHTML = brandBlock.innerHTML + templateBrandsBtn("Все марки");
    } else {
        brandBlock.innerHTML = brandBlock.innerHTML + templateNotBrands("Нет моей марки")
    }
}

objContent(objBrands, true)

const brandInput = document.querySelector("#brand");

brandInput.addEventListener("input", function (event) {
    let value = this.value;
    brandBlock.innerHTML = ""
    for (let el in objBrandsFull) {
        const statusSearch = objBrandsFull[el].text.toLowerCase().includes(value.toLowerCase().replaceAll(' ', ''));
        if (statusSearch) {
            let itemBrand = templateBrandsItem(objBrandsFull[el].img, objBrandsFull[el].text);

            brandBlock.innerHTML = brandBlock.innerHTML + itemBrand;
        }
    }
    brandBlock.innerHTML = brandBlock.innerHTML + templateNotBrands("Нет моей марки")
})

brandInput.addEventListener("click", function () {
    $("#brandBlock").addClass("active");
})

brandBlock.addEventListener("click", function (event) {
    let target = event.target;
    let content = target.closest(".brand-list__el");
    let noMark = content !== null ? content.hasAttribute("data-mark") : false;
    if (content && !noMark) {
        brandInput.value = content.textContent.replace(/\s+/g, '');
        $("#brandBlock").removeClass("active");
    } else if (noMark) {
        brandInput.value = "Нет моей марки"
        $("#brandBlock").removeClass("active");
    }

    if (target.closest(".brand-list__el__btn")) {
        objContent(objBrandsFull, false)
    }
})

function objContentModel(obj, flag) {
    modelBlock.innerHTML = "";
    for (let el in obj) {
        let itemBrand = templateModalItem(obj[el].id, obj[el].name);
        modelBlock.innerHTML = modelBlock.innerHTML + itemBrand;
    }
    if (flag) {
        modelBlock.innerHTML = modelBlock.innerHTML + templateBrandsBtn("Все марки");
    } else {
        modelBlock.innerHTML = modelBlock.innerHTML + templateNotBrands("Нет моей марки")
    }
}

objContentModel(objModel, true)

const brandModalInput = document.querySelector("#brandModel");

brandModalInput.addEventListener("input", function (event) {
    let value = this.value;
    modelBlock.innerHTML = ""
    for (let el in objModelFull) {
        const statusSearch = objModelFull[el].name.toLowerCase().includes(value.toLowerCase().replaceAll(' ', ''));
        if (statusSearch) {
            let itemBrand = templateModalItem(objModelFull[el].id, objModelFull[el].name);

            modelBlock.innerHTML = modelBlock.innerHTML + itemBrand;
        }
    }
    modelBlock.innerHTML = modelBlock.innerHTML + templateNotBrands("Нет моей марки")
})

brandModalInput.addEventListener("click", function () {
    $("#modelBlock").addClass("active");
})

modelBlock.addEventListener("click", function (event) {
    let target = event.target;
    let content = target.closest(".brand-list__el");
    let noMark = content !== null ? content.hasAttribute("data-mark") : false;
    if (content && !noMark) {
        brandModalInput.value = content.textContent.replace(/\s+/g, '').toLowerCase().replaceAll(' ', '');
        $("#modelBlock").removeClass("active");
    } else if (noMark) {
        brandModalInput.value = "Нет моей марки"
        $("#modelBlock").removeClass("active");
    }

    if (target.closest(".brand-list__el__btn")) {
        objContentModel(objModelFull, false)
    }
})

const colorLIst = $("._color-item");

//отображение цвета
$.each(colorLIst, function (key, value) {
    let colorItem = value.getAttribute("data-color");
    value.style.backgroundColor = colorItem;
})

$(".custom-textarea").on("input", function () {
    const val = $(this).val();
    const maxLength = 2000;
    if (val.length <= maxLength) {
        $(this).next().find(".textarea-info__number").text(val.length)
    }
})

$(".custom-textarea").on('keyup', function () {
    if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
    }
});


const selectCurrency = document.querySelector("#currency")

const selectType = new Choices(selectCurrency, {
    searchEnabled: false,
    shouldSort: false,
})

ymaps.ready(init);

function init() {
    const searchInput = document.querySelector("#mapInput");

    var map = new ymaps.Map('map', {
            center: [53.90, 27.56],
            zoom: 12,
            controls: ['zoomControl'],
            behaviors: ['drag'],
        }
    );

    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search',
            noPlacemark: true,
            noSelect: true,
        }
    });
    map.controls.add(searchControl);
    var suugestView = new ymaps.SuggestView(searchInput);

    searchInput.addEventListener("input", function () {
        searchControl.search(this.value);
        searchControl.events.add('load', function (event) {
            if (!event.get('skip') && searchControl.getResultsCount()) {
                searchControl.showResult(0);
            }
        });
    })

    /*    var clusterer = new ymaps.Clusterer({
            clusterIcons: [
                {
                    href: 'img/burger.png',
                    size: [100, 100],
                    offset: [-50, -50]
                }
            ],
            clusterIconContentLayout: null
        });

        map.geoObjects.add(clusterer);*/

}

$(".ad-description-list").on("click", function () {
    let target = $(event.target);
    if (target.closest(".ad-description-list__el").length) {
        let blockVal = $(".custom-textarea[data-text=\"ad-description\"]").val();
        if (!blockVal) {
            $(".custom-textarea[data-text=\"ad-description\"]").val(target.text() + ", ");
        } else {
            $(".custom-textarea[data-text=\"ad-description\"]").val(blockVal + target.text() + ", ");
        }
        target.remove();
       if(!$(".ad-description-list").children().length){
           $(".ad-description-list").remove()
       }
    }
})


const maskPhone = () => {
    $(".dataUserTel").mask("+375 (99) 999-99-99");
}

maskPhone()


const templatePhone = function (){
    return`
 <div class="form-group form-group--tel__new">
     <input type="tel" placeholder="+375 (xx) xxx-xx-xx" class="custom-input dataUserTel" name="new-number">
     <span class="remove_phone">
     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.09758 6.44252L11.9531 10.298L10.2599 11.9912L6.40441 8.13569L2.56149 11.9786L0.845798 10.2629L4.68872 6.41999L0.842858 2.57413L2.53602 0.880967L6.38188 4.72683L10.2629 0.845859L11.9785 2.56156L8.09758 6.44252Z" fill="#666666"/>
</svg>
</span>
 </div>
`
}

$('.add-new-phone').on('click', function () {
    $('.form-tel-container').append(templatePhone)
    maskPhone()
    $(".remove_phone").on("click", function (event) {
        this.parentElement.remove();
    })
});

