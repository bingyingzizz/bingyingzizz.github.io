# 「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym
`imp.lebesgue-rn` · 推出 · strong 边 · 根 `../`

`lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差 → `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

$$d\lambda - d\lambda' = (f' - f) d\mu$$

左边与 $\mu$ 奇异（两个各与 $\mu$ 奇异的测度之差仍与 $\mu$ 奇异），右边关于 $\mu$ 绝对连续。由「既奇异又绝对连续 $\implies$ 等于零」，两边都是 0，即 $\lambda = \lambda'$ 且 $f = f'$ $\mu -\text{a.e.}$。

**II. 推广到 $\sigma$有限。** 取 $X = \bigcup_j A_j$（$\mu(A_j) < \infty$、$\nu(A_j) < \infty$）。令

$$\mu_j(E) := \mu(E \cap A_j), \quad  \nu_j(E) := \nu(E \cap A_j)$$

> 续见 proofs/imp.lebesgue-rn.6.md
