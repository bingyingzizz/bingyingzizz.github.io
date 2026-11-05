# 有界变差函数的例子与基本性质　`prop.bv-examples`　·　说明
根 `../`

rt x\rvert^{-1/2}$ 在 $0$ 附近可积，$F$ 在 $[\varepsilon,b]$ 上绝对连续，故 $\operatorname{Var}_{[0,b]}(F) \le \int_{0}^{b}\lvert F^{\prime}\rvert < \infty$ ✓。⚠️ 指数不能降到 $1$：$x\sin(1/x)$ **不属于** $BV$（见下面的分界线）。
**分界线**：$F(x) = \sin(1/x)$（$x \ne 0$，$F(0) = 0$）**不属于** $BV$ —— 在 $0$ 附近振幅不衰减，取划分逼近 $0$ 时 $\sum|\Delta F|$ 像调和级数那样发散 ✓。同一个判据下 $F(x) = x\sin(1/x)$ **也**不属于 $BV$：取 $p_{k} = \frac{1}{2k\pi+\pi/2}$、$q_{k} = \frac{1}{2k\pi+3\pi/2}$（$\sin(1/p_{k}) = 1$、$\sin(1/q_{k}) = -1$），则 $\lvert F(p_{k})-F(q_{k})\rvert = p_{k}+q_{k} \sim \frac{1}{\pi k}$，故 $\sum_{k}\lvert F(p_{k})-F(q_{k})\rvert$ 像调和级数一样发散。一般地，$x^{a}\sin(x^{-b})$ 属于 $BV$ 的判据是 $a > b$，$a = b = 1$ 正好落在失败那一侧。∎
⭐ 所以「振荡」本身不碍事，**振幅衰减**才是 $BV$ 与「无限振荡」的分界。

> 续见 notes/prop.bv-examples.3.md
