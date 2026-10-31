# 闭区间套定理　`lem.nested-intervals`
引理：闭区间套定理
layer 15 · 引理 · 实数完备性的等价刻画 · 数学分析
[在星图里打开](../#n=lem.nested-intervals)　·　[节点索引](../index.md)

设 $I_n = [a_n, b_n]$ 是一列**闭**区间，满足

- $I_1 \supseteq I_2 \supseteq \cdots$（嵌套），
- $b_n - a_n \to 0$（长度趋于零）。

则 $\bigcap_{n=1}^{\infty} I_n$ 恰含**一个**点。

## 为什么成立（入边，证明在 proofs/）
- [`thm.monotone-convergence`](../nodes/thm.monotone-convergence.md) 单调有界定理：单调有界定理 $\implies$ 闭区间套定理　[proofs/imp.monotone-nested.md](../proofs/imp.monotone-nested.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/lem.nested-intervals.2.md](./lem.nested-intervals.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/lem.nested-intervals.md`

引用：`lem.nested-intervals`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
