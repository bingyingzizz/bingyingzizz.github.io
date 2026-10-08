# Hölder 不等式　`thm.holder`
Hölder 不等式
layer 18 · 定理 · L^p 空间 · 分析学

设 $1 < p < \infty$，$q$ 是 $p$ 的**共轭指数**：$\dfrac{1}{p} + \dfrac{1}{q} = 1$。则对可测 $f, g$：

$$\|fg\|_1 \le \|f\|_p \, \|g\|_q$$

## 为什么成立（入边，证明在 proofs/）
- `lem.young-inequality` Young 不等式：Young 不等式 $\implies$ Hölder 不等式　proofs/imp.holder.md
- `def.lp-norm` L^p 范数：用到了定义 L^p 范数　proofs/def-link.lp-holder.md
- `def.conjugate-exponents` 共轭指数：用到了定义 共轭指数　proofs/def-link.conjugate-holder.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.minkowski` Minkowski 不等式
- ⇒ `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q

refs: Folland, Real Analysis, Theorem 6.2

> 说明见 `notes/thm.holder.md`
