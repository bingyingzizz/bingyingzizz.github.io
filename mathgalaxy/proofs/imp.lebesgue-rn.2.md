# 「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym
`imp.lebesgue-rn` · 推出 · strong 边 · 根 `../`

`lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差 → `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

$$\int_E h d\mu = \int_{E\cap A} f d\mu + \int_{E\setminus A} g d\mu \le \nu(E\cap A) + \nu(E\setminus A) = \nu(E)$$

故 $h \in \mathcal{F}$。

**② 取上确界。** 令 $a := \sup\{ \int f d\mu : f \in \mathcal{F} \} \le \nu(X) < \infty$（这一步用到 $\nu$ 有限）。取 $\{f_n\} \subseteq \mathcal{F}$ 使 $\int f_n d\mu \to a$，令

$$g_n = \max_{f_1, \ldots , f_n}, \quad  f = \sup_n f_n$$

> 续见 proofs/imp.lebesgue-rn.3.md
