const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-express-fast-progress:app', () => {
    // eslint-disable-next-line no-undef
    beforeAll(() => helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
            someAnswer: true,
        }));

    it('creates files', () => {
        assert.file(['dummyfile.txt']);
    });
});
