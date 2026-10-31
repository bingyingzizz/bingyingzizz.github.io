# τ 与 σ 的乘积公式　`thm.divisor-formula`
用素因子分解算 $\tau(n)$ 与 $\sigma(n)$
layer 13 · 定理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=thm.divisor-formula)　·　[节点索引](../index.md)

设 $n = p_{1}^{e_{1}} \cdots p_{r}^{e_{r}}$。则

$$\tau(n) = \prod_{i=1}^{r} (e_{i} + 1), \qquad \sigma(n) = \prod_{i=1}^{r} \frac{p_{i}^{\,e_{i}+1} - 1}{p_{i} - 1} .$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.fundamental-arithmetic`](../nodes/thm.fundamental-arithmetic.md) 算术基本定理：$\tau$、$\sigma$ 的乘积公式：指数独立选取　[proofs/imp.nt-divisor-formula.md](../proofs/imp.nt-divisor-formula.md)

- …另有入边，续页见 [nodes/thm.divisor-formula.2.md](./thm.divisor-formula.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.divisor-formula.3.md](./thm.divisor-formula.3.md)

refs: 华罗庚《数论导引》第三章

> 说明见 `notes/thm.divisor-formula.md`

引用：`thm.divisor-formula`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
