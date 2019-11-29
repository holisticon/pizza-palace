module.exports = {
  name: 'order-shared',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/order-shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
