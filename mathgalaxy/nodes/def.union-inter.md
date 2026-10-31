# 并集与交集　`def.union-inter`
并集 / 交集
layer 2 · 定义 · 集合的构造 · 集合论
[在星图里打开](../#n=def.union-inter)　·　[节点索引](../index.md)

设 $\mathcal{A}$ 是一族集合（$A$ 的**并**与**交**是它只有两个成员时的特例）：

$$\bigcup \mathcal{A} := \{ x : \exists A \in \mathcal{A},\ x \in A \}$$
$$\bigcap \mathcal{A} := \{ x : \forall A \in \mathcal{A},\ x \in A \}$$

两个集合的情形记作 $A \cup B$、$A \cap B$；可数族的并、交常记作 $\bigcup_{n} A_n$、$\bigcap_{n} A_n$。

显然 $A \cap B \subseteq A \subseteq A \cup B$。

## 为什么成立（入边，证明在 proofs/）
- [`def.subset`](../nodes/def.subset.md) 子集：用到了定义 子集　[proofs/dep.subset-union-inter.md](../proofs/dep.subset-union-inter.md)

- …另有入边，续页见 [nodes/def.union-inter.2.md](./def.union-inter.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.union-inter.3.md](./def.union-inter.3.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.union-inter.md`

引用：`def.union-inter`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
