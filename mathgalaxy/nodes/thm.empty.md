# 空集存在　`thm.empty`
空集存在且唯一
layer 5 · 定理 · 集合的构造 · 集合论

存在一个不含任何元素的集合：

$$\exists B \forall x ( x \notin B )$$

由外延公理，这样的 $B$ 唯一，记作 $\emptyset$。

## 为什么成立（入边，证明在 proofs/）
- `ax.sep` 分离公理模式：分离公理模式 $\implies$ 空集存在　proofs/imp.sep-to-empty.md
- `def.empty` 空集 ∅：用到了定义 空集 ∅　proofs/dep.ext-empty.md
- `ax.ext` 外延公理：用到了定义 外延公理　proofs/def-link.ext-empty.md

refs: Kunen, Set Theory, I.4

> 说明见 `notes/thm.empty.md`
