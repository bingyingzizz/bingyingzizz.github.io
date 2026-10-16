# 微分定理 + 正则性 $\implies RN$ 导数的点态公式
`imp.rn-pointwise` · 推出 · strong 边 · 根 `../`

`thm.differentiation-general` 可缩族的微分定理 + `def.regular-measure` 正则 Borel 测度 + `lem.covering` 覆盖引理 → `thm.rn-pointwise` RN 导数的点态公式

**③ 把 $\lambda$ 的坏点收集起来。** 不妨设 $\lambda \ge 0$，并取 $A$ 使 $\lambda(A) = m(A^c) = 0$（$\lambda \perp m$ 的见证）。令

$$F_k = \{ x \in A : \limsup_{r\to0} \lambda(B(r, x)) / m(B(r, x)) > 1 / k \}$$

**④ 用正则性把 $\lambda$ 压小。** 给定 $\varepsilon > 0$，由 $\lambda$ 的正则性（从外面用开集逼近）取开集 $U \supseteq A$ 使 $\lambda(U) < \varepsilon$（注意 $\lambda(A) = 0$，但 $U$ 比 $A$ 大，多出来的部分也可以做得任意小）。

> 续见 proofs/imp.rn-pointwise.3.md
