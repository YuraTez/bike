const templateFoundBrand = (name, sum) => {
    let brandEl =
        `
    <div class="found-brand__el">
            <a href="#" class="found-brand__name">
                ${name}
            </a>
            <span class="found-brand__line"></span>
            <span class="found-brand__sum">${sum}</span>
    </div>
    `
    return brandEl
}

const fullDataFoundBrand = {
    BMW: {name: "BMW", count: 4776},
    Honda: {name: "Honda", count: 6980},
    Motorland: {name: "Motorland", count: 4596},
    Voge: {name: "Voge", count: 4596},
    Ducati: {name: "Ducati", count: 1038},
    Kawasaki: {name: "Kawasaki", count: 1050},
    Suzuki: {name: "Suzuki", count: 1023},
    Yamaha: {name: "Yamaha", count: 1023},
    'Harley-Davidson': {name: "Harley-Davidson", count: 1092},
    KTM: {name: "KTM", count: 1115},
    Triumph: {name: "Triumph", count: 2046},
    Tesla: {name: "Tesla", count: 1500},
    Audi: {name: "Audi", count: 2000},
    Ford: {name: "Ford", count: 3000},
    Chevrolet: {name: "Chevrolet", count: 1800},
    Nissan: {name: "Nissan", count: 2200},
    Mercedes: {name: "Mercedes", count: 2500},
    Lexus: {name: "Lexus", count: 1400},
    Porsche: {name: "Porsche", count: 1700},
    Subaru: {name: "Subaru", count: 1300},
    Volkswagen: {name: "Volkswagen", count: 2100},
    Ferrari: {name: "Ferrari", count: 800},
    Lamborghini: {name: "Lamborghini", count: 750},
    Maserati: {name: "Maserati", count: 900},
    Bentley: {name: "Bentley", count: 650},
    'Aston Martin': {name: "Aston Martin", count: 700},
    'Rolls-Royce': {name: "Rolls-Royce", count: 600},
    'Alfa Romeo': {name: "Alfa Romeo", count: 850},
    Bugatti: {name: "Bugatti", count: 500},
    Cadillac: {name: "Cadillac", count: 950},
    Citroen: {name: "Citroen", count: 400},
    Fiat: {name: "Fiat", count: 300},
    Infiniti: {name: "Infiniti", count: 1100},
    Jaguar: {name: "Jaguar", count: 950},
    Jeep: {name: "Jeep", count: 1200},
    'Land Rover': {name: "Land Rover", count: 1150},
    Lincoln: {name: "Lincoln", count: 450},
    Mazda: {name: "Mazda", count: 1300},
    Mitsubishi: {name: "Mitsubishi", count: 1250},
    Peugeot: {name: "Peugeot", count: 1000},
    Renault: {name: "Renault", count: 850},
    Saab: {name: "Saab", count: 600},
    Seat: {name: "Seat", count: 500},
    Skoda: {name: "Skoda", count: 700},
    Volvo: {name: "Volvo", count: 1400}
};

const foundBrandBlock = document.querySelector(".found-brand-content");
const templateBtn = (obj) => {
    return `
    <div class="found-brand__btn">Все марки - <span>${obj}</span></div>
    `
}

function previewFoundBrand() {
    foundBrandBlock.innerHTML = ""
    for (let el in fullDataFoundBrand) {
        let index = Object.keys(fullDataFoundBrand)
        index.find((element, i) => {
            if (element === el && i < 11) {
                let item = templateFoundBrand(fullDataFoundBrand[el].name, fullDataFoundBrand[el].count)
                foundBrandBlock.innerHTML += item
                return
            } else if (element === el && i === 11) {
                foundBrandBlock.innerHTML += templateBtn(index.length)
                return;
            }
        })
    }
}

previewFoundBrand()

function addELlFoundBrand() {
    foundBrandBlock.innerHTML = ""
    for (let el in fullDataFoundBrand) {
        let item = templateFoundBrand(fullDataFoundBrand[el].name, fullDataFoundBrand[el].count)
        foundBrandBlock.innerHTML += item
    }
}

$("body").on("click", function () {
    let target = $(event.target);
    if (target.closest(".found-brand__btn").length) {
        $(".found-brand__collapse").addClass("active");
        addELlFoundBrand();
    } else if (target.closest(".found-brand__collapse").length) {
        $(".found-brand__collapse").removeClass("active");
        previewFoundBrand();
    }

    if(!target.closest(".save-search-popup").length && !target.closest(".save-search").length){
        $(".save-search-popup").removeClass("active");
    }
})


function hideSelectItem() {
    setTimeout(() => {
        $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
        $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
    }, 0)
}

document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "Марка": [],
        "Любая": ['Модель', 'Любая', 'S1000RR', 'R1250GS', 'F850GS', 'CBR600RR', 'Africa Twin', 'CB500X', 'Panigale V4', 'Monster 821', 'Scrambler', 'Duke 790', 'RC 390', 'Adventure 1290'],
        "Популярные": {
            BMW: ['Модель', 'Любая', 'S1000RR', 'R1250GS', 'F850GS'],
            Honda: ['Модель', 'Любая', 'CBR600RR', 'Africa Twin', 'CB500X'],
            Ducati: ['Модель', 'Любая', 'Panigale V4', 'Monster 821', 'Scrambler'],
        },
        "Все": {
            Kawasaki: ['Модель', 'Любая', 'Ninja ZX-10R', 'Z650', 'Versys 1000'],
            Yamaha: ['Модель', 'Любая', 'YZF-R1', 'MT-09', 'Tenere 700'],
            'Harley-Davidson': ['Модель', 'Любая', 'Sportster', 'Street Glide', 'Road King'],
            KTM: ['Модель', 'Любая', 'Duke 790', 'RC 390', 'Adventure 1290'],
            Triumph: ['Модель', 'Любая', 'Street Triple', 'Tiger 800', 'Bonneville'],
        }
    };

// Формируем структуру выбора
    const brandOptions = [
        // Кнопка сброса "Любая"
        { value: 'Марка', label: 'Марка'},
        { value: 'Любая', label: 'Любая', customProperties: { type: 'reset' } },

        // Популярные марки
        {
            value: 'popular_group',
            label: 'Популярные',
            disabled: true,
            customProperties: { type: 'group' }
        },
        ...Object.keys(data['Популярные']).map(brand => ({
            value: brand,
            label: brand,
            customProperties: { group: 'Популярные' }
        })),

        // Все мотоциклы
        {
            value: 'all_group',
            label: 'Все',
            disabled: true,
            customProperties: { type: 'group' }
        },
        ...Object.keys(data['Все']).map(brand => ({
            value: brand,
            label: brand,
            customProperties: { group: 'Все' }
        }))
    ];


    const brandSelect = document.getElementById('brand-select');
    const modelSelect = document.getElementById('model-select');
    const brandChoices = new Choices(brandSelect, {
        placeholder: true,
        searchPlaceholderValue: 'Марка',
        duplicateItemsAllowed: true,
        choices: brandOptions,
        shouldSort: false,
        shouldSortItems: false,
        searchEnabled: true,
        searchChoices: true

    });

    const modelChoices = new Choices(modelSelect, {
        placeholder: true,
        searchPlaceholderValue: 'Модель',
        choices: ["Модель"],
        shouldSort: false,
        resetScrollPosition: false,
        renderSelectedChoices: 'always',
        removeItemButton: true,
        duplicateItemsAllowed: true,
    });
    function moveSearchField() {
        const choicesContainer = document.querySelector('.row--brand .choices');

        const searchInput = choicesContainer.querySelector('.choices__input.choices__input--cloned');

        const dropdown = choicesContainer.querySelector('.choices__list--dropdown');

        if (searchInput && dropdown) {
            choicesContainer.insertBefore(searchInput, dropdown);
        }
    }

    moveSearchField();

    setTimeout(moveSearchField, 100);
    hideSelectItem()

    brandSelect.addEventListener('change', function (event) {
        const selectedBrand = event.target.value;

        if (selectedBrand.length > 0) {
            cntParam(1 , this.closest(".form-row__col"))
            this.parentElement.classList.add("is-active")
            this.closest(".choices").classList.add("is-active")
            this.closest(".form-row__col").classList.add("is-active")
            let models = [];

            if (data['Популярные'][selectedBrand]) {
                models = data['Популярные'][selectedBrand]
            } else if (data['Все'][selectedBrand]) {
                models = data['Все'][selectedBrand]
            }
            modelChoices.clearStore();
            modelChoices.setChoices(
                [
                    ...models.map(model => ({ value: model, label: model }))
                ],
                'value',
                'label',
                true
            );
            this.closest(".form-row__col").classList.add("is-active");
            modelChoices.enable();

            hideSelectItem()
        } else {
            modelChoices.clearStore();
            modelChoices.enable();
        }
        const textContent = event.target.textContent.replace(/\s+/g, '')
        if (textContent.includes("Любая")) {
            brandChoices.setChoiceByValue('Марка');
            modelChoices.setChoiceByValue('1')
            modelChoices.disable();
            cntParam(-1 ,this.closest(".form-row__col"))
            let activeEl = Array.from(this.closest(".form-group-custom-select").querySelectorAll(".is-active"));
            activeEl.forEach((el)=>{
                el.classList.remove("is-active")
            })
        }
        this.closest(".form-group-custom-select").querySelector(".custom-select--multiple").classList.remove("is-active")
        hideSelectItem()
    });

    modelSelect.addEventListener('choice', function (event) {
        const choiceValue = event.detail.choice.value;
        if (modelChoices.getValue(true).includes(choiceValue)) {
            setTimeout(() => {
                modelChoices.removeActiveItemsByValue(choiceValue);
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
                $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
            }, 0)
        } else {
            hideSelectItem()
        }

        if (choiceValue === 'Любая') {
            setTimeout(()=>{
                cntParam(-1 ,  this.closest(".form-row__col"))
                modelChoices.removeActiveItems();
                modelChoices.hideDropdown()
                brandChoices.setChoiceByValue('Модель');
                this.closest(".form-row__col").classList.remove("is-active")
            })
        }else{
            cntParam(1 ,  this.closest(".form-row__col"))
            this.closest(".form-row__col").classList.add("is-active")
        }

        listItemMultiple(this)
        hideSelectItem()
    });

    const templateSelect = (id)=>{
       return `
     <div class="form-row custom-select-inner form-group-custom-select flex-row">
            <div class="form-row__col row--brand">
                <div class="form-row">
                    <select id="brand-select-${id}"></select>
                </div>
                <div class="form-row add-select select-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.087 4.94545H12V7.10303H7.087V12H4.90072V7.10303H0V4.94545H4.90072V0H7.087V4.94545Z" fill="#666666"/>
                    </svg>
                </div>
            </div>
            <div class="form-row__col custom-select--multiple">
                <div class="form-row">
                    <select id="model-select-${id}" multiple disabled>
                        <option placeholder >Модель</option>
                    </select>
                </div>
                <div class="form-row remove-select select-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.09856 6.44252L11.9541 10.298L10.2609 11.9912L6.40539 8.13569L2.56247 11.9786L0.846775 10.2629L4.68969 6.41999L0.843834 2.57413L2.537 0.880967L6.38286 4.72683L10.2638 0.845859L11.9795 2.56156L8.09856 6.44252Z" fill="#666666"/>
                    </svg>
                </div>
            </div>
        </div>
    `
    }

    function addSelectBrandMark(id){

        const selectList = {
            [`brandChoices${id}`]: document.getElementById(`brand-select-${id}`),
            [`modelSelect${id}`]: document.getElementById(`model-select-${id}`)
        }
        const brandChoices = new Choices(selectList[`brandChoices${id}`], {
            placeholder: true,
            searchPlaceholderValue: 'Марка',
            duplicateItemsAllowed: true,
            choices: brandOptions,
            shouldSort: false,
            shouldSortItems: false,
        });

        const modelChoices = new Choices(selectList[`modelSelect${id}`], {
            placeholder: true,
            searchPlaceholderValue: 'Модель',
            choices: ["Модель"],
            shouldSort: false,
            resetScrollPosition: false,
            renderSelectedChoices: 'always',
            removeItemButton: true,
            duplicateItemsAllowed: true,
        });

        hideSelectItem()
        selectList[`brandChoices${id}`].addEventListener('change', function (event) {
            const selectedBrand = event.target.value;
            if (selectedBrand.length > 0) {
                cntParam(1 , this.closest(".form-row__col"))
                this.parentElement.classList.add("is-active")
                this.closest(".choices").classList.add("is-active")
                this.closest(".form-row__col").classList.add("is-active")
                let models = [];

                if (data['Популярные'][selectedBrand]) {
                    models = data['Популярные'][selectedBrand]
                } else if (data['Все'][selectedBrand]) {
                    models = data['Все'][selectedBrand]
                }
                modelChoices.clearStore();
                modelChoices.setChoices(
                    [
                        ...models.map(model => ({ value: model, label: model }))
                    ],
                    'value',
                    'label',
                    true
                );
                this.closest(".form-row__col").classList.add("is-active");
                
                modelChoices.enable();

                hideSelectItem()
            } else {
                modelChoices.clearStore();
                modelChoices.enable();
            }
            const textContent = event.target.textContent.replace(/\s+/g, '')
            if (textContent.includes("Любая")) {
                brandChoices.setChoiceByValue('Марка');
                modelChoices.setChoiceByValue('1')
                modelChoices.disable();
                cntParam(-1 ,this.closest(".form-row__col"))
                let activeEl = Array.from(this.closest(".form-group-custom-select").querySelectorAll(".is-active"));
                activeEl.forEach((el)=>{
                    el.classList.remove("is-active")
                })
            }
            this.closest(".form-group-custom-select").querySelector(".custom-select--multiple").classList.remove("is-active")
            hideSelectItem()
        });

        selectList[`modelSelect${id}`].addEventListener('choice', function (event) {
            const choiceValue = event.detail.choice.value;
            if (modelChoices.getValue(true).includes(choiceValue)) {
                setTimeout(() => {
                    modelChoices.removeActiveItemsByValue(choiceValue);
                    $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
                    $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
                }, 0)
            } else {
                hideSelectItem()
            }

            if (choiceValue === 'Любая') {
                setTimeout(()=>{
                    modelChoices.removeActiveItems();
                    modelChoices.hideDropdown()
                    brandChoices.setChoiceByValue('Модель');
                    cntParam(-1 , this.closest(".form-row__col"))
                    this.closest(".form-row__col").classList.remove("is-active")
                })
            }else{
                console.log('1111')
                cntParam(1 , this.closest(".form-row__col"))
                this.closest(".form-row__col").classList.add("is-active")
                listItemMultiple(this)
            }

        });

        selectList[`modelSelect${id}`].addEventListener('change', function (event) {
            hideSelectItem()
        });
    }

    $("body").on("click" , function (event){
        let target = event.target;

        if(target.closest(".add-select")){

            let numberId = $(".model-selection").children().length
            $(".model-selection").append(templateSelect(numberId + 1))
            addSelectBrandMark(numberId + 1)
            $(".remove-select").removeClass("hide");
            $(".remove-select").addClass("show");

        } else if(target.closest(".remove-select")){
           let lengthItem = target.closest(".custom-select-inner").querySelectorAll(".is-active").length;
           let activeElem = target.closest(".custom-select-inner").querySelector(".is-active")
           if(lengthItem < 4){
               cntParam(-1 , activeElem)
           }else{
               cntParam(-2 , activeElem)
           }
            target.closest(".custom-select-inner").remove()
            if($(".model-selection").children().length < 2){
                $(".remove-select").addClass("hide");
                $(".remove-select").removeClass("show");
            }
        }
    })

});

const transportSelect = document.getElementById('transportSelect');
const cylinderSelect = document.getElementById('cylinder');
const cyclesSelect = document.getElementById('cycles');
const mainGearSelect = document.getElementById('mainGear');
const transmissionSelect = document.getElementById('transmission');


function listItemMultiple(item) {
    setTimeout(()=>{
        let container = item.parentNode.querySelector(".choices__list--multiple");
        let allElem = Array.from(item.querySelectorAll("option")).map(item => item.innerText)

        $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
        $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
        if (item.length) {
            let concatStr = allElem.reduce((str, el) => str + "; " + el)
            container.innerHTML = `
              <div class="multipleSelectedContent">${concatStr}</div>
              <div class="multipleSelectedCnt">(${item.length})</div>
              `;
        }else{
            cntParam(-1 ,item.closest(".form-row__col"))
            item.closest(".form-row__col").classList.remove("is-active")
        }
    })
}

function selectMultiple(item , name){
    const selectMultiple = new Choices(item, {
        placeholder: true,
        shouldSort: false,
        resetScrollPosition: false,
        renderSelectedChoices: 'always',
        removeItemButton: true,
        duplicateItemsAllowed: true,
    });

    item.addEventListener('choice', function (event) {
        const choiceValue = event.detail.choice.value;
        if (selectMultiple.getValue(true).includes(choiceValue)) {
            setTimeout(() => {
                selectMultiple.removeActiveItemsByValue(choiceValue);
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
                $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
            }, 0)
        } else {
            hideSelectItem()
        }

        if (choiceValue === 'Любая') {
            setTimeout(()=>{
                selectMultiple.removeActiveItems();
                selectMultiple.hideDropdown()
                cntParam(-1 ,this.closest(".form-row__col"))
                this.closest(".form-row__col").classList.remove("is-active")

            })
        }else{
            cntParam(1 , this.closest(".form-row__col"));
            this.closest(".form-row__col").classList.add("is-active")

        }
        listItemMultiple(item)
    });

    hideSelectItem()
}

selectMultiple(transportSelect , "Тип мотоцикла")
selectMultiple(cylinderSelect , "Расположение цилиндров")
selectMultiple(cyclesSelect , "Число тактов")
selectMultiple(mainGearSelect , "Главная передача")
selectMultiple(transmissionSelect , "Коробка")

let listCustomSelect = document.querySelectorAll(".color-select select");

listCustomSelect.forEach((el)=>{
    el.addEventListener("change",(event)=>{
        if(event.target.value !== "reset"){
            cntParam(1 , event.target.closest(".choices__inner"))
            event.target.closest(".choices__inner").classList.add("is-active")
        }else{
            cntParam(-1 , event.target.closest(".choices__inner"))
            event.target.closest(".choices__inner").classList.remove("is-active")
        }
    })
})

let inputChange = document.querySelectorAll(".input-change");

inputChange.forEach(function (el){
    el.addEventListener("change" , function (){
        const value = this.value.replace(this.getAttribute("data-text"), "");
        if(value){
            cntParam(1 , this.parentElement)
            this.value = value.replace(", ", "") + ", " + this.getAttribute("data-text");
            this.parentElement.classList.add("is-active");
        }else{
            cntParam(-1 , this.parentElement)
            this.parentElement.classList.remove("is-active")
        }
    })
})

$(".reset-input").on("click" , function (){
    cntParam(-1 , this.parentElement)
    let inputElem = $(this).parent().find("input");
    this.parentElement.classList.remove("is-active");
    inputElem.val(inputElem.attr("placeholder"))
})


$(".radio-color--checkbox").on("click" , function (event){
    let target = $(event.target)
    if(target.closest(".color-btn__arrow").length){
        $(".radio-color--checkbox").toggleClass("active");
        $(".color-btn__arrow").toggleClass("rotate");
    }else if($(".radio-color--checkbox .radio-block:checked").length
        && $(".radio-color--checkbox .radio-block:checked").length > 0){
        $(".color-btn__cross").addClass("active");
        $(".color-btn__arrow").removeClass("active","rotate")
        $(".radio-color--checkbox").addClass("active");
    }else{
        $(".radio-color--checkbox").removeClass("active");
        $(".color-btn__cross").removeClass("active");
        $(".color-btn__arrow").removeClass("rotate");
        $(".color-btn__arrow").addClass("active");
    }
})

$(".color-btn__cross").on("click" , function (){
    $(".radio-color--checkbox .radio-block:checked").each((i , el)=>{
        el.checked = false;
        }
    )

    $(".radio-color--checkbox").removeClass("active");
    $(".color-btn__cross").removeClass("active");
    $(".color-btn__arrow").removeClass("rotate");
    $(".color-btn__arrow").addClass("active");
})

$(".all-parameters").on("click" , function (){
    let text = $(".all-parameters__text").text().toLowerCase()
    if(text === "скрыть"){
        $(".all-parameters__text").text("Все параметры")
        $(".inner-more-form").removeClass("active");
        $(".all-parameters").removeClass("active");
    }else{
        $(".inner-more-form").addClass("active");
        $(".all-parameters").addClass("active");
        $(".all-parameters__text").text("Скрыть")
    }
})

$(".save-search").on("click" , function (){
    this.classList.add("active");
    $(".save-search-popup").addClass("active");
    selectableItems();
})

$(".search-popup__btn").on("click" , function (){
    $(".save-search").removeClass("active");
    $(".save-search-popup").removeClass("active");
})


function addBrandToString(brandName, brandString) {
    const lowerCaseBrandName = brandName.toLowerCase();
    const lowerCaseBrandString = brandString.toLowerCase();
    if (lowerCaseBrandString.includes(lowerCaseBrandName)) {
        return brandString;
    }
    const updatedBrandString = brandString ? `${brandString}, ${brandName}` : brandName;
    return updatedBrandString;
}


function selectableItems(){
    let saveBrand = document.querySelector(".search-popup__mark");
    saveBrand.textContent = ""
    let saveParam = document.querySelector(".search-popup__parameters");
    saveParam.textContent = ""
    let arrSelectable = document.querySelectorAll(".choices__inner.is-active , .form-row__col.is-active");

    arrSelectable.forEach((el)=>{
       let content = el.querySelector(".choices__item--selectable");
       let brand = el.closest(".row--brand");
        if (brand) {
            saveBrand.textContent = addBrandToString(content.getAttribute("data-value"), saveBrand.textContent);
        } else if (el.classList.contains("custom-select--multiple")) {
            let multipleItems = el.querySelector(".choices__list--multiple .multipleSelectedContent").innerText;
            let brandName = el.closest(".form-row").querySelector(".row--brand .choices__item--selectable").getAttribute("data-value");
            multipleItems = multipleItems.split(";");
            multipleItems.forEach((multiItem) => {
                let brandMark = multiItem;
                let str = `${brandName} ${brandMark}`;
                saveBrand.textContent = addBrandToString(str, saveBrand.textContent);
                let regEx = brandName + ",";
                saveBrand.textContent = saveBrand.textContent.replace(regEx, '')
            })
        }else if (el.querySelector(".custom-select--multiple")){
            let multipleItems = el.querySelector(".choices__list--multiple .multipleSelectedContent").innerText;
            multipleItems = multipleItems.split(";");
            multipleItems.forEach((multiItem) => {
                let brandMark = multiItem;
                saveParam.textContent = addBrandToString(brandMark, saveParam.textContent);
            })
        }else if(el.classList.contains("choices__inner")){
            let textContent = el.querySelector(".choices__item--selectable").getAttribute("data-value");
            if(el.closest(".year-end")){
                let yearStart = document.querySelector(".year-start select").value
                console.log(yearStart)
                if(yearStart){
                    saveParam.textContent = saveParam.textContent + `-${textContent}`
                }else{
                    saveParam.textContent = saveParam.textContent + `${textContent}`
                }

            }else{
                saveParam.textContent = addBrandToString(textContent, saveParam.textContent);
            }

        }
        else  {
            saveParam.textContent = addBrandToString(el.querySelector("input").value, saveParam.textContent);
        }
    })
}
let cntParamСontent = document.querySelector(".cnt-parameters");

function cntParam(num , el){
    if(!el.classList.contains("is-active")){
        cntParamСontent.textContent = +cntParamСontent.textContent + num;
    }else if(num < 0){
        cntParamСontent.textContent = +cntParamСontent.textContent + num;
    }
}

function activeItems(){
    let activeItem = document.querySelectorAll(".store-active");
    activeItem.forEach((el)=>{
        el.querySelector(".choices__inner").classList.add("is-active");
    })
}

document.addEventListener('DOMContentLoaded', function() {
    activeItems()
}, false);



