# 秩-零化度定理　`thm.rank-nullity`　·　说明
根 `../`

⭐ 这是有限维线性代数的**中心定理**：一个线性映射的输入维数，被「留下的」与「丢掉的」两块恰好分完，不多不少。

⭐ 推论（挑三条最常用的）：
- $T$ 单 $\iff \operatorname{rank} T = \dim V$；$T$ 满 $\iff \operatorname{rank} T = \dim W$；
- $\dim V = \dim W < \infty$ 时：$T$ 单 $\iff$ $T$ 满 $\iff$ $T$ 可逆（**有限维特有**，无限维不成立：移位算子 $T(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)$ 单不满）；
- $n$ 元齐次线性方程组的解空间维数 $= n - \operatorname{rank} A$。

⚠ 只有 $\dim V < \infty$ 时才是这个干净的等式；无限维时右边是基数的加法，要写成 $\dim V = \dim \ker T + \dim \operatorname{im} T$（对基数成立）。
