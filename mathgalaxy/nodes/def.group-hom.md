# 群同态、核与像　`def.group-hom`
群同态（Group Homomorphism）
layer 8 · 定义 · 代数结构 · 抽象代数

设 $(G, \cdot)$、$(G', \ast)$ 是群。映射 $\varphi : G \to G'$ 叫**群同态**，如果

$$\varphi(a b) = \varphi(a) \ast \varphi(b) \qquad (a, b \in G).$$

它的**核**与**像**分别是

$$\ker\varphi := \{\, g \in G : \varphi(g) = e' \,\} \;\subseteq\; G, \qquad \operatorname{im}\varphi := \varphi(G) \;\subseteq\; G'.$$

## 为什么成立（入边，证明在 proofs/）
- `def.subgroup` 子群：用到了定义 子群　proofs/def-dep.grouphom-subgroup.md
- `def.group` 群：用到了定义 群　proofs/def-dep.grouphom-group.md
- `def.normal-subgroup` 正规子群：用到了定义 正规子群　proofs/def-dep.grouphom-kernel.md

## 它能推出什么 / 谁在用它
- 被 `thm.first-iso` 第一同构定理（Noether） 用
- 被 `thm.first-iso` 第一同构定理（Noether） 用

> 说明见 `notes/def.group-hom.md`
