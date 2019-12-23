const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'first task', rank: 1},
    'task-2': { id: 'task-2', content: 'second task', rank: 2},
    'task-3': { id: 'task-3', content: 'third task', rank: 3},
    'task-4': { id: 'task-4', content: 'fourth task', rank: 4},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Tasks',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
};

export default initialData