# 伴随算子　`thm.adjoint-hilbert`
伴随算子存在且 $\|u^*\| = \|u\|$
layer 22 · 定理 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=thm.adjoint-hilbert)　·　[节点索引](../index.md)

设 $H, K$ 是 Hilbert 空间，$u \in B(H, K)$。则存在**唯一**的 $u^* \in B(K, H)$ 使

$$\langle u^*(x), y\rangle_H = \langle x, \, u(y)\rangle_K \qquad (x \in K,\ y \in H) ,$$

且 $\|u^*\| = \|u\|$。

## 为什么成立（入边，证明在 proofs/）
- [`thm.riesz-hilbert`](../nodes/thm.riesz-hilbert.md) Riesz 表示（Hilbert）：Riesz 表示 $\implies$ 伴随算子存在　[proofs/imp.fa-riesz-adjoint.md](../proofs/imp.fa-riesz-adjoint.md)

- …另有入边，续页见 [nodes/thm.adjoint-hilbert.2.md](./thm.adjoint-hilbert.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/thm.adjoint-hilbert.md`

引用：`thm.adjoint-hilbert`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
