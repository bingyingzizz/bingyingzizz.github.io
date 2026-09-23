# 集合版（截口公式）+ MCT $\implies$ Tonelli
`imp.tonelli` · 推出 · strong 边 · 根 `../`

`thm.product-measure-sections` 乘积测度由截口给出 + `thm.mct` 单调收敛定理 → `thm.fubini-tonelli` Fubini–Tonelli

**① 指示函数。** 取 $f = \chi_E$（$E \in \mathcal{M} \otimes  \mathcal{N}$）。此时

$$\int_Y f(x, y) d\nu(y) = \nu(E_x), \quad  \int_X f(x, y) d\mu(x) = \mu(E^y)$$

于是三重等式正是上一条定理的内容。

**② 简单函数。** 由线性推广到 $f = \sum_j a_j \chi_{E_j}$（$a_j \ge 0$，$E_{j}$ 不交）。

**③ 非负可测函数。** 取简单函数列 $\{f_n\} \nearrow  f$（简单函数逼近定理）。令

$$g_n(x) = \int f_n(x, y) d\nu(y), \quad  g(x) = \int f(x, y) d\nu(y)$$

由 $f_n \uparrow  f$ 与积分的单调性，$\{g_n\}$ 递增；由 **MCT**，$g = \lim_n g_n$ 且

$$\int g d\mu = \lim_n \int g_n d\mu$$

再由 ② 对每个 $n$ 的三重等式，

$$\int g_n d\mu = \int f_n d(\mu \times \nu)$$

于是

> 续见 proofs/imp.tonelli.2.md
