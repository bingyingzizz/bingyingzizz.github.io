# n 次方根 $\implies$ 有理指数良定义；确界 $\implies$ 实数指数
`imp.real-power` · 推出 · strong 边 · 根 `../`

`thm.nth-root` n 次方根 + `lem.archimedean` Archimedes 性质 → `def.real-power` 有理指数与实数指数幂

**有理指数良定义。** 设 $m/n = m'/n'$（$n, n' \ge 1$），则 $mn' = m'n$。取 $n n'$ 次方根：

$$(a^{m})^{n'} = a^{mn'} = a^{m'n} = (a^{m'})^{n}.$$

由 `thm.nth-root` 的唯一性（两边都为正），$\sqrt[nn']{(a^{m})^{n'}} = \sqrt[nn']{(a^{m'})^{n}}$，即 $\sqrt[n]{a^{m}} = \sqrt[n']{a^{m'}}$。所以 $a^{r}$ 只依赖 $r$。

**实数指数。** 设 $a > 1$、$x \in \mathbb{R}$。集合 $T := \{a^{q} : q \in \mathbb{Q},\ q < x\}$ 非空（有理数稠密取 $q < x$）且有上界：取有理 $q_{1}$ 使 $x < q_{1}$，由 $a > 1$ 时 $a^{q}$ 关于 $q$ 递增（`prop.power-rules` 的有理版本）知 $a^{q} < a^{q_{1}}$ 对一切 $q < x$ 成立。故 $a^{x} := \sup T$ 存在。$0 < a < 1$ 与 $a = 1$ 的情形按定义化归。$\blacksquare$
