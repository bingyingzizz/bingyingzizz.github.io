# 有理数 ℚ　`def.rat`
有理数 $\mathbb{Q}$（由 $\mathbb{Z} \times (\mathbb{Z}\setminus\{0\})$ 构造）
layer 8 · 定义 · 数系的构造 · 集合论

在 $\mathbb{Z} \times (\mathbb{Z} \setminus \{0\})$ 上定义

$$(a, b) \sim (c, d) :\iff ad = bc$$

（直观：$(a, b)$ 代表 $a/b$；这条等价关系说的正是「分数值相同」。）令

$$\mathbb{Q} := (\mathbb{Z} \times (\mathbb{Z} \setminus \{0\})) / \sim$$

元素记作 $a/b$。运算与序：
> 陈述续见 `nodes/def.rat.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.int` 整数 ℤ：用到了定义 整数 ℤ　proofs/dep.int-rat.md
- `def.quotient-set` 商集与等价类：用到了定义 商集与等价类　proofs/dep.quotient-rat.md
- `def.ordered-field` 有序域：用到了定义 有序域　proofs/dep.ordered-rat.md

## 它能推出什么 / 谁在用它
- 被 `def.cauchy-null` Cauchy 列与零列 用
- 被 `lem.archimedean` 阿基米德性质 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.rat.md`
