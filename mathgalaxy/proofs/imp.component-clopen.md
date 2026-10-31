# 紧 Hausdorff 中连通分量是闭开邻域之交
`imp.component-clopen` · 推出 · strong 边 · 根 `../`

`def.connected` 连通与连通分量 + `def.clopen` 闭开集 + `def.chaus` 紧 Hausdorff 空间范畴 → `prop.component-clopen` 连通分量是闭开邻域之交

记 $C := \bigcap \{K : K \text{ 闭开},\ x \in K\}$。

**$C(x) \subseteq C$。** 每个含 $x$ 的闭开集 $K$ 都是既不空又不全的开集，所以 $x$ 的连通分量只能整个落在 $K$ 里或整个落在 $K$ 外；既然 $x \in K$，就有 $C(x) \subseteq K$。对一切这样的 $K$ 取交即得。

> 续见 proofs/imp.component-clopen.2.md
