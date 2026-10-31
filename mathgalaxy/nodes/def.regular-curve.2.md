# 正则曲线　`def.regular-curve`　·　续页（第 2 页）
[在星图里打开](../#n=def.regular-curve)　·　第 1 页 [nodes/def.regular-curve.md](./def.regular-curve.md)

## 陈述（续）
设 $I \subseteq \mathbb{R}$ 是区间，$\gamma : I\to\mathbb{R}^{3}$ 是 $C^{\infty}$ 映射，写成 $\gamma(t) = (x(t),y(t),z(t))$；$t$ 叫**参数**，$\gamma$ 的像叫**参数曲线**。**速度**逐分量求导：
$$\gamma'(t) = \bigl(x'(t),\ y'(t),\ z'(t)\bigr).$$
若 $\gamma'(t)\ne 0$ 对一切 $t$ 成立，称 $\gamma$ **正则**，$t$ 叫正则参数，像集叫**正则曲线**；此时 $\gamma'(t)$ 张成的一维子空间叫 $t$ 处的**切线方向**。若 $\gamma$ 还是单射且逆连
续，叫**简单曲线**。
**反例**：$\gamma(t) = (t^{2},t^{3})$ 在 $t = 0$ 处 $\gamma' = (0,0)$，像集是尖点，那里没有切线 —— 可见「像集有尖点」与「参数不正则」是同一件事的两面。

> 续见 [nodes/def.regular-curve.3.md](./def.regular-curve.3.md)
