# 三角态射的性质　`lem.triangle-morphism`　·　说明
根 `../`

**证明第 1 条。** 设三角 $K \xrightarrow{f} L \xrightarrow{g} M \xrightarrow{h} K[1]$ 到自身有态射 $(0, 0, w)$，于是 $g v = w g$、$h w = u[1] h$，即
$$w g = 0, \qquad h w = 0 .$$
- 由 $w g = 0$：把共调函子 $\operatorname{Hom}(-, M)$ 作用在三角上得长正合列 $\operatorname{Hom}(K[1], M) \xrightarrow{\;h^{*}\;} \operatorname{Hom}(M, M) \xrightarrow{\;g^{*}\;} \operatorname{Hom}(L, M)$，而 $g^{*}(w) = w g = 0$，所以 $w$ 落在 $\operatorname{im} h^{*}$ 里：存在 $w_{1} : K[1] \to M$ 使 **$w = w_{1} \circ h$**；
- 由 $h w = 0$ 得 $(h w_{1}) \circ h = 0$。把同一套正合列用在**旋转后**的三角 $L \xrightarrow{g} M \xrightarrow{h} K[1] \xrightarrow{-f[1]} L[1]$ 上（对着靶 $K[1]$），$(h w_{1}) \circ h = 0$ 给出 $h w_{1}$ 落在 $\operatorname{im}(-f[1])^{*}$ 里：存在 $\beta : L[1] \to K[1]$ 使 **$h w_{1} = -\beta \circ f[1]$**；
- 于是 $w^{2} = w_{1} h w_{1} h = w_{1}(h w_{1}) h = -w_{1}

> 续见 notes/lem.triangle-morphism.4.md
