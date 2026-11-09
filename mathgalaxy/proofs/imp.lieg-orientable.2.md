# 左不变顶次形式处处非零 $\implies$ Lie 群可定向
`imp.lieg-orientable` · 推出 · strong 边 · 根 `../`

`def.lie-group` Lie 群 + `def.left-invariant-form` 左不变形式 + `prop.volume-form-orientation` 定向与体积形式 → `prop.lie-group-orientable` Lie 群可定向

**给出定向**：处处非零的 $n$-形式正是一个定向（`prop.volume-form-orientation`）。于是 $G$ 可定向，且该定向在左平移下不变。∎

> 三段分别是「取非零顶次形式 $\to$ 证处处非零 $\to$ 用可定向判据」，全程不用紧性、连通性或任何度量结构 —— 这就是「Lie 群可定向是免费的」的确切含义。131 的 `def.volume-form` 是黎曼体积（要度量），与这里的左不变形式是两条不同的路子。
