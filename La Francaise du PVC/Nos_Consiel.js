// Nos Conseil Page  : Filter Producs Buttons
let AllFiltersBtns = document.querySelectorAll('.section ul.ul.Filters li');
AllFiltersBtns.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    });
});





// Conseil Cards Filter JS Code :

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

        // filter each .flower element
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