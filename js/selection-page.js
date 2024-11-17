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

    if(target.closest(".remove-save-item").length){
        target.closest(".save-list__item").remove()
    }else if(!target.closest(".save-list-container").length && !target.closest(".save-list").length){
        $(".save-list").removeClass("active")
        addScroll()
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
    let choicesInstances = [] ;

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

        choicesInstances.push(modelChoices)

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
                cntParam(1 , this.closest(".form-row__col"))
                this.closest(".form-row__col").classList.add("is-active")
                listItemMultiple(this)
            }

        });

        selectList[`modelSelect${id}`].addEventListener('change', function (event) {
            hideSelectItem()
        });
    }
    let numberIdSelect = 1

    $("body").on("click" , function (event){
        let target = event.target;

        if(target.closest(".add-select")){
            $(".model-selection").append(templateSelect(numberIdSelect))
            addSelectBrandMark(numberIdSelect)
            $(".remove-select").removeClass("hide");
            $(".remove-select").addClass("show");
            numberIdSelect++

        } else if(target.closest(".remove-select")){
           let lengthItem = target.closest(".custom-select-inner").querySelectorAll(".is-active").length;
           let activeElem = target.closest(".custom-select-inner").querySelector(".is-active")
           if(lengthItem < 4 && lengthItem){
               cntParam(-1 , activeElem)
           }else if(lengthItem){
               cntParam(-2 , activeElem)
           }
            target.closest(".custom-select-inner").remove()
            if($(".model-selection").children().length < 2){
                $(".remove-select").addClass("hide");
                $(".remove-select").removeClass("show");
            }
        }
    })

    $(".reset-parameters , .search-popup__btn").on("click" , function (){
        $(".save-search").removeClass("active");
        if(choicesInstances.length){
            choicesInstances.forEach((el)=>{
                setTimeout(()=> el.disable(),500)
            })
        }
        setTimeout(()=> modelChoices.disable(),500)

    })
});

const transportSelect = document.getElementById('transportSelect');
const cylinderSelect = document.getElementById('cylinder');
const cyclesSelect = document.getElementById('cycles');
const mainGearSelect = document.getElementById('mainGear');
const transmissionSelect = document.getElementById('transmission');


function listItemMultiple(item) {
    let val = item.value
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
            if(val !== ""){
                cntParam(-1 ,item.closest(".form-row__col"))
            }
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
console.log('1')
        if(event.target.value !== "reset"){
            setTimeout(()=> event.target.closest(".choices__inner").classList.add("is-active"))
            if(el.closest(".no-save")){
                return
            }
            cntParam(1 , event.target.closest(".choices__inner"))
        }else{
            setTimeout(()=>event.target.closest(".choices__inner").classList.remove("is-active"))
            if(el.closest(".no-save")){
                return
            }
            cntParam(-1 , event.target.closest(".choices__inner"))

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

$(".color-btn__cross").on("click", function () {
    cntParamСontent.textContent = +cntParamСontent.textContent - $(".radio-color--checkbox .radio-block:checked").length;
    $(".radio-color--checkbox .radio-block:checked").each((i, el) => {
        el.checked = false;
    })

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

const templateItemListSave = (i, brand, info, checked )=>{
    return`<div class="save-list__item">
                <a href="#" class="search-popup__mark">${brand}</a>
                <a href="#" class="search-popup__parameters">${info}</a>
                <div class="form-row form-row-checkbox form-row-checkbox--selection no-save">
                    <input type="checkbox" class="input-checkbox dependent-checkbox-${i}" name="emailMes" id="emailMes-${i}" ${checked}>
                    <label for="emailMes-${i}" class="checkbox-label">Уведомления на электронную почту</label>
                </div>
                                
                <div class="form-group custom-select-inner form-group-custom-select color-select no-save">
                    <select name="type-moto" class="select-type custom-select right-select" id="custom-select-${i}">
                        <option value="">
                            Получать письма
                        </option>
                        <option value="reset">
                            Сбросить
                        </option>
                        <option value="Получать письма каждые 4 часа">
                            Получать письма каждые 4 часа
                        </option>
                        <option value="Получать письма каждые 8 часа">
                            Получать письма каждые 8 часа
                        </option>
                        <option value=" Получать письма каждые 8 часа">
                            Получать письма каждые 24 часа
                        </option>
                    </select>
                </div>
                <div class="remove-save-item">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2853 15.9999H3.42815C2.48284 15.9999 1.71387 15.2309 1.71387 14.2856V5.14272C1.71387 4.82717 1.96975 4.57129 2.2853 4.57129H11.4282C11.7437 4.57129 11.9996 4.82717 11.9996 5.14272V14.2856C11.9996 15.2309 11.2306 15.9999 10.2853 15.9999ZM2.85672 5.71415V14.2856C2.85672 14.6006 3.11312 14.857 3.42815 14.857H10.2853C10.6003 14.857 10.8567 14.6006 10.8567 14.2856V5.71415H2.85672Z" fill="#ED1C24"/>
                                    <path d="M12 5.71446H1.71429C0.768972 5.71446 0 4.94549 0 4.00017C0 3.05486 0.768972 2.28589 1.71429 2.28589H12C12.9453 2.28589 13.7143 3.05486 13.7143 4.00017C13.7143 4.94549 12.9453 5.71446 12 5.71446ZM1.71429 3.42875C1.39926 3.42875 1.14286 3.68515 1.14286 4.00017C1.14286 4.3152 1.39926 4.5716 1.71429 4.5716H12C12.315 4.5716 12.5714 4.3152 12.5714 4.00017C12.5714 3.68515 12.315 3.42875 12 3.42875H1.71429Z" fill="#ED1C24"/>
                                    <path d="M9.14286 3.42857H4.57143C4.25589 3.42857 4 3.17269 4 2.85714V0.571429C4 0.255886 4.25589 0 4.57143 0H9.14286C9.4584 0 9.71429 0.255886 9.71429 0.571429V2.85714C9.71429 3.17269 9.4584 3.42857 9.14286 3.42857ZM5.14286 2.28571H8.57143V1.14286H5.14286V2.28571Z" fill="#ED1C24"/>
                                    <path d="M5.14272 13.7138C4.82717 13.7138 4.57129 13.4579 4.57129 13.1424V7.42812C4.57129 7.11258 4.82717 6.85669 5.14272 6.85669C5.45826 6.85669 5.71415 7.11258 5.71415 7.42812V13.1424C5.71415 13.4579 5.45826 13.7138 5.14272 13.7138Z" fill="#ED1C24"/>
                                    <path d="M8.57094 13.7143C8.2554 13.7143 7.99951 13.4584 7.99951 13.1429V7.42861C7.99951 7.11306 8.2554 6.85718 8.57094 6.85718C8.88648 6.85718 9.14237 7.11306 9.14237 7.42861V13.1429C9.14237 13.4584 8.88648 13.7143 8.57094 13.7143Z" fill="#ED1C24"/>
                                </svg>
                                Удалить поиск
                            </div>
        </div>`
}

function removeDuplicates(el) {
    const select = document.querySelector(el);
    const textSet = new Set();
    for (let i = select.options.length - 1; i >= 0; i--) {
        const option = select.options[i];
        if (textSet.has(option.text)) {
            select.remove(i);
        } else {
            textSet.add(option.text);
        }
    }
}

let numItemSearch = 0;

$(".save-search__save").on("click", function (){
    this.parentElement.classList.add("active");
    $(".save-search-popup").addClass("active");
})

$(".save-search__prev").on("click" , function (){
    this.parentElement.classList.add("active");
    $(".save-search-popup").addClass("active");
    selectableItems();
    let content = document.querySelector(".save-search-popup");
    let saveBrandContent = document.querySelector(".save-search-popup .search-popup__mark").textContent;
    let saveParamContent = document.querySelector(".save-search-popup .search-popup__parameters").textContent;
    let handleInputCheck = content.querySelector("input").checked ?  "checked" : "";
    let selectSaveInfo = document.querySelector(".save-search-popup .choices__list--single .choices__item--selectable").textContent.trim();

    if(!saveBrandContent){
        saveBrandContent = "Все марки"
    }

    let contentClone = content.cloneNode(true)
    contentClone.querySelector(".search-popup__btn").remove();

    $(".save-list").append(templateItemListSave(numItemSearch , saveBrandContent , saveParamContent , handleInputCheck))
    let selectNew = `#custom-select-${numItemSearch}`
    removeDuplicates(selectNew)
    let select = document.querySelector(selectNew);

    const selectHistory = new Choices(select, {
        searchEnabled: false,
        shouldSort: false,
        duplicateItemsAllowed:false
    })
    setTimeout(()=>{
        $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
    },0)
    if(!handleInputCheck){
        selectHistory.disable()
    }

    select.addEventListener("change" , function (){
            let textContent = event.target.textContent.replace(/\s+/g, '')
            if (textContent === "Сбросить") {
                selectHistory.setChoiceByValue('');
                setTimeout(() => {
                    this.closest(".choices__inner").classList.remove("is-active")
                }, 100)

            }
            setTimeout(() => {
                $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            }, 500)

    })

    function selectOptionByText(text) {
        const options = select.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].text === text) {
                select.value = options[i].value;
                selectHistory.setChoiceByValue(select.value);
                break;
            }
        }
    }

    $(`.dependent-checkbox-${numItemSearch}`).on("change", function (){
        if(this.checked){
            selectHistory.enable()
        }else{
            selectHistory.disable()
            selectHistory.containerInner.element.classList.remove("is-active")
        }
    })

    selectOptionByText(selectSaveInfo);


    if(selectSaveInfo !== "Получать письма"){
        select.closest(".choices__inner").classList.add("is-active");
    }

    select.addEventListener('change', function (event) {
            let textContent = event.target.textContent.replace(/\s+/g, '')
            if (textContent === "Сбросить") {
                this.closest(".choices__inner").classList.remove("is-active")
            }else{
                this.closest(".choices__inner").classList.add("is-active")
            }
            addScroll()
            setTimeout(()=>{
                $('.custom-select-inner .choices__item--choice[data-id=1]').show();
            },0)
        },
        false,
    );



    $(".save-list__item .search-popup__parameters").each(function (i, el){

       if (!el.textContent){
           el.remove()
       }
    })

    numItemSearch++
})

$(".search-popup__btn").on("click" , function (){
    $(".save-search").removeClass("active");
    $(".save-search-popup").removeClass("active");
    $(".selection-block").trigger('reset')
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
    let saveBrand = document.querySelector(".save-search-popup .search-popup__mark");
    saveBrand.textContent = ""
    let saveParam = document.querySelector(".save-search-popup .search-popup__parameters");
    saveParam.textContent = ""
    let arrSelectable = document.querySelectorAll(".choices__inner.is-active , .form-row__col.is-active");
    let checkboxList = document.querySelectorAll("input[type='checkbox']:checked")
    let radioList = document.querySelectorAll("input[type='radio']:checked")

   if(!arrSelectable.length){
       saveBrand.textContent = "Все марки"
   }
    arrSelectable.forEach((el)=>{
       let content = el.querySelector(".choices__item--selectable");
       let brand = el.closest(".row--brand");
        let filteredElements = Array.from(arrSelectable).filter(element =>
            element.closest('.row--brand') !== null
        );
        if (!filteredElements.length) {
            saveBrand.textContent = "Все марки"
        }


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
            if(el.closest(".no-save")){
                return
            }
            let textContent = el.querySelector(".choices__item--selectable").getAttribute("data-value");
            if(el.closest(".year-end")){
                let yearStart = document.querySelector(".year-start select").value
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

    checkboxList.forEach((el)=>{
        if(!el.closest(".no-save")){
            let str = `${el.value}`;
            saveParam.textContent = addBrandToString(str, saveParam.textContent);
            let regEx = el.value + ",";
            saveParam.textContent = saveParam.textContent.replace(regEx, '')
        }
    });
    radioList.forEach((el)=>{
        let elValue = el.value.toLowerCase();
        if (elValue !== "неважно" && elValue !== "все"){
            let str = `${el.value}`;
            saveParam.textContent = addBrandToString(str, saveParam.textContent);
            let regEx = el.value + ",";
            saveParam.textContent = saveParam.textContent.replace(regEx, '')
        }
    })

    let location = document.querySelectorAll(".form-row__col-30.is-active");

    location.forEach((el, i)=>{
        let content = el.querySelector(".choices__item--selectable").textContent.trim();
        if(location.length - 1 === i ){
            saveParam.textContent = saveParam.textContent + " " + content
        }else{
            saveParam.textContent = saveParam.textContent + ` ${content},`
        }
    })


}
let cntParamСontent = document.querySelector(".cnt-parameters");

function cntParam(num , el){
    $(".save-search").removeClass("active");
    if(!el.classList.contains("is-active") && el.closest(".inner-more-form")){
        cntParamСontent.textContent = +cntParamСontent.textContent + num;
    }else if(num < 0 && el.closest(".inner-more-form")){
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

$('.selection-block input[type="checkbox"]').on('click', function () {
    if (this.closest(".no-save")) {
        return
    }

    $(".save-search").removeClass("active");
    if ($(this).is(':checked')) {
        cntParamСontent.textContent = +cntParamСontent.textContent + 1;
    } else {
        cntParamСontent.textContent = +cntParamСontent.textContent - 1;
    }
});

$('input[type="radio"]').on('click', function() {
    if (this.closest(".no-save")) {
        return
    }
    let container = this.closest(".form-row-radio-block")
    let elValue = $(this).val().toLowerCase();
    $(".save-search").removeClass("active");
    if(!container.classList.contains("active")){
        container.classList.add("active");
        cntParamСontent.textContent = +cntParamСontent.textContent + 1;
    }else if(elValue === "неважно" || elValue === "все"){
        cntParamСontent.textContent = +cntParamСontent.textContent - 1;
        container.classList.remove("active");
    }
});

$(".save-list-btn").on("click" , function (){
    $(".save-list").addClass("active");
})

function showList(list , elPosition) {

    const rect = elPosition.getBoundingClientRect();

    list.style.top = `${rect.bottom + 5}px`;
    list.style.left = `${rect.left}px`;
    list.style.width = `${rect.width}px`;
    list.style.display = 'block';

}

const scrollableElement = document.querySelector('.save-list');


function preventScroll(event) {
    event.preventDefault();
}

$(".save-list").on("click" , function (event){

    let target = event.target;
    let parent = target.closest(".save-list__item");
    let list = parent.querySelector(".choices__list--dropdown")

    if(target.classList.contains("choices__inner") || target.closest(".choices__inner")){
        let elPosition = parent.querySelector(".choices");
        showList(list , elPosition)
        setTimeout(()=>{

            if(target.closest(".is-open") !== null){
                removeScroll()
            }else{
                addScroll()
            }
        },200)

    }else{
        list.style.width = 0
        addScroll()
    }
})

function hasScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    return documentHeight > windowHeight;
}

function addScroll(){
    const scrollTop = window.scrollY;

    scrollableElement.removeEventListener('wheel', preventScroll);
    scrollableElement.removeEventListener('touchmove', preventScroll);
    $("body").removeClass("no-scroll")
    $("body").removeClass("fake")
}

function removeScroll(){
    const scrollTop = window.scrollY;
    $("body").addClass("no-scroll")
    if (hasScroll()) {
        $("body").addClass("fake")
    }
    scrollableElement.addEventListener('wheel', preventScroll, { passive: false });
    scrollableElement.addEventListener('touchmove', preventScroll, { passive: false });
}