import babel from 'rollup-plugin-babel'
import gas from 'rollup-plugin-gas'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: "dist/main.js",
    format: 'es',
  },
  plugins: [
    nodeResolve({ jsnext: true }), // node_modulesにあるのもくっつけてくれる
    babel({
      exclude: 'node_modules/**'
    }),
    gas(),
  ],
}