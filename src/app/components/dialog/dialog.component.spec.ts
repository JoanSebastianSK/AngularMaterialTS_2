import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('DialogComponent', () => {

  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {
      
        } }
      ],
    })
    .compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create', () => {
    const onClose = spyOn(component,"closeDialog");
    component.closeDialog();
    expect(onClose).toHaveBeenCalled();
  });
  
});


