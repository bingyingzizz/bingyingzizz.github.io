# 并集与交集　`def.union-inter`
并集 / 交集（Union & Intersection）
layer 2 · 定义 · 集合的构造 · 集合论

设 $\mathcal{A}$ 是一族集合（$A$ 的**并**与**交**是它只有两个成员时的特例）：

$$\bigcup \mathcal{A} := \{ x : \exists A \in \mathcal{A},\ x \in A \}$$
$$\bigcap \mathcal{A} := \{ x : \forall A \in \mathcal{A},\ x \in A \}$$

两个集合的情形记作 $A \cup B$、$A \cap B$；可数族的并、交常记作 $\bigcup_{n} A_n$、$\bigcap_{n} A_n$。
> 陈述续见 `nodes/def.union-inter.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.subset` 子集：用到了定义 子集　proofs/dep.subset-union-inter.md
- `def.empty` 空集 ∅：用到了定义 空集 ∅　proofs/dep.empty-union.md

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.union-inter.md`
