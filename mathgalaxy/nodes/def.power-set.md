# 幂集 𝒫(X)　`def.power-set`
幂集（Power Set）
layer 3 · 定义 · 集合的构造 · 集合论
[在星图里打开](../#n=def.power-set)　·　[节点索引](../index.md)

设 $X$ 是集合。$X$ 的**幂集**是「$X$ 的全部子集」装成的集合：

$$\mathcal{P}(X) := \{ A : A \subseteq X \}$$

于是 $A \in \mathcal{P}(X) \iff A \subseteq X$，且 $\mathcal{P}(X)$ 自己的元素都是集合。

由**幂集公理**，$\mathcal{P}(X)$ 确实是集合；由外延公理它唯一。

有限情形的元素个数：$|X| = n \implies |\mathcal{P}(X)| = 2^{n}$（每个元素「取或不取」）。

## 为什么成立（入边，证明在 proofs/）
- [`def.subset`](../nodes/def.subset.md) 子集：用到了定义 子集　[proofs/dep.subset-powerset.md](../proofs/dep.subset-powerset.md)

- …另有入边，续页见 [nodes/def.power-set.2.md](./def.power-set.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.power-set.3.md](./def.power-set.3.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.power-set.md`

引用：`def.power-set`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
