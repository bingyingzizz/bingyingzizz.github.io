# Laurent 展开定理　`thm.laurent`　·　说明
根 `../`

⭐ 证明：取 $r < \rho_1 < |z - a| < \rho_2 < R$，在环域 $A_{\rho_1,\rho_2}(a)$ 上用 Cauchy 积分公式（环域版，边界是外圆减内圆）：

$$f(z) = \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho_2} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta - \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho_1} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta.$$

第一项按 $\dfrac{1}{\zeta - z} = \sum_n \dfrac{(z - a)^n}{(\zeta - a)^{n+1}}$ 展开（因 $|z - a| < \rho_2$）；第二项按 $\dfrac{1}{z - \zeta} = \sum_n \dfrac{(\zeta - a)^n}{(z - a)^{n+1}}$ 展开（因 $|z - a| > \rho_1$），得到负幂次。

⭐ 唯一性：系数由积分公式给出，所以不依赖展开方式 —— 实际计算时可以用任何代数变形（几何级数、待定系数），结果一定一样。

⚠ 环域不能退化成圆盘或外部：$r = 0$ 时主部可能发散，$R = +\infty$ 时正则部分可能发散。**退化情形正是奇点分类的入口**：$r = 0$ 时主部的三种形态对应三类孤立奇点。
