# 群同态、核与像　`def.group-hom`
群同态（Group Homomorphism）
layer 8 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.group-hom)　·　[节点索引](../index.md)

设 $(G, \cdot)$、$(G', \ast)$ 是群。映射 $\varphi : G \to G'$ 叫**群同态**，如果

$$\varphi(a b) = \varphi(a) \ast \varphi(b) \qquad (a, b \in G).$$

它的**核**与**像**分别是

$$\ker\varphi := \{\, g \in G : \varphi(g) = e' \,\} \;\subseteq\; G, \qquad \operatorname{im}\varphi := \varphi(G) \;\subseteq\; G'.$$

## 为什么成立（入边，证明在 proofs/）
- [`def.subgroup`](../nodes/def.subgroup.md) 子群：用到了定义 子群　[proofs/def-dep.grouphom-subgroup.md](../proofs/def-dep.grouphom-subgroup.md)

- …另有入边，续页见 [nodes/def.group-hom.2.md](./def.group-hom.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.group-hom.3.md](./def.group-hom.3.md)

refs: Lang, Algebra

> 说明见 `notes/def.group-hom.md`

引用：`def.group-hom`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
