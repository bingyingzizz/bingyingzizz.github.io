# 「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym
`imp.lebesgue-rn` · 推出 · strong 边 · 根 `../`

`lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差 → `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

由 ① 每个 $g_n \in \mathcal{F}$，且 $g_n \uparrow  f$、$\int g_n d\mu \ge \int f_n d\mu$，故 $\lim_n \int g_n d\mu = a$。由 **MCT**，$f \in \mathcal{F}$ 且 $\int f d\mu = a$。

**③ 断言 $d\lambda := d\nu - f d\mu$ 与 $\mu$ 奇异。** 反设不然，由**引理**，存在 $\varepsilon > 0$ 与 $E \in \mathcal{M}$、$\mu (E) > 0$，使 $\lambda \ge \varepsilon\mu$ 在 $E$ 上成立，即

> 续见 proofs/imp.lebesgue-rn.4.md
