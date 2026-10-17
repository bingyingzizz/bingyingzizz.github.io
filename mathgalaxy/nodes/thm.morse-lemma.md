# Morse 引理　`thm.morse-lemma`
定理（Morse 引理）：非退化临界点附近的局部标准形
layer 24 · 定理 · 多元微分 · 分析学
[在星图里打开](../#n=thm.morse-lemma)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}$ 是 $C^{k+2}$（$k \ge 1$），$a$ 是 $f$ 的**非退化临界点**（即 $\nabla f(a) = 0$ 且 $\det H_f(a) \ne 0$）。记 $H_f(a)$ 的负特征值个数为 $k$。则存在 $a$ 附近的光滑坐标 $u = (u_1, \ldots, u_n)$（$u(a) = 0$）使

$$f = f(a) - u_1^{2} - \cdots - u_k^{2} + u_{k+1}^{2} + \cdots + u_n^{2}$$

$k$ 叫 $f$ 在 $a$ 的 **Morse 指数**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.morse-lemma.2.md](./thm.morse-lemma.2.md)

refs: Milnor, Morse Theory, §2；Guillemin–Pollack, Differential Topology, §1

> 说明见 `notes/thm.morse-lemma.md`

引用：`thm.morse-lemma`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
