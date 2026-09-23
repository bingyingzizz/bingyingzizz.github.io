# 阿基米德性质　`lem.archimedean`
阿基米德性质与 $\mathbb{Q}$ 的稠密性
layer 13 · 引理 · 数系的构造 · 集合论+分析学

设 $K$ 是一个**完备有序域**（比如 $\mathbb{R}$）。则：

**(i) 阿基米德性质**：自然数在 $K$ 中没有上界 ——

$$\forall x \in K,\ \exists n \in \mathbb{N} : n > x$$

**(ii) $\mathbb{Q}$ 在 $K$ 中稠密**：任意两个元素之间都夹着一个有理数 ——
> 陈述续见 `nodes/lem.archimedean.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.real-ordered-field` ℝ 是完备有序域：完备性 $\implies$ 阿基米德性质 + $\mathbb{Q}$ 稠密　proofs/imp.archimedean.md
- `def.ordered-field` 有序域：用到了定义 有序域　proofs/dep.ordered-archimedean.md
- `def.rat` 有理数 ℚ：用到了定义 有理数 ℚ　proofs/dep.rat-archimedean.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.real-unique` 完备有序域的唯一性

refs: Tao, Analysis I, Ch. 5（实数的构造）；Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/lem.archimedean.md`
