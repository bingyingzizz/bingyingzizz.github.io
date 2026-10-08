# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ → `thm.riesz-representation-lp` (L^p)* ≅ L^q

故 $g_{A \setminus F} = 0$，即 $g_A = g_F$ a.e.。而对 $f \in L^p$，集合 $A := F \cup \{f \ne 0\}$ 是 $\sigma$有限的，于是 $\Phi(f) = \int f g_A = \int f g_F$。取 $g = g_F$ 即可。∎

> ⭐ Step 1 的核心思想：**把 $L^p$ 上的泛函限制在「特征函数」上，就得到一个测度**，再用 Radon–Nikodym 把测度变成函数。
