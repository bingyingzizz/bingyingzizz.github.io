# 对偶基　`def.dual-basis`
对偶基（Dual Basis）
layer 11 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.dual-basis)　·　[节点索引](../index.md)

设 $\mathcal{B} = (v_1, \ldots, v_n)$ 是 $V$ 的有序基。对每个 $i$ 定义 $v_i^{\ast} : V \to K$ 为

$$v_i^{\ast}(v_j) := \delta_{ij} = \begin{cases} 1, & i = j \\ 0, & i \ne j \end{cases}$$

（线性地延拓到整个 $V$。）则 $(v_1^{\ast}, \ldots, v_n^{\ast})$ 是 $V^{\ast}$ 的一组基，叫 $\mathcal{B}$ 的**对偶基**。于是在有限维时 $\dim V^{\ast} = \dim V$：

$$\dim V^{\ast} = \dim V$$

并且对任意 $\varphi \in V^{\ast}$ 有 $\varphi = \sum_i \varphi(v_i)\, v_i^{\ast}$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.dual-basis.2.md](./def.dual-basis.2.md)

refs: Lang, Linear Algebra

> 说明见 `notes/def.dual-basis.md`

引用：`def.dual-basis`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
