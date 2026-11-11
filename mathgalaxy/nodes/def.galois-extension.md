# 伽罗瓦扩张　`def.galois-extension`
伽罗瓦扩张（有限 + 正规 + 可分）
layer 15 · 定义 · Galois 理论 · 抽象代数
[在星图里打开](../#n=def.galois-extension)　·　[节点索引](../index.md)

有限扩张 $K/F$ 叫**伽罗瓦扩张**，如果它**同时**是正规的（`def.normal-extension`）与可分的（`def.separable-extension`）。

等价条件（任一）：

- $|\operatorname{Gal}(K/F)| = [K:F]$；
- $F = K^{\operatorname{Gal}(K/F)}$（被群固定的元素只有 $F$ 自己）；
- $K$ 是某个**可分**多项式在 $F$ 上的分裂域。

## 它能推出什么 / 谁在用它
- 被 [`thm.galois-correspondence`](../nodes/thm.galois-correspondence.md) 伽罗瓦基本定理 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.galois-extension.2.md](./def.galois-extension.2.md)

refs: Lang, Algebra, Ch. VI §1；Hungerford, Algebra, Ch. V §4

> 说明见 `notes/def.galois-extension.md`

引用：`def.galois-extension`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
