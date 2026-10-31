# 第一同构定理（向量空间版）　`thm.first-iso-vs`
定理：$V / \ker T \cong \operatorname{im} T$
layer 11 · 定理 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=thm.first-iso-vs)　·　[节点索引](../index.md)

设 $T : V \to W$ 是线性映射。则

$$\overline{T} : V / \ker T \longrightarrow \operatorname{im} T, \qquad v + \ker T \longmapsto T(v)$$

是良定义的**线性同构**。特别地

$$V / \ker T \cong \operatorname{im} T$$

## 为什么成立（入边，证明在 proofs/）
- [`def.kernel-image-vs`](../nodes/def.kernel-image-vs.md) 核与像 + [`def.quotient-vs`](../nodes/def.quotient-vs.md) 商空间：核 / 像 / 商空间 $\implies$ 第一同构定理　[proofs/imp.first-iso-vs.md](../proofs/imp.first-iso-vs.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.first-iso-vs.2.md](./thm.first-iso-vs.2.md)

refs: Lang, Linear Algebra

> 说明见 `notes/thm.first-iso-vs.md`

引用：`thm.first-iso-vs`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
