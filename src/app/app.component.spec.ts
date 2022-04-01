import { AppComponent } from './app.component';
import { MatDialogModule} from '@angular/material/dialog';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppListComponent } from './components/apps-list/apps-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('App', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            MatDialogModule,
            BrowserAnimationsModule,
            MatFormFieldModule,
          ],
          declarations: [
            AppComponent,
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    it('should open Dialog', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.componentInstance;
        const onOpen = spyOn(component,'openDialog');
        let app = {  
            id: 1, title: 'AR Zoo', subtitle: 'Autres', picture: 'https://cdn.pixabay.com/photo/2018/05/08/21/27/android-3383992_960_720.png', enable: false, state:''
        };
        component.openDialog(app);
        expect(onOpen).toHaveBeenCalledWith(app);
    });

});

