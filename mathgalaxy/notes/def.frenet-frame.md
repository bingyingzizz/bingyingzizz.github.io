# 曲率与挠率　`def.frenet-frame`　·　说明
根 `../`

**量纲与例子**：$\kappa$ 的量纲是长度的倒数。直线 $\kappa = 0$；半径 $R$ 的圆 $\kappa = 1/R$、$\tau = 0$；圆柱螺旋线的 $\kappa$ 与 $\tau$ 都是非零常数。

**$\kappa = 0$ 处定义不出来**：$N$ 要靠 $T'$ 定向，直线段上 $T$ 是常向量。所以 Frenet 标架只在 $\kappa>0$ 的区间上存在，跨过拐点时会跳 —— 这也解释了为什么曲线基本定理要假设 $\kappa>0$。

**任意参数下的公式**（链式法则直接算）：$\kappa = \lVert\gamma'\times\gamma''\rVert/\lVert\gamma'\rVert^{3}$，$\tau = \langle\gamma'\times\gamma'',\gamma'''\rangle/\lVert\gamma'\times\gamma''\rVert^{2}$（后者在 $\kappa>0$ 处）。它们说明 $\kappa,\tau$ 只依赖像集与定向。

**符号约定**：本图取 $\tau = -\langle B',N\rangle$，于是 Frenet 公式是 $N' = -\kappa T+\tau B$、$B' = -\tau N$（`thm.frenet-serret`）。若某本书取 $\tau = \langle B',N\rangle$，它的挠率与本图差一个符号 —— 抄公式前先对齐。

> 续见 notes/def.frenet-frame.2.md
