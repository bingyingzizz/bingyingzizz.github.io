# NBV 的性质 $\implies$ 测度与函数的一一对应
`imp.borel-nbv` · 推出 · strong 边 · 根 `../`

`lem.nbv-variation` 全变差的规范有界变差性质 + `thm.bv-jordan` 有界变差函数的 Jordan 分解 → `thm.borel-measure-nbv` 测度与规范有界变差函数的一一对应

**(1) 测度 $\implies$ 函数。** 复测度拆成四个正测度 $\mu = \mu_1^+ - \mu_1^- + i(\mu_2^+ - \mu_2^-)$。令

$$F_j^{\pm }(x) := \mu_j^{\pm }((-\infty, x])$$

每个 $F_j^{\pm }$ 递增、右连续、$F_j^{\pm }(-\infty) = 0$、$F_j^{\pm }(+\infty) = \mu_j^{\pm }(\mathbb{R}) < \infty$。于是 $F$ 是四个这样的函数之组合，属于 NBV。

**(2) 函数 $\implies$ 测度。** 反之任意 $F \in NBV$ 可以写成

$$F = F_1^+ - F_1^- + i(F_2^+ - F_2^-)$$

（用 NBV 版本的 Jordan 分解，注意右连续与 $F(-\infty ) = 0$ 都被差保留。）每个递增右连续、$F(-\infty ) = 0$ 的函数唯一对应一个有限 Borel 测度（取 $\mu ((a,b]) = F(b) - F(a)$，由 Lebesgue–Stieltjes 那一套扩张）；

四块加起来即得 $\mu _F$。

> 续见 proofs/imp.borel-nbv.2.md
