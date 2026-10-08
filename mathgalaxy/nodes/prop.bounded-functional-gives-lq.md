# 有界 ⟹ g ∈ L^q　`prop.bounded-functional-gives-lq`
命题：若 $f \mapsto \int fg$ 在简单函数上有界，则 $g \in L^q$
layer 19 · 命题 · L^p 空间 · 分析学

设 $g$ 在 $(X, \mathcal{M})$ 上可测，且对**每个有限支集的简单函数** $f$ 都有 $fg \in L^1$。记

$$M_g(g) := \sup \left\{ \, \left| \int fg \right| : f \in \Sigma,\ \|f\|_p = 1 \,\right\}$$

（$\Sigma$ $=$ 有限支集简单函数全体。）若 $M_g(g) < \infty$，且
> 陈述续见 `nodes/prop.bounded-functional-gives-lq.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.holder` Hölder 不等式 + `def.duality-map` 对偶配对 φ_g：Hölder + 有界性 $\implies$ $g \in L^q$　proofs/imp.bounded-gives-lq.md
- `def.duality-map` 对偶配对 φ_g：用到了定义 对偶配对 φ_g　proofs/def-link.duality-bounded.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.riesz-representation-lp` (L^p)* ≅ L^q

refs: Folland, Real Analysis, Theorem 6.14

> 说明见 `notes/prop.bounded-functional-gives-lq.md`
