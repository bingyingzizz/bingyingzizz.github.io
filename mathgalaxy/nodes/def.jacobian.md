# Jacobi 矩阵　`def.jacobian`
Jacobi 矩阵（Jacobian Matrix）
layer 19 · 定义 · 多元微分 · 分析学
[在星图里打开](../#n=def.jacobian)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f = (f_1, \ldots, f_m) : U \to \mathbb{R}^{m}$ 在 $a$ 处各偏导都存在。$f$ 在 $a$ 的 **Jacobi 矩阵**是

$$J_f(a) := \Bigl( \frac{\partial f_i}{\partial x_j}(a) \Bigr)_{\substack{1 \le i \le m \\ 1 \le j \le n}} \in M_{m \times n}(\mathbb{R})$$

若 $f$ 在 $a$ 可微，则 $J_f(a)$ 正是线性映射 $Df(a)$ 在标准基下的矩阵。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.chain-rule-multi`](../nodes/thm.chain-rule-multi.md) 多元链式法则

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.jacobian.2.md](./def.jacobian.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Spivak, Calculus on Manifolds, Ch. 2

> 说明见 `notes/def.jacobian.md`

引用：`def.jacobian`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
