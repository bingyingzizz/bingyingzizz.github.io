# 完备有序域的唯一性　`thm.real-unique`
任何完备有序域都与 $\mathbb{R}$ 同构（构造无关性）
layer 14 · 定理 · 数系的构造 · 集合论+分析学

设 $K$ 是**完备有序域**。则存在**唯一**的双射 $f : \mathbb{R} \to K$，它同时保持加法、乘法与序：

$$f(x + y) = f(x) + f(y), \qquad f(xy) = f(x)\,f(y), \qquad x \le y \iff f(x) \le f(y)$$

也就是说：$\mathbb{R}$ 之外没有别的完备有序域 —— 任何一个都与它同构。

## 为什么成立（入边，证明在 proofs/）
- `lem.archimedean` 阿基米德性质 + `def.real` 实数系 ℝ：$\mathbb{Q}$ 稠密 $\implies$ 完备有序域与 $\mathbb{R}$ 同构　proofs/imp.real-unique.md
- `def.ordered-field` 有序域：用到了定义 有序域　proofs/dep.ordered-unique.md

refs: Tao, Analysis I, Ch. 5（实数的构造）

> 说明见 `notes/thm.real-unique.md`
