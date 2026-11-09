# 完美配对　`def.perfect-pairing`　·　说明
根 `../`

三条合起来等价于：$x \mapsto \langle x, \cdot\rangle$ 与 $y \mapsto \langle \cdot, y\rangle$ 都是**等距嵌入** $X \hookrightarrow Y^*$、$Y \hookrightarrow X^*$。

**例子**：Hilbert 空间 $H$ 与自身、配对 $\langle x, y\rangle$；$L^p$ 与 $L^q$（$1/p + 1/q = 1$）、配对 $\int f g$（Hölder 给有界，定范由 $g = |f|^{p-1}\operatorname{sgn} f$ 的共轭指数构造给出）。

⚠ **完美配对不保证满射**：$X = \ell^1$、$Y = c_0$、$\langle x, y\rangle = \sum x_n y_n$ 满足三条（$c_0^* \cong \ell^1$ 给 $Y \to X^*$ 满，但 $X \to Y^* = \ell^\infty$ 只是等距嵌入，不满）。所以「完美」是「无废坐标 + 范数可由配对读出」，不是「互为对偶」。

⭐ 把 Riesz 表示定理的两种版本放在同一框架下：Hilbert 版与 $L^p$ 版都在说「这对配对里映射是满的」——见 `thm.riesz-perfect-pairing`。

📌 有限维时三条自动给出 $X \cong Y^*$（维数相同 + 单射即满射）。
