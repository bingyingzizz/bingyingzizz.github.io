# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ → `thm.riesz-representation-lp` (L^p)* ≅ L^q

取 $\{E_n\}$ 使 $\|g_{E_n}\|_q \to M$，令 $F = \bigcup_n E_n$（仍 $\sigma$有限）。则 $\|g_F\|_q \ge \|g_{E_n}\|_q$ 对一切 $n$ 成立，故 $\|g_F\|_q = M$。

**$g_F$ 已经是我们要的那个 $g$**：设 $A \supseteq F$ $\sigma$有限，则

$$\int |g_F|^q + \int |g_{A \setminus F}|^q = \int |g_A|^q \le M^q = \int |g_F|^q$$

> 续见 proofs/imp.riesz-lp.7.md
