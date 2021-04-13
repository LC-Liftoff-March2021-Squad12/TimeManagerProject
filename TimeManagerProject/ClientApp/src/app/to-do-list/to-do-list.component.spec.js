"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var to_do_list_component_1 = require("./to-do-list.component");
describe('To-Do-ListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [to_do_list_component_1.ToDoListComponent]
        })
            .compileComponents();
    }));

    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(to_do_list_component_1.ToDoListComponent);
        fixture.detectChanges();
    });

    it('should display a title', testing_1.async(function () {
        var titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('To-do List');
    }));

    it('should create a task list, then increments by 1 when clicked', testing_1.async(function () {
        var countElement = fixture.nativeElement.querySelector('button');
        expect(countElement.textContent).toEqual('1');
        fixture.detectChanges();
    }));
    

    afterEach(function () {
        component = testing_1.TestBed.saveComponent(to_do_list_component_1.ToDoListComponent);
        component.saveChanges();
    });

    it('should save the tasks', to_do_list_component_1.async(function () {
        var saveTask = component.nativeElement.querySelector('button');
        expect(saveTask.textContent).toEqual('Save task');
        to_do_list_component_1.saveChanges();
    }));

});
//# sourceMappingURL=to-do-list.component.spec.js.map
