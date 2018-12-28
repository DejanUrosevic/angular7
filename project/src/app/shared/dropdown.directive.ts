import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';

@Directive({ 
    selector: '[appDropdown]'
})
export class DropDownDirective {
    constructor() { }

    @HostBinding('class.open')
    isOpen = false;

    @HostListener('click')
    toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}