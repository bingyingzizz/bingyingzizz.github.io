# 连通分量是闭开邻域之交　`prop.component-clopen`
紧 Hausdorff 空间中连通分量 = 闭开邻域之交
layer 15 · 命题 · 紧 Haus 与 Stone · 范畴论+拓扑学

设 $S$ 是紧 Hausdorff 空间，$x \in S$。则 $x$ 的连通分量等于一切包含 $x$ 的闭开集之交：

$$C(x) \;=\; \bigcap \{\, K \subseteq S : K \text{ 闭开},\ x \in K \,\}$$

## 为什么成立（入边，证明在 proofs/）
- `def.connected` 连通与连通分量 + `def.clopen` 闭开集 + `def.chaus` 紧 Hausdorff 空间范畴：紧 Hausdorff 中连通分量是闭开邻域之交　proofs/imp.component-clopen.md
- `def.connected` 连通与连通分量：用到了定义 连通与连通分量　proofs/def-link.connected-component-clopen.md
- `def.clopen` 闭开集：用到了定义 闭开集　proofs/def-link.clopen-component.md
- `def.connected` 连通与连通分量：用到了定义 连通与连通分量　proofs/def-dep.connected-component-clopen.md
- `def.clopen` 闭开集：用到了定义 闭开集　proofs/def-dep.clopen-component.md

> 说明见 `notes/prop.component-clopen.md`

- …另有入边，续页见 `nodes/prop.component-clopen.2.md`
