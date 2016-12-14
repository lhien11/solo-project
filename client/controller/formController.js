angular.module('myApp').controller('formCtrl', ['eventFactory', function(eventFactory) {

	var self = this;
	this.eventForm = {};
	//this.eventForm.date = new Date(2016,0,1);
    this.event = eventFactory.getAllEvents();
    this.categories = [{
        id: 1,
        name: 'Adult League'
    }, {
        id: 2,
        name: 'Private Lesson'
    }, {
        id: 3,
        name: 'Group Lesson'
    }, {
        id: 4,
        name: 'Special Events'
    }];
    this.selectedOption = {
        id: 1,
        name: 'Adult League'
    };
    this.specialEvent = 'false';
    this.specialValue = {
            id: 1,
            value: 'Birthday'
        }
        //Initialize Special types checkboxes
    this.specialType = [{
        name: 'Age Restricted',
        checked: false
    }, {
        name: 'Private',
        checked: false
    }];
    this.selectAllTypes = function() {
        if (self.bothSelected) {
            self.bothSelected = true;
        } else {
            self.bothSelected = false;
        }

        angular.forEach(this.specialType, function(item) {

        	 item.checked = self.bothSelected;
        })
    }
    this.submitForm = function(form) {

        form.category = this.selectedOption.id;
        eventFactory.createEvent(angular.copy(form), this.event);
    }
}])
