# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ → `thm.riesz-representation-lp` (L^p)* ≅ L^q

由 $\Phi$ 的连续性，$\nu(E) = \sum_j \nu(E_j)$ —— 正是复测度的定义。

**② $\nu \ll \mu$。** 若 $\mu(E) = 0$，则 $\chi_E = 0$ 于 $L^p$，故 $\nu(E) = 0$。

**③ 用 Radon–Nikodym。** 存在 $g \in L^1(\mu)$ 使 $\nu(E) = \int_E g \, d\mu$，即

$$\Phi(\chi_E) = \int \chi_E g \, d\mu$$
对一切简单函数 $f$ 就有 $\Phi(f) = \int fg \, d\mu$（线性）。

> 续见 proofs/imp.riesz-lp.3.md
