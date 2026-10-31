# 压缩映射原理 $\implies$ 逆映射定理（有限维）
`imp.inverse-function` · 推出 · strong 边 · 根 `../`

`thm.banach-fixed-point` 压缩映射原理 + `thm.mean-value-multi` 多元中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.inverse-function` 逆映射定理

两边作用 $Df(x)^{-1}$ 并用第五步的 $\|h\| \le 2\|k\|$：$h = Df(x)^{-1}(k) + o(\|k\|)$。按定义这就是 $g$ 在 $y$ 可微，且 $Dg(y) = Df(g(y))^{-1}$。

**第七步：$Dg$ 连续。** $Dg = (Df \circ g)^{-1}$；$g$ 连续、$Df$ 连续、求逆（在 $GL_n$ 上）连续（`prop.inverse-continuous` 型的论证：逆的表达式含 $1/\det$ 与伴随矩阵，都连续），故 $Dg$ 连续，即 $g \in C^{1}$。∎

> ⭐ 第 2 步的化归（把 $Df(a)$ 变成 $I$）是全部技巧所在：**一旦导数是恒等，$x - f(x)$ 就成为压缩的**，于是「解方程」就变成了「找不动点」。第 6 步则说明「逆映射的导数是导数的逆」是定义的自然产物，不是额外结论。
