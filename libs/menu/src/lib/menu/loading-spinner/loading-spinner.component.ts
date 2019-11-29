import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pp-loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: ['./loading-spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {
}
