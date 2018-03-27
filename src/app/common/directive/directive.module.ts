import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 权限控制指令
import { PermissionsDirective } from './permissions.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [PermissionsDirective],
    exports: [PermissionsDirective]
})
export class DirectiveModule {}
