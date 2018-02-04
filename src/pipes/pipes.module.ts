import { NgModule } from '@angular/core';
import { YoutubePipe } from './youtube/youtube';
import { SpinnerPipe } from './spinner/spinner';
@NgModule({
	declarations: [YoutubePipe,
    SpinnerPipe],
	imports: [],
	exports: [YoutubePipe,
    SpinnerPipe]
})
export class PipesModule {}
