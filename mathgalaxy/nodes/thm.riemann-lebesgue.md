# Riemann–Lebesgue 引理　`thm.riemann-lebesgue`
Riemann–Lebesgue 引理：Fourier 系数趋于零
layer 17 · 定理 · Riemann 积分 · 数学分析+拓扑学
[在星图里打开](../#n=thm.riemann-lebesgue)　·　[节点索引](../index.md)

**在说什么**：高频振荡把积分抹平。它既是 Fourier 级数收敛性的第一步，也是「Riemann 可积函数在频率轴上衰减」的定量说法。

设 $f$ 在 $[a, b]$ 上 **Riemann 可积**。则

$$\lim_{|\lambda| \to \infty} \int_{a}^{b} f(x)\, e^{i\lambda x}\, dx = 0 .$$
> 陈述续见 [nodes/thm.riemann-lebesgue.2.md](./thm.riemann-lebesgue.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.riemann-lebesgue.3.md](./thm.riemann-lebesgue.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6（振荡与逼近）；Zygmund, Trigonometric Series

> 说明见 `notes/thm.riemann-lebesgue.md`

引用：`thm.riemann-lebesgue`（内容 v0.9.2）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
