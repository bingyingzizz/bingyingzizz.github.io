# ℝ 不可数　`thm.real-uncountable`
实数集是稠密而不可数的：$|\mathbb{R}| = 2^{\aleph_0}$
layer 13 · 定理 · 数系的构造 · 分析学+集合论

**实数集 $\mathbb{R}$ 不可数**：不存在从 $\mathbb{N}$ 到 $\mathbb{R}$ 的满射，即 $\mathbb{R}$ 不能排成一个序列。

更强的结论：

$$|\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0} > \aleph_0$$

## 为什么成立（入边，证明在 proofs/）
- `thm.real-ordered-field` ℝ 是完备有序域：完备性（确界原理）$\implies \mathbb{R}$ 不可数（闭区间套 + 对角线）　proofs/imp.real-uncountable.md
- `def.countable` 可数与不可数：用到了定义 可数与不可数　proofs/dep.countable-uncountable.md
- `def.cardinal` 基数 |A|：用到了定义 基数 |A|　proofs/dep.cardinal-uncountable.md
- `thm.cantor` Cantor 定理：用到了定义 Cantor 定理　proofs/dep.cantor-uncountable.md

refs: Tao, Analysis I, Ch. 8（可数性）；Rudin, Principles of Mathematical Analysis, Ch. 2

> 说明见 `notes/thm.real-uncountable.md`
