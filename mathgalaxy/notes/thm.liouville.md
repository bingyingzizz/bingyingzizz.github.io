# Liouville 定理　`thm.liouville`　·　说明
根 `../`

⭐ 证明（用 Cauchy 不等式）：对任意 $z$ 与任意 $R > 0$，$f$ 在 $D(z, R)$ 上全纯，故 $|f'(z)| \le M/R$。令 $R \to \infty$ 得 $f'(z) = 0$；由 $z$ 任意，$f' \equiv 0$；区域连通，故 $f$ 是常数。

⭐ 书里还给了**只用 Cauchy 积分公式**的第二证明：取 $R > |z|$，

$$f(z) - f(0) = \frac{1}{2\pi i}\oint_{|\zeta| = R}\left( \frac{1}{\zeta - z} - \frac{1}{\zeta} \right) f(\zeta)\,\mathrm{d}\zeta,$$

估计得 $|f(z) - f(0)| \le \dfrac{M|z|}{R - |z|} \to 0$（$R \to \infty$），故 $f(z) = f(0)$。

⚠ 有界性不能随便放松：$e^z$ 在右半平面有界，但在全平面无界。反过来，若只知 $|f(z)| \le C(1 + |z|)^k$，同样的论证只给出「$f$ 是次数不超过 $k$ 的多项式」。

⭐ 与实分析对照：$\sin x$ 在 $\mathbb{R}$ 上有界且无穷次可微，却不是常数 —— 因为「整函数」比「$C^\infty$ 函数」强得多。
