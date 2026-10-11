# 内部 Hom 的函数空间刻画　`prop.cond-internal-hom`
$C(X(\bullet), Y) \cong \operatorname{Hom}(X, Y)$
layer 17 · 命题 · 凝聚态集 · 凝聚态数学

设 $X$ 是凝聚态集、$Y$ 是紧生成空间（视为凝聚态集 $\underline{Y}$）。则凝聚态集之间有自然同构

$$C\bigl(X(\bullet),\ Y\bigr) \cong \operatorname{Hom}(X,\ \underline{Y}),$$

其中左边是「测试对象 $S \mapsto C\bigl(X(S), Y\bigr)$」（连续映射空间配紧开拓扑）所定的凝聚态集，右边是 $\mathrm{Cond}$ 的**内部 Hom**。
> 陈述续见 `nodes/prop.cond-internal-hom.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.condensed-set` 凝聚态集：用到了定义 凝聚态集　proofs/def-dep.condihom-condset.md
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.condihom-cg.md

refs: Le Stum, Proposition 4.2.6

> 说明见 `notes/prop.cond-internal-hom.md`
