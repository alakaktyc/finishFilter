const arrDesk = [
    {
        ID: 46130,
        UF_CRM_1582909609: 'BY',
        UF_CRM_1582909937: 'Беларусь',
        UF_CRM_1582909249:'Минская обл.',
        UF_CRM_1582909468:'Борисовский р-н',
        UF_CRM_1577438281365: 'Борисов',
        UF_CRM_1582909639: 'CZ',
        UF_CRM_1582909954: 'Чехия',
        UF_CRM_1582909273:'48 кв',
        UF_CRM_1582909491:'48 кв',
        UF_CRM_1577438296576: 'Мельник',
        UF_CRM_1577687543: 'Тент',
        UF_CRM_1577687860: 'Боковая загрузка',
        UF_CRM_1573641711: 'пиломатериал',
        UF_CRM_1577436773286: 82,
        UF_CRM_1577436810522: 23,
        UF_CRM_1577443693908: '~',
        UF_CRM_1573635128: '2020-02-16',
        UF_CRM_1580833330: '2020-03-10',
        DATE_CREATE: '2020-02-02',
        UF_CRM_1582966708: false
    },
    {
        ID: 46131,
        UF_CRM_1582909609: 'BY',
        UF_CRM_1582909937: 'Беларусь',
        UF_CRM_1582909249:'Могилёвская обл.',
        UF_CRM_1582909468:'Могилёвский р-н',
        UF_CRM_1577438281365: 'Могилёв',
        UF_CRM_1582909639: 'CZ',
        UF_CRM_1582909954: 'Чехия',
        UF_CRM_1582909273:'48 кв',
        UF_CRM_1582909491:'48 кв',
        UF_CRM_1577438296576: 'Мельник',
        UF_CRM_1577687543: 'Тент',
        UF_CRM_1577687860: 'Боковая загрузка',
        UF_CRM_1573641711: 'пиломатериал',
        UF_CRM_1577436773286: 82,
        UF_CRM_1577436810522: 23,
        UF_CRM_1577443693908: '~',
        UF_CRM_1573635128: '2020-02-16',
        UF_CRM_1580833330: '2020-03-10',
        DATE_CREATE: '2020-02-01',
        UF_CRM_1582966708: false
    },
    {
        ID: 46132,
        UF_CRM_1582909609: 'PL',
        UF_CRM_1582909937:'Польша',
        UF_CRM_1582909249:'48 кв',
        UF_CRM_1582909468:'48 кв',
        UF_CRM_1577438281365: 'Гданьск',
        UF_CRM_1582909639: 'BY',
        UF_CRM_1582909954: 'Беларусь',
        UF_CRM_1582909273:'Могилёвская обл.',
        UF_CRM_1582909491:'Могилёвский р-н',
        UF_CRM_1577438296576: 'Могилёв',
        UF_CRM_1577687543: 'Тент',
        UF_CRM_1577687860: 'Боковая загрузка',
        UF_CRM_1573641711: 'пиломатериал',
        UF_CRM_1577436773286: 82,
        UF_CRM_1577436810522: 23,
        UF_CRM_1577443693908: '~',
        UF_CRM_1573635128: '2020-02-16',
        UF_CRM_1580833330: '2020-03-10',
        DATE_CREATE: '2020-02-03',
        UF_CRM_1582966708: false
    },
    {
        ID: 46133,
        UF_CRM_1582909609: 'BY',
        UF_CRM_1582909937: 'Беларусь',
        UF_CRM_1582909249:'Минская обл.',
        UF_CRM_1582909468:'Любанский р-н',
        UF_CRM_1577438281365: 'Любань',
        UF_CRM_1582909639: 'PL',
        UF_CRM_1582909954: 'Польша',
        UF_CRM_1582909273:'83 кв',
        UF_CRM_1582909491:'83 кв',
        UF_CRM_1577438296576: 'Вроцлав',
        UF_CRM_1577687543: 'Тент',
        UF_CRM_1577687860: 'Боковая загрузка',
        UF_CRM_1573641711: 'пиломатериал',
        UF_CRM_1577436773286: 90,
        UF_CRM_1577436810522: 22,
        UF_CRM_1577443693908: '~',
        UF_CRM_1573635128: '2020-02-20',
        UF_CRM_1580833330: '2020-03-10',
        DATE_CREATE: '2020-02-03',
        UF_CRM_1582966708: false
    },
    {
        ID: 46134,
        UF_CRM_1582909609: 'BY',
        UF_CRM_1582909937: 'Беларусь',
        UF_CRM_1582909249:'Минская обл.',
        UF_CRM_1582909468:'Минский р-н',
        UF_CRM_1577438281365: 'Михановичи',
        UF_CRM_1582909639: 'AT',
        UF_CRM_1582909954: 'Австрия',
        UF_CRM_1582909273:'68 кв',
        UF_CRM_1582909491:'68 кв',
        UF_CRM_1577438296576: 'Брегенц',
        UF_CRM_1577687543: 'Автобус',
        UF_CRM_1577687860: 'загрузка',
        UF_CRM_1573641711: 'мдф',
        UF_CRM_1577436773286: 86,
        UF_CRM_1577436810522: 19,
        UF_CRM_1577443693908: '~',
        UF_CRM_1573635128: '2020-02-18',
        UF_CRM_1580833330: '2020-03-10',
        DATE_CREATE: '2020-02-05',
        UF_CRM_1582966708: false
    }
];

const cntrFrom = document.querySelector('.filter__country-from');
const cntrTo = document.querySelector('.filter__country-to');
const typeTrans = document.querySelector('.filter__type-transport');


const selFrom = document.querySelector('.from');
function statusOptionFrom() {
    const selectFrom = document.querySelector('.from').children;
    for (let i = 0; i < selectFrom.length; i++){
        if (selectFrom[0].value === 'Все'){
            selectFrom[1].value = 'Все';
            selectFrom[1].disabled = true;
            selectFrom[2].value = 'Все';
            selectFrom[2].disabled = true;
        }
        else if (selectFrom[1].value === 'Все'){
            selectFrom[2].value = 'Все';
            selectFrom[2].disabled = true;
        }
    }

}

const selTo = document.querySelector('.to');
function statusOptionTo() {
    const selectFrom = document.querySelector('.to').children;
    for (let i = 0; i < selectFrom.length; i++){
        if (selectFrom[0].value === 'Все'){
            selectFrom[1].value = 'Все';
            selectFrom[1].disabled = true;
            selectFrom[2].value = 'Все';
            selectFrom[2].disabled = true;
        }
        else if (selectFrom[1].value === 'Все'){
            selectFrom[2].value = 'Все';
            selectFrom[2].disabled = true;
        }
    }

}
selTo.addEventListener('click', statusOptionTo);
selFrom.addEventListener('click', statusOptionFrom);


function getContent() {

    let arrCountryFrom = [];
    let arrCountryTo = [];

    let from = [];
    let to = [];

    let arrTransport = [];
    let typeTransport = [];

    for (let item of arrDesk) {
        if (!arrCountryFrom.includes(item.UF_CRM_1582909937 + ' ' + `(${item.UF_CRM_1582909609})`)) {
            arrCountryFrom.push(item.UF_CRM_1582909937 + ' ' + `(${item.UF_CRM_1582909609})`);
        }
        if (!arrCountryTo.includes(item.UF_CRM_1582909954 + ' ' + `(${item.UF_CRM_1582909639})`)) {
            arrCountryTo.push(item.UF_CRM_1582909954 + ' ' + `(${item.UF_CRM_1582909639})`);
        }

    }

    for (let item of arrCountryFrom) {
        let optionFrom = document.createElement('option');
        optionFrom.append(item);
        from.push(optionFrom);
    }

    for (let item of arrCountryTo) {
        let optionTo = document.createElement('option');
        optionTo.append(item);
        to.push(optionTo);
    }

    for (let item of arrDesk){
        if (!arrTransport.includes(item.UF_CRM_1577687543)) {
            arrTransport.push(item.UF_CRM_1577687543);
        }
    }

    for (let item of arrTransport) {
        let optionTrans = document.createElement('option');
        optionTrans.append(item);
        typeTransport.push(optionTrans);
    }


    cntrFrom.append(...from);
    cntrTo.append(...to);
    typeTrans.append(...typeTransport);
}
getContent();


const regFrom = document.querySelector('.filter__region-from');
const selectCountryFrom = document.querySelector('.filter__country-from');
selectCountryFrom.addEventListener('change', function () {
    let from = [];
    let arrRegionFrom = [];
    let optionCountryFrom = getSelectedOption(selectCountryFrom).textContent.split(' ').pop();
    arrRegionFrom.push('Все');

    for (let item of arrDesk) {
        if (optionCountryFrom === `(${item.UF_CRM_1582909609})`) {
            if (!arrRegionFrom.includes(item.UF_CRM_1582909249)) {
                arrRegionFrom.push(item.UF_CRM_1582909249);
            }
        }
    }
    for (let item of arrRegionFrom) {
        let optionFrom = document.createElement('option');
        regFrom.innerHTML = '';
        optionFrom.append(item);
        from.push(optionFrom);
    }
    regFrom.disabled = false;
    regFrom.append(...from);


});

const regTo = document.querySelector('.filter__region-to');
const selectCountryTo = document.querySelector('.filter__country-to');
selectCountryTo.addEventListener('change', function () {
    let to = [];
    let arrRegionTo = [];
    let optionCountryTo = getSelectedOption(selectCountryTo).textContent.split(' ').pop();
    arrRegionTo.push('Все');
    for (let item of arrDesk) {
        if (optionCountryTo === `(${item.UF_CRM_1582909639})`) {
            if (!arrRegionTo.includes(item.UF_CRM_1582909273)) {
                arrRegionTo.push(item.UF_CRM_1582909273);
            }
        }
    }
    for (let item of arrRegionTo) {
        let optionTo = document.createElement('option');
        regTo.innerHTML = '';
        optionTo.append(item);
        to.push(optionTo);
    }
    regTo.disabled = false;
    regTo.append(...to);

});



const cityFrom = document.querySelector('.filter__city-from');
regFrom.addEventListener('change', function () {
    let from = [];
    let arrCityFrom = [];
    let optionRegionFrom = getSelectedOption(regFrom).textContent;
    arrCityFrom.push('Все');
    for (let item of arrDesk) {
        if (optionRegionFrom === item.UF_CRM_1582909249) {
            if (!arrCityFrom.includes(item.UF_CRM_1577438281365)) {
                arrCityFrom.push(item.UF_CRM_1577438281365);
            }
        }
    }
    for (let item of arrCityFrom) {
        let optionFrom = document.createElement('option');
        cityFrom.innerHTML = '';
        optionFrom.append(item);
        from.push(optionFrom);
    }
    cityFrom.disabled = false;
    cityFrom.append(...from);

});

const cityTo = document.querySelector('.filter__city-to');
regTo.addEventListener('change', function () {
    let to = [];
    let arrCityTo = [];
    let optionRegionTo = getSelectedOption(regTo).textContent;
    arrCityTo.push('Все');
    for (let item of arrDesk) {
        if (optionRegionTo === item.UF_CRM_1582909273) {
            if (!arrCityTo.includes(item.UF_CRM_1577438296576)) {
                arrCityTo.push(item.UF_CRM_1577438296576);
            }
        }
    }
    for (let item of arrCityTo) {
        let optionTo = document.createElement('option');
        cityTo.innerHTML = '';
        optionTo.append(item);
        to.push(optionTo);
    }
    cityTo.disabled = false;
    cityTo.append(...to);
});

const startDateTrip = document.querySelectorAll('.filter__start-trip');
function getDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month
    }
    let year = date.getFullYear();
    return date = year + "-" + month + "-" + day;
}

function findMinMaxDate() {
    let arrDates = [];
    for (let item of arrDesk) {
        let dates = item.UF_CRM_1573635128;
        arrDates.push(new Date(dates));
    }
    let maxDate = new Date(Math.max.apply(null, arrDates));
    let minDate = new Date(Math.min.apply(null, arrDates));
    startDateTrip[0].value = getDate(minDate);
    startDateTrip[1].value = getDate(maxDate);
}

findMinMaxDate();


//Выбранная страна
function getSelectedOption(select) {
    let option;
    for (let i = 0; i < select.options.length; i++) {
        option = select.options[i];
        if ( option.selected === true ) {
            break;
        }
    }
    return option;
}

const addObj = document.querySelector('.filter');
addObj.addEventListener('click', function (event) {

    let selectDateFromStart = startDateTrip[0].value;
    let selectDateFromEnd = startDateTrip[1].value;
    let selectCountryFrom = document.querySelector('.filter__country-from');
    let selectRegionFrom = document.querySelector('.filter__region-from');
    let selectCityFrom = document.querySelector('.filter__city-from');
    let selectCountryTo = document.querySelector('.filter__country-to');
    let selectRegionTo = document.querySelector('.filter__region-to');
    let selectCityTo = document.querySelector('.filter__city-to');
    let selectTransport = document.querySelector('.filter__type-transport');
    let selectWeight = document.querySelector('.filter__weight');
    let weight = parseInt(getSelectedOption(selectWeight).textContent.replace(/[^\d]/g, ''));
    const boxCards = document.querySelector('.box-cards');
    if (event.target.className === 'filter-search__btn'){
        event.preventDefault();



        let filterObj = {
            UF_CRM_1582909937: getSelectedOption(selectCountryFrom).textContent.split(' ').reverse().pop(), //страна откуда
            UF_CRM_1582909249: getSelectedOption(selectRegionFrom).textContent,
            UF_CRM_1577438281365: getSelectedOption(selectCityFrom).textContent,
            UF_CRM_1582909954: getSelectedOption(selectCountryTo).textContent.split(' ').reverse().pop(), //страна куда
            UF_CRM_1582909273: getSelectedOption(selectRegionTo).textContent,
            UF_CRM_1577438296576: getSelectedOption(selectCityTo).textContent, // город куда
            UF_CRM_1577687543: getSelectedOption(selectTransport).textContent //тип транспорта
        };
        Object.entries(filterObj).forEach(n => n[1] === 'Все' && delete filterObj[n[0]]);
        console.log(filterObj);
        let newDesk = arrDesk;
        newDesk = arrDesk.filter(function(item) {

            if (isNaN(weight)){
                if (new Date(item.UF_CRM_1573635128) >= new Date(selectDateFromStart) && new Date(item.UF_CRM_1573635128) <= new Date(selectDateFromEnd)){
                    for (let key in filterObj) {
                        if (item[key] === undefined || item[key] !== filterObj[key]) {
                            return false;
                        }
                    }
                    return true;
                }
            } else {
                if (new Date(item.UF_CRM_1573635128) >= new Date(selectDateFromStart)
                    && new Date(item.UF_CRM_1573635128) <= new Date(selectDateFromEnd)
                    && item.UF_CRM_1577436810522 <= weight){
                    for (let key in filterObj) {
                        if (item[key] === undefined || item[key] !== filterObj[key]) {
                            return false;
                        }
                    }
                    return true;
                }
            }

        });

        boxCards.innerHTML = '';
        newDesk.forEach(function (n) {
            const template = document.querySelector('#sample').content;
            let copyHTML = document.importNode(template, true);
            copyHTML.querySelector('.desk-id').textContent = n.ID;
            copyHTML.querySelector('.desk-geo').textContent = `${n.UF_CRM_1582909937}, ${n.UF_CRM_1582909249}, ${n.UF_CRM_1577438281365} - ${n.UF_CRM_1582909954},  ${n.UF_CRM_1582909273}, ${n.UF_CRM_1577438296576}`;
            copyHTML.querySelector('.desk-transport').textContent = n.UF_CRM_1577687543;
            copyHTML.querySelector('.desk-cargo').textContent = `${n.UF_CRM_1573641711} ${n.UF_CRM_1577436810522}т ${n.UF_CRM_1577436773286}м3`;
            copyHTML.querySelector('.desk-distance').textContent = n.UF_CRM_1577443693908;
            copyHTML.querySelectorAll('.desk-time')[0].textContent = n.UF_CRM_1573635128;
            copyHTML.querySelectorAll('.desk-time')[1].textContent = n.UF_CRM_1580833330;
            copyHTML.querySelector('.desk-date').textContent = n.DATE_CREATE;
            boxCards.appendChild(copyHTML);
        });
        console.log(newDesk);
    }
    if (event.target.className === 'filter-clear__btn'){
        event.preventDefault();
        findMinMaxDate();
        selectTransport.value = 'Все';
        selectWeight.value = 'Все';
        const selectFrom = document.querySelector('.from').children;
        const selectTo = document.querySelector('.to').children;
        boxCards.innerHTML = '';
        for (let i = 1; i < selectFrom.length; i++){
            selectFrom[0].value = 'Все';
            selectFrom[i].value = 'Все';
            selectFrom[i].disabled = true;
            selectTo[0].value = 'Все';
            selectTo[i].value = 'Все';
            selectTo[i].disabled = true;
        }
    }
});
