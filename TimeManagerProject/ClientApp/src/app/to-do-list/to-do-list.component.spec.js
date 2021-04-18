"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var Task_1 = require("./Task");
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
    it('should create an instance', testing_1.async(function () {
        var task = fixture.nativeElement.querySelector('description').textContent;
        expect(new Task_1.Task()).toBeTruthy();
    }));
});
//# sourceMappingURL=to-do-list.component.spec.js.map