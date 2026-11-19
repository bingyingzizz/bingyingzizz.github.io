# 积分绝对值不等式　`prop.integral-abs-ineq`
命题：$|\int f| \le \int |f|$
layer 27 · 命题 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=prop.integral-abs-ineq)　·　[节点索引](../index.md)

设 $f \in L^1(\mu)$，则

$$| \int f d\mu | \le \int |f| d\mu$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.integral-abs-ineq.2.md](./prop.integral-abs-ineq.2.md)

refs: Folland, Real Analysis, Prop. 2.22

## 说明
复情形：取 $\alpha = e^{-i\theta}$ 使 $\alpha\int f$ 是实数且等于 $|\int f|$，则 $|\int f| = \int \alpha f = \int \operatorname{Re}(\alpha f) \le \int|\alpha f| = \int|f|$。

引用：`prop.integral-abs-ineq`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
