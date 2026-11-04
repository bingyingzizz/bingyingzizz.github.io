# 黎曼 ζ 函数　`def.riemann-zeta`
黎曼 $\zeta$ 函数：$\zeta(s) = \sum_{n \ge 1} n^{-s}$（$\operatorname{Re}s > 1$）
layer 29 · 定义 · 数论函数与素数分布 · 数论+数学分析
[在星图里打开](../#n=def.riemann-zeta)　·　[节点索引](../index.md)

对 $\operatorname{Re} s > 1$ 定义

$$\zeta(s) := \sum_{n=1}^{\infty} \frac{1}{n^{s}} = \sum_{n=1}^{\infty} e^{-s\log n}.$$

这个级数在该半平面上**绝对收敛且内闭一致收敛**，所以 $\zeta$ 在 $\{\operatorname{Re} s > 1\}$ 上全纯。

## 为什么成立（入边，证明在 proofs/）
- [`def.series`](../nodes/def.series.md) 级数收敛：用到了定义 级数收敛　[proofs/dep.zeta-series.md](../proofs/dep.zeta-series.md)

- …另有入边，续页见 [nodes/def.riemann-zeta.2.md](./def.riemann-zeta.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.riemann-zeta.3.md](./def.riemann-zeta.3.md)

refs: Titchmarsh, The Theory of the Riemann Zeta-Function, Ch. 1–2

> 说明见 `notes/def.riemann-zeta.md`

引用：`def.riemann-zeta`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
