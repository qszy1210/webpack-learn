## webpack-merge

可以通过 webpack-merge 合并配置文件

## DefinePlugin

1. 如果key 是一个字符串, 会被作为 code
   1. 所以如果需要字符串, 需要进行 JSON.stringify(code) 进行处理
   2. eval(JSON.stringify('test')) === 'test'
2. 如果不是一个字符串, 会被 stringify
3. 如果是一个对象, 那就是一个对象
4. 如果 key 中有 typeof，它只针对 typeof 调用定义 (不懂)...