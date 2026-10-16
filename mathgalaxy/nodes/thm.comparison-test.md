# 比较判别法　`thm.comparison-test`
定理：比较判别法（Comparison Test）
layer 15 · 定理 · 数项级数的敛散性 · 分析学
[在星图里打开](../#n=thm.comparison-test)　·　[节点索引](../index.md)

设 $0 \le a_n \le b_n$ 对充分大的 $n$ 成立。则

- $\sum b_n$ 收敛 $\implies$ $\sum a_n$ 收敛；
- $\sum a_n$ 发散 $\implies$ $\sum b_n$ 发散。

**极限形式**：若 $a_n, b_n > 0$ 且 $\dfrac{a_n}{b_n} \to L$，则 $L \in (0, +\infty)$ 时两者**同敛散**；$L = 0$ 时由 $\sum b_n$ 收敛推出 $\sum a_n$ 收敛。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.kummer`](../nodes/thm.kummer.md) Kummer 判别法
- ⇒ [`thm.root-test`](../nodes/thm.root-test.md) 根值判别法

- …另有出边，续页见 [nodes/thm.comparison-test.3.md](./thm.comparison-test.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.comparison-test.2.md](./thm.comparison-test.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.comparison-test.md`

引用：`thm.comparison-test`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
