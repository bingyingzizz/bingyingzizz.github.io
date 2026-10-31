# Jordan 引理　`lem.jordan`　·　说明
根 `../`

⭐ 关键不等式 $\sin\theta \ge \dfrac{2\theta}{\pi}$（$0 \le \theta \le \pi/2$）：在 $C_R$ 上 $z = R e^{i\theta}$，$\operatorname{Im} z = R\sin\theta$，故

$$\left| e^{i a z} \right| = e^{-a\, \operatorname{Im} z} = e^{-a R \sin\theta} \le e^{-2 a R \theta/\pi}.$$

沿 $\theta$ 积分得 $\dfrac{2}{a R}$ 量级，再乘弧长 $\pi R$ 与 $M_R$，得 $\pi M_R/a$。**注意这里并没有用到 $R$ 很大** —— 衰减全来自 $e^{iaz}$。

⭐ 与「弧长乘最大模」的对比：只对 $f$ 用 ML 估计得 $\pi R M_R$，只有当 $M_R = O(1/R^{1+\delta})$ 时才趋零；Jordan 引理把要求降到 $M_R \to 0$，也就是 $f$ 只要「不增长」就够。

⚠ $a > 0$ 不可省：$a < 0$ 时 $e^{iaz}$ 在上半平面里指数**增长**，要改到下半平面（顺时针）去做，符号跟着变。

📌 完整计算例（第三个标准型，$a > 0$）：

$$\int_{-\infty}^{\infty} \frac{e^{i a x}}{x^2 + 1}\,\mathrm{d}x.$$

被积函数在 $|z| = R$ 上一致趋于零（$|1/(z^2 + 1)| \le 2/R^2$），Jordan 引理把大弧的贡献抹掉，剩下的就是留数：

> 续见 notes/lem.jordan.2.md
