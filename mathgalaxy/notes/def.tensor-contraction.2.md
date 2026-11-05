# 缩并　`def.tensor-contraction`　·　说明
根 `../`

**例子**：曲率张量是 $(1,3)$ 型的，缩并一次（上标与第二个下标）得 Ricci 张量（`def.ricci-curvature`）。⚠️ Ricci 是 $(0,2)$ 型、没有上标，**不能**直接再缩并一次 —— 要先用逆度量升一个指标：$S = g^{ij}\mathrm{Ric}_{ij}$（直接相加是错的：单位球面上 $1 + \sin^{2}\theta \ne 2$）。Einstein 张量Einstein 张量是 Ricci 张量与 $g$ 的组合 —— 所以「曲率的三个层次」就是「缩并 $0/1/2$ 次」。

**与坐标无关**：换卡时上标各乘一次 $\partial y/\partial x$、下标各乘一次 $\partial x/\partial y$；被缩的那一对恰好一个上标一个下标，两个 Jacobi 矩阵互逆，乘起来是 $\delta$。

这一步是「缩并是张量运算」的全部内容（对照 `def.tensor-field` 的 notes：变化律只含一阶导）。

⚠️ 记号冲突：`def.trace` 是「矩阵取迹」，这里的缩并是它在张量场上的推广；而 $\mathrm{C}^{i}_{\ j}$ 里的 $\mathrm{C}$ 不是「连续函数空间」的 $C$。三处同字母，取用时看上下文。

> 续见 notes/def.tensor-contraction.3.md
