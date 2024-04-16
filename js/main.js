// несколько селектов с кнопкой сброса
const selectList = document.querySelectorAll(".custom-select");

selectList.forEach((el)=>{
    const selectType = new Choices(el, {
        searchEnabled: false,
        shouldSort: false,
    })

    el.addEventListener(
        'change',
        function(event) {
            let textContent = event.target.textContent.replace(/\s+/g, '')
            if(textContent === "Сбросить"){
                selectType.setChoiceByValue('1');
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            }else{
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
    grodno: ["Область", "Сбросить" ,"Фрунзунский", "Лененский", "Московский"],
    gomel: ["Область", "Сбросить" ,"Фрунзунский", "Лененский", "Московский"],
    mogilev: ["Область", "Сбросить" ,"Фрунзунский", "Лененский", "Московский"],
    vit: ["Область", "Сбросить" , "Фрунзунский", "Лененский", "Московский"]
};

let cityArr = {
    "3": ["Город", "Сбросить", "Минск", "Брест", "Гродн", "Гомель", "Могилев", "Витебск"],
    "4": ["Город", "Сбросить", "Брест", "Гродн", "Гомель"],
    "5": ["Город", "Сбросить" ,"Брест", "Гродн", "Гомель"],
    "6": ["Город", "Сбросить" ,"Брест", "Гродн", "Гомель"],
    "7": ["Город", "Сбросить" ,"Брест", "Гродн", "Гомель"],
    "8": ["Город", "Сбросить" , "Брест", "Гродн", "Гомель"]
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


function addListener(el , select){
    $('.custom-select-inner .choices__item--choice[data-id=2]').attr("data-value", "reset");

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
            $('.custom-select-inner .choices__item--choice[data-id=2]').attr("data-value", "reset");
        },
        false,
    );
}

addListener(countryEl , countrySelect)
addListener(regionEl , regionSelect)
addListener(cityEl , citySelect)

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
                { value: `${i + 1}`, label: listsArr[itemSelect][i], disabled: false },

            ],
            'value',
            'label',
            false,
        );

    }
    $('.custom-select-inner .choices__item--choice[data-id=2]').attr("data-value", "reset");
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
                { value: `${i + 1}`, label: cityArr[itemSelect][i], disabled: false },

            ],
            'value',
            'label',
            false,
        );
    }
    $('.custom-select-inner .choices__item--choice[data-id=2]').attr("data-value", "reset");
    $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
}

let objBrands = {
    bmw : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw1 : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati1 : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley1 : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda1: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw2 : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati2 : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley2 : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda2: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw3 : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati3 : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley3 : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda3: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw4 : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati4 : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley4 : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda4: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw5 : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati5 : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley5 : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda5: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
    bmw6 : {
        img: "img/brand/1.svg",
        text: "BMW",
    },
    Ducati6 : {
        img: "img/brand/2.svg",
        text: "Ducati",
    },
    Harley6 : {
        img: "img/brand/3.svg",
        text: "Harley-Davidson",
    },
    Honda6: {
        img: "img/brand/1.svg",
        text: "Honda",
    },
};

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


const brandBlock = document.querySelector("#brandBlock")

for (let el in objBrands) {

    let itemBrand = templateBrandsItem(objBrands[el].img , objBrands[el].text);

    brandBlock.innerHTML = brandBlock.innerHTML + itemBrand;
}









