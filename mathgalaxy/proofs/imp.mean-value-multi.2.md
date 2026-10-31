# 一维 MVT + 链式法则 $\implies$ 多元中值定理
`imp.mean-value-multi` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.mean-value-multi` 多元中值定理

（分量逐个用一元牛顿–莱布尼茨公式即得。）取范数并用 $\bigl\|\int g\bigr\| \le \int \|g\|$：

$$\|f(a+h) - f(a)\| \le \int_0^1 \|Df(a+th)\|\,\|h\|\,dt \le \Bigl( \sup_{[a,a+h]}\|Df\| \Bigr)\|h\|$$

（这一步只用到了「闭线段上的连续函数取到上确界」，不需要多元最值定理。）∎

> ⭐ 不等式版本才是后面真正用到的形式：`thm.inverse-function` 与 `thm.inverse-function-banach` 全靠它把 $\Phi_y$ 弄成压缩映射。
