# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ → `thm.riesz-representation-lp` (L^p)* ≅ L^q

$$\|g_n\|_q \le \left\| \Phi|_{L^p(E_n)} \right\| \le \|\Phi\|$$
唯一性（a.e.）给出 $g_n = g_m$ a.e. 于 $E_n$（$n < m$），所以它们拼成一个 a.e. 良定义的 $g$。由 **MCT**，$\|g\|_q = \lim_n \|g_n\|_q \le \|\Phi\|$，故 $g \in L^q$；而对 $f \in L^p$，由 **DCT** $f\chi_{E_n} \to f$ 于 $L^p$，于是 $\Phi(f) = \lim_n \Phi(f\chi_{E_n}) = \lim_n \int_{E_n} fg = \int fg$。

> 续见 proofs/imp.riesz-lp.5.md
