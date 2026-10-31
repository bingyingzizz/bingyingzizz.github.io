# 足够多内射 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`thm.pushforward-enough-injectives` 足够多内射层 + `prop.skyscraper-injective` 天际线层是内射层 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第三步：软层对 $\Gamma$ 无环。** 软层在仿紧 Hausdorff 上无环：给定软层 $\mathcal{S}$ 与短正合列 $0 \to \mathcal{S} \to \mathcal{A} \to \mathcal{B} \to 0$，要证 $\Gamma(\mathcal{A}) \to \Gamma(\mathcal{B})$ 满。取 $s \in \Gamma(\mathcal{B})$，用仿紧性 + 局部有限覆盖把它**局部**提升成一族局部截面，再用从属于该覆盖的单位分解把它们拼成一个整体截面 —— 拼的时候软性保证每步都合法。于是 $H^{n}(X, \mathcal{S}) = 0$（$n > 0$）。

> 续见 proofs/imp.paracompact-cech.6.md
