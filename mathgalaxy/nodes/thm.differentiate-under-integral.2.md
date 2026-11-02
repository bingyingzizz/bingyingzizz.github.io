# 交换极限/导数与积分　`thm.differentiate-under-integral`　·　续页（第 2 页）
[在星图里打开](../#n=thm.differentiate-under-integral)　·　第 1 页 [nodes/thm.differentiate-under-integral.md](./thm.differentiate-under-integral.md)

## 陈述（续）
**(a) 连续性**：若存在 $g \in L^1(\mu)$ 使 $|f(x, t)| \le g(x)$ 对一切 $x, t$ 成立，且对每个 $x$ 有 $\lim_{t\to t_0} f(x, t) = f(x, t_0)$，则

$$\lim_{t\to t_0} F(t) = F(t_0)$$
**(b) 求导**：若 $\partial f / \partial t$ 处处存在，且存在 $g \in L^1(\mu)$ 使 $| \partial f / \partial t(x, t) | \le g(x)$ 对一切 $x, t$ 成立，则 $F$ 可微，且

$$F'(t) = \int_X \partial f / \partial t(x, t) d\mu(x)$$

> 续见 [nodes/thm.differentiate-under-integral.3.md](./thm.differentiate-under-integral.3.md)
