import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { AppListComponent } from './apps-list.component';

import { DividerOverviewExample } from '../apps/divider.component';

import * as TaskStories from '../apps/divider.stories';

import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

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
        MatListModule],
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
      id: '1', title: 'App 1', subtitle: '' 
    },
    {  
      id: '2', title: 'App 2' 
    },
    {  
      id: '3', title: 'App 3' 
    },
    {  
      id: '4', title: 'App 4' 
    },
    {  
      id: '5', title: 'App 5' 
    },
    {  
      id: '6', title: 'App 6' 
    },
  ],
};
