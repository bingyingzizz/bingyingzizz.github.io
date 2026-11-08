# Newman 解析定理　`lem.newman-tauberian`　·　说明
根 `../`

$$\left|1+\frac{z^{2}}{R^{2}}\right|=\frac{2|\operatorname{Re}z|}{R},\qquad |F(z)|=e^{T\operatorname{Re}z}\,\frac{2|\operatorname{Re}z|}{R}.\tag{3}$$

**第四步（$|I_{1}|\le B/R$）.** 在 $C_{+}$ 上 $x=\operatorname{Re}z>0$。由 (1) 与 (3)，

$$\left|\int_{T}^{\infty}fe^{-tz}\,\mathrm{d}t\right|\,|F(z)|\le B\,\frac{e^{-Tx}}{x}\cdot e^{Tx}\,\frac{2x}{R}=\frac{2B}{R}.$$

再乘 $|\mathrm{d}z|/|z|=|\mathrm{d}z|/R$，沿 $C_{+}$（长度 $\pi R$）积分，得 $|I_{1}|\le\frac{1}{2\pi}\cdot\frac{2B}{R}\cdot\frac{\pi R}{R}=\frac{B}{R}$。

**第五步（$|I_{2}|\le B/R$）.** 内层 $h(z)=\int_{0}^{T}fe^{-tz}\,\mathrm{d}t$ 是整函数，故 $hF/z$ 在左半圆盘 $\{|z|\le R,\ \operatorname{Re}z\le0\}$ 内全纯（$z=0$ 在该半圆盘之外：它在边界的虚轴端点上，但柯西变形所围的区域不包含它）。由 Cauchy 定理把 $C_{-}$ 变形为左半圆 $L=\{|z|=R,\ \operatorname{Re}z\le0\}$。在 $L$ 上 $x=\operatorname{Re}z<0$，

> 续见 notes/lem.newman-tauberian.4.md
