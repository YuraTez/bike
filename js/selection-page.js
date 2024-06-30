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
})


document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "Марка": [],
        "Любая": ['Модель', 'Любая', 'S1000RR', 'R1250GS', 'F850GS', 'CBR600RR', 'Africa Twin', 'CB500X', 'Panigale V4', 'Monster 821', 'Scrambler', 'Duke 790', 'RC 390', 'Adventure 1290'],
        BMW: ['Модель', 'Любая', 'S1000RR', 'R1250GS', 'F850GS'],
        Honda: ['Модель', 'Любая', 'CBR600RR', 'Africa Twin', 'CB500X'],
        Ducati: ['Модель', 'Любая', 'Panigale V4', 'Monster 821', 'Scrambler'],
        Kawasaki: ['Модель', 'Любая', 'Ninja ZX-10R', 'Z650', 'Versys 1000'],
        Yamaha: ['Модель', 'Любая', 'YZF-R1', 'MT-09', 'Tenere 700'],
        'Harley-Davidson': ['Модель', 'Любая', 'Sportster', 'Street Glide', 'Road King'],
        KTM: ['Модель', 'Любая', 'Duke 790', 'RC 390', 'Adventure 1290'],
        Triumph: ['Модель', 'Любая', 'Street Triple', 'Tiger 800', 'Bonneville'],
    };

    const brandOptions = Object.keys(data).map(name => {
        return {value: name, label: name};
    });


    const brandSelect = document.getElementById('brand-select');
    const modelSelect = document.getElementById('model-select');
    const brandChoices = new Choices(brandSelect, {
        placeholder: true,
        searchPlaceholderValue: 'Марка',
        duplicateItemsAllowed: true,
        choices: brandOptions,
        shouldSort: false,
        shouldSortItems: false,
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

    function hideSelectItem() {
        setTimeout(() => {
            $('.custom-select-inner .choices__item--choice[data-id=1]').hide();
            $('.custom-select-inner:not(".select-no_reset") .choices__item--choice[data-id=2]').attr("data-value", "reset");
        }, 0)
    }

    hideSelectItem()
    brandSelect.addEventListener('change', function (event) {
        const selectedBrands = Array.from(brandSelect.selectedOptions).map(option => option.value);
        if (selectedBrands.length > 0) {
            const models = selectedBrands.flatMap(brand => data[brand]);
            const uniqueModels = [...new Set(models)];

            const modelOptions = uniqueModels.map(model => {
                return {value: model, label: model};
            });

            modelChoices.clearStore();
            modelChoices.setChoices(modelOptions, 'value', 'label', true);
            modelChoices.enable();
        } else {
            modelChoices.clearStore();
            modelChoices.enable();

        }
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

    });

    modelSelect.addEventListener('change', function (event) {
        const textContent = event.target.textContent.replace(/\s+/g, '')
        if (textContent.includes("Любая")) {

        }
        hideSelectItem()
    });
});

/*
is - selected*/
