# Ricci 曲率　`def.ricci-curvature`　·　说明
根 `../`

**它是迹，所以比 $R$ 粗**：$R$ 有 $n^{2}(n^{2}-1)/12$ 个分量，$R_{ij}$ 有 $n(n+1)/2$ 个，$S$ 只有 $1$ 个。二维：$1 = 1 = 1$（三者等价）；三维：$6 = 6 = 1$（Ricci 决定一切）；四维：$20 > 10 > 1$（Ricci 丢掉外尔部分）。

**符号约定与检验**：本图取 $\operatorname{Ric}(X,Y) = \operatorname{tr}\bigl(Z\mapsto R(Z,X)Y\bigr)$，于是单位球面 $S^{n}$ 给 $\operatorname{Ric} = (n-1)g$、$S = n(n-1)$，二维时 $\operatorname{Ric} = Kg$（球面 $K = 1$，与 `def.gauss-curvature` 一致）。**判断约定对不对就看这一条**；把缩并的指标换一个位置会整体反号。

**为什么对称**：$R_{ij}$ 的对称性来自曲率张量的两对指标可交换（`prop.curvature-tensor-symmetries` 第 3 条）。所以 Ricci 是切丛上的对称双线性型，可以拿来做二次型 $\operatorname{Ric}(v,v)$。

> 续见 notes/def.ricci-curvature.2.md
