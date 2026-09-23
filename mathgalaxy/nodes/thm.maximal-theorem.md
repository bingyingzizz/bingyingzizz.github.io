# 极大定理　`thm.maximal-theorem`
极大定理（弱 (1,1) 不等式）
layer 22 · 定理 · 微分定理 · 分析学

存在常数 $C > 0$（只依赖维数 $n$），使对一切 $f \in L^1$ 与一切 $\alpha > 0$：

$$m(\{x : Hf(x) > \alpha\}) \le (C/\alpha)\cdot\int |f(x)| dx$$

## 为什么成立（入边，证明在 proofs/）
- `lem.covering` 覆盖引理 + `def.maximal-function` 极大函数：覆盖引理 $\implies$ 极大定理　proofs/imp.maximal-theorem.md
- `def.maximal-function` 极大函数：用到了定义 极大函数　proofs/def-link.maximal-theorem-lm.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.lebesgue-differentiation` Lebesgue 微分定理

refs: Folland, Real Analysis, Theorem 3.17

> 说明见 `notes/thm.maximal-theorem.md`
