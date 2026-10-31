# 极点处的留数公式　`prop.residue-at-pole`　·　说明
根 `../`

⭐ 证明：把 $\psi$ 在 $a$ 处 Taylor 展开 $\psi(z) = \sum_k \dfrac{\psi^{(k)}(a)}{k!}(z - a)^k$，再除以 $(z - a)^m$ 得 $f$ 的 Laurent 展开

$$f(z) = \sum_{k=0}^{\infty} \frac{\psi^{(k)}(a)}{k!}\,(z - a)^{k - m},$$

取 $k - m = -1$ 即 $k = m - 1$，系数正是 $\psi^{(m-1)}(a)/(m-1)!$。

⭐ 一阶极点的情形最常用。若 $f = p/q$、$p(a) \ne 0$ 且 $q$ 在 $a$ 有一阶零点，则 $\operatorname{Res}(f, a) = p(a)/q'(a)$ —— 这是实际计算里出现频率最高的那一行。

⚠ $m \ge 2$ 时**不能**只取极限：$f(z) = 1/z^2$ 的留数是 $0$，而 $\lim_{z \to 0} z f(z) = \infty$。拿错公式是留数计算里最常见的错。
