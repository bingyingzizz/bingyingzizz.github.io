# 复偏导数　`def.complex-partial`　·　说明
根 `../`

⭐ $\partial/\partial z$、$\partial/\partial \bar z$ 叫 **Wirtinger 导数**。它们**不是**差商极限：$\bar z$ 沿不同方向的行为不一样，差商没有极限。它们只是实偏导的一对线性组合，是记账工具。

⭐ 记忆法（书里脚注）：把 $x = (z + \bar z)/2$、$y = -i(z - \bar z)/2$ 代进 $f(x, y)$，**形式上**把 $z$、$\bar z$ 当成独立变量用链式法则求偏导，就得到上面两式。⚠ 这只帮助记忆 —— 严格定义是右边的组合，因为 $z$ 与 $\bar z$ 作为 $\mathbb{R}^2$ 上的两个坐标并不独立。

⭐ 真正好用的是它的**判据**性质：$f$ 复可微 $\iff$ $\partial f/\partial \bar z(z_0) = 0$。也就是「$f$ 能否只含 $z$ 不含 $\bar z$」，变成可以逐项验算的事情。

📌 形式上有 $\partial z/\partial z = \partial \bar z/\partial \bar z = 1$，$\partial z/\partial \bar z = \partial \bar z/\partial z = 0$ —— 就像两组独立的坐标。
