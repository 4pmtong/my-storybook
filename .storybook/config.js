import { configure } from '@storybook/react';
import '../src/index.css';

// const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  // req.keys().forEach(filename => req(filename));
  // require('../src/stories');
  require('../src/components/Task.stories');
  require('../src/components/TaskList.stories');
  require('../src/components/InboxScreen.stories');
}

configure(loadStories, module);
