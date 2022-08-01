import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'home',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'dashboard',
        canLoad: [AuthGuard],
        loadChildren: () =>
            import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'create-appointment',
        canLoad: [AuthGuard],
        loadChildren: () =>
            import('./pages/create-appointment/create-appointment.module').then(
                (m) => m.CreateAppointmentModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
