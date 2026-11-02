# Hölder 不等式　`thm.holder`　·　说明
根 `../`

**取等条件**：等号成立 $\iff$ $|f|^p$ 与 $|g|^q$ 成比例 a.e.（即 $\alpha |f|^p = \beta |g|^q$ a.e.）。

证明：先设 $\|f\|_p = \|g\|_q = 1$。由 Young 不等式，把 $\lambda = 1/p$、$a = |f|^p$、$b = |g|^q$ 代进去得



$$|fg| \le \frac{|f|^p}{p} + \frac{|g|^q}{q}$$



两边积分即得 $\|fg\|_1 \le \frac{1}{p} + \frac{1}{q} = 1$。一般情形把 $f, g$ 各自归一化。

⚠ $p = q = 2$ 时就是 **Cauchy–Schwarz 不等式**。

$p = 1$ 时共轭指数是 $q = \infty$，此时 $\|fg\|_1 \le \|f\|_1 \|g\|_\infty$（见 $L^\infty$ 那一节）。
