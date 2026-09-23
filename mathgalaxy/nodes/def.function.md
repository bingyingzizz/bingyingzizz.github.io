# 函数　`def.function`
函数（Function）
layer 5 · 定义 · 关系与函数 · 集合论

设 $f$ 是 $A$ 到 $B$ 的关系。$f$ 是一个**函数**（记 $f : A \to B$），当且仅当对每个输入恰有一个输出：

$$\forall a \in A, \exists! b \in B, (a, b) \in f$$

唯一性使 $f(a) = b$ 这个记号不会歧义；此时 $\operatorname{dom} f = A$，$f$ 的**像**是 $f(A) = \{ f(a) : a \in A \}$。

单射 / 满射 / 双射见另一条节点。

## 为什么成立（入边，证明在 proofs/）
- `def.rel` 关系：用到了定义 关系　proofs/def-dep.rel-function.md

## 它能推出什么 / 谁在用它
- 被 `def.section` 截口 用
- 被 `def.bijection` 单射 / 满射 / 双射 用
- 被 `def.cauchy-null` Cauchy 列与零列 用
- 被 `def.field` 域 用
- 被 `def.choicefn` 选择函数 用
- 被 `def.metric-space` 距离空间 用
- 被 `def.product-sigma` 积 σ-代数 用
- 被 `def.measurable-function` 可测函数 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.function.md`
