# 平行四边形法则　`thm.parallelogram-inner-product`　·　说明
根 `../`

「$\Longleftarrow$」分三段（顺序不能换）：

1. **用极化恒等式定义内积**。实情形取 $\langle x,y\rangle := \frac14\bigl(\|x+y\|^2 - \|x-y\|^2\bigr)$；复情形取 $\langle x,y\rangle := \frac14\sum_{k=0}^{3} i^{k}\|x + i^{k} y\|^2$。这一段的要点是：平行四边形法则恰好保证「展开后的交叉项能两两抵消」，所以范数真的能反推出双线性型。

2. **加法性**。把 $\langle x, y+z\rangle$ 与 $\langle x,y\rangle + \langle x,z\rangle$ 相减，展开成 8 个范数平方项；对 $(y, z)$ 与 $(x,\, y+z)$ 各用一次平行四边形法则，所有项成对抵消，得 $0$。这一步**只用平行四边形法则**，不假设任何线性。

> 续见 notes/thm.parallelogram-inner-product.2.md
