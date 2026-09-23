# Young 不等式 $\implies$ Hölder 不等式
`imp.holder` · 推出 · strong 边 · 根 `../`

`lem.young-inequality` Young 不等式 → `thm.holder` Hölder 不等式

**① 先设 $\|f\|_p = \|g\|_q = 1$。** 在 Young 不等式里取

$$a = |f(x)|^p, \qquad b = |g(x)|^q, \qquad \lambda = \frac{1}{p}, \qquad 1 - \lambda = \frac{1}{q}$$

得逐点不等式

$$|f(x)g(x)| \le \frac{|f(x)|^p}{p} + \frac{|g(x)|^q}{q}$$

**② 积分。**

$$\int |fg| \le \frac{1}{p} \int |f|^p + \frac{1}{q} \int |g|^q = \frac{1}{p} + \frac{1}{q} = 1$$

**③ 一般情形。** 若 $\|f\|_p$、$\|g\|_q$ 都非零，把 $f / \|f\|_p$ 与 $g / \|g\|_q$ 代进去再用齐次性。若有一个为零，则 $fg = 0$ a.e.，两边都是 0。∎

**④ 取等条件。** 回看 ②：等号成立要求 ① 里每一步都取等，即 $a = b$ a.e.（Young 不等式的取等条件），也就是

$$|f|^p = |g|^q \quad \text{a.e.}$$
在归一化之后；还原到一般情形就是「$|f|^p$ 与 $|g|^q$ 成比例 a.e.」。
