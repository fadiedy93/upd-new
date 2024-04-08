import {
  Component,
  inject,
} from '@angular/core';
import { OverviewFacade } from '../+state/overview/overview.facade';

@Component({
  selector: 'upd-overview-gc-tasks',
  templateUrl: './overview-gc-tasks.component.html',
  styleUrls: ['./overview-gc-tasks.component.css'],
})
export class OverviewGCTasksComponent {
  private overviewService = inject(OverviewFacade);

  gcTasksTable$ = this.overviewService.gcTasksTable$;
  gcTasksTableConfig$ = this.overviewService.gcTasksTableConfig$;

  gcTasksCommentsTable$ = this.overviewService.gcTasksCommentsTable$;
  gcTasksCommentsTableConfig$ = this.overviewService.gcTasksCommentsTableConfig$;
}