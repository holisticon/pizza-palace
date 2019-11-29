module.exports = {
  name: 'pizza-shared',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pizza-shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
