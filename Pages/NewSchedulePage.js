module.exports = {
    elementsNewShedulePage: {

        NewScheduleModal:           $$('.js-schedule-form>div>div>div>div>h2').first(),
        DescriptionField:           $('#description'),
        TestMethodDropdown:         $$('.dropdown.js-filter-dropdown.js-test-method.open>ul>li'),
        TestMethodToggle:           $('#testMethod'),
        FindTestPointsButton:       $("#getTestPointsButton"),
        TestPointsResultsContainer: $('.results-container.js-results-container>div:nth-child(1)'),
        RandomizeButton:            $('button.btn.btn-default.button-li.dropdown-toggle>span:nth-child(2)'),
        RandomizeGoButton:          $('.btn.btn-primary.js-randomize-action'),
        SaveScheduleButton:         $('.button-li.save-schedule.js-save-schedule'),
        ScheduleId:                 $('#schedule-details>div:nth-child(2)>div>span:nth-child(2)>b'),
        TestPointsNameAllRows:      $$('tbody#schedule-tps>tr')


    }
};

