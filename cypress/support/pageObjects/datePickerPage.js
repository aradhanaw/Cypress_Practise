class DatePickerPage{
    getDatePicker(){
        return cy.get('#datepicker')
    }

    getCalender(){
        return cy.get('div#ui-datepicker-div')
    }
    getNavigateBack(){
        return cy.get('a.ui-datepicker-prev')
    }
    getNavigateForward(){
        return cy.get('a.ui-datepicker-next')

    }
    getMonthName(){
        return cy.get('div.ui-datepicker-title span:nth-child(1)')

    }
    getYearName(){
        return cy.get('div.ui-datepicker-title span:nth-child(2)')

    }
    getCalenderDays(){
        return cy.get('table.ui-datepicker-calendar a.ui-state-default')

    }

}

//to use it on test class.
export default DatePickerPage

