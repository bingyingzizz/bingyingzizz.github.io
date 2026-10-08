# 关系　`def.rel`
关系（Relation）
layer 4 · 定义 · 关系与函数 · 集合论

设 $A$、$B$ 是集合。

**关系** $R$ 由有序对组成；$R \subseteq A \times B$ 表示 $R$ 是 $A$ 到 $B$ 的关系。

- **定义域** $\operatorname{dom} R = \{ a : \exists b (a, b) \in R \}$；
- **值域** $\operatorname{ran} R = \{ b : \exists a (a, b) \in R \}$；
- **逆** $R^{-1} = \{ (b, a) : (a, b) \in R \}$。

## 为什么成立（入边，证明在 proofs/）
- `def.pair` 有序对：用到了定义 有序对　proofs/def-link.rel-pair.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-rel.md

## 它能推出什么 / 谁在用它
- 被 `def.quotient-set` 商集与等价类 用
- 被 `def.function` 函数 用
- 被 `def.poset` 偏序集 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.rel.md`
