# 高阶导数公式　`thm.cauchy-higher-derivative`　·　说明
根 `../`

⭐ 证明就是**在积分号下求导**。$n = 1$ 时，差商与「形式导数」之差是

$$\frac{1}{2\pi i}\oint f(\zeta)\left[ \frac{1}{(\zeta - z - h)(\zeta - z)} - \frac{1}{(\zeta - z)^2} \right]\mathrm{d}\zeta = \frac{h}{2\pi i}\oint \frac{f(\zeta)\,\mathrm{d}\zeta}{(\zeta - z - h)(\zeta - z)^2}.$$

取 $|h| \le \delta/2$，其中 $\delta = \operatorname{dist}(z, \partial\Omega) > 0$，则分母有与 $\zeta$、$h$ 无关的正下界，整个积分的模 $\le C|h| \to 0$ —— 极限存在且正是形式导数。这个表达式对 $z$ 连续，所以 $f'$ 连续、可以再做一次；$n \ge 2$ 归纳。

⭐ 这是复分析与实分析**最大的分水岭**：实函数可以一次可微而不二次（如 $x|x|$），复函数一次可微就无穷次可微。

⚠ 「全纯」本身**没有**假设 $f'$ 连续 —— 连续性是从这条公式**推**出来的，不是前提。这正是 Goursat 那条边的价值：先去掉多余的假设，再把它当结论赚回来。
