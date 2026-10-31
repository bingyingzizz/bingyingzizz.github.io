# 指数映射　`def.exponential-map`　·　续页（第 2 页）
[在星图里打开](../#n=def.exponential-map)　·　第 1 页 [nodes/def.exponential-map.md](./def.exponential-map.md)

## 陈述（续）
 $p$ 附近就能用平面上的极坐标 $(\rho,\theta)$ 记账。
固定 $p \in S$。由测地线的存在唯一性，每个 $v \in T_{p}S$ 有唯一测地线 $\gamma_{v}$ 满足 $\gamma_{v}(0) = p$、$\dot\gamma_{v}(0) = v$。**指数映射**定义为
$$\exp_{p}(v) = \gamma_{v}(1) = \gamma_{v/|v|}(|v|),\qquad \exp_{p}(0) = p,$$

它是 $T_{p}S$ 中原点的一个邻域到 $S$ 上 $p$ 的一个邻域的光滑映射，且
$$(\mathrm{d}\exp_{p})_{0} = \mathrm{id}_{T_{p}S},$$
于是由反函数定理，$\exp_{p}$ 在原点附近是微分同胚。取 $T_{p}S$ 的一组单位正交基，把 $v = x^{1}e_{1}+x^{2}e_{2}$ 送到 $\exp_{p}(v)$ 得到的坐标叫**法坐标**；改用极坐标
 $(\rho,\theta)$ 则是**测地极坐标**。

> 续见 [nodes/def.exponential-map.3.md](./def.exponential-map.3.md)
