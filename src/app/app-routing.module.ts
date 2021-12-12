import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule)
},
{
  path:'about',
  loadChildren: () => import('./components/about/about.module').then(m=>m.AboutModule)
},
{
  path:'services',
  loadChildren: () => import('./components/og-services/services.module').then(m=>m.ServicesModule)


},
{
  path:'mixing',
  loadChildren: () => import('./components/mixing/mixing.module').then(m=>m.MixingModule)

},
{
  path:'recording',
  loadChildren: () => import('./components/recording/recording.module').then(m=>m.RecordingModule)

},
{
  path:'studio',
  loadChildren: () => import('./components/studio/studio.module').then(m=>m.StudioModule)

},
{
  path:'contact',
  loadChildren: () => import('./components/contact/contact.module').then(m=>m.ContactModule)

},
{
  path:'blog',
  loadChildren: () => import('./blog/blog.module').then(m=>m.BlogModule)

},
{
  path:'thank-you',
  loadChildren: () => import('./components/thank-you/thank-you.module').then(m=>m.ThankYouModule)

},
{
  path:'privacy',
  loadChildren: () => import('./components/privacy/privacy/privacy.module').then(m=>m.PrivacyModule)

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled', // Add options right here
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
