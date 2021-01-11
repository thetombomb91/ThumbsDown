import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThumbsDownSubmittedPage } from './thumbs-down-submitted.page';

describe('ThumbsDownSubmittedPage', () => {
  let component: ThumbsDownSubmittedPage;
  let fixture: ComponentFixture<ThumbsDownSubmittedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbsDownSubmittedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThumbsDownSubmittedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
