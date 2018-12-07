import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MeteoComponent } from './meteo/meteo.component';
import { BatteryComponent } from './battery/battery.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    LeafletModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    MapComponent,
    MeteoComponent,
    BatteryComponent
  ],
})
export class DashboardModule { }
