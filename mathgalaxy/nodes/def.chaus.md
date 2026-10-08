# 紧 Hausdorff 空间范畴　`def.chaus`
紧 Hausdorff 空间范畴 $\mathbf{CHaus}$
layer 15 · 定义 · 紧 Haus 与 Stone · 拓扑学

**紧 Hausdorff 空间**是既紧又 Hausdorff 的拓扑空间。以它们为对象、连续映射为态射，得到范畴 $\mathbf{CHaus}$。含入函子记 $\mathbf{CHaus} \hookrightarrow \mathbf{Top}$。

## 为什么成立（入边，证明在 proofs/）
- `def.compact` 紧：用到了定义 紧　proofs/def-dep.compact-chaus.md
- `def.hausdorff` Hausdorff 空间：用到了定义 Hausdorff 空间　proofs/def-dep.hausdorff-chaus.md
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-chaus.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.chaus-reflective` 紧 Haus 是反射子范畴
- ⇒ `prop.component-clopen` 连通分量是闭开邻域之交
- ⇒ `thm.gleason` Gleason 定理
- 被 `prop.chaus-quotient-of-free` 紧 Haus 是自由的商 用
- 被 `prop.component-clopen` 连通分量是闭开邻域之交 用
- 被 `def.free-compact-hausdorff` 自由紧 Hausdorff 空间 用

> 说明见 `notes/def.chaus.md`

- …另有出边，续页见 `nodes/def.chaus.2.md`
