module.exports = {
  name: 'pizza-palace',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pizza-palace',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
