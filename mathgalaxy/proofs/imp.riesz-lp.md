# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ → `thm.riesz-representation-lp` (L^p)* ≅ L^q

设 $1 < p < \infty$、$\Phi \in (L^p)^*$。

**Step 1：先设 $\mu$ 有限。** 此时所有简单函数都在 $L^p$ 里。定义

$$\nu(E) := \Phi(\chi_E) \qquad (E \in \mathcal{M})$$

**① $\nu$ 是复测度。** 设 $E = \bigsqcup_j E_j$，则 $\chi_E = \sum_{j} \chi_{E_j}$。而

$$\left\| \chi_E - \sum_{j \le n} \chi_{E_j} \right\|_p = \left\| \sum_{j > n} \chi_{E_j} \right\|_p = \mu\left( \bigsqcup_{j>n} E_j \right)^{1/p} \to 0$$

> 续见 proofs/imp.riesz-lp.2.md
