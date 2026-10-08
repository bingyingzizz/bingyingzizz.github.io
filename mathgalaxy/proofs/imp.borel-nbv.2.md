# NBV 的性质 $\implies$ 测度与函数的一一对应
`imp.borel-nbv` · 推出 · strong 边 · 根 `../`

`lem.nbv-variation` 全变差的 NBV 性质 + `thm.bv-jordan` BV 的 Jordan 分解 → `thm.borel-measure-nbv` 测度 ↔ NBV 的一一对应

（用 NBV 版本的 Jordan 分解，注意右连续与 $F(-\infty ) = 0$ 都被差保留。）每个递增右连续、$F(-\infty ) = 0$ 的函数唯一对应一个有限 Borel 测度（取 $\mu ((a,b]) = F(b) - F(a)$，由 Lebesgue–Stieltjes 那一套扩张）；四块加起来即得 $\mu _F$。**唯一性**来自「$\mu$ 由它在 $(-\infty , x]$ 上的值唯一决定」，而后者生成整个 $\mathfrak{B}_\mathbb{R}$。

**$(3) |\mu _F| = \mu _\{T_F\}$。** 由**引理**，$F \in NBV \implies T_F \in NBV$，所以 $\mu_{T_F}$ 有意义。两边都是 NBV 函数，逐点比较：对任意 $x$，

$$\mu_{T_F}((-\infty, x]) = T_F(x) = \sup\{ \sum|F(x_j) - F(x_{j-1})| \} = |\mu_F|((-\infty, x])$$

> 续见 proofs/imp.borel-nbv.3.md
