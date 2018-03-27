import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appPermissions]'
})
export class PermissionsDirective {
    private permissionsList: Array<string>;
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
    @Input() set appPermissions(permission: string) {
        // console.log(permission);
        this.permissionsList = window.sessionStorage.getItem('userInfo') ? JSON.parse(window.sessionStorage.getItem('userInfo')).authorities : [];
        if (this.permissionsList.length > 0) {
            const equalPer = this.permissionsList.filter(item => item === permission);
            if (equalPer.length === 0) {
                this.viewContainer.clear();
            }else {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }else {
            this.viewContainer.clear();
        }
    }
}
