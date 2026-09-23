# 单调收敛定理　`thm.mct`
单调收敛定理（MCT, Monotone Convergence Theorem）
layer 17 · 定理 · 积分 · 分析学

设 $\{f_n\} \subseteq L^+$ 满足

$$f_1 \le f_2 \le \cdots, \quad  f_n \uparrow  f\text{ 逐点}, $$

则

$$\int f = \lim_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- `def.integral-nonneg` 非负函数的积分 + `prop.simple-integral-props` 简单函数积分的性质：非负积分的定义 $\implies$ 单调收敛定理　proofs/imp.mct.md
- `def.integral-nonneg` 非负函数的积分：用到了定义 非负函数的积分　proofs/def-link.mct-nonneg.md
- `def.lplus` L⁺：用到了定义 L⁺　proofs/def-link.lplus-mct.md
- `def.series` 级数收敛：都是「取上确界」：把无穷一次性握在手里　proofs/ana.sup-extension.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.termwise-integration` 逐项积分
- ⇒ `lem.fatou` Fatou 引理
- ⇒ `thm.fubini-tonelli` Fubini–Tonelli

- …另有出边，续页见 `nodes/thm.mct.2.md`

refs: Folland, Real Analysis, Theorem 2.14

> 说明见 `notes/thm.mct.md`
