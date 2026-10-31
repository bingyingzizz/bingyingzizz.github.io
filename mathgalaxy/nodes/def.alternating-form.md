# 交错型　`def.alternating-form`
交错型（Alternating Form）与对称型
layer 10 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.alternating-form)　·　[节点索引](../index.md)

设 $f : V^{n} \to K$ 是多重线性型。

- $f$ 叫**对称的**，当且仅当对任意置换 $\sigma$ 有 $f(v_{\sigma(1)}, \ldots, v_{\sigma(n)}) = f(v_1, \ldots, v_n)$；
- $f$ 叫**交错的**，当且仅当任有两个变元相等时 $f = 0$；
- $f$ 叫**反称的**，当且仅当 $f(v_{\sigma(1)}, \ldots) = \operatorname{sgn}(\sigma)\, f(v_1, \ldots)$。

在域的特征 $\ne 2$ 时，**交错 $\iff$ 反称**。

## 它能推出什么 / 谁在用它
- 被 [`def.determinant`](../nodes/def.determinant.md) 行列式 用

- …另有出边，续页见 [nodes/def.alternating-form.3.md](./def.alternating-form.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.alternating-form.2.md](./def.alternating-form.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 5

> 说明见 `notes/def.alternating-form.md`

引用：`def.alternating-form`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
