# 指数映射　`def.exponential-map`　·　续页（第 2 页）
[在星图里打开](../#n=def.exponential-map)　·　第 1 页 [nodes/def.exponential-map.md](./def.exponential-map.md)

## 陈述（续）
 $p$ 附近就能用平面上的极坐标 $(\rho,\theta)$ 记账。
固定 $p \in S$。由测地线的**局部**存在唯一性，每个 $v \in T_{p}S$ 有唯一测地线 $\gamma_{v}$（定义在某个 $t \in (-\varepsilon, \varepsilon)$ 上）满足 $\gamma_{v}(0) = p$、$\dot\ga
mma_{v}(0) = v$。⚠ 局部唯一性**不保证** $\gamma_{v}$ 能走到 $t = 1$：所以指数映射只在$\operatorname{Dom}(\exp_{p}) := {\, v \in T_{p}S : \gamma_{v} \text{ 在 } t = 1 \text{ 处有定义}\,}
$ 上有定义（这是 $T_{p}S$ 中含 $0$ 的**星形开集**；反例：在开圆盘内取 $v = (2, 0, 0)$，测地线走不到 $t = 1$ 就离开了曲面）。**指数映射**定义为
$$\exp_{p}(v) = \gamma_{v}(1) = \gamma_{v/|v|}(|v|),\qquad \exp_{p}(0) = p,$$

它是 $T_{p}S$ 中原点的一个邻域到 $S$ 上 $p$ 的一个邻域的光滑映射，且
$$(\mathrm{d}\exp_{p})_{0} = \mathrm{id}_{T_{p}S},$$

> 续见 [nodes/def.exponential-map.3.md](./def.exponential-map.3.md)
