# 筛　`def.sieve`
筛（Sieve）
layer 10 · 定义 · 层与拓扑 · 范畴论

设 $X \in \mathcal{C}$。$X$ 上的**筛**是预层 $h_{X} = \operatorname{Hom}_{\mathcal{C}}(-, X)$ 的一个子函子 $R \subseteq h_{X}$：对每个 $X'$ 给一个子集 $R(X') \subseteq \operatorname{Hom}_{\mathcal{C}}(X', X)$，使得只要 $f \in R(X')$，任何 $g : X'' \to X'$ 都满足 $f \circ g \in R
> 陈述续见 `nodes/def.sieve.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.presheaf-sieve.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-sieve.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.sheaf-descent` 层的下降条件
- ⇒ `prop.covering-sieve-epi` 覆盖筛即余积满射
- 被 `def.grothendieck-topology` Grothendieck 拓扑 用
- 被 `def.canonical-topology` 标准拓扑 用

- …另有出边，续页见 `nodes/def.sieve.3.md`

## 说明
直觉：**$X$ 上一族「允许的映射」，而且凡是能再往下接的都算进来**。所以筛不是随便一族箭头，它「对预复合封闭」—— 这正是一个子函子该有的样子。
