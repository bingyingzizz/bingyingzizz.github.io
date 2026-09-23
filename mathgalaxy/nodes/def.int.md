# 整数 ℤ　`def.int`
整数 $\mathbb{Z}$（由 $\mathbb{N} \times \mathbb{N}$ 构造）
layer 7 · 定义 · 数系的构造 · 集合论

在 $\mathbb{N} \times \mathbb{N}$ 上定义

$$(a, b) \sim (c, d) :\iff a + d = b + c$$

（直观：$(a, b)$ 代表 $a - b$；这条等价关系说的正是「差相同」。）它确实是一个等价关系。令

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim$$

元素记作 $[a, b]$（即 $a - b$）。$\mathbb{Z}$ 上的**运算与序**（都要先验证与代表元无关）：
> 陈述续见 `nodes/def.int.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.omega` 自然数集存在：用到了定义 自然数集存在　proofs/dep.omega-int.md
- `def.quotient-set` 商集与等价类：用到了定义 商集与等价类　proofs/dep.quotient-int.md
- `thm.induction` 归纳原理与递推定义：用到了定义 归纳原理与递推定义　proofs/dep.induction-int.md

## 它能推出什么 / 谁在用它
- 被 `def.rat` 有理数 ℚ 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.int.md`
