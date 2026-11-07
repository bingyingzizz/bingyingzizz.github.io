# Mittag-Leffler 定理　`thm.mittag-leffler`　·　说明
根 `../`

⚠ **两处不能那样写**：① 取 $a_k$ 处的 **Taylor 多项式**没有意义 —— $a_k$ 本身是极点，$P_k$ 在那里不全纯；② 也不能用多项式在围住 $a_k$ 的圆周上逼近 $1/(z-a_k)$：若多项式 $Q$ 在 $|z-a_k|=1$ 上使 $\sup|Q-1/(z-a_k)|<1$，则 $(z-a_k)Q(z)$ 一致逼近 $1$，但左边是多项式且在 $a_k$ 为零，于是 $\frac{1}{2\pi i}\oint (z-a_k)Q(z)/(z-a_k)\,\mathrm{d}z=0$ 而 $\frac{1}{2\pi i}\oint \mathrm{d}z/(z-a_k)=1$，矛盾。

⭐ **收敛的障碍在哪**：极点无穷多个时 $\sum_k P_k$ 一般处处发散；修正的办法是逐项减去在 $a_k$ 附近全纯的 $T_k$，把它在越来越大的紧集上压小。注意**不能按 $|a_k|$ 排序**：$\Omega=\{0<|z|<1\}$、$a_k=1/(k+1)$ 在 $\Omega$ 内无聚点，但没有模最小的点。

⭐ 例子（经典的两个）：

$$\pi^2 \csc^2(\pi z) = \sum_{n \in \mathbb{Z}} \frac{1}{(z - n)^2}, \qquad \pi \cot(\pi z) = \frac{1}{z} + \sum_{n \ne 0} \left( \frac{1}{z - n} + \frac{1}{n} \right).$$

> 续见 notes/thm.mittag-leffler.7.md
