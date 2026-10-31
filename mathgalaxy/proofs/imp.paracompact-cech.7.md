# 足够多内射 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`thm.pushforward-enough-injectives` 足够多内射层 + `prop.skyscraper-injective` 天际线层是内射层 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第五步：去掉局部有限。** 一般开覆盖取局部有限细化 $\mathfrak{V} \preceq \mathfrak{U}$；细化映射 $\check{H}^{n}(\mathfrak{U}, \mathcal{M}) \to \check{H}^{n}(\mathfrak{V}, \mathcal{M})$ 与到 $H^{n}(X, \mathcal{M})$ 的规范映射相容，而后者已是同构，故沿覆盖取余极限仍得同构。∎

⚠️ 三个零件（Čech 正合、软性、软层无环）都**用到了仿紧性**：它同时提供「局部有限细化」与「单位分解」。去掉仿紧性，第一步或第二步会坏，结论就未必成立。

> 这条定理的形状是「造一个无环消解」：Čech 复形本身便宜，仿紧性负责让它无环，于是它就算出了层上同调。
