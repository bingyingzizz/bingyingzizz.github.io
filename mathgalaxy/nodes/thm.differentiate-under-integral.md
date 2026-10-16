# 交换极限/导数与积分　`thm.differentiate-under-integral`
定理：在积分号下取极限与求导
layer 21 · 定理 · 积分 · 分析学
[在星图里打开](../#n=thm.differentiate-under-integral)　·　[节点索引](../index.md)

设 $f : X \times [a, b] \to \mathbb{C}$（$-\infty < a < b < \infty$），$f(\cdot, t)$ 对每个 $t \in [a, b]$ 都可积。记

$$F(t) := \int_X f(x, t) d\mu(x)$$

**(a) 连续性**：若存在 $g \in L^1(\mu)$ 使 $|f(x, t)| \le g(x)$ 对一切 $x, t$ 成立，且对每个 $x$ 有 $\lim_{t\to t_0} f(x, t) = f(x, t_0)$，则
> 陈述续见 [nodes/thm.differentiate-under-integral.2.md](./thm.differentiate-under-integral.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.differentiate-under-integral.3.md](./thm.differentiate-under-integral.3.md)

refs: Folland, Real Analysis, Theorem 2.27

> 说明见 `notes/thm.differentiate-under-integral.md`

引用：`thm.differentiate-under-integral`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
