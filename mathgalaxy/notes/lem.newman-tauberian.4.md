# Newman 解析定理　`lem.newman-tauberian`　·　说明
根 `../`

$$|h(z)|\le B\int_{0}^{T}e^{-tx}\,\mathrm{d}t=B\,\frac{e^{-Tx}-1}{-x}\le\frac{Be^{-Tx}}{-x},$$

于是 $|h(z)F(z)|\le\frac{Be^{-Tx}}{-x}\cdot e^{Tx}\cdot\frac{2(-x)}{R}=\frac{2B}{R}$，同第四步得 $|I_{2}|\le B/R$。

**第六步（$I_{3}\to0$）.** 在 $C_{-}$ 上 $x\le0$。在弦 $\operatorname{Re}z=-\delta$ 上，$|F(z)|\le e^{-\delta T}(1+|z|^{2}/R^{2})\le2e^{-\delta T}$；在两段小圆弧（$|z|=R$、$-\delta\le x\le0$）上，$|F(z)|=e^{xT}\cdot2|x|/R$。给定 $\varepsilon>0$：在 $|x|\le\varepsilon R/2$ 处 $|F|\le\varepsilon$；在其余部分 $x\le-\varepsilon R/2$，故 $|F|\le2e^{-\varepsilon RT/2}$。因此 $F\to0$ 在紧集 $C_{-}$ 上一致。又 $g$ 在 $D$ 的紧邻域上有界，且 $|z|\ge\delta$ 于 $C_{-}$，故 $I_{3}\to0$（$T\to\infty$）。

**第七步（收尾）.** 由 (2) 与三段的估计，对每个固定的 $R$，

$$|g(0)-g_{T}(0)|\le\frac{2B}{R}+o(1)\qquad(T\to\infty).$$

> 续见 notes/lem.newman-tauberian.5.md
