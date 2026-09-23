# 级数收敛　`def.series`
级数 $\sum a_n$（Series）
layer 13 · 定义 · 实数与极限 · 分析学

给定数列 $\{a_n\}$，令**部分和** $s_N := \su
> 陈述续见 `nodes/def.series.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sequence-limit` 数列极限：用到了定义 数列极限　proofs/dep.real-series.md
- `def.bound` 界与确界：用到了定义 界与确界　proofs/dep.sup-series.md
- `thm.mct` 单调收敛定理：都是「取上确界」：把无穷一次性握在手里　proofs/ana.sup-extension.md

## 它能推出什么 / 谁在用它
- ～弱边 `thm.mct` 单调收敛定理

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

## 说明
⭐ 测度的**可数可加**、积分的**逐项**性质，用的都是非负项级数这一行：非负就不必担心条件收敛与重排。

⚠ 收敛级数**可以重排**的只有绝对收敛的情形；条件收敛的级数重排后可能收敛到别的值（Riemann 重排定理）。
