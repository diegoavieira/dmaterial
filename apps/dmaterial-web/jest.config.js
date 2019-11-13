module.exports = {
  name: 'dmaterial-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dmaterial-web',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
