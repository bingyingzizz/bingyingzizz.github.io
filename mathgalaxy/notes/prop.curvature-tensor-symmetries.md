# 曲率张量的对称性　`prop.curvature-tensor-symmetries`　·　说明
根 `../`

**前两条的来源不同**：对 $X,Y$ 的反称是定义里 $[\nabla_{X},\nabla_{Y}]$ 的直接结果；对 $Z,W$ 的反称要用**保度量**（$\nabla g = 0$）—— 先证 $\langle R(X,Y)Z,Z\rangle = 0$ 再极化。

**第四条来自无挠**：$R(X,Y)Z+R(Y,Z)X+R(Z,X)Y = 0$。等价的漂亮证法：无挠时 $\nabla^{2}Z(X,Y) := \nabla_{X}\nabla_{Y}Z-\nabla_{\nabla_{X}Y}Z$ 关于 $X,Y$ 对称，而 $R(X,Y)Z = \nabla^{2}Z(X,Y)-\nabla^{2}Z(Y,X)$；对三个变元循环求和时两个对称项互换位置、逐项抵消。

**第三条是纯代数记账**：把第一比安基对四个变元的几种循环取法写出、用前两条把符号搬正再相加，剩下的正是 $R_{ijk\ell}-R_{k\ell ij}$。没有几何内容，本节点不逐项抄。

**为什么要数分量**：$n = 2$ 时只剩 $R_{1212}$ 一个函数，所以二维曲率**就是一个数**（高斯曲率）；$n = 3$ 时 $6$ 个分量全由 Ricci 决定（外尔张量为零）；$n = 4$ 时 $20 = 10+10$，后一半是外尔张量 —— 引力波住在那里。

> 续见 notes/prop.curvature-tensor-symmetries.2.md
