import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview.component';
import { OverviewSummaryComponent } from './overview-summary/overview-summary.component';
import { OverviewWebtrafficComponent } from './overview-webtraffic/overview-webtraffic.component';
import { OverviewSearchAnalyticsComponent } from './overview-search-analytics/overview-search-analytics.component';
import { OverviewFeedbackComponent } from './overview-feedback/overview-feedback.component';
import { OverviewCalldriversComponent } from './overview-calldrivers/overview-calldrivers.component';
import { OverviewUxTestsComponent } from './overview-ux-tests/overview-ux-tests.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: OverviewSummaryComponent,
        data: { title: 'UPD | Overview | Summary' },
      },
      {
        path: 'webtraffic',
        component: OverviewWebtrafficComponent,
        data: { title: 'UPD | Overview | Web traffic' },
      },
      {
        path: 'searchanalytics',
        component: OverviewSearchAnalyticsComponent,
        data: { title: 'UPD | Overview | Search analytics' },
      },
      {
        path: 'pagefeedback',
        component: OverviewFeedbackComponent,
        data: { title: 'UPD | Overview | Page feedback' },
      },
      {
        path: 'calldrivers',
        component: OverviewCalldriversComponent,
        data: { title: 'UPD | Overview | Call drivers' },
      },
      {
        path: 'uxtests',
        component: OverviewUxTestsComponent,
        data: { title: 'UPD | Overview | UX tests' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}
