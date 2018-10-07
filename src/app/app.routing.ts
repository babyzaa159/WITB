import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  // ถ้าไม่ระบุ path อะไรเข้ามา (เข้ามาด้วย /) เช่น http://localhost:4200
  // ขอให้ปลุก HomeComponent ขึ้นมาใส่ใน RouterOutlet ของ app.component.html
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
