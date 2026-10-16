# NBV 的性质 $\implies$ 测度与函数的一一对应
`imp.borel-nbv` · 推出 · strong 边 · 根 `../`

`lem.nbv-variation` 全变差的 NBV 性质 + `thm.bv-jordan` BV 的 Jordan 分解 → `thm.borel-measure-nbv` 测度 ↔ NBV 的一一对应

**(1) 测度 $\implies$ 函数。** 复测度拆成四个正测度 $\mu = \mu_1^+ - \mu_1^- + i(\mu_2^+ - \mu_2^-)$。令

$$F_j^{\pm }(x) := \mu_j^{\pm }((-\infty, x])$$

每个 $F_j^{\pm }$ 递增、右连续、$F_j^{\pm }(-\infty) = 0$、$F_j^{\pm }(+\infty) = \mu_j^{\pm }(\mathbb{R}) < \infty$。于是 $F$ 是四个这样的函数之组合，属于 NBV。

**(2) 函数 $\implies$ 测度。** 反之任意 $F \in NBV$ 可以写成

$$F = F_1^+ - F_1^- + i(F_2^+ - F_2^-)$$

> 续见 proofs/imp.borel-nbv.2.md
