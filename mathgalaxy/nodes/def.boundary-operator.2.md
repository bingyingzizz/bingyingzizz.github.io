# 边界算子　`def.boundary-operator`　·　续页（第 2 页）
[在星图里打开](../#n=def.boundary-operator)　·　第 1 页 [nodes/def.boundary-operator.md](./def.boundary-operator.md)

## 陈述（续）
**插入映射**：对 $1\le i\le k$、$\alpha\in\{0,1\}$ 定义
$$I^{k}_{(i,\alpha)} : I^{k-1}\longrightarrow I^{k},\qquad (x^{1},\ldots,x^{k-1})\longmapsto(x^{1},\ldots,x^{i-1},\alpha,x^{i},\ldots,x^{k-1}).$$
对 $k$-方块 $c$，记 $c_{(i,\alpha)} := c\circ I^{k}_{(i,\alpha)}$，它是 $(k-1)$-方块，叫 $c$ 的**第 $(i,\alpha)$ 面**。
**边界算子** $\partial$ 先把方块送到「面的带符号和」，再线性延拓到链：
$$\partial c := \sum_{i=1}^{k}\sum_{\alpha=0}^{1}(-1)^{i+\alpha}\,c_{(i,\alpha)},\qquad \partial\Bigl(\sum_{l}n_{l}c_{l}\Bigr) := \sum_{l}n_{l}\,\partial c_{l}.$$
约定 $k = 0$ 时 $\partial c := 0$（点是零维的，没有面）。于是 $\partial : C_{k}(M)\to C_{k-1}(M)$ 是群同态。

> 续见 [nodes/def.boundary-operator.3.md](./def.boundary-operator.3.md)
