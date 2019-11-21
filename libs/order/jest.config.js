module.exports = {
  name: 'order',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/order',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
