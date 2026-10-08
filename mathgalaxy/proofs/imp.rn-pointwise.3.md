# 微分定理 + 正则性 $\implies RN$ 导数的点态公式
`imp.rn-pointwise` · 推出 · strong 边 · 根 `../`

`thm.differentiation-general` 可缩族的微分定理 + `def.regular-measure` 正则 Borel 测度 + `lem.covering` 覆盖引理 → `thm.rn-pointwise` RN 导数的点态公式

**⑤ 每个坏点配一个小球。** 对 $x \in F_k$，由 $F_k$ 的定义与 $B_x \subseteq U$（在 $A$ 附近取足够小的球即可），存在球 $B_x$ 使

$$\lambda(B_x) > (1/k)\cdot m(B_x)$$

**⑥ 覆盖引理再来一次。** 令 $V_\varepsilon = \bigcup_{x \in F_k} B_x$（它是 $U$ 中的开集，故 $\lambda(V_\varepsilon) \le \lambda(U) < \varepsilon$）。取 $c < m(V_\varepsilon)$，由**覆盖引理**挑出不交的 $B_{x_1}, \ldots , B_{x_j}$ 使 $\sum m(B_{x_i}) > 3^{-n} c$。于是

> 续见 proofs/imp.rn-pointwise.4.md
