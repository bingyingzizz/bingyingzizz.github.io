# 笛卡尔积存在　`thm.product`
笛卡尔积 $A \times B$ 存在
layer 5 · 定理 · 集合的构造 · 集合论

任给两个集合，全体有序对构成一个集合：

$$\forall A \forall B \exists C \forall z [ z \in C \leftrightarrow  \exists a \in A, \exists b \in B, z = (a, b) ]$$

记作 $A \times B = \{ (a, b) : a \in A, b \in B \}$。

## 为什么成立（入边，证明在 proofs/）
- `ax.power` 幂集公理 + `ax.pair` 配对公理 + `ax.union` 并集公理 + `ax.sep` 分离公理模式：幂集 + 配对 + 并集 + 分离公理模式 $\implies A \times B$ 存在　proofs/imp.product.md
- `def.pair` 有序对：用到了定义 有序对　proofs/def-link.product-pair.md
- `thm.omega` 自然数集存在：「幂集造容器 + 分离筛内容」——同一个证明模板　proofs/ana.sep-container.md

## 它能推出什么 / 谁在用它
- ⇒ `def.section` 截口

refs: Kunen, Set Theory, I.5

- …另有出边，续页见 `nodes/thm.product.2.md`

## 说明
它是「关系」「函数」得以定义为集合的前提：没有 $A \times B$，就没有 $R \subseteq A \times B$ 这个说法。
