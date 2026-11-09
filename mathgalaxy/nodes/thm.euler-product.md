# Euler 乘积　`thm.euler-product`
Euler 乘积：$\zeta(s) = \prod_{p}\bigl(1 - p^{-s}\bigr)^{-1}$（$\operatorname{Re}s > 1$）
layer 30 · 定理 · 数论函数与素数分布 · 数论+数学分析
[在星图里打开](../#n=thm.euler-product)　·　[节点索引](../index.md)

对 $\operatorname{Re} s > 1$，

$$\zeta(s) \;=\; \prod_{p\ \text{素数}} \frac{1}{1 - p^{-s}},$$

右端的无穷乘积绝对收敛。

## 为什么成立（入边，证明在 proofs/）
- [`def.riemann-zeta`](../nodes/def.riemann-zeta.md) 黎曼 ζ 函数：用到了定义 黎曼 ζ 函数　[proofs/dep.euler-zeta.md](../proofs/dep.euler-zeta.md)

- …另有入边，续页见 [nodes/thm.euler-product.2.md](./thm.euler-product.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.prime-number-theorem`](../nodes/thm.prime-number-theorem.md) 素数定理

- …另有出边，续页见 [nodes/thm.euler-product.3.md](./thm.euler-product.3.md)

refs: Apostol, Introduction to Analytic Number Theory, Ch. 11

> 说明见 `notes/thm.euler-product.md`

引用：`thm.euler-product`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
