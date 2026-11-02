# 「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym
`imp.lebesgue-rn` · 推出 · strong 边 · 根 `../`

`lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差 → `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

$$\varepsilon \chi_E d\mu \le d\nu - f d\mu\quad  \implies\quad  (f + \varepsilon \chi_E) d\mu \le d\nu$$

于是 $f + \varepsilon \chi_E \in \mathcal{F}$，但

$$\int (f + \varepsilon \chi_E) d\mu = a + \varepsilon\cdot\mu(E) > a$$

与 $a$ 的**上确界**性矛盾。故 $\lambda \perp \mu$，$\nu = \lambda + (f d\mu)$ 就是所要的分解。

**④ 唯一性。** 设 $d\nu = d\lambda' + f' d\mu$ 是另一种分解。则

> 续见 proofs/imp.lebesgue-rn.5.md
