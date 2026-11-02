# 隐函数定理 $\implies$ 正则值的原像是子流形
`imp.regular-value` · 推出 · strong 边 · 根 `../`

`thm.implicit-function` 隐函数定理 → `thm.regular-value` 正则值原像定理

设 $c$ 是正则值、$x_0 \in f^{-1}(c)$。要在 $x_0$ 附近把 $f^{-1}(c)$ 写成图。

**第一步：选主元。** $Df(x_0)$ 是 $m \times n$ 满秩矩阵，故有某个 $m \times m$ 子式非零。重排坐标使**后** $m$ 个坐标对应的子式非零（把 $x$ 写成 $(u, v) \in \mathbb{R}^{n-m} \times \mathbb{R}^{m}$）。

**第二步：用隐函数定理解出 $v$。** 令 $F(u, v) := f(u, v) - c$。

则 $F(x_0) = 0$，且 $D_vF(x_0)$ 就是上一步那个可逆的 $m \times m$ 块。

> 续见 proofs/imp.regular-value.2.md
