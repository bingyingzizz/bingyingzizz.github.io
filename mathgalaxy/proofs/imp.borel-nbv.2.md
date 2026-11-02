# NBV 的性质 $\implies$ 测度与函数的一一对应
`imp.borel-nbv` · 推出 · strong 边 · 根 `../`

`lem.nbv-variation` 全变差的规范有界变差性质 + `thm.bv-jordan` 有界变差函数的 Jordan 分解 → `thm.borel-measure-nbv` 测度与规范有界变差函数的一一对应

**唯一性**来自「$\mu$ 由它在 $(-\infty , x]$ 上的值唯一决定」，而后者生成整个 $\mathfrak{B}_\mathbb{R}$。

**$(3) |\mu _F| = \mu _\{T_F\}$。** 由**引理**，$F \in NBV \implies T_F \in NBV$，所以 $\mu_{T_F}$ 有意义。两边都是 NBV 函数，逐点比较：对任意 $x$，

$$\mu_{T_F}((-\infty, x]) = T_F(x) = \sup\{ \sum|F(x_j) - F(x_{j-1})| \} = |\mu_F|((-\infty, x])$$

（中间那个等号是 $|\mu |$ 的全变差定义 + 测度的可数可加性。）由 $(-\infty , x]$ 生成 $\mathfrak{B}_\mathbb{R}$，两个测度相等。∎
