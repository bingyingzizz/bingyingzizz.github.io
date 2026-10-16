# Dini 定理　`thm.dini`
定理（Dini）：紧集上单调的逐点收敛就是一致收敛
layer 16 · 定理 · 函数列、幂级数与初等函数 · 分析学
[在星图里打开](../#n=thm.dini)　·　[节点索引](../index.md)

设 $X$ 是**紧**度量空间，$f_n : X \to \mathbb{R}$ 连续、$f : X \to \mathbb{R}$ 连续，$f_n \to f$ **逐点**收敛，且 $\{f_n\}$ 单调（$f_n \le f_{n+1}$ 或 $f_n \ge f_{n+1}$ 对一切 $n$ 成立）。则

$$f_n \rightrightarrows f$$

## 为什么成立（入边，证明在 proofs/）
- [`def.uniform-convergence`](../nodes/def.uniform-convergence.md) 一致收敛 + [`def.continuous`](../nodes/def.continuous.md) 连续 + [`def.compact`](../nodes/def.compact.md) 紧：紧性 + 单调 + 连续性 $\implies$ Dini 定理　[proofs/imp.dini.md](../proofs/imp.dini.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 7

> 说明见 `notes/thm.dini.md`

引用：`thm.dini`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
