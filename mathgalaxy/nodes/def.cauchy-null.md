# Cauchy 列与零列　`def.cauchy-null`
有理 Cauchy 列 / 零列 / 等价（Cauchy & Null Sequences）
layer 10 · 定义 · 数系的构造 · 集合论+分析学

设 $(x_n)$ 是**有理数列**（即函数 $\omega \to \mathbb{Q}$），$|x|$ 是 $\mathbb{Q}$ 上的绝对值，$\varepsilon$ 一律取**正有理数**（此时还不需要实数）。

$(x_n)$ 是 **Cauchy 列**：

$$\forall \varepsilon > 0,\ \exists N,\ \forall m, n \ge N : |x_m - x_n| < \varepsilon$$
> 陈述续见 `nodes/def.cauchy-null.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.triangle` 三角不等式：三角不等式 $\implies$ 零列关系是等价关系　proofs/imp.triangle-cauchy.md
- `def.rat` 有理数 ℚ：用到了定义 有理数 ℚ　proofs/dep.rat-cauchy-null.md
- `def.function` 函数：用到了定义 函数　proofs/dep.function-cauchy-null.md
- `def.quotient-set` 商集与等价类：用到了定义 商集与等价类　proofs/dep.quotient-cauchy-null.md

- …另有入边，续页见 `nodes/def.cauchy-null.3.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/def.cauchy-null.4.md`

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/def.cauchy-null.md`
