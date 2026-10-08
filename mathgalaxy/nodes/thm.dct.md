# 控制收敛定理　`thm.dct`
控制收敛定理（DCT, Dominated Convergence Theorem）
layer 19 · 定理 · 积分 · 分析学

设 $\{f_n\} \subseteq L^1$，$f_n \to f$ a.e.，且存在**控制函数** $g \in L^1$ 使

$$|f_n| \le g\quad  \text{a.e.}\quad  \forall n$$

则 $f \in L^1$ 且

$$\int f = \lim_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- `lem.fatou` Fatou 引理：Fatou $\implies$ 控制收敛定理　proofs/imp.dct.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-dct.md
- `def.lplus` L⁺：用到了定义 L⁺　proofs/def-link.lplus-dct.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.differentiate-under-integral` 交换极限/导数与积分
- ⇒ `thm.lp-banach` L^p 是 Banach 空间

refs: Folland, Real Analysis, Theorem 2.24

> 说明见 `notes/thm.dct.md`
