# 二次型　`def.quadratic-form`
二次型与正定性
layer 11 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.quadratic-form)　·　[节点索引](../index.md)

设 $A \in M_n(\mathbb{R})$ 对称。由它给出的函数

$$q(x) := x^{\mathsf{T}} A\, x = \sum_{i, j} a_{ij}\, x_i x_j \in \mathbb{R}, \qquad x \in \mathbb{R}^{n}$$

叫**二次型**（它是 $x$ 的二次齐次函数）。称 $q$（或 $A$）：

- **正定**：$x \ne 0 \implies q(x) > 0$；
- **半正定**：$x \ne 0 \implies q(x) \ge 0$；
- **负定** / **不定** 同理定义。
> 陈述续见 [nodes/def.quadratic-form.2.md](./def.quadratic-form.2.md)


## 它能推出什么 / 谁在用它
- 被 [`thm.sylvester-criterion`](../nodes/thm.sylvester-criterion.md) Sylvester 判据 用

- …另有出边，续页见 [nodes/def.quadratic-form.4.md](./def.quadratic-form.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.quadratic-form.3.md](./def.quadratic-form.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8；Roman, Advanced Linear Algebra, Ch. 11

> 说明见 `notes/def.quadratic-form.md`

引用：`def.quadratic-form`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
