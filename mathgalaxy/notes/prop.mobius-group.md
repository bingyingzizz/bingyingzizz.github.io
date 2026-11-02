# 分式线性变换成群　`prop.mobius-group`　·　说明
根 `../`

**群结构**：矩阵乘法对应变换的复合；$\begin{pmatrix} a & b\\ c & d\end{pmatrix}$ 与 $\lambda\begin{pmatrix} a & b\\ c & d\end{pmatrix}$ 给出同一个变换，所以要模掉纯量。逆变换的矩阵就是逆矩阵（差一个纯量）。

**为什么自同构只有这些**：$\widehat{\mathbb{C}}$ 上的全纯自同构若把 $\infty$ 送到 $\infty$，就是整函数且是双射 —— 由 Liouville 型论证只能是 $az + b$；把 $\infty$ 送到别处的，先复合一个 $z \mapsto 1/(z - z_{0})$ 归结到前一种。∎

⭐ **三种子群对应三种几何**：保持上半平面的实系数分式线性变换 $\cong \mathrm{PGL}(2, \mathbb{R}) \cong \mathrm{PSL}(2, \mathbb{R})$ 是双曲平面的等距群；保持单位圆盘的与之共轭。Schwarz–Pick（`thm.schwarz-pick`）说的就是「全纯自映射 = 不放大双曲距离」，等号成立时是这个群里的元素。
