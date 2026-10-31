# 围道积分 $\implies$ Jordan 引理
`imp.jordan-lemma` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 → `lem.jordan` Jordan 引理

$$\left| \int_{C_R} f e^{iaz}\,\mathrm{d}z \right| \le M_R \int_{C_R} e^{-a R \sin\theta}\,|\mathrm{d}z| = M_R R \int_0^{\pi} e^{-a R \sin\theta}\,\mathrm{d}\theta.$$

**第四步：积掉 $\theta$。** 用第二步的不等式（被积函数关于 $\pi/2$ 对称，算一半乘 $2$）：

$$R\int_0^{\pi} e^{-a R \sin\theta}\,\mathrm{d}\theta \le 2 R \int_0^{\pi/2} e^{-2 a R \theta/\pi}\,\mathrm{d}\theta = 2 R \cdot \frac{\pi}{2 a R}\left( 1 - e^{-a R} \right) \le \frac{\pi}{a}.$$

> 续见 proofs/imp.jordan-lemma.3.md
