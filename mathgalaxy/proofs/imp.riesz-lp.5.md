# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` 对偶等距：范数相等 → `thm.riesz-representation-lp` Riesz 表示定理

**Step 3：$\mu$ 任意（此时 $p > 1$，故 $q < \infty$）。** 对每个 $\sigma$有限集 $E \subseteq X$，Step 2 给出 a.e. 唯一的 $g_E \in L^q(E)$ 使 $\Phi(f) = \int f g_E$ 对一切 $f \in L^p(E)$ 成立，且 $\|g_E\|_q \le \|\Phi\|$。若 $F \supseteq E$ 也 $\sigma$有限，则 $g_F = g_E$ a.e. 于 $E$，因而 $\|g_F\|_q \ge \|g_E\|_q$。令

$$M := \sup \{\, \|g_E\|_q : E \text{ 是 }\sigma\text{-有限集} \,\} \le \|\Phi\|$$

> 续见 proofs/imp.riesz-lp.6.md
