# 级数的 Cauchy 准则　`thm.cauchy-criterion-series`
定理：级数收敛 $\iff$ 尾部可以任意小
layer 18 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.cauchy-criterion-series)　·　[节点索引](../index.md)

设 $\{a_n\} \subseteq \mathbb{R}$，$s_N := \sum_{n=1}^{N} a_n$。则 $\sum a_n$ 收敛，当且仅当

$$\forall \varepsilon > 0,\ \exists N,\ \forall n > m \ge N :\ \Bigl| \sum_{k=m+1}^{n} a_k \Bigr| < \varepsilon$$

**必要条件**：$\sum a_n$ 收敛 $\implies$ $a_n \to 0$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.cauchy-criterion-series.2.md](./thm.cauchy-criterion-series.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.cauchy-criterion-series.3.md](./thm.cauchy-criterion-series.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.cauchy-criterion-series.md`

引用：`thm.cauchy-criterion-series`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
