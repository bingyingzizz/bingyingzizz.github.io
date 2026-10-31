# Gauss–Bonnet 定理　`thm.gauss-bonnet`　·　说明
根 `../`

**局部版是核心**（Gauss–Bonnet）：对由一条分段光滑简单闭曲线围成的区域 $D$，

$$\int_{D}K\,\mathrm{d}A+\int_{\partial D}k_{g}\,\mathrm{d}s = 2\pi .$$

整体版就是把它沿三角剖分求和，角落项在求和时自动整理成 $2\pi\chi$。详细的提纲在边上。

**测地三角形的特例**：若 $\partial T$ 的三条边都是测地线（$k_{g}\equiv0$），则 $\alpha_{1}+\alpha_{2}+\alpha_{3}-\pi = \int_{T}K\,\mathrm{d}A$ —— 内角和超出 $\pi$ 的部分，正好是高斯曲率的总量。球面上的八分之一球面三角形：三个内角都是直角，$\int_{T}K\,\mathrm{d}A = \frac{\pi}{2}$，与面积 $\frac{4\pi}{8}$ 相符。平面上所有三角形内角和都是 $\pi$，正因为 $K\equiv0$。

⭐ **这条定理的位置**：它把「度量」与「拓扑」缝在一起 —— $K$ 是纯内蕴的度量量，$\chi$ 是纯组合量，而它们的积分被钉死。曲面分类的度量侧（$K$ 的总量）与拓扑侧（亏格）从此等价。

> 续见 notes/thm.gauss-bonnet.2.md
