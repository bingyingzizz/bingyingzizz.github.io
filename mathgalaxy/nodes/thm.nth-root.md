# n 次方根　`thm.nth-root`
定理：$n$ 次方根的存在唯一性（Existence of $n$-th Roots）
layer 14 · 定理 · 实数的运算与不等式 · 数学分析
[在星图里打开](../#n=thm.nth-root)　·　[节点索引](../index.md)

设 $K$ 是完备有序域（如 $\mathbb{R}$），$a > 0$，$n \ge 1$。则存在**唯一**的 $b > 0$ 使

$$b^{n} = a;$$

记 $b = \sqrt[n]{a} = a^{1/n}$。并且：

- $a \mapsto \sqrt[n]{a}$ 在 $(0, +\infty)$ 上严格递增；
- $\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}$，$\sqrt[n]{a^{m}} = \left(\sqrt[n]{a}\right)^{m}$（$m \in \mathbb{Z}$）。

## 它能推出什么 / 谁在用它
- ⇒ [`def.real-power`](../nodes/def.real-power.md) 有理指数与实数指数幂
- 被 [`def.complex`](../nodes/def.complex.md) 复数 ℂ 用

- …另有出边，续页见 [nodes/thm.nth-root.3.md](./thm.nth-root.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.nth-root.2.md](./thm.nth-root.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/thm.nth-root.md`

引用：`thm.nth-root`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
