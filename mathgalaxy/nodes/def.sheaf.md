# 层　`def.sheaf`
层与分离预层（Sheaf）
layer 15 · 定义 · 层与拓扑 · 范畴论

设 $\mathcal{C}$ 是 site，$F : \mathcal{C}^{\mathrm{op}} \to \mathbf{Set}$ 是预层。

- $F$ 叫**分离的**，如果对每个 $X$ 与每个 $R \in J(X)$，限制映射

$$\operatorname{Hom}(h_{X}, F) \longrightarrow \operatorname{Hom}(R, F)$$

是**单射**；
- $F$ 叫**层**，如果这个映射是**双射**。

## 为什么成立（入边，证明在 proofs/）
- `def.grothendieck-topology` Grothendieck 拓扑：用到了定义 Grothendieck 拓扑　proofs/def-dep.topology-sheaf.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.presheaf-sheaf.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-sheaf.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.sheaf-descent` 层的下降条件
- ⇒ `prop.topos-sheaf-limits` 拓扑斯上的层即保极限的预层
- ⇒ `prop.cond-epi` 凝聚态集满态射的判据
- 被 `thm.sheaf-descent` 层的下降条件 用

> 说明见 `notes/def.sheaf.md`

- …另有出边，续页见 `nodes/def.sheaf.2.md`
