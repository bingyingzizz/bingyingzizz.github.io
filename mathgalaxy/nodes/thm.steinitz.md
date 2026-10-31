# Steinitz 交换引理　`thm.steinitz`
定理（Steinitz）：交换引理
layer 9 · 定理 · 向量空间的基 · 抽象代数
[在星图里打开](../#n=thm.steinitz)　·　[节点索引](../index.md)

设 $V$ 是 $K$-向量空间，$S = (v_1, \ldots, v_n)$ 线性无关，$T = (w_1, \ldots, w_m)$ 生成 $V$。则

- $n \le m$；
- 可以从 $T$ 中**删去** $n$ 个向量、换入 $S$ 的全部向量，得到的 $m$ 个向量仍生成 $V$。特别地，$V$ 有一组基，其元素取自 $T \cup S$ 且含 $S$。

## 为什么成立（入边，证明在 proofs/）
- [`def.vs`](../nodes/def.vs.md) 向量空间的基：线性无关与生成的定义 $\implies$ 交换引理　[proofs/imp.steinitz.md](../proofs/imp.steinitz.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.steinitz.2.md](./thm.steinitz.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 2

> 说明见 `notes/thm.steinitz.md`

引用：`thm.steinitz`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
