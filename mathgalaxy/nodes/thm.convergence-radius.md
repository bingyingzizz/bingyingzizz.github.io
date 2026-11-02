# 收敛半径　`thm.convergence-radius`
定理：Cauchy–Hadamard 收敛半径
layer 17 · 定理 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=thm.convergence-radius)　·　[节点索引](../index.md)

设 $\sum a_n (x - x_0)^{n}$ 是幂级数，令（约定 $1/0 = +\infty$、$1/{+\infty} = 0$）

$$R := \frac{1}{\limsup_{n \to \infty} \sqrt[n]{|a_n|}}$$

则：$|x - x_0| < R$ 时级数**绝对收敛**；$|x - x_0| > R$ 时级数**发散**；$|x - x_0| = R$ 时**无结论**。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.power-series-analytic`](../nodes/thm.power-series-analytic.md) 幂级数的逐项运算

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.convergence-radius.2.md](./thm.convergence-radius.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 8

> 说明见 `notes/thm.convergence-radius.md`

引用：`thm.convergence-radius`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
