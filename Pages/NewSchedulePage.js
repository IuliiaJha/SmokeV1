module.exports ={
    elementsNewShedulePage: {
     //NewScheduleModal: element(by.cssContainingText('.heading marked-element', 'NEW SCHEDULE DETAILS'))
     NewScheduleModal: $$('.js-schedule-form>div>div>div>div>h2').first(),
     TestMethodDropdown: $$('div.schedule-meta.js-schedule-meta > div:nth-child(4) > div > ul>li'),
     //TestMethodDropdown: $$ ('.dropdown-menu li')
     TestMethodButton: $('#testMethod'),
    FindTestPointsButton: $("#getTestPointsButton"),
    TestPointsResultsContainer: $('.results-container.js-results-container>div:nth-child(1)'),
    RandomizeButton:$('button.btn.btn-default.button-li.dropdown-toggle>span:nth-child(2)'),
    RandomizeGoButton: $('.btn.btn-primary.js-randomize-action'),
    SaveScheduleButton: $('.button-li.save-schedule.js-save-schedule'),
    ScheduleId: $('#schedule-details>div:nth-child(2)>div>span:nth-child(2)>b')


    }
};

