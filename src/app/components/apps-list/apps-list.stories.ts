import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './apps-list.component';
import { DividerOverviewExample } from '../apps/divider.component';
import * as TaskStories from '../apps/divider.stories';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export default {
  component: AppListComponent,DividerOverviewExample,
  decorators: [
    moduleMetadata({
      //👇 Importa ambos componentes para permitir la composición de componentes con Storybook
      declarations: [AppListComponent, DividerOverviewExample],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatListModule,MatDatepickerModule,MatNativeDateModule,MatSlideToggleModule]
    }),
    //👇 Envuelve nuestras historias con un decorador
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  title: 'AppList',
} as Meta;

const Template: Story<AppListComponent> = args => ({
  props: {
    ...args,
    onPinTask: TaskStories.actionsData.onPinTask,
    onArchiveTask: TaskStories.actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {  
      id: '1', title: 'AR Zoo', subtitle: 'Autres', picture: 'https://cdn.pixabay.com/photo/2018/05/08/21/27/android-3383992_960_720.png'
    },
    {  
      id: '2', title: 'Assistant', subtitle: 'Autres', picture: 'https://cdn.pixabay.com/photo/2018/05/08/21/27/android-3383992_960_720.png'
    },
    {  
      id: '3', title: 'Calculator', subtitle: 'Education', picture: 'https://www.creativefabrica.com/wp-content/uploads/2019/05/Calculator-icon-by-ahlangraphic-8-580x386.jpg'
    },
    {  
      id: '4', title: 'Camera', subtitle: 'Autres', picture: 'https://us.123rf.com/450wm/martialred/martialred1507/martialred150700789/42614399-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A8%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E3%82%AB%E3%83%A1%E3%83%A9%E5%86%99%E7%9C%9F%E3%81%AE%E3%83%A9%E3%82%A4%E3%83%B3-%E3%82%A2%E3%83%BC%E3%83%88%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'
    },
    {  
      id: '5', title: 'Chrome Browser - Google', subtitle: 'Navigateurs', picture: 'data:image/png;base64,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'
    },
    {  
      id: '6', title: 'Files Go by Google', subtitle: 'Autres', picture: 'https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA'
    },
  ],
};