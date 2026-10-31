# 分式线性变换的分类　`prop.mobius-classification`　·　说明
根 `../`

**怎么看出来的**：先共轭到不动点上。若有两个不动点，用分式线性变换把它们送到 $0, \infty$，则 $T$ 变成 $w \mapsto \lambda w$；$|\lambda| = 1$ 是椭圆、$\lambda > 0$ 且 $\ne 1$ 是双曲、$\lambda < 0$ 是「双曲 + 半转」。重根时共轭成 $w \mapsto w + 1$（抛物）。

⭐ 与矩阵的联系：$T$ 对应矩阵 $\begin{pmatrix} a & b \\ c & d\end{pmatrix}$，共轭类由特征值比 $\lambda_{1}/\lambda_{2}$ 决定，而 $\tau^{2}/\Delta = (\lambda_{1} + \lambda_{2})^{2}/(\lambda_{1}\lambda_{2})$ 正是这个比的函数（$\lambda + 1/\lambda + 2$）。

⚠️ 分类在**实**分式线性变换（保持上半平面）上才有几何意义（双曲/椭圆/抛物 = 双曲平面上的等距分类）；复系数的情形只是代数分类。
