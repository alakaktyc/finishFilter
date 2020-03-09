function getPost(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://my-json-server.typicode.com/alakaktyc/demo/arrDesk');
    xhr.addEventListener('load', ()=> {
        const arrDesk = JSON.parse(xhr.responseText);
        cb(arrDesk);
    });
    xhr.addEventListener('error', () => {
        console.log('error');
    });
    xhr.send();
}


getPost(arrDesk => {
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





    const boxCards = document.querySelector('.box-cards');
    let newDesk = arrDesk;

    function appCards(n) {
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
    }

    function filter(array) {
        boxCards.innerHTML = '';
        array.forEach(appCards);
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

        let inputVolume = document.querySelector('.filter__volume');
        inputVolume.addEventListener('input', function(){
            this.value = this.value.replace(/[^\d]/g, '');
        });
        let volume = parseInt(document.querySelector('.filter__volume').value);


        if (event.target.classList.contains('filter-search__btn')){
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

            newDesk = arrDesk.filter(function(item) {
                if (isNaN(weight) && isNaN(volume)){
                    if (new Date(item.UF_CRM_1573635128) >= new Date(selectDateFromStart) && new Date(item.UF_CRM_1573635128) <= new Date(selectDateFromEnd)){
                        for (let key in filterObj) {
                            if (item[key] === undefined || item[key] !== filterObj[key]) {
                                return false;
                            }
                        }
                        return true;
                    }
                } else if (isNaN(weight)){
                    if (new Date(item.UF_CRM_1573635128) >= new Date(selectDateFromStart)
                        && new Date(item.UF_CRM_1573635128) <= new Date(selectDateFromEnd)
                        && item.UF_CRM_1577436773286 <= volume){
                        for (let key in filterObj) {
                            if (item[key] === undefined || item[key] !== filterObj[key]) {
                                return false;
                            }
                        }
                        return true;
                    }
                } else if (isNaN(volume)){
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
                } else {
                    if (new Date(item.UF_CRM_1573635128) >= new Date(selectDateFromStart)
                        && new Date(item.UF_CRM_1573635128) <= new Date(selectDateFromEnd)
                        && item.UF_CRM_1577436810522 <= weight
                        && item.UF_CRM_1577436773286 <= volume){
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
            controls.innerHTML = '';

            calculateButtons(newDesk);
            filter(newDesk);
            sumCards(newDesk);

        }
        if (event.target.classList.contains('filter-clear__btn')){
            event.preventDefault();
            findMinMaxDate();
            boxCards.innerHTML = '';
            calculateButtons(arrDesk);
            filter(arrDesk);
            sumCards(arrDesk);
            selectTransport.value = 'Все';
            selectWeight.value = 'Все';
            inputVolume.value = ''; //Добавил
            const selectFrom = document.querySelector('.from').children;
            const selectTo = document.querySelector('.to').children;

            for (let i = 1; i < selectFrom.length; i++){
                selectFrom[0].value = 'Все';
                selectFrom[i].value = 'Все';
                selectFrom[i].disabled = true;
                selectTo[0].value = 'Все';
                selectTo[i].value = 'Все';
                selectTo[i].disabled = true;
            }
        }

        if (event.target.classList.contains('filter-date-to__btn')){
            event.preventDefault();
            sortingDateTo(newDesk)
        }

        if (event.target.classList.contains('filter-date-add__btn')){
            event.preventDefault();
            sortingDateAdd(newDesk)
        }


    });

    const controls = document.querySelector('.controls');
    function calculateButtons (arrayDesk) {
        if (arrayDesk.length > 24) {
            boxCards.innerHTML='';
            controls.innerHTML = '';
            let numbersBtn = Math.ceil(arrayDesk.length / 24);
            let subDesk = [];
            for (let i = 1; i <= numbersBtn; ++i) {
                let buttons = document.createElement('button');
                buttons.className = 'box-cards__btn';
                buttons.innerHTML = `${i}`;
                controls.appendChild(buttons);
            }

            for (let j = 0; j < numbersBtn; j++) {
                subDesk[j] = arrayDesk.slice((j * 24), (j * 24) + 24);
            }

            console.log(subDesk);
            subDesk[0].forEach(appCards);

            const deskBtn = document.querySelectorAll('.box-cards__btn');
            for (let i = 0; i < deskBtn.length; ++i) {
                deskBtn[i].addEventListener('click',function () {
                    boxCards.innerHTML = '';
                    subDesk[i].forEach(appCards);
                })
            }
        } else {
            boxCards.innerHTML='';
            controls.innerHTML = '';
            arrayDesk.forEach(appCards);
        }
    }

    calculateButtons(arrDesk);


    function sumCards(array) {
        const innerCards = document.querySelector('.sum-cards');
        let sum = array.concat().length;
        innerCards.innerHTML = 'Найдено:';
        innerCards.append(sum);
    }
    sumCards(arrDesk);


    function sortingDateTo(array) {
        let cardsArray = [...array].sort(function (a, b) {
            let dateA = a.UF_CRM_1573635128;
            let dateB = b.UF_CRM_1573635128;
            return new Date(dateA) - new Date(dateB);
        });
        calculateButtons(cardsArray);
        filter(cardsArray);
        sumCards(cardsArray);
    }

    function sortingDateAdd(array) {
        let cardsArray = [...array].sort(function (a, b) {
            let dateA = a.DATE_CREATE;
            let dateB = b.DATE_CREATE;
            return new Date(dateA) - new Date(dateB);
        });
        calculateButtons(cardsArray);
        filter(cardsArray);
        sumCards(cardsArray);
    }
});
