# 测地线的局部存在唯一性　`prop.geodesic-existence`　·　续页（第 2 页）
[在星图里打开](../#n=prop.geodesic-existence)　·　第 1 页 [nodes/prop.geodesic-existence.md](./prop.geodesic-existence.md)

## 陈述（续）
唯一性，没有任何几何玄机；它的用途是把「方向」变成「位置」（下一站的指数映射）。
对任意 $p \in S$ 与任意 $v \in T_{p}S$，存在 $\varepsilon > 0$ 与唯一的测地线 $\gamma_{v} : (-\varepsilon,\varepsilon)\to S$ 使 $\gamma_{v}(0) = p$、$\dot\gamma_{v}(
0) = v$。
并且解光滑依赖于初值 $(p,v)$，还满足齐次性

$$\gamma_{cv}(t) = \gamma_{v}(ct)\qquad (c \in \mathbb{R}),$$
于是从任意一点沿任意方向都能出发，而「出发速度的大小」只决定走多快、不决定走哪条。
⚠️ 齐次性里**不需要** $c > 0$：$c = 0$ 时右边是常值曲线；$c < 0$ 时是沿同一条测地线**反向**走（把 $s \mapsto cs$ 代入测地线方程即可，方
程对仿射重参数化不变）。所以 $c \in \mathbb{R}$ 全成立，只要两边参数都落在定义域内。

> 续见 [nodes/prop.geodesic-existence.3.md](./prop.geodesic-existence.3.md)
