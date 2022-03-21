let BtnLirePlus = document.querySelector('.section#Port-de-garage .Intro .InfoText #BtnToggleIntroText');
let BtnLirePlusIcon = document.querySelector('.section#Port-de-garage .Intro .InfoText a#BtnToggleIntroText i');
let LirePlusTextSection = document.querySelector('.section#Port-de-garage .Intro .InfoText #introCategContent');


BtnLirePlus.onclick = () => {
    if (!BtnLirePlus.classList.contains("IsShowed")) {
        BtnLirePlus.classList.add('IsShowed');
        BtnLirePlus.innerHTML = "Réduire";
        LirePlusTextSection.classList.add('show');
        BtnLirePlusIcon.classList.replace('fa-arrow-down-long', 'fa-arrow-up-long');
    } else if (BtnLirePlus.classList.contains("IsShowed")) {
        BtnLirePlus.classList.remove('IsShowed');
        BtnLirePlus.innerHTML = "Lire la suite";
        LirePlusTextSection.classList.remove('show');
        BtnLirePlusIcon.classList.replace('fa-arrow-up-long', 'fa-arrow-down-long');
    }
}


document.querySelectorAll('.productFilter button').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('IsClicked');
    });
});



// Product Cards Filter JS Code :

var $filterCheckboxes = $('.form-check-input[type="checkbox"]');
var filterFunc = function() {

    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

        if (!selectedFilters.hasOwnProperty(this.name)) {
            selectedFilters[this.name] = [];
        }

        selectedFilters[this.name].push(this.value);
        $('.productFilter .titleFilter').innerHTML = selectedFilters;
    });

    // create a collection containing all of the filterable elements
    var $filteredResults = $('.section#NosProductsList .card');

    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {

        // filter each element
        $filteredResults = $filteredResults.filter(function() {

            var matched = false,
                currentFilterValues = $(this).data('category').split(' ');

            // loop over each category value in the current .flower's data-category
            $.each(currentFilterValues, function(_, currentFilterValue) {

                // if the current category exists in the selected filters array
                // set matched to true, and stop looping. as we're ORing in each
                // set of filters, we only need to match once

                if ($.inArray(currentFilterValue, filterValues) != -1) {
                    matched = true;
                    return false;
                }
            });

            // if matched is true the current .flower element is returned
            return matched;

        });
    });

    $('.section#NosProductsList .card').hide().filter($filteredResults).show();
}

$filterCheckboxes.on('change', filterFunc);



