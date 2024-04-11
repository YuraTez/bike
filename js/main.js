const selectMoto = document.querySelector("#typeMoto")
const selectType = new Choices(selectMoto, {
    searchEnabled: false,
    shouldSort: false,
})

$('.select-type-moto .choices__item--choice[data-id=1]').hide();

selectMoto.addEventListener(
    'change',
    function(event) {
        let textContent = event.target.textContent.replace(/\s+/g, '')
       if(textContent === "Сбросить"){
           selectType.setChoiceByValue('1');
           $('.select-type-moto .choices__item--choice[data-id=1]').hide();
       }else{
           $('.select-type-moto .choices__item--choice[data-id=1]').hide();
       }
    },
    false,
);

