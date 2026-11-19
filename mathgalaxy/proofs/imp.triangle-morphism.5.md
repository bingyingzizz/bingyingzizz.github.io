# imp.triangle-morphism
`imp.triangle-morphism` · 推出 · strong 边 · 根 `../`

`def.distinguished-triangle` 导出三角 + `def.homotopy` 同伦 + `thm.five-lemma` 五引理 + `lem.yoneda` 米田引理 → `lem.triangle-morphism` 三角态射的性质

**证明第 1 条。** 设三角 $K \xrightarrow{f} L \xrightarrow{g} M \xrightarrow{h} K[1]$ 到自身有态射 $(0, 0, w)$，于是 $g v = w g$、$h w = u[1] h$，即
$$w g = 0, \qquad h w = 0 .$$
- 由 $w g = 0$：把共调函子 $\operatorname{Hom}(-, M)$ 作用在三角上得长正合列 $\operatorname{Hom}(K[1], M) \xrightarrow{\;h^{*}\;} \operatorname{Hom}(M, M) \xrightarrow{\;g^{*}\;} \operatorname{Hom}(L, M)$，而 $g^{*}(w) = w g = 0$，所以 $w$ 落在 $\operatorname{im} h^{*}$ 里：存在 $w_{1} : K[1] \to M$ 使 **$w = w_{1} \circ h$**；

- 由 $h w = 0$ 得 $(h w_{1}) \circ h = 0$。

> 续见 proofs/imp.triangle-morphism.6.md
