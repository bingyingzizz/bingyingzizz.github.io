# 单调有界定理　`thm.monotone-convergence`
单调有界定理
layer 14 · 定理 · 实数完备性的等价刻画 · 数学分析
[在星图里打开](../#n=thm.monotone-convergence)　·　[节点索引](../index.md)

设 $\{x_n\} \subseteq \mathbb{R}$。

- 若 $x_n$ 递增（$x_1 \le x_2 \le \cdots$）且有上界，则 $\{x_n\}$ 收敛，且

$$\lim_{n \to \infty} x_n = \sup_{n} x_n$$

- 若 $x_n$ 递减且有下界，则 $\{x_n\}$ 收敛，且 $\lim_{n \to \infty} x_n = \inf_{n} x_n$。

## 它能推出什么 / 谁在用它
- ⇒ [`lem.nested-intervals`](../nodes/lem.nested-intervals.md) 闭区间套定理

- …另有出边，续页见 [nodes/thm.monotone-convergence.3.md](./thm.monotone-convergence.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.monotone-convergence.2.md](./thm.monotone-convergence.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.monotone-convergence.md`

引用：`thm.monotone-convergence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
