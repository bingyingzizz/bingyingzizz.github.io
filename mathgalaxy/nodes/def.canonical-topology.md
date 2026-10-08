# 标准拓扑　`def.canonical-topology`
标准拓扑与次标准拓扑（Canonical Topology）
layer 15 · 定义 · 层与拓扑 · 范畴论

在任何范畴 $\mathcal{C}$ 上，存在**最细**的拓扑使得所有可表示预层都是层：规定 $X$ 上的筛 $R$ 是覆盖筛，当且仅当

$$\forall f : Y \to X,\ \forall Z \in \mathcal{C}, \qquad \operatorname{Hom}_{\mathcal{C}}(Y, Z) \;\cong\; \operatorname{Hom}\bigl(f^{-1}(R),\ h_{Z}\bigr)$$

这个拓扑叫 $\mathcal{C}$ 上的**标准拓扑**。比标准拓扑**粗**的拓扑叫**次标准的**（subcanonical）。

## 为什么成立（入边，证明在 proofs/）
- `def.grothendieck-topology` Grothendieck 拓扑：用到了定义 Grothendieck 拓扑　proofs/def-dep.topology-canonical.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.presheaf-canonical.md
- `def.sieve` 筛：用到了定义 筛　proofs/def-dep.sieve-canonical.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.giraud` Giraud 定理

> 说明见 `notes/def.canonical-topology.md`

- …另有出边，续页见 `nodes/def.canonical-topology.2.md`
