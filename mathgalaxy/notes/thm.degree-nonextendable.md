# 度非零的映射不能延拓到球　`thm.degree-nonextendable`　·　说明
根 `../`

**证明。** 令 $H : S^{n-1} \times [0,1] \to S^{n-1}$，$H(x,t) = F((1-t)x)$。逐条看：$0 \le 1-t \le 1$、$|x| = 1$，于是 $|(1-t)x| \le 1$，故 $(1-t)x \in \overline{B^{n}}$ 落在 $F$ 的定义域里；$H$ 是连续映射的复合，故连续；取值始终在 $S^{n-1}$ 里（$F$ 的值域）。

**两端。** $H(x,0) = F(x) = f(x)$；$H(x,1) = F(0)$ 是**常值**映射。所以 $f$ 与某个常值映射同伦。

**用同伦不变性收尾。** 由 `thm.homotopy-invariance`，同伦的映射在约化同调上诱导同一个同态（`def.degree` 的笔记说明了这条如何给出「度只依赖同伦类」）。常值映射诱导零同态，故 $\deg f = \deg(\text{常值}) = 0$。∎

**推论（无收缩）。** 取 $f = \mathrm{id}_{S^{n-1}}$：$\deg(\mathrm{id}) = 1 \ne 0$，故恒等映射不能延拓为 $\overline{B^{n}} \to S^{n-1}$ —— 闭球不能连续收缩到它的边界球面。$n = 2$ 时这正是「圆盘不能收缩到圆周」，本图在 `thm.no-retraction-disk` 里用基本群那条路线证过，两处结论一致。

> 续见 notes/thm.degree-nonextendable.2.md
