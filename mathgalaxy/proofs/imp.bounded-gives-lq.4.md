# Hölder + 有界性 $\implies$ $g \in L^q$
`imp.bounded-gives-lq` · 推出 · strong 边 · 根 `../`

`thm.holder` Hölder 不等式 + `def.duality-map` 对偶配对 φ_g → `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q

**Step 3：$q = \infty$。** 对 $\varepsilon > 0$ 令 $A = \{|g(x)| \ge M_\infty(g) + \varepsilon\}$。若 $\mu(A) > 0$，由半有限性或 $A \subseteq \{g \ne 0\}$ 的 $\sigma$有限性取 $B \subseteq A$、$0 < \mu(B) < \infty$，令 $f = \mu(B)^{-1} \chi_B \operatorname{sgn} g$，则 $\|f\|_1 = 1$ 而 $\int fg \ge M_\infty(g) + \varepsilon$ —— 矛盾。故 $\mu(A) = 0$，即 $\|g\|_\infty \le M_\infty(g)$；反方向由 Hölder。∎
