# Hilbert 空间一致凸　`thm.hilbert-uniformly-convex`　·　说明
根 `../`

**证明。** 令 $\|x\| = \|y\| = 1$。由平行四边形律，



$$\|x + y\|^{2} + \|x - y\|^{2} = 2\|x\|^{2} + 2\|y\|^{2} = 4 ,$$



即 $\left\|\frac{x + y}{2}\right\|^{2} = 1 - \frac{\|x - y\|^{2}}{4}$。当 $\|x - y\| \ge \varepsilon$ 时右端 $\le 1 - \varepsilon^{2}/4$，开方得 $\left\|\frac{x + y}{2}\right\| \le \sqrt{1 - \varepsilon^{2}/4} = 1 - \delta$。$\blacksquare$
