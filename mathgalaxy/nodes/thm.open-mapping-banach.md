# 开映射定理（Banach 版）　`thm.open-mapping-banach`
开映射定理：满射有界算子把开集映成开集
layer 24 · 定理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=thm.open-mapping-banach)　·　[节点索引](../index.md)

设 $E, F$ 都是 Banach 空间，$u \in B(E, F)$ 是**满射**。则 $u$ 是**开映射**：开集的像是开集。等价地，存在 $r > 0$ 使

$$u(B_E) \supseteq r\, B_F .$$

## 为什么成立（入边，证明在 proofs/）
- [`lem.countable-closed-cover`](../nodes/lem.countable-closed-cover.md) 闭覆盖的内点 + [`def.banach-space`](../nodes/def.banach-space.md) Banach 空间：闭覆盖有内点 + 完备 $\implies$ 开映射定理　[proofs/imp.fa-openmap.md](../proofs/imp.fa-openmap.md)

- …另有入边，续页见 [nodes/thm.open-mapping-banach.2.md](./thm.open-mapping-banach.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.open-mapping-banach.3.md](./thm.open-mapping-banach.3.md)

refs: Rudin, Functional Analysis, 2.11

> 说明见 `notes/thm.open-mapping-banach.md`

引用：`thm.open-mapping-banach`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
