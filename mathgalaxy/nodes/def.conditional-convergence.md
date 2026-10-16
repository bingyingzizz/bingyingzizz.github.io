# 条件收敛　`def.conditional-convergence`
条件收敛（Conditional Convergence）
layer 16 · 定义 · 数项级数的敛散性 · 分析学
[在星图里打开](../#n=def.conditional-convergence)　·　[节点索引](../index.md)

称实（或复）级数 $\sum a_n$ **条件收敛**，当且仅当它收敛，但 $\sum |a_n|$ **发散**。

典型例子是交错调和级数：

$$\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} = \ln 2$$

它收敛，而取绝对值之后就是发散的调和级数。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.riemann-rearrangement`](../nodes/thm.riemann-rearrangement.md) Riemann 重排定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.conditional-convergence.2.md](./def.conditional-convergence.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/def.conditional-convergence.md`

引用：`def.conditional-convergence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
