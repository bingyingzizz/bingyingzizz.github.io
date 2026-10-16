# 把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$
`imp.riesz-lp` · 推出 · strong 边 · 根 `../`

`prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ → `thm.riesz-representation-lp` (L^p)* ≅ L^q

**④ 把 $g$ 提升到 $L^q$。** 由 $\left| \int fg \right| = |\Phi(f)| \le \|\Phi\| \, \|f\|_p$，有界泛函那条命题给出 $g \in L^q$ 且 $\|g\|_q \le \|\Phi\|$。再由稠密性（简单函数在 $L^p$ 稠密、$\Phi$ 连续）得 $\Phi(f) = \int fg$ 对**一切** $f \in L^p$ 成立。

**Step 2：$\mu$ $\sigma$有限。** 取 $\{E_n\} \uparrow$、$0 < \mu(E_n) < \infty$、$X = \bigcup_n E_n$，并把 $L^p(E_n)$ 等同于「在 $E_n$ 外为零的 $L^p(X)$ 函数」。对每个 $n$ 用 Step 1 得 $g_n \in L^q(E_n)$，且

> 续见 proofs/imp.riesz-lp.4.md
