# 三角态射的性质　`lem.triangle-morphism`　·　说明
根 `../`

若 $u, v$ 是同伦等价，则 $u_{*}, v_{*}$ 以及它们的平移 $u[1]_{*}, v[1]_{*}$ 都是双射 —— 五引理把中间的 $w_{*}$ 夹成双射。这对**每个** $T$ 都成立，于是由 Yoneda 引理，$w$ 本身就是同伦等价。∎

**证明第 1 条。** 设三角 $K \xrightarrow{f} L \xrightarrow{g} M \xrightarrow{h} K[1]$ 到自身有态射 $(0, 0, w)$，于是 $g v = w g$、$h w = u[1] h$，即
$$w g = 0, \qquad h w = 0 .$$
- 由 $w g = 0$：把共调函子 $\operatorname{Hom}(-, M)$ 作用在三角上得长正合列 $\operatorname{Hom}(K[1], M) \xrightarrow{\;h^{*}\;} \operatorname{Hom}(M, M) \xrightarrow{\;g^{*}\;} \operatorname{Hom}(L, M)$，而 $g^{*}(w) = w g = 0$，所以 $w$ 落在 $\operatorname{im} h^{*}$ 里：存在 $w_{1} : K[1] \to M$ 使 **$w = w_{1} \circ h$**；

- 由 $h w = 0$ 得 $(h w_{1}) \circ h = 0$。

> 续见 notes/lem.triangle-morphism.3.md
