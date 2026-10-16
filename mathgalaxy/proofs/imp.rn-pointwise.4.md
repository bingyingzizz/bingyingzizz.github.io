# 微分定理 + 正则性 $\implies RN$ 导数的点态公式
`imp.rn-pointwise` · 推出 · strong 边 · 根 `../`

`thm.differentiation-general` 可缩族的微分定理 + `def.regular-measure` 正则 Borel 测度 + `lem.covering` 覆盖引理 → `thm.rn-pointwise` RN 导数的点态公式

$$c < 3^n \sum_i m(B_{x_i}) \le 3^n k \sum_i \lambda(B_{x_i}) \le 3^n k\cdot\lambda(V_\varepsilon) \le 3^n k \varepsilon$$

**⑦ 令 $\varepsilon \to 0$。** 得 $m(V_\varepsilon) = 0$，故某个零集包含了一切 $F_k$，即 $F_k$ 全是零集，从而 $\lim_{r\to0} \lambda(B(r,x))/m(B(r,x)) = 0$ 对 m-a.e. x 成立。

**⑧ 从球换到可缩族。** 上面用的是球；要换成一般的可缩族 $E_r$，用

$$\lambda(E_r) / m(E_r) \le \lambda(B(r,x)) / m(E_r) \le (1/\alpha)\cdot\lambda(B(r,x)) / m(B(r,x)) \to 0$$

> 续见 proofs/imp.rn-pointwise.5.md
