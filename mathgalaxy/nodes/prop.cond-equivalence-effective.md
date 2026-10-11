# Cond 的等价关系有效　`prop.cond-equivalence-effective`
$\mathrm{Cond}$ 中每个等价关系都是有效的
layer 17 · 命题 · 凝聚态集 · 凝聚态数学

在 $\mathrm{Cond}$ 中，每个等价关系 $R \rightrightarrows X$（即 $R \subseteq X \times X$ 是一个「自反、对称、传递」的子对象）都是**有效的**：

$$R \cong X \times_{Y} X,\qquad Y := \operatorname{coeq}\bigl(R \rightrightarrows X\bigr).$$

也就是说：等价关系的商存在，而且 $R$ 恰好是那个商的核对。

## 为什么成立（入边，证明在 proofs/）
- `def.condensed-set` 凝聚态集：用到了定义 凝聚态集　proofs/def-dep.condeq-condset.md
- `def.effective-equivalence` 有效等价关系：用到了定义 有效等价关系　proofs/def-dep.condeq-eff.md

refs: Le Stum, §4.1

> 说明见 `notes/prop.cond-equivalence-effective.md`
