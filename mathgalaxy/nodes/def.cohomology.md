# 同调　`def.cohomology`
同调（Cohomology）
layer 13 · 定义 · 同调与正合列 · 同调代数

设 $\mathcal{A}$ 是阿贝尔范畴，$K$ 是 $\mathcal{A}$ 中的上链复形。$K$ 的**第 $n$ 阶同调**是
> 陈述续见 `nodes/def.cohomology.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.complex-cohomology.md
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.equalizer-cohomology.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.long-exact` 长正合列
- 被 `thm.long-exact` 长正合列 用
- 被 `def.cohomological-functor` 上同调函子 用
- 被 `def.quasi-iso` 拟同构 用

## 说明
例：$H^{n}(K[k]) = H^{n+k}(K)$；$M \in \mathcal{A}$ 时 $H^{0}([M]) = M$、其余为 $0$；$H^{0}([M \to N]) = \ker f$、$H^{1}([M \to N]) = \operatorname{coker} f$。

$H^{n}$ 是**函子**，但它是**加法而不正合**的 —— 同调不可交换性是整个同调代数的起点。
