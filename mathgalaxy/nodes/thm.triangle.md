# 三角不等式　`thm.triangle`
三角不等式 $|x + y| \le |x| + |y|$
layer 9 · 定理 · 数系的构造 · 集合论+分析学

设 $K$ 是有序域（如 $\mathbb{Q}$、$\mathbb{R}$），$x, y \in K$。则

$$|x + y| \le |x| + |y|$$

并且由此得到两个常用的变形：

$$\big| |x| - |y| \big| \le |x - y|, \qquad |x_1 + x_2 + \cdots + x_n| \le |x_1| + |x_2| + \cdots + |x_n|$$

（后者由前者对 $n$ 归纳。）

## 为什么成立（入边，证明在 proofs/）
- `def.abs` 绝对值 |x|：绝对值的定义 $\implies$ 三角不等式　proofs/imp.triangle.md
- `def.ordered-field` 有序域：用到了定义 有序域　proofs/dep.ordered-triangle.md

## 它能推出什么 / 谁在用它
- ⇒ `def.cauchy-null` Cauchy 列与零列

refs: Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/thm.triangle.md`
