# Hölder + 有界性 $\implies$ $g \in L^q$
`imp.bounded-gives-lq` · 推出 · strong 边 · 根 `../`

`thm.holder` Hölder 不等式 + `def.duality-map` 对偶配对 φ_g → `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q

$$f = \mu(B)^{-1/q} \chi_B \operatorname{sgn} g, \qquad \|f\|_p = 1$$

则 $\left| \int fg \right| = \mu(B)^{-1/q} \int_B |g| > \varepsilon \, \mu(B)^{1/p} > \varepsilon C^{1/p}$，令 $C \to \infty$ 就与 $M_g(g) < \infty$ 矛盾。

于是可取 $\{E_n\} \uparrow \{g \ne 0\}$，$\mu(E_n) < \infty$；再取简单 $\varphi_n \to g$、$|\varphi_n| \le |g|$，令 $g_n := \varphi_n \chi_{E_n}$，则 $g_n \to g$、$|g_n| \le |g|$、且 $g_n$ 在 $E_n^c$ 外为零。令

$$f_n := \frac{|g_n|^{q-1} \operatorname{sgn} g_n}{\|g_n\|_q^{\,q-1}}, \qquad \|f_n\|_p = 1$$

则 $f_n$ 有限支，由 Step 1 可用。于是

> 续见 proofs/imp.bounded-gives-lq.3.md
