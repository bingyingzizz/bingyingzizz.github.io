# Cauchy 不等式　`thm.cauchy-inequality`　·　说明
根 `../`

⭐ 证明只有一步估计：取 $0 < r < R$，把高阶导数公式写在圆周 $|\zeta - z_0| = r$ 上，取模、用 ML 不等式（$|\mathrm{d}\zeta|$ 的总长是 $2\pi r$，分母是 $r^{n+1}$）：

$$\left| f^{(n)}(z_0) \right| \le \frac{n!}{2\pi} \cdot M(r) \cdot \frac{2\pi r}{r^{n+1}} = \frac{n!\,M(r)}{r^n},$$

再令 $r \to R$ 即得。

⭐ 它把「导数的增长」和「函数值的增长」绑在一起 —— 这是 Liouville 定理**唯一**的输入。

⚠ 上界里的 $R$ 是「能写多大就写多大」：$f$ 在 $D(z_0, R)$ 上全纯的 $R$ 有上限（到最近奇点的距离），不能随意放大。

⭐ 反向也有内容：若 $|f| \le M$ 在全平面成立，则 $|f^{(n)}(0)| \le n! M/R^n$ 对**一切** $R$ 成立，令 $R \to \infty$ 得 $f^{(n)}(0) = 0$ —— 这正是 Liouville。
