# 多重线性型　`def.multilinear-form`
多重线性型 $V^{n} \to K$（Multilinear Form）
layer 9 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.multilinear-form)　·　[节点索引](../index.md)

设 $V$ 是 $K$-向量空间。映射 $f : V^{n} := V \times \cdots \times V \to K$ 叫 **$n$ 重线性型**，当且仅当固定任意 $n - 1$ 个变元后，剩下的那个变元是线性的：对每个 $i$，

$$f(\ldots, v_i + c\,w_i, \ldots) = f(\ldots, v_i, \ldots) + c\, f(\ldots, w_i, \ldots)$$

全体 $n$ 重线性型记 $\operatorname{Mult}_n(V; K)$，它按逐点运算成为 $K$-向量空间。
> 陈述续见 [nodes/def.multilinear-form.2.md](./def.multilinear-form.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.alternating-form`](../nodes/def.alternating-form.md) 交错型 用

- …另有出边，续页见 [nodes/def.multilinear-form.4.md](./def.multilinear-form.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.multilinear-form.3.md](./def.multilinear-form.3.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 5

> 说明见 `notes/def.multilinear-form.md`

引用：`def.multilinear-form`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
