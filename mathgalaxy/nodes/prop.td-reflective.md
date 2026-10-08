# 全不连通空间是反射子范畴　`prop.td-reflective`
全不连通空间是 $\mathbf{Top}$ 的反射子范畴
layer 17 · 命题 · 紧 Haus 与 Stone · 拓扑学

全不连通空间构成的范畴是 $\mathbf{Top}$ 的**反射子范畴**，反射是
> 陈述续见 `nodes/prop.td-reflective.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.stone-space` 全不连通与 Stone 空间：用到了定义 全不连通与 Stone 空间　proofs/def-dep.stone-td-reflective.md
- `def.connected` 连通与连通分量：用到了定义 连通与连通分量　proofs/def-dep.connected-td-reflective.md

## 说明
推论：**全不连通空间的任意极限仍是全不连通的** —— 因为 $\pi_{0}$ 作为反射（一个左伴随）保余极限，而含入函子保极限。这条与「$\mathbf{CHaus}$ 对极限封闭」叠起来，就是 Stone 空间与 Stonean 空间各自对极限封闭。
