# 隐函数定理 $\implies$ 正则值的原像是子流形
`imp.regular-value` · 推出 · strong 边 · 根 `../`

`thm.implicit-function` 隐函数定理 → `thm.regular-value` 正则值原像定理

**第二步：用隐函数定理解出 $v$。** 令 $F(u, v) := f(u, v) - c$。则 $F(x_0) = 0$，且 $D_vF(x_0)$ 就是上一步那个可逆的 $m \times m$ 块。由隐函数定理（`thm.implicit-function`），存在 $u_0$ 的邻域 $V$ 与唯一 $C^{1}$ 映射 $g : V \to \mathbb{R}^{m}$ 使 $g(u_0) = v_0$ 且 $F(u, g(u)) = 0$。

**第三步：认出图。** 由第二步，

$$f^{-1}(c) \cap (V \times \mathbb{R}^{m}) = \{(u, g(u)) : u \in V\}$$

> 续见 proofs/imp.regular-value.3.md
