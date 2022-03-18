import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { DividerOverviewExample } from './divider.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



export default {
  component: DividerOverviewExample,
  decorators: [
    moduleMetadata({
      declarations: [DividerOverviewExample],
      imports: [CommonModule,MatDividerModule,MatListModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Task',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<DividerOverviewExample> = args => ({
  component: DividerOverviewExample,
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'AR Zoo',
    subtitle: 'Autres',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

