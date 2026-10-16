# Kummer 判别法　`thm.kummer`
定理：Kummer 判别法（正项级数判据的总纲）
layer 16 · 定理 · 数项级数的敛散性 · 分析学
[在星图里打开](../#n=thm.kummer)　·　[节点索引](../index.md)

设 $\sum a_n$ 是**正项**级数（$a_n > 0$），$\{c_n\}$ 是一列正数。令

$$K_n := c_n \cdot \frac{a_n}{a_{n+1}} - c_{n+1}$$

则：

- **收敛**：若 $\liminf_{n \to \infty} K_n > 0$，则 $\sum a_n$ 收敛；
- **发散**：若 $\sum \frac{1}{c_n}$ 发散，且 $K_n \le 0$ 对充分大的 $n$ 成立，则 $\sum a_n$ 发散。

## 为什么成立（入边，证明在 proofs/）
- [`thm.comparison-test`](../nodes/thm.comparison-test.md) 比较判别法：比较判别法 $\implies$ Kummer 判别法　[proofs/imp.kummer.md](../proofs/imp.kummer.md)

refs: Knopp, Theory and Application of Infinite Series；Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.kummer.md`

引用：`thm.kummer`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
