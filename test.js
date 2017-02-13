import test from 'ava';
import isWebpac from '.';

test('webpack-dev-server', t => {
	t.false(isWebpac);
});
