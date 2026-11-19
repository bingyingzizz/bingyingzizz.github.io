# imp.simplicial-to-chain
`imp.simplicial-to-chain` · 推出 · strong 边 · 根 `../`

`def.simplicial` 单纯对象 + `def.cochain-complex` 上链复形 + `def.additive-category` 加法范畴 → `prop.simplicial-to-chain` 单纯对象给出链复形

**证明。** 展开
$$d_{n-1}d_{n} = \sum_{j=0}^{n-1}\sum_{i=0}^{n} (-1)^{i+j} d^{n-1}_{j} d^{n}_{i}.$$
由单纯恒等式，$i \le j-1$ 时 $d^{n-1}_{j} d^{n}_{i} = d^{n-1}_{i} d^{n}_{j+1}$；因此每一对 $(i,j)$ 与 $i > j$ 的那一对 $(j, i+1)$ 给出**同一项**，而符号为 $(-1)^{i+j}$ 与 $(-1)^{j+i+1}$ —— 恰好相反，两两抵消 ✓。

于是 $d^{2} = 0$ ✓。

∎
