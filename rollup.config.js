import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";
import { minify } from 'uglify-es';
import pkg from './package.json';

const LIB_NAME = pkg.name;

export default [
  {
    input: 'src/index.js',
    output: {
      file: `dist/${LIB_NAME}.js`,
      format: 'es'
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      vue(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      replace({
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
      (process.env.NODE_ENV === 'production' && terser({}, minify))
    ],
  },
];