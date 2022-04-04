import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { SetUpComponent } from './set-up/set-up.component';




const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "setup", component: SetUpComponent},
  {path: "Play", component: PlayGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
