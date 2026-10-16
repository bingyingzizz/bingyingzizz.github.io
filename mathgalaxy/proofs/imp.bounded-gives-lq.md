# Hölder + 有界性 $\implies$ $g \in L^q$
`imp.bounded-gives-lq` · 推出 · strong 边 · 根 `../`

`thm.holder` Hölder 不等式 + `def.duality-map` 对偶配对 φ_g → `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q

**Step 1：有限支可测的 $f$ 也满足 $|\int fg| \le M_g(g)$。**

设 $f$ 有限支可测、$\|f\|_p = 1$。取**有限支简单函数列** $\{f_n\} \to f$ a.e.，且 $|f_n| \le |f|$、$|f_n| \le \|f\|_\infty \chi_E$（$E$ 是 $f$ 的支集，有限测度）。由 **DCT**，

$$\left| \int fg \right| = \lim_n \left| \int f_n g \right| \le M_g(g)$$

**Step 2：$q < \infty$。** 不妨设 $g \ne 0$，且设 $\{g \ne 0\}$ $\sigma$有限（$\mu$ 半有限时这一点自动成立）。

先说明**必须**有 $\mu(\{|g| > \varepsilon\}) < \infty$（对一切 $\varepsilon > 0$）：否则设 $E_\varepsilon = \{|g| > \varepsilon\}$ 测度无穷，对任意 $C$ 取 $B \subseteq E_\varepsilon$ 使 $C < \mu(B) < \infty$，令

> 续见 proofs/imp.bounded-gives-lq.2.md
