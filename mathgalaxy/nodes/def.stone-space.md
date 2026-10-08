# 全不连通与 Stone 空间　`def.stone-space`
Stone 空间与 Stonean 空间（Stone / Stonean Space）
layer 15 · 定义 · 紧 Haus 与 Stone · 范畴论+拓扑学

- $X$ **全不连通**（totally disconnected），如果其中每个连通分量都是单点；
- $X$ **极端不连通**（extremally disconnected），如果任一开集的**闭包仍是闭开集**；
- **Stone 空间** = 全不连通的紧 Hausdorff 空间；
- **Stonean 空间** = 极端不连通的紧 Hausdorff 空间。

## 为什么成立（入边，证明在 proofs/）
- `def.connected` 连通与连通分量：用到了定义 连通与连通分量　proofs/def-dep.connected-stone.md
- `def.clopen` 闭开集：用到了定义 闭开集　proofs/def-dep.clopen-stone.md
- `def.chaus` 紧 Hausdorff 空间范畴：用到了定义 紧 Hausdorff 空间范畴　proofs/def-dep.chaus-stone.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.stone-profinite` Stone ⟺ 投射有限
- ⇒ `thm.gleason` Gleason 定理
- 被 `thm.gleason` Gleason 定理 用

> 说明见 `notes/def.stone-space.md`

- …另有出边，续页见 `nodes/def.stone-space.2.md`
